---
title: ช่องป้อนหมายเลขติดต่อ
descripttion: คอมโพเนนต์ช่องป้อนหมายเลขติดต่อช่วยให้ผู้ใช้ป้อนและจัดรูปแบบหมายเลขโทรศัพท์ระหว่างประเทศด้วยตัวเลือกประเทศ โดยใช้ libphonenumber-js สำหรับการแยกวิเคราะห์และการตรวจสอบ
outline: deep
---

# ช่องป้อนหมายเลขติดต่อ

- คอมโพเนนต์นี้ใช้ libphonenumber-js เพื่อแยกวิเคราะห์และจัดรูปแบบการป้อนข้อมูลเมื่อเลือนออก
- ช่องป้อนหมายเลขติดต่อระหว่างประเทศด้วยตัวเลือกประเทศและการตรวจสอบ

ใช้ `libphonenumber-js` ภายในสำหรับการแยกวิเคราะห์และการจัดรูปแบบเมื่อเลือนออก

## การใช้งานพื้นฐาน

<spr-input-contact-number id="input-contact-number-basic" v-model="inputModels.basic" label="ช่องป้อนหมายเลขติดต่อ"/>

```vue
<template>
  <spr-input-contact-number id="input-contact-number-basic" v-model="inputModel" label="ช่องป้อนหมายเลขติดต่อ" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<div>
  <spr-input-contact-number
    id="input-contact-number-active-state"
    v-model="inputModels.activeState"
    label="ช่องป้อนหมายเลขติดต่อ"
    active
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-active-state"
    v-model="inputModel"
    label="ช่องป้อนหมายเลขติดต่อ"
    active
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<div>
  <spr-input-contact-number
    id="input-contact-number-error-state"
    v-model="inputModels.errorState"
    label="ช่องป้อนหมายเลขติดต่อ"
    error
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-contact-number>
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-error-state"
    v-model="inputModel"
    label="ช่องป้อนหมายเลขติดต่อ"
    error
  >
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-contact-number>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<div>
  <spr-input-contact-number
    id="input-contact-number-disabled-state"
    v-model="inputModels.disabledState"
    label="ช่องป้อนหมายเลขติดต่อ"
    disabled
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-disabled-state"
    v-model="inputModel"
    label="ช่องป้อนหมายเลขติดต่อ"
    disabled
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## ปิดใช้งานรหัสประเทศที่โทร

<div>
  <spr-input-contact-number
    id="input-contact-number-disabled-country-calling-code"
    v-model="inputModels.disabledCountryCallingCode"
    label="ช่องป้อนหมายเลขติดต่อ"
    :disabled-country-calling-code="true"
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-disabled-country-calling-code"
    v-model="inputModel"
    label="ช่องป้อนหมายเลขติดต่อ"
    :disabled-country-calling-code="true"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## รับรหัสประเทศที่เลือก

<div class="spr-grid spr-gap-4">
  <spr-input-contact-number
    id="input-contact-number-selected-country-codes"
    v-model="inputModels.selectedCountryCodes"
    label="ช่องป้อนหมายเลขติดต่อ"
    @get-selected-country-calling-code="handleSelectedCountryCallingCode"
    @get-contact-number-errors="handleContactNumberErrors"
    @get-parsed-international-number="handleParsedInternationalNumber"
  />

  <div class="spr-p-4 spr-bg-blue-100">
    <p>เอาต์พุตโมเดล: {{ inputModels.selectedCountryCodes }}</p>
    <p>รหัสประเทศที่เลือก: {{ selectedCountryCode }}</p>
    <p>รหัสประเทศที่โทรที่เลือก: {{ selectedCountryCallingCode }}</p>
    <p>การจัดการข้อผิดพลาด: {{ contactNumberErrors }}</p>
    <p>หมายเลขระหว่างประเทศที่แยกวิเคราะห์: {{ parsedInternationalNumber }}</p>
  </div>
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-selected-country-codes"
    v-model="inputModel"
    label="ช่องป้อนหมายเลขติดต่อ"
    @get-selected-country-calling-code="handleCodes"
    @get-contact-number-errors="handleErrors"
    @get-parsed-international-number="handleParsedNumber"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
const selectedCountry = ref('');
const selectedCalling = ref('');
const errors = ref([]);
const parsedNumber = ref('');

const handleCodes = (val: { countryCode: string; countryCallingCode: string }) => {
  selectedCountry.value = val.countryCode;
  selectedCalling.value = val.countryCallingCode;
};

const handleErrors = (val: { title: string; message: string }[]) => {
  errors.value = val;
};

const handleParsedNumber = (val: string) => {
  parsedNumber.value = val;
};
</script>
```

