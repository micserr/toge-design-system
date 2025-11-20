---
title: การทดสอบคอมโพเนนต์
description: คู่มือที่ครอบคลุมในการทดสอบคอมโพเนนต์ Vue 3 โดยใช้ Playwright Component Testing กับการผสานรวม MCP
outline: deep
---

# การทดสอบคอมโพเนนต์

ระบบการออกแบบของเราใช้ **Playwright Component Testing** เพื่อให้แน่ใจว่าพฤติกรรมคอมโพเนนต์แข็งแกร่งและเชื่อถือได้ คู่มือนี้ครอบคลุมแนวทางการทดสอบของเรา ซึ่งขับเคลื่อนโดย **Playwright MCP (Model Context Protocol)** สำหรับการสร้างและดำเนินการทดสอบที่ชาญฉลาด

## ภาพรวม

Playwright Component Testing มอบ:

- **การดำเนินการที่รวดเร็ว** ด้วยการเรนเดอร์เบราว์เซอร์จริง
- **ความครอบคลุมที่ครอบคลุม** ของการโต้ตอบของผู้ใช้
- **การทดสอบการเข้าถึง** ในตัว
- **ความสามารถในการทดสอบ visual regression**
- **ความเข้ากันได้ข้ามเบราว์เซอร์**

## สถาปัตยกรรมการทดสอบ

### โครงสร้างการทดสอบ

```
tests/
├── components/
│   ├── 1-component-test-initial-prompt.md  # prompt การสร้างทดสอบ AI
│   ├── Button.spec.ts                      # ทดสอบคอมโพเนนต์
│   ├── Modal.spec.ts
│   └── ...
```

### การกำหนดค่า

การทดสอบคอมโพเนนต์ Playwright ของเราได้รับการกำหนดค่าใน `playwright-ct.config.ts`:

```typescript
export default defineConfig({
  testDir: './tests/components',
  fullyParallel: true,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
    ctTemplateDir: 'playwright',
    ctPort: 3100,
    ctViteConfig: {
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
```

## การสร้างทดสอบที่ขับเคลื่อนด้วย AI

### การผสานรวม Playwright MCP

เราใช้ **Playwright MCP (Model Context Protocol)** เพื่อสร้างการทดสอบคอมโพเนนต์ที่ครอบคลุม วิธีการที่ขับเคลื่อนด้วย AI นี้ทำให้แน่ใจได้ว่า:

- **ความครอบคลุมที่สมบูรณ์** ของฟีเจอร์คอมโพเนนต์ทั้งหมด
- **รูปแบบการทดสอบที่สอดคล้องกัน** ในคอมโพเนนต์ทั้งหมด
- **การสร้างกรณีทดสอบที่ชาญฉลาด** ตามการวิเคราะห์คอมโพเนนต์
- **แนวทางการทดสอบที่เน้นการเข้าถึงเป็นหลัก**
- **การสร้างโค้ดที่เป็นไปตาม lint** ตามมาตรฐานโปรเจกต์

### ระบบ Initial Prompt

การสร้างทดสอบของเราใช้ initial prompt ที่อยู่ใน `tests/components/1-component-test-initial-prompt.md` prompt นี้ให้:

1. **ข้อกำหนดการทดสอบที่ครอบคลุม**
2. **รูปแบบเฉพาะ Vue 3**
3. **แนวทางการทดสอบการเข้าถึง**
4. **มาตรฐาน linting และคุณภาพโค้ด**
5. **กลยุทธ์การจัดการข้อผิดพลาด**
6. **แนวทางปฏิบัติและแบบแผนที่ดีที่สุด**

### การใช้เครื่องมือสร้างทดสอบ AI

ในการสร้างการทดสอบสำหรับคอมโพเนนต์ใหม่โดยใช้ระบบ MCP:

::: info ข้อกำหนดโมเดล
ใช้ **Claude Sonnet 4+** เป็นโมเดล AI ของคุณเมื่อสร้างการทดสอบคอมโพเนนต์ สิ่งนี้ทำให้แน่ใจได้ว่าคุณภาพการทดสอบที่เหมาะสม ความครอบคลุมที่ครอบคลุม และการปฏิบัติตามรูปแบบการทดสอบและ Vue 3 ที่ดีที่สุดของเรา
:::

