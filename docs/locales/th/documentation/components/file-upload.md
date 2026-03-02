---
title: อัปโหลดไฟล์
descripttion: คอมโพเนนต์อัปโหลดไฟล์ให้อินเทอร์เฟซที่ใช้งานง่ายสำหรับผู้ใช้ในการอัปโหลดไฟล์ผ่านทั้งการลากและวางและวิธีการเลือกไฟล์แบบดั้งเดิม รองรับการตรวจสอบประเภทไฟล์และขนาด และให้ข้อเสนอแนะภาพสำหรับข้อผิดพลาด
outline: deep
---

# อัปโหลดไฟล์

คอมโพเนนต์อัปโหลดไฟล์ให้อินเทอร์เฟซที่ใช้งานง่ายสำหรับผู้ใช้ในการอัปโหลดไฟล์ผ่านทั้งการลากและวางและวิธีการเลือกไฟล์แบบดั้งเดิม รองรับการตรวจสอบประเภทไฟล์และขนาด และให้ข้อเสนอแนะภาพสำหรับข้อผิดพลาด

## การใช้งานพื้นฐาน

คอมโพเนนต์อัปโหลดไฟล์มีสองวิธีในการอัปโหลดไฟล์:

1. คลิกปุ่ม "เรียกดูไฟล์" เพื่อเปิดตัวเลือกไฟล์
2. ลากและวางไฟล์โดยตรงลงในพื้นที่อัปโหลด

<div>
  <spr-file-upload
    v-model="files1"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="ไฟล์แนบ"
  />
</div>

```vue
<template>
  <div>
    <spr-file-upload
      v-model="files1"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="ไฟล์แนบ"
      multiple
    />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

// เริ่มต้นอาร์เรย์ว่างเพื่อเก็บไฟล์ที่อัปโหลด
const files1 = ref([]);
</script>
```

:::tip คุณสมบัติสำคัญ

- **การตรวจสอบ**: ตรวจสอบประเภทไฟล์และขนาดโดยอัตโนมัติ
- **หลายไฟล์**: ใช้ prop `multiple` เพื่ออนุญาตให้อัปโหลดไฟล์หลายไฟล์
- **ข้อเสนอแนะ**: ให้ข้อเสนอแนะภาพสำหรับสถานะข้อผิดพลาด
- **การจัดการไฟล์**: อนุญาตให้แทนที่หรือลบไฟล์ที่อัปโหลดแล้ว
  :::

## ประเภท

คอมโพเนนต์อัปโหลดไฟล์รองรับประเภทสำหรับสองรูปแบบเลย์เอาต์:

- `default`: เลย์เอาต์แนวนอนมาตรฐานสำหรับพื้นที่ที่จำกัด
- `center`: เลย์เอาต์แนวตั้งแบบศูนย์กลางพร้อมพื้นที่วางที่โดดเด่นมากขึ้น

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload
    v-model="files2"
    type="default"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="อัปโหลดไฟล์เริ่มต้น"
    multiple
  />
  <spr-file-upload
    v-model="files3"
    type="center"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="อัปโหลดไฟล์แบบศูนย์กลาง"
    multiple
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <!-- เลย์เอาต์เริ่มต้น - แนวนอน -->
    <spr-file-upload
      v-model="files2"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="อัปโหลดไฟล์เริ่มต้น"
      multiple
    />

    <!-- เลย์เอาต์แบบศูนย์กลาง - แนวตั้งพร้อมพื้นที่วางที่โดดเด่นมากขึ้น -->
    <spr-file-upload
      v-model="files3"
      type="center"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="อัปโหลดไฟล์แบบศูนย์กลาง"
      multiple
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const files2 = ref([]);
const files3 = ref([]);
</script>
```

:::tip การเลือกเลย์เอาต์

- ใช้เลย์เอาต์ `default` เมื่อพื้นที่จำกัดหรือสำหรับการอัปโหลดไฟล์แบบอินไลน์
- ใช้เลย์เอาต์ `center` สำหรับพื้นที่อัปโหลดเฉพาะหรือเมื่อคุณต้องการเน้นฟังก์ชันการลากและวาง
  :::

## สถานะปิดใช้งาน

คอมโพเนนต์อัปโหลดไฟล์สามารถปิดใช้งานเพื่อป้องกันการโต้ตอบของผู้ใช้ เมื่อปิดใช้งาน:

- ปุ่มอัปโหลดไม่สามารถคลิกได้
- ฟังก์ชันการลากและวางถูกปิดใช้งาน
- คอมโพเนนต์แสดงด้วยสีที่หรี่ลง

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload
    v-model="files4"
    type="default"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="อัปโหลดไฟล์เริ่มต้น"
    multiple
    disabled
  />
  <spr-file-upload
    v-model="files5"
    type="center"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="อัปโหลดไฟล์แบบศูนย์กลาง"
    multiple
    disabled
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <!-- เลย์เอาต์เริ่มต้นที่ปิดใช้งาน -->
    <spr-file-upload
      v-model="files4"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="อัปโหลดไฟล์เริ่มต้น"
      multiple
      disabled
    />

    <!-- เลย์เอาต์แบบศูนย์กลางที่ปิดใช้งาน -->
    <spr-file-upload
      v-model="files5"
      type="center"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="อัปโหลดไฟล์แบบศูนย์กลาง"
      multiple
      disabled
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const files4 = ref([]);
const files5 = ref([]);
</script>
```

