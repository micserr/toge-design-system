import { App } from 'vue'
import '@/assets/styles/tailwind.css'
import pkg from '../package.json'

const PREFIX = 'toge-'

// Dynamically import all toge components
// @ts-ignore
const components = import.meta.glob('../src/toge/components/**/*.vue', { eager: true })

// Global install
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

export default { install }

// ─── Phase 1 — Pattern components ────────────────────────────────────────────
export { default as TogeButton } from '../src/toge/primitives/button/button.vue'
export { default as TogeButtonDropdown } from '../src/toge/primitives/button/button-dropdown/button-dropdown.vue'
export { default as TogeBadge } from '../src/toge/primitives/badge/badge.vue'
export { default as TogeIcon } from '../src/toge/primitives/icon/icon.vue'
export { default as TogeLozenge } from '../src/toge/primitives/lozenge/lozenge.vue'
export { default as TogeStatus } from '../src/toge/primitives/status/status.vue'
export { default as TogeChips } from '../src/toge/components/chips/chips.vue'
export { default as TogeAvatar } from '../src/toge/primitives/avatar/avatar.vue'
export { default as TogeCollapsible } from '../src/toge/primitives/collapsible/collapsible.vue'
export { default as TogeTooltip } from '../src/toge/primitives/tooltip/tooltip.vue'
export { default as TogePopper } from '../src/toge/primitives/popper/popper.vue'

// ─── Phase 2 — Form controls ─────────────────────────────────────────────────
export { default as TogeInput } from '../src/toge/components/input/input.vue'
export { default as TogeInputSearch } from '../src/toge/components/input/input-search/input-search.vue'
export { default as TogeInputDropdown } from '../src/toge/components/input/input-dropdown/input-dropdown.vue'
export { default as TogeInputEmail } from '../src/toge/components/input/input-email/input-email.vue'
export { default as TogeInputPassword } from '../src/toge/components/input/input-password/input-password.vue'
export { default as TogeInputUrl } from '../src/toge/components/input/input-url/input-url.vue'
export { default as TogeInputUsername } from '../src/toge/components/input/input-username/input-username.vue'
export { default as TogeInputContactNumber } from '../src/toge/components/input/input-contact-number/input-contact-number.vue'
export { default as TogeInputCurrency } from '../src/toge/components/input/input-currency/input-currency.vue'
export { default as TogeTextarea } from '../src/toge/components/textarea/textarea.vue'
export { default as TogeCheckbox } from '../src/toge/components/checkbox/checkbox.vue'
export { default as TogeRadio } from '../src/toge/components/radio/radio.vue'
export { default as TogeRadioGrouped } from '../src/toge/components/radio-grouped/radio-grouped.vue'
export { default as TogeSwitch } from '../src/toge/components/switch/switch.vue'
export { default as TogeSlider } from '../src/toge/components/slider/slider.vue'
export { default as TogeFileUpload } from '../src/toge/components/file-upload/file-upload.vue'
export { default as TogeProgressBar } from '../src/toge/components/progress-bar/progress-bar.vue'
export { default as TogeEmptyState } from '../src/toge/components/empty-state/empty-state.vue'
export { default as TogeBanner } from '../src/toge/components/banner/banner.vue'
export { default as TogeCard } from '../src/toge/components/card/card.vue'
export { default as TogeLogo } from '../src/toge/components/logo/logo.vue'
export { default as TogeFloatingAction } from '../src/toge/components/floating-action/floating-action.vue'
export { default as TogeCalendarCell } from '../src/toge/components/calendar-cell/calendar-cell.vue'

// ─── Type re-exports — Phase 1 ───────────────────────────────────────────────
export type * from '../src/toge/primitives/button/button.types'
export type * from '../src/toge/primitives/badge/badge.types'
export type * from '../src/toge/primitives/icon/icon.types'
export type * from '../src/toge/primitives/lozenge/lozenge.types'
export type * from '../src/toge/primitives/status/status.types'
export type * from '../src/toge/components/chips/chips.types'
export type * from '../src/toge/primitives/avatar/avatar.types'
export type * from '../src/toge/primitives/collapsible/collapsible.types'
export type * from '../src/toge/primitives/tooltip/tooltip.types'
export type * from '../src/toge/primitives/popper/popper.types'

// ─── Phase 3 — Layout + UI-State Components ──────────────────────────────────
export { default as TogeModal } from '../src/toge/components/modal/modal.vue'
export { default as TogeSidepanel } from '../src/toge/components/sidepanel/sidepanel.vue'
export { default as TogeStackingSidepanel } from '../src/toge/components/stacking-sidepanel/stacking-sidepanel.vue'
export { default as TogeAccordion } from '../src/toge/components/accordion/accordion.vue'
export { default as TogeTabs } from '../src/toge/components/tabs/tabs.vue'
export { default as TogeStepper } from '../src/toge/components/stepper/stepper.vue'
export { default as TogeStep } from '../src/toge/components/stepper/step/step.vue'
export { default as TogeAuditTrail } from '../src/toge/components/audit-trail/audit-trail.vue'
export { default as TogeTimePicker } from '../src/toge/components/time-picker/time-picker.vue'

