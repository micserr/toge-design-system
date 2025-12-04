---
title: อินพุตสกุลเงิน
descripttion: องค์ประกอบอินพุตสกุลเงินช่วยให้ผู้ใช้สามารถป้อนและจัดรูปแบบค่าสกุลเงินได้โดยมีตัวเลือกรหัสและสัญลักษณ์สกุลเงินที่สามารถเลือกได้ โดยสนับสนุนคุณสมบัติต่างๆ เช่น ตัวคั่นหลักพัน ทศนิยมคงที่ และการจัดการข้อผิดพลาด
outline: deep
---

# อินพุตสกุลเงิน

อินพุตสกุลเงินพร้อมตัวเลือกรหัสสกุลเงินและการจัดรูปแบบ (ตัวคั่นหลักพัน ทศนิยมคงที่ การแสดงสัญลักษณ์/รหัส)

## การใช้งานพื้นฐาน

<spr-input-currency id="input-currency-basic" v-model="inputModels.basic" label="อินพุตสกุลเงิน" />

```vue
<template>
  <spr-input-currency id="input-currency-basic" v-model="inputModel" label="อินพุตสกุลเงิน" />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะทำงาน

<spr-input-currency id="input-currency-active-state" v-model="inputModels.activeState" label="อินพุตสกุลเงิน" active />

```vue
<template>
  <spr-input-currency id="input-currency-active-state" v-model="inputModel" label="อินพุตสกุลเงิน" active />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input-currency id="input-currency-error-state" v-model="inputModels.errorState" label="อินพุตสกุลเงิน" error>
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input-currency>

```vue
<template>
  <spr-input-currency id="input-currency-error-state" v-model="inputModel" label="อินพุตสกุลเงิน" error>
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
    label="อินพุตสกุลเงิน" 
    disabled 
  />
</div>

```vue
<template>
  <spr-input-currency id="input-currency-disabled-state" v-model="inputModel" label="อินพุตสกุลเงิน" disabled />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## ปิดใช้งานการเลือกสกุลเงิน

<div>
  <spr-input-currency 
    id="input-currency-disabled-country-currency" 
    v-model="inputModels.disabledCountryCurrency" 
    label="อินพุตสกุลเงิน" 
    disabled-country-currency 
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-disabled-country-currency"
    v-model="inputModel"
    label="อินพุตสกุลเงิน"
    disabled-country-currency
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## ใช้รหัสสกุลเงินหรือสัญลักษณ์

ค่าเริ่มต้นขององค์ประกอบสกุลเงินคือการแสดงรหัสสกุลเงิน (เช่น USD, EUR) คุณสามารถเปลี่ยนมาแสดงสัญลักษณ์สกุลเงิน (เช่น $, €) ได้โดยตั้งค่า prop `display-as-symbol` เป็น `true`

<div class="spr-grid spr-gap-3">
  <spr-input-currency 
    id="input-currency-code-or-symbol-1" 
    v-model="inputModels.currencyCodeSymbol1" 
    label="อินพุตสกุลเงิน" 
  />
  <spr-input-currency 
    id="input-currency-code-or-symbol-2" 
    v-model="inputModels.currencyCodeSymbol2" 
    label="อินพุตสกุลเงิน" 
    display-as-symbol
  />
</div>

