<template>
  <div class="toge-playground">

    <!-- Header -->
    <div class="toge-playground__header">
      <div class="toge-playground__title-row">
        <span class="toge-playground__eyebrow">Toge Design System</span>
        <h1 class="toge-playground__title">Component Playground</h1>
      </div>
      <div class="toge-playground__selector-row">
        <label class="toge-playground__label" for="component-select">Component</label>
        <select id="component-select" class="toge-playground__select" v-model="selectedKey">
          <option v-for="key in componentKeys" :key="key" :value="key">{{ key }}</option>
        </select>
      </div>
    </div>

    <div class="toge-playground__body">

      <!-- Preview -->
      <div class="toge-playground__preview">
        <!-- collapsible: needs v-model + named trigger slot -->
        <template v-if="selectedKey === 'collapsible'">
          <TogeCollapsible v-bind="currentProps" v-model="collapsibleOpen">
            <template #trigger="{ toggleCollapsible, isOpen }">
              <button class="toge-playground__collapsible-btn" @click="toggleCollapsible" :aria-expanded="isOpen">
                {{ isOpen ? '▼ Collapse' : '▶ Expand' }}
              </button>
            </template>
            <div class="toge-playground__collapsible-content">This is the collapsible content area.</div>
          </TogeCollapsible>
        </template>

        <!-- tooltip: needs trigger element + text prop -->
        <template v-else-if="selectedKey === 'tooltip'">
          <TogeTooltip v-bind="currentProps">
            <button class="toge-playground__collapsible-btn">Hover me for tooltip</button>
          </TogeTooltip>
        </template>

        <!-- popper: needs id + content slot -->
        <template v-else-if="selectedKey === 'popper'">
          <TogePopper id="playground-popper">
            <button class="toge-playground__collapsible-btn">Click to toggle popper</button>
            <template #content>
              <div style="padding: 12px 16px; font-size: 13px;">Popper content renders here.</div>
            </template>
          </TogePopper>
        </template>

        <!-- dropdown: needs a reference slot trigger -->
        <template v-else-if="selectedKey === 'dropdown'">
          <TogeDropdown v-bind="currentProps">
            <template #reference>
              <button class="toge-playground__collapsible-btn">Open Dropdown</button>
            </template>
            <div style="padding: 8px 0; min-width: 160px;">
              <div v-for="item in ['Edit', 'Duplicate', 'Archive', 'Delete']" :key="item"
                style="padding: 8px 16px; cursor: pointer; font-size: 13px;"
                onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background=''">
                {{ item }}
              </div>
            </div>
          </TogeDropdown>
        </template>

        <!-- snackbar: teleports to body — show a note in the preview -->
        <template v-else-if="selectedKey === 'snackbar'">
          <div style="text-align:center; color: #6b7280; font-size: 13px;">
            <p style="margin-bottom: 8px;">Snackbar renders via <code>Teleport to="body"</code>.</p>
            <p>Notifications appear at the selected position on screen.</p>
          </div>
          <TogeSnackbar v-bind="currentProps" />
        </template>

        <!-- all other components (with optional v-model wiring for form controls) -->
        <template v-else>
          <component
            :is="currentConfig.component"
            v-bind="allBoundProps"
            @update:model-value="formModelValue = $event"
          >
            <template v-if="currentConfig.defaultSlot !== undefined" #default>{{ slotText }}</template>
          </component>
        </template>
      </div>

      <!-- Controls + Code side panel -->
      <div class="toge-playground__side">

        <!-- Props controls -->
        <div class="toge-playground__controls">
          <h3 class="toge-playground__section-title">Props</h3>

          <!-- Slot content row (only for components that accept meaningful slot text) -->
          <div v-if="currentConfig.defaultSlot !== undefined && !['collapsible','tooltip','popper'].includes(selectedKey)" class="toge-playground__control">
            <label class="toge-playground__ctrl-label" for="ctrl-slot">
              slot
              <span class="toge-playground__type-badge">text</span>
            </label>
            <input id="ctrl-slot" class="toge-playground__input" type="text" v-model="slotText" />
          </div>

          <!-- Dynamic prop rows -->
          <div v-for="prop in currentConfig.propDefs" :key="prop.name" class="toge-playground__control">
            <label class="toge-playground__ctrl-label" :for="'ctrl-' + prop.name">
              {{ prop.name }}
              <span class="toge-playground__type-badge">{{ prop.type }}</span>
            </label>

            <select
              v-if="prop.type === 'select'"
              :id="'ctrl-' + prop.name"
              class="toge-playground__select"
              :value="propValues[prop.name]"
              @change="updateProp(prop.name, ($event.target as HTMLSelectElement).value)"
            >
              <option v-for="opt in prop.options" :key="opt" :value="opt">{{ opt }}</option>
            </select>

            <label v-else-if="prop.type === 'boolean'" class="toge-playground__checkbox-row">
              <input
                :id="'ctrl-' + prop.name"
                type="checkbox"
                :checked="propValues[prop.name] as boolean"
                @change="updateProp(prop.name, ($event.target as HTMLInputElement).checked)"
              />
              <span>{{ propValues[prop.name] ? 'true' : 'false' }}</span>
            </label>

            <input
              v-else-if="prop.type === 'number'"
              :id="'ctrl-' + prop.name"
              type="number"
              class="toge-playground__input"
              :value="propValues[prop.name] as number"
              @input="updateProp(prop.name, Number(($event.target as HTMLInputElement).value))"
            />

            <input
              v-else
              :id="'ctrl-' + prop.name"
              type="text"
              class="toge-playground__input"
              :value="propValues[prop.name] as string"
              @input="updateProp(prop.name, ($event.target as HTMLInputElement).value)"
            />
          </div>

          <p v-if="currentConfig.propDefs.length === 0" class="toge-playground__empty">No configurable props.</p>
        </div>

        <!-- Generated code -->
        <div class="toge-playground__code">
          <div class="toge-playground__code-header">
            <span class="toge-playground__section-title">Generated Code</span>
            <button class="toge-playground__copy-btn" type="button" @click="copyCode">
              {{ copied ? '✓ Copied' : 'Copy' }}
            </button>
          </div>
          <pre class="toge-playground__pre"><code>{{ generatedCode }}</code></pre>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, watch } from 'vue'
