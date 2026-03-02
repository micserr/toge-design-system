---
title: เอกสารประกอบคอมโพเนนต์
descripttion: คู่มือนี้สรุปแนวทางปฏิบัติที่ดีที่สุดและโครงสร้างสำหรับการจัดทำเอกสารคอมโพเนนต์ใน Sprout Design System
outline: deep
---

# การจัดทำเอกสารคอมโพเนนต์

คู่มือนี้ให้คำแนะนำที่ครอบคลุมในการจัดทำเอกสารคอมโพเนนต์สำหรับ Sprout Design System รวมถึงการสร้างหน้าเอกสารใหม่ การจัดโครงสร้างเนื้อหาด้วยตัวอย่าง API documentation และแนวทางปฏิบัติที่ดีที่สุด มันเน้นความสำคัญของการจัดระเบียบ ตัวอย่างที่ชัดเจน และเอกสาร API ที่ละเอียด

## การตั้งค่า VitePress

เอกสารของเราใช้ [VitePress](https://vitepress.dev/) ตรวจสอบให้แน่ใจว่าคุณตรงตามข้อกำหนดเบื้องต้น:

- Node.js เวอร์ชัน 18 หรือสูงกว่า
- ตัวแก้ไขข้อความที่มีการรองรับ Markdown (แนะนำ VSCode)
- ความรู้พื้นฐานเกี่ยวกับ Markdown และ Vue

## โครงสร้างไฟล์

```plaintext
docs/
├─ .vitepress/
│  └─ config.ts         # การกำหนดค่า VitePress
├─ guide/
│  ├─ basics/           # คู่มือพื้นฐาน
│  └─ contributing/     # คู่มือการมีส่วนร่วม
└─ documentation/
   └─ components/       # เอกสารคอมโพเนนต์
```

## โครงสร้างหน้า

หน้าเอกสารทั่วไปประกอบด้วย:

1. Frontmatter ที่มี outline, title และ description
2. คำอธิบายคอมโพเนนต์และวัตถุประสงค์
3. การใช้งานพื้นฐานพร้อมการสาธิตสด
4. ตัวอย่างต่างๆ ที่แสดง variants และ props ของคอมโพเนนต์
5. API reference พร้อมตารางสำหรับ props, events และ slots
6. ส่วนการใช้งานในผลิตภัณฑ์ที่แสดงว่าคอมโพเนนต์ถูกใช้ที่ไหน
7. การนำเข้าคอมโพเนนต์ในส่วน script setup

## โครงสร้างหน้าพื้นฐาน

````markdown
---
outline: 'deep'
title: คอมโพเนนต์ของคุณ
description: คำอธิบายโดยละเอียดว่าคอมโพเนนต์ทำอะไร จุดประสงค์ และเมื่อควรใช้
---

# คอมโพเนนต์ของคุณ

คำอธิบายที่ครอบคลุมว่าคอมโพเนนต์ทำอะไร จุดประสงค์ และกรณีการใช้งาน

## การใช้งานพื้นฐาน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-your-component>ตัวอย่าง</spr-your-component>
</div>

```vue
<spr-your-component>ตัวอย่าง</spr-your-component>
```
````

## ตัวอย่าง Variants/Props

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-your-component variant="primary">หลัก</spr-your-component>
  <spr-your-component variant="secondary">รอง</spr-your-component>
</div>

```vue
<spr-your-component variant="primary">หลัก</spr-your-component>
<spr-your-component variant="secondary">รอง</spr-your-component>
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
      <td>variant</td>
      <td>ควบคุมสไตล์ภาพของคอมโพเนนต์</td>
      <td>'primary' | 'secondary'</td>
      <td>'primary'</td>
    </tr>
  </tbody>
</table>
```

สำหรับตัวอย่างที่สมบูรณ์ โปรดดู [เอกสาร Button](/th/documentation/components/button/button)

## การสร้างหน้าใหม่

1. สร้างไฟล์ `.md` ใหม่ในไดเรกทอรีที่เหมาะสม:

```plaintext
docs/
├── documentation/
│   ├── components/
│   │   └── your-component.md
```

2. เพิ่ม frontmatter ที่มี title, description และการตั้งค่า outline:

```markdown
---
outline: 'deep'
title: คอมโพเนนต์ของคุณ
description: คำอธิบายโดยละเอียดว่าคอมโพเนนต์ทำอะไรและเมื่อควรใช้
---
```

3. เพิ่มหน้าลงในการกำหนดค่า VitePress:

```typescript
// docs/.vitepress/config.ts
sidebar: {
  '/documentation/': [
    {
      text: 'คอมโพเนนต์',
      items: [
        // ... รายการที่มีอยู่
        {
          text: 'คอมโพเนนต์ของคุณ',
          link: '/documentation/components/your-component',
        },
      ],
    },
  ],
}
```

## ส่วนของหน้า

ใช้ [Markdown Syntax ของ VitePress](https://vitepress.dev/guide/markdown) สำหรับการจัดรูปแบบที่สวยงามและมีประสิทธิภาพ

### 1. ชื่อและคำอธิบาย

```markdown
---
outline: 'deep'
title: คอมโพเนนต์ของคุณ
description: คำอธิบายโดยละเอียดว่าคอมโพเนนต์ทำอะไร จุดประสงค์ และเมื่อควรใช้
---

# คอมโพเนนต์ของคุณ

คำอธิบายที่ครอบคลุมว่าคอมโพเนนต์ทำอะไร จุดประสงค์ และเมื่อควรใช้ สิ่งนี้ควรให้บริบทสำหรับนักพัฒนาและนักออกแบบเพื่อทำความเข้าใจเมื่อและวิธีการใช้คอมโพเนนต์
```

### 2. การใช้งานพื้นฐาน

````markdown
## การใช้งานพื้นฐาน

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-your-component>ตัวอย่างพื้นฐาน</spr-your-component>
</div>

```vue
<spr-your-component>ตัวอย่างพื้นฐาน</spr-your-component>
```
````

### 3. Variants และ Props

แสดง variants, props และการกำหนดค่าต่างๆ พร้อมตัวอย่างภาพและโค้ด snippets:

````markdown
## ขนาด

<div class="spr-flex spr-items-center spr-gap-2">
  <spr-your-component size="small">เล็ก</spr-your-component>
  <spr-your-component>กลาง</spr-your-component>
  <spr-your-component size="large">ใหญ่</spr-your-component>
</div>

```vue
<spr-your-component size="small">เล็ก</spr-your-component>
<spr-your-component>กลาง</spr-your-component>
<spr-your-component size="large">ใหญ่</spr-your-component>
```
````

### 4. API Reference

จัดทำเอกสาร API ของคอมโพเนนต์ในรูปแบบที่มีโครงสร้างโดยใช้ตาราง:

```markdown
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
      <td>size</td>
      <td>ควบคุมขนาดคอมโพเนนต์ มีผลต่อ padding, ขนาดฟอนต์ และมิติโดยรวม</td>
      <td>'small' | 'medium' | 'large'</td>
      <td>'medium'</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>เมื่อ <code>true</code> ป้องกันการโต้ตอบของผู้ใช้และใช้สถานะภาพที่ปิดใช้งาน</td>
      <td>boolean</td>
      <td>false</td>
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
      <td>click</td>
      <td>เกิดขึ้นเมื่อคลิกคอมโพเนนต์และไม่ได้ปิดใช้งาน</td>
      <td>(event: MouseEvent)</td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>default</td>
      <td>เนื้อหาที่จะแสดงภายในคอมโพเนนต์</td>
    </tr>
  </tbody>
</table>
```

### 5. การใช้งานในผลิตภัณฑ์

ส่วน "การใช้งานในผลิตภัณฑ์" เน้นว่าคอมโพเนนต์ถูกใช้และอย่างไรในผลิตภัณฑ์ Sprout ต่างๆ:

```markdown
## การใช้งานในผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark" width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprLogo from "@/components/logo/logo.vue";
import SprYourComponent from "@/components/your-component/your-component.vue";
</script>
```

## การพัฒนาในเครื่อง

1. ติดตั้ง dependencies:

```bash
npm install
```

2. เริ่มเซิร์ฟเวอร์ dev:

```bash
npm run docs:dev
```

3. ทำการเปลี่ยนแปลงและดูตัวอย่างได้ที่ `http://localhost:5173`

## แนวทางปฏิบัติที่ดีที่สุด

1. **การจัดระเบียบ**
   - จัดกลุ่มคอมโพเนนต์ที่คล้ายกันในส่วนเดียวกัน
   - ใช้ระดับหัวเรื่องที่สอดคล้องกัน
   - รวมตัวอย่างที่เกี่ยวข้องทั้งหมด
   - ปฏิบัติตามโครงสร้างเอกสารมาตรฐาน

2. **ตัวอย่าง**
   - เริ่มด้วยตัวอย่างการใช้งานพื้นฐานก่อน
   - สาธิตแต่ละ prop และ variant ด้วยตัวอย่างภาพ
   - รวมกรณีการใช้งานที่ใช้งานได้จริงที่แสดงคอมโพเนนต์ในบริบท
   - ใช้คลาส `spr-flex` กับ `spr-items-center` และ `spr-gap-2` สำหรับแสดงตัวอย่างหลายรายการ
   - รวม code snippets ที่สอดคล้องกันสำหรับแต่ละตัวอย่างเสมอ

3. **Code Snippets**
   - รวมโค้ดสำหรับแต่ละตัวอย่างภาพ
   - ใช้ syntax highlighting ที่ถูกต้องด้วย code blocks ของ ```vue
   - แสดงทั้งการใช้งานแบบง่ายและซับซ้อน
   - ตรวจสอบให้แน่ใจว่า code examples สมบูรณ์และทำงานได้

4. **เอกสาร API**
   - จัดทำเอกสาร props, events และ slots ทุกอย่างในตาราง
   - รวมข้อมูลประเภทที่ถูกต้อง
   - ระบุค่าเริ่มต้น
   - เพิ่มคำอธิบายโดยละเอียดสำหรับแต่ละรายการ อธิบายจุดประสงค์และการใช้งาน
   - ใช้แท็ก `<code>` เพื่อเน้นค่า prop ในคำอธิบาย

5. **การนำเข้าคอมโพเนนต์**
   - นำเข้าคอมโพเนนต์เสมอที่ด้านล่างของไฟล์ในส่วน `<script lang="ts" setup>`
   - ใช้เส้นทางนำเข้าที่ถูกต้องจาก "@/components/..."
   - นำเข้าคอมโพเนนต์ที่จำเป็นทั้งหมด รวมถึง SprLogo สำหรับส่วน "การใช้งานในผลิตภัณฑ์"
   - เมื่อแสดงไอคอน โปรดจำไว้ว่าต้องนำเข้า Icon component จาก '@iconify/vue'

6. **ความสอดคล้องของภาพ**
   - ใช้คลาส CSS มาตรฐานด้วยคำนำหน้า `spr-`
   - ใช้ spacing ที่สอดคล้องกันระหว่างตัวอย่าง
   - ตรวจสอบให้แน่ใจว่าตัวอย่างทั้งหมดจัดตำแหน่งอย่างถูกต้อง
   - ใช้คลาส `spr-rounded` สำหรับส่วน "การใช้งานในผลิตภัณฑ์"

7. **การเข้าถึง**
   - รวมข้อมูลการเข้าถึงเมื่อเกี่ยวข้อง
   - จัดทำเอกสาร attributes ARIA และการนำทางด้วย keyboard
   - กล่าวถึงการรองรับ screen reader หากเกี่ยวข้อง