```vue
<template>
  <spr-input-currency id="input-currency-code-or-symbol-1" v-model="inputModel" label="อินพุตสกุลเงิน" />

  <spr-input-currency
    id="input-currency-code-or-symbol-2"
    v-model="inputModel"
    label="อินพุตสกุลเงิน"
    display-as-symbol
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
    label="อินพุตสกุลเงิน"  
    @get-selected-currency-meta="handleSelectedCurrencyMeta"
  />

  <div class="spr-p-4 spr-bg-blue-100">
    <p>ผลลัพธ์ของโมเดล: {{ inputModels.selectedCurrencyMeta }}</p>
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
    label="อินพุตสกุลเงิน"
    @get-selected-currency-meta="handleSelectedCurrencyMeta"
  />

  <div class="spr-bg-blue-100 spr-p-4">
    <p>ผลลัพธ์ของโมเดล: {{ inputModel }}</p>
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

## เลือกสกุลเงินล่วงหน้า

<spr-input-currency v-model="inputModels.preSelectedCurrency" label="อินพุตสกุลเงิน" pre-selected-currency="USD" />

```vue
<template>
  <spr-input-currency v-model="inputModel" label="อินพุตสกุลเงิน" pre-selected-currency="USD" />
</template>
```

## จัดรูปแบบอัตโนมัติ

นำไปใช้ตัวคั่นหลักพันและจำกัดทศนิยมตามมาตรฐานสกุลเงินโดยอัตโนมัติขณะที่พิมพ์และเมื่อเบลอ หากมีค่าอยู่แล้วเมื่อส่วนประกอบโหลด จะนำไปใช้จัดรูปแบบอัตโนมัติทันที

<div class="spr-grid spr-gap-3">
  <spr-input-currency 
    id="input-currency-auto-format" 
    v-model="inputModels.autoFormat" 
    label="อินพุตสกุลเงิน" 
    auto-format
  />
  <spr-input-currency 
    id="input-currency-auto-format-existing" 
    v-model="inputModels.autoFormatExisting" 
    label="มีค่าเริ่มต้น" 
    auto-format
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-auto-format-empty"
    v-model="inputModelEmpty"
    label="อินพุตสกุลเงินว่าง"
    auto-format
  />

  <spr-input-currency
    id="input-currency-auto-format-existing"
    v-model="inputModelWithValue"
    label="มีค่าเริ่มต้น"
    auto-format
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModelEmpty = ref('');
// ค่านี้จะถูกจัดรูปแบบอัตโนมัติเมื่อส่วนประกอบโหลด
const inputModelWithValue = ref('1234567.8');
</script>
```

## จำนวนทศนิยมสูงสุดและต่ำสุด

ควบคุมจำนวนทศนิยมสูงสุดและต่ำสุดที่อนุญาตสำหรับอินพุตสกุลเงิน

**กรณีการใช้งาน:**

- **`max-decimals` เพียงอย่างเดียว** - จำกัดความแม่นยำโดยไม่บังคับให้มีตำแหน่งทศนิยม (เช่น ราคา cryptocurrency)
- **`min-decimals` เพียงอย่างเดียว** - บังคับให้มีตำแหน่งทศนิยมขั้นต่ำโดยไม่จำกัดความแม่นยำ
- **ทั้งคู่** - สร้างช่วงของตำแหน่งทศนิยมที่อนุญาต (ที่พบบ่อยที่สุด)

### ตัวอย่างที่ 1: ตำแหน่งทศนิยมคงที่ (Price Field)

แสดงตำแหน่งทศนิยม 2 ตำแหน่งเสมอ เหมาะสำหรับ input ราคาที่ต้องการความสอดคล้อง

ลองพิมพ์: `100` → หลังจากหมดเวลาแสดง `100.00`

<div>
  <spr-input-currency 
    id="input-currency-fixed-decimals" 
    v-model="inputModels.fixedDecimals" 
    label="ราคาสินค้า (ตำแหน่งทศนิยมคงที่ 2)" 
    :min-decimals="2"
    :max-decimals="2"
    placeholder="ป้อนราคา"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-fixed-decimals"
    v-model="price"
    label="ราคาสินค้า"
    :min-decimals="2"
    :max-decimals="2"
    placeholder="ป้อนราคา"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const price = ref('');
