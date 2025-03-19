import { ref, toRefs, computed, ComputedRef, onMounted } from 'vue';
import classNames from 'classnames';
import type { SetupContext } from 'vue';
import type { ListPropTypes, MenuListType } from '../list';
import { LadderizedListPropTypes, LadderizedListEmitTypes } from './ladderized-list';
import { useVModel } from '@vueuse/core'

interface LadderizedListClasses {
  backListClass: string;
}

export const useLadderizedList = (props: LadderizedListPropTypes, emit: SetupContext<LadderizedListEmitTypes>['emit']) => {
  const ladderizedListOutput = useVModel(props, 'modelValue', emit); // List of items for v-model
  const transitionName = ref("slide-left");
  
  const selectedListItem = ref<MenuListType[]>([]); // List of items for recording the selected item

  const activeLevel = ref(0);
  const activeList =  ref<MenuListType[]>(props.menuList);  // List of items to display in the active level

  const handleSelectedListItem = (item: MenuListType) => {
    transitionName.value = "slide-left";
    // Update the selectedListItem array
    // Update if existing item, else push new item
    if(selectedListItem.value[activeLevel.value]) {
      selectedListItem.value[activeLevel.value] = item;
    } else {
      selectedListItem.value.push(item);
    }

    // Update the activeList and activeLevel
    if (item.sublevel) { 
      activeList.value = item.sublevel;
      activeLevel.value += 1;
    }

    if (!selectedListItem.value[0].sublevel) return;

    // Update the ladderizedListOutput text and value
    // Update output text
    if (ladderizedListOutput.value.text !== "") {
      const textArray = ladderizedListOutput.value.text.split(", ");
      textArray?.push(item.text);
      ladderizedListOutput.value.text = textArray?.join(", ") ?? "";
    } else {
      ladderizedListOutput.value.text = item.text;
    }
    // Update output value
    ladderizedListOutput.value.value.push(item.value.toString());

  };

  const handleBackClick = () => {
    transitionName.value = "slide-right";
    activeLevel.value -= 1;
    if (activeLevel.value > 0) {
      // Update output text
      const textArray = ladderizedListOutput.value.text.trim().split(",");
      textArray?.pop();
      ladderizedListOutput.value.text = textArray?.join(", ") ?? "";
      // Update output value
      const valueArray = ladderizedListOutput.value.value;
      valueArray?.pop();
      ladderizedListOutput.value.value = valueArray ?? [];

      // Get previous activeList from menuList
      for (let i = 0; i < activeLevel.value; i++) {
        activeList.value = props.menuList.find(item => item.value === ladderizedListOutput.value.value[i])?.sublevel ?? [];
      }
    } else {
      // Rest values
      activeList.value = props.menuList;
      ladderizedListOutput.value.text = "";
      ladderizedListOutput.value.value = [];
    }
  };

  return { 
    activeLevel, 
    activeList, 
    handleSelectedListItem, 
    handleBackClick, 
    selectedListItem, 
    transitionName,
    ladderizedListOutput
  };
};