// ─── Type re-exports — Phase 2 ───────────────────────────────────────────────
export type * from '../src/toge/components/input/input.types'
export type * from '../src/toge/components/textarea/textarea.types'
export type * from '../src/toge/components/checkbox/checkbox.types'
export type * from '../src/toge/components/radio/radio.types'
export type * from '../src/toge/components/radio-grouped/radio-grouped.types'
export type * from '../src/toge/components/switch/switch.types'
export type * from '../src/toge/components/slider/slider.types'
export type * from '../src/toge/components/file-upload/file-upload.types'
export type * from '../src/toge/components/progress-bar/progress-bar.types'
export type * from '../src/toge/components/empty-state/empty-state.types'
export type * from '../src/toge/components/banner/banner.types'
export type * from '../src/toge/components/card/card.types'
export type * from '../src/toge/components/logo/logo.types'
export type * from '../src/toge/components/calendar-cell/calendar-cell.types'

// ─── Type re-exports — Phase 3 ───────────────────────────────────────────────
export type * from '../src/toge/components/modal/modal.types'
export type * from '../src/toge/components/sidepanel/sidepanel.types'
export type * from '../src/toge/components/stacking-sidepanel/stacking-sidepanel.types'
export type * from '../src/toge/components/accordion/accordion.types'
export type * from '../src/toge/components/tabs/tabs.types'
export type * from '../src/toge/components/stepper/stepper.types'
export type * from '../src/toge/components/stepper/step/step.types'
export type * from '../src/toge/components/audit-trail/audit-trail.types'
export type * from '../src/toge/components/time-picker/time-picker.types'
export { generateTimeSlots } from '../src/toge/components/time-picker/time-picker.styles'

// ─── Phase 4 — Data-Driven Components ────────────────────────────────────────
export { default as TogeList } from '../src/toge/components/list/list.vue'
export { default as TogeDropdown } from '../src/toge/primitives/dropdown/dropdown.vue'
export { default as TogeSelect } from '../src/toge/components/select/select.vue'
export { default as TogeSelectMultiple } from '../src/toge/components/select-multiple/select-multiple.vue'
export { default as TogeSelectLadderized } from '../src/toge/components/select-ladderized/select-ladderized.vue'
export { default as TogeFilter } from '../src/toge/components/filter/filter.vue'
export { default as TogeAttributeFilter } from '../src/toge/components/attribute-filter/attribute-filter.vue'
export { default as TogeTable } from '../src/toge/components/table/table.vue'
export { default as TogeTableActions } from '../src/toge/components/table-actions/table-actions.vue'
export { default as TogeTableChipsTitle } from '../src/toge/components/table-chips-title/table-chips-title.vue'
export { default as TogeTableLozengeTitle } from '../src/toge/components/table-lozenge-title/table-lozenge-title.vue'
export { default as TogeTablePagination } from '../src/toge/components/table-pagination/table-pagination.vue'
export { default as TogeDateCalendarPicker } from '../src/toge/components/date-calendar-picker/date-calendar-picker.vue'
export { default as TogeDatePicker } from '../src/toge/components/date-picker/date-picker.vue'
export { default as TogeDateRangePicker } from '../src/toge/components/date-range-picker/date-range-picker.vue'
export { default as TogeMonthYearPicker } from '../src/toge/components/month-year-picker/month-year-picker.vue'
export { default as TogeSnackbar } from '../src/toge/components/snackbar/snackbar.vue'

// ─── Snackbar store (separate from component) ────────────────────────────────
export { useSnackbarStore } from '../src/toge/stores/useSnackbarStore'

// ─── Type re-exports — Phase 4 ───────────────────────────────────────────────
export type * from '../src/toge/components/list/list.types'
export type * from '../src/toge/primitives/dropdown/dropdown.types'
export type * from '../src/toge/components/select/select.types'
export type * from '../src/toge/components/select-multiple/select-multiple.types'
export type * from '../src/toge/components/select-ladderized/select-ladderized.types'
export type * from '../src/toge/components/filter/filter.types'
export type * from '../src/toge/components/attribute-filter/attribute-filter.types'
export type * from '../src/toge/components/table/table.types'
export type * from '../src/toge/components/table-actions/table-actions.types'
export type * from '../src/toge/components/table-chips-title/table-chips-title.types'
export type * from '../src/toge/components/table-lozenge-title/table-lozenge-title.types'
export type * from '../src/toge/components/table-pagination/table-pagination.types'
export type * from '../src/toge/components/date-calendar-picker/date-calendar-picker.types'
export type * from '../src/toge/components/date-picker/date-picker.types'
export type * from '../src/toge/components/date-range-picker/date-range-picker.types'
export type * from '../src/toge/components/month-year-picker/month-year-picker.types'
export type * from '../src/toge/components/snackbar/snackbar.types'
