<template>
  <SprCard :has-content-padding="false">
    <template #header>
      <div :class="[getCalendarClasses.borderClasses, getCalendarClasses.headerWrapper]">
        <div class="spr-flex spr-items-center spr-gap-size-spacing-3xs">
          <div class="spr-flex">
            <spr-button variant="tertiary" has-icon @click="prevWeek">
              <Icon icon="ph:caret-left-fill" class="spr-text-color-success-base" />
            </spr-button>
            <spr-button variant="tertiary" has-icon @click="nextWeek">
              <Icon icon="ph:caret-right-fill" class="spr-text-color-success-base" />
            </spr-button>
          </div>
          <h2 class="spr-heading-xs">{{ weekRangeDisplay }}</h2>
        </div>

        <spr-button variant="secondary" size="small" @click="goToToday"> Today </spr-button>
      </div>
    </template>

    <template #content>
      <div :class="getCalendarClasses.contentWrapper">
        <!-- Filters -->
        <slot name="filter">
          <div :class="getCalendarClasses.calendarFilter">
            <spr-input v-model="searchTerm" placeholder="Search Employee">
              <template #icon>
                <Icon icon="ph:magnifying-glass" />
              </template>
            </spr-input>

            <spr-dropdown
              id="company-dropdown"
              v-model="companyDropDown"
              :menu-list="companyOptions"
              @update:model-value="(e) => handleFilter('company', e[0])"
            >
              <!-- @update:model-value="(e) => (selectedCompany = e[0])" -->
              <spr-input v-model="selectedCompany" placeholder="Company">
                <template #icon>
                  <Icon icon="ph:caret-down" />
                </template>
              </spr-input>
            </spr-dropdown>

            <spr-dropdown
              id="department-dropdown"
              v-model="departmentDropDown"
              :menu-list="departmentOptions"
              @update:model-value="(e) => handleFilter('department', e[0])"
            >
              <spr-input v-model="selectedDepartment" placeholder="Department">
                <template #icon>
                  <Icon icon="ph:caret-down" />
                </template>
              </spr-input>
            </spr-dropdown>

            <spr-dropdown
              id="branch-dropdown"
              v-model="branchDropDown"
              :menu-list="branchOptions"
              @update:model-value="(e) => handleFilter('branch', e[0])"
            >
              <spr-input v-model="selectedBranch" placeholder="Branch">
                <template #icon>
                  <Icon icon="ph:caret-down" />
                </template>
              </spr-input>
            </spr-dropdown>
          </div>
        </slot>

        <div class="spr-table-wrapper">
          <table :class="getCalendarClasses.calendarTable">
            <!-- Calendar Header -->
            <thead>
              <tr>
                <th :class="[getCalendarClasses.borderClasses, getCalendarClasses.tableHeaderEmployeeName]">
                  Employee Name
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
            <tbody v-if="employees.length > 0" class="spr-overflow-y-auto">
              <tr v-for="employee in employees" :key="employee.id">
                <td
                  :class="[
                    getCalendarClasses.borderClasses,
                    'spr-content-start spr-border-y spr-border-b-0 spr-border-l-0 spr-border-r spr-p-size-spacing-xs',
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
                  <div class="spr-mt-size-spacing-xs">
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
                    'spr-content-start spr-space-y-size-spacing-3xs spr-border-x spr-border-b-0 spr-border-t spr-p-size-spacing-sm last:spr-border-r-0',
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
                    >
                      <div
                        v-if="schedule.type === 'restday'"
                        @click="
                          onShiftClick({
                            employeeId: employee.id,
                            date: formatDate(date, dateFormat),
                            shift: 'restday',
                          })
                        "
                      >
                        <spr-calendar-cell type="restday" />
                      </div>
                      <div
                        v-else
                        @click="
                          onShiftClick({
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
                        />
                      </div>
                    </div>
                  </section>

                  <section v-if="showAddShift(index, employee.id)">
                    <spr-calendar-cell
                      status="pending"
                      type="exempt"
                      :view-only="false"
                      @on-click="
                        onShiftClick({ employeeId: employee.id, date: formatDate(date, dateFormat), shift: null })
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
                    <SprEmptyState size="large" :description="emptyStateTitle" :sub-description="emptyStateDescription">
                      <template v-if="emptyStateButtonText" #button>
                        <spr-button tone="success"><Icon icon="ph:plus" />{{ emptyStateButtonText }}</spr-button>
                      </template>
                    </SprEmptyState>
                  </slot>
                </td>
              </tr>
              <tr v-else>
                <td :colspan="weekDates.length + 1" class="spr-overflow-hidden">
                  <slot name="loading">
                    <div class="spr-flex spr-items-center spr-justify-center">Loading...</div>
                  </slot>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </SprCard>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import SprButton from '@/components/button/button.vue';
import SprInput from '@/components/input/input.vue';
import SprAvatar from '@/components/avatar/avatar.vue';
import SprCard from '@/components/card/card.vue';
import SprDropdown from '@/components/dropdown/dropdown.vue';
import SprLozenge from '@/components/lozenge/lozenge.vue';
import SprCalendarCell from '@/components/calendar-cell/calendar-cell.vue';
import SprEmptyState from '@/components/empty-state/empty-state.vue';
import { calendarPropTypes, calendarEmitTypes } from './calendar';

const props = defineProps(calendarPropTypes);
import { useCalendar } from './use-calendar';
const emit = defineEmits(calendarEmitTypes);

const {
  // State
  searchTerm,
  selectedCompany,
  selectedDepartment,
  selectedBranch,
  weekDates,
  weekRangeDisplay,
  getCalendarClasses,
  companyDropDown,
  departmentDropDown,
  branchDropDown,
  dateFormat,
  // Function
  formatDate,
  isToday,
  prevWeek,
  nextWeek,
  goToToday,
  onShiftClick,
  handleHover,
  showAddShift,
  handleFilter,
} = useCalendar(props, emit);
</script>
