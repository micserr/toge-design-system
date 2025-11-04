---
title: ช่องป้อนข้อมูล
descripttion: ช่องข้อความหลักสำหรับการป้อนข้อมูลอิสระของผู้ใช้ ตัวแปรเฉพาะขยายฐานนี้สำหรับความหมายเฉพาะ การตรวจสอบ หรือความสะดวกในการใช้งาน (การค้นหา อีเมล หมายเลขติดต่อ ฯลฯ)
outline: deep
---

# ช่องป้อนข้อมูล

ช่องข้อความหลักสำหรับการป้อนข้อมูลอิสระของผู้ใช้ ตัวแปรเฉพาะขยายฐานนี้สำหรับความหมายเฉพาะ การตรวจสอบ หรือความสะดวกในการใช้งาน (การค้นหา อีเมล หมายเลขติดต่อ ฯลฯ)

## เมื่อใดควรใช้

ใช้ `spr-input` ฐานเมื่อคุณต้องการช่องที่แก้ไขได้ทั่วไป เลือกตัวแปรเมื่อ:

- การตรวจสอบความหมายหรือคำแนะนำ UX ในตัว (เช่น อีเมล รหัสผ่าน URL)
- ต้องการ UI เพิ่มเติม (ตัวเลือกประเทศ ตัวเลือกสกุลเงิน)
- ตรรกะการจัดรูปแบบ/มาสก์เป็นแบบเฉพาะ (หมายเลขติดต่อ สกุลเงิน)

## การใช้งานฐาน

<spr-input v-model="model" label="Text Input" placeholder="Enter your username" />

```vue
<template>
  <spr-input v-model="model" label="Text Input" placeholder="Enter your username" />
</template>
```

## รูปแบบทั่วไป

คุณสมบัติสถานะและการตกแต่งที่ใช้ร่วมกันโดยตัวแปร:

- สถานะที่ใช้งานอยู่ ข้อผิดพลาด ปิดใช้งาน
- คำนำหน้า/คำต่อท้าย (สล็อตต่อท้าย)
- ข้อความช่วยเหลือและสล็อต helperMessage
- การนับตัวอักษรผ่าน `show-char-count`, `min-length`, `max-length`

## ตัวแปร

| ตัวแปร            | คำอธิบาย                                                 | ลิงก์                                                                          |
| ----------------- | -------------------------------------------------------- | ------------------------------------------------------------------------------ |
| ค้นหา             | เพิ่มประสิทธิภาพสำหรับการกรองและความสะดวกในการค้นหา      | [/documentation/components/input/input-search](./input-search)                 |
| ชื่อผู้ใช้        | ช่องชื่อผู้ใช้ (อนาคต: กฎความเป็นเอกลักษณ์)              | [/documentation/components/input/input-username](./input-username)             |
| อีเมล             | ช่องป้อนข้อมูลเฉพาะอีเมล                                 | [/documentation/components/input/input-email](./input-email)                   |
| รหัสผ่าน          | รายการที่ถูกมาสก์ด้วยการเปิดเผยทางเลือก                  | [/documentation/components/input/input-password](./input-password)             |
| URL               | บังคับใช้ความหมาย URL                                    | [/documentation/components/input/input-url](./input-url)                       |
| หมายเลขติดต่อ     | ช่องป้อนหมายเลขที่รับรู้ประเทศ + การตรวจสอบ              | [/documentation/components/input/input-contact-number](./input-contact-number) |
| ช่องป้อนดรอปดาวน์ | ช่องป้อนที่จัดสไตล์แสดงเท่านั้นใช้เป็นทริกเกอร์ดรอปดาวน์ | [/documentation/components/input/input-dropdown](./input-dropdown)             |
| สกุลเงิน          | การเลือกสกุลเงิน + การจัดรูปแบบ (รหัส/สัญลักษณ์ ทศนิยม)  | [/documentation/components/input/input-currency](./input-currency)             |

