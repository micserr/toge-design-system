import { computed, onBeforeMount, ref, toRefs } from 'vue';
import { useVModel } from '@vueuse/core';

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
  const prevList = ref<MenuListType[]>([]);

  const handleSelectedListItem = (item: MenuListType) => {
    transitionName.value = 'slide-left';
    // Update UI for selectedListItem
    updateSelectedListItem(item);

    const isSameLevel = computed(() => prevList.value.some((listItem) => listItem.value === item.value));

    // Update the activeList and activeLevel
    if (!isSameLevel.value) {
      appendItemToOutput(item);
    } else {
      replaceItemInOutput(item);
    }

    if (item.sublevel && item.sublevel.length > 0) updateLevel(item);
    // Update output value
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
    if (ladderizedListOutput.value[ladderizedListOutput.value.length - 1] === item.value) return;

    // Update back label text
    if (backLabel.value !== '') {
      const textArray = backLabel.value.split(', ');
      textArray?.push(item.text);
      backLabel.value = textArray?.join(', ') ?? '';
    } else {
      backLabel.value = item.text;
    }

    // Update output value
    ladderizedListOutput.value.push(item.value.toString());
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
    valueArray?.push(item.value);
    ladderizedListOutput.value = valueArray ?? [];
  };

  const handleBackClick = () => {
    transitionName.value = 'slide-right';
    activeLevel.value -= 1;
    if (activeLevel.value > 0) {
      // Update back label text
      const textArray = backLabel.value.trim().split(',');
      textArray?.pop();
      backLabel.value = textArray?.join(', ') ?? '';
      // Update output value
      const valueArray = ladderizedListOutput.value;
      valueArray?.pop();
      ladderizedListOutput.value = valueArray ?? [];

      // Get previous activeList from menuList
      for (let i = 0; i < activeLevel.value; i++) {
        activeList.value = props.menuList.find((item) => item.value === ladderizedListOutput.value[i])?.sublevel ?? [];
      }
    } else {
      // Reset values
      activeList.value = props.menuList;
      ladderizedListOutput.value = [];
      backLabel.value = '';
      activeLevel.value = 0;
    }
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
          activeLevel.value += item.sublevel ? 1 : 0;
        } else {
          // If no item found, skip the for loop
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
  };
};
