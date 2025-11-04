---
title: การสร้างคอมโพเนนต์
descripttion: สร้างคอมโพเนนต์ใหม่โดยปฏิบัติตามโครงสร้าง การตั้งชื่อ และแนวทางปฏิบัติที่ดีที่สุดของระบบการออกแบบของเรา
outline: deep
---

# การสร้างคอมโพเนนต์

สร้างคอมโพเนนต์ใหม่ตามสถาปัตยกรรมของระบบการออกแบบของเรา แต่ละคอมโพเนนต์ประกอบด้วยไฟล์หลักสามไฟล์:

## โครงสร้างคอมโพเนนต์

```
src/components/your-component/
├── your-component.ts # ประเภทและคำจำกัดความของ props
├── your-component.vue # เทมเพลตและการตั้งค่าคอมโพเนนต์
└── use-your-component.ts # ตรรกะและ composables ของคอมโพเนนต์
```

## กำหนดประเภทคอมโพเนนต์ (your-component.ts)

ก่อนอื่น สร้างไฟล์ประเภทเพื่อกำหนด props, emits และประเภทของคอมโพเนนต์:

```ts
import type { PropType, ExtractPropTypes } from 'vue';

// ฟังก์ชันช่วยเหลือสำหรับประเภท props (ใช้ในบางคอมโพเนนต์)
export const definePropType = <T>(val: unknown): PropType<T> => val as PropType<T>;

// กำหนดค่าคงที่สำหรับการตรวจสอบ prop
const EXAMPLE_SIZES = ['small', 'medium', 'large'] as const;

// กำหนด props ของคุณพร้อมความคิดเห็น JSDoc สำหรับเอกสารประกอบ
export const componentPropTypes = {
  /**
   * @description ขนาดของคอมโพเนนต์
   */
  size: {
    type: String as PropType<(typeof EXAMPLE_SIZES)[number]>,
    validator: (value: (typeof EXAMPLE_SIZES)[number]) => EXAMPLE_SIZES.includes(value),
    default: 'medium',
  },
  /**
   * @description คอมโพเนนต์ถูกปิดใช้งานหรือไม่
   */
  disabled: {
    type: Boolean,
    default: false,
  },
};

// กำหนด emits ของคุณพร้อมการตรวจสอบประเภท
export const componentEmitTypes = {
  click: (evt: MouseEvent): evt is MouseEvent => evt instanceof MouseEvent,
};

// ส่งออกประเภทสำหรับใช้ในไฟล์อื่น
export type ComponentPropTypes = ExtractPropTypes<typeof componentPropTypes>;
export type ComponentEmitTypes = typeof componentEmitTypes;
```

## สร้างเทมเพลตคอมโพเนนต์ (your-component.vue)

สร้างไฟล์คอมโพเนนต์ Vue ที่กำหนดเทมเพลตและเชื่อมต่อ props และ composable:

```vue
<template>
  <div
    ref="componentRef"
    v-bind="componentProps"
    :class="['spr-component__base', componentClasses]"
    @click="handleClick"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useComponent } from './use-your-component';
import { componentEmitTypes, componentPropTypes } from './your-component';

const props = defineProps(componentPropTypes);
const emit = defineEmits(componentEmitTypes);

const { componentRef, componentProps, componentClasses, handleClick } = useComponent(props, emit);
</script>
```

โปรดทราบว่าคอมโพเนนต์ของเรามักใช้คำนำหน้า `spr-` สำหรับชื่อคลาสและปฏิบัติตามการตั้งชื่อคลาสแบบ BEM

## ใช้ตรรกะคอมโพเนนต์ (use-your-component.ts)

สร้าง composable ที่มีตรรกะของคอมโพเนนต์
ใช้ TypeScript ธรรมดาเพื่อจัดการตรรกะทางธุรกิจด้วยฟังก์ชันที่บริสุทธิ์ ในขณะที่ใช้เลเยอร์ของ reactivity ของ Vue ไว้ด้านบน