## สล็อตขั้นสูง

| สล็อต           | กรณีการใช้งาน                                                  |
| --------------- | -------------------------------------------------------------- |
| `prefix`        | ไอคอนหรือตัวระบุตามบริบท (เช่น ไอคอนค้นหา)                     |
| `trailing`      | หน่วย ป้ายในบรรทัด การดำเนินการขนาดกะทัดรัด                    |
| `icon`          | การตกแต่งภายใน (สถานะ/การดำเนินการ)                            |
| `helperMessage` | เนื้อหาข้อความช่วยเหลือ/ข้อผิดพลาดที่สมบูรณ์ (ไอคอน + ข้อความ) |

## หมายเหตุการเข้าถึง

- จับคู่พร็อพส์ `label` เสมอ (หรือการเชื่อมโยง `<label for>` ภายนอก) เพื่อความชัดเจน
- หลีกเลี่ยงการติดป้ายเฉพาะตัวยึดตำแหน่ง ตัวยึดตำแหน่งควรบอกใบ้รูปแบบ ไม่ใช่ให้ความหมาย
- ใช้ข้อความช่วยเหลือเพื่อชี้แจงข้อจำกัด (ความยาว ตัวอักษรที่อนุญาต) แทนที่จะพึ่งพาข้อผิดพลาดการตรวจสอบเพียงอย่างเดียว

## ดูเพิ่มเติม

- คอมโพเนนต์เลือก (ตัวเลือกที่มีโครงสร้าง)
- พื้นที่ข้อความ (เนื้อหาหลายบรรทัด)
- อัปโหลดไฟล์ (การป้อนข้อมูลที่ไม่ใช่ข้อความ)

<!-- Removed earlier inline script; consolidated into single script at end -->

## สถานะที่ใช้งานอยู่

<spr-input v-model="inputValue.input3" label="Text Input" placeholder="Enter your username" active />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" active />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## สถานะข้อผิดพลาด

<spr-input v-model="inputValue.input4" label="Text Input" placeholder="Enter your username" :error="true">
  <template #icon>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :error="true">
    <template #icon>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## สถานะปิดใช้งาน

<spr-input v-model="inputValue.input5" label="Text Input" placeholder="Enter your username" :disabled="true" />

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username" :disabled="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## ความยาวต่ำสุดสูงสุดและการนับตัวอักษร

คุณสามารถตั้งขีดจำกัดความยาวต่ำสุดหรือสูงสุดโดยส่งพร็อพส์ `min-length` หรือ `max-length` ด้วยค่าตัวเลขที่สอดคล้องกัน นอกจากนี้ คุณสามารถเปิดใช้งานการแสดงตัวนับตัวอักษรที่ด้านล่างขวาของช่องป้อนข้อมูลด้วยพร็อพส์ `show-char-count`

<spr-input v-model="inputValue.input6" label="Text Input" placeholder="Enter your username" :min-length="0" :max-length="50" show-char-count />

<p>Character Length: {{ inputValue.input6.length }}</p>

<div class="spr-grid spr-gap-6">
  <spr-input
    v-model="inputValue.input20" 
    type="number"
    label="Numeric Input" 
    placeholder="Enter a number" 
    :max-length="3"
    helper-text="Max 3 digits allowed" 
    display-helper
    show-char-count
  />
</div>

```vue
<template>
  <!-- Text input with character count -->
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your username"
    :min-length="0"
    :max-length="50"
    show-char-count
  />

  <!-- Numeric input with character count and helper -->
  <spr-input
    v-model="numericValue"
    type="number"
    label="Numeric Input"
    placeholder="Enter a number"
    :max-length="3"
    helper-text="Max 3 digits allowed"
    display-helper
    show-char-count
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
const numericValue = ref(0);
</script>
```

## คำนำหน้า