</script>
```

### ตัวอย่างที่ 2: ตำแหน่งทศนิยมที่ยืดหยุ่น (0-4 Range)

อนุญาต 0 ถึง 4 ตำแหน่งทศนิยม มีประโยชน์สำหรับ cryptocurrency หรือการวัดที่ความแม่นยำแตกต่างกัน

ลองพิมพ์: `100` → คงอยู่เป็น `100` (ไม่มีการเติมเต็ม), หรือ `100.123456` → กลายเป็น `100.1234`

<div>
  <spr-input-currency 
    id="input-currency-flexible-decimals" 
    v-model="inputModels.flexibleDecimals" 
    label="จำนวน Cryptocurrency (0-4 ตำแหน่งทศนิยม)" 
    :min-decimals="0"
    :max-decimals="4"
    placeholder="ป้อนจำนวน"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-flexible-decimals"
    v-model="cryptoAmount"
    label="จำนวน Cryptocurrency"
    :min-decimals="0"
    :max-decimals="4"
    placeholder="ป้อนจำนวน"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const cryptoAmount = ref('');
</script>
```

### ตัวอย่างที่ 3: ความแม่นยำทางวิทยาศาสตร์ (3-6 Range)

บังคับให้มีอย่างน้อย 3 ตำแหน่งทศนิยม อนุญาตให้ 6 ตำแหน่งทศนิยม มีประโยชน์สำหรับการคำนวณทางวิทยาศาสตร์หรือการเงิน

ลองพิมพ์: `100` → กลายเป็น `100.000`, หรือ `100.1234567` → กลายเป็น `100.123456`

<div>
  <spr-input-currency 
    id="input-currency-scientific-decimals" 
    v-model="inputModels.scientificDecimals" 
    label="การวัดทางวิทยาศาสตร์ (3-6 ตำแหน่งทศนิยม)" 
    :min-decimals="3"
    :max-decimals="6"
    placeholder="ป้อนค่า"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-scientific-decimals"
    v-model="scientificValue"
    label="การวัดทางวิทยาศาสตร์"
    :min-decimals="3"
    :max-decimals="6"
    placeholder="ป้อนค่า"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const scientificValue = ref('');
</script>
```

### ตัวอย่างที่ 4: Max Decimals เพียงอย่างเดียว

จำกัดความแม่นยำให้ 4 ตำแหน่งทศนิยมโดยไม่บังคับให้มีการเติมเต็มขั้นต่ำ มีประโยชน์สำหรับ input ที่ยืดหยุ่น

ลองพิมพ์: `100` → คงอยู่เป็น `100`, หรือ `100.12345` → กลายเป็น `100.1234`

<div>
  <spr-input-currency 
    id="input-currency-max-decimals" 
    v-model="inputModels.maxDecimals" 
    label="จำนวนที่ยืดหยุ่น (Max 4 ตำแหน่งทศนิยม)" 
    :max-decimals="4"
    placeholder="ป้อนจำนวน"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-max-decimals"
    v-model="amount"
    label="จำนวนที่ยืดหยุ่น"
    :max-decimals="4"
    placeholder="ป้อนจำนวน"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const amount = ref('');
</script>
```

### ตัวอย่างที่ 5: Min Decimals เพียงอย่างเดียว

บังคับให้มี 2 ตำแหน่งทศนิยมโดยไม่มีขีดจำกัดสูงสุด มีประโยชน์เมื่อคุณต้องการแสดงความแม่นยำอย่างน้อยที่สุด

ลองพิมพ์: `100` → กลายเป็น `100.00`, หรือ `100.123456` → คงอยู่เป็น `100.123456`

<div>
  <spr-input-currency 
    id="input-currency-min-decimals" 
    v-model="inputModels.minDecimals" 
    label="จำนวนที่มีการเติมเต็มขั้นต่ำ (Min 2 ตำแหน่งทศนิยม)" 
    :min-decimals="2"
    placeholder="ป้อนจำนวน"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-min-decimals"
    v-model="minAmount"
    label="จำนวนที่มีการเติมเต็มขั้นต่ำ"
    :min-decimals="2"
    placeholder="ป้อนจำนวน"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';
