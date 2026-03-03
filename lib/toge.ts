import { App } from 'vue'
import '@/assets/styles/tailwind.css'
import pkg from '../package.json'

// ─── ONE-WAY DEPENDENCY RULE ─────────────────────────────────────────────────
// primitives → tokens only (@iconify/vue, floating-vue, classnames, spr- Tailwind)
// patterns   → can import from primitives/
// ❌ primitives MUST NOT import from patterns/
// ❌ DS components MUST NOT import domain types
// ─────────────────────────────────────────────────────────────────────────────

const PREFIX = 'toge-'
const components = import.meta.glob('../src/toge/{primitives,patterns}/**/*.vue', { eager: true })

const install = (app: App) => {
  // Register all toge components globally with toge- prefix
  // Same pattern as lib/main.ts but pointing to src/toge/
  Object.entries(components).forEach(([path, component]) => {
    const componentName = path.split('/').pop()?.replace('.vue', '')
    if (componentName) {
      app.component(`${PREFIX}${componentName}`, (component as any).default)
    }
  })

  console.info(
    `%c🌿 Toge Design System Installed v${pkg.version} 🌿`,
    'font-weight: bold; font-size: 14px; color: green; padding: 16px 8px; border: 1px dashed green; border-radius: 4px; margin: 10px auto;',
  )
}

export default { install, version: pkg.version }

// ─── Primitives ──────────────────────────────────────────────────────────────
export { default as TogeButton } from '../src/toge/primitives/button/button.vue'
export { default as TogeButtonDropdown } from '../src/toge/primitives/button/button-dropdown/button-dropdown.vue'
export { default as TogeBadge } from '../src/toge/primitives/badge/badge.vue'
export { default as TogeIcon } from '../src/toge/primitives/icon/icon.vue'
export { default as TogeLozenge } from '../src/toge/primitives/lozenge/lozenge.vue'
export { default as TogeStatus } from '../src/toge/primitives/status/status.vue'
export { default as TogeChip } from '../src/toge/primitives/chip/chip.vue'
export { default as TogeAvatar } from '../src/toge/molecules/avatar/avatar.vue'
export { default as TogeCollapsible } from '../src/toge/primitives/collapsible/collapsible.vue'
export { default as TogeTooltip } from '../src/toge/molecules/tooltip/tooltip.vue'
export { default as TogePopper } from '../src/toge/primitives/popper/popper.vue'
export { default as TogeInput } from '../src/toge/primitives/input/input.vue'
export { default as TogeInputSearch } from '../src/toge/primitives/input/input-search/input-search.vue'
export { default as TogeInputDropdown } from '../src/toge/primitives/input/input-dropdown/input-dropdown.vue'
export { default as TogeInputEmail } from '../src/toge/primitives/input/input-email/input-email.vue'
export { default as TogeInputPassword } from '../src/toge/primitives/input/input-password/input-password.vue'
export { default as TogeInputUrl } from '../src/toge/primitives/input/input-url/input-url.vue'
export { default as TogeInputUsername } from '../src/toge/primitives/input/input-username/input-username.vue'
export { default as TogeInputContactNumber } from '../src/toge/primitives/input/input-contact-number/input-contact-number.vue'
export { default as TogeInputCurrency } from '../src/toge/primitives/input/input-currency/input-currency.vue'
export { default as TogeTextarea } from '../src/toge/primitives/textarea/textarea.vue'
export { default as TogeCheckbox } from '../src/toge/primitives/checkbox/checkbox.vue'
export { default as TogeRadio } from '../src/toge/primitives/radio/radio.vue'
export { default as TogeSwitch } from '../src/toge/primitives/switch/switch.vue'
export { default as TogeSlider } from '../src/toge/primitives/slider/slider.vue'
export { default as TogeProgressBar } from '../src/toge/primitives/progress-bar/progress-bar.vue'
export { default as TogeLogo } from '../src/toge/primitives/logo/logo.vue'
export { default as TogeFloatingAction } from '../src/toge/primitives/floating-action/floating-action.vue'
export { default as TogeEventCell } from '../src/toge/primitives/event-cell/event-cell.vue'
export { default as TogeDropdown } from '../src/toge/primitives/dropdown/dropdown.vue'
export { default as TogeTableCell } from '../src/toge/molecules/table-cell/table-cell.vue'