<spr-input v-model="inputValue.input7" label="Text Input" placeholder="Enter your username"  >
  <template #prefix>
    <Icon icon="ph:warning-circle-fill" />
  </template>
</spr-input>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your username">
    <template #prefix>
      <Icon icon="ph:warning-circle-fill" />
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## ป้ายต่อท้าย

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-input v-model="inputValue.input6" label="Offset xs" placeholder="00" offset-size="xs" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue.input8" label="offset sm" placeholder="0000000" offset-size="sm" type="number">
    <template #trailing>
      minutes
    </template>
  </spr-input>

  <spr-input v-model="inputValue.input9" label="offset md" placeholder="Enter your name" offset-size="md" >
    <template #trailing>
      Name of the user
    </template>
  </spr-input>
</div>

```vue
<template>
  <!-- xs -->
  <spr-input v-model="inputValueXS" label="Offset xs" placeholder="00" offset-size="xs" type="number">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- sm -->
  <spr-input v-model="inputValueSM" label="offset sm" placeholder="00" offset-size="sm" type="number">
    <template #trailing> minutes </template>
  </spr-input>

  <!-- md -->
  <spr-input v-model="inputValueMD" label="offset md" placeholder="Enter your name" offset-size="md">
    <template #trailing> Name of the user </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueXS = ref('');

const inputValueSM = ref('');

const inputValueMD = ref('');
</script>
```

## การแสดงการนับตัวอักษร

คุณสามารถแสดงตัวนับตัวอักษรที่ด้านล่างขวาของช่องป้อนข้อมูลโดยตั้งพร็อพส์ `show-char-count` เป็น `true` เมื่อใช้กับ `max-length` ตัวนับตัวอักษรจะแสดงในรูปแบบ "ปัจจุบัน/สูงสุด" และจะเปลี่ยนสีเพื่อระบุเมื่อถึงความยาวสูงสุด

<spr-input 
  v-model="inputValue.input21" 
  label="Text with Character Count" 
  placeholder="Type to see the counter" 
  :max-length="20" 
  show-char-count 
/>

```vue
<template>
  <spr-input
    v-model="inputValue"
    label="Text with Character Count"
    placeholder="Type to see the counter"
    :max-length="20"
    show-char-count
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## ข้อความช่วยเหลือ

ข้อความช่วยเหลือเป็นป้ายข้อความใต้ช่องป้อนข้อมูลที่ให้ข้อมูลเพิ่มเติมเกี่ยวกับคำแนะนำ เคล็ดลับการจัดรูปแบบ ข้อเสนอแนะการตรวจสอบ ฯลฯ

เพื่อแสดงข้อความช่วยเหลือ ตั้งพร็อพส์ `display-helper` เป็น `true` และเพิ่มพร็อพส์ `helper-text` ด้วยข้อความข้อความช่วยเหลือ คุณยังสามารถแทรกไอคอนด้วยพร็อพส์ `helper-icon` สิ่งนี้ใช้ไลบรารีไอคอน [Iconify](https://icon-sets.iconify.design/)

<div class="spr-grid spr-gap-6">
  <spr-input 
    v-model="inputValue.input10" 
    label="Text Input" 
    placeholder="Enter your text" 
    helper-text="This is a helper message" 
    display-helper 
  />
  <spr-input 
    v-model="inputValue.input1" 
    label="Text Input" 
    placeholder="Enter your text" 
    helper-text="This is an error message" 
    helper-icon="ph:warning-circle-fill" 
    display-helper 
    error
  />
</div>

```vue
<template>
  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is a helper message"
    display-helper
  />

  <spr-input
    v-model="inputValue"
    label="Text Input"
    placeholder="Enter your text"
    helper-text="This is an error message"
    helper-icon="ph:warning-circle-fill"
    display-helper
    error
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

หรือคุณสามารถใช้สล็อต `helperMessage` เพื่อแสดงข้อความช่วยเหลือแบบกำหนดเอง