```markdown
# ให้ข้อมูลคอมโพเนนต์ในรูปแบบนี้:

<<<COMPONENT
[ซอร์สโค้ด SFC ของ Vue ที่นี่]
COMPONENT>>>

<<<STRUCTURE
[โครงสร้างโฟลเดอร์จาก root src/]
STRUCTURE>>>

<<<RELATED
[ไม่บังคับ: composables ที่เกี่ยวข้อง ประเภท หรือคอมโพเนนต์]
RELATED>>>
```

AI จะวิเคราะห์คอมโพเนนต์ของคุณและสร้างการทดสอบที่ครอบคลุมซึ่งครอบคลุม:

- การเรนเดอร์และการ mount
- การตรวจสอบ props และการรวม
- การปล่อย events
- ฟังก์ชันการทำงานของ slot
- ข้อกำหนดการเข้าถึง
- การจัดการข้อผิดพลาด
- การโต้ตอบของผู้ใช้
- คุณภาพโค้ดและการปฏิบัติตาม lint

## ข้อกำหนดความครอบคลุมการทดสอบ

### พื้นที่การทดสอบหลัก

#### 1. การทดสอบการเรนเดอร์

```typescript
test('ควรเรนเดอร์คอมโพเนนต์ด้วย props เริ่มต้น', async ({ mount }) => {
  const component = await mount(Button);
  await expect(component).toBeVisible();
});
```

#### 2. การทดสอบ Props

```typescript
test('ควรใช้ variants ขนาดอย่างถูกต้อง', async ({ mount }) => {
  const component = await mount(Button, { props: { size: 'large' } });
  await expect(component).toHaveClass(/spr-size-large/);
});
```

#### 3. การทดสอบ Events

```typescript
test('ควรปล่อย event click ด้วย payload ที่ถูกต้อง', async ({ mount }) => {
  let clickEvent: any;
  const component = await mount(Button, {
    on: {
      click: (event) => {
        clickEvent = event;
      },
    },
  });

  await component.click();
  expect(clickEvent).toBeTruthy();
});
```

#### 4. การทดสอบการเข้าถึง

```typescript
test('ควรมี attributes ARIA ที่ถูกต้อง', async ({ mount }) => {
  const component = await mount(Button, { props: { disabled: true } });
  await expect(component).toHaveAttribute('aria-disabled', 'true');
});

test('ควรนำทางได้ด้วย keyboard', async ({ mount, page }) => {
  await mount(Button);
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button')).toBeFocused();
});
```

#### 5. การทดสอบ Slot

```typescript
test('ควรเรนเดอร์เนื้อหา slot อย่างถูกต้อง', async ({ mount }) => {
  const component = await mount(Button, {
    slots: { default: 'ข้อความปุ่มแบบกำหนดเอง' },
  });
  await expect(component).toContainText('ข้อความปุ่มแบบกำหนดเอง');
});
```

### สถานการณ์การทดสอบขั้นสูง

#### การเรนเดอร์แบบมีเงื่อนไข

```typescript
test('ควรเรนเดอร์องค์ประกอบแบบมีเงื่อนไขตาม props', async ({ mount }) => {
  const component = await mount(Modal, { props: { showHeader: false } });
  await expect(component.locator('.modal-header')).not.toBeVisible();
});
```

#### การผสานรวมฟอร์ม

```typescript
test('ควรผสานรวมกับการตรวจสอบฟอร์ม', async ({ mount }) => {
  const component = await mount(Input, {
    props: { required: true, value: '' },
  });
  await component.blur();
  await expect(component).toHaveAttribute('aria-invalid', 'true');
});
```

#### Theme และ Styling

```typescript
test('ควรใช้ variants theme', async ({ mount }) => {
  const component = await mount(Button, {
    props: { variant: 'primary' },
  });
  await expect(component).toHaveClass(/spr-variant-primary/);
});
```

## แนวทางปฏิบัติที่ดีที่สุด

### คุณภาพโค้ดและ Linting

ก่อนรันการทดสอบ ตรวจสอบให้แน่ใจว่าไฟล์ทดสอบของคุณตรงตามมาตรฐานคุณภาพโค้ด:

```bash
# ตรวจสอบปัญหา lint ในไฟล์ทดสอบ
npm run lint
```

**ข้อกำหนด linting ที่สำคัญสำหรับไฟล์ทดสอบ:**

- การจัดรูปแบบโค้ดที่สอดคล้องกันและสไตล์
- การพิมพ์ TypeScript ที่เหมาะสม
- การปฏิบัติตามกฎ ESLint
- การจัดระเบียบคำสั่ง import
- แบบแผนการตั้งชื่อที่สอดคล้องกัน