```ts
import { computed, ref, type ComputedRef } from 'vue';
import { toRefs } from 'vue';
import classNames from 'classnames';

import type { SetupContext } from 'vue';
import type { ComponentEmitTypes, ComponentPropTypes } from './your-component';

export const useComponent = (props: ComponentPropTypes, emit: SetupContext<ComponentEmitTypes>['emit']) => {
  // แยก props ที่มี reactivity
  const { size, disabled } = toRefs(props);

  const componentRef = ref<HTMLElement | null>(null);

  // คำนวณคุณสมบัติของคอมโพเนนต์
  const componentProps = computed(() => ({
    disabled: disabled.value,
  }));

  // คำนวณคลาส CSS โดยใช้ utility classNames
  const componentClasses = computed(() => {
    return classNames({
      'spr-size-small': size.value === 'small',
      'spr-size-medium': size.value === 'medium',
      'spr-size-large': size.value === 'large',
      'spr-disabled': disabled.value,
    });
  });

  // จัดการเหตุการณ์
  const handleClick = (evt: MouseEvent) => {
    if (disabled.value) {
      evt.stopPropagation();
      return;
    }
    emit('click', evt);
  };

  return {
    componentRef,
    componentProps,
    componentClasses,
    handleClick,
  };
};
```

## การลงทะเบียนคอมโพเนนต์

คอมโพเนนต์จะถูกลงทะเบียนส่วนกลางโดยอัตโนมัติด้วยคำนำหน้าที่กำหนดค่าไว้ ตัวอย่างเช่น หากคอมโพเนนต์ของคุณชื่อ `your-component.vue` มันจะถูกลงทะเบียนเป็น:

```jsx
<spr-your-component size="medium" />
```

คำนำหน้า `spr-` เป็นค่าเริ่มต้นสำหรับคอมโพเนนต์ระบบการออกแบบของเรา

## การส่งออกคอมโพเนนต์และประเภท

หลังจากสร้างคอมโพเนนต์แล้ว คุณต้องส่งออกเพื่อนำเข้าแต่ละรายการและตรวจสอบให้แน่ใจว่าประเภทของมันพร้อมใช้งานสำหรับผู้ใช้ไลบรารี

### ส่งออกคอมโพเนนต์ใน main.ts

เพิ่มคอมโพเนนต์ของคุณในส่วนส่งออกแต่ละรายการใน `lib/main.ts`:

```ts
// เพิ่มในส่วนส่งออก (เรียงตามตัวอักษร)
export { default as YourComponent } from '../src/components/your-component/your-component.vue';
```

สิ่งนี้ช่วยให้ผู้ใช้สามารถนำเข้าคอมโพเนนต์ของคุณได้โดยตรง:

```ts
import { YourComponent } from 'design-system-next';
```

### ส่งออกประเภทใน types.ts

เพิ่มประเภท prop ของคอมโพเนนต์ของคุณใน `lib/types.ts` สำหรับการรองรับ TypeScript:

```ts
// เพิ่มในส่วนส่งออกประเภท (เรียงตามตัวอักษร)
export type { ComponentPropTypes, ComponentEmitTypes } from '../src/components/your-component/your-component';
```

สิ่งนี้ช่วยให้ผู้ใช้เข้าถึงประเภทของคอมโพเนนต์ของคุณสำหรับการพัฒนาที่ปลอดภัยจากประเภท:

```ts
import type { ComponentPropTypes } from 'design-system-next';

const props: ComponentPropTypes = {
  size: 'medium',
  disabled: false,
};
```

### หมายเหตุสำคัญ

- **การเรียงตามตัวอักษร**: รักษาการเรียงตามตัวอักษรในทั้ง `main.ts` และ `types.ts` เพื่อความสอดคล้องและการบำรุงรักษาที่ง่ายขึ้น
- **ส่งออกประเภทสาธารณะทั้งหมด**: ส่งออกประเภท prop, emit และค่าคงที่หรือ enum สาธารณะใดๆ ที่ผู้ใช้อาจต้องการ
- **แบบแผนการตั้งชื่อ**: ใช้ PascalCase สำหรับการส่งออกคอมโพเนนต์ (เช่น `YourComponent` ไม่ใช่ `yourComponent`)
- **เส้นทางประเภท**: การส่งออกประเภทควรชี้ไปที่ไฟล์ `.ts` (โดยไม่มีนามสกุล) ไม่ใช่ไฟล์ `.vue`

## ตัวอย่างการใช้งาน

นี่คือวิธีการใช้คอมโพเนนต์ที่สร้างขึ้นใหม่ของคุณ:

