---
title: ช่องป้อนสกุลเงิน
descripttion: คอมโพเนนต์ช่องป้อนสกุลเงินช่วยให้ผู้ใช้ป้อนและจัดรูปแบบค่าทางการเงินด้วยรหัสสกุลเงินและสัญลักษณ์ที่เลือกได้ รองรับคุณสมบัติเช่นตัวคั่นหลักพัน ทศนิยมคงที่ และการจัดการข้อผิดพลาด
outline: deep
---

# ช่องป้อนสกุลเงิน

ช่องป้อนสกุลเงินพร้อมตัวเลือกสกุลเงินและการจัดรูปแบบ (ตัวคั่นหลักพัน ทศนิยมคงที่ การแสดงสัญลักษณ์/รหัส)

## การใช้งานพื้นฐาน

<spr-input-currency id="input-currency-basic" v-model="inputModels.basic" label="ป้อนสกุลเงิน" />

```vue
<template>
  <spr-input-currency id="input-currency-basic" v-model="inputModel" label="ป้อนสกุลเงิน" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะใช้งานอยู่

<spr-input-currency id="input-currency-active-state" v-model="inputModels.activeState" label="ป้อนสกุลเงิน" active />

```vue
<template>
  <spr-input-currency id="input-currency-active-state" v-model="inputModel" label="ป้อนสกุลเงิน" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input-currency id="input-currency-error-state" v-model="inputModels.errorState" label="ป้อนสกุลเงิน" error>
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-currency>

```vue
<template>
  <spr-input-currency id="input-currency-error-state" v-model="inputModel" label="ป้อนสกุลเงิน" error>
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input-currency>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะปิดใช้งาน

<div>
  <spr-input-currency
    id="input-currency-disabled-state"
    v-model="inputModels.disabledState"
    label="ป้อนสกุลเงิน"
    disabled
  />
</div>

```vue
<template>
  <spr-input-currency id="input-currency-disabled-state" v-model="inputModel" label="ป้อนสกุลเงิน" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## ปิดใช้งานตัวเลือกสกุลเงินประเทศ

<div>
  <spr-input-currency
    id="input-currency-disabled-country-currency"
    v-model="inputModels.disabledCountryCurrency"
    label="ป้อนสกุลเงิน"
    disabled-country-currency
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-disabled-country-currency"
    v-model="inputModel"
    label="ป้อนสกุลเงิน"
    disabled-country-currency
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## ใช้รหัสสกุลเงินหรือสัญลักษณ์

ค่าเริ่มต้นของคอมโพเนนต์สกุลเงินคือการแสดงรหัสสกุลเงิน (เช่น USD, EUR) คุณสามารถเปลี่ยนเป็นแสดงสัญลักษณ์สกุลเงิน (เช่น $, €) โดยตั้งค่าพร็อพส์ `:display-as-code` เป็น `false`

<div class="spr-grid spr-gap-3">
  <spr-input-currency
    id="input-currency-code-or-symbol-1"
    v-model="inputModels.currencyCodeSymbol1"
    label="ป้อนสกุลเงิน"
    :display-as-code="true"
  />

<spr-input-currency
    id="input-currency-code-or-symbol-2"
    v-model="inputModels.currencyCodeSymbol2"
    label="ป้อนสกุลเงิน"
    :display-as-code="false"
  />

</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-code-or-symbol-1"
    v-model="inputModel"
    label="ป้อนสกุลเงิน"
    :display-as-code="true"
  />

  <spr-input-currency
    id="input-currency-code-or-symbol-2"
    v-model="inputModel"
    label="ป้อนสกุลเงิน"
    :display-as-code="false"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## รับข้อมูลเมตาสกุลเงินที่เลือก

