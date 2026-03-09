// This file contains the fixed version of the handleSelectedItem function
// for handling multiple primitive number values in dropdowns

/**
 * Fixed version of the handleSelectedItem function that properly handles number values in multi-select mode
 * This is designed to be copied into the use-dropdown.ts file
 */

// Handle selected item for simple list component
// This function is exported to be used as a reference for implementation
export const handleSelectedItem = (selectedItems: MenuListType[]) => {
  if (!props.ladderized) {
    // Determine the type of value to emit based on the original data type and multiSelect
    if (multiSelect.value) {
      // For multi-select, always return an array
      const values = selectedItems.map(item => {
        // If we stored the original object, use it
        if ('_originalObject' in item) {
          return item._originalObject;
        }
        
        // For simple types, handle value type conversion properly
        const val = item.value;
        
        // If it's already a number, keep it as a number
        if (typeof val === 'number') {
          return val;
        }
        
        // For strings that look like numbers, convert them
        if (typeof val === 'string' && !isNaN(Number(val)) && val.trim() !== '') {
          // Only convert if it looks like a proper number format
          if (/^-?\d+(\.\d+)?$/.test(val)) {
            return Number(val);
          }
        }
        
        // Return the original value for all other cases
        return val;
      });
      
      // Set the dropdown value
      dropdownValue.value = values as (string | number | Record<string, unknown>)[];
    } else {
      // For single-select
      if (selectedItems.length === 0) {
        dropdownValue.value = props.multiSelect ? [] : '';
        return;
      }

      const item = selectedItems[0];
      
      // If we stored the original object, use it
      if ('_originalObject' in item) {
        dropdownValue.value = item._originalObject as Record<string, unknown>;
        return;
      }
      
      // For simple types, return the value (try to convert number strings to numbers)
      const val = item.value;
      if (typeof val === 'string' && !isNaN(Number(val)) && val.trim() !== '') {
        dropdownValue.value = Number(val);
      } else {
        dropdownValue.value = val;
      }
    }
  } else if (props.ladderized) {
    if (props.searchString !== '') {
      // generate dropdown value if ladderized with search string
      const subvalue = selectedItems[0]?.subvalue;
      const value = selectedItems[0]?.value;
      if (subvalue !== undefined && value !== undefined) {
        dropdownValue.value = [subvalue, value] as [string, string | number];
      }
    } else {
      // For regular ladderized dropdown selection without search
      if (selectedItems.length > 0) {
        const item = selectedItems[0];
        // Use the value directly for ladderized items
        if (item && item.value) {
          dropdownValue.value = item.value;
        }
      }
    }
  }

  if (!multiSelect.value) {
    setTimeout(() => {
      dropdownPopperState.value = false;
    }, 10);
  }
};
