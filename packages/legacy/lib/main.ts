import { App } from 'vue';

import '@toge-design-system/tokens/styles';
import pkg from '../package.json';

// Prefix constant (no need for dynamic setPrefix)
const PREFIX = 'spr-';

// Dynamically import all components from the components directory
// @ts-ignore
const components = import.meta.glob('../src/components/**/*.vue', { eager: true });

// List of component files to exclude from global registration
const excludedComponents: string[] = ['sidenav-menu-links.vue'];

const install = (app: App) => {
  Object.entries(components)
    .filter(([path]) => {
      const fileName = path.split('/').pop();
      return fileName && !excludedComponents.includes(fileName);
    })
    .forEach(([path, component]) => {
      // Extract component name from the file path and apply prefix
      const componentName = path.split('/').pop()?.replace('.vue', '');

      if (componentName) {
        app.component(`${PREFIX}${componentName}`, (component as any).default);
      }
    });

  console.info(
    `%c🌱 Design System Next Installed v${pkg.version} 🌱`,
    'font-weight: bold; font-size: 14px; color: green; padding: 16px 8px; border: 1px dashed green; border-radius: 4px; margin: 10px auto;',
  );
};

export default { install };

// Export individual components
export { default as Accordion } from '../src/components/accordion/accordion.vue';
export { default as AttributeFilter } from '../src/components/attribute-filter/attribute-filter.vue';
export { default as AuditTrail } from '../src/components/audit-trail/audit-trail.vue';
export { default as Avatar } from '../src/components/avatar/avatar.vue';
export { default as Badge } from '../src/components/badge/badge.vue';
export { default as Banner } from '../src/components/banner/banner.vue';
export { default as Button } from '../src/components/button/button.vue';
export { default as ButtonDropdown } from '../src/components/button/button-dropdown/button-dropdown.vue';
export { default as Calendar } from '../src/components/calendar/calendar.vue';
export { default as CalendarCell } from '../src/components/calendar-cell/calendar-cell.vue';
export { default as Card } from '../src/components/card/card.vue';
export { default as Checkbox } from '../src/components/checkbox/checkbox.vue';
export { default as Chips } from '../src/components/chips/chips.vue';
export { default as Collapsible } from '../src/components/collapsible/collapsible.vue';
export { default as DatePicker } from '../src/components/date-picker/date-picker.vue';
export { default as DateCalendarPicker } from '../src/components/date-picker/date-calendar-picker/date-calendar-picker.vue';
export { default as DateRangePicker } from '../src/components/date-picker/date-range-picker/date-range-picker.vue';
export { default as MonthYearPicker } from '../src/components/date-picker/month-year-picker/month-year-picker.vue';
export { default as DatePickerCalendarTab } from '../src/components/date-picker/tabs/DatePickerCalendarTab.vue';
export { default as DatePickerMonthTab } from '../src/components/date-picker/tabs/DatePickerMonthTab.vue';
export { default as DatePickerYearTab } from '../src/components/date-picker/tabs/DatePickerYearTab.vue';
export { default as Dropdown } from '../src/components/dropdown/dropdown.vue';
export { default as EmptyState } from '../src/components/empty-state/empty-state.vue';
export { default as FileUpload } from '../src/components/file-upload/file-upload.vue';
export { default as Filter } from '../src/components/filter/filter.vue';
export { default as FloatingAction } from '../src/components/floating-action/floating-action.vue';
export { default as Icon } from '../src/components/icon/icon.vue';
export { default as Input } from '../src/components/input/input.vue';
export { default as InputContactNumber } from '../src/components/input/input-contact-number/input-contact-number.vue';
export { default as InputCurrency } from '../src/components/input/input-currency/input-currency.vue';
export { default as InputDropdown } from '../src/components/input/input-dropdown/input-dropdown.vue';
export { default as InputEmail } from '../src/components/input/input-email/input-email.vue';
export { default as InputPassword } from '../src/components/input/input-password/input-password.vue';
export { default as InputSearch } from '../src/components/input/input-search/input-search.vue';
export { default as InputUrl } from '../src/components/input/input-url/input-url.vue';
export { default as InputUsername } from '../src/components/input/input-username/input-username.vue';
export { default as List } from '../src/components/list/list.vue';
export { default as ListItem } from '../src/components/list/list-item/list-item.vue';
export { default as LadderizedList } from '../src/components/list/ladderized-list/ladderized-list.vue';
export { default as LadderizedListBack } from '../src/components/list/ladderized-list/ladderized-list-back.vue';
export { default as Logo } from '../src/components/logo/logo.vue';
export { default as Lozenge } from '../src/components/lozenge/lozenge.vue';
export { default as Modal } from '../src/components/modal/modal.vue';
export { default as Popper } from '../src/components/popper/popper.vue';
export { default as ProgressBar } from '../src/components/progress-bar/progress-bar.vue';
export { default as Radio } from '../src/components/radio/radio.vue';
export { default as RadioGrouped } from '../src/components/radio/radio-grouped/radio-grouped.vue';
export { default as Select } from '../src/components/select/select.vue';
export { default as SelectLadderized } from '../src/components/select/select-ladderized/select-ladderized.vue';
export { default as SelectMultiple } from '../src/components/select/select-multiple/select-multiple.vue';
export { default as Sidenav } from '../src/components/sidenav/sidenav.vue';
export { default as Sidepanel } from '../src/components/sidepanel/sidepanel.vue';
export { default as StackingSidepanel } from '../src/components/sidepanel/stacking-sidepanel/stacking-sidepanel.vue';
export { default as Slider } from '../src/components/slider/slider.vue';
export { default as Snackbar } from '../src/components/snackbar/snackbar.vue';
export { default as Snack } from '../src/components/snackbar/snack/snack.vue';
export { default as Status } from '../src/components/status/status.vue';
export { default as Stepper } from '../src/components/stepper/stepper.vue';
export { default as Step } from '../src/components/stepper/step/step.vue';
export { default as Switch } from '../src/components/switch/switch.vue';
export { default as Table } from '../src/components/table/table.vue';
export { default as TableActions } from '../src/components/table/table-actions/table-actions.vue';
export { default as TableChipsTitle } from '../src/components/table/table-chips-title/table-chips-title.vue';
export { default as TableLozengeTitle } from '../src/components/table/table-lozenge-title/table-lozenge-title.vue';
export { default as TablePagination } from '../src/components/table/table-pagination/table-pagination.vue';
export { default as Tabs } from '../src/components/tabs/tabs.vue';
export { default as Textarea } from '../src/components/textarea/textarea.vue';
export { default as TimePicker } from '../src/components/time-picker/time-picker.vue';
export { default as Tooltip } from '../src/components/tooltip/tooltip.vue';

// Re-export component types (only those with .ts files)
export * from './types';