<div class="spr-grid spr-gap-4">
  <spr-input-currency
    id="input-currency-selected-currency"
    v-model="inputModels.selectedCurrencyMeta"
    label="ป้อนสกุลเงิน"
    @get-selected-currency-meta="handleSelectedCurrencyMeta"
  />

  <div class="spr-p-4 spr-bg-blue-100">
    <p>ผลลัพธ์โมเดล: {{ inputModels.selectedCurrencyMeta }}</p>
    <p>สกุลเงินที่เลือก: {{ meta.currency }}</p>
    <p>สัญลักษณ์ที่เลือก: {{ meta.symbol }}</p>
    <p>ค่าดิบ: {{ meta.rawValue }}</p>
  </div>
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-selected-currency"
    v-model="inputModel"
    label="ป้อนสกุลเงิน"
    @get-selected-currency-meta="handleSelectedCurrencyMeta"
  />

  <div class="spr-bg-blue-100 spr-p-4">
    <p>ผลลัพธ์โมเดล: {{ inputModel }}</p>
    <p>สกุลเงินที่เลือก: {{ selectedCurrency }}</p>
    <p>สัญลักษณ์ที่เลือก: {{ selectedSymbol }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
const selectedCurrency = ref('');
const selectedSymbol = ref('');

const handleSelectedCurrencyMeta = (val: { currency: string; symbol: string }) => {
  selectedCurrency.value = val.currency;
  selectedSymbol.value = val.symbol;
};
</script>
```

## สกุลเงินที่เลือกไว้ล่วงหน้า

<spr-input-currency v-model="inputModels.preSelectedCurrency" label="ป้อนสกุลเงิน" pre-selected-currency="USD" />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="ป้อนสกุลเงิน" pre-selected-currency="USD" />
</template>
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
      <td>ค่าตัวอักษรสกุลเงินดิบ (อาจยังไม่จัดรูปแบบขณะพิมพ์)</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>ข้อความตัวยึดตำแหน่งที่แสดงเมื่อช่องป้อนข้อมูลว่างเปล่า</td>
      <td>String</td>
      <td><code>'0.00'</code></td>
    </tr>
    <tr>
      <td><code>pre-selected-currency</code></td>
      <td>รหัสสกุลเงิน ISO 4217 เริ่มต้น (เช่น <code>USD</code>, <code>EUR</code>) กำหนดค่าตัวเลือกเริ่มต้น</td>
      <td>String</td>
      <td><code>'PHP'</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>ปิดใช้งานช่องป้อนสกุลเงินทั้งหมด (รวมถึงตัวเลือกสกุลเงิน)</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-country-currency</code></td>
      <td>ปิดใช้งานเฉพาะตัวเลือกสกุลเงินขณะที่ยังคงให้ช่องข้อความโต้ตอบได้</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>auto-format</code></td>
      <td>ใช้ตัวคั่นหลักพันโดยอัตโนมัติ (และจำกัดทศนิยม) เมื่อ blur และขณะพิมพ์ (เมื่อถูกต้อง)</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>max-decimals</code></td>
      <td>จำนวนหลักทศนิยมสูงสุดที่รักษาไว้เมื่อจัดรูปแบบ</td>
      <td>Number</td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td><code>min-decimals</code></td>
      <td>จำนวนหลักทศนิยมขั้นต่ำ (ปัจจุบันไม่ได้เติมโดยอัตโนมัติหากคุณลบตรรกะการเติม)</td>
      <td>Number</td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td><code>display-as-code</code></td>
      <td>เมื่อเป็นจริงแสดงรหัสสกุลเงิน (เช่น <code>USD</code>) เมื่อเป็นเท็จแสดงสัญลักษณ์ (หรือรหัสหากสัญลักษณ์กำกวม)</td>
      <td>Boolean</td>
      <td><code>true</code></td>
    </tr>
  </tbody>
</table>

<p class="spr-mt-4 spr-text-300">
สำหรับพร็อพส์ อีเวนต์ สล็อต และพฤติกรรมที่ใช้ร่วมกันเพิ่มเติมที่สืบทอดมาจากคอมโพเนนต์ input ฐาน โปรดดู
<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API คอมโพเนนต์ Input</a>.
</p>

### อีเวนต์

<table>
  <thead>
    <tr>
      <th>อีเวนต์</th>
      <th>เพย์โหลด</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>@update:model-value</td>
      <td>String</td>
      <td>ปล่อยออกมาทุกครั้งที่ค่าป้อนข้อมูลที่ผูกไว้เปลี่ยนแปลง (การผูกสองทาง)</td>
    </tr>
    <tr>
      <td>@get-selected-currency-meta</td>
      <td>{ currency: String; symbol: String; numericValue: Number | null; rawValue: String | null }</td>
      <td>ปล่อยออกมาหลังจากเลือกสกุลเงินและเมื่อ blur รวมรหัส สัญลักษณ์ (หรือรหัสหากกำกวม) numericValue (float ที่แยกวิเคราะห์แล้ว) และ rawValue (ตัวอักษรที่ไม่จัดรูปแบบตามมาตรฐาน)</td>
    </tr>
    <tr>
      <td>@get-currency-errors</td>
      <td>Array&lt;{ title: String; message: String }&gt;</td>
      <td>ข้อผิดพลาดในการตรวจสอบหรือการแยกวิเคราะห์ที่พบระหว่างการปรับมาตรฐานป้อนข้อมูล</td>
    </tr>
    <tr>
      <td>@get-numeric-value</td>
      <td>Number</td>
      <td>ค่าตัวเลขที่แยกวิเคราะห์แล้ว (ลบตัวคั่นกลุ่มออก) ปล่อยออกมาเมื่อ mount (หากมีค่าเริ่มต้น) และ blur</td>
    </tr>
  </tbody>
</table>

<script setup lang="ts">
import { ref, computed } from 'vue';

import { Icon } from '@iconify/vue';

import SprInputCurrency from '@/components/input/input-currency/input-currency.vue';

const inputModels = ref({
  basic: '',
  activeState: '',
  errorState: '',
  disabledState: '',
  disabledCountryCurrency: '',
  currencyCodeSymbol1: '',
  currencyCodeSymbol2: '',
  selectedCurrencyMeta: '',
  preSelectedCurrency: '',
});

const meta = ref<{
  currency: string;
  symbol: string;
  numericValue: number | null;
  rawValue: string | null;
} >({
  currency: '',
  symbol: '',
  numericValue: null,
  rawValue: null,
});

// ลายเซ็นเพย์โหลดที่อัปเดตแล้วตอนนี้รวม numericValue และ rawValue
const handleSelectedCurrencyMeta = (payload: {
  currency: string;
  symbol: string;
  numericValue: number | null;
  rawValue: string | null;
}) => {
  meta.value = payload;
};
</script>
