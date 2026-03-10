import { App } from 'vue'
import '@/tokens/styles/tailwind.css'
import pkg from '../package.json'

// ─── ONE-WAY DEPENDENCY RULE ─────────────────────────────────────────────────
// primitives → tokens only (@iconify/vue, floating-vue, classnames, spr- Tailwind)
// molecules  → can import from primitives + sibling molecules
// patterns   → can import from molecules + primitives
// ❌ primitives MUST NOT import from molecules or patterns
// ❌ molecules MUST NOT import from patterns
// ❌ DS components MUST NOT import domain types
// ─────────────────────────────────────────────────────────────────────────────

const PREFIX = 'toge-'
const components = import.meta.glob('../src/toge/{primitives,molecules,patterns}/**/*.vue', { eager: true })

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
export { default as TogeChipDay } from '../src/toge/primitives/chip-day/chip-day.vue'
export { default as TogeInput } from '../src/toge/primitives/input/input.vue'
export { default as TogeInputSearch } from '../src/toge/primitives/input/input-search/input-search.vue'
export { default as TogeInputEmail } from '../src/toge/primitives/input/input-email/input-email.vue'
export { default as TogeInputPassword } from '../src/toge/primitives/input/input-password/input-password.vue'
export { default as TogeInputUrl } from '../src/toge/primitives/input/input-url/input-url.vue'
export { default as TogeInputUsername } from '../src/toge/primitives/input/input-username/input-username.vue'
export { default as TogeInputContactNumber } from '../src/toge/primitives/input/input-contact-number/input-contact-number.vue'
export { default as TogeInputCurrency } from '../src/toge/primitives/input/input-currency/input-currency.vue'
export { default as TogeInputFlexible } from '../src/toge/primitives/input/input-flexible/input-flexible.vue'
export { default as TogeTextarea } from '../src/toge/primitives/textarea/textarea.vue'
export { default as TogeCheckbox } from '../src/toge/primitives/checkbox/checkbox.vue'
export { default as TogeRadio } from '../src/toge/primitives/radio/radio.vue'
export { default as TogeSwitch } from '../src/toge/primitives/switch/switch.vue'
export { default as TogeSlider } from '../src/toge/primitives/slider/slider.vue'
export { default as TogeProgressBar } from '../src/toge/primitives/progress-bar/progress-bar.vue'
export { default as TogeLogo } from '../src/toge/primitives/logo/logo.vue'
export { default as TogeFloatingAction } from '../src/toge/primitives/floating-action/floating-action.vue'
export { default as TogeEventCell } from '../src/toge/primitives/event-cell/event-cell.vue'
export { default as TogePopover } from '../src/toge/primitives/popover/popover.vue'

// ─── Molecules ───────────────────────────────────────────────────────────────
export { default as TogeChoicebox } from '../src/toge/molecules/choicebox/choicebox.vue'
export { default as TogeAvatar } from '../src/toge/molecules/avatar/avatar.vue'
export { default as TogeTooltip } from '../src/toge/molecules/tooltip/tooltip.vue'
export { default as TogeBanner } from '../src/toge/molecules/banner/banner.vue'
export { default as TogeSnackbar } from '../src/toge/molecules/snackbar/snackbar.vue'
export { default as TogeCard } from '../src/toge/molecules/card/card.vue'
export { default as TogeEmptyState } from '../src/toge/molecules/empty-state/empty-state.vue'
export { default as TogeDateCalendarPicker } from '../src/toge/molecules/date-calendar-picker/date-calendar-picker.vue'
export { default as TogeDatePicker } from '../src/toge/molecules/date-picker/date-picker.vue'
export { default as TogeDateRangePicker } from '../src/toge/molecules/date-range-picker/date-range-picker.vue'
export { default as TogeMonthYearPicker } from '../src/toge/molecules/month-year-picker/month-year-picker.vue'
export { default as TogeTimePicker } from '../src/toge/molecules/time-picker/time-picker.vue'
export { default as TogeChips } from '../src/toge/molecules/chips/chips.vue'
export { default as TogeList } from '../src/toge/molecules/list/list.vue'