### กลยุทธ์ Selector (ลำดับความสำคัญ)

1. **selectors แบบ role-based** (แนะนำ):

```typescript
page.getByRole('button', { name: 'ส่ง' });
page.getByRole('textbox', { name: 'อีเมล' });
```

2. **selectors เนื้อหาข้อความ**:

```typescript
page.getByText('คลิกฉัน');
page.getByLabel('ที่อยู่ อีเมล');
```

3. **test IDs** (เมื่อจำเป็น):

```typescript
page.getByTestId('submit-btn');
```

### การเขียนการทดสอบที่บำรุงรักษาได้

#### ใช้ชื่อการทดสอบที่สื่อความหมาย

```typescript
// ✅ ดี
test('ควรปิดใช้งานปุ่มและป้องกันการคลิกเมื่อ prop disabled เป็น true');

// ❌ ไม่ดี
test('ทดสอบ disabled');
```

#### จัดกลุ่มการทดสอบที่เกี่ยวข้อง

```typescript
test.describe('คอมโพเนนต์ Button', () => {
  test.describe('Props', () => {
    test('ควรเรนเดอร์ด้วยขนาดเริ่มต้น');
    test('ควรใช้ variants ขนาดแบบกำหนดเอง');
  });

  test.describe('Events', () => {
    test('ควรปล่อย events click');
    test('ควรป้องกัน events เมื่อปิดใช้งาน');
  });
});
```

#### หลีกเลี่ยงปัญหา timing

```typescript
// ✅ ดี - รอเงื่อนไขเฉพาะ
await expect(modal).toBeVisible();

// ❌ ไม่ดี - timeout แบบกำหนดเอง
await page.waitForTimeout(500);
```

## การรันการทดสอบ

### การพัฒนาในเครื่อง

```bash
# ตรวจสอบปัญหา lint ในไฟล์ทดสอบ (แนะนำก่อนรันการทดสอบ)
npm run lint

# รันการทดสอบคอมโพเนนต์ทั้งหมด
npm run test:components

# รันการทดสอบคอมโพเนนต์เฉพาะ (ชื่อสั้น)
npx playwright test Button.spec.ts --config=playwright-ct.config.ts

# รันไฟล์ทดสอบเฉพาะ (เส้นทางเต็ม)
npx playwright test tests/components/Button.spec.ts --config=playwright-ct.config.ts

# รันด้วยโหมด UI สำหรับการดีบัก
npx playwright test --ui --config=playwright-ct.config.ts

# สร้างรายงานการทดสอบ
npx playwright show-report
```

### การดีบักการทดสอบ

#### การดีบักภาพ

```typescript
// เพิ่มในทดสอบสำหรับการดีบักภาพ
await page.pause();
```

#### Trace Viewer

```bash
# รันทดสอบด้วย trace
npx playwright test --trace on

# ดู trace
npx playwright show-trace trace.zip
```

#### Screenshots เมื่อล้มเหลว

```typescript
test('ควรเรนเดอร์อย่างถูกต้อง', async ({ mount }, testInfo) => {
  const component = await mount(Button);

  // ถ่ายภาพหน้าจอเมื่อล้มเหลว
  if (testInfo.retry > 0) {
    await testInfo.attach('screenshot', {
      body: await page.screenshot(),
      contentType: 'image/png',
    });
  }
});
```

## ตัวอย่างการทดสอบคอมโพเนนต์

### การทดสอบคอมโพเนนต์แบบง่าย

```typescript
import { test, expect } from '@playwright/experimental-ct-vue';
import Button from '@/components/button/button.vue';

test.describe('คอมโพเนนต์ Button', () => {
  test('ควรเรนเดอร์ด้วย props เริ่มต้น', async ({ mount }) => {
    const component = await mount(Button);

    await expect(component).toBeVisible();
    await expect(component).toHaveClass(/spr-button/);
  });

  test('ควรจัดการ events click', async ({ mount }) => {
    let clicked = false;
    const component = await mount(Button, {
      on: {
        click: () => {
          clicked = true;
        },
      },
    });

    await component.click();
    expect(clicked).toBe(true);
  });
});
```

### การทดสอบคอมโพเนนต์ที่ซับซ้อน

