import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import DatePicker from '../date-picker.vue';

describe('DatePicker', () => {
  it('should render the component', () => {
    const wrapper = mount(DatePicker, {
      props: {
        id: 'test-date-picker',
        modelValue: '',
      },
    });
    
    expect(wrapper.exists()).toBe(true);
  });

  it('should use default date format (MM-DD-YYYY) when no format prop is provided', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        id: 'test-date-picker',
        modelValue: '',
      },
    });

    // Simulate user selecting a date
    const dateToSelect = '2023-05-15'; // ISO format
    
    // Find the input element and simulate user input
    const input = wrapper.find('input');
    await input.setValue(dateToSelect);
    await input.trigger('change');
    
    // Check that the emitted value uses the default format MM-DD-YYYY
    const emittedValue = wrapper.emitted('update:modelValue');
    expect(emittedValue).toBeDefined();
    expect(emittedValue![emittedValue!.length - 1][0]).toMatch(/\d{2}-\d{2}-\d{4}/); // MM-DD-YYYY format
  });

  it('should format the date according to the specified format prop (YYYY-MM-DD)', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        id: 'test-date-picker',
        modelValue: '',
        format: 'YYYY-MM-DD',
      },
    });

    // Simulate user selecting a date 
    const dateToSelect = '05/15/2023'; // Different format input
    
    // Find the input element and simulate user input
    const input = wrapper.find('input');
    await input.setValue(dateToSelect);
    await input.trigger('change');
    
    // Check that the emitted value uses the specified format YYYY-MM-DD
    const emittedValue = wrapper.emitted('update:modelValue');
    expect(emittedValue).toBeDefined();
    expect(emittedValue![emittedValue!.length - 1][0]).toMatch(/\d{4}-\d{2}-\d{2}/); // YYYY-MM-DD format
  });

  it('should format the date according to the specified format prop (MM/DD/YYYY)', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        id: 'test-date-picker',
        modelValue: '',
        format: 'MM/DD/YYYY',
      },
    });

    // Simulate user selecting a date
    const dateToSelect = '2023-05-15'; // ISO format
    
    // Find the input element and simulate user input
    const input = wrapper.find('input');
    await input.setValue(dateToSelect);
    await input.trigger('change');
    
    // Check that the emitted value uses the specified format MM/DD/YYYY
    const emittedValue = wrapper.emitted('update:modelValue');
    expect(emittedValue).toBeDefined();
    expect(emittedValue![emittedValue!.length - 1][0]).toMatch(/\d{2}\/\d{2}\/\d{4}/); // MM/DD/YYYY format
  });

  it('should parse dates correctly with different format (MM/DD/YYYY)', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        id: 'test-date-picker',
        modelValue: '05/15/2023', // Using MM/DD/YYYY format
        format: 'MM/DD/YYYY',
      },
    });
    
    // Check that the component correctly displays the date in the input
    const input = wrapper.find('input');
    expect(input.element.value).toBe('05/15/2023');
  });

  it('should parse dates correctly with different format (YYYY-MM-DD)', async () => {
    const wrapper = mount(DatePicker, {
      props: {
        id: 'test-date-picker',
        modelValue: '2023-05-15', // Using YYYY-MM-DD format
        format: 'YYYY-MM-DD',
      },
    });
    
    // Check that the component correctly displays the date in the input
    const input = wrapper.find('input');
    expect(input.element.value).toBe('2023-05-15');
  });
});
