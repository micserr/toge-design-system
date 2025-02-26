<template>
  <Menu
    v-model:shown="datePopperState"
    class="spr-grid spr-w-fit spr-gap-2"
    aria-id="date-picker-wrapper"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
    :auto-hide="false"
  >
    <label v-if="props.label" :for="props.id" :class="datePickerClasses.labelClasses">
      {{ props.label }}
    </label>
    <div
      ref="datePickerBaseInput"
      :class="datePickerClasses.datePickerBaseInputClasses"
      @click="datePopperState = true"
    >
      <div class="spr-flex spr-h-full spr-w-full spr-items-center spr-gap-1.5">
        <input
          v-model="monthInput"
          :class="[
            'spr-h-full spr-w-[36px] spr-min-w-[36px] spr-border-none spr-bg-transparent spr-outline-none',
            'spr-text-color-strong spr-font-size-200',
            'placeholder:spr-text-color-weak',
          ]"
          type="text"
          placeholder="MMM"
          maxlength="3"
          @input="handleMonthInput"
          @keyup="handleMonthInput"
        />
        <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
        <input
          v-model="dayInput"
          :class="[
            'spr-h-full spr-w-[20px] spr-min-w-[20px] spr-border-none spr-bg-transparent spr-outline-none',
            'spr-text-color-strong spr-font-size-200',
            'placeholder:spr-text-color-weak',
          ]"
          type="text"
          placeholder="DD"
          maxlength="2"
          @input="handleDayInput"
          @keyup="handleDayInput"
        />
        <span class="spr-text-color-strong spr-font-size-200 spr-text-color-weak">/</span>
        <input
          v-model="yearInput"
          :class="[
            'spr-h-full spr-w-[42px] spr-min-w-[42px] spr-border-none spr-bg-transparent spr-outline-none',
            'spr-text-color-strong spr-font-size-200',
            'placeholder:spr-text-color-weak',
          ]"
          type="text"
          placeholder="YYYY"
          maxlength="4"
          @input="handleYearInput"
          @keyup="handleYearInput"
        />
      </div>
      <div class="spr-flex spr-items-center spr-justify-center">
        <Icon class="spr-h-5 spr-w-5 spr-text-mushroom-300" icon="ph:calendar-blank" />
      </div>
    </div>

    <template #popper>
      <div @click="datePopperState = true">
        <div
          :class="[
            'spr-flex spr-justify-between spr-gap-2 spr-px-4 spr-py-3',
            'spr-border spr-border-solid spr-border-mushroom-200',
          ]"
        >
          <div class="spr-flex spr-gap-1">
            <spr-button class="spr-cursor-pointer" variant="secondary" size="small" @click="currentTab = 'tab-months'">
              January
            </spr-button>
            <spr-button class="spr-cursor-pointer" variant="secondary" size="small" @click="currentTab = 'tab-years'">
              2024
            </spr-button>
          </div>
          <div v-if="currentTab !== 'tab-months'" class="spr-flex spr-gap-1">
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
          <div
            v-if="currentTab === 'tab-dates'"
            class="spr-grid spr-grid-cols-7 spr-gap-1 spr-border spr-border-black spr-text-center"
          >
            <div
              v-for="(day, dayIndex) in daysList"
              :key="dayIndex"
              class="spr-subheading-xs spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2"
            >
              {{ day.slice(0, 2) }}
            </div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2"></div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2"></div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2"></div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">1</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">2</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">3</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">4</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">5</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">6</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">7</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">8</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">9</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">10</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">11</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">12</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">13</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">14</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">15</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">16</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">17</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">18</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">19</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">20</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">21</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">22</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">23</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">24</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">25</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">26</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">27</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">28</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">29</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">30</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2">31</div>
            <div class="spr-flex spr-h-10 spr-w-10 spr-items-center spr-justify-center spr-p-2"></div>
          </div>

          <div v-if="currentTab === 'tab-months'" class="spr-grid spr-grid-cols-4 spr-gap-2">
            <div
              v-for="(month, monthIndex) in monthsList"
              :key="monthIndex"
              :class="[
                'spr-subheading-xs spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
                'spr-border-color-weak spr-border spr-border-solid',
                'spr-transition spr-duration-150 spr-ease-in-out',
                'hover:spr-background-color-hover',
                'active:spr-background-color-pressed active:spr-scale-95',
              ]"
              @click="currentTab = 'tab-dates'"
            >
              {{ month.slice(0, 3) }}
            </div>
          </div>

          <div v-if="currentTab === 'tab-years'" class="spr-grid spr-grid-cols-4 spr-gap-2">
            <div
              v-for="(year, index) in yearTabCurrentYearPage"
              :key="index"
              :class="[
                'spr-subheading-xs spr-flex spr-cursor-pointer spr-items-center spr-justify-center spr-rounded-lg spr-p-4',
                'spr-border-color-weak spr-border spr-border-solid',
                'spr-transition spr-duration-150 spr-ease-in-out',
                'hover:spr-background-color-hover',
                'active:spr-background-color-pressed active:spr-scale-95',
              ]"
            >
              {{ year }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { datePickerPropTypes, datePickerEmitTypes } from './date-picker';
import { useDatePicker } from './use-date-picker';

import SprButton from '@/components/button/button.vue';

const props = defineProps(datePickerPropTypes);
const emit = defineEmits(datePickerEmitTypes);

const {
  datePickerClasses,
  datePickerBaseInput,
  datePopperState,
  monthsList,
  daysList,
  monthInput,
  dayInput,
  yearInput,
  handleMonthInput,
  handleDayInput,
  handleYearInput,
  currentTab,
  yearTabCurrentYearPage,
  yearTabGoToPreviousPage,
  yearTabGoToNextPage,
  yearTabIsPreviousButtonDisabled,
  yearTabIsNextButtonDisabled,
} = useDatePicker(props, emit);
</script>
