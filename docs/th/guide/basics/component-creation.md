---
title: การสร้างคอมโพเนนต์
description: เรียนรู้วิธีสร้างคอมโพเนนต์ใหม่สำหรับ Design System Next
outline: deep
---

# การสร้างคอมโพเนนต์

## ภาพรวม

คู่มือนี้จะแนะนำขั้นตอนในการสร้างคอมโพเนนต์ใหม่สำหรับ Design System Next โดยครอบคลุมทั้งการพัฒนา การทดสอบ และเอกสารประกอบ

## โครงสร้างโฟลเดอร์

คอมโพเนนต์ทั้งหมดอยู่ในโฟลเดอร์ `src/components/` โดยแต่ละคอมโพเนนต์จะมีโฟลเดอร์ของตัวเอง:

```
src/components/
├── button/
│   ├── Button.vue          # คอมโพเนนต์หลัก
│   ├── Button.spec.ts      # ไฟล์ทดสอบ
│   └── index.ts            # ไฟล์ส่งออก
├── input/
│   ├── Input.vue
│   ├── Input.spec.ts
│   └── index.ts
└── ...
```

## ขั้นตอนการสร้างคอมโพเนนต์

### 1. สร้างโฟลเดอร์และไฟล์พื้นฐาน

สร้างโฟลเดอร์ใหม่สำหรับคอมโพเนนต์ของคุณ:

```bash
mkdir src/components/my-component
cd src/components/my-component
```

สร้างไฟล์พื้นฐาน:

```bash
touch MyComponent.vue index.ts MyComponent.spec.ts
```

### 2. พัฒนาคอมโพเนนต์ Vue

สร้างคอมโพเนนต์ Vue ด้วย Composition API:

```vue
<template>
  <div class="my-component">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Props
interface Props {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
});

// Emits
const emit = defineEmits<{
  click: [event: MouseEvent];
}>();

// Computed properties
const classes = computed(() => ({
  'my-component': true,
  [`my-component--${props.variant}`]: true,
  [`my-component--${props.size}`]: true,
}));

// Methods
const handleClick = (event: MouseEvent) => {
  emit('click', event);
};
</script>

<style scoped>
.my-component {
  /* สไตล์พื้นฐาน */
}

.my-component--primary {
  /* สไตล์สำหรับ variant primary */
}

.my-component--sm {
  /* สไตล์สำหรับ size sm */
}
</style>
```

### 3. สร้างไฟล์ส่งออก

สร้างไฟล์ `index.ts` เพื่อส่งออกคอมโพเนนต์:

```typescript
export { default as MyComponent } from './MyComponent.vue';
export type { default as MyComponentProps } from './MyComponent.vue';
```

### 4. เขียนการทดสอบ

สร้างการทดสอบด้วย Vitest และ Vue Test Utils:

```typescript
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import MyComponent from './MyComponent.vue';

describe('MyComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.exists()).toBe(true);
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(MyComponent);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('applies correct classes based on props', () => {
    const wrapper = mount(MyComponent, {
      props: {
        variant: 'secondary',
        size: 'lg',
      },
    });
    expect(wrapper.classes()).toContain('my-component--secondary');
    expect(wrapper.classes()).toContain('my-component--lg');
  });
});
```

### 5. เพิ่มคอมโพเนนต์ในระบบส่งออกหลัก

อัปเดตไฟล์ `src/components/index.ts` เพื่อรวมคอมโพเนนต์ใหม่:

```typescript
export { MyComponent } from './my-component';
```

### 6. สร้างเอกสารประกอบ

สร้างไฟล์เอกสารประกอบใน `docs/documentation/components/my-component.md`:

````markdown
---
title: MyComponent
description: คอมโพเนนต์ MyComponent สำหรับ...
---

# MyComponent

คอมโพเนนต์ MyComponent ใช้สำหรับ...

## การใช้งานพื้นฐาน

```vue
<template>
  <spr-my-component> เนื้อหา </spr-my-component>
</template>
```
````

## API

### Props

| ชื่อ    | ประเภท                     | ค่าเริ่มต้น | คำอธิบาย            |
| ------- | -------------------------- | ----------- | ------------------- |
| variant | `'primary' \| 'secondary'` | `'primary'` | รูปแบบของคอมโพเนนต์ |
| size    | `'sm' \| 'md' \| 'lg'`     | `'md'`      | ขนาดของคอมโพเนนต์   |

### Events

| ชื่อ  | พารามิเตอร์  | คำอธิบาย                |
| ----- | ------------ | ----------------------- |
| click | `MouseEvent` | เกิดเมื่อคลิกคอมโพเนนต์ |

### Slots

| ชื่อ    | คำอธิบาย                 |
| ------- | ------------------------ |
| default | เนื้อหาหลักของคอมโพเนนต์ |

```

## แนวทางปฏิบัติที่ดีที่สุด

### การตั้งชื่อ

- ใช้ PascalCase สำหรับชื่อคอมโพเนนต์
- ใช้คำนำหน้า `spr-` ในเอกสารประกอบ
- ชื่อควรสื่อความหมายและเฉพาะเจาะจง

### Props และ Events

- กำหนดประเภท TypeScript สำหรับ props
- ใช้ `withDefaults` เพื่อกำหนดค่าเริ่มต้น
- ประกาศ events ที่คอมโพเนนต์สามารถ emit ได้

### สไตล์

- ใช้ CSS scoped เพื่อป้องกันการชนกันของสไตล์
- ใช้ CSS custom properties สำหรับธีม
- ปฏิบัติตามหลักการออกแบบของระบบ

### การทดสอบ

- เขียนการทดสอบสำหรับทุกฟีเจอร์หลัก
- ทดสอบ props และ events
- ทดสอบ accessibility

## เครื่องมือและทรัพยากร

- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Vue Test Utils](https://test-utils.vuejs.org/)
- [Vitest](https://vitest.dev/)
- [TypeScript](https://www.typescriptlang.org/)
```