## ตั้งรหัสประเทศที่เลือกไว้ล่วงหน้า

<div>
  <spr-input-contact-number
    id="input-contact-number-preselected-country"
    v-model="inputModels.preSelectedCountry"
    label="ช่องป้อนหมายเลขติดต่อ"
    pre-selected-country-code="US"
  />
</div>

```vue
<template>
  <spr-input-contact-number
    id="input-contact-number-preselected-country"
    v-model="inputModel"
    label="ช่องป้อนหมายเลขติดต่อ"
    pre-selected-country-code="US"
  />
</template>
```

## แสดงข้อความช่วยเหลือ

แสดงข้อความช่วยเหลือหรือข้อความแสดงข้อผิดพลาดด้านล่างช่องป้อนข้อมูลโดยใช้พร็อพส์ `display-helper`, `helper-text`, `helper-icon` และ `error` คุณยังสามารถปรับแต่งข้อความช่วยเหลือด้วยสล็อต

<div class="spr-grid spr-gap-4">
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">ข้อความช่วยเหลือ</p>
    <spr-input-contact-number
      id="input-contact-number-helper-text"
      v-model="inputModels.helperText"
      label="ช่องป้อนหมายเลขติดต่อ"
      display-helper
      helper-text="ป้อนหมายเลขโทรศัพท์ระหว่างประเทศที่ถูกต้อง"
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">สถานะข้อผิดพลาดพร้อมช่วยเหลือ</p>
    <spr-input-contact-number
      id="input-contact-number-error-helper"
      v-model="inputModels.errorHelper"
      label="ช่องป้อนหมายเลขติดต่อ"
      display-helper
      helper-icon="ph:warning-circle-fill"
      helper-text="รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง"
      error
    />
  </div>
  <div>
    <p class="spr-text-sm spr-font-semibold spr-mb-2">ข้อความช่วยเหลือแบบกำหนดเอง</p>
    <spr-input-contact-number
      id="input-contact-number-custom-helper"
      v-model="inputModels.customHelper"
      label="ช่องป้อนหมายเลขติดต่อ"
      display-helper
      helper-icon="ph:info-fill"
      helper-text="ข้อมูลหมายเลขโทรศัพท์"
    >
      <template #helperMessage>
        <div class="spr-flex spr-w-full spr-justify-between spr-gap-2">
          <div class="spr-body-sm-regular spr-flex spr-items-center spr-gap-1">
            <Icon class="spr-min-h-5 spr-min-w-5" icon="ph:info-fill" />
            <span>ป้อนหมายเลขพร้อมรหัสประเทศนำหน้า</span>
          </div>
          <div class="spr-body-sm-regular">
            {{ inputModels.customHelper.length }} อักขระ
          </div>
        </div>
      </template>
    </spr-input-contact-number>
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <!-- ข้อความช่วยเหลือ -->
    <spr-input-contact-number
      id="input-contact-number-helper-text"
      v-model="inputModel"
      label="ช่องป้อนหมายเลขติดต่อ"
      display-helper
      helper-text="ป้อนหมายเลขโทรศัพท์ระหว่างประเทศที่ถูกต้อง"
    />

    <!-- สถานะข้อผิดพลาดพร้อมช่วยเหลือ -->
    <spr-input-contact-number
      id="input-contact-number-error-helper"
      v-model="inputModel"
      label="ช่องป้อนหมายเลขติดต่อ"
      display-helper
      helper-icon="ph:warning-circle-fill"
      helper-text="รูปแบบหมายเลขโทรศัพท์ไม่ถูกต้อง"
      error
    />

    <!-- ข้อความช่วยเหลือแบบกำหนดเอง -->
    <spr-input-contact-number
      id="input-contact-number-custom-helper"
      v-model="inputModel"
      label="ช่องป้อนหมายเลขติดต่อ"
      display-helper
      helper-icon="ph:info-fill"
      helper-text="ข้อมูลหมายเลขโทรศัพท์"
    >
      <template #helperMessage>
        <div class="spr-flex spr-w-full spr-justify-between spr-gap-2">
          <div class="spr-body-sm-regular spr-flex spr-items-center spr-gap-1">
            <Icon class="spr-min-h-5 spr-min-w-5" icon="ph:info-fill" />
            <span>ป้อนหมายเลขพร้อมรหัสประเทศนำหน้า</span>
          </div>
          <div class="spr-body-sm-regular">{{ inputModel.length }} อักขระ</div>
        </div>
      </template>
    </spr-input-contact-number>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