<div class="spr-grid spr-gap-6">
  <spr-input 
    v-model="inputValue.input11" 
    label="Text Input" 
    placeholder="Enter your text" 
    display-helper
  >
    <template #helperMessage>
      This is a helper message
    </template>
  </spr-input>
  <spr-input 
    v-model="inputValue.input1" 
    label="Text Input" 
    placeholder="Enter your text" 
    display-helper 
    error 
  >
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-input>
</div>

```vue
<template>
  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your text">
    <template #helperMessage> This is a helper message </template>
  </spr-input>

  <spr-input v-model="inputValue" label="Text Input" placeholder="Enter your text" :error="true">
    <template #helperMessage>
      <icon icon="ph:warning-circle-fill" width="20px" height="20px" />
      <span>This is an error message</span>
    </template>
  </spr-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>
```

## ประเภทช่องป้อนข้อมูล

### ช่องป้อนการค้นหา

<div>
   <spr-input-search v-model="inputValue.input12" label="Search" placeholder="Search ..."/>
</div>

```vue
<template>
  <spr-input-search v-model="inputValueSearch" label="Search" placeholder="Search ..." />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueSearch = ref('');
</script>
```

### ช่องป้อนชื่อผู้ใช้

<div>
  <spr-input-username v-model="inputValue.input13" label="Username" placeholder="Enter username" />
</div>

```vue
<template>
  <spr-input-username v-model="inputValueUsername" label="Username" placeholder="Enter username" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueUsername = ref('');
</script>
```

### ช่องป้อนอีเมล

<div>
  <spr-input-email v-model="inputValue.input14" label="Username" placeholder="Enter email" />
</div>

```vue
<template>
  <spr-input-email v-model="inputValueEmail" label="Username" placeholder="Enter email" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueEmail = ref('');
</script>
```

### ช่องป้อนรหัสผ่าน

<div>
  <form action="#">
    <spr-input-password v-model="inputValue.input15" label="Password" placeholder="Enter password" />
  </form>
</div>

```vue
<template>
  <spr-input-password v-model="inputValuePassword" label="Password" placeholder="Enter password" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValuePassword = ref('');
</script>
```

### ช่องป้อน URL

<div>
  <spr-input-url v-model="inputValue.input16" label="URL" placeholder="Enter url" />
</div>

```vue
<template>
  <spr-input-url v-model="inputValueURL" label="URL" placeholder="Enter url" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const inputValueURL = ref('');
</script>
```

### ช่องป้อนหมายเลขติดต่อ

คอมโพเนนต์นี้ใช้ `libphonenumber-js` เพื่อแยกวิเคราะห์และจัดรูปแบบการป้อนข้อมูลเมื่อเลือนออก การมาสก์หมายเลขติดต่อเมื่อเปลี่ยนแปลงจะถูกนำมาใช้ในอนาคต

<div>
  <div class="spr-grid spr-gap-4">
    <spr-input-contact-number 
      v-model="inputValue.input17" 
      label="Contact Number" 
      @get-selected-country-calling-code="handleSelectedCountryCallingCode"
      @get-contact-number-errors="handleContactNumberErrors" 
    />
    <spr-input-contact-number 
      v-model="inputValue.input17" 
      label="Disabled Calling Country Code" 
      @get-selected-country-calling-code="handleSelectedCountryCallingCode"
      @get-contact-number-errors="handleContactNumberErrors" 
      disabledCountryCallingCode
    />
  </div>
  <div class="spr-my-3 spr-p-4 spr-bg-blue-100">
    <p>Model Output: {{ inputValue.input17 }}</p>
    <p>Selected Country Code: {{ selectedCountryCode }}</p>
    <p>Selected Country Calling Code: {{ selectedCountryCallingCode }}</p>
    <p>Error Handling: {{ contactNumberErrors }}</p>
    <p>Parsed International Number: {{ parseInternationalNumber }}</p>
  </div>
