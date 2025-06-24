import { describe, it, expect } from 'vitest';
import { ref } from 'vue';
import { useSelect } from '../use-select';

describe('Select Value Types', () => {
  describe('Single primitive values', () => {
    it('should handle string values', () => {
      const modelValue = 'apple';
      const menuList = ['apple', 'banana', 'cherry'];

      const { selectMenuList, normalizedValue } = useSelect({
        id: 'test',
        modelValue,
        menuList,
      });

      expect(normalizedValue.value).toEqual(['apple']);
      expect(selectMenuList.value).toEqual([
        { text: 'apple', value: 'apple' },
        { text: 'banana', value: 'banana' },
        { text: 'cherry', value: 'cherry' },
      ]);
    });

    it('should handle number values', () => {
      const modelValue = 42;
      const menuList = [42, 55, 67];

      const { selectMenuList, normalizedValue } = useSelect({
        id: 'test',
        modelValue,
        menuList,
      });

      expect(normalizedValue.value).toEqual([42]);
      expect(selectMenuList.value).toEqual([
        { text: '42', value: '42' },
        { text: '55', value: '55' },
        { text: '67', value: '67' },
      ]);
    });
  });

  describe('Single object values', () => {
    it('should handle object values', () => {
      const employee = { systemId: 1, firstName: 'John', lastName: 'Doe' };
      const modelValue = employee;
      const menuList = [
        { systemId: 1, firstName: 'John', lastName: 'Doe' },
        { systemId: 2, firstName: 'Jane', lastName: 'Smith' },
      ];

      const { selectMenuList, normalizedValue } = useSelect({
        id: 'test',
        modelValue,
        menuList,
        textField: 'firstName',
        valueField: 'systemId',
      });

      expect(normalizedValue.value).toEqual([employee]);
      expect(selectMenuList.value[0].text).toBe('John');
      expect(selectMenuList.value[1].text).toBe('Jane');
      expect(selectMenuList.value[0].value).toBe('1');
      expect(selectMenuList.value[0]._originalObject).toEqual(menuList[0]);
    });
  });

  describe('Multiple primitive values', () => {
    it('should handle string arrays', () => {
      const modelValue = ['apple', 'banana'];
      const menuList = ['apple', 'banana', 'cherry'];

      const { selectMenuList, normalizedValue } = useSelect({
        id: 'test',
        modelValue,
        menuList,
        multiSelect: true,
      });

      expect(normalizedValue.value).toEqual(['apple', 'banana']);
      expect(selectMenuList.value).toEqual([
        { text: 'apple', value: 'apple' },
        { text: 'banana', value: 'banana' },
        { text: 'cherry', value: 'cherry' },
      ]);
    });

    it('should handle number arrays', () => {
      const modelValue = [42, 55];
      const menuList = [42, 55, 67];

      const { selectMenuList, normalizedValue } = useSelect({
        id: 'test',
        modelValue,
        menuList,
        multiSelect: true,
      });

      expect(normalizedValue.value).toEqual([42, 55]);
      expect(selectMenuList.value).toEqual([
        { text: '42', value: '42' },
        { text: '55', value: '55' },
        { text: '67', value: '67' },
      ]);
    });
  });

  describe('Multiple object values', () => {
    it('should handle object arrays', () => {
      const employees = [
        { systemId: 1, firstName: 'John', lastName: 'Doe' },
        { systemId: 2, firstName: 'Jane', lastName: 'Smith' },
      ];
      const modelValue = employees;
      const menuList = [
        { systemId: 1, firstName: 'John', lastName: 'Doe' },
        { systemId: 2, firstName: 'Jane', lastName: 'Smith' },
        { systemId: 3, firstName: 'Mike', lastName: 'Johnson' },
      ];

      const { selectMenuList, normalizedValue } = useSelect({
        id: 'test',
        modelValue,
        menuList,
        textField: 'firstName',
        valueField: 'systemId',
        multiSelect: true,
      });

      expect(normalizedValue.value).toEqual(employees);
      expect(selectMenuList.value[0].text).toBe('John');
      expect(selectMenuList.value[1].text).toBe('Jane');
      expect(selectMenuList.value[0].value).toBe('1');
      expect(selectMenuList.value[0]._originalObject).toEqual(menuList[0]);
    });
  });

  describe('Handle selected items', () => {
    it('should output string for string selection', () => {
      const modelValue = ref(undefined);
      const menuList = ['apple', 'banana', 'cherry'];

      const { handleSelectedItem } = useSelect({
        id: 'test',
        modelValue,
        menuList,
      });

      handleSelectedItem([{ text: 'apple', value: 'apple' }]);
      expect(modelValue.value).toBe('apple');
    });

    it('should output number for number selection', () => {
      const modelValue = ref(undefined);
      const menuList = [42, 55, 67];

      const { handleSelectedItem } = useSelect({
        id: 'test',
        modelValue,
        menuList,
      });

      handleSelectedItem([{ text: '42', value: '42' }]);
      expect(modelValue.value).toBe(42);
    });

    it('should output original object for object selection', () => {
      const modelValue = ref(undefined);
      const employeeObj = { systemId: 1, firstName: 'John', lastName: 'Doe' };
      const menuList = [employeeObj, { systemId: 2, firstName: 'Jane', lastName: 'Smith' }];

      const { handleSelectedItem, selectMenuList } = useSelect({
        id: 'test',
        modelValue,
        menuList,
        textField: 'firstName',
        valueField: 'systemId',
      });

      // Process menu list first to get _originalObject
      selectMenuList.value.forEach((item) => {
        if (item.value === '1') {
          handleSelectedItem([item]);
        }
      });

      expect(modelValue.value).toEqual(employeeObj);
    });

    it('should output array for multi-select', () => {
      const modelValue = ref([]);
      const menuList = ['apple', 'banana', 'cherry'];

      const { handleSelectedItem } = useSelect({
        id: 'test',
        modelValue,
        menuList,
        multiSelect: true,
      });

      handleSelectedItem([
        { text: 'apple', value: 'apple' },
        { text: 'banana', value: 'banana' },
      ]);

      expect(modelValue.value).toEqual(['apple', 'banana']);
    });
  });
});
