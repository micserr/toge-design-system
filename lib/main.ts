import { App } from 'vue';

import '@/tokens/styles/tailwind.css';
import pkg from '../package.json';

// Prefix constant (no need for dynamic setPrefix)
const PREFIX = 'spr-';

// Dynamically import all components from the components directory
// @ts-ignore
const components = import.meta.glob('../src/legacy/**/*.vue', { eager: true });

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
export { default as Accordion } from '../src/legacy/accordion/accordion.vue';
export { default as AttributeFilter } from '../src/legacy/attribute-filter/attribute-filter.vue';
export { default as AuditTrail } from '../src/legacy/audit-trail/audit-trail.vue';
export { default as Avatar } from '../src/legacy/avatar/avatar.vue';
export { default as Badge } from '../src/legacy/badge/badge.vue';
export { default as Banner } from '../src/legacy/banner/banner.vue';
export { default as Button } from '../src/legacy/button/button.vue';
export { default as ButtonDropdown } from '../src/legacy/button/button-dropdown/button-dropdown.vue';
export { default as Calendar } from '../src/legacy/calendar/calendar.vue';
export { default as CalendarCell } from '../src/legacy/calendar-cell/calendar-cell.vue';
export { default as Card } from '../src/legacy/card/card.vue';
export { default as Checkbox } from '../src/legacy/checkbox/checkbox.vue';
export { default as Chips } from '../src/legacy/chips/chips.vue';
export { default as Collapsible } from '../src/legacy/collapsible/collapsible.vue';
export { default as DatePicker } from '../src/legacy/date-picker/date-picker.vue';
export { default as DateCalendarPicker } from '../src/legacy/date-picker/date-calendar-picker/date-calendar-picker.vue';
export { default as DateRangePicker } from '../src/legacy/date-picker/date-range-picker/date-range-picker.vue';
export { default as MonthYearPicker } from '../src/legacy/date-picker/month-year-picker/month-year-picker.vue';
export { default as DatePickerCalendarTab } from '../src/legacy/date-picker/tabs/DatePickerCalendarTab.vue';
export { default as DatePickerMonthTab } from '../src/legacy/date-picker/tabs/DatePickerMonthTab.vue';
export { default as DatePickerYearTab } from '../src/legacy/date-picker/tabs/DatePickerYearTab.vue';
export { default as Dropdown } from '../src/legacy/dropdown/dropdown.vue';
export { default as EmptyState } from '../src/legacy/empty-state/empty-state.vue';
export { default as FileUpload } from '../src/legacy/file-upload/file-upload.vue';
export { default as Filter } from '../src/legacy/filter/filter.vue';
export { default as FloatingAction } from '../src/legacy/floating-action/floating-action.vue';
export { default as Icon } from '../src/legacy/icon/icon.vue';
export { default as Input } from '../src/legacy/input/input.vue';
export { default as InputContactNumber } from '../src/legacy/input/input-contact-number/input-contact-number.vue';
export { default as InputCurrency } from '../src/legacy/input/input-currency/input-currency.vue';
export { default as InputDropdown } from '../src/legacy/input/input-dropdown/input-dropdown.vue';
export { default as InputEmail } from '../src/legacy/input/input-email/input-email.vue';
export { default as InputPassword } from '../src/legacy/input/input-password/input-password.vue';
export { default as InputSearch } from '../src/legacy/input/input-search/input-search.vue';
export { default as InputUrl } from '../src/legacy/input/input-url/input-url.vue';
export { default as InputUsername } from '../src/legacy/input/input-username/input-username.vue';
export { default as List } from '../src/legacy/list/list.vue';
export { default as ListItem } from '../src/legacy/list/list-item/list-item.vue';
export { default as LadderizedList } from '../src/legacy/list/ladderized-list/ladderized-list.vue';
export { default as LadderizedListBack } from '../src/legacy/list/ladderized-list/ladderized-list-back.vue';
export { default as Logo } from '../src/legacy/logo/logo.vue';
export { default as Lozenge } from '../src/legacy/lozenge/lozenge.vue';
export { default as Modal } from '../src/legacy/modal/modal.vue';
export { default as Popper } from '../src/legacy/popper/popper.vue';
export { default as ProgressBar } from '../src/legacy/progress-bar/progress-bar.vue';
export { default as Radio } from '../src/legacy/radio/radio.vue';
export { default as RadioGrouped } from '../src/legacy/radio/radio-grouped/radio-grouped.vue';
export { default as Select } from '../src/legacy/select/select.vue';
export { default as SelectLadderized } from '../src/legacy/select/select-ladderized/select-ladderized.vue';
export { default as SelectMultiple } from '../src/legacy/select/select-multiple/select-multiple.vue';
export { default as Sidenav } from '../src/legacy/sidenav/sidenav.vue';
export { default as Sidepanel } from '../src/legacy/sidepanel/sidepanel.vue';
export { default as StackingSidepanel } from '../src/legacy/sidepanel/stacking-sidepanel/stacking-sidepanel.vue';
export { default as Slider } from '../src/legacy/slider/slider.vue';
export { default as Snackbar } from '../src/legacy/snackbar/snackbar.vue';
export { default as Snack } from '../src/legacy/snackbar/snack/snack.vue';
export { default as Status } from '../src/legacy/status/status.vue';
export { default as Stepper } from '../src/legacy/stepper/stepper.vue';
export { default as Step } from '../src/legacy/stepper/step/step.vue';
export { default as Switch } from '../src/legacy/switch/switch.vue';
export { default as Table } from '../src/legacy/table/table.vue';
export { default as TableActions } from '../src/legacy/table/table-actions/table-actions.vue';
export { default as TableChipsTitle } from '../src/legacy/table/table-chips-title/table-chips-title.vue';
export { default as TableLozengeTitle } from '../src/legacy/table/table-lozenge-title/table-lozenge-title.vue';
export { default as TablePagination } from '../src/legacy/table/table-pagination/table-pagination.vue';
export { default as Tabs } from '../src/legacy/tabs/tabs.vue';
export { default as Textarea } from '../src/legacy/textarea/textarea.vue';
export { default as TimePicker } from '../src/legacy/time-picker/time-picker.vue';
export { default as Tooltip } from '../src/legacy/tooltip/tooltip.vue';

// Re-export component types (only those with .ts files)
export * from './types';
