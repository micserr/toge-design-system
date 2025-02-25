<template>
  <Menu
    v-model:shown="datePopperState"
    class="spr-w-fit"
    aria-id="dropdown-wrapper"
    distance="4"
    placement="bottom"
    :triggers="[]"
    :popper-hide-triggers="[]"
  >
    <div class="spr-flex spr-items-center spr-gap-6" @click="datePopperState = true">
      <div>
        <input type="text" placeholder="MMM" maxlength="3" />
        <span class="separator">/</span>
        <input type="text" placeholder="DD" maxlength="2" />
        <span class="separator">/</span>
        <input type="text" placeholder="YYYY" maxlength="4" />
      </div>
      <div>
        <Icon icon="ph:calendar" />
      </div>
    </div>

    <template #popper>
      <h1>asds</h1>
    </template>
  </Menu>
</template>

<script lang="ts" setup>
import { Menu } from 'floating-vue';
import { Icon } from '@iconify/vue';

import 'floating-vue/dist/style.css';

import { datePickerPropTypes, datePickerEmitTypes } from './date-picker';
import { useDatePicker } from './use-date-picker';

const props = defineProps(datePickerPropTypes);
const emit = defineEmits(datePickerEmitTypes);

const { datePopperState } = useDatePicker(props, emit);
</script>

<style lang="scss" scoped>
.date-input {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px;
  width: fit-content;
  color: #ccc;
  font-family: Arial, sans-serif;
  font-size: 14px;
  gap: 5px;
}

.date-input input {
  border: none;
  outline: none;
  width: 40px;
  text-align: center;
  font-size: 14px;
  color: #333;
  background: transparent;
}

.date-input input::placeholder {
  color: #ccc;
}

.date-input input:nth-child(1) {
  width: 50px;
} /* MMM */
.date-input input:nth-child(2) {
  width: 30px;
} /* DD */
.date-input input:nth-child(3) {
  width: 50px;
} /* YYYY */

.separator {
  color: #ccc;
  font-size: 14px;
}

.date-input .icon {
  width: 16px;
  height: 16px;
  background: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdASK4X58oXh8yRuU9vxCvW7YZZoQ1Y7PcFQ&s')
    no-repeat center center;
  background-size: contain;
  cursor: pointer;
}
</style>
