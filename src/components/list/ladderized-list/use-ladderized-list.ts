import { onBeforeMount, ref, toRefs, watch } from 'vue';
import { useVModel, watchDeep } from '@vueuse/core';
import { LadderizedListPropTypes, LadderizedListEmitTypes } from './ladderized-list';
import type { SetupContext } from 'vue';
import type { MenuListType } from '../list';

export const useLadderizedList = (
  props: LadderizedListPropTypes,
  emit: SetupContext<LadderizedListEmitTypes>['emit'],
) => {
  const ladderizedListOutput = useVModel(props, 'modelValue', emit); // List of items for v-model
  const { menuList, removeCurrentLevelInBackLabel } = toRefs(props);
  const transitionName = ref('slide-left');
  const backLabel = ref('');

  // Variables used for internal logic
  const selectedListItem = ref<MenuListType[]>([]); // List of items for recording the selected item
  const activeLevel = ref(0);
  const activeList = ref<MenuListType[]>(menuList.value); // List of items to display in the active level
  const searchText = ref('');

  const modelValueIsCustom = ref(false);

  // Recursive filter function for ladderized options
  const filterOptionsRecursive = (items: MenuListType[], search: string): MenuListType[] => {
    if (!search) return items;

    const lowerSearch = search.toLowerCase();

    return items
      .map((item) => {
        let match =
          item.text.toLowerCase().includes(lowerSearch) ||
          (item.subtext && item.subtext.toLowerCase().includes(lowerSearch));

        const filteredSublevel = item.sublevel ? filterOptionsRecursive(item.sublevel, search) : undefined;

        if (filteredSublevel && filteredSublevel.length > 0) match = true;

        if (match) {
          return {
            ...item,
            sublevel: filteredSublevel,
          };
        }

        return null;
      })
      .filter(Boolean) as MenuListType[];
  };

  // Watch for searchText changes and update activeList
  watch(searchText, (val) => {
    if (val) {
      activeList.value = filterOptionsRecursive(menuList.value, val);
    } else {
      activeList.value = menuList.value;
    }
  });

  const prevList = ref<MenuListType[]>([]);

  // Helper to find full path to a value in a nested options tree, returns array of option objects
  const findOptionPath = (
    options: MenuListType[],
    targetValue: string,
    path: MenuListType[] = [],
  ): MenuListType[] | null => {
    for (const item of options) {
      const newPath = [...path, item];

      if (String(item.value) === String(targetValue)) {
        return newPath;
      }

      if (item.sublevel) {
        const found = findOptionPath(item.sublevel, targetValue, newPath);

        if (found) return found;
      }
    }

    return null;
  };

  const handleSelectedListItem = (item: MenuListType) => {
    transitionName.value = 'slide-left';

    if (modelValueIsCustom.value) {
      console.log("Custom");
      ladderizedListOutput.value.shift();
      modelValueIsCustom.value = false;
    };

    // If searching, reconstruct full path as array of option objects
    if (searchText.value) {
      const path = findOptionPath(menuList.value, String(item.value));

      if (path) {
        selectedListItem.value = path;

        emit(
          'update:modelValue',
          path.map((opt) => String(opt.value)),
        );
        return;
      }
    }

    updateSelectedListItem(item);

    const isSameLevel = prevList.value.some((listItem) => listItem.value === item.value);

    if (!isSameLevel) {
      appendItemToOutput(item);
    } else {
      replaceItemInOutput(item);
    }

    if (item.sublevel && item.sublevel.length > 0) updateLevel(item); // FIXME: This causes activeLevel one less than expected. Currently not critical since most forms are 2 levels deep.
    emit('update:modelValue', ladderizedListOutput.value);
  };

  // Update UI display for selectedListItem
  const updateSelectedListItem = (item: MenuListType) => {
    if (selectedListItem.value[activeLevel.value]) {
      selectedListItem.value[activeLevel.value] = item;
    } else {
      selectedListItem.value.push(item);
    }
  };

  // Update the activeList, prevList and activeLevel
  const updateLevel = (item: MenuListType) => {
    activeLevel.value += 1;
    prevList.value = activeList.value;
    activeList.value = item.sublevel ?? activeList.value;
  };

  // Append the new item to the output
  const appendItemToOutput = (item: MenuListType) => {
    // Prevent spamming the same item
    if (ladderizedListOutput.value[ladderizedListOutput.value.length - 1] === String(item.value)) return;

    // Update back label text
    if (backLabel.value !== '') {
      const textArray = backLabel.value.split(', ');
      textArray?.push(item.text);
      backLabel.value = textArray?.join(', ') ?? '';
    } else {
      backLabel.value = item.text;
    }

    // Update output value
    ladderizedListOutput.value.push(String(item.value));
  };

  // Replace the last item in the output with the new item
  const replaceItemInOutput = (item: MenuListType) => {
    // Update back label text
    const textArray = backLabel.value.trim().split(',');
    textArray?.pop();
    textArray?.push(item.text);
    backLabel.value = textArray?.join(', ') ?? '';

    // Update output value
    const valueArray = ladderizedListOutput.value;
    valueArray?.pop();
    valueArray?.push(String(item.value));
    ladderizedListOutput.value = valueArray ?? [];
  };

  const handleBackClick = () => {
    transitionName.value = 'slide-right';
    // Decrement level but clamp at 0
    activeLevel.value = Math.max(activeLevel.value - 1, 0);

    // Remove last selected value/path segment
    if (ladderizedListOutput.value.length > activeLevel.value) {
      ladderizedListOutput.value = ladderizedListOutput.value.slice(0, activeLevel.value);
    }
    if (selectedListItem.value.length > activeLevel.value) {
      selectedListItem.value = selectedListItem.value.slice(0, activeLevel.value);
    }

    if (activeLevel.value === 0) {
      // Root reset
      activeList.value = props.menuList;
      prevList.value = [];
      backLabel.value = '';
      return;
    }

    // Reconstruct activeList by walking from root using remaining value path
    let cursor: MenuListType[] = props.menuList;
    for (let i = 0; i < activeLevel.value; i++) {
      const val = ladderizedListOutput.value[i];
      const found = cursor.find((item) => String(item.value) === String(val));
      cursor = found?.sublevel ?? [];
    }
    activeList.value = cursor;
    prevList.value = cursor; // maintain prevList for forward navigation consistency

    // Recompute back label from selectedListItem values (excluding current level if prop set)
    const computeBackLabel = () => {
      const texts = selectedListItem.value.map((itm) => itm.text);
      if (removeCurrentLevelInBackLabel.value && texts.length > 0) {
        texts.pop();
      }
      return texts.join(', ');
    };
    backLabel.value = computeBackLabel();
  };

  const initializeMenuList = () => {
    if (ladderizedListOutput.value && ladderizedListOutput.value.length > 0) {
      // Reset values
      const tempBackLabel: string[] = [];

      prevList.value = [];

      // On initialize, traverse through the activeList based from ladderizedListOutput
      ladderizedListOutput.value.forEach((preSelectedItem: string) => {
        const item = activeList.value.find((menuItem) => String(menuItem.value) === String(preSelectedItem));

        if (item) {
          updateSelectedListItem(item);

          tempBackLabel.push(item.text);

          prevList.value = activeList.value;
          activeList.value = item.sublevel ?? prevList.value;
          activeLevel.value += item.sublevel ? 1 : 0; // FIXME: This causes activeLevel one less than expected. Currently not critical since most forms are 2 levels deep.
        } else {
          // If no item found, rest the values to initial state
          selectedListItem.value = [];
          prevList.value = [];
          activeList.value = menuList.value;
          activeLevel.value = 0;
          modelValueIsCustom.value = true;
          return;
        }
      });

      if (removeCurrentLevelInBackLabel.value && tempBackLabel.length > 0) {
        tempBackLabel.pop();
      }

      // Update back label text
      backLabel.value = tempBackLabel.length > 0 ? tempBackLabel.join(', ') : 'Back';
    }
  };

  // Watch for modelValue changes and reset selectedListItem if cleared
  watchDeep(
    ladderizedListOutput,
    (newVal) => {
      if (!newVal || (Array.isArray(newVal) && newVal.length === 0)) {
        selectedListItem.value = [];
      }
    },
  );

  onBeforeMount(() => {
    activeList.value = menuList.value;
    initializeMenuList();
  });

  return {
    activeLevel,
    activeList,
    handleSelectedListItem,
    handleBackClick,
    selectedListItem,
    transitionName,
    backLabel,
    searchText,
  };
};