const minAmount = ref('');
</script>
```

## ปิดใช้งานการปัดเศษ

เมื่อเปิดใช้งาน องค์ประกอบจะตัดทศนิยมแทนการปัดเศษให้เป็นทศนิยมสูงสุดที่อนุญาต

<div>
  <spr-input-currency 
    id="input-currency-disable-rounding" 
    v-model="inputModels.disableRounding" 
    label="อินพุตสกุลเงิน" 
    :disable-rounding="true"
    :max-decimals="2"
  />
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-disable-rounding"
    v-model="inputModel"
    label="อินพุตสกุลเงิน"
    :disable-rounding="true"
    :max-decimals="2"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue';

const inputModel = ref('');
</script>
```

## ข้อความช่วยเหลือแบบกำหนดเอง

คุณสามารถส่งข้อความช่วยเหลือแบบกำหนดเองผ่านสล็อต `helperMessage` เพื่อแสดงการตรวจสอบความถูกต้องแบบกำหนดเองหรือข้อมูลเพิ่มเติม

<div>
  <spr-input-currency
    id="input-currency-custom-helper"
    v-model="inputModels.customHelper"
    label="อินพุตสกุลเงิน"
    placeholder="ป้อนจำนวนเงิน"
    :display-helper="true"
    :error="!!inputModels.customHelperError"
  > 
    <template #helperMessage>
      <div class="spr-flex spr-gap-2">
        <span v-if="inputModels.customHelperError" class="spr-text-red-500">{{ inputModels.customHelperError }}</span>
        <span v-else class="spr-text-gray-500">จำนวนเงินขั้นต่ำคือ $100</span>
      </div>
    </template>
  </spr-input-currency>
</div>