```typescript
import { test, expect } from '@playwright/experimental-ct-vue';
import Modal from '@/components/modal/modal.vue';

test.describe('คอมโพเนนต์ Modal', () => {
  test('ควรจัดการ focus อย่างถูกต้อง', async ({ mount, page }) => {
    const component = await mount(Modal, {
      props: {
        modelValue: true,
        title: 'โมดอลทดสอบ',
      },
    });

    // ควร focus โมดอล
    await expect(component).toBeFocused();

    // ควร trap focus ภายในโมดอล
    await page.keyboard.press('Tab');
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(['BUTTON', 'INPUT', 'A']).toContain(focusedElement);
  });

  test('ควรปิดเมื่อกดปุ่ม Escape', async ({ mount, page }) => {
    let modelValue = true;
    await mount(Modal, {
      props: {
        modelValue,
        'onUpdate:modelValue': (value: boolean) => {
          modelValue = value;
        },
      },
    });

    await page.keyboard.press('Escape');
    expect(modelValue).toBe(false);
  });
});
```

## การทดสอบการเข้าถึง

### Attributes ARIA

```typescript
test('ควรมี attributes ARIA ที่ถูกต้อง', async ({ mount }) => {
  const component = await mount(Button, {
    props: { disabled: true, 'aria-label': 'ส่งฟอร์ม' },
  });

  await expect(component).toHaveAttribute('aria-disabled', 'true');
  await expect(component).toHaveAttribute('aria-label', 'ส่งฟอร์ม');
});
```

### การนำทางด้วย Keyboard

```typescript
test('ควรรองรับการนำทางด้วย keyboard', async ({ mount, page }) => {
  await mount(Dropdown);

  // เปิดด้วย Enter
  await page.keyboard.press('Enter');
  await expect(page.getByRole('listbox')).toBeVisible();

  // นำทางด้วยลูกศร
  await page.keyboard.press('ArrowDown');
  await expect(page.getByRole('option').first()).toBeFocused();
});
```

### การรองรับ Screen Reader

```typescript
test('ควรให้การประกาศ screen reader', async ({ mount, page }) => {
  const component = await mount(Snackbar, {
    props: { message: 'สำเร็จ!', type: 'success' },
  });

  await expect(component).toHaveAttribute('role', 'alert');
  await expect(component).toHaveAttribute('aria-live', 'polite');
});
```

## การผสานรวมกับ CI/CD

การทดสอบคอมโพเนนต์ของเรารันโดยอัตโนมัติใน pipelines CI/CD:

```yaml
# ตัวอย่าง Azure Pipelines
- task: Node.js
  inputs:
    command: 'custom'
    customCommand: 'npm run lint'
    workingDirectory: '$(System.DefaultWorkingDirectory)'

- task: Node.js
  inputs:
    command: 'custom'
    customCommand: 'npm run test:components'
    workingDirectory: '$(System.DefaultWorkingDirectory)'
```

ทั้ง linting และการทดสอบต้องผ่านก่อนที่โค้ดจะถูกรวมเข้ากับ main branches

## การขอความช่วยเหลือ

สำหรับความช่วยเหลือในการทดสอบคอมโพเนนต์:

1. **ตรวจสอบตัวอย่างการทดสอบที่มีอยู่** ใน `tests/components/`
2. **ใช้เครื่องมือสร้างทดสอบ AI** ด้วย initial prompt
3. **ตรวจสอบเอกสาร Playwright** สำหรับรูปแบบขั้นสูง
4. **ถามทีม** สำหรับกลยุทธ์การทดสอบเฉพาะคอมโพเนนต์

::: tip เคล็ดลับสำหรับมือโปร
ใช้ระบบ Playwright MCP เพื่อสร้างการทดสอบที่ครอบคลุมอย่างรวดเร็ว AI เข้าใจรูปแบบคอมโพเนนต์ของเราและจะสร้างการทดสอบที่ปฏิบัติตามแบบแผนของเราและครอบคลุมสถานการณ์ที่จำเป็นทั้งหมด
:::

::: warning สำคัญ
รันการตรวจสอบ lint และการทดสอบในเครื่องเสมอก่อน commit การ lint ที่ล้มเหลวหรือการทดสอบจะบล็อกการ deploy CI/CD และป้องกันการรวม pull requests

```bash
# workflow ก่อน commit ที่แนะนำ
npm run lint        # ตรวจสอบคุณภาพโค้ด
npm run test:components  # รันการทดสอบคอมโพเนนต์
```

:::