import type { Component } from 'vue'

// Phase 1
import TogeButton from '@/toge/primitives/button/button.vue'
import TogeButtonDropdown from '@/toge/primitives/button/button-dropdown/button-dropdown.vue'
import TogeBadge from '@/toge/primitives/badge/badge.vue'
import TogeIcon from '@/toge/primitives/icon/icon.vue'
import TogeLozenge from '@/toge/primitives/lozenge/lozenge.vue'
import TogeStatus from '@/toge/primitives/status/status.vue'
import TogeChips from '@/toge/components/chips/chips.vue'
import TogeAvatar from '@/toge/primitives/avatar/avatar.vue'
import TogeCollapsible from '@/toge/components/collapsible/collapsible.vue'
import TogeTooltip from '@/toge/components/tooltip/tooltip.vue'
import TogePopper from '@/toge/components/popper/popper.vue'

// Phase 3
import TogeModal from '@/toge/components/modal/modal.vue'
import TogeSidepanel from '@/toge/components/sidepanel/sidepanel.vue'
import TogeStackingSidepanel from '@/toge/components/stacking-sidepanel/stacking-sidepanel.vue'
import TogeAccordion from '@/toge/components/accordion/accordion.vue'
import TogeTabs from '@/toge/components/tabs/tabs.vue'
import TogeStepper from '@/toge/components/stepper/stepper.vue'
import TogeStep from '@/toge/components/stepper/step/step.vue'
import TogeAuditTrail from '@/toge/components/audit-trail/audit-trail.vue'
import TogeTimePicker from '@/toge/components/time-picker/time-picker.vue'

// Phase 2
import TogeInput from '@/toge/components/input/input.vue'
import TogeInputSearch from '@/toge/components/input/input-search/input-search.vue'
import TogeInputDropdown from '@/toge/components/input/input-dropdown/input-dropdown.vue'
import TogeInputEmail from '@/toge/components/input/input-email/input-email.vue'
import TogeInputPassword from '@/toge/components/input/input-password/input-password.vue'
import TogeInputUrl from '@/toge/components/input/input-url/input-url.vue'
import TogeInputUsername from '@/toge/components/input/input-username/input-username.vue'
import TogeInputContactNumber from '@/toge/components/input/input-contact-number/input-contact-number.vue'
import TogeInputCurrency from '@/toge/components/input/input-currency/input-currency.vue'
import TogeTextarea from '@/toge/components/textarea/textarea.vue'
import TogeCheckbox from '@/toge/components/checkbox/checkbox.vue'
import TogeRadio from '@/toge/components/radio/radio.vue'
import TogeRadioGrouped from '@/toge/components/radio-grouped/radio-grouped.vue'
import TogeSwitch from '@/toge/components/switch/switch.vue'
import TogeSlider from '@/toge/components/slider/slider.vue'
import TogeFileUpload from '@/toge/components/file-upload/file-upload.vue'
import TogeProgressBar from '@/toge/components/progress-bar/progress-bar.vue'
import TogeEmptyState from '@/toge/components/empty-state/empty-state.vue'
import TogeBanner from '@/toge/components/banner/banner.vue'
import TogeCard from '@/toge/components/card/card.vue'
import TogeLogo from '@/toge/components/logo/logo.vue'
import TogeFloatingAction from '@/toge/components/floating-action/floating-action.vue'
import TogeCalendarCell from '@/toge/components/calendar-cell/calendar-cell.vue'

// Phase 4
import TogeList from '@/toge/components/list/list.vue'
import TogeDropdown from '@/toge/components/dropdown/dropdown.vue'
import TogeSelect from '@/toge/components/select/select.vue'
import TogeSelectMultiple from '@/toge/components/select-multiple/select-multiple.vue'
import TogeSelectLadderized from '@/toge/components/select-ladderized/select-ladderized.vue'
import TogeFilter from '@/toge/components/filter/filter.vue'
import TogeAttributeFilter from '@/toge/components/attribute-filter/attribute-filter.vue'
import TogeTable from '@/toge/components/table/table.vue'
import TogeTableActions from '@/toge/components/table-actions/table-actions.vue'
import TogeTableChipsTitle from '@/toge/components/table-chips-title/table-chips-title.vue'
import TogeTableLozengeTitle from '@/toge/components/table-lozenge-title/table-lozenge-title.vue'
import TogeTablePagination from '@/toge/components/table-pagination/table-pagination.vue'
import TogeDateCalendarPicker from '@/toge/components/date-calendar-picker/date-calendar-picker.vue'
import TogeDatePicker from '@/toge/components/date-picker/date-picker.vue'
import TogeDateRangePicker from '@/toge/components/date-range-picker/date-range-picker.vue'
import TogeMonthYearPicker from '@/toge/components/month-year-picker/month-year-picker.vue'
import TogeSnackbar from '@/toge/components/snackbar/snackbar.vue'

interface PropDef {
  name: string
  type: 'boolean' | 'select' | 'text' | 'number'
  options?: string[]
  default: unknown
}

