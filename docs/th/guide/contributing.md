---
title: การมีส่วนร่วม
description: เรียนรู้วิธีมีส่วนร่วมในพัฒนา Design System Next
outline: deep
---

# การมีส่วนร่วม

ยินดีต้อนรับ! เรายินดีรับการมีส่วนร่วมจากทุกคนในการพัฒนา Design System Next ไม่ว่าคุณจะเป็นนักพัฒนา ผู้ใช้ หรือผู้สนใจ คู่มือนี้จะช่วยให้คุณเริ่มต้นได้อย่างถูกต้อง

## รหัสการดำเนินการ

เราปฏิบัติตาม [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/0/code_of_conduct/) ในทุกการโต้ตอบ โปรดอ่านและปฏิบัติตามเพื่อให้แน่ใจว่าชุมชนของเรายังคงเป็นสถานที่ที่ดีสำหรับทุกคน

## วิธีการมีส่วนร่วม

### การรายงานปัญหา (Issues)

หากคุณพบปัญหา ข้อผิดพลาด หรือมีไอเดียสำหรับการปรับปรุง:

1. ตรวจสอบ [Issues ที่มีอยู่](https://github.com/your-org/design-system-next/issues) เพื่อดูว่ามีการรายงานแล้วหรือไม่
2. หากยังไม่มี สร้าง Issue ใหม่พร้อมรายละเอียด:
   - คำอธิบายปัญหาที่ชัดเจน
   - ขั้นตอนในการทำซ้ำ (ถ้ามี)
   - สภาพแวดล้อม (OS, browser, Node version)
   - ตัวอย่างโค้ดหรือภาพหน้าจอ

### การส่ง Pull Request

เรายินดีรับ Pull Request สำหรับ:

- แก้ไขข้อผิดพลาด
- เพิ่มฟีเจอร์ใหม่
- ปรับปรุงเอกสารประกอบ
- เพิ่มการทดสอบ

#### ขั้นตอนการส่ง PR:

1. **Fork และ Clone** โปรเจกต์
2. **สร้าง Branch ใหม่** สำหรับการทำงานของคุณ:
   ```bash
   git checkout -b feature/your-feature-name
   # หรือ
   git checkout -b fix/issue-number-description
   ```
3. **ทำการเปลี่ยนแปลง** และตรวจสอบให้แน่ใจว่า:
   - โค้ดของคุณทำงานได้
   - มีการทดสอบที่ครอบคลุม
   - เอกสารประกอบได้รับการอัปเดต
   - ปฏิบัติตามแนวทางการเขียนโค้ด
4. **รันการทดสอบ** เพื่อให้แน่ใจว่าทุกอย่างทำงานได้:
   ```bash
   npm run test
   npm run test:ct
   npm run lint
   ```
5. **Commit การเปลี่ยนแปลง** ด้วยข้อความที่ชัดเจน:

   ```bash
   git commit -m "feat: add new button variant

   - Add outline variant to Button component
   - Update documentation
   - Add tests for new variant"
   ```

6. **Push และ สร้าง Pull Request**:
   - Push branch ของคุณไปยัง fork
   - สร้าง Pull Request จาก branch ของคุณไปยัง main branch
   - กรอกรายละเอียด PR ที่ครอบคลุม

## แนวทางการพัฒนา

### การตั้งค่าสภาพแวดล้อมการพัฒนา

1. **ติดตั้ง Dependencies**:

   ```bash
   npm install
   ```

2. **รัน Development Server**:

   ```bash
   npm run dev
   ```

3. **รัน Storybook** สำหรับการพัฒนาคอมโพเนนต์:
   ```bash
   npm run storybook
   ```

### แนวทางการเขียนโค้ด

เราปฏิบัติตามแนวทางเหล่านี้เพื่อให้แน่ใจว่าโค้ดมีคุณภาพและสอดคล้องกัน:

#### TypeScript

- ใช้ TypeScript สำหรับโค้ดทั้งหมด
- กำหนดประเภทที่ชัดเจนสำหรับ props, events, และ return types
- หลีกเลี่ยงการใช้ `any` ยกเว้นในกรณีที่จำเป็นจริงๆ

#### Vue 3 Composition API

- ใช้ Composition API สำหรับคอมโพเนนต์ใหม่ทั้งหมด
- จัดระเบียบโค้ดด้วย `<script setup>`
- ใช้ `ref`, `computed`, `watch` อย่างเหมาะสม

#### การตั้งชื่อ

- **คอมโพเนนต์**: ใช้ PascalCase (เช่น `Button`, `InputField`)
- **Props**: ใช้ camelCase (เช่น `backgroundColor`, `isDisabled`)
- **Events**: ใช้ kebab-case (เช่น `value-change`, `item-select`)
- **เมธอด**: ใช้ camelCase (เช่น `handleClick`, `formatValue`)

#### สไตล์ CSS

- ใช้ Tailwind CSS สำหรับสไตล์
- ปฏิบัติตาม design tokens ที่กำหนดไว้
- ใช้ responsive utilities อย่างเหมาะสม

### การทดสอบ

- เขียนการทดสอบสำหรับทุกฟีเจอร์ใหม่
- ทดสอบทั้ง unit tests และ component tests
- ทดสอบ accessibility และ edge cases
- ตรวจสอบ coverage อย่างน้อย 80%

### เอกสารประกอบ

- อัปเดตเอกสารประกอบสำหรับทุกการเปลี่ยนแปลง API
- รวมตัวอย่างการใช้งาน
- อธิบาย props, events, และ slots อย่างชัดเจน

## แนวทางการ Commit

เราใช้ [Conventional Commits](https://conventionalcommits.org/) สำหรับข้อความ commit:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### ประเภทของ Commit

- **feat**: ฟีเจอร์ใหม่
- **fix**: แก้ไขข้อผิดพลาด
- **docs**: เปลี่ยนแปลงเอกสารประกอบ
- **style**: เปลี่ยนแปลงสไตล์ (ไม่ใช่ logic)
- **refactor**: รีแฟคเตอร์โค้ด
- **test**: เพิ่มหรือแก้ไขการทดสอบ
- **chore**: เปลี่ยนแปลงอื่นๆ (build, dependencies, etc.)

### ตัวอย่าง

```bash
git commit -m "feat(button): add loading state

Add loading prop and spinner to Button component
Update tests and documentation"
```

```bash
git commit -m "fix(input): handle empty values correctly

Fix issue where empty string values were not handled properly
Add test case for empty values"
```

## การตรวจสอบโค้ด (Code Review)

ทุก Pull Request จะได้รับการตรวจสอบโดย maintainer อย่างน้อยหนึ่งคน:

### เกณฑ์การตรวจสอบ

- **ฟังก์ชัน**: โค้ดทำงานได้ตามที่ระบุ
- **คุณภาพ**: ปฏิบัติตามแนวทางการเขียนโค้ด
- **การทดสอบ**: มีการทดสอบที่เพียงพอ
- **เอกสารประกอบ**: อัปเดตเอกสารประกอบแล้ว
- **ประสิทธิภาพ**: ไม่มีปัญหาด้านประสิทธิภาพที่ชัดเจน

### กระบวนการ Review

1. **Automated Checks**: CI จะรันการทดสอบและ linting อัตโนมัติ
2. **Manual Review**: Maintainer จะตรวจสอบโค้ดและให้ feedback
3. **Discussion**: ถกเถียงและแก้ไขปัญหาที่พบ
4. **Approval**: เมื่อทุกอย่างเรียบร้อย PR จะได้รับการอนุมัติและ merge

## การเผยแพร่

### Semantic Versioning

เราใช้ [Semantic Versioning](https://semver.org/):

- **MAJOR**: เปลี่ยนแปลงที่ไม่เข้ากันได้
- **MINOR**: ฟีเจอร์ใหม่ที่เข้ากันได้
- **PATCH**: แก้ไขข้อผิดพลาดที่เข้ากันได้

### กระบวนการเผยแพร่

1. **Version Bump**: อัปเดต version ใน `package.json`
2. **Changelog**: อัปเดตไฟล์ CHANGELOG.md
3. **Tag**: สร้าง git tag
4. **Publish**: เผยแพร่ไปยัง npm

## ชุมชนและการสนับสนุน

### ช่องทางการติดต่อ

- **GitHub Issues**: สำหรับปัญหาและฟีเจอร์ requests
- **GitHub Discussions**: สำหรับคำถามทั่วไปและการสนทนา
- **Discord**: สำหรับการสนทนาแบบเรียลไทม์

### การขอความช่วยเหลือ

หากคุณต้องการความช่วยเหลือ:

1. ตรวจสอบเอกสารประกอบก่อน
2. ค้นหาใน Issues ที่มีอยู่
3. ถามใน Discussions หรือ Discord
4. สร้าง Issue ใหม่หากจำเป็น

### การเป็น Contributor

เรามีโปรแกรมสำหรับ contributor ที่มีส่วนร่วมเป็นประจำ:

- **Contributor**: ส่ง PR ที่ได้รับการ merge อย่างน้อย 1 ครั้ง
- **Regular Contributor**: ส่ง PR ที่มีคุณภาพอย่างสม่ำเสมอ
- **Maintainer**: จัดการโปรเจกต์และตัดสินใจทางเทคนิค

## แหล่งข้อมูลเพิ่มเติม

- [Vue.js Contributing Guide](https://vuejs.org/guide/contributing/overview.html)
- [TypeScript Contributing](https://github.com/microsoft/TypeScript/blob/main/CONTRIBUTING.md)
- [Open Source Guides](https://opensource.guide/)

ขอบคุณที่สนใจมีส่วนร่วมในการพัฒนา Design System Next! การมีส่วนร่วมของคุณช่วยให้ระบบดีขึ้นสำหรับทุกคน 🎉