// ─── Patterns ────────────────────────────────────────────────────────────────
export { default as TogeChips } from '../src/toge/patterns/chips/chips.vue'
export { default as TogeRadioGrouped } from '../src/toge/patterns/radio-grouped/radio-grouped.vue'
export { default as TogeFileUpload } from '../src/toge/patterns/file-upload/file-upload.vue'
export { default as TogeEmptyState } from '../src/toge/molecules/empty-state/empty-state.vue'
export { default as TogeBanner } from '../src/toge/molecules/banner/banner.vue'
export { default as TogeCard } from '../src/toge/molecules/card/card.vue'
export { default as TogeModal } from '../src/toge/patterns/modal/modal.vue'
export { default as TogeSidepanel } from '../src/toge/patterns/sidepanel/sidepanel.vue'
export { default as TogeStackingSidepanel } from '../src/toge/patterns/stacking-sidepanel/stacking-sidepanel.vue'
export { default as TogeAccordion } from '../src/toge/patterns/accordion/accordion.vue'
export { default as TogeTabs } from '../src/toge/patterns/tabs/tabs.vue'
export { default as TogeStepper } from '../src/toge/patterns/stepper/stepper.vue'
export { default as TogeStep } from '../src/toge/patterns/stepper/step/step.vue'
export { default as TogeAuditTrail } from '../src/toge/patterns/audit-trail/audit-trail.vue'
export { default as TogeTimePicker } from '../src/toge/patterns/time-picker/time-picker.vue'
export { default as TogeList } from '../src/toge/patterns/list/list.vue'
export { default as TogeSelect } from '../src/toge/patterns/select/select.vue'
export { default as TogeSelectMultiple } from '../src/toge/patterns/select-multiple/select-multiple.vue'
export { default as TogeSelectLadderized } from '../src/toge/patterns/select-ladderized/select-ladderized.vue'
export { default as TogeFilter } from '../src/toge/patterns/filter/filter.vue'
export { default as TogeAttributeFilter } from '../src/toge/patterns/attribute-filter/attribute-filter.vue'
export { default as TogeTable } from '../src/toge/patterns/table/table.vue'
export { default as TogeTableActions } from '../src/toge/patterns/table-actions/table-actions.vue'
export { default as TogeTablePagination } from '../src/toge/patterns/table-pagination/table-pagination.vue'
export { default as TogeDateCalendarPicker } from '../src/toge/patterns/date-calendar-picker/date-calendar-picker.vue'
export { default as TogeDatePicker } from '../src/toge/patterns/date-picker/date-picker.vue'
export { default as TogeDateRangePicker } from '../src/toge/patterns/date-range-picker/date-range-picker.vue'
export { default as TogeMonthYearPicker } from '../src/toge/patterns/month-year-picker/month-year-picker.vue'
export { default as TogeSnackbar } from '../src/toge/molecules/snackbar/snackbar.vue'

// ─── Stores ──────────────────────────────────────────────────────────────────
export { useSnackbarStore } from '../src/toge/stores/useSnackbarStore'

// ─── Utilities ───────────────────────────────────────────────────────────────
export { generateTimeSlots } from '../src/toge/patterns/time-picker/time-picker.styles'

// ─── Type re-exports — Primitives ────────────────────────────────────────────
export type * from '../src/toge/primitives/button/button.types'
export type * from '../src/toge/primitives/badge/badge.types'
export type * from '../src/toge/primitives/icon/icon.types'
export type * from '../src/toge/primitives/lozenge/lozenge.types'
export type * from '../src/toge/primitives/status/status.types'
export type * from '../src/toge/primitives/chip/chip.types'
export type * from '../src/toge/molecules/avatar/avatar.types'
export type * from '../src/toge/primitives/collapsible/collapsible.types'
export type * from '../src/toge/molecules/tooltip/tooltip.types'
export type * from '../src/toge/primitives/popper/popper.types'
export type * from '../src/toge/primitives/input/input.types'
export type * from '../src/toge/primitives/textarea/textarea.types'
export type * from '../src/toge/primitives/checkbox/checkbox.types'
export type * from '../src/toge/primitives/radio/radio.types'
export type * from '../src/toge/primitives/switch/switch.types'
export type * from '../src/toge/primitives/slider/slider.types'
export type * from '../src/toge/primitives/progress-bar/progress-bar.types'
export type * from '../src/toge/primitives/logo/logo.types'
export type * from '../src/toge/primitives/event-cell/event-cell.types'
export type * from '../src/toge/primitives/dropdown/dropdown.types'
export type * from '../src/toge/molecules/table-cell/table-cell.types'

// ─── Type re-exports — Patterns ──────────────────────────────────────────────
export type * from '../src/toge/patterns/chips/chips.types'
export type * from '../src/toge/patterns/radio-grouped/radio-grouped.types'
export type * from '../src/toge/patterns/file-upload/file-upload.types'
export type * from '../src/toge/molecules/empty-state/empty-state.types'
export type * from '../src/toge/molecules/banner/banner.types'
export type * from '../src/toge/molecules/card/card.types'
export type * from '../src/toge/patterns/modal/modal.types'
export type * from '../src/toge/patterns/sidepanel/sidepanel.types'
export type * from '../src/toge/patterns/stacking-sidepanel/stacking-sidepanel.types'
export type * from '../src/toge/patterns/accordion/accordion.types'
export type * from '../src/toge/patterns/tabs/tabs.types'
export type * from '../src/toge/patterns/stepper/stepper.types'
export type * from '../src/toge/patterns/stepper/step/step.types'
export type * from '../src/toge/patterns/audit-trail/audit-trail.types'
export type * from '../src/toge/patterns/time-picker/time-picker.types'
export type * from '../src/toge/patterns/list/list.types'
export type * from '../src/toge/patterns/select/select.types'
export type * from '../src/toge/patterns/select-multiple/select-multiple.types'
export type * from '../src/toge/patterns/select-ladderized/select-ladderized.types'
export type * from '../src/toge/patterns/filter/filter.types'
export type * from '../src/toge/patterns/attribute-filter/attribute-filter.types'
export type * from '../src/toge/patterns/table/table.types'
export type * from '../src/toge/patterns/table-actions/table-actions.types'
export type * from '../src/toge/patterns/table-pagination/table-pagination.types'
export type * from '../src/toge/patterns/date-calendar-picker/date-calendar-picker.types'
export type * from '../src/toge/patterns/date-picker/date-picker.types'
export type * from '../src/toge/patterns/date-range-picker/date-range-picker.types'
export type * from '../src/toge/patterns/month-year-picker/month-year-picker.types'
export type * from '../src/toge/molecules/snackbar/snackbar.types'