interface ComponentConfig {
  component: Component
  tag: string
  propDefs: PropDef[]
  defaultSlot?: string
  extraProps?: Record<string, unknown>
  /** true = component uses defineModel; playground will wire v-model automatically */
  hasModel?: boolean
  /** initial modelValue for hasModel components */
  modelDefault?: unknown
}

const componentRegistry: Record<string, ComponentConfig> = {
  button: {
    component: TogeButton,
    tag: 'toge-button',
    defaultSlot: 'Click me',
    propDefs: [
      { name: 'tone', type: 'select', options: ['neutral', 'success', 'danger'], default: 'neutral' },
      { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
      { name: 'variant', type: 'select', options: ['primary', 'secondary', 'tertiary'], default: 'primary' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'fullwidth', type: 'boolean', default: false },
      { name: 'hasIcon', type: 'boolean', default: false },
    ],
  },
  'button-dropdown': {
    component: TogeButtonDropdown,
    tag: 'toge-button-dropdown',
    defaultSlot: 'Actions',
    extraProps: {
      dropdownId: 'playground-btn-dropdown',
      menuList: ['Edit', 'Duplicate', 'Archive', 'Delete'],
    },
    propDefs: [
      { name: 'tone', type: 'select', options: ['neutral', 'success'], default: 'neutral' },
      { name: 'variant', type: 'select', options: ['primary', 'secondary'], default: 'primary' },
      { name: 'size', type: 'select', options: ['small', 'medium', 'large'], default: 'medium' },
      { name: 'disabled', type: 'boolean', default: false },
    ],
  },
  badge: {
    component: TogeBadge,
    tag: 'toge-badge',
    propDefs: [
      { name: 'text', type: 'text', default: '99' },
      { name: 'variant', type: 'select', options: ['neutral', 'danger', 'disabled', 'information', 'brand'], default: 'brand' },
      { name: 'size', type: 'select', options: ['tiny', 'small', 'big'], default: 'big' },
      { name: 'position', type: 'select', options: ['top', 'bottom', 'default'], default: 'default' },
    ],
  },
  icon: {
    component: TogeIcon,
    tag: 'toge-icon',
    propDefs: [
      { name: 'icon', type: 'text', default: 'ph:star' },
      { name: 'size', type: 'select', options: ['2xs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl'], default: 'md' },
      { name: 'tone', type: 'select', options: ['', 'success', 'error', 'info', 'pending', 'caution'], default: '' },
      { name: 'ariaHidden', type: 'boolean', default: true },
    ],
  },
  lozenge: {
    component: TogeLozenge,
    tag: 'toge-lozenge',
    propDefs: [
      { name: 'label', type: 'text', default: 'Status' },
      { name: 'tone', type: 'select', options: ['plain', 'pending', 'information', 'success', 'danger', 'neutral', 'caution'], default: 'neutral' },
      { name: 'fill', type: 'boolean', default: false },
      { name: 'removable', type: 'boolean', default: false },
      { name: 'loading', type: 'boolean', default: false },
      { name: 'interactive', type: 'boolean', default: false },
    ],
  },
  status: {
    component: TogeStatus,
    tag: 'toge-status',
    propDefs: [
      { name: 'state', type: 'select', options: ['success', 'information', 'pending', 'caution', 'danger'], default: 'success' },
      { name: 'size', type: 'select', options: ['2xs', 'xs', 'sm', 'base', 'lg', 'xl', '2xl'], default: 'base' },
    ],
  },
  chips: {
    component: TogeChips,
    tag: 'toge-chips',
    propDefs: [
      { name: 'label', type: 'text', default: 'Label' },
      { name: 'size', type: 'select', options: ['lg', 'md', 'sm'], default: 'md' },
      { name: 'tone', type: 'select', options: ['default', 'subtle'], default: 'default' },
      { name: 'variant', type: 'select', options: ['tag', 'day'], default: 'tag' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'active', type: 'boolean', default: false },
      { name: 'closable', type: 'boolean', default: false },
    ],
  },
  avatar: {
    component: TogeAvatar,
    tag: 'toge-avatar',
    propDefs: [
      { name: 'variant', type: 'select', options: ['image', 'initial', 'client', 'user', 'user-group', 'count'], default: 'initial' },
      { name: 'size', type: 'select', options: ['2xl', 'xl', 'lg', 'md', 'sm', 'xs', '2xs'], default: 'md' },
      { name: 'initial', type: 'text', default: 'JD' },
      { name: 'color', type: 'select', options: ['primary', 'secondary', 'tertiary'], default: 'primary' },
      { name: 'badge', type: 'boolean', default: false },
      { name: 'notification', type: 'boolean', default: false },
      { name: 'loading', type: 'boolean', default: false },
    ],
  },
  collapsible: {
    component: TogeCollapsible,
    tag: 'toge-collapsible',
    propDefs: [
      { name: 'transitionDuration', type: 'number', default: 150 },
    ],
  },
  tooltip: {
    component: TogeTooltip,
    tag: 'toge-tooltip',
    propDefs: [
      { name: 'text', type: 'text', default: 'This is a tooltip' },
      { name: 'placement', type: 'select', options: ['top', 'top-start', 'top-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'right'], default: 'top' },
      { name: 'hasMaxWidth', type: 'boolean', default: true },
      { name: 'autoHide', type: 'boolean', default: false },
    ],
  },
  popper: {
    component: TogePopper,
    tag: 'toge-popper',
    propDefs: [],
  },

  // ─── Phase 2 — Form Controls ─────────────────────────────────────────────
  input: {
    component: TogeInput,
    tag: 'toge-input',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Label' },
      { name: 'placeholder', type: 'text', default: 'Enter text...' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'readonly', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'displayHelper', type: 'boolean', default: false },
      { name: 'helperText', type: 'text', default: 'Helper text' },
    ],
  },
  'input-search': {
    component: TogeInputSearch,
    tag: 'toge-input-search',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Search' },
      { name: 'placeholder', type: 'text', default: 'Search...' },
      { name: 'disabled', type: 'boolean', default: false },
    ],
  },
  'input-dropdown': {
    component: TogeInputDropdown,
    tag: 'toge-input-dropdown',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Label' },
      { name: 'placeholder', type: 'text', default: 'Enter text...' },
      { name: 'disabled', type: 'boolean', default: false },
    ],
  },
  'input-email': {
    component: TogeInputEmail,
    tag: 'toge-input-email',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Email' },
      { name: 'placeholder', type: 'text', default: 'email@example.com' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
    ],
  },
  'input-password': {
    component: TogeInputPassword,
    tag: 'toge-input-password',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Password' },
      { name: 'placeholder', type: 'text', default: 'Enter password...' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
    ],
  },
  'input-url': {
    component: TogeInputUrl,
    tag: 'toge-input-url',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'URL' },
      { name: 'placeholder', type: 'text', default: 'https://example.com' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
    ],
  },
  'input-username': {
    component: TogeInputUsername,
    tag: 'toge-input-username',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Username' },
      { name: 'placeholder', type: 'text', default: 'Enter username...' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
    ],
  },
  'input-contact-number': {
    component: TogeInputContactNumber,
    tag: 'toge-input-contact-number',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Contact Number' },
      { name: 'placeholder', type: 'text', default: '+1 (555) 000-0000' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
    ],
  },
  'input-currency': {
    component: TogeInputCurrency,
    tag: 'toge-input-currency',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Amount' },
      { name: 'placeholder', type: 'text', default: '0.00' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
    ],
  },
  textarea: {
    component: TogeTextarea,
    tag: 'toge-textarea',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Message' },
      { name: 'placeholder', type: 'text', default: 'Enter your message...' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'readonly', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'rows', type: 'number', default: 3 },
      { name: 'hasCounter', type: 'boolean', default: false },
      { name: 'maxLength', type: 'number', default: 200 },
    ],
  },
  checkbox: {
    component: TogeCheckbox,
    tag: 'toge-checkbox',
    hasModel: true,
    modelDefault: false,
    propDefs: [
      { name: 'label', type: 'text', default: 'Check me' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'bordered', type: 'boolean', default: false },
      { name: 'indeterminate', type: 'boolean', default: false },
    ],
  },
  radio: {
    component: TogeRadio,
    tag: 'toge-radio',
    hasModel: true,
    modelDefault: 'option1',
    defaultSlot: 'Radio Option',
    extraProps: { value: 'option1', name: 'playground-radio' },
    propDefs: [
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'bordered', type: 'boolean', default: false },
      { name: 'choiceBox', type: 'boolean', default: false },
    ],
  },
  'radio-grouped': {
    component: TogeRadioGrouped,
    tag: 'toge-radio-grouped',
    hasModel: true,
    modelDefault: 'option1',
    extraProps: {
      name: 'playground-radio-grouped',
      options: [
        { text: 'Option 1', value: 'option1' },
        { text: 'Option 2', value: 'option2' },
        { text: 'Option 3', value: 'option3' },
      ],
    },
    propDefs: [
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'bordered', type: 'boolean', default: false },
      { name: 'choiceBox', type: 'boolean', default: false },
      { name: 'fullWidth', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
    ],
  },
  switch: {
    component: TogeSwitch,
    tag: 'toge-switch',
    hasModel: true,
    modelDefault: false,
    propDefs: [
      { name: 'disabled', type: 'boolean', default: false },
    ],
  },
  slider: {
    component: TogeSlider,
    tag: 'toge-slider',
    hasModel: true,
    modelDefault: 0,
    propDefs: [
      { name: 'size', type: 'select', options: ['sm', 'lg'], default: 'lg' },
      { name: 'min', type: 'number', default: 0 },
      { name: 'max', type: 'number', default: 100 },
      { name: 'step', type: 'number', default: 1 },
      { name: 'disabled', type: 'boolean', default: false },
    ],
  },
  'file-upload': {
    component: TogeFileUpload,
    tag: 'toge-file-upload',
    propDefs: [
      { name: 'type', type: 'select', options: ['default', 'center'], default: 'default' },
      { name: 'title', type: 'text', default: 'Upload a file' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'multiple', type: 'boolean', default: false },
    ],
  },
  'progress-bar': {
    component: TogeProgressBar,
    tag: 'toge-progress-bar',
    propDefs: [
      { name: 'value', type: 'number', default: 40 },
      { name: 'max', type: 'number', default: 100 },
      { name: 'size', type: 'select', options: ['xs', 'sm', 'lg'], default: 'lg' },
      { name: 'color', type: 'select', options: ['success', 'danger', 'warning', 'info', 'neutral'], default: 'success' },
      { name: 'label', type: 'boolean', default: true },
      { name: 'labelPlacement', type: 'select', options: ['top', 'bottom', 'left', 'right', 'top-start', 'top-center', 'top-end', 'bottom-start', 'bottom-center', 'bottom-end'], default: 'bottom' },
      { name: 'supportingLabel', type: 'text', default: '' },
    ],
  },
  'empty-state': {
    component: TogeEmptyState,
    tag: 'toge-empty-state',
    propDefs: [
      { name: 'image', type: 'select', options: ['bug', 'clock', 'dashboard', 'employees', 'government-id', 'integration', 'list', 'social-media-handles', 'work-in-progress', 'work-location'], default: 'list' },
      { name: 'description', type: 'text', default: 'No items found' },
      { name: 'subDescription', type: 'text', default: '' },
      { name: 'size', type: 'select', options: ['small', 'large'], default: 'large' },
      { name: 'hasButton', type: 'boolean', default: false },
    ],
  },
  banner: {
    component: TogeBanner,
    tag: 'toge-banner',
    hasModel: true,
    modelDefault: true,
    propDefs: [
      { name: 'type', type: 'select', options: ['success', 'error', 'info', 'pending', 'caution'], default: 'info' },
      { name: 'message', type: 'text', default: 'This is a banner message.' },
      { name: 'showCloseButton', type: 'boolean', default: true },
    ],
  },
  card: {
    component: TogeCard,
    tag: 'toge-card',
    defaultSlot: 'Card content goes here.',
    extraProps: { style: 'width: 320px;' },
    propDefs: [
      { name: 'tone', type: 'select', options: ['plain', 'neutral', 'success', 'information', 'pending', 'caution', 'accent', 'danger'], default: 'plain' },
      { name: 'title', type: 'text', default: 'Card Title' },
      { name: 'showHeader', type: 'boolean', default: true },
      { name: 'showFooter', type: 'boolean', default: false },
      { name: 'hasCollapsible', type: 'boolean', default: false },
      { name: 'hasContentPadding', type: 'boolean', default: true },
    ],
  },
  logo: {
    component: TogeLogo,
    tag: 'toge-logo',
    propDefs: [
      { name: 'name', type: 'select', options: ['hr', 'payroll', 'recruit', 'finances', 'engage', 'insight', 'wellness', 'ecosystem', 'benchmark', 'procurement', 'sail', 'sidekick'], default: 'hr' },
      { name: 'theme', type: 'select', options: ['white', 'dark', 'gray', 'green'], default: 'dark' },
      { name: 'width', type: 'number', default: 120 },
    ],
  },
  'floating-action': {
    component: TogeFloatingAction,
    tag: 'toge-floating-action',
    defaultSlot: '+',
    propDefs: [
      { name: 'show', type: 'boolean', default: true },
    ],
  },
  'calendar-cell': {
    component: TogeCalendarCell,
    tag: 'toge-calendar-cell',
    propDefs: [
      { name: 'title', type: 'text', default: '09:00 AM' },
      { name: 'description', type: 'text', default: 'Team Meeting' },
      { name: 'state', type: 'select', options: ['success', 'information', 'pending', 'caution', 'danger'], default: 'information' },
      { name: 'fullwidth', type: 'boolean', default: false },
      { name: 'viewOnly', type: 'boolean', default: false },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'loading', type: 'boolean', default: false },
      { name: 'lineThrough', type: 'boolean', default: false },
    ],
  },

  // ─── Phase 3 — Layout + UI-State Components ─────────────────────────────────
  modal: {
    component: TogeModal,
    tag: 'toge-modal',
    hasModel: true,
    modelDefault: false,
    defaultSlot: 'Modal body content goes here.',
    propDefs: [
      { name: 'title', type: 'text', default: 'Modal Title' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg', 'xl', 'xxl'], default: 'md' },
      { name: 'closeButtonX', type: 'boolean', default: true },
      { name: 'contentPadding', type: 'boolean', default: true },
      { name: 'staticBackdrop', type: 'boolean', default: false },
    ],
  },
  sidepanel: {
    component: TogeSidepanel,
    tag: 'toge-sidepanel',
    hasModel: true,
    modelDefault: false,
    defaultSlot: 'Sidepanel content goes here.',
    propDefs: [
      { name: 'headerTitle', type: 'text', default: 'Sidepanel Header' },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg', 'xl'], default: 'sm' },
      { name: 'hasBackdrop', type: 'boolean', default: true },
      { name: 'closeOutside', type: 'boolean', default: true },
      { name: 'isExpandable', type: 'boolean', default: false },
    ],
  },
  accordion: {
    component: TogeAccordion,
    tag: 'toge-accordion',
    extraProps: {
      items: [
        { collapseId: 'item-1', title: 'First Panel', subtitle: 'Optional subtitle' },
        { collapseId: 'item-2', title: 'Second Panel' },
        { collapseId: 'item-3', title: 'Third Panel' },
      ],
    },
    propDefs: [
      { name: 'alwaysOpen', type: 'boolean', default: false },
      { name: 'isDefaultOpen', type: 'boolean', default: false },
      { name: 'trigger', type: 'select', options: ['button', 'header'], default: 'button' },
      { name: 'bordered', type: 'boolean', default: true },
    ],
  },
  tabs: {
    component: TogeTabs,
    tag: 'toge-tabs',
    hasModel: true,
    modelDefault: 0,
    extraProps: {
      list: [
        { label: 'Overview' },
        { label: 'Details' },
        { label: 'History' },
        { label: 'Disabled', disabled: true },
      ],
    },
    propDefs: [
      { name: 'underlined', type: 'boolean', default: false },
      { name: 'showBadge', type: 'boolean', default: false },
    ],
  },
  stepper: {
    component: TogeStepper,
    tag: 'toge-stepper',
    extraProps: {
      steps: [
        { number: 1, label: 'Personal Info', status: 'completed' },
        { number: 2, label: 'Work Details', status: 'active' },
        { number: 3, label: 'Review', status: 'pending' },
      ],
    },
    propDefs: [
      { name: 'variant', type: 'select', options: ['vertical', 'horizontal'], default: 'vertical' },
      { name: 'type', type: 'select', options: ['compact', 'solid'], default: 'compact' },
      { name: 'hasLines', type: 'boolean', default: false },
    ],
  },
  step: {
    component: TogeStep,
    tag: 'toge-step',
    propDefs: [
      { name: 'number', type: 'number', default: 1 },
      { name: 'label', type: 'text', default: 'Step Label' },
      { name: 'description', type: 'text', default: '' },
      { name: 'status', type: 'select', options: ['pending', 'active', 'completed'], default: 'active' },
      { name: 'type', type: 'select', options: ['compact', 'solid'], default: 'compact' },
    ],
  },
  'audit-trail': {
    component: TogeAuditTrail,
    tag: 'toge-audit-trail',
    extraProps: {
      logs: [
        {
          userName: 'John Doe',
          title: 'Updated employee profile',
          logs: [
            { label: ['Personal Info', 'First Name'], oldValue: 'Jon', newValue: 'John' },
            { label: ['Contact'], oldValue: 'N/A', newValue: '+63 917 123 4567' },
          ],
        },
        {
          userName: 'Jane Smith',
          title: 'Changed department assignment',
          logs: [
            { label: ['Department'], oldValue: 'Engineering', newValue: 'Product' },
          ],
        },
      ],
    },
    propDefs: [
      { name: 'alwaysOpen', type: 'boolean', default: true },
    ],
  },
  'time-picker': {
    component: TogeTimePicker,
    tag: 'toge-time-picker',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Time' },
      { name: 'interval', type: 'number', default: 30 },
      { name: 'format', type: 'select', options: ['24', '12'], default: '24' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'disableTyping', type: 'boolean', default: false },
    ],
  },

  // ─── Phase 4 — Data-Driven Components ───────────────────────────────────────
  list: {
    component: TogeList,
    tag: 'toge-list',
    hasModel: true,
    modelDefault: [],
    extraProps: {
      items: [
        { text: 'Option A', value: 'a', subtext: 'Sub A' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c', disabled: true },
        { text: 'Option D', value: 'd', icon: 'ph:star' },
      ],
    },
    propDefs: [
      { name: 'multiSelect', type: 'boolean', default: false },
      { name: 'searchable', type: 'boolean', default: false },
      { name: 'noCheck', type: 'boolean', default: false },
      { name: 'optionsLoader', type: 'boolean', default: false },
    ],
  },
  dropdown: {
    component: TogeDropdown,
    tag: 'toge-dropdown',
    propDefs: [
      { name: 'placement', type: 'select', options: ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end', 'left', 'right'], default: 'bottom' },
      { name: 'distance', type: 'number', default: 6 },
      { name: 'autoHide', type: 'boolean', default: true },
      { name: 'disabled', type: 'boolean', default: false },
    ],
  },
  select: {
    component: TogeSelect,
    tag: 'toge-select',
    hasModel: true,
    modelDefault: null,
    extraProps: {
      id: 'playground-select',
      options: [
        { text: 'Option 1', value: 'opt1' },
        { text: 'Option 2', value: 'opt2' },
        { text: 'Option 3', value: 'opt3', disabled: true },
      ],
    },
    propDefs: [
      { name: 'label', type: 'text', default: 'Select Label' },
      { name: 'placeholder', type: 'text', default: 'Choose an option' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'clearable', type: 'boolean', default: false },
      { name: 'searchable', type: 'boolean', default: false },
    ],
  },
  'select-multiple': {
    component: TogeSelectMultiple,
    tag: 'toge-select-multiple',
    hasModel: true,
    modelDefault: [],
    extraProps: {
      id: 'playground-select-multiple',
      options: [
        { text: 'Option A', value: 'a' },
        { text: 'Option B', value: 'b' },
        { text: 'Option C', value: 'c' },
      ],
    },
    propDefs: [
      { name: 'label', type: 'text', default: 'Multi Select' },
      { name: 'placeholder', type: 'text', default: 'Choose options' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'clearable', type: 'boolean', default: false },
      { name: 'searchable', type: 'boolean', default: false },
    ],
  },
  'select-ladderized': {
    component: TogeSelectLadderized,
    tag: 'toge-select-ladderized',
    hasModel: true,
    modelDefault: [],
    extraProps: {
      id: 'playground-select-ladderized',
      options: [
        { text: 'Region 1', value: 'r1', sublevel: [
          { text: 'City A', value: 'c1a' },
          { text: 'City B', value: 'c1b' },
        ]},
        { text: 'Region 2', value: 'r2', sublevel: [
          { text: 'City C', value: 'c2a' },
          { text: 'City D', value: 'c2b' },
        ]},
      ],
    },
    propDefs: [
      { name: 'label', type: 'text', default: 'Select Region' },
      { name: 'placeholder', type: 'text', default: 'Choose a location' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'clearable', type: 'boolean', default: false },
    ],
  },
  filter: {
    component: TogeFilter,
    tag: 'toge-filter',
    hasModel: true,
    modelDefault: [],
    extraProps: {
      options: [
        { label: 'All', value: 'all' },
        { label: 'Active', value: 'active' },
        { label: 'Inactive', value: 'inactive' },
        { label: 'Pending', value: 'pending' },
      ],
    },
    propDefs: [
      { name: 'multiple', type: 'boolean', default: false },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'size', type: 'select', options: ['sm', 'md', 'lg'], default: 'sm' },
    ],
  },
  'attribute-filter': {
    component: TogeAttributeFilter,
    tag: 'toge-attribute-filter',
    hasModel: true,
    modelDefault: {},
    extraProps: {
      groups: [
        {
          id: 'status',
          label: 'Status',
          items: [
            { label: 'Active', value: 'active' },
            { label: 'Inactive', value: 'inactive' },
          ],
        },
        {
          id: 'department',
          label: 'Department',
          items: [
            { label: 'Engineering', value: 'eng' },
            { label: 'Product', value: 'prod' },
            { label: 'Design', value: 'des' },
          ],
        },
      ],
    },
    propDefs: [
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'placement', type: 'select', options: ['bottom', 'bottom-start', 'bottom-end', 'top', 'top-start', 'top-end'], default: 'bottom' },
    ],
  },
  table: {
    component: TogeTable,
    tag: 'toge-table',
    extraProps: {
      headers: [
        { name: 'Name', field: 'name', sort: true },
        { name: 'Department', field: 'department', sort: true },
        { name: 'Status', field: 'status' },
      ],
      tableData: [
        { name: 'John Doe', department: 'Engineering', status: 'Active' },
        { name: 'Jane Smith', department: 'Product', status: 'Inactive' },
        { name: 'Bob Johnson', department: 'Design', status: 'Active' },
      ],
    },
    propDefs: [
      { name: 'isMultiSelect', type: 'boolean', default: false },
      { name: 'loading', type: 'boolean', default: false },
      { name: 'striped', type: 'boolean', default: false },
      { name: 'hoverable', type: 'boolean', default: true },
      { name: 'stickyHeader', type: 'boolean', default: false },
    ],
  },
  'table-actions': {
    component: TogeTableActions,
    tag: 'toge-table-actions',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'toggleSearch', type: 'boolean', default: true },
      { name: 'toggleOption', type: 'boolean', default: false },
      { name: 'toggleFilter', type: 'boolean', default: false },
    ],
  },
  'table-chips-title': {
    component: TogeTableChipsTitle,
    tag: 'toge-table-chips-title',
    extraProps: {
      cell: {
        title: 'John Doe',
        icon: 'ph:user',
        badge: true,
        badgeText: '3',
        badgeVariant: 'brand',
      },
    },
    propDefs: [],
  },
  'table-lozenge-title': {
    component: TogeTableLozengeTitle,
    tag: 'toge-table-lozenge-title',
    extraProps: {
      cell: {
        title: 'Active',
        tone: 'success',
        fill: true,
      },
    },
    propDefs: [],
  },
  'table-pagination': {
    component: TogeTablePagination,
    tag: 'toge-table-pagination',
    extraProps: {
      totalItems: 247,
    },
    propDefs: [
      { name: 'currentPage', type: 'number', default: 1 },
      { name: 'itemsPerPage', type: 'number', default: 10 },
      { name: 'showRowCount', type: 'boolean', default: true },
    ],
  },
  'date-calendar-picker': {
    component: TogeDateCalendarPicker,
    tag: 'toge-date-calendar-picker',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'mode', type: 'select', options: ['full', 'month-year', 'year-only'], default: 'full' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'readonly', type: 'boolean', default: false },
    ],
  },
  'date-picker': {
    component: TogeDatePicker,
    tag: 'toge-date-picker',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Date' },
      { name: 'placeholder', type: 'text', default: 'Select date' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'readonly', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'clearable', type: 'boolean', default: false },
    ],
  },
  'date-range-picker': {
    component: TogeDateRangePicker,
    tag: 'toge-date-range-picker',
    hasModel: true,
    modelDefault: { startDate: '', endDate: '' },
    propDefs: [
      { name: 'label', type: 'text', default: 'Date Range' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'separator', type: 'text', default: 'to' },
      { name: 'allowSameDay', type: 'boolean', default: false },
    ],
  },
  'month-year-picker': {
    component: TogeMonthYearPicker,
    tag: 'toge-month-year-picker',
    hasModel: true,
    modelDefault: '',
    propDefs: [
      { name: 'label', type: 'text', default: 'Month & Year' },
      { name: 'disabled', type: 'boolean', default: false },
      { name: 'error', type: 'boolean', default: false },
      { name: 'format', type: 'text', default: 'MM-YYYY' },
    ],
  },
  snackbar: {
    component: TogeSnackbar,
    tag: 'toge-snackbar',
    extraProps: {
      snacks: [
        { id: 1, text: 'Action completed successfully', tone: 'success', showIcon: true },
        { id: 2, text: 'Something went wrong', tone: 'error', showIcon: true },
      ],
    },
    propDefs: [
      { name: 'position', type: 'select', options: ['bottom-left', 'bottom-center', 'bottom-right', 'top-left', 'top-center', 'top-right'], default: 'bottom-left' },
    ],
  },
}

