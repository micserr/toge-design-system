---
title: การทดสอบคอมโพเนนต์
description: เรียนรู้วิธีเขียนและรันการทดสอบสำหรับคอมโพเนนต์ Design System Next
outline: deep
---

# การทดสอบคอมโพเนนต์

## ภาพรวม

การทดสอบเป็นส่วนสำคัญในการพัฒนา Design System Next คู่มือนี้จะครอบคลุมกลยุทธ์การทดสอบ การเขียนการทดสอบ และเครื่องมือที่ใช้

## เครื่องมือการทดสอบ

### Vitest

เราใช้ [Vitest](https://vitest.dev/) เป็นเฟรมเวิร์กการทดสอบหลัก:

- รวดเร็วและมีประสิทธิภาพ
- เข้ากันได้กับ Vite
- รองรับ TypeScript โดยตรง
- มี API ที่คล้ายกับ Jest

### Vue Test Utils

[Vue Test Utils](https://test-utils.vuejs.org/) ใช้สำหรับการทดสอบคอมโพเนนต์ Vue:

- จัดเตรียมเมธอดสำหรับการ mount และ interact กับคอมโพเนนต์
- รองรับการทดสอบ events, props, และ slots
- เข้ากันได้กับ Vitest

### Playwright Component Testing

สำหรับการทดสอบคอมโพเนนต์แบบ end-to-end เราใช้ [Playwright](https://playwright.dev/):

- ทดสอบคอมโพเนนต์ในเบราว์เซอร์จริง
- รองรับการทดสอบ visual regression
- ทดสอบการทำงานในสภาพแวดล้อมที่สมจริง

## โครงสร้างการทดสอบ

### ไฟล์การทดสอบ

การทดสอบจะอยู่ในไฟล์ที่มีนามสกุล `.spec.ts` ในโฟลเดอร์เดียวกันกับคอมโพเนนต์:

```
src/components/button/
├── Button.vue
├── Button.spec.ts          # การทดสอบ unit
└── Button.ct.spec.ts       # การทดสอบคอมโพเนนต์ด้วย Playwright
```

### การตั้งชื่อการทดสอบ

- ใช้รูปแบบ `ComponentName.spec.ts` สำหรับการทดสอบ unit
- ใช้รูปแบบ `ComponentName.ct.spec.ts` สำหรับการทดสอบคอมโพเนนต์
- ชื่อไฟล์ควรสอดคล้องกับชื่อคอมโพเนนต์

## การเขียนการทดสอบ Unit

### การตั้งค่าเริ่มต้น

```typescript
import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import { createApp } from 'vue';
import Button from './Button.vue';

describe('Button', () => {
  // การทดสอบจะอยู่ที่นี่
});
```

### การทดสอบ Props

```typescript
it('renders with correct variant', () => {
  const wrapper = mount(Button, {
    props: {
      variant: 'secondary',
    },
  });

  expect(wrapper.classes()).toContain('button--secondary');
});

it('applies default props', () => {
  const wrapper = mount(Button);

  expect(wrapper.props('variant')).toBe('primary');
  expect(wrapper.props('size')).toBe('md');
});
```

### การทดสอบ Events

```typescript
it('emits click event when clicked', async () => {
  const wrapper = mount(Button);

  await wrapper.trigger('click');

  expect(wrapper.emitted('click')).toBeTruthy();
  expect(wrapper.emitted('click')).toHaveLength(1);
});

it('passes event object to click handler', async () => {
  const wrapper = mount(Button);

  await wrapper.trigger('click');

  const emittedEvent = wrapper.emitted('click')![0][0] as MouseEvent;
  expect(emittedEvent).toBeInstanceOf(MouseEvent);
});
```

### การทดสอบ Slots

```typescript
it('renders default slot content', () => {
  const wrapper = mount(Button, {
    slots: {
      default: 'Click me',
    },
  });

  expect(wrapper.text()).toContain('Click me');
});

it('renders prefix and suffix slots', () => {
  const wrapper = mount(Button, {
    slots: {
      prefix: '🔥',
      default: 'Hot Button',
      suffix: '🌶️',
    },
  });

  expect(wrapper.text()).toContain('🔥');
  expect(wrapper.text()).toContain('Hot Button');
  expect(wrapper.text()).toContain('🌶️');
});
```

### การทดสอบ Computed Properties และ Methods

```typescript
it('computes correct classes', async () => {
  const wrapper = mount(Button, {
    props: {
      variant: 'outline',
      size: 'lg',
    },
  });

  expect(wrapper.classes()).toContain('button');
  expect(wrapper.classes()).toContain('button--outline');
  expect(wrapper.classes()).toContain('button--lg');
});

it('calls internal methods correctly', async () => {
  const wrapper = mount(Button);
  const vm = wrapper.vm as any;

  const handleClickSpy = vi.spyOn(vm, 'handleClick');

  await wrapper.trigger('click');

  expect(handleClickSpy).toHaveBeenCalled();
});
```

## การทดสอบคอมโพเนนต์ด้วย Playwright

### การตั้งค่า

```typescript
import { test, expect } from '@playwright/experimental-ct-vue';
import Button from './Button.vue';

test.describe('Button Component Tests', () => {
  test('renders correctly', async ({ mount }) => {
    const component = await mount(Button, {
      props: {
        variant: 'primary',
      },
      slots: {
        default: 'Click me',
      },
    });

    await expect(component).toContainText('Click me');
  });
});
```

### การทดสอบการทำงาน

```typescript
test('handles click events', async ({ mount }) => {
  const component = await mount(Button, {
    props: {
      variant: 'primary',
    },
    slots: {
      default: 'Click me',
    },
  });

  await component.click();

  // ตรวจสอบว่ามีการเปลี่ยนแปลงที่คาดหวัง
  await expect(component).toHaveClass(/button--clicked/);
});

test('supports keyboard navigation', async ({ mount, page }) => {
  const component = await mount(Button);

  await component.focus();
  await page.keyboard.press('Enter');

  // ตรวจสอบการทำงานของ keyboard
  await expect(component).toHaveClass(/button--active/);
});
```

## การทดสอบ Accessibility

### การทดสอบ ARIA Attributes

```typescript
it('has correct ARIA attributes', () => {
  const wrapper = mount(Button, {
    props: {
      'aria-label': 'Close dialog',
    },
  });

  expect(wrapper.attributes('aria-label')).toBe('Close dialog');
  expect(wrapper.attributes('role')).toBe('button');
});
```

### การทดสอบด้วย Screen Readers

```typescript
it('is accessible to screen readers', () => {
  const wrapper = mount(Button, {
    props: {
      disabled: true,
    },
  });

  expect(wrapper.attributes('aria-disabled')).toBe('true');
});
```

## การรันการทดสอบ

### คำสั่งพื้นฐาน

```bash
# รันการทดสอบทั้งหมด
npm run test

# รันการทดสอบ unit เท่านั้น
npm run test:unit

# รันการทดสอบคอมโพเนนต์
npm run test:ct

# รันการทดสอบที่มีชื่อตรงกับ pattern
npm run test -- --grep "Button"
```

### การรันการทดสอบในโหมด watch

```bash
# ดูการเปลี่ยนแปลงและรันการทดสอบอัตโนมัติ
npm run test:watch

# รันเฉพาะไฟล์ที่เปลี่ยนแปลง
npm run test:related
```

### การสร้างรายงานความครอบคลุม

```bash
# สร้างรายงานความครอบคลุม
npm run test:coverage

# เปิดรายงานในเบราว์เซอร์
npm run test:coverage:open
```

## แนวทางปฏิบัติที่ดีที่สุด

### การเขียนการทดสอบ

- เขียนการทดสอบสำหรับทุกฟีเจอร์หลัก
- ทดสอบทั้งสถานะปกติและ edge cases
- ใช้ชื่อการทดสอบที่สื่อความหมาย
- จัดกลุ่มการทดสอบอย่างมีเหตุผล

### การทดสอบ Props และ Events

- ทดสอบทุก prop ที่เป็นไปได้
- ตรวจสอบค่าเริ่มต้น
- ทดสอบการส่งผ่าน events อย่างถูกต้อง

### การทดสอบ Accessibility

- รวมการทดสอบ accessibility ในทุกคอมโพเนนต์
- ตรวจสอบ ARIA attributes
- ทดสอบการทำงานด้วย keyboard

### การทดสอบ Visual Regression

- ใช้ Playwright สำหรับการทดสอบ visual
- จับภาพหน้าจอสำหรับการเปลี่ยนแปลงที่สำคัญ
- ตรวจสอบความสอดคล้องของการแสดงผล

## การแก้ไขปัญหาการทดสอบ

### การทดสอบที่ล้มเหลว

หากการทดสอบล้มเหลว:

1. ตรวจสอบข้อความ error อย่างละเอียด
2. ตรวจสอบว่าโค้ดมีการเปลี่ยนแปลงหรือไม่
3. ตรวจสอบ dependencies และการตั้งค่า
4. รันการทดสอบแยกต่างหากเพื่อแยกปัญหา

### การดีบักการทดสอบ

```typescript
it('debugs component state', () => {
  const wrapper = mount(Button, {
    props: {
      variant: 'primary',
    },
  });

  // ดีบักโดยการ log
  console.log(wrapper.html());
  console.log(wrapper.classes());

  // หรือใช้ debugger
  // debugger;

  expect(wrapper.exists()).toBe(true);
});
```

## เครื่องมือเพิ่มเติม

### Testing Library

[Vue Testing Library](https://testing-library.com/docs/vue-testing-library/intro/) สำหรับการทดสอบที่เน้นผู้ใช้:

```typescript
import { render, screen } from '@testing-library/vue';

it('renders button text', () => {
  render(Button, {
    slots: {
      default: 'Click me',
    },
  });

  expect(screen.getByText('Click me')).toBeInTheDocument();
});
```

### Mocking

การ mock สำหรับการทดสอบ:

```typescript
import { vi } from 'vitest';

// Mock external dependencies
vi.mock('./api', () => ({
  fetchData: vi.fn(),
}));
```

## สรุป

การทดสอบที่ครอบคลุมช่วยให้มั่นใจได้ว่าคอมโพเนนต์ทำงานอย่างถูกต้องและเชื่อถือได้ ปฏิบัติตามแนวทางปฏิบัติที่ดีที่สุดเหล่านี้เพื่อสร้างฐานโค้ดที่แข็งแกร่งและน่าเชื่อถือ