</div>

::: info หมายเหตุสำคัญ:
เนื่องจากเอาต์พุต v-model ไม่ได้อยู่ในรูปแบบสากล (เช่น +63XXXXXXXXXXX) คุณจะต้องสร้างฟังก์ชันแยกต่างหากที่แยกวิเคราะห์เอาต์พุตโมเดลควบคู่กับรหัสประเทศที่เลือก
:::

```vue
<template>
  <div>
    <div class="spr-grid spr-gap-4">
      <spr-input-contact-number
        v-model="inputValueContactNumber"
        label="Contact Number"
        @get-selected-country-calling-code="handleSelectedCountryCallingCode"
        @get-contact-number-errors="handleContactNumberErrors"
      />
      <spr-input-contact-number
        v-model="inputValueContactNumber"
        label="Disabled Calling Country Code"
        @get-selected-country-calling-code="handleSelectedCountryCallingCode"
        @get-contact-number-errors="handleContactNumberErrors"
        disabledCountryCallingCode
      />
    </div>
    <p>Model Output: {{ inputValueContactNumber }}</p>
    <p>Selected Country Code: {{ selectedCountryCode }}</p>
    <p>Selected Country Calling Code: {{ selectedCountryCallingCode }}</p>
    <p>Error Handling: {{ contactNumberErrors }}</p>
    <p>Parsed International Number: {{ parseInternationalNumber }}</p>
  </div>

  <script lang="ts" setup>
    import { ref, computed } from 'vue';

    const inputValueContactNumber = ref('');
    const selectedCountryCode = ref('');
    const selectedCountryCallingCode = ref('');
    const contactNumberErrors = ref([]);

    const handleSelectedCountryCallingCode = (value: string) => {
      selectedCountryCode.value = value.countryCode;
      selectedCountryCallingCode.value = value.countryCallingCode;
    };

    const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
      contactNumberErrors.value = errors;
    };

    const handleContactNumberErrors = (errors: { title: string; message: string }[]) => {
      contactNumberErrors.value = errors;
    };

    const parseInternationalNumber = computed(() => {
      if (inputValueContactNumber.value) {
        const formattedNumber = `+${selectedCountryCallingCode.value}${inputValueContactNumber.value.replace(/[^0-9]/g, '')}`;

        return formattedNumber;
      }

      return '';
    });
  </script>
</template>
```

#### ตั้งรหัสประเทศที่เลือกไว้ล่วงหน้า

<div class="spr-mt-3">
  <spr-input-contact-number
    v-model="inputValue.input18"
    label="Contact Number"
    pre-selected-country-code="US"
  />
</div>

```vue
<div class="spr-mt-3">
  <spr-input-contact-number
    v-model="inputValue"
    label="Contact Number"
    pre-selected-country-code="US"
  />
</div>
```

### ช่องป้อนดรอปดาวน์

นี่คืออันที่ใช้ในคอมโพเนนต์ดรอปดาวน์ หากคุณต้องการใช้งานดรอปดาวน์ คุณสามารถอ้างอิง <a href="/documentation/components/dropdown.html" target="_blank">คอมโพเนนต์ดรอปดาวน์</a>

<div>
  <spr-input-dropdown v-model="inputValue.input19" label="Dropdown Input" placeholder="Select an item ..." readonly />
</div>

```vue
<template>
  <spr-input-dropdown v-model="dropdownInput" label="Dropdown Input" placeholder="Select an item ..." readonly />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const dropdownInput = ref('');
</script>
```

## การอ้างอิง API