const componentKeys = Object.keys(componentRegistry)

const selectedKey = ref<keyof typeof componentRegistry>('button')
const collapsibleOpen = ref(false)
const formModelValue = ref<unknown>('')
const slotText = ref('')
const copied = ref(false)
const propValues = reactive<Record<string, unknown>>({})

const currentConfig = computed(() => componentRegistry[selectedKey.value])

function resetProps() {
  const config = componentRegistry[selectedKey.value]
  slotText.value = config.defaultSlot ?? ''
  formModelValue.value = config.modelDefault ?? ''
  // Clear and re-populate propValues
  for (const key of Object.keys(propValues)) {
    delete propValues[key]
  }
  for (const p of config.propDefs) {
    propValues[p.name] = p.default
  }
  collapsibleOpen.value = false
}

watch(selectedKey, resetProps, { immediate: true })

function updateProp(name: string, value: unknown) {
  propValues[name] = value
}

const currentProps = computed(() => {
  const result: Record<string, unknown> = {}
  if (currentConfig.value.extraProps) {
    Object.assign(result, currentConfig.value.extraProps)
  }
  for (const p of currentConfig.value.propDefs) {
    result[p.name] = propValues[p.name]
  }
  return result
})

const allBoundProps = computed(() => {
  if (currentConfig.value.hasModel) {
    return { ...currentProps.value, modelValue: formModelValue.value }
  }
  return currentProps.value
})