```vue
<template>
  <spr-your-component size="medium" :disabled="false" @click="handleClick"> เนื้อหาคอมโพเนนต์ </spr-your-component>
</template>

<script lang="ts" setup>
const handleClick = (evt: MouseEvent) => {
  console.log('คลิกคอมโพเนนต์!', evt);
};
</script>
```

## แนวทางปฏิบัติที่ดีที่สุด

### การตรวจสอบ Prop

1. อธิบายประเภท prop และ validators เสมอเพื่อให้แน่ใจว่าการใช้งานที่ถูกต้องและหลีกเลี่ยงปัญหา runtime
2. ใช้ความคิดเห็น JSDoc สำหรับ props เพื่อจัดทำเอกสาร
3. เพื่อจัดการ props ที่ไม่ได้กำหนดอย่างถูกต้อง ให้ใช้ค่าเริ่มต้นเมื่อเป็นไปได้

### ความปลอดภัยของประเภท

1. TypeScript มอบการตรวจสอบประเภท การรองรับ IDE ที่ดีขึ้น และการพัฒนาที่ปลอดภัยกว่า
2. สร้างอินเทอร์เฟซสำหรับ props, emitters และ slots เพื่อรักษาความสอดคล้อง
3. ใช้ `ExtractPropTypes` เพื่อให้แน่ใจว่าความปลอดภัยของประเภทสำหรับ props

### Composables

1. แยกตรรกะที่นำกลับมาใช้ใหม่เป็น composables (useXYZ) เพื่อปรับปรุงความเป็นโมดูลและการบำรุงรักษา
2. ใช้ `toRefs` เพื่อรักษา reactivity ของ props แต่ละรายการ
3. ทำให้ composables มุ่งเน้นที่งานเฉพาะ
4. ใช้ utility `classNames` สำหรับตรรกะคลาสแบบมีเงื่อนไขที่ซับซ้อน

### แบบแผนการตั้งชื่อ

1. ไฟล์คอมโพเนนต์: ชื่อไฟล์ควรเป็น kebab-case.vue
2. สำหรับ props และ emits ให้ใช้ camelCase
3. ประเภทและอินเทอร์เฟซ: เพื่อกำหนดประเภทและอินเทอร์เฟซ ให้ใช้ PascalCase
4. คลาส CSS: ใช้คำนำหน้า `spr-` และปฏิบัติตามการตั้งชื่อแบบ BEM เมื่อเป็นไปได้

### สไตล์

1. ใช้คลาส utility ของ Tailwind CSS ด้วยคำนำหน้า `spr-` ของเรา
2. ปฏิบัติตามโทเค็นสีของระบบการออกแบบ (เช่น `spr-background-color-base`, `spr-text-color-strong`)
3. สำหรับสถานะแบบอินเทอร์แอกทีฟ ให้ใช้คลาส hover/active ที่เหมาะสม
4. หลีกเลี่ยงการใช้สไตล์ inline ยกเว้นในกรณีที่จำเป็นสำหรับพฤติกรรมแบบไดนามิก

### การเข้าถึง (A11y)

1. ตรวจสอบให้แน่ใจว่าคอมโพเนนต์สามารถเข้าถึงได้โดยค่าเริ่มต้น โดยปฏิบัติตามหลักการ ARIA
2. ทดสอบ screen readers และการนำทางด้วย keyboard
3. ใช้องค์ประกอบ HTML ที่เป็นความหมายและรวมพฤติกรรม fallback สำหรับคอมโพเนนต์แบบกำหนดเอง
4. เพิ่ม attributes `aria-` ที่เหมาะสมเมื่อจำเป็น

### การจัดการ Slot

1. ใช้ named slots เพื่อปรับปรุงความสามารถอ่านและการขยายได้
2. ตั้งค่าเนื้อหาเริ่มต้นสำหรับ slots เพื่อจัดการสถานการณ์ edge case เมื่อไม่ได้ให้เนื้อหา

### การออกแบบที่ตอบสนอง

1. สร้างคอมโพเนนต์ที่ตอบสนองด้วย Tailwind CSS หรือ media queries
2. ทดสอบคอมโพเนนต์บนขนาดหน้าจอและอุปกรณ์ต่างๆ

สำหรับตัวอย่างโดยละเอียดเพิ่มเติม โปรดดูคอมโพเนนต์ที่มีอยู่เช่น button, lozenge หรือ accordion ในซอร์สโค้ด