```vue
<template>
  <spr-input-currency
    id="input-currency-custom-helper"
    v-model="inputModel"
    label="อินพุตสกุลเงิน"
    placeholder="ป้อนจำนวนเงิน"
    :display-helper="true"
    :error="!!errorMessage"
  >
    <template #helperMessage>
      <div class="spr-flex spr-gap-2">
        <span v-if="errorMessage" class="spr-text-red-500">{{ errorMessage }}</span>
        <span v-else class="spr-text-gray-500">จำนวนเงินขั้นต่ำคือ $100</span>
      </div>
    </template>
  </spr-input-currency>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const inputModel = ref('');

const errorMessage = computed(() => {
  const numValue = Number(inputModel.value.replace(/[^0-9.-]/g, ''));
  return numValue > 0 && numValue < 100 ? 'จำนวนเงินต้องมีค่าอย่างน้อย $100' : '';
});
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
      <td>รหัสไอดีเฉพาะสำหรับองค์ประกอบ</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>v-model</code></td>
      <td>ค่าสตริงสกุลเงินดิบ (อาจยังไม่ได้จัดรูปแบบขณะที่พิมพ์)</td>
      <td>String</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td><code>placeholder</code></td>
      <td>ข้อความตัวยึดตำแหน่งที่แสดงเมื่ออินพุตว่างเปล่า</td>
      <td>String</td>
      <td><code>'0.00'</code></td>
    </tr>
    <tr>
      <td><code>pre-selected-currency</code></td>
      <td>รหัสสกุลเงิน ISO 4217 เริ่มต้น (เช่น <code>USD</code>, <code>EUR</code>) กำหนดค่าตัวเลือกของตัวเลือกเริ่มต้น</td>
      <td>String</td>
      <td><code>'PHP'</code></td>
    </tr>
    <tr>
      <td><code>disabled</code></td>
      <td>ปิดใช้งานอินพุตสกุลเงินทั้งหมด (รวมถึงตัวเลือกสกุลเงิน)</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disabled-country-currency</code></td>
      <td>ปิดใช้งานเฉพาะตัวเลือกสกุลเงินขณะให้ฟิลด์ข้อความทำงานต่อ</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>auto-format</code></td>
      <td>นำไปใช้ตัวคั่นหลักพันโดยอัตโนมัติ (และจำกัดทศนิยม) เมื่อเบลอและขณะที่พิมพ์ (ที่ถูกต้อง)</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>max-decimals</code></td>
      <td>จำนวนสูงสุดของหลักทศนิยมที่จะรักษาไว้เมื่อจัดรูปแบบ</td>
      <td>Number</td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td><code>min-decimals</code></td>
      <td>จำนวนทศนิยมขั้นต่ำ (ปัจจุบันไม่มีการเติมรหัสอัตโนมัติ)</td>
      <td>Number</td>
      <td><code>2</code></td>
    </tr>
    <tr>
      <td><code>display-as-code</code></td>
      <td>เมื่อเป็นจริง จะแสดงรหัสสกุลเงิน (เช่น <code>USD</code>); เมื่อเป็นเท็จ จะแสดงสัญลักษณ์ (หรือรหัสหากสัญลักษณ์คลุมเครือ)</td>
      <td>Boolean</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>display-as-symbol</code></td>
      <td>เมื่อเป็นจริง จะแสดงสัญลักษณ์สกุลเงิน (เช่น $, €) โดยไม่คำนึงถึงการตั้งค่าอื่นๆ ลำดับความสำคัญสูงกว่า <code>display-as-code</code></td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>disable-rounding</code></td>
      <td>เมื่อเป็นจริง หลักทศนิยมจะถูกตัด (ไม่ปัดเศษ) ให้เป็นทศนิยมสูงสุดที่อนุญาต</td>
      <td>Boolean</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

<p class="spr-mt-4 spr-text-300">
สำหรับ props ที่แชร์ อีเวนต์ สล็อต และการทำงานอื่นๆ ที่สืบทอดมาจากองค์ประกอบอินพุตพื้นฐาน โปรดดู
<a href="/documentation/components/input/input.html#api-reference">การอ้างอิง API ขององค์ประกอบอินพุต</a>
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
      <td>ปล่อยออกมาทุกครั้งที่ค่าอินพุตที่ผูกมัดเปลี่ยนไป (การผูกมัดแบบสองทาง)</td>
    </tr>
    <tr>
      <td>@get-selected-currency-meta</td>
      <td>{ currency: String; symbol: String; numericValue: Number | null; rawValue: String | null }</td>
      <td>ปล่อยออกมาหลังจากเลือกสกุลเงินและเมื่อเบลอ รวมถึงรหัส สัญลักษณ์ (หรือรหัสหากคลุมเครือ) numericValue (float ที่แยกวิเคราะห์) และ rawValue (สตริงที่ไม่ได้จัดรูปแบบที่มีรูปแบบบัญญัติ)</td>
    </tr>
    <tr>
      <td>@get-currency-errors</td>
      <td>Array&lt;{ title: String; message: String }&gt;</td>
      <td>ข้อผิดพลาดในการตรวจสอบความถูกต้องหรือการแยกวิเคราะห์ที่พบระหว่างการทำให้อินพุตเป็นมาตรฐาน</td>
    </tr>
    <tr>
      <td>@get-numeric-value</td>
      <td>Number</td>
      <td>ค่าตัวเลขที่แยกวิเคราะห์ (ตัวคั่นกลุ่มถูกลบออก) ปล่อยออกมาเมื่อติดตั้งและเบลอ</td>
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
  autoFormat: '',
  autoFormatExisting: '1234567.8',
  maxDecimals: '',
  minDecimals: '',
  disableRounding: '',
  customHelper: '',
  customHelperError: '',
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

// Updated payload signature now includes numericValue and rawValue
const handleSelectedCurrencyMeta = (payload: {
  currency: string;
  symbol: string;
  numericValue: number | null;
  rawValue: string | null;
}) => {
  meta.value = payload;
};
</script>