// ─── Code generation ─────────────────────────────────────────────────────────

const generatedCode = computed(() => {
  const tag = currentConfig.value.tag

  if (selectedKey.value === 'collapsible') {
    const dur = propValues.transitionDuration
    const durAttr = dur !== 150 ? ` :transition-duration="${dur}"` : ''
    return `<${tag} v-model="isOpen"${durAttr}>\n  <template #trigger="{ toggleCollapsible, isOpen }">\n    <button @click="toggleCollapsible" :aria-expanded="isOpen">\n      Toggle\n    </button>\n  </template>\n  Content goes here\n</${tag}>`
  }

  if (selectedKey.value === 'tooltip') {
    const changedAttrs = buildAttrString(currentConfig.value.propDefs)
    const attrPart = changedAttrs.length ? '\n  ' + changedAttrs.join('\n  ') + '\n' : ''
    return `<${tag}${attrPart ? attrPart : ' '}>\n  <template #popper-content>${propValues.text || 'Tooltip text'}</template>\n  <button>Hover me</button>\n</${tag}>`
  }

  if (selectedKey.value === 'popper') {
    return `<${tag} id="my-popper">\n  <button>Toggle popper</button>\n  <template #content>\n    Popper content\n  </template>\n</${tag}>`
  }

  const changedAttrs = buildAttrString(currentConfig.value.propDefs)
  const slot = slotText.value || ''

  if (changedAttrs.length > 2) {
    return `<${tag}\n  ${changedAttrs.join('\n  ')}\n>${slot ? '\n  ' + slot + '\n' : ''}</${tag}>`
  }

  const attrStr = changedAttrs.length ? ' ' + changedAttrs.join(' ') : ''
  return slot ? `<${tag}${attrStr}>${slot}</${tag}>` : `<${tag}${attrStr} />`
})