:::tip เมื่อใดควรใช้สถานะปิดใช้งาน

- ในระหว่างการส่งฟอร์มเพื่อป้องกันการอัปโหลดเพิ่มเติม
- เมื่อผู้ใช้ไม่มีสิทธิ์ในการอัปโหลดไฟล์
- เมื่อระบบกำลังประมวลผลไฟล์ที่อัปโหลดก่อนหน้านี้
  :::

## การจัดการข้อผิดพลาด

คอมโพเนนต์อัปโหลดไฟล์มีฟังก์ชันการแสดงข้อผิดพลาดในตัวเพื่อให้ข้อเสนอแนะที่ชัดเจนแก่ผู้ใช้เมื่อการตรวจสอบล้มเหลว สถานการณ์การตรวจสอบทั่วไปประกอบด้วย:

- ประเภทไฟล์ไม่รองรับ
- ขนาดไฟล์เกินขนาดสูงสุดที่อนุญาต
- กฎการตรวจสอบที่กำหนดเองอื่นๆ

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload
    v-model="files6"
    type="default"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="อัปโหลดไฟล์เริ่มต้น"
    multiple
    :show-error="true"
    :error-messages="['ประเภทไฟล์ไม่รองรับ ต้องเป็นไฟล์ JPG หรือ PNG']"
  />
  <spr-file-upload
    v-model="files7"
    type="center"
    :file-types="['image/jpeg','image/png',]"
    :max-file-size="10"
    title="อัปโหลดไฟล์แบบศูนย์กลาง"
    multiple
    :show-error="true"
    :error-messages="['ขนาดไฟล์ไม่ควรเกิน 10MB']"
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <!-- ตัวอย่างข้อผิดพลาดประเภทไฟล์ -->
    <spr-file-upload
      v-model="files6"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="อัปโหลดไฟล์เริ่มต้น"
      multiple
      :show-error="true"
      :error-messages="['ประเภทไฟล์ไม่รองรับ ต้องเป็นไฟล์ JPG หรือ PNG']"
    />

    <!-- ตัวอย่างข้อผิดพลาดขนาดไฟล์ -->
    <spr-file-upload
      v-model="files7"
      type="center"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="อัปโหลดไฟล์แบบศูนย์กลาง"
      multiple
      :show-error="true"
      :error-messages="['ขนาดไฟล์ไม่ควรเกิน 10MB']"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const files6 = ref([]);
const files7 = ref([]);