const inputModel = ref('');
</script>
```

## การอ้างอิง API

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>id</code></td>
      <td>รหัสเฉพาะสำหรับคอมโพเนนต์</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>ค่าอินพุตปัจจุบัน (ไม่ได้จัดรูปแบบ) อัปเดตเมื่อผู้ใช้ป้อนข้อมูลและเหตุการณ์การจัดรูปแบบ</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>ข้อความตัวยึดตำแหน่งที่แสดงเมื่ออินพุตว่างเปล่า</td>
      <td>String</td>
      <td><code>'Enter Phone Number'</code></td>
    </tr>
    <tr>
      <td><code>pre-selected-country-code</code></td>
      <td>รหัสประเทศ ISO 3166-1 alpha-2 เริ่มต้นที่ใช้เพื่อรับรหัสการโทรเริ่มต้น (เช่น <code>PH</code>, <code>US</code>)</td>
      <td>String</td>
      <td><code>'PH'</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>ปิดใช้งานช่องป้อนหมายเลขติดต่อทั้งหมด (รวมถึงตัวเลือกประเทศ)</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-country-calling-code</code></td>
      <td>ปิดใช้งานตัวเลือกรหัสประเทศที่โทรเท่านั้น ขณะที่ยังคงทำให้ช่องหมายเลขโต้ตอบได้</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>display-helper</code></td>
      <td>เมื่อตั้งเป็น <code>true</code> จะแสดงข้อความช่วยเหลือด้านล่างช่องป้อนข้อมูล</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>helper-text</code></td>
      <td>ข้อความช่วยเหลือที่จะแสดงด้านล่างอินพุตเมื่อ <code>display-helper</code> เป็น <code>true</code> ให้บริบทหรือคำแนะนำเพิ่มเติมสำหรับผู้ใช้</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>helper-icon</code></td>
      <td>ชื่อไอคอนที่จะแสดงถัดจากข้อความช่วยเหลือ ยอมรับชื่อไอคอนใดๆ จากไลบรารีไอคอน</td>
      <td>String</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td><code>error</code></td>
      <td>เมื่อตั้งเป็น <code>true</code> จะแสดงอินพุตในสถานะข้อผิดพลาดด้วยข้อความสีแดงสำหรับข้อความช่วยเหลือ</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

<p class="spr-mt-4 spr-text-300">
สำหรับพร็อพส์ อีเวนต์ สล็อต และพฤติกรรมที่ใช้ร่วมกันที่สืบทอดมาจากคอมโพเนนต์อินพุตฐาน โปรดดู
<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>
</p>

### อีเวนต์

<table>
  <thead>
    <tr>
      <th>อีเวนต์</th>
      <th>พารามิเตอร์</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@update:model-value</td>
      <td>String</td>
      <td>ปล่อยเมื่อค่าอินพุตดิบเปลี่ยนแปลง (รองรับการผูกสองทาง)</td>
    </tr>
    <tr>
      <td>@get-selected-country-calling-code</td>
      <td>{ countryCode: String; countryCallingCode: String }</td>
      <td>ปล่อยหลังการเลือกประเทศเปลี่ยนแปลง ให้ทั้งรหัสประเทศ ISO และรหัสการโทร</td>
    </tr>
    <tr>
      <td>@get-parsed-international-number</td>
      <td>String</td>
      <td>ปล่อยด้วยหมายเลขระหว่างประเทศแบบเต็ม (เช่น <code>+15551234567</code>) หลังตรรกะการจัดรูปแบบทำงาน</td>
    </tr>
    <tr>
      <td>@get-contact-number-errors</td>
      <td>Array&lt;{ title: String; message: String }&gt;</td>
      <td>ปล่อยด้วยออบเจกต์ข้อผิดพลาดการตรวจสอบหากการแยกวิเคราะห์หรือการจัดรูปแบบตรวจพบปัญหา</td>
    </tr>
  </tbody>
</table>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputContactNumber from "@/components/input/input-contact-number/input-contact-number.vue"

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
  disabledCountryCallingCode: '',
  selectedCountryCodes: '',
  preSelectedCountry: '',
  helperText: '',
  errorHelper: '',
  customHelper: '',
});

const selectedCountryCode = ref('');
const selectedCountryCallingCode = ref('');
const contactNumberErrors = ref<{ title: string; message: string }[]>([]);

const handleSelectedCountryCallingCode = (value: string) => {
  selectedCountryCode.value = value.countryCode;
  selectedCountryCallingCode.value = value.countryCallingCode;
};

const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
  contactNumberErrors.value = errors;
};

const parseInternationalNumber = computed(() => {
  if (inputModels.value.basic) {
    const formattedNumber = `+${selectedCountryCallingCode.value}${inputModels.value.basic.replace(/[^0-9]/g, '')}`;

    return formattedNumber;
  }

  return '';
});
</script>