function buildAttrString(propDefs: PropDef[]): string[] {
  return propDefs
    .filter((p) => propValues[p.name] !== p.default && p.name !== 'hasIcon')
    .map((p) => {
      const val = propValues[p.name]
      if (typeof val === 'boolean') return val ? p.name : `:${p.name}="false"`
      if (typeof val === 'number') return `:${p.name}="${val}"`
      return `${p.name}="${val}"`
    })
}

async function copyCode() {
  try {
    await navigator.clipboard.writeText(generatedCode.value)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    // Fallback: silent fail in non-secure contexts
  }
}
</script>

<style scoped>
.toge-playground {
  font-family: inherit;
  max-width: 1200px;
  margin: 0 auto;
}

/* ── Header ─────────────────────────────────────────────────── */
.toge-playground__header {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.toge-playground__eyebrow {
  display: block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 4px;
}

.toge-playground__title {
  font-size: 22px;
  font-weight: 700;
  margin: 0;
  color: #111827;
}

.toge-playground__selector-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* ── Body layout ────────────────────────────────────────────── */
.toge-playground__body {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 16px;
  align-items: start;
}

@media (max-width: 900px) {
  .toge-playground__body {
    grid-template-columns: 1fr;
  }
}

/* ── Preview ────────────────────────────────────────────────── */
.toge-playground__preview {
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  min-height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 32px;
}

/* ── Side panel ─────────────────────────────────────────────── */
.toge-playground__side {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* ── Controls ───────────────────────────────────────────────── */
.toge-playground__controls {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 16px;
}

.toge-playground__section-title {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: #6b7280;
  margin: 0 0 12px 0;
}

.toge-playground__control {
  margin-bottom: 12px;
}

.toge-playground__control:last-child {
  margin-bottom: 0;
}

.toge-playground__ctrl-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: #374151;
  margin-bottom: 5px;
  font-family: ui-monospace, monospace;
}

.toge-playground__type-badge {
  font-size: 10px;
  font-weight: 500;
  font-family: inherit;
  color: #6b7280;
  background: #f3f4f6;
  padding: 1px 5px;
  border-radius: 4px;
  letter-spacing: 0;
}

.toge-playground__label {
  font-size: 12px;
  font-weight: 600;
  color: #374151;
}

.toge-playground__select {
  width: 100%;
  padding: 6px 8px;
  font-size: 13px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  color: #111827;
  outline: none;
  cursor: pointer;
}

.toge-playground__select:focus {
  border-color: #158039;
  box-shadow: 0 0 0 2px rgba(21, 128, 57, 0.15);
}

.toge-playground__input {
  width: 100%;
  padding: 6px 8px;
  font-size: 13px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  color: #111827;
  outline: none;
  box-sizing: border-box;
}

.toge-playground__input:focus {
  border-color: #158039;
  box-shadow: 0 0 0 2px rgba(21, 128, 57, 0.15);
}

.toge-playground__checkbox-row {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #374151;
  cursor: pointer;
}

.toge-playground__empty {
  font-size: 13px;
  color: #9ca3af;
  margin: 0;
}

/* ── Code panel ─────────────────────────────────────────────── */
.toge-playground__code {
  background: #1e1e2e;
  border-radius: 10px;
  overflow: hidden;
}

.toge-playground__code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.toge-playground__code-header .toge-playground__section-title {
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.toge-playground__copy-btn {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 5px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.15s ease;
}

.toge-playground__copy-btn:hover {
  border-color: #4ade80;
  color: #4ade80;
}

.toge-playground__pre {
  margin: 0;
  padding: 14px;
  font-size: 12px;
  line-height: 1.65;
  overflow-x: auto;
  color: #e2e8f0;
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', monospace;
}

/* ── Collapsible trigger button (used in preview) ───────────── */
.toge-playground__collapsible-btn {
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: all 0.15s ease;
}

.toge-playground__collapsible-btn:hover {
  background: #f9fafb;
  border-color: #158039;
}

.toge-playground__collapsible-content {
  padding: 16px;
  font-size: 14px;
  color: #374151;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-top: none;
  border-radius: 0 0 6px 6px;
}
</style>
