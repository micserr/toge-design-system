<template>
  <SprCard flexbox :has-content-padding="false" class="spr-flex spr-h-full spr-flex-col spr-overflow-hidden">
    <template #content>
      <div :class="getCalendarClasses.contentWrapper">
        <div :class="[getCalendarClasses.headerWrapper]">
          <div class="spr-flex spr-items-center spr-justify-center spr-gap-size-spacing-3xs">
            <div class="spr-flex">
              <spr-button id="calendar-prev-week" variant="tertiary" has-icon @click="prevWeek">
                <Icon icon="ph:caret-left-fill" class="spr-text-color-success-base" />
              </spr-button>
              <spr-button id="calendar-next-week" variant="tertiary" has-icon @click="nextWeek">
                <Icon icon="ph:caret-right-fill" class="spr-text-color-success-base" />
              </spr-button>
            </div>
            <div class="spr-heading-xs">{{ weekRangeDisplay }}</div>
          </div>

          <div class="spr-flex spr-items-center spr-justify-center spr-gap-size-spacing-3xs">
            <spr-button id="calendar-today" variant="secondary" size="large" @click="goToToday"> Today </spr-button>
            <slot name="headerActions" />
          </div>
        </div>
        <!-- Filters -->
        <slot name="filter" />

        <div class="spr-table-wrapper spr-relative spr-flex spr-h-full spr-flex-col spr-overflow-hidden">
          <div class="spr-h-full">
            <table id="table-calendar" aria-describedby="calendar" :class="getCalendarClasses.calendarTable">
              <!-- Calendar Header -->
              <thead>
                <tr>
                  <th
                    :class="[
                      getCalendarClasses.tableHeaderEmployeeName,
                      'spr-sticky spr-left-0',
                      getCalendarClasses.borderClasses,
                    ]"
                  >
                    <div :class="getCalendarClasses.headerContent">
                      <div>Employee Name</div>
                      <div
                        id="calendar-sort-button"
                        :class="['spr-flex spr-cursor-pointer spr-flex-row spr-items-center spr-p-size-spacing-6xs']"
                        @click="handleSorting"
                      >
                        <Icon :icon="getSortIcon" height="16" width="16" :class="[{ 'spr-text-kangkong-700': sort }]" />
                      </div>
                    </div>
                  </th>
                  <th
                    v-for="(date, index) in weekDates"
                    :key="index"
                    :class="[getCalendarClasses.borderClasses, getCalendarClasses.tableHeader]"
                  >
                    <div :class="getCalendarClasses.headerContent">
                      <div
                        :class="[
                          getCalendarClasses.headerDate,
                          {
                            'spr-background-color-brand-base spr-text-color-inverted-strong': isToday(date),
                          },
                        ]"
                      >
                        {{ formatDate(date, 'DD') }}
                      </div>
                      <div class="spr-body-sm-regular">
                        {{ formatDate(date, 'ddd').toUpperCase() }}
                      </div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody v-if="employees.length > 0 && !loading" ref="tableBodyRef" class="spr-h-full spr-overflow-y-auto">
                <tr v-for="employee in employees" :key="employee.id">
                  <td
                    :class="[
                      getCalendarClasses.borderClasses,
                      'spr-bg-white spr-sticky spr-left-0 spr-z-10 spr-content-start spr-border-y spr-border-l-0 spr-border-r spr-border-t-0 spr-p-size-spacing-xs',
                    ]"
                  >
                    <div class="spr-flex spr-flex-col spr-gap-size-spacing-3xs spr-overflow-hidden">
                      <spr-avatar
                        :src="employee.avatar"
                        :initial="employee.name"
                        size="md"
                        :variant="employee.avatar ? 'image' : 'initial'"
                        color="tertiary"
                      />
                      <div class="spr-label-xs-regular">
                        {{ employee.name }}
                      </div>
                      <div class="spr-text-color-supporting spr-label-xs-regular spr-uppercase">
                        {{ employee.position }}
                      </div>
                    </div>
                    <div v-if="employee.hoursWorked && employee.hoursTarget" class="spr-mt-size-spacing-xs">
                      <spr-lozenge
                        :label="`${employee.hoursWorked || 0}/${employee.hoursTarget || 48} HRS`"
                        tone="neutral"
                      >
                        <template #icon>
                          <Icon icon="ph:clock" />
                        </template>
                      </spr-lozenge>
                    </div>
                  </td>
                  <td
                    v-for="(date, index) in weekDates"
                    :key="index"
                    :class="[
                      getCalendarClasses.borderClasses,
                      'spr-min-w-[180px] spr-content-start spr-space-y-size-spacing-3xs spr-border-x spr-border-b spr-border-t-0 spr-p-size-spacing-sm last:spr-mb-size-spacing-lg last:spr-border-r-0',
                    ]"
                    @mouseover="handleHover(true, index, employee.id)"
                    @mouseleave="handleHover(false, index, employee.id)"
                    @click.self="handleClick(true, index, employee.id)"
                  >
                    <slot
                      name="calendarData"
                      :details="{
                        data: { ...employee },
                        date: formatDate(date, dateFormat),
                        shift: employee.schedule[formatDate(date, dateFormat)],
                        index: index,
                        employeeId: employee.id,
                      }"
                    >
                      <section
                        v-if="
                          employee.schedule[formatDate(date, dateFormat)] &&
                          employee.schedule[formatDate(date, dateFormat)].length > 0
                        "
                        class="spr-flex spr-flex-col spr-justify-start spr-gap-size-spacing-3xs"
                      >
                        <div
                          v-for="(schedule, scheduleIndex) in employee.schedule[formatDate(date, dateFormat)]"
                          :key="scheduleIndex"
                          class="spr-w-full"
                        >
                          <div
                            v-if="schedule.type === 'restday' || schedule.type === 'exempted'"
                            class="spr-flex spr-flex-col spr-items-center spr-justify-start"
                            @click="
                              onCellClick({
                                employeeId: employee.id,
                                date: formatDate(date, dateFormat),
                                shift: 'restday',
                              })
                            "
                          >
                            <spr-calendar-cell :type="schedule.type === 'restday' ? 'restday' : 'exempt'" fullwidth>
                              <template v-if="schedule.type === 'restday'" #prefix>
                                <Icon icon="ph:bed" />
                              </template>
                            </spr-calendar-cell>
                          </div>
                          <div
                            v-else
                            class="spr-flex spr-flex-col spr-items-center spr-justify-start"
                            @click="
                              onCellClick({
                                employeeId: employee.id,
                                date: formatDate(date, dateFormat),
                                shift: schedule,
                              })
                            "
                          >
                            <spr-calendar-cell
                              :view-only="false"
                              :title="`${schedule.startTime} - ${schedule.endTime}`"
                              :description="schedule.location"
                              :sub-description="schedule.type"
                              :type="schedule.color"
                              fullwidth
                            />
                          </div>
                        </div>
                      </section>

                      <section>
                        <slot
                          name="fixedCell"
                          :details="{
                            employeeId: employee.id,
                            date: formatDate(date, dateFormat),
                            shift: employee.schedule[formatDate(date, dateFormat)],
                          }"
                        />
                      </section>

                      <section v-if="showCustomSlot(index, employee.id)">
                        <slot
                          name="hoverCell"
                          :details="{
                            employeeId: employee.id,
                            date: formatDate(date, dateFormat),
                            shift: employee.schedule[formatDate(date, dateFormat)],
                          }"
                        />
                      </section>

                      <section
                        v-if="clickedCellIndex === index && employeeIdClickedCell === Number(employee.id) && isClick"
                      >
                        <slot
                          name="clickedCell"
                          :details="{
                            employeeId: employee.id,
                            date: formatDate(date, dateFormat),
                            shift: employee.schedule[formatDate(date, dateFormat)],
                          }"
                        />
                      </section>
                    </slot>

                    <section v-if="showCopyShift(index, employee.id)">
                      <slot
                        name="copy"
                        :copy="{
                          employeeId: employee.id,
                          date: formatDate(date, dateFormat),
                          shift: employee.schedule[formatDate(date, dateFormat)],
                        }"
                      >
                        <spr-calendar-cell
                          :view-only="false"
                          custom-border-size="1"
                          custom-color="#FFFFFF"
                          fullwidth
                          @on-click="
                            onCellClick({ employeeId: details.employeeId, date: details.date, shift: details.shift })
                          "
                        >
                          <div class="spr-flex spr-w-full spr-items-center spr-justify-center spr-gap-size-spacing-3xs">
                            <Icon icon="ph:copy-light" />
                            <div class="spr-label-xs-medium">Copy</div>
                          </div>
                        </spr-calendar-cell>
                      </slot>
                    </section>
                  </td>
                </tr>
                <tr v-if="props.infiniteLoading || props.loadingTextCompleted">
                  <td
                    :colspan="weekDates.length + 1"
                    class="spr-flex spr-h-full spr-items-center spr-justify-center spr-p-size-spacing-xs"
                  >
                    <div v-if="props.infiniteLoading">
                      <Icon icon="svg-spinners:ring-resize" class="spr-text-color-success-base spr-font-size-400" />
                    </div>

                    <div v-else>
                      {{ props.loadingTextCompleted }}
                    </div>
                  </td>
                </tr>
              </tbody>
              <tbody v-if="employees.length === 0 && loading">
                <tr v-for="employeeKey in 10" :key="employeeKey">
                  <td
                    :class="[
                      getCalendarClasses.borderClasses,
                      'spr-bg-white spr-sticky spr-left-0 spr-z-10 spr-content-start spr-border-y spr-border-l-0 spr-border-r spr-border-t-0 spr-p-size-spacing-xs',
                    ]"
                  >
                    <div class="spr-flex spr-flex-col spr-gap-size-spacing-3xs spr-overflow-hidden">
                      <spr-avatar size="md" variant="initial" color="tertiary" loading />
                      <div :class="[{ 'spr-skeletal-loader spr-h-6 spr-rounded-md': true }]" />
                      <div :class="[{ 'spr-skeletal-loader spr-h-6 spr-rounded-md': true }]" />
                    </div>
                    <div class="spr-mt-size-spacing-xs">
                      <spr-lozenge loading />
                    </div>
                  </td>
                  <td
                    v-for="weekDays in 7"
                    :key="weekDays"
                    :class="[
                      getCalendarClasses.borderClasses,
                      'spr-min-w-[180px] spr-content-start spr-space-y-size-spacing-3xs spr-border-x spr-border-b spr-border-t-0 spr-p-size-spacing-sm last:spr-mb-size-spacing-lg last:spr-border-r-0',
                    ]"
                  >
                    <section class="spr-flex spr-flex-col spr-justify-start spr-gap-size-spacing-3xs">
                      <div v-for="weekDaysValue in 1" :key="weekDaysValue" class="spr-w-full">
                        <div class="spr-flex spr-flex-col spr-items-center spr-justify-start">
                          <spr-calendar-cell type="restday" fullwidth loading />
                        </div>
                      </div>
                    </section>
                  </td>
                </tr>
              </tbody>
              <tbody v-else class="spr-h-full">
                <tr v-if="!loading" class="spr-h-full">
                  <td :colspan="weekDates.length + 1" class="spr-flex spr-h-full spr-items-center spr-justify-center">
                    <slot name="empty-state">
                      <SprEmptyState
                        size="large"
                        :description="emptyStateTitle"
                        :sub-description="emptyStateDescription"
                      >
                        <template v-if="emptyStateButtonText" #button>
                          <spr-button tone="success"
                            ><Icon icon="ph:plus" @click="$emit('onClickEmptyButton')" />{{
                              emptyStateButtonText
                            }}</spr-button
                          >
                        </template>
                      </SprEmptyState>
                    </slot>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </template>
  </SprCard>
</template>

<script setup lang="ts">
import { useSlots } from 'vue';
import { Icon } from '@iconify/vue';
import SprButton from '@/components/button/button.vue';
import SprAvatar from '@/components/avatar/avatar.vue';
import SprCard from '@/components/card/card.vue';
import SprLozenge from '@/components/lozenge/lozenge.vue';
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue';
import SprEmptyState from '@/components/empty-state/empty-state.vue';
import { calendarPropTypes, calendarEmitTypes } from './calendar';

const props = defineProps(calendarPropTypes);
import { useCalendar } from './use-calendar';
const emit = defineEmits(calendarEmitTypes);
const slots = useSlots();

const {
  // State
  weekDates,
  weekRangeDisplay,
  getCalendarClasses,
  dateFormat,
  getSortIcon,
  sort,
  tableBodyRef,
  // Function
  formatDate,
  isToday,
  prevWeek,
  nextWeek,
  goToToday,
  onCellClick,
  handleHover,
  showCopyShift,
  handleSorting,
  showCustomSlot,
  handleClick,
  clickedCellIndex,
  employeeIdClickedCell,
  isClick,
} = useCalendar(props, emit, slots);
</script>