### พร็อพส์

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
      <td>modelValue</td>
      <td>ค่าปัจจุบันของช่องป้อนข้อมูล พร็อพส์นี้ใช้สำหรับการผูก v-model เพื่อเปิดใช้งานการผูกข้อมูลสองทางระหว่างคอมโพเนนต์และพาเรนต์</td>
      <td>string | number</td>
      <td>''</td>
    </tr>
    <tr>
      <td>type</td>
      <td>
        ระบุประเภทของช่องป้อนข้อมูล ซึ่งกำหนดพฤติกรรมและการตรวจสอบ รองรับประเภทอินพุต HTML มาตรฐานทั้งหมด รวมถึง:
        <ul>
          <li>text, number, email, password, search, url, tel</li>
          <li>date, datetime-local, month, time, week</li>
          <li>checkbox, radio, range, color</li>
          <li>file, button, submit, reset, image, hidden</li>
          <li>contact-number (ประเภทกำหนดเอง)</li>
        </ul>
      </td>
      <td>string</td>
      <td>'text'</td>
    </tr>
    <tr>
      <td>id</td>
      <td>ตัวระบุเฉพาะสำหรับองค์ประกอบอินพุต ใช้สำหรับเชื่อมโยงอินพุตกับป้ายสำหรับการเข้าถึง</td>
      <td>string</td>
      <td>'spr-input'</td>
    </tr>
    <tr>
      <td>label</td>
      <td>ข้อความป้ายที่แสดงเหนือช่องป้อนข้อมูลเพื่ออธิบายวัตถุประสงค์</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>supporting-label</td>
      <td>ข้อความข้างป้ายที่มีสไตล์สนับสนุน</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>ข้อความคำใบ้ที่แสดงภายในอินพุตเมื่อว่างเปล่า ให้คำแนะนำเกี่ยวกับสิ่งที่จะป้อน</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>active</td>
      <td>เมื่อตั้งเป็น <code>true</code> อินพุตจะปรากฏในสถานะที่ใช้งานอยู่/โฟกัสแม้ว่าจะไม่ได้โฟกัสจริงๆ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>เมื่อตั้งเป็น <code>true</code> แสดงอินพุตในสถานะข้อผิดพลาดด้วยการจัดสไตล์ข้อผิดพลาด โดยทั่วไปใช้สำหรับข้อเสนอแนะการตรวจสอบ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อตั้งเป็น <code>true</code> ทำให้อินพุตไม่โต้ตอบและระบุสถานะปิดใช้งานด้วยภาพ</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>readonly</td>
      <td>เมื่อตั้งเป็น <code>true</code> ทำให้อินพุตอ่านได้อย่างเดียว ป้องกันผู้ใช้ไม่ให้แก้ไขค่า แต่ยังคงอนุญาตให้โฟกัสและเลือก</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>minLength</td>
      <td>ตั้งจำนวนตัวอักษรต่ำสุดที่อนุญาตในอินพุต ใช้สำหรับการตรวจสอบ</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>maxLength</td>
      <td>ตั้งจำนวนตัวอักษรสูงสุดที่อนุญาตในอินพุต ใช้สำหรับการตรวจสอบและกับ <code>showCharCount</code> เพื่อแสดงขีดจำกัด</td>
      <td>number</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>showCharCount</td>
      <td>เมื่อตั้งเป็น <code>true</code> แสดงตัวนับตัวอักษรที่ด้านล่างขวาของช่องป้อนข้อมูล เมื่อใช้กับ <code>maxLength</code> แสดงรูปแบบปัจจุบัน/สูงสุด</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>offsetSize</td>
      <td>
        ควบคุมขนาดการเว้นวรรค/ออฟเซ็ตเมื่อใช้เนื้อหาต่อท้าย ส่งผลต่อการตำแหน่งและการเติม:
        <ul>
          <li><code>xs</code>: ออฟเซ็ตขนาดเล็กพิเศษ การเติมน้อยที่สุด</li>
          <li><code>sm</code>: ออฟเซ็ตขนาดเล็ก การเติมมาตรฐาน</li>
          <li><code>md</code>: ออฟเซ็ตขนาดกลาง การเติมขนาดใหญ่ขึ้น</li>
        </ul>
      </td>
      <td>'xs' | 'sm' | 'md'</td>
      <td>'sm'</td>
    </tr>
    <tr>
      <td>displayHelper</td>
      <td>เมื่อตั้งเป็น <code>true</code> แสดงพื้นที่ข้อความช่วยเหลือใต้ช่องป้อนข้อมูล</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>helperText</td>
      <td>เนื้อหาข้อความสำหรับข้อความช่วยเหลือที่แสดงใต้ช่องป้อนข้อมูลเมื่อ <code>displayHelper</code> เป็นจริง</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>helperIcon</td>
      <td>ชื่อไอคอนจาก Iconify ที่จะแสดงควบคู่กับข้อความช่วยเหลือ มีประโยชน์โดยเฉพาะสำหรับข้อความเตือนหรือข้อผิดพลาด</td>
      <td>string</td>
      <td>null</td>
    </tr>
  </tbody>