// ในแอปพลิเคชันจริง คุณจะตรวจสอบไฟล์และอัปเดตข้อความข้อผิดพลาด:
const validateFile = (file) => {
  if (!['image/jpeg', 'image/png'].includes(file.type)) {
    return 'ประเภทไฟล์ไม่รองรับ ต้องเป็นไฟล์ JPG หรือ PNG';
  }

  if (file.size > 10 * 1024 * 1024) {
    // 10MB ในหน่วยไบต์
    return 'ขนาดไฟล์ไม่ควรเกิน 10MB';
  }

  return null; // ไม่มีข้อผิดพลาด
};
</script>
```

## การตรวจสอบประเภทไฟล์อัตโนมัติ

คอมโพเนนต์อัปโหลดไฟล์ตรวจสอบไฟล์ที่อัปโหลดโดยอัตโนมัติกับประเภทไฟล์ที่ยอมรับที่ระบุใน prop `fileTypes` เมื่อผู้ใช้พยายามอัปโหลดประเภทไฟล์ที่ไม่ถูกต้อง คอมโพเนนต์จะ:

1. **กรองไฟล์ที่ไม่ถูกต้อง** - เพิ่มเฉพาะไฟล์ที่ถูกต้องในโมเดล
2. **ปล่อยข้อผิดพลาดการตรวจสอบ** - เรียกเหตุการณ์ `validation-error` พร้อมข้อความข้อผิดพลาด
3. **แสดงข้อเสนอแนะข้อผิดพลาด** - แสดงข้อความข้อผิดพลาดเมื่อ `showError` เป็น true

<div>
  <spr-file-upload
    v-model="filesValidation"
    :file-types="['image/jpeg','image/png']"
    :max-file-size="10"
    title="อัปโหลดเฉพาะรูปภาพ (ลองอัปโหลด PDF หรือประเภทไฟล์อื่น)"
    multiple
    :show-error="showValidationError"
    :error-messages="validationErrorMessages"
    @validation-error="handleValidationError"
  />
</div>

```vue
<template>
  <spr-file-upload
    v-model="filesValidation"
    :file-types="['image/jpeg', 'image/png']"
    :max-file-size="10"
    title="อัปโหลดเฉพาะรูปภาพ"
    multiple
    :show-error="showValidationError"
    :error-messages="validationErrorMessages"
    @validation-error="handleValidationError"
  />
</template>

<script setup>
import { ref } from 'vue';

const filesValidation = ref([]);
const showValidationError = ref(false);
const validationErrorMessages = ref([]);

const handleValidationError = (errors) => {
  validationErrorMessages.value = errors;
  showValidationError.value = errors.length > 0;

  // หรือไม่ก็ล้างข้อผิดพลาดหลังจากไม่กี่วินาที
  if (errors.length > 0) {
    setTimeout(() => {
      showValidationError.value = false;
      validationErrorMessages.value = [];
    }, 5000);
  }
};
</script>
```

:::tip พฤติกรรมการตรวจสอบ

- **ลากและวาง**: ไฟล์ที่ไม่ถูกต้องจะถูกกรองออกโดยอัตโนมัติก่อนที่จะถูกเพิ่ม
- **ตัวเลือกไฟล์**: ไฟล์ที่ไม่ถูกต้องจะถูกปฏิเสธและแสดงข้อความข้อผิดพลาด
- **หลายไฟล์**: หากไฟล์บางไฟล์ถูกต้องและไฟล์อื่นๆ ไม่ถูกต้อง จะเพิ่มเฉพาะไฟล์ที่ถูกต้อง และข้อความข้อผิดพลาดจะแสดงรายการไฟล์ที่ไม่ถูกต้อง
  :::

## การปรับแต่งป้ายกำกับประเภทไฟล์

โดยค่าเริ่มต้น คอมโพเนนต์จะแสดงรายการประเภทไฟล์ที่รองรับในพื้นที่อัปโหลด คุณสามารถปรับแต่งข้อความนี้โดยใช้ prop `supportedFileTypeLabel`

```vue
<template>
  <!-- การแสดงประเภทไฟล์เริ่มต้น -->
  <spr-file-upload v-model="files" :file-types="['image/jpeg', 'image/png']" />

  <!-- ป้ายกำกับประเภทไฟล์ที่กำหนดเอง -->
  <spr-file-upload
    v-model="files"
    :file-types="['image/jpeg', 'image/png']"
    supportedFileTypeLabel="เฉพาะรูปภาพ JPG และ PNG"
  />

  <!-- ซ่อนป้ายกำกับพื้นที่วางทั้งหมด -->
  <spr-file-upload v-model="files" :file-types="['image/jpeg', 'image/png']" :hideDropzoneLabel="true" />
