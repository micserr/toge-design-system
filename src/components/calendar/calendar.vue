<template>
  <SprCard :has-content-padding="false" class="spr-flex spr-h-full spr-flex-col spr-overflow-hidden">
    <template #content>
      <div :class="getCalendarClasses.contentWrapper">
        <div :class="[getCalendarClasses.headerWrapper]">
          <div class="spr-flex spr-items-center spr-justify-center spr-gap-size-spacing-3xs">
            <div class="spr-flex">
              <spr-button variant="tertiary" has-icon @click="prevWeek">
                <Icon icon="ph:caret-left-fill" class="spr-text-color-success-base" />
              </spr-button>
              <spr-button variant="tertiary" has-icon @click="nextWeek">
                <Icon icon="ph:caret-right-fill" class="spr-text-color-success-base" />
              </spr-button>
            </div>
            <div class="spr-heading-xs">{{ weekRangeDisplay }}</div>
          </div>

          <spr-button variant="secondary" size="large" @click="goToToday"> Today </spr-button>
        </div>
        <!-- Filters -->
        <slot name="filter" />

        <div ref="tableBodyRef" class="spr-table-wrapper spr-h-[calc(100vh-12rem)] spr-w-full spr-overflow-auto">
          <div class="spr-pb-size-spacing-lg">
            <table aria-describedby="calendar" :class="[getCalendarClasses.calendarTable, 'spr-relative']">
              <!-- Calendar Header -->
              <thead class="spr-bg-white spr-sticky spr-top-0 spr-z-20">
                <tr>
                  <th :class="[getCalendarClasses.tableHeaderEmployeeName, 'spr-sticky spr-left-0']">
                    <div :class="getCalendarClasses.headerContent">
                      <div>Employee Name</div>
                      <div
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
              <tbody v-if="employees.length > 0 && !loading" class="spr-overflow-y-auto">
                <tr v-for="employee in employees" :key="employee.id">
                  <td
                    :class="[
                      getCalendarClasses.borderClasses,
                      'spr-bg-white spr-sticky spr-left-0 spr-z-10 spr-content-start spr-border-y spr-border-b-0 spr-border-l-0 spr-border-r spr-p-size-spacing-xs',
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
                      <div class="spr-label-xs-regular">{{ employee.name }}</div>
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
                      'spr-min-w-[180px] spr-content-start spr-space-y-size-spacing-3xs spr-border-x spr-border-b-0 spr-border-t spr-p-size-spacing-sm last:spr-mb-size-spacing-lg last:spr-border-r-0',
                    ]"
                    @mouseover="handleHover(true, index, employee.id)"
                    @mouseleave="handleHover(false, index, employee.id)"
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
                          v-if="schedule.type === 'restday'"
                          class="spr-flex spr-flex-col spr-items-center spr-justify-start"
                          @click="
                            onCellClick({
                              employeeId: employee.id,
                              date: formatDate(date, dateFormat),
                              shift: 'restday',
                            })
                          "
                        >
                          <spr-calendar-cell type="restday" fullwidth />
                        </div>
                        <div
                          class="spr-flex spr-flex-col spr-items-center spr-justify-start"
                          v-else
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
                            fullwidth
                          />
                        </div>
                      </div>
                    </section>

                    <section v-if="showAddShift(index, employee.id)">
                      <spr-calendar-cell
                        status="pending"
                        type="exempt"
                        :view-only="false"
                        fullwidth
                        @on-click="
                          onCellClick({ employeeId: employee.id, date: formatDate(date, dateFormat), shift: null })
                        "
                      >
                        <template #prefix>
                          <Icon icon="ph:plus" />
                        </template>
                        <div class="spr-label-xs-medium">Add New Shift</div>
                      </spr-calendar-cell>
                    </section>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
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
                <tr v-else>
                  <td :colspan="weekDates.length + 1" class="spr-h-[360px] spr-overflow-hidden">
                    <slot name="loading">
                      <div class="spr-flex spr-items-center spr-justify-center">
                        <Icon size="48" icon="svg-spinners:ring-resize" class="spr-text-color-success-base" />
                      </div>
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
  showAddShift,
  handleSorting,
} = useCalendar(props, emit);
</script>