// ─── Patterns ────────────────────────────────────────────────────────────────
export { default as TogeFileUpload } from '../src/toge/patterns/file-upload/file-upload.vue'
export { default as TogeModal } from '../src/toge/patterns/modal/modal.vue'
export { default as TogeSidepanel } from '../src/toge/patterns/sidepanel/sidepanel.vue'
export { default as TogeCollapsible } from '../src/toge/patterns/collapsible/collapsible.vue'
export { default as TogeTabs } from '../src/toge/patterns/tabs/tabs.vue'
export { default as TogeStepper } from '../src/toge/patterns/stepper/stepper.vue'
export { default as TogeStep } from '../src/toge/patterns/stepper/step/step.vue'
export { default as TogeSelect } from '../src/toge/molecules/select/select.vue'
export { default as TogeTable } from '../src/toge/patterns/table/table.vue'
export { default as TogeTableHeader } from '../src/toge/patterns/table/header/header.vue'
export { default as TogeTableBody } from '../src/toge/patterns/table/body/body.vue'
export { default as TogeTableFooter } from '../src/toge/patterns/table/footer/footer.vue'
export { default as TogeTableCaption } from '../src/toge/patterns/table/caption/caption.vue'
export { default as TogeTableRow } from '../src/toge/patterns/table/row/row.vue'
export { default as TogeTableHead } from '../src/toge/patterns/table/head/head.vue'
export { default as TogeTableCell } from '../src/toge/patterns/table/cell/cell.vue'
export { default as TogeTablePagination } from '../src/toge/patterns/table-pagination/table-pagination.vue'

// ─── Stores ──────────────────────────────────────────────────────────────────
export { useSnackbarStore } from '../src/toge/stores/useSnackbarStore'

// ─── Utilities ───────────────────────────────────────────────────────────────
export { generateTimeSlots } from '../src/toge/molecules/time-picker/time-picker.styles'

// ─── Type re-exports — Primitives ────────────────────────────────────────────
export type * from '../src/toge/primitives/button/button.types'
export type * from '../src/toge/primitives/badge/badge.types'
export type * from '../src/toge/primitives/icon/icon.types'
export type * from '../src/toge/primitives/lozenge/lozenge.types'
export type * from '../src/toge/primitives/status/status.types'
export type * from '../src/toge/primitives/chip-day/chip-day.types'
export type * from '../src/toge/primitives/input/input.types'
export type * from '../src/toge/primitives/input/input-flexible/input-flexible.types'
export type * from '../src/toge/primitives/textarea/textarea.types'
export type * from '../src/toge/primitives/checkbox/checkbox.types'
export type * from '../src/toge/primitives/radio/radio.types'
export type * from '../src/toge/primitives/switch/switch.types'
export type * from '../src/toge/primitives/slider/slider.types'
export type * from '../src/toge/primitives/progress-bar/progress-bar.types'
export type * from '../src/toge/primitives/logo/logo.types'
export type * from '../src/toge/primitives/event-cell/event-cell.types'
export type * from '../src/toge/primitives/popover/popover.types'

// ─── Type re-exports — Molecules ─────────────────────────────────────────────
export type * from '../src/toge/molecules/choicebox/choicebox.types'
export type * from '../src/toge/molecules/avatar/avatar.types'
export type * from '../src/toge/molecules/tooltip/tooltip.types'
export type * from '../src/toge/molecules/banner/banner.types'
export type * from '../src/toge/molecules/snackbar/snackbar.types'
export type * from '../src/toge/molecules/card/card.types'
export type * from '../src/toge/molecules/empty-state/empty-state.types'
export type * from '../src/toge/molecules/date-calendar-picker/date-calendar-picker.types'
export type * from '../src/toge/molecules/date-picker/date-picker.types'
export type * from '../src/toge/molecules/date-range-picker/date-range-picker.types'
export type * from '../src/toge/molecules/month-year-picker/month-year-picker.types'
export type * from '../src/toge/molecules/time-picker/time-picker.types'
export type * from '../src/toge/molecules/chips/chips.types'
export type * from '../src/toge/molecules/list/list.types'

// ─── Type re-exports — Patterns ──────────────────────────────────────────────
export type * from '../src/toge/patterns/file-upload/file-upload.types'
export type * from '../src/toge/patterns/modal/modal.types'
export type * from '../src/toge/patterns/sidepanel/sidepanel.types'
export type * from '../src/toge/patterns/collapsible/collapsible.types'
export type * from '../src/toge/patterns/tabs/tabs.types'
export type * from '../src/toge/patterns/stepper/stepper.types'
export type * from '../src/toge/patterns/stepper/step/step.types'
export type * from '../src/toge/molecules/select/select.types'
export type * from '../src/toge/patterns/table/table.types'
export type * from '../src/toge/patterns/table/cell/cell.types'
export type * from '../src/toge/patterns/table/caption/caption.types'
export type * from '../src/toge/patterns/table/row/row.types'
export type * from '../src/toge/patterns/table/head/head.types'
export type * from '../src/toge/patterns/table-pagination/table-pagination.types'