</template>
```

## การจัดการไฟล์ที่อัปโหลดแล้ว

เมื่อไฟล์ถูกอัปโหลดแล้ว จะปรากฏในรายการด้านล่างพื้นที่อัปโหลด ผู้ใช้สามารถ:

- **แทนที่** ไฟล์แต่ละไฟล์: คลิก "แทนที่" จะเปิดตัวเลือกไฟล์เพื่อเลือกไฟล์ใหม่
- **ลบ** ไฟล์: คลิกไอคอนถังขยะจะลบไฟล์ออกจากรายการ

```vue
<template>
  <spr-file-upload
    v-model="uploadedFiles"
    :file-types="['application/pdf', 'image/jpeg', 'image/png']"
    :max-file-size="10"
    title="อัปโหลดเอกสาร"
    multiple
  />
</template>

<script setup>
import { ref, watch } from 'vue';

const uploadedFiles = ref([]);

// ตัวอย่างการดูการเปลี่ยนแปลงไฟล์ที่อัปโหลด
watch(uploadedFiles, (newFiles) => {
  console.log('ไฟล์ที่อัปเดต:', newFiles);

  // คุณสามารถประมวลผลไฟล์ที่นี่ เช่น เริ่มอัปโหลดไปยังเซิร์ฟเวอร์
  // หรือดำเนินการตรวจสอบเพิ่มเติม
});
</script>
```

## ตัวบ่งชี้ความคืบหน้า

คอมโพเนนต์อัปโหลดไฟล์รองรับตัวบ่งชี้ความคืบหน้าเพื่อแสดงสถานะการอัปโหลด ใช้ prop `show-progress` เพื่อแสดงแถบความคืบหน้า และ `progress-value` เพื่อควบคุมเปอร์เซ็นต์ความคืบหน้า

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload
    v-model="filesProgress1"
    type="default"
    :file-types="['image/jpeg','image/png']"
    :max-file-size="10"
    title="อัปโหลดพร้อมความคืบหน้า"
    :show-progress="true"
    :progress-value="progressValue1"
  />
  <spr-file-upload
    v-model="filesProgress2"
    type="center"
    :file-types="['application/pdf']"
    :max-file-size="5"
    title="อัปโหลดเอกสารพร้อมความคืบหน้า"
    :show-progress="true"
    :progress-value="progressValue2"
  />
</div>

**ค่าความคืบหน้า:** <span class="spr-text-xs">การอัปโหลด 1: {{progressValue1}}% | การอัปโหลด 2: {{progressValue2}}%</span>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <!-- การอัปโหลดรูปภาพพร้อมความคืบหน้า -->
    <spr-file-upload
      v-model="filesProgress1"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="อัปโหลดพร้อมความคืบหน้า"
      :show-progress="true"
      :progress-value="progressValue1"
    />

    <!-- การอัปโหลดเอกสารพร้อมความคืบหน้า -->
    <spr-file-upload
      v-model="filesProgress2"
      type="center"
      :file-types="['application/pdf']"
      :max-file-size="5"
      title="อัปโหลดเอกสารพร้อมความคืบหน้า"
      :show-progress="true"
      :progress-value="progressValue2"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const filesProgress1 = ref([]);
const filesProgress2 = ref([]);

// จำลองค่าความคืบหน้า (ในแอปจริง ค่าเหล่านี้จะมาจากบริการอัปโหลด)
const progressValue1 = ref(75);
const progressValue2 = ref(45);
</script>
```

## ไอคอนแสดงตัวอย่างไฟล์

คอมโพเนนต์อัปโหลดไฟล์แสดงไอคอนที่เหมาะสมสำหรับประเภทไฟล์ต่างๆ โดยอัตโนมัติ คุณสามารถควบคุมการมองเห็นไอคอนโดยใช้ prop `hide-file-preview-icon`

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload
    v-model="filesIcon1"
    type="default"
    :file-types="['image/jpeg','image/png','application/pdf','text/plain']"
    :max-file-size="10"
    title="พร้อมไอคอนไฟล์ (ค่าเริ่มต้น)"
    multiple
  />
  <spr-file-upload
    v-model="filesIcon2"
    type="default"
    :file-types="['image/jpeg','image/png','application/pdf','text/plain']"
    :max-file-size="10"
    title="ไม่มีไอคอนไฟล์"
    multiple
    :hide-file-preview-icon="true"
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <!-- พร้อมไอคอนประเภทไฟล์ (พฤติกรรมเริ่มต้น) -->
    <spr-file-upload
      v-model="filesIcon1"
      type="default"
      :file-types="['image/jpeg', 'image/png', 'application/pdf', 'text/plain']"
      :max-file-size="10"
      title="พร้อมไอคอนไฟล์ (ค่าเริ่มต้น)"
      multiple
    />

    <!-- ไม่มีไอคอนประเภทไฟล์ -->
    <spr-file-upload
      v-model="filesIcon2"
      type="default"
      :file-types="['image/jpeg', 'image/png', 'application/pdf', 'text/plain']"
      :max-file-size="10"
      title="ไม่มีไอคอนไฟล์"
      multiple
      :hide-file-preview-icon="true"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const filesIcon1 = ref([]);