</table>

### อีเวนต์

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
      <th>พารามิเตอร์</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>update:modelValue</td>
      <td>ปล่อยเมื่อค่าอินพุตเปลี่ยนแปลง อีเวนต์นี้เปิดใช้งานการผูก v-model ให้ทำงานได้อย่างถูกต้อง</td>
      <td>(value: string | number): ค่าที่ใหม่ของช่องป้อนข้อมูล</td>
    </tr>
  </tbody>
</table>

### สล็อต

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>prefix</td>
      <td>เนื้อหาที่จะแสดงที่จุดเริ่มต้นของช่องป้อนข้อมูล โดยทั่วไปใช้สำหรับไอคอนหรือการตกแต่งเพิ่มเติม</td>
    </tr>
    <tr>
      <td>trailing</td>
      <td>เนื้อหาที่จะแสดงที่จุดสิ้นสุดของช่องป้อนข้อมูล ใช้สำหรับหน่วย ข้อความเพิ่มเติม หรือปุ่มการดำเนินการ</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>เนื้อหาไอคอนแบบกำหนดเองที่จะแสดงภายในช่องป้อนข้อมูล มีประโยชน์โดยเฉพาะสำหรับประเภทอินพุตแบบกำหนดเอง</td>
    </tr>
    <tr>
      <td>helperMessage</td>
      <td>เนื้อหาแบบกำหนดเองสำหรับพื้นที่ข้อความช่วยเหลือ อนุญาต UI ที่ซับซ้อนมากกว่าข้อความและไอคอนเดียว</td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useDebounceFn } from '@vueuse/core';

import { Icon } from '@iconify/vue';

import SprInput from "@/components/input/input.vue"
import SprInputSearch from "@/components/input/input-search/input-search.vue"
import SprInputUsername from "@/components/input/input-username/input-username.vue"
import SprInputEmail from "@/components/input/input-email/input-email.vue"
import SprInputPassword from "@/components/input/input-password/input-password.vue"
import SprInputUrl from "@/components/input/input-url/input-url.vue"
import SprInputContactNumber from "@/components/input/input-contact-number/input-contact-number.vue"
import SprInputDropdown from "@/components/input/input-dropdown/input-dropdown.vue"
import SprLogo from "@/components/logo/logo.vue"

// Base demo input model (formerly in a separate <script setup>)
const model = ref('');

const inputValue = ref({
  input1: '',
  input2: 'Sample Text',
  input3: '',
  input4: '',
  input5: '',
  input6: '',
  input7: '',
  input8: '',
  input9: '',
  input10: '',
  input11: '',
  input12: '',
  input13: '',
  input14: '',
  input15: '',
  input16: '',
  input17: '',
  input18: '',
  input19: '',
  input20: 0,
  input21: '',
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
  if (inputValue.value.input17) {
    const formattedNumber = `+${selectedCountryCallingCode.value}${inputValue.value.input17.replace(/[^0-9]/g, '')}`;

    return formattedNumber;
  }
  
  return '';
});

</script>
