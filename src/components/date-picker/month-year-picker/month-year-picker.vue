<template>
  <div>
    <Menu
      v-model:shown="monthYearPopperState"
      aria-id="month-year-picker-wrapper"
      distance="4"
      :placement="props.placement"
      :triggers="[]"
      :popper-hide-triggers="[]"
      :auto-hide="true"
      :disabled="isMonthYearPickerPopperDisabled"
      :container="props.popperContainer ? props.popperContainer : `#${props.id}`"
      :strategy="
        props.popperStrategy === 'fixed' || props.popperStrategy === 'absolute' ? props.popperStrategy : 'absolute'
      "
      :delay="0"
      :style="{
        position: props.wrapperPosition,
        width: props.width,
      }"
    >
      <div :id="props.id" class="spr-grid spr-gap-size-spacing-4xs">
        <label v-if="props.label" :for="props.id" :class="monthYearPickerClasses.labelClasses">
          {{ props.label }}
        </label>
        <slot :handle-click="handleSlotClick">
          <div
            ref="monthYearPickerRef"
            :class="[monthYearPickerClasses.monthYearPickerBaseInputClasses, 'spr-relative spr-z-10']"
            @click="monthYearPopperState = true"
          >
            <div class="spr-flex spr-h-full spr-items-center spr-gap-1.5">
              <input
                :id="`${props.id}-month`"
                ref="monthInputRef"
                v-model="monthInput"
                :class="['spr-w-[38px] spr-min-w-[38px]', monthYearPickerClasses.monthYearPickerInputClasses]"
                type="text"
                placeholder="MMM"
                maxlength="3"
                :disabled="props.disabled"
                :readonly="props.readonly"
                autocomplete="off"
                @input="handleMonthInput"
                @keyup="handleMonthInput"
                @keydown="handleBackspace('month', $event)"
              />
              <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
              <input
                :id="`${props.id}-year`"
                ref="yearInputRef"
                v-model="yearInput"
                :class="['spr-w-[42px] spr-min-w-[42px]', monthYearPickerClasses.monthYearPickerInputClasses]"
                type="text"
                placeholder="YYYY"
                maxlength="4"
                :disabled="props.disabled"
                :readonly="props.readonly"
                autocomplete="off"
                @input="handleYearInput"
                @keyup="handleYearInput"
                @keydown="handleBackspace('year', $event)"
              />
            </div>
            <div class="spr-flex spr-items-center spr-justify-center">
              <Icon class="spr-text-color-supporting spr-h-4 spr-w-4" icon="ph:calendar-blank" />
            </div>
          </div>
        </slot>
      </div>

      <template #popper>
        <div ref="monthYearPickerRef">
          <div
            :class="[
              'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
              'spr-border spr-border-x-0 spr-border-b spr-border-t-0 spr-border-solid spr-border-mushroom-200',
            ]"
          >
            <!-- Tabs -->
            <div class="spr-flex spr-gap-1">
              <spr-button
                :class="getTabClasses('tab-months')"
                variant="secondary"
                size="small"
                @click="handleTabClick('tab-months')"
              >
                {{ getMonthObject('monthValue', selectedMonth ?? 0)?.fullText || 'Month' }}
              </spr-button>
              <spr-button
                :class="getTabClasses('tab-years')"
                variant="secondary"
                size="small"
                @click="handleTabClick('tab-years')"
              >
                {{ yearInput || 'Year' }}
              </spr-button>
            </div>

            <!-- Next & Previous Buttons (for Year Tab) -->
            <div v-if="currentTab === 'tab-years'" class="spr-flex spr-gap-1">
              <spr-button
                class="spr-cursor-pointer"
                variant="secondary"
                size="small"
                :disabled="yearTabIsPreviousButtonDisabled"
                @click="yearTabGoToPreviousPage"
              >
                <Icon icon="ph:caret-left" />
              </spr-button>
              <spr-button
                class="spr-cursor-pointer"
                variant="secondary"
                size="small"
                :disabled="yearTabIsNextButtonDisabled"
                @click="yearTabGoToNextPage"
              >
                <Icon icon="ph:caret-right" />
              </spr-button>
            </div>
          </div>
          <div class="spr-px-4 spr-pb-4 spr-pt-2">
            <!-- Months Tab -->
            <div v-if="currentTab === 'tab-months'" class="spr-grid spr-grid-cols-4 spr-gap-2">
              <div
                v-for="(month, monthIndex) in monthsList"
                :key="monthIndex"
                :class="[
                  monthYearPickerClasses.monthsTabItemsBaseClasses,
                  {
                    'spr-text-color-brand-base': month.monthValue === currentDate.month(),
                    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
                      month.text.toLowerCase() !== monthInput.toLowerCase(),
                    'spr-border-color-brand-base spr-background-color-single-active':
                      month.text.toLowerCase() === monthInput.toLowerCase(),
                  },
                ]"
                @click="monthTabHandleSelectedMonth(month)"
              >
                <span>{{ month.text }}</span>

                <div
                  v-if="month.monthValue === currentDate.month()"
                  class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
                ></div>
              </div>
            </div>

            <!-- Years Tab -->
            <div v-if="currentTab === 'tab-years'" class="spr-grid spr-grid-cols-4 spr-gap-2">
              <div
                v-for="(year, index) in yearTabCurrentYearPage"
                :key="index"
                :class="[
                  monthYearPickerClasses.yearsTabItemsBaseClasses,
                  {
                    'spr-text-color-brand-base': year === currentDate.year(),
                    'spr-border-color-weak hover:spr-background-color-hover active:spr-background-color-pressed':
                      year !== Number(yearInput),
                    'spr-border-color-brand-base spr-background-color-single-active': year === Number(yearInput),
                  },
                ]"
                @click="yearTabHandleSelectedYear(String(year))"
              >
                <span>{{ year }}</span>
                <div
                  v-if="year === currentDate.year()"
                  class="spr-background-color-brand-base spr-absolute spr-bottom-2 spr-m-auto spr-h-1 spr-w-1 spr-rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Menu>
    <div v-if="props.displayHelper" :class="monthYearPickerClasses.monthYearPickerInputHelperClasses">
      <slot name="helperMessage">
        <Icon v-if="props.helperIcon" class="spr-h-5 spr-min-h-5 spr-w-5 spr-min-w-5" :icon="props.helperIcon" />
        <span>{{ props.helperText }}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { monthYearPickerPropTypes, monthYearPickerEmitTypes } from './month-year-picker';
import { useMonthYearPicker } from './use-month-year-picker';

import SprButton from '@/components/button/button.vue';

const props = defineProps(monthYearPickerPropTypes);
const emit = defineEmits(monthYearPickerEmitTypes);

const {
  monthYearPickerClasses,
  monthYearPickerRef,
  monthInputRef,
  yearInputRef,
  monthYearPopperState,
  currentTab,
  currentDate,
  monthsList,
  monthInput,
  yearInput,
  selectedMonth,
  monthTabHandleSelectedMonth,
  yearTabCurrentYearPage,
  yearTabGoToPreviousPage,
  yearTabGoToNextPage,
  yearTabIsPreviousButtonDisabled,
  yearTabIsNextButtonDisabled,
  yearTabHandleSelectedYear,
  getMonthObject,
  getTabClasses,
  isMonthYearPickerPopperDisabled,
  handleMonthInput,
  handleYearInput,
  handleTabClick,
  handleBackspace,
  clearMonthYear,
  handleSlotClick,
} = useMonthYearPicker(props, emit);

defineExpose({
  clear: () => clearMonthYear(),
});
</script>