const filesIcon2 = ref([]);
</script>
```

## ความคืบหน้าขั้นสูงพร้อมสถานะข้อผิดพลาด

คุณสามารถรวมตัวบ่งชี้ความคืบหน้าพร้อมสถานะข้อผิดพลาดเพื่อให้ข้อเสนอแนะการอัปโหลดที่ครอบคลุม

<div class="spr-flex spr-flex-col spr-gap-2">
  <spr-file-upload
    v-model="filesAdvanced1"
    type="default"
    :file-types="['image/jpeg','image/png']"
    :max-file-size="10"
    title="การอัปโหลดสำเร็จ"
    :show-progress="true"
    :progress-value="100"
  />
  <spr-file-upload
    v-model="filesAdvanced2"
    type="default"
    :file-types="['image/jpeg','image/png']"
    :max-file-size="10"
    title="การอัปโหลดล้มเหลว"
    :show-progress="true"
    :progress-value="60"
    :show-error="true"
    :error-messages="['การอัปโหลดล้มเหลว กรุณาลองใหม่อีกครั้ง']"
  />
</div>

```vue
<template>
  <div class="spr-flex spr-flex-col spr-gap-2">
    <!-- การอัปโหลดสำเร็จพร้อมความคืบหน้า -->
    <spr-file-upload
      v-model="filesAdvanced1"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="การอัปโหลดสำเร็จ"
      :show-progress="true"
      :progress-value="100"
    />

    <!-- การอัปโหลดล้มเหลวพร้อมความคืบหน้าและข้อผิดพลาด -->
    <spr-file-upload
      v-model="filesAdvanced2"
      type="default"
      :file-types="['image/jpeg', 'image/png']"
      :max-file-size="10"
      title="การอัปโหลดล้มเหลว"
      :show-progress="true"
      :progress-value="60"
      :show-error="true"
      :error-messages="['การอัปโหลดล้มเหลว กรุณาลองใหม่อีกครั้ง']"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';

