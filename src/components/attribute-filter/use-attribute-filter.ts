import type { MenuListType } from '../list/list';
import type { AttributeFilterPropTypes, AttributeFilterEmitTypes } from './attribute-filter';
import { onMounted, ref, toRefs, watch, type SetupContext, type Ref } from 'vue';
import { useInfiniteScroll } from '@vueuse/core';
export const useAttributeFilter = (
  props: AttributeFilterPropTypes,
  emit: SetupContext<AttributeFilterEmitTypes>['emit'],
  searchModel: Ref<string>,
) => {
  const isFilterActive = ref(false);
  const isSearchFocused = ref(false);  
  const selectedFilters = ref<MenuListType[]>([]);
  const savedFilters = ref<MenuListType[]>([]);  
  const isSaving = ref(false);
  const filterDropdownRef = ref<HTMLDivElement | null>(null);

  const { filterMenuList, disableLocalSearch, noList } = toRefs(props);
  const attributeFilterList = ref<MenuListType[]>([]);

  const handleFilterTrigger = () => {
    isFilterActive.value = !isFilterActive.value;
  };

  const getFilterList = () => {
    if (Array.isArray(filterMenuList.value)) {
      attributeFilterList.value = filterMenuList.value as MenuListType[];
    }

    if (typeof filterMenuList.value[0] === 'string' || typeof attributeFilterList.value[0] === 'number') {
      attributeFilterList.value = (filterMenuList.value as string[] | number[]).map((item) => ({
        text: item.toString(),
        value: item,
      }));
    }
  };

  const handleClosePopper = () => {
    if (isSaving.value) {
      isSaving.value = false;
      return;
    }

    isFilterActive.value = false;
    emit('onCloseFilter');
  };

  const handleShowPopper = () => {
    emit('onOpenFilter');
    if (noList.value) return;

    selectedFilters.value = [...savedFilters.value];
  };

  const handleSave = () => {
    isSaving.value = true;
    savedFilters.value = [...selectedFilters.value];
    isFilterActive.value = false;

    emit('onSaveFilter', savedFilters.value);
  };

  const getFilteredMenuList = (list: MenuListType[]) => {
    return list.filter((item: MenuListType) => {
      const searchTerm = searchModel.value.toLowerCase().trim();
      return item.text.toLowerCase().trim().includes(searchTerm);
    });
  };

  const handleSearch = () => {
    if (disableLocalSearch.value || noList.value) return;
    getFilterList();
    attributeFilterList.value = getFilteredMenuList(attributeFilterList.value);
  };

  const handleOnSelect = (selectedFilters: MenuListType[]) => {
    emit('onSelectFilter', selectedFilters);
  };

  const handleClear = () => {
    selectedFilters.value = [];
    savedFilters.value = [];    
    emit('onClearFilter');
  };

  useInfiniteScroll(
    filterDropdownRef,
    () => {
      if (!filterDropdownRef.value) return;
      const element = filterDropdownRef.value;
      const hasVerticalScrollbar = element.scrollHeight > element.clientHeight;

      if (hasVerticalScrollbar) {
        emit('infiniteScrollTrigger');
      }
    },
    { distance: 10 },
  );

  onMounted(() => {
    if (noList.value) return;
    getFilterList();
  });

  watch(filterMenuList, () => {
    if (noList.value) return;
    getFilterList();
  });

  watch(searchModel, () => handleSearch());

  return {
    isFilterActive,
    isSearchFocused,
    attributeFilterList,
    handleFilterTrigger,
    selectedFilters,
    handleClosePopper,
    handleShowPopper,
    handleSave,
    savedFilters,    
    handleOnSelect,
    filterDropdownRef,
    handleClear,
  };
};