const filesAdvanced1 = ref([]);
const filesAdvanced2 = ref([]);
</script>
```

## API Reference

### Props

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
      <td>type</td>
      <td>กำหนดรูปแบบเลย์เอาต์ของคอมโพเนนต์อัปโหลดไฟล์</td>
      <td>'default' | 'center'</td>
      <td>'default'</td>
    </tr>
    <tr>
      <td>title</td>
      <td>ชื่อ/ป้ายกำกับที่แสดงเหนือคอมโพเนนต์อัปโหลดไฟล์</td>
      <td>string</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>modelValue</td>
      <td>อาร์เรย์ของไฟล์ที่อัปโหลดแล้ว ผูกกับ v-model</td>
      <td>File[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>multiple</td>
      <td>เมื่อเป็น true อนุญาตให้อัปโหลดไฟล์หลายไฟล์พร้อมกัน</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อเป็น true ปิดใช้งานฟังก์ชันอัปโหลดไฟล์</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>maxFileSize</td>
      <td>ขนาดไฟล์สูงสุดที่อนุญาตในเมกะไบต์ (MB)</td>
      <td>number</td>
      <td>10</td>
    </tr>
    <tr>
      <td>fileTypes</td>
      <td>อาร์เรย์ของประเภท MIME ที่อนุญาตสำหรับการอัปโหลด (เช่น 'image/jpeg')</td>
      <td>string[]</td>
      <td>ประเภทเอกสารและรูปภาพทั่วไปทั้งหมด</td>
    </tr>
    <tr>
      <td>showError</td>
      <td>เมื่อเป็น true แสดงข้อความข้อผิดพลาดสำหรับไฟล์ที่ไม่ถูกต้อง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>errorMessages</td>
      <td>อาร์เรย์ของข้อความข้อผิดพลาดที่จะแสดงสำหรับความล้มเหลวในการตรวจสอบ</td>
      <td>string[]</td>
      <td>[]</td>
    </tr>
    <tr>
      <td>hideFilePreviewIcon</td>
      <td>เมื่อเป็น true ซ่อนไอคอนเครื่องหมายถูกถัดจากไฟล์ที่อัปโหลดแล้ว</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>hideDropzoneLabel</td>
      <td>เมื่อเป็น true ซ่อนป้ายกำกับ "วางไฟล์ของคุณเพื่ออัปโหลด"</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>supportedFileTypeLabel</td>
      <td>ข้อความที่กำหนดเองที่จะแสดงสำหรับประเภทไฟล์ที่รองรับ</td>
      <td>string</td>
      <td>สร้างอัตโนมัติตาม fileTypes</td>
    </tr>
    <tr>
      <td>showProgress</td>
      <td>เมื่อเป็น true แสดงแถบความคืบหน้าสำหรับสถานะการอัปโหลด</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>progressValue</td>
      <td>ค่าความคืบหน้าเปอร์เซ็นต์ (0-100) สำหรับแถบความคืบหน้า</td>
      <td>number</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

### Events

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
      <td>ปล่อยออกมาหากไฟล์ถูกเพิ่ม แทนที่ หรือลบ</td>
      <td>File[]: อาร์เรย์ไฟล์ที่อัปเดตแล้ว</td>
    </tr>
    <tr>
      <td>validation-error</td>
      <td>ปล่อยออกมาหากไฟล์ล้มเหลวในการตรวจสอบ (เช่น ประเภทไฟล์ไม่รองรับ) ปล่อยอาร์เรย์ว่างหากไฟล์ทั้งหมดถูกต้อง</td>
      <td>string[]: อาร์เรย์ของข้อความข้อผิดพลาดที่อธิบายความล้มเหลวในการตรวจสอบ</td>
    </tr>
  </tbody>
</table>

### ประเภทไฟล์ที่รองรับ

คอมโพเนนต์รองรับประเภทไฟล์ต่อไปนี้โดยค่าเริ่มต้น:

**เอกสาร:**

- `application/pdf` - ไฟล์ PDF
- `application/msword` - ไฟล์ MS Word
- `application/vnd.ms-excel` - ไฟล์ MS Excel
- `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet` - ไฟล์ XLSX
- `application/vnd.ms-powerpoint` - ไฟล์ MS PowerPoint
- `text/plain` - ไฟล์ข้อความ
- `text/csv` - ไฟล์ CSV

**รูปภาพ:**

- `image/apng` - Animated PNG
- `image/avif` - รูปภาพ AVIF
- `image/gif` - รูปภาพ GIF
- `image/jpeg` - รูปภาพ JPEG
- `image/png` - รูปภาพ PNG
- `image/svg+xml` - รูปภาพ SVG
- `image/webp` - รูปภาพ WebP

คุณสามารถระบุส่วนย่อยของประเภทเหล่านี้โดยใช้ prop `fileTypes`

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';
import SprFileUpload from '@/components/file-upload/file-upload.vue';
import SprLogo from "@/components/logo/logo.vue";

const files1 = ref([]);
const files2 = ref([]);
const files3 = ref([]);
const files4 = ref([]);
const files5 = ref([]);
const files6 = ref([]);
const files7 = ref([]);

// ตัวอย่างความคืบหน้า
const filesProgress1 = ref([]);
const filesProgress2 = ref([]);
const progressValue1 = ref(75);
const progressValue2 = ref(45);

// ตัวอย่างไอคอนแสดงตัวอย่าง
const filesIcon1 = ref([]);
const filesIcon2 = ref([]);

// ตัวอย่างความคืบหน้าขั้นสูง
const filesAdvanced1 = ref([]);
const filesAdvanced2 = ref([]);

// ตัวอย่างการตรวจสอบ
const filesValidation = ref([]);
const showValidationError = ref(false);
const validationErrorMessages = ref([]);

const handleValidationError = (errors) => {
  validationErrorMessages.value = errors;
  showValidationError.value = errors.length > 0;

  // หรือไม่ก็ล้างข้อผิดพลาดหลังจากไม่กี่วินาที
  if (errors.length > 0) {
    setTimeout(() => {
      showValidationError.value = false;
      validationErrorMessages.value = [];
    }, 5000);
  }
};
</script>
