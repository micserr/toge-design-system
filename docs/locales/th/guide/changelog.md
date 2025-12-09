# บันทึกการเปลี่ยนแปลง

## 2.26.2 (2025-12-9)

- แก้ไข:
  - นำการรองรับ display helper แบบกำหนดเองมาใช้สำหรับอินพุตที่ยังไม่ได้นำมาใช้ (Currency, Dropdown, Search)
  - แก้ไขข้อผิดพลาด lint ในตาราง
  - อัปเดตเอกสารประกอบ Input Currency
  - แก้ไขปัญหา Input Currency ที่พบ
  - เพิ่มการรองรับการได้รับค่าสกุลเงิน (ตัวเลขไม่มีรูปแบบ)
  - เพิ่มการรองรับค่าพื้นฐาน

## 2.26.1 (2025-12-2)

- แก้ไข:
  - แก้ไข datepicker - ค่า model value ไม่ได้อัปเดตเมื่อผู้ใช้พิมพ์เฉพาะวันที่เท่านั้น
  - แก้ไข date calendar - สไตล์สีของวันที่ที่ไม่ได้เลือก
  - ปรับปรุงพฤติกรรมคีย์การค้นหาของ select และ multi-select
  - แก้ไข date picker, date range picker, date calendar picker และ month-year picker getYearList emit
    ([#36210](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/36210) โดย @jarias)

## 2.26.0 (2025-12-2)

- คุณสมบัติ:
  - เพิ่มคอมโพเนนต์ Month Year Picker (ตัวเลือกเดือน-ปี)
    ([#f4274d0c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f4274d0c5fa313ba88028036f4c76f1d3a6757c2?refName=refs%2Fheads%2F2025%2FFEATURE%2FBEN%2Fmonth-year-picker) โดย @bsolis)

## 2.25.1 (2025-12-2)

- คุณสมบัติ:
  - subtitle prop และ slot และ is-loading prop ในคอมโพเนนต์ Sidepanel
  - allow-deselect prop ในคอมโพเนนต์ list
- แก้ไข:
  - เอกสาร stacking sidepanel
  - ปัญหาการส่งต่อ event ของ table header dropdown
    ([#ecf1589f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ecf1589fd1c93db2a8c8b47b749968eafad28d31?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fupdates) โดย @despiritu)

## 2.25.0 (2025-11-26)

- chore: อัปเดตการกำหนดค่า Playwright และรวม Tailwind CSS
- แก้ไข: การทดสอบที่ล้มเหลวเนื่องจากขาด Tailwind CSS ในสภาพแวดล้อม Playwright
  ([#36134](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/36134) โดย @jmari)

## 2.24.2 (2025-11-26)

- คุณสมบัติ:
  - คอมโพเนนต์ย่อยใหม่ของตารางสำหรับตัวกรองส่วนหัวตาราง
  - การปรับปรุง Dropdown และ Table เพื่อให้เหมาะกับข้อกำหนดการทำงานสำหรับ dropdown ตัวกรองส่วนหัวตาราง  
    ([#ce3572da](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ce3572da1dc3a1b7a0549055df91fa2f065d418d?refName=refs%2Fheads%2F2025%2Ffeat%2FPaulo%2FTableHeaderFilterDropdown) โดย @jbanares)

## 2.24.1 (2025-11-26)

- แก้ไข:
  - แก้ไขเลย์เอาต์การแบ่งหน้าตารางโดยไม่มี actions slot
    ([#19965264](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/199652649e805afd26577a3602a6777d3f1d9fc1?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fpagination-update) โดย @despiritu)

## 2.24.0 (2025-11-25)

- คุณสมบัติ:
  - เพิ่ม footerNoTopBorder prop สำหรับคอมโพเนนต์ sidepanel
  - เพิ่ม showNumberOfRowsDropdown prop สำหรับคอมโพเนนต์ table pagination  
    ([#23889453](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/23889453bf7176d8671f7507ef1b519c3d505e49?refName=refs/heads/2025/feat/dustin/pagination-update) โดย @despiritu)

## 2.23.1 (2025-11-25)

- แก้ไข:
  - แก้ไขคอมโพเนนต์ DatePicker โดยให้ `getInputValue` event ส่ง `null` เมื่อการป้อนวันที่ไม่สมบูรณ์
  - ส่ง `null` เมื่อฟิลด์ที่จำเป็นใดๆ (เดือน, วันที่, ปี) ว่างเปล่า
  - ส่ง `null` เมื่อฟิลด์ปีมีตัวเลขน้อยกว่า 4 หลัก (ปีไม่สมบูรณ์)
  - เพิ่มการรองรับ `@blur` event ที่ส่งออกเฉพาะเมื่อคลิกนอกคอมโพเนนต์
  - การแท็บระหว่างช่องอินพุตจะไม่ส่งออก blur event อีกต่อไป
  - Popper จะปิดโดยอัตโนมัติเมื่อคลิกนอกคอมโพเนนต์ (auto-hide เปิดใช้งาน)
  - อัปเดตเอกสาร API เพื่อแยก Props และ Events sections ในท้องถิ่น English และ Thai
  - แก้ไขข้อผิดพลาดการสร้าง: ลบการประกาศฟังก์ชัน `emitPartialInputValue` ที่ซ้ำกัน
  - ส่งค่าวันที่บางส่วนพร้อมศูนย์สำหรับฟิลด์ว่างขณะที่ผู้ใช้พิมพ์ (เช่น "12-0-0" → "12-0-1997" → "12-12-1997")
    ([#36142](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/36142) โดย @jarias)

## 2.23.0 (2025-11-120)

- คุณสมบัติ:
  - สร้างคอมโพเนนต์ Radio Grouped พร้อมการผูก v-model และการสนับสนุนอาร์เรย์ตัวเลือก
  - เพิ่มการรองรับ Display Helper แบบกำหนดเองสำหรับคอมโพเนนต์ Input Contact Number
  - ลบการทดสอบ e2e
    ([#35957](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/36031) โดย @jarias)

## 2.22.3 (2025-11-19)

- แก้ไข:
  - เพิ่มการรองรับ Display Helper สำหรับ Radio Component
  - อัปเดตเอกสารประกอบสำหรับ Radio Component
    ([#35957](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/36031) โดย @jarias)

## 2.22.2 (2025-11-19)

- แก้ไข:
  - แก้ไขปัญหาการแปลเอกสารเมื่อสลับไปยังภาษาต่างๆ
  - เพิ่มการรองรับ Label Placement และ Supporting Label Text สำหรับ Progress Component
  - อัปเดตเอกสารประกอบสำหรับ Progress Component
  - เพิ่มการรองรับ List Item Radio Button
  - เพิ่มการรองรับ List Item Icon Fill และ Tone
  - อัปเดตเอกสารประกอบสำหรับ List Component
    ([#35957](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35957) โดย @jarias)

## 2.22.1 (2025-11-18)

- แก้ไข:
  - ลบ pointer events สำหรับ sidepanel ที่ไม่ได้ active ใน stacked sidepanel
    ([499caa80](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/499caa8085900218792e4c5272c45e8f8f3803cb?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fexpandable-sidepanel) โดย @despiritu)

## 2.22.0 (2025-11-12)

- คุณสมบัติ:
  - Expandable Sidepanel
    ([#6fda6de6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6fda6de6ddb18216e6337181c75a965694da2c37?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fexpandable-sidepanel) โดย @despiritu)

## 2.21.10 (2025-11-07)

- แก้ไข:
  - แก้ไขการปรับใช้แพ็กเกจไปยัง Azure Artifacts
    ([#2025/feature/arias/ds-updates](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/branches?baseVersion=GC2025/feature/arias/ds-updates) โดย @jarias)

## 2.21.9 (2025-11-09)

- แก้ไข:
  - แก้ไขการจัดระเบียบโลเคลของเอกสาร
    ([#35872](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35872) โดย @jarias)

## 2.21.8 (2025-11-06)

- แก้ไข:
  - Commit a76279c6: เพิ่มผู้ให้บริการการค้นหาในเครื่องไปยังการกำหนดค่าชุดรูปแบบและลบการตั้งค่าการค้นหาที่ซ้ำซ้อนจากเอกสาร
    ([#a76279c6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a76279c6f10e828c3497218d6d60769862aae231?refName=refs/heads/2025/Fix/andrea/missing-search-field) โดย @adestajo)

## 2.21.7 (2025-11-04)

- แก้ไข:
  - Commit e7d0fd5f: เพิ่มการกำหนดค่า VitePress และลบเอกสารประกอบส่วนประกอบภาษาไทย
    ([#e7d0fd5f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e7d0fd5ffd26fd0bec8d1c6cf1ca16ef92c0ace1?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2Fprod-dev-tool-error) โดย @adestajo)

## 2.21.6 (2025-11-04)

- แก้ไข:
  - พบลิงก์ที่ตายแล้วในเอกสาร
    ([#134c42c8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/134c42c8feaa95a4a2ebdd4a9c83ba676ecf4169?refName=refs/heads/2025/Fix/andrea/dead-link-in-docu) โดย @adestajo)

## 2.21.5 (2025-11-04)

- คุณสมบัติ:
  - รองรับภาษาไทย
    ([#35698](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e26f2090b74871a0addd8a4f79c2bd59da0810d0?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Fsupport-multi-language) by @adestajo)

## 2.21.3 (2025-10-30)

- แก้ไข:
  - แก้ไขการตัดคำสำหรับ tooltip และ Fileupload
    ([#35698](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35698) โดย @jarias)

## 2.21.2 (2025-10-29)

- แก้ไข:
  - แก้ไขสถานะว่างสำหรับรายการที่ถูกจัดกลุ่ม
  - แก้ไขตัวแสดงการโหลดของ Select สำหรับรายการที่ถูกจัดกลุ่ม
  - ปรับปรุงประสิทธิภาพการทำงานของ Select Component
    ([#35668](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35668) โดย @jarias)

## 2.21.1 (2025-10-29)

- คุณสมบัติ:
  - เพิ่มสถานะการโหลดให้กับ sidenav component และเพิ่ม sidenav loader
    ([#c474a9fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c474a9fef7aa67e8894bd432b60a6f500b02e2d1?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Floader-sidenav) โดย @destajo)
    ([#c474a9fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c474a9fef7aa67e8894bd432b60a6f500b02e2d1?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Floader-sidenav) โดย @destajo)

## 2.21.0 (2025-10-28)

- คุณสมบัติ:
  - เพิ่มการส่งออก component แต่ละตัวและประเภทเพื่อปรับปรุงการใช้งาน
  - เปิดใช้งานการนำเข้าที่ tree-shakable สำหรับการเพิ่มประสิทธิภาพ bundle ที่ดีขึ้น
  - อัปเดตคำจำกัดความประเภทใน package.json และเปิดใช้งาน rollup types ใน vite.config.ts
- เอกสาร:
  - ปรับปรุงคู่มือเริ่มต้นอย่างรวดเร็วด้วยตัวเลือกการใช้งานและการนำเข้าที่ tree-shakable
  - อัปเดตหลักเกณฑ์การสร้าง component ด้วยตัวอย่างการส่งออก
    ([#35662](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35662) โดย @jmari)

## 2.20.6 (2025-10-27)

- แก้ไข:
  - ปรับปรุงเอกสาร File Upload ด้วยคุณสมบัติการตรวจสอบอัตโนมัติ
    ([#95c2338d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35637) โดย @bsolis)

## 2.20.5 (2025-10-27)

- แก้ไข:
  - อัปเดต File Upload แสดงตัวบ่งชี้ความคืบหน้า
  - เพิ่มการรองรับ infinite scroll loader ให้กับ Select และ Multi Select
    ([#35627](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35627) โดย @jarias)

## 2.20.4 (2025-10-27)

- แก้ไข:
  - เพิ่ม Loader สำหรับ Input และ Options ใน Select, Multi-Select และ Ladderized Select
    - เพิ่ม Max Width ให้กับ Lozenge
    - อัปเดตเอกสาร List
    - ปรับปรุงประสิทธิภาพโค้ดของ List Component
    - แก้ไขการทดสอบ Calendar Component
    - อัปเดตไฟล์ Git Ignore
      ([#35623](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35623) โดย @jarias)

## 2.20.3 (2025-10-24)

- แก้ไข:
  - แก้ไขการย้อนกลับไปใช้ package เดิมใน playground
  - อัปเดต Node เป็นเวอร์ชัน 22 ใน Azure Static Web Apps workflows
    ([#35621](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35621) โดย @jmari)

## 2.20.2 (2025-10-24)

- แก้ไข:
  - แก้ไขเส้นทางการนำเข้า package version ของ Design System Next ใน playground
  - อัปเดตเวอร์ชัน package ทั้งหมดใน playground ยกเว้น Vite
    ([#35619](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35619) โดย @jmari)
    ([#35619](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35619) โดย @jmari)

## 2.20.1 (2025-10-24)

- คุณสมบัติ: ปรับปรุง File Upload และ Progress Bar Components
  - **File Upload Component**:
    - เพิ่มการรองรับตัวบ่งชี้ความคืบหน้าโดยใช้ `show-progress` และ `progress-value` props
    - แนะนำการควบคุมตัวอย่างไอคอนไฟล์โดยใช้ `hide-file-preview-icon` prop
    - ปรับปรุงประสบการณ์ผู้ใช้ด้วยข้อเสนอแนะความคืบหน้าทางภาพ
  - **Progress Bar Component**:
    - เพิ่มการรองรับตัวแปรสี: `success`, `danger`, `warning`, `info`, `neutral`
    - ใช้การตรวจสอบสีที่แข็งแกร่งพร้อม fallback เป็นสี success
    - ปรับปรุงการเข้าถึงด้วย ARIA attributes ที่เหมาะสม (`aria-valuenow`, `aria-valuemin`, `aria-valuemax`)
    - เพิ่มเอกสารที่ครอบคลุมพร้อมตัวอย่างสดและแนวทางปฏิบัติที่ดีที่สุด
    - ปรับปรุงความน่าเชื่อถือของ component ด้วยการจัดการข้อผิดพลาดที่ดีขึ้น
  - **เอกสาร & การทดสอบ**:
    - อัปเดตเอกสาร component พร้อมตัวอย่างแบบโต้ตอบ
    - เพิ่มการทดสอบ Playwright ที่ครอบคลุมสำหรับคุณสมบัติใหม่
    - รวมหลักเกณฑ์การเข้าถึงและแนวทางปฏิบัติที่ดีที่สุดในการใช้งาน
    - ปรับปรุง API reference ด้วยคำอธิบาย prop ที่ละเอียด
      ([#ceeb3ff4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ceeb3ff4afa776d3086091631e54f39614327323?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2FFile-Upload-Progress-Bar) โดย @bsolis)

## 2.20.0 (2025-10-23)

- คุณสมบัติ: เพิ่ม Component Testing ด้วย Playwright
  ([#35580](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35580) โดย @jmari)

## 2.19.5 (2025-10-23)

- แก้ไข:
  - Dropdown DQA
    ([#35583](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35583?_a=files) โดย @jarias)

## 2.19.4 (2025-10-23)

- แก้ไข:
  - แก้ไขปัญหาที่พบใน local search list rendering reactiveness เมื่อถูกปิดใช้งาน
  - เพิ่มการรองรับ multi-select persistent display text
  - เพิ่มการรองรับ multi-select display selected list item
  - เพิ่มการรองรับ multi-select get-selected-items emit
  - เพิ่มการรองรับ multi-select get-single-selected-item emit
    ([#35548](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35548?_a=files) โดย @jarias)

## 2.19.3 (2025-10-23)

- คุณสมบัติ: เพิ่มการรองรับ input ที่เขียนได้ใน Ladderized Select components
  ([#e7a5b4f9](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e7a5b4f94261d868fbe61baf2e62b83adcb8dd6d?refName=refs/heads/2025/feat/Paulo/UpdatedLadderizedListAndSelectToEnableWritableInput) โดย @jbanares)

## 2.19.2 (2025-10-22)

- แก้ไข: เปลี่ยนชื่อ Reusable Calendar เป็น Date Calendar Picker และอัปเดตเอกสารที่เกี่ยวข้อง
  ([#0fbc00b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0fbc00bd86882480a3fc0761d55d8807458be5f8?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2Fdate-calendar-picker-rename) โดย @bsolis)

## 2.19.1 (2025-10-22)

- แก้ไข: ปรับปรุงเอกสาร Chips component ด้วยตัวอย่างการปรับแต่ง slot
  ([#958ee225](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/958ee225604fe7abf7f6a2be98e9fc0c0ff7eed3?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2FChips-slot) โดย @bsolis)

## 2.19.0 (2025-10-22)

- คุณสมบัติ:
  - เพิ่ม Audit Trail component
    ([#a365b231](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a365b231ef28e34dd96bd4522b3dd4894f416799?refName=refs/heads/2025/feat/dustin/audit-trail) โดย @despiritu)

## 2.18.0 (2025-10-21)

- คุณสมบัติ:
  - อัปเดต design tokens ด้วยระบบสีที่ปรับปรุงและ semantic color tokens ที่ได้รับการปรับปรุง
  - ปรับปรุง lozenge component ด้วยการใช้งาน design token ที่สอดคล้องกันและปรับปรุง hover/active states
  - เพิ่มตัวแปรสีพื้นหลังใหม่สำหรับการจัดการสถานะ component ที่ดีขึ้น
  - ปรับปรุงลำดับชั้นสีข้อความและความคมชัดของคอนทราสต์การเข้าถึง
  - เพิ่มตัวแปร hover และ pressed state ที่ครอบคลุมสำหรับทุกประเภทสี
  - Refactor lozenge component เพื่อใช้ semantic design tokens แทนค่าที่กำหนดเอง
  - ปรับปรุงความสามารถในการบำรุงรักษาและความสอดคล้องของ design system
    ([#8f6a6951](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/8f6a6951d6de86574d20a829924c85ee9490e072?refName=refs/heads/2025/FEATURE/MICS/DESIGN_TOKENS_LOZENGE_UPDATE&_a=diffparent2) โดย @MICS)

## 2.17.8 (2025-10-21)

- แก้ไข
  - Banner DQA fixes
    ([#35499](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35499?_a=files โดย @jarias)

## 2.17.7 (2025-10-21)

- แก้ไข
  - Banner DQA fixes
  - เพิ่มการรองรับ display selected count only ใน multi select
    ([#35434](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35434?_a=files โดย @jarias)

## 2.17.6 (2025-10-20)

- แก้ไข
  - อัปเดต Select, Multi-Select และ Ladderized Select Documentation
- อัปเดต Lozenge Documentation
- เพิ่มการรองรับ select & multi select item lozenge
- เพิ่มการรองรับ select & multi select item icon
- แก้ไข Ladderized Active State
  ([#35434](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35434?_a=files โดย @jarias)

## 2.17.5 (2025-10-16)

- แก้ไข
  - เพิ่ม 'neutral' variant และอัปเดตเอกสาร badge ([#35400](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35400?_a=files โดย @jarias)

## 2.17.4 (2025-10-16)

- แก้ไข
  - เพิ่ม selected filter count prop ใน attribute filter component ([#dc519830](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dc519830dd8d969d1151db0f6a2dea8ff51ab46b?refName=refs/heads/2025/feat/dustin/attribute-filter โดย @despiritu)
  - กลับไปที่ calendar tab หลังจากเลือกเดือนหรือปีใน reusable calendar full mode ([#dd1414b0](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dd1414b0fe32048f714144d7bbb54d9b2dbcd84a?refName=refs/heads/2025/feat/dustin/attribute-filter @despiritu)

## 2.17.3 (2025-10-16)

- แก้ไข
  - คุณสมบัติ
    - Commit fcfd1580: แก้ไขแท็กปิดที่ขาดหาย
      ([#fcfd1580](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/fcfd1580bd6cd025606fba3c4b620fb48108b4e6?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FMISSING_END_TAG) โดย @adestajo)

## 2.17.2 (2025-10-15)

- แก้ไข
  - Commit f8bf1244: ตั้งค่า tone เริ่มต้นเป็น 'plain' และอัปเดต background class สำหรับการจัดรูปแบบ tone
    ([#f8bf1244](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f8bf12448c63ead7d2249c2b544fe764a2a243c7?refName=refs/heads/2025/Fix/andrea/CARD_TONE_DEFAULT) โดย @adestajo)

## 2.17.1 (2025-10-15)

- คุณสมบัติ
  - ปฏิทิน: สร้าง slot ที่กำหนดเองสำหรับฟังก์ชันการคัดลอกเซลล์ปฏิทิน
    - popper และ icon component
      ([#35360](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35360?_a=commits) โดย @adestajo)

## 2.17.0 (2025-10-15)

- คุณสมบัติ
  - เพิ่ม Reusable Calendar
  - อัปเดตเอกสารตามหลักเกณฑ์เอกสาร component
    ([#e41b78e7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35353))

## 2.16.3 (2025-10-15)

- แก้ไข
  - อัปเดต Title และ Descriptions ของเอกสาร
  - เพิ่มการรองรับ popper inside popper approach
  - เอกสารกลยุทธ์ Popper (Select, Multi Select, Ladderized Select, Date Picker, Date Range Picker)
    ([#35348](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35348?_a=files @jarias)

## 2.16.2 (2025-10-14)

- แก้ไข
  - เพิ่ม Custom Popper Content สำหรับ Dropdown & อัปเดต Dropdown Docs
    ([#35325](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35325?_a=files @jarias)

## 2.16.1 (2025-10-09)

- แก้ไข
  - แก้ไข:
    - แก้ไขปุ่มล้างข้อมูลของ select ในสถานะปิดการใช้งาน
    - แก้ไขเงาของ popper ใน select และ dropdown
      ([#35239](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35239?_a=files) โดย @jarias)

## 2.16.0 (2025-10-09)

- คุณสมบัติ
  - เพิ่ม attribute filter component
    ([#480fbbe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/480fbbeeba98c81b5c172c69ecbbdc0235c9725f?refName=refs/heads/2025/feat/dustin/attribute-filter) โดย @despiritu)

## 2.15.7 (2025-10-06)

- แก้ไข
  - แก้ไข Sidenav Redirect with params
    ([#35132](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35132?_a=files) โดย @jarias)

## 2.15.6 (2025-10-02)

- แก้ไข
  - แก้ไข sidenav attribute parsing
    ([#987d6d68](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/35048?_a=files) โดย @jarias)

## 2.15.5 (2025-10-01)

- แก้ไข
  - แก้ไขปัญหาที่พบใน select popper with custom id
    ([#a78646b0](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a78646b0a0ab23ad6879fe1f84099027c7de6854?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.15.4 (2025-10-01)

- คุณสมบัติ
  - Commit 51c2e2b0: feat: เพิ่ม handleClear method ให้กับ select และ multi-select components documentation
    ([#51c2e2b0](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequestcreate?sourceRef=2025/Fix/andrea/SELECT_EXPOSE_CLEAR&targetRef=dev&sourceRepositoryId=ff11dd36-9e5b-4dee-ab48-0999d0a61cfd&targetRepositoryId=ff11dd36-9e5b-4dee-ab48-0999d0a61cfd) โดย @adestajo)

## 2.15.3 (2025-09-30)

- คุณสมบัติ
  - เพิ่ม `retainSelectionOnDataChange prop และ clearSelectedData exposed function ให้กับ table component
    ([#afd9003a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/afd9003ac645a4b63c8895845cfedab0b6ed3e1?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fdraggable-table-rows) โดย @despiritu)

## 2.15.2 (2025-09-29)

- แก้ไข
  - แก้ไข readonly warning สำหรับ table tbody ref
    ([#af1f8afc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/af1f8afc37651735fba3eee622e271c68d4dccf5?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fdraggable-table-rows) โดย @despiritu)

## 2.15.1 (2025-09-29)

- คุณสมบัติ
  - แก้ไขการปิด popper เมื่อค้นหาใน Single & Multi Select
    ([#5c14e4d6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5c14e4d659d1aaf1257250f168fc81d26e4661f7?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.15.0 (2025-09-24)

- คุณสมบัติ
  - เพิ่ม Input สกุลเงิน
  - แยกเอกสารสำหรับประเภท input แต่ละแบบ
  - แก้ไขปัญหาการเปลี่ยนประเทศใน Contact Number Input
  - ทำให้ระยะห่างของ popper เป็นแบบไดนามิก
    ([#34882](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/34882?_a=files) โดย @jarias)

## 2.14.3 (2025-09-19)

- แก้ไข
  - ลบ vuedraggable และแก้ไขปัญหาการ build
    ([#f09ea409](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f09ea409023e37aeecac86b37f6197fd624248e1?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fdraggable-table-rows) โดย @despiritu)

## 2.14.2 (2025-09-19)

- แก้ไข
  - DQA: แก้ไขเงา Popper Box
  - DQA: แก้ไขปัญหาไอคอนข้อความช่วยเหลือเมื่อความกว้างเล็ก
  - แก้ไข Multi-select และ Ladderized ปิด Popper อัตโนมัติ
    ([#e6d27b4d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e6d27b4d04d98e79f3c9b0b62d52a01b42d440fe?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.14.1 (2025-09-18)

- แก้ไข
  - ทำให้ UI ค้นหาใน select, multi-select, ladderized select เป็นแบบ sticky
    - แก้ไข toggle, emit และ custom triggers สำหรับ select, multi-select, ladderized select
    - แก้ไขปัญหาไอคอนใน ladderized select
    - แก้ไขปัญหา multi-layered sublevel ใน ladderized select
    - แก้ไขปัญหา build docs ใน sidenav - เพิ่ม guard สำหรับ SSR เมื่อ location เป็น undefined
    - เพิ่ม emit popper-state สำหรับ dropdown
      ([#34835](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/34835?_a=files) โดย @jarias)

## 2.14.0 (2025-09-17)

- คุณสมบัติ
  - เพิ่มฟีเจอร์ drag and drop ให้กับ table component
    ([#5755a4f6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5755a4f6daa5c74529e6288cd265172ad105d880?refName=refs%2Fheads%2F2025%2Ffeat%2Fdustin%2Fdraggable-table-rows) โดย @despiritu)

## 2.13.6 (2025-09-16)

- แก้ไข
  - DQA fix สำหรับ font family ของ input component
    ([#684972e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/684972efa1e0fa1208cc782ee82aa2aa028aa18e?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FDQA_InputFieldFont) โดย @jbanares)

## 2.13.5 (2025-09-16)

- แก้ไข
  - DQA fixes สำหรับ Table Pagination และ Dropdown
    ([#57399f81](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/57399f8190887ed3255c822a4c606a74d3c44e55?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FDQA_TablePagination_%26_Dropdown) โดย @jbanares)

## 2.13.4 (2025-09-15)

- แก้ไข
  - Sidenav header ปิดเมนูเมื่อ hover และแก้ไขปัญหาเส้นทางเอกสาร select
    ([#12332ae8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/12332ae8c6815cc6c15fe7b0b5c17a1c04f9bc1c?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.13.3 (2025-09-10)

- Enhancement
  - เพิ่ม xxl size สำหรับ modal component
    ([#cf599bee](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/34695?_a=files) โดย @bsolis)

## 2.13.2 (2025-09-09)

- แก้ไข
  - ลบ Table Pagination และ Snack ออกจากรายการ exclude ใน DS Export
    ([#31a0cd14](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/31a0cd1485def965d4ed7343cbbfa5ef2c1157fc?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FRemovedTablePaginationAndSnackFromDSExportExclude) โดย @jbanares)

## 2.13.1 (2025-09-09)

- การปรับปรุง
  - เอกสาร Table Component: เพิ่มคู่มือการกำหนดความกว้างของคอลัมน์อย่างละเอียด
    - เพิ่มรายละเอียด property `width` ในตาราง Header Object Properties
    - สร้างส่วน "การกำหนดความกว้างคอลัมน์" พร้อมตัวอย่างการใช้งานจริง
    - จัดทำแนวทางปฏิบัติที่ดีที่สุดสำหรับการกำหนดความกว้างแบบ fixed pixel, เปอร์เซ็นต์ และแบบผสม
    - รวมคำแนะนำสำหรับการพิจารณาความกว้างแบบ dynamic และข้อจำกัดของ Tailwind CSS
    - เพิ่มตัวอย่างการกำหนดความกว้างคอลัมน์ที่ตอบสนองโดยใช้ CSS functions
      ([#b766ba9e] https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b766ba9e3f0c867f463b5c9059c14d4dc28361b9?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2Ftable-width โดย @bsolis)

## 2.13.0 (2025-09-05)

- คุณสมบัติ
  - การเริ่มต้นใช้งาน Playwright พร้อมการทดสอบ Contrast และการทดสอบ e2e ของ Component
    ([#34516](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/34516?_a=files) โดย @jarias)

## 2.12.17 (2025-09-04)

- แก้ไข
  - Commit f505f953:
    - อัปเดตการจัดการ URL ใน getPathFromUrl
    - set isAbsoluteURL เป็น true สำหรับ redirects
      ([#f505f953](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f505f953a93134ab72a33ee76fa83bdbe8438b3a?refName=refs/heads/2025/Fix/andrea/SIDENAV-REDIRECT) โดย @adestajo)

## 2.12.16 (2025-09-04)

- แก้ไข
  - เพิ่ม event emission สำหรับการรับ option ที่เลือกใน select component
    ([#40c51c17](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/40c51c1780b508ffbc2122ddcd7bfccb4f5b3713?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fselect-get-object) โดย @jarias)

## 2.12.15 (2025-09-03)

- แก้ไข
  - Sidenav Redirect Click Issue และ Active Nav
    ([#a0d4fe5d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a0d4fe5df01a683f0e1625b2707e05c6e248a91a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ffix-sidenav-issues) โดย @jarias)

## 2.12.14 (2025-09-03)

- แก้ไข
  - Commit 157cc0c7: feat: ปรับปรุง sidenav และ table components ด้วย reactivity ที่ดีขึ้นและการจัดรูปแบบ
    ([#157cc0c7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/157cc0c7d9571c275b423abfd995a22cb8b2b41a?refName=refs/heads/2025/Fix/andrea/FIX_TABLE_HEADER_AND_SIDENAV) โดย @adestajo)

## 2.12.13 (2025-08-29)

- Enhancement
  - Editable current table page
    ([#8e07c647](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/8e07c6476ca1fce15d1bb5ddcd0733ec3d75f028?refName=refs%2Fheads%2F2025%2FEnhancement%2FPaulo%2FEditableCurrentTablePage) โดย @jbanares)

## 2.12.12 (2025-08-29)

- แก้ไข
  - Sidenav Update
    ([#130644ef](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/130644ef629ee990db378bcb3483ad9dccf70f57?refName=refs%2Fheads%2F2025%2FFIX%2FJef%2FCHANGE-ATTRIBUTE-HANDLING) โดย @jarias)

## 2.12.11 (2025-08-26)

- แก้ไข
  - DQA สำหรับ Bordered Checkbox และ Textarea
    ([#96521980](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/965219807d8b57a026ee4c3e1f3c670006e2b245?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.12.10 (2025-08-26)

- แก้ไข
  - เพิ่ม emit สำหรับ popper state สำหรับ single select, multi select และ ladderized select
  - single select, multi select และ ladderized select documentation update
  - แก้ไข error state สำหรับ ladderized select
    ([#84a16ec0](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/84a16ec05f378afb0a4db072ebd4b1da994c5dca?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.12.9 (2025-08-26)

- คุณสมบัติ
  - Documentation Cleanup & Update
  - เพิ่ม Supporting Label สำหรับ inputs
  - เพิ่ม custom text separator สำหรับ ladderized select
  - เพิ่มการรองรับ prepend text
    ([#e903765e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/34317?_a=files) โดย @jarias)

## 2.12.8 (2025-08-19)

- คุณสมบัติ
  - อัปเดต behavior สำหรับ dropdown lozenge ([#e903765e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e903765efd892962e2e361605eb3ff895ac99007?refName=refs%2Fheads%2F2025%2FFATURE%2FPaulo%2FLozengeDropdownBehavior) โดย @jbanares)

## 2.12.7 (2025-08-19)

- Refactor
  - แยกไฟล์สำหรับ sidenav menu links เพื่อปรับปรุงโครงสร้างโค้ดและความสามารถในการบำรุงรักษา
  - อัปเดต package exporting component เพื่อรวมการจัดการสำหรับ components ที่ถูก exclude

  ([#838accd6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/838accd69ff38407c2c700504fca133170a579e5?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.12.6 (2025-08-19)

- คุณสมบัติ
  Sidenav Updates:
  - แก้ไข Hide/Show transition
  - ใช้ Avatar component สำหรับ user menu

  Avatar Updates:
  - จัดการ error ของรูปภาพ
  - อัปเดต Documentation

  ([#f77fd063](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f77fd0632d9835eeef10af8c829bf96f2032e1e4?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.12.5 (2025-08-19)

- แก้ไข
  - Multi select checkbox header classes ไม่ได้ใช้อย่างถูกต้อง ([#13fc0f74](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/13fc0f746213d8c453fef5171d1a3ca94a9b1d25?refName=refs/heads/2025/FIX/Xyrk/TABLE_MULTI_SELECT_HEADER_CLASSES) โดย @jfabula)

## 2.12.4 (2025-08-19)

- แก้ไข
  - Commit 39b56f7a: feat: อัปเดต emit types สำหรับ calendar component และปรับปรุง avatar options ([#39b56f7a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/39b56f7ac5e7f20386bc1b2ac3378086f5874831?refName=refs/heads/2025/Fix/andrea/CALENDAR_EMIT) โดย @adestajo)

## 2.12.3 (2025-08-18)

- คุณสมบัติ
  - เพิ่ม tone และ size สำหรับ chips ([#72d10ecc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/72d10ecc32ab43d108e821f370a380a45d59f0e3?refName=refs/heads/2025/FEATURE/Xyrk/CHIPS_SIZE_TONE) โดย @jfabula)

## 2.12.2 (2025-08-18)

- คุณสมบัติ
  - เพิ่ม custom tailwind classes บน header ของ table ([#865a9d6a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/865a9d6abe7ee6f016adc66df1f074aa5d5be07c?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_HEADER_CUSTOM_CSS) โดย @jfabula)

## 2.12.1 (2025-08-18)

- คุณสมบัติ
  - เพิ่ม product usage logos ในเอกสาร File Upload และ Side Navigation
    ([#061c6de](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/061c6def9204731bcbec7cf7069633bc3dd1a4?refName=refs%2Fheads%2F2025%2FDOCS%2FJEF%2FUpdate_Component_Docs) โดย @jmari)

- แก้ไข
  - ปรับปรุงคำอธิบาย prop และ event ในเอกสาร Sidenav เพื่อความชัดเจน
    ([#b02b53a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b02b53a56ec6af4e8e7b559e26ece21d7da6292?refName=refs%2Fheads%2F2025%2FDOCS%2FJEF%2FUpdate_Component_Docs) โดย @jmari)

- เอกสาร
  - ปรับปรุงเอกสารสำหรับ components (ยกเว้น Datepicker และ Select)
    ([#6b15de4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6b15de4c80bf29e70260e8ea15a706bb6601205f?refName=refs%2Fheads%2F2025%2FDOCS%2FJEF%2FUpdate_Component_Docs) โดย @jmari)

## 2.12.0 (2025-08-15)

- คุณสมบัติ
  - เพิ่ม default slot สำหรับ date picker
    ([#7c8b683f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7c8b683f6cb2b6b856a6d0869fe3f25c649a62c5?refName=refs%2Fheads%2F2025%2FFEATURE%2FDUSTIN%2Fdate-picker-slot) โดย @despiritu)

## 2.11.22 (2025-08-14)

- คุณสมบัติ
  - Sidenav: เพิ่มการรองรับข้อมูล API ที่ครอบคลุมด้วย property `isNavApi`
  - Sidenav: ปรับปรุงเอกสารด้วยตัวอย่างโครงสร้างข้อมูล API จริง
  - Sidenav: เพิ่มการรองรับลำดับชั้นการนำทางที่ซับซ้อนจาก API responses
  - Sidenav: ปรับปรุงการจัดการ external URLs และการนำทาง new tab ผ่านข้อมูล API

- แก้ไข
  - Sidenav: แก้ไขปัญหาการ mapping สำหรับ subheading ในโครงสร้างการนำทางและปรับปรุง logic การตรวจสอบ path
  - Sidenav: ปรับปรุง TypeScript type safety สำหรับ navigation items จาก API
  - JSON: อัปเดต side-nav-api.json ให้สอดคล้องกับ strict JSON syntax standards
  - Sidenav: ปรับปรุง type definitions สำหรับ attributes property เพื่อรองรับ dynamic values โดยไม่ใช้ 'any' type
  - Sidenav: ปรับปรุง TypeScript safety สำหรับ navigation item attributes รวมถึง lozenge configuration

- เอกสาร
  - Sidenav: เพิ่มเอกสาร "Using API Data (isNavApi)" ที่ครอบคลุม
  - Sidenav: เพิ่ม "Full Example with API Data" พร้อม demo แบบโต้ตอบ
  - Sidenav: ปรับปรุงเอกสารโครงสร้างข้อมูล API พร้อมคำอธิบาย property
  - Sidenav: เพิ่มตัวอย่างการนำทางจริงสำหรับ enterprise applications
    ([#977f5dfb](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/34150?path=%2Fpackage.json&_a=commits) โดย @bsolis)

## 2.11.21 (2025-08-13)

- คุณสมบัติ
  - เพิ่ม postfix icon และ interactive states ให้กับ lozenge component
    ([#602e2ee](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/602e2ee27efe5872d85867558007b7fad461661b?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FLozengeEnhancement) โดย @jbanares)

## 2.11.20 (2025-08-11)

- แก้ไข
  - ปรับปรุง Tooltip Triggers
    ([#6b7d5cf5](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6b7d5cf56e6b9bc498890127fd7cf5e4f6e11494?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.11.19 (2025-08-11)

- แก้ไข
  - เพิ่ม no padding footer สำหรับ sidepanel
    ([#439b5486](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/439b54860579c5da8266d046ece6467706b8e055?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FAddedNoPaddingFooterForSidepanel) โดย @jbanares)

## 2.11.18 (2025-08-11)

- แก้ไข
  - ปรับ tooltip hiding state, จัดการ focus state
  - อัปเดต Dropdown Documentation
  - เพิ่ม Regions Sidenav, Sidenav Cleanup
    ([#33933](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/33933) โดย @jarias)

## 2.11.17 (2025-08-07)

- แก้ไข
  - Commit c2468d48: feat: เพิ่ม noCheck prop ให้กับ list component และปรับปรุงการ render item ([#c2468d48](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c2468d48dc6e0c0702934e49a8ee5c0004c67e26?refName=refs/heads/2025/Fix/andrea/NOCHECK_LIST) โดย @adestajo)

## 2.11.16 (2025-08-07)

- แก้ไข
  - Date Range Picker อยู่เบื้องหลังเสมอเนื่องจาก container ([#45c12797](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/45c127973b122370793573e121ce405887b9b7b1?refName=refs/heads/2025/FIX/Xyrk/DATE_RANGE_PICKER_CONTAINER) โดย @jfabula)

## 2.11.15 (2025-08-07)

- แก้ไข
  - อัปเดต Ladderized Select Search Function - Global Search, อัปเดต Multi Select Documentation
    ([#33684](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/33684) โดย @jarias)

## 2.11.14 (2025-08-06)

- แก้ไข
  - แก้ไข underline active indicator และอัปเดต active tab value เมื่อ activeTab prop เปลี่ยนแปลง
    ([#79b447b8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/79b447b861d1aaf1257250f168fc81d26e4661f7?refName=refs%2Fheads%2F2025%2Ffix%2Fjames%2Ftab-underlined-active-state) โดย @jmanalang)

## 2.11.13 (2025-08-06)

- คุณสมบัติ
  - Component ใหม่: Date Range Picker ([#9004617e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/9004617eb97ae890adf051fa1cf13f7f32663006?refName=refs/heads/2025/FEATURE/Xyrk/DATE_RANGE_CALENDAR) โดย @jfabula)

## 2.11.12 (2025-08-05)

- แก้ไข
  - Commit d002a1bc: fix: ปรับปรุง logic การเลือก list เพื่อรองรับ items ที่ถูกเก็บรักษาโดยมี local search ที่ถูกปิดใช้งาน
    ([#d002a1bc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d002a1bc209b084b808a6fd1b7b4487026364d9b?refName=refs/heads/2025/Fix/andrea/FIX_MULTI_SELECT) โดย @adestajo)

## 2.11.11 (2025-08-05)

- แก้ไข
  - Commit 17d6496f:Revert to Cell Default Color
    ([#17d6496f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/17d6496fb766391f64a2bd7f0b5bf9649e8a969d?refName=refs/heads/2025/Fix/andrea/CELL_DEF_COLOR) โดย @adestajo)

## 2.11.10 (2025-08-05)

- แก้ไข
  - Sidenav: ปรับปรุงเพิ่มเติมสำหรับ navigation mapping และ path handling
    ([#19308d5f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/19308d5f49aad12fb64ea48d3a0c11510c8264e9?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2FSIDENAV_SUBHEADING) โดย @bsolis)

## 2.11.9 (2025-08-05)

- แก้ไข
  - Datepicker Reactive Issue
    ([#33754](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/33754?path=/src/components/date-picker) โดย @jarias)

## 2.11.8 (2025-08-04)

- แก้ไข
  - Sidenav: แก้ไขปัญหา styling ของ subheading hover state
    ([#df442df7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/df442df7400623886158aeba9a7ffe561323c597?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2FSIDENAV_SUBHEADING) โดย @bsolis)

## 2.11.7 (2025-04-08)

- คุณสมบัติ
  - Commit c85ae134: feat: เพิ่มการรองรับ custom color ให้กับ calendar cell component ([#c85ae134](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c85ae134ff86a0e743bd4f8592310c37b081fd47?refName=refs/heads/2025/Fix/andrea/CELL) @adestajo)

## 2.11.6 (2025-04-08)

- แก้ไข
  - Documentation Build Issues ([#4e6a8ece](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4e6a8eced691a7e2945ce34ba49dce03da789a55?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-fix-button-dropdown) @jarias)

## 2.11.5 (2025-04-08)

- คุณสมบัติ
  - อัปเดต button dropdown และเพิ่ม dropdown inner popper width ([#34e217ad](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/34e217ad62ef051f494adce93d9113063175357e?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-fix-button-dropdown) @jarias)

## 2.11.4 (2025-04-08)

- เอกสาร
  - อัปเดต changelog สำหรับ Skeletal Loader utility addition([#214292f2](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/214292f2147df3473b3a7715e3863ef5cb4a265b?refName=refs%2Fheads%2F2025%2FDOCS%2FANDREA%2FUPDATE_DOCS_MULTI_SELECT) @adestajo)

## 2.11.3 (2025-07-31)

- เอกสาร
  - Commit 2f22358c: feat: เพิ่ม Skeletal Loader utility และอัปเดตเอกสาร([#2f22358c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/2f22358cca982ec687639ad77a05003739c5f4f0?refName=refs/heads/2025/DOCS/ANDREA/UPDATE_DOCS_MULTI_SELECT) @adestajo)

- คุณสมบัติ
  - search Field Supported
    - local
    - API Based Search
      -Infinite Scroll
  - Commit 12bd0978: feat: เพิ่ม infinite scroll และฟังก์ชันการค้นหาให้กับ Multi Select component ([#12bd0978](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/12bd09784691f7178641a10292b3c792360a6bae?refName=refs/heads/2025/feat/andrea/added-search-multi-select) @adestajo)

## 2.11.2 (2025-07-31)

- แก้ไข
  - Error Failed to resolve entry for package design-system-next ([#23bff266](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/23bff266b392882e601c5ed2238be830e377b325?refName=refs/heads/2025/fix/dale/umd-file-creation&path=/package.json) @dale)

## 2.11.1 (2025-07-31)

- แก้ไข
  - Sidenav: แก้ไขปัญหาการ mapping สำหรับ subheading ในโครงสร้างการนำทางและปรับปรุง logic การตรวจสอบ path
    ([#a00e647](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a00e647966fc0b37a4259e0421c5213eae3d28d1?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2FSIDENAV_SUBHEADING) โดย @bsolis)

## 2.11.0 (2025-07-31)

- คุณสมบัติ
  - Button Dropdown. นอกจากนี้ยังอัปเดต button และ dropdown ให้เหมาะกับ button dropdown component ([#09110294](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/09110294f61618c4b56637bdd2b783b36db5d55b?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FButtonDropdown) โดย @jbanares)
- แก้ไข
  - อัปเดต list ให้เหมาะกับ button dropdown component ([#dcc49a0e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dcc49a0e7c1a83938aac171a5342b0acdb3bd5d4?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FButtonDropdown) โดย @jbanares)

## 2.10.4 (2025-07-30)

- แก้ไข
  - แก้ไข: อัปเดต stacking sidepanel และ sidepanel transition ([#083c79cf](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/083c79cfe6e06359bab6588009387527b918d2af?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FStackingSidePanel) โดย @jbanares)
  - แก้ไข: ปรับปรุง stacking sidepanel transition timing และ synchronization ([#0c51d805](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0c51d805181e037e065e9ad1bf1bd4ab0a1612d7?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FStackingSidePanel) โดย @mraquel)

## 2.10.3 (2025-07-30)

-คุณสมบัติ

- เพิ่มฟีเจอร์ที่สร้าง UMD file เพื่อใช้ใน legacy applications ([#22aa5f41](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/22aa5f418dfd579450268852e3666dbcb3ec46ac?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fumd-file-creation) โดย @dale)

## 2.10.2 (2025-07-30)

- แก้ไข
  - DQA fixes สำหรับ stacking sidepanel ([#dae62cec](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dae62cecca78c56b0cca5f40168a9584500ee346?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FStackingSidePanel) โดย @jbanares)

## 2.10.1 (2025-07-30)

- แก้ไข
  - อัปเดต image url ใน sidepanel ([#bf025fa2](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/bf025fa22d6dea4738b372a5b1f5da6e9b762426?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FStackingSidePanel) โดย @jbanares)

## 2.10.0 (2025-07-29)

- คุณสมบัติ
  - Stacking Sidepanel ([#eb6b8bdd](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/eb6b8bdd8b46dc21c36d37e27a29a39de14ba057?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FStackingSidePanel) โดย @jbanares)

## 2.9.11 (2025-07-29)

- คุณสมบัติ
  - Commit 62e0dde9: feat(date-picker): เพิ่ม clearDate method เพื่อ reset date inputs ([#62e0dde9](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/62e0dde92264484316eced5b2979cd7f873c8210?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Fref-to-clear-date-picker) โดย @adestajo)

## 2.9.10 (2025-07-29)

- แก้ไข
  - Commit b73c4c87: fix(calendar): ปรับขนาด loading icon และปรับปรุงการจัดการ empty state ใน calendar component

- คุณสมบัติ
  - Commit 66ae4826: feat(calendar): เพิ่ม infinite loading และ loading text support ใน calendar component
  - Commit dd5e078c: feat(calendar): เพิ่ม type binding สำหรับ schedule color ใน calendar component
  - Commit 91961bf1: กรองตาม API
  - Commit f172ea17: feat(loading): เพิ่ม loading state support สำหรับ avatar, calendar cell, และ lozenge components
  - Commit 9bdc98f7: skeletal loader
    ([#f172ea17](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/33574?_a=commits) โดย @adestajo)

## 2.9.9 (2025-07-16)

- Chore
  - Commit 62b52034: Refactor sidenav types และปรับปรุง useSidenav functionality ด้วย nav item handling และ logic การ transformation ใหม่ ([#62b52034](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/62b52034256112c307f1c8217abe0014e8f7ab2d?refName=refs%2Fheads%2F2025%2FCHORE%2FJP%2FPOLY-120) โดย @jcruz)

## 2.9.8 (2025-07-16)

- คุณสมบัติ
  - เพิ่ม error state และ helper text support ให้กับ Filter component ([#6824a0d1](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6824a0d1ef9204731bcbec7cf7069633bc3dd1a4?refName=refs/heads/2025/feat/andrea/filter-error-state) โดย @adestajo)

## 2.9.7 (2025-07-15)

- แก้ไข
  - เพิ่ม chipped สำหรับ multi-select ([#137753a8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/137753a8def70de4ea8dd83e9db25519872c8e65?refName=refs/heads/2025/feature/arias/ds-updates) โดย @jarias)

## 2.9.6 (2025-07-07)

- แก้ไข
  - Commit 16cc3dff: fix: เพิ่ม prefix 'input-' ให้กับ ID ของ input fields เพื่อความสอดคล้องใน select components ([#16cc3dff](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/16cc3dffaacfac4a20545a713ab2488cf3eb64fb?refName=refs/heads/2025/Fix/andrea/change-default-id-name) โดย @adestajo)

## 2.9.5 (2025-07-07)

- แก้ไข
  - Commit d488a938: feat: เพิ่ม default IDs ให้กับ select components และปรับปรุง accessibility ([#d488a938](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d488a938a2dbe8bd724b3eaf0706d4792d5e18f9?refName=refs/heads/2025/Fix/andrea/added-ids-select-calendar) โดย @adestajo)

## 2.9.4 (2025-07-07)

- แก้ไข
  - Single and Multi Select Issues Encountered ([#3d283235](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3d28323540d3654a7fdf897aea31606f7fcbd0cd?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.9.3 (2025-07-07)

- แก้ไข

  -Commit c831f9cd: fix: อัปเดต calendar display logic และปรับปรุง sorting functionality ([#c831f9cd](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c831f9cde3ed540a8f78fbf90ca79c444b25b92b?refName=refs/heads/2025/Fix/andrea/calendar-fix) โดย @adestajo)

## 2.9.2 (2025-07-04)

- แก้ไข

  -DQA fixes สำหรับ Banner ([#1917dda](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1917dda1cd96e9782799c5a2582250f8898afacf?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FDQA_Banner) โดย @jbanares)

## 2.9.1 (2025-07-03)

- คุณสมบัติ
  - Commit f0f0d2f2: feat(calendar): เพิ่ม hideAddButton prop และปรับปรุง calendar header layout

  - Commit 4dad73dc: feat(calendar): ปรับปรุง calendar component ด้วย infinite scroll และ header layout ที่ดีขึ้น ([#4dad73dc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4dad73dc36608e754670f57ca21fb2edc7be4b82?refName=refs/heads/2025/Fix/andrea/calendar-update-dropdown-filter) โดย @adestajo)

## 2.9.0 (2025-07-02)

- คุณสมบัติ

  -Banner Component ([#35fbb736](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/35fbb736932c610ba7ae5c31fc5cad77b4bcd335?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FBanner) โดย @jbanares)

## 2.8.4 (2025-07-02)

- คุณสมบัติ
  - Stepper Type (compact และ solid) ([#92a4e51d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/92a4e51d179fd85d6a7af57cbdd7207348afc619?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FStepperTypes) โดย @jbanares)

## 2.8.3 (2025-07-02)

- แก้ไข
  - Code and Documentation Cleanup ([#52ff936a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/52ff936a5b70229601e1733aaaa36f1ed18bef5a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.8.2 (2025-07-01)

- คุณสมบัติ
  - เพิ่ม slot สำหรับ snack ([#35063ba8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/35063ba8fec4218fc44eda7951d8d94f479dbfb9?refName=refs/heads/2025/FEATURE/Xyrk/SNACK_SLOTS) โดย @jfabula)

## 2.8.1 (2025-07-01)

- คุณสมบัติ
  - Fiix Multi-Select และ Ladderized Issues Encountered ([#2007b944](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/2007b9445a49445edf25f9d00c286b07ff27342c?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.8.0 (2025-06-30)

- คุณสมบัติ
  - สร้าง Component Single Select, Multi Select และ Ladderized Select ([#32806](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/32806) โดย @jarias)

## 2.7.45 (2025-06-24)

- แก้ไข
  - Commit 27dcaafd: refactor: ลดความซับซ้อนของ logic การ emit ค่า date ใน date picker
    ([#27dcaafd](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/27dcaafdd422740dd895e2feed9f02508baffb9e?refName=refs/heads/2025/Fix/andrea/date-picker-model-value) โดย @adestajo)

## 2.7.44 (2025-06-24)

- Enhancement
  - การปรับปรุง Input component:
    - เพิ่มการรองรับทั้ง string และ number values ใน model value
    - เพิ่มฟีเจอร์ character count ที่แสดงในด้านขวาล่างของ input field
    - เพิ่ม `showCharCount` prop เพื่อเปิด/ปิดการแสดง character count
    - ปรับปรุง styling สำหรับ character count ให้เปลี่ยนสีเมื่อถึงขีดจำกัด
    - อัปเดตเอกสารพร้อมตัวอย่างทั้งสองฟีเจอร์
      ([#945f3001](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/945f30012913f02f72a3fd1ab6e5fa8a81f2bb57?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2FINPUT) โดย @bsolis)

## 2.7.43 (2025-06-21)

- แก้ไข
  - ปรับปรุงการจัดการและการจัดรูปแบบ input date
    ([#381b2356](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/381b235622631fbabb7dfa9fe12eedf12462aa33?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.7.42 (2025-06-21)

- แก้ไข
  - เพิ่ม Packge Version Installation, Code Cleanup

  ([#8b2377d7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/8b2377d7002bcb5d4b749fcfbed62dcaed270627?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.7.41 (2025-06-20)

- แก้ไข
  - แก้ไขปัญหา date picker input year

  ([#c9adfa40](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c9adfa4080634eaa80e70a2d75ac4496b609b7e2?refName=refs%2Fheads%2F2025%2FFEATURE%2FBEN%2FDATEPICKER-new) โดย @bsolis)

## 2.7.40 (2025-06-19)

- แก้ไข
  - แก้ไขปัญหา NaN ใน Table Pagination เมื่อใช้ `selectedRowCount` prop กับค่า number

  ([#dccc8046](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dccc80460cb2bc7e6c70d7422d8ca197ffc3a429?refName=refs%2Fheads%2F2025%2FFIX%2FTABLE-PAGINATION-DROPDOWN) โดย @bsolis)

## 2.7.39 (2025-06-19)

- คุณสมบัติ
  - DatePicker: เพิ่ม `format` prop เพื่ออนุญาตให้ปรับแต่ง date format (เช่น 'MM-DD-YYYY', 'YYYY-MM-DD', 'MM/DD/YYYY')
  - DatePicker: แก้ไขสีข้อความสำหรับ today's date เมื่อถูกเลือกให้เป็นสีขาวแทนสี brand

  ([#588f2034](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/588f2034f7df6212a93c89a6891d0101bd53f0cf?refName=refs/heads/2025/FEATURE/BEN/DATEPICKER) โดย @bsolis)

## 2.7.38 (2025-06-17)

- Enhancement
  - การปรับปรุง Dropdown component สำหรับ object values:
    - แก้ไข single object selection ให้ปิด dropdown อย่างถูกต้องหลังการเลือก
    - แก้ไข checkbox behavior ใน multi-selection mode กับ object values
    - ปรับปรุง object comparison สำหรับ selection state tracking ที่ดีขึ้น
    - ปรับปรุงเอกสารสำหรับ supported value types ใน dropdown component
    - เพิ่มตัวอย่างที่ครอบคลุมสำหรับ object value handling
      ([#4a5784fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4a5784fe93a55f1e53246f8f359f7e33dcd277c1?refName=refs%2Fheads%2F2025%2FFEATURE%2FBEN%2FDROPDOWN) โดย @bsolis)

## 2.7.37 (2025-06-17)

- แก้ไข
  - Commit 2b52090b: fix: ปรับตำแหน่ง menu filter และปรับปรุง responsiveness ของ layout([#2b52090b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/2b52090b2c445a85c6643c6d7ebf8204898fb41d?refName=refs/heads/2025/Fix/andrea/filter) โดย @adestajo)

## 2.7.36 (2025-06-16)

- คุณสมบัติ
  - Commit ddf1ee3b: เพิ่ม calendar empty state ([#ddf1ee3b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ddf1ee3b44d05dd382c1272961e2d51744bac4f1?refName=refs/heads/2025/feat/andrea/empty-state-calendar) โดย @adestajo)

## 2.7.35 (2025-06-04)

- แก้ไข
  - แก้ไขปัญหาที่พบเมื่อแทนที่ไฟล์ด้วยไฟล์ใหม่แล้วยกเลิก จะทำให้เกิด undefined error ([#7e3a50c0](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e3a50c0a01dc91c91ddba899add878bb7c50331?refName=refs%2Fheads%2F2025%2FEnhancement%2FPaulo%2FFileUploadEnhancements) โดย @jbanares)

## 2.7.34 (2025-06-04)

- แก้ไข
  - อัปเดต responsiveness ของ file name ใน preview ([#868eface](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/868efaced23c8b854d679cdbcc7149faea2ac35a?refName=refs%2Fheads%2F2025%2FEnhancement%2FPaulo%2FFileUploadEnhancements) โดย @jbanares)

## 2.7.33 (2025-06-03)

- คุณสมบัติ
  - เพิ่ม disabled item ใน list component ([#d190789d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d190789d598f3b57bc098f5cac9f273d945e7b23?refName=refs/heads/2025/fix/dustin/DQA_FIXES) โดย @despiritu)

## 2.7.32 (2025-06-02)

- แก้ไข
  - Incorrect file upload custom label สำหรับ file types ([#bcf39cdb](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/bcf39cdb3537a9e70c0e3bd25da71300536a2424?refName=refs%2Fheads%2F2025%2FEnhancement%2FPaulo%2FFileUploadEnhancements) โดย @jbanares)

## 2.7.31 (2025-06-02)

- Enhancement
  - File upload enhancements: show/hide preview icon ใน file list, show/hide dropzone label, custom label สำหรับ supported file types ([#a4ba414c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a4ba414ca0e2b1147a02a9ca34cae7eb084746d6?refName=refs%2Fheads%2F2025%2FEnhancement%2FPaulo%2FFileUploadEnhancements) โดย @jbanares)

## 2.7.30 (2025-05-28)

- แก้ไข
  - Dropdown Pre-Selected Item Logic, Code Cleanup, อัปเดต Ladderized Dropdown Transition ([#71792427](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/717924274e405e2fb84facb0d242f9c32b6eb18f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.7.29 (2025-05-28)

- แก้ไข
  - ป้องกัน duplicate pre-selected items ใน multi select mode ([#b2d7432d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b2d7432d12f18f2fd5c7b6822837e2123ea49304?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.7.28 (2025-05-28)

- แก้ไข
  - Dropdown Multi Select Reactive Selection ([#f5b7ac95](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f5b7ac9505397b95f20da656e3d91c69fe4ea2f3?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.7.27 (2025-05-28)

- แก้ไข
  - เพิ่ม bordered props ให้กับ accordion ([#0d3ef708](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0d3ef708dbd8c848f045c6fb6af6c68fa743c596?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.26 (2025-05-27)

- แก้ไข
  - เปลี่ยน padding y ของ underlined tab เป็น 16px ([#98f4501b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/98f4501b8fc84a336e619900f279569f6f985e98?refName=refs/heads/2025/fix/dustin/DQA_FIXES) โดย @despiritu)

## 2.7.25 (2025-05-23)

- แก้ไข
  - Avatar Image Dimension ([#511b33cd](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/511b33cd514e451da0ac69e023ff681329752d01?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.7.24 (2025-05-22)

- แก้ไข
  - Commit 1a89e328: fix: ตั้งค่า default ID values สำหรับ filter และ input components ([#1a89e328](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1a89e328bc9f050c2d32f438e307292508014a62?refName=refs/heads/2025/Fix/andrea/filter-ids) โดย @adestajo)

## 2.7.23 (2025-05-22)

- แก้ไข
  - ใช้ props modelValue สำหรับ textarea counter ([#3e7f6612](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3e7f661223c5b7678815b5c8066d7d609d1e9fc8?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.22 (2025-05-22)

- แก้ไข
  - เพิ่ม custom classes สำหรับ table action slot
  - เพิ่ม background color สำหรับ selected items ใน multiselect table
  - เพิ่ม sort icons ใน table
  - Revert modelValue ใน textarea ([#82802151](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/82802151ed971e73b616eda7a01734c856a1c1d6?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.21 (2025-05-21)

- คุณสมบัติ
  - Commit a07e6a19: feat: เพิ่ม icon prop ให้กับ calendar cell component และอัปเดต icon handling logic ([#a07e6a19](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a07e6a191de988f913f6c91a0d8170c434b7bdbe?refName=refs/heads/2025/feat/andrea/enhance-calendar-cell) โดย @adestajo)

## 2.7.20 (2025-05-21)

- คุณสมบัติ
  - Pull Request 31623: [POLY-109] - counter สำหรับ text area ([#31623](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/31623?_a=commits) โดย @adestajo)

## 2.7.19 (2025-05-20)

- แก้ไข
  - เพิ่ม word break ถ้ามี hasMaxWidth prop เป็น true ใน tooltip component
  - เพิ่ม custom classes ใน empty state base class และ table empty state container ([#12725950](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/12725950d33da5b4d6df0dd668daae3184cad4bb?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.18 (2025-05-19)

- แก้ไข
  - sync selectedData และ table data เมื่อมีการเปลี่ยนแปลง ([#363a88f8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/363a88f8e977faed07f77bf820e7ce88d772926a?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.17 (2025-05-19)

- คุณสมบัติ
  - Commit ab76862a: สี border ([#ab76862a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ab76862a56ec6af4e8e7b559e26ece21d7da6292?refName=refs/heads/2025/feat/andrea/docu-divide-colors) โดย @adestajo)

## 2.7.16 (2025-05-14)

- คุณสมบัติ
  - Commit ae101b74: initial Calendar ([#ae101b74](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae101b74fa251c0b0607140b81b05bf8a03ba345?refName=refs/heads/2025/feat/andrea/calendar) โดย @adestajo)

## 2.7.15 (2025-05-13)

- แก้ไข
  - แก้ไข switch issue clickable label ([#30182d0f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/30182d0f6039794e4532d452649463b048859b99?refName=refs/heads/2025/FIX/BEN/SWITCH_CHECK_LABEL) โดย @bsolis)

## 2.7.14 (2025-05-09)

- แก้ไข
  - แก้ไข switch issue check slot empty label จะไม่แสดง ([#28c0d332](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/28c0d332c8c57ca2c3be19457ea19723603d5cca?refName=refs%2Fheads%2F2025%2FFIX%2FBEN%2FSWITCH_CHECK_LABEL) โดย @bsolis)

## 2.7.13 (2025-05-09)

- แก้ไข
  - อัปเดต mobile responsiveness sidepanel ([#7a54ea36](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7a54ea3601d4d6f97f38c7fa6638b5890f329c8c?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 2.7.12 (2025-05-08)

- แก้ไข
  - Commit 82af2436: ids, และ delay ใน filter component ([#82af2436](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/82af243699f198aeef9debd940b0a528ab04f459?refName=refs/heads/2025/Fix/andrea/Ids-textarea) โดย @adestajo)

## 2.7.11 (2025-05-08)

- แก้ไข
  - เพิ่ม string หรือ number value ให้กับ TableData และ DQA fix สำหรับ radio ([#3e76569d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3e76569dcf7cc008f58923a1eb8f81c0c8cc70c8?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.10 (2025-05-08)

- แก้ไข
  - fix: DQA fixes สำหรับ bordered checkbox ([#56fe18ef](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/56fe18ef4df2eb90b08e924a59417d7fb60e36a0?refName=refs/heads/2025/fix/dustin/DQA_FIXES) โดย @despiritu)
  - fix: DQA fixes สำหรับ bordered radio ([#6119df5e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6119df5ec7b0c6ab7feaeb7abf1cfb5a671336c7?refName=refs/heads/2025/fix/dustin/DQA_FIXES) โดย @despiritu)

## 2.7.9 (2025-05-07)

- แก้ไข
  - fix: เปลี่ยน prop row ของ column slot ให้คืนค่า full row data และเพิ่ม prop rowIndex ใน Table ([#1915f154](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1915f154e8b24ec3b912c2ed5155ebfdc8e91356?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.8 (2025-05-07)

- แก้ไข
  - ปรับ z-index สำหรับ sidepanel ([#405fb992](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/405fb992aa64cbb5e0281fb94033d3f5ff035973?refName=refs%2Fheads%2F2025%2Fbugfix%2Feli%2Fsidepanel) โดย @elumilay)

## 2.7.7 (2025-05-06)

- แก้ไข
  - เพิ่ม pressed state ใน Accordion ([#8ae58e47](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/8ae58e478fa47bbe77e7fe6edbdd48d72194a3e2?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.6 (2025-05-06)

- แก้ไข
  - Commit ae37a005: เพิ่ม ID's สำหรับ Filter Component ([#ae37a005](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae37a0052034a69ed90c9290a0552c84430295b4?refName=refs/heads/2025/Fix/andrea/filter-ids) โดย @adestajo)

## 2.7.5 (2025-05-06)

- แก้ไข
  - แก้ไข max-height conditional สำหรับ sidenav ([#afdcfa71](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/afdcfa71756077d8412c512daa2c7cf0117c835a?refName=refs%2Fheads%2F2025%2Fbugfix%2Feli%2Fsidenav) โดย @elumilay)

## 2.7.4 (2025-05-06)

- แก้ไข
  - Commit 220c0358: อัปเดต table-pagination.vue ([#220c0358](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/220c03588d6877e9541d4dd503cee86951d974ce?refName=refs/heads/2025/Fix/andrea/added-id-table-pagination) โดย @adestajo)

## 2.7.3 (2025-05-05)

- แก้ไข
  - Commit f2750ca3: table height ถ้าไม่ใช่ Full height ([#f2750ca3](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f2750ca3a29fccaf0c103e6df1bd000ac6f259b0?refName=refs%2Fheads%2F2025-/Fix/andrea/table-full-height) โดย @adestajo)

## 2.7.2 (2025-05-05)

- แก้ไข
  - เปลี่ยน column slots ใน table ให้ใช้ $slots แทน useSlots ([#b431b2d2](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b431b2d2bb8c985b287f9fbc9ed3568dd149b0a7?refName=refs%2Fheads%2F2025%2Ffix%2Fdustin%2FDQA_FIXES) โดย @despiritu)

## 2.7.1 (2025-05-05)

- แก้ไข
  - Commit d08d4617: Refactor sidepanel และ table components สำหรับโครงสร้างและ styling consistency ที่ดีขึ้น ([#d08d4617](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d08d46172a544fb78edcbc23aab26ea615b95a9c?refName=refs/heads/2025/Fix/andrea/panel-table-layout) โดย @adestajo)

## 2.7.0 (2025-05-05)

- แก้ไข
  - เพิ่ม bordered variant สำหรับ radio และ checkbox
  - เพิ่ม description/subtext สำหรับ radio ([#7a91cbe5](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7a91cbe5d4ee6750a210538fe27a47170fc6cd77?refName=refs%2Fheads%2F2025%2FFEATURE%2FDUSTIN%2Fbordered-radio-and-checkbox) โดย @despiritu)

## 2.6.0 (2025-05-05)

- คุณสมบัติ
  - เพิ่ม custom icon feature สำหรับ sidenav links
  - เพิ่ม id สำหรับ user menu avatar และ links ภายใน ([#e8cc6ac3](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e8cc6ac3fc62899509fb552f487e654082fcc200?refName=refs%2Fheads%2F2025%2Ffeature%2Felii%2Fsidenav) โดย @elumilay)

- เอกสาร
  - Reposition the code template สำหรับส่วน "Full Example" ([#a4e3a2a3](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a4e3a2a30f4616f869b69050465ef6c0b47ff3ea?refName=refs%2Fheads%2F2025%2Ffeature%2Felii%2Fsidenav) โดย @elumilay)

## 2.5.4 (2025-05-05)

- แก้ไข
  - indeterminate ใน Select All checkbox ของ Mutliselect table ([#83e0c803](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/83e0c803a36c55af5a6349dd88633ee7896f6044?refName=refs/heads/2025/fix/dustin/DQA_FIXES) โดย @despiritu)

## 2.5.3 (2025-04-30)

- แก้ไข
  - Commit 6b16844d: อัปเดต filter.md ([#6b16844d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6b16844de0b6d5b55deef12b5338b26195afaf8c?refName=refs/heads/2025/Fix/andrea/filter-docu) โดย @adestajo)

## 2.5.2 (2025-04-30)

- แก้ไข
  - Shrinking Snackbar Icon ([#063e7e37](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/063e7e37577d54b3e23f0cc3dccb5246c094a565?refName=refs/heads/2025/fix/dustin/SHRINKING_SNACKBAR_ICON) โดย @despiritu)

## 2.5.1 (2025-04-30)

- คุณสมบัติ
  - Commit d7857580: feat: เพิ่ม placeholder prop ให้กับ TimePicker component ([#d7857580](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d785758027a33950d832bbfe83bc10eef180329f?refName=refs/heads/2025/feat/andrea/added-placeholder) โดย @adestajo)

## 2.5.0 (2025-04-30)

- คุณสมบัติ
  - Accordion Component ([#4b96feb1](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4b96feb1a82ab426665138e2cfcfb55a11b04341?refName=refs%2Fheads%2F2025%2FFEATURE%2FDUSTIN%2FACCORDION) โดย @despiritu)

## 2.4.0 (2025-04-30)

- คุณสมบัติ
  - Stepper ([#2e662df4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/2e662df4619cb67bf2ca8da0bbd631705dfce0dd?refName=refs/heads/2025/FEATURE/Xyrk/STEPPER) โดย @jfabula)

## 2.3.1 (2025-04-29)

- แก้ไข
  - Commit b5f80480: DQA ([#b5f80480](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b5f8048005e16d1316375d87c5251041fe5d050f?refName=refs/heads/2025/Fix/andrea/table-dropdown) โดย @adestajo)

## 2.3.0 (2025-04-29)

- คุณสมบัติ
  - เพิ่ม Version Navigation
- แก้ไข
  - เพิ่ม string validator สำหรับ request และ notifications count
- เอกสาร
  - แสดง '99+' ใน request count ใน sidenav documentation ([#cb728f1e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cb728f1e665f0035524f4ed48fddd66df91818bd?refName=refs%2Fheads%2F2025%2Fbugfix%2Feli%2Fsidenav) โดย @elumilay)

## 2.2.0 (2025-04-29)

- คุณสมบัติ
  - เพิ่ม Slotted Column และ Multiselect ใน Table ([#27035c48](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/27035c4810809fb0ba71f11ae6b6f24aac1c15f2?refName=refs/heads/2025/FEATURE/DUSTIN/TABLE_COLUMN_SLOT) โดย @despiritu)

## 2.1.1 (2025-04-28)

- แก้ไข: Logo issue on Azure via Removing Cloudinary Vue dependency และ update logo component to use standard img tag with URL generation ([#8a1817d6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/8a1817d6de6258988c8fe2c8604f5836604098bf) โดย @JefMari)

## 2.1.0 (2025-04-28)

- คุณสมบัติ
  - เพิ่ม Action Icon และ Slotted Action ใน Snackbar ([#3b6f8bc6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3b6f8bc684e1dbbe3c6bf820820b4070427ca8bd?refName=refs/heads/2025/FEATURE/DUSTIN/SNACKBAR_ENHANCEMENT) โดย @despiritu)

## 2.0.0 (2025-04-28)

- เอกสาร: แก้ไข sidenav documentation image path ให้ใช้ public directory
  ([#8ab7a8c3](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/8ab7a8c3e85ea58bc8db0e2746c40b8d405c5c60) โดย @JefMari)

## 2.0.0 (2025-04-25)

- Breaking Changes
  - ตั้ง Major Version ใหม่เป็น 2.0.0

- คุณสมบัติ
  - ปรับปรุง Docs Landing Page, เพิ่มข้อมูลมากขึ้น
  - เพิ่ม 'Product Logo' Component (ใช้ Cloudinary เพื่ออัปโหลดชั่วคราว)
  - เพิ่มส่วน "Product Uses" พร้อม logo ในเอกสาร component หลายรายการ
  - อัปเดตโครงสร้างเอกสาร component และปรับปรุงความชัดเจน

- แก้ไข
  - Docs: เพิ่มวิธีการติดตั้งทางเลือกสำหรับ design-system-next ผ่าน public npm registry
  - Docs: รองรับ Icon Component ใน Playground

[Pull Request Link](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/pullrequest/30981)

## 1.16.1 (2025-04-25)

- แก้ไข
  - Commit ae69a7ba: table heaight ([#ae69a7ba](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae69a7babfa3aa48d60e8df3d17dd79b6fdf5596?refName=refs/heads/2025/Fix/andrea/table-height) โดย @adestajo)

## 1.16.0 (2025-04-23)

- คุณสมบัติ
  - เพิ่มฟังก์ชันการค้นหาให้กับ ladderized dropdown ([#d4da9803](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d4da98037c23e8a1653b668d6df44ebf097db33d?refName=refs%2Fheads%2F2025%2FFEATURE%2FDUSTIN%2FLADDERIZED_DROPDOWN_SEARCH) โดย @despiritu)

## 1.15.17 (2025-04-21)

- แก้ไข
  - Commit cc4d678a: เพิ่ม avatar ([#cc4d678a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cc4d678a66eaaf7420b141ae0b00fcc21b178b5d?refName=refs/heads/2025/Fix/andrea/shift-assignment-component) โดย @adestajo)

- คุณสมบัติ
  - Commit 6db0b9ae: feat: ปรับปรุง input และ filter components ด้วย event handling และ properties ใหม่ ([#6db0b9ae](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6db0b9aed2b06c4f192cc077a0ad4d6c2d5f95d6?refName=refs/heads/2025/Fix/andrea/shift-assignment-component) โดย @adestajo)

## 1.15.16 (2025-04-21)

- แก้ไข
  - Table Footer position และ Sorting กับ special titles ([#640c3298](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/640c32982580cfaba926612f5e6843acd43fe173?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FTABLE_FOOTER_AND_SORT_TITLES) โดย @jfabula)

## 1.15.15 (2025-04-16)

- แก้ไข
  -ลบ duplicate emit update ใน ladderized dropdown ([#a155df69](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a155df69f50b20cb680985625953af34219b2d9f?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FREMOVE_DUPLICATE_EMIT_UPDATE_ON_LADDERIZED_DROPDOWN) โดย @jbanares)

## 1.15.14 (2025-04-16)

- แก้ไข
  - ปรับปรุง collapsible component เพื่อป้องกันการทับซ้อนและรองรับ dynamic content ([#a9102236](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a91022369ec1bf518e5f222b98a5d330ecadf1ad?refName=refs%2Fheads%2F2025%2Fbugfix%2Fjames%2Fcollapsible) โดย @jmanalang)

## 1.15.13 (2025-04-14)

- แก้ไข
  - อัปเดต Documentaion Forms
  - Contact Number Input Select Country Calling Code ([#fcb2cd4d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/fcb2cd4dd1ac7dd95a6428a2d44d6dba7d883c?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.15.12 (2025-04-08)

- แก้ไข
  - ลบ hover styling สำหรับ active request และ notification icon ([#7065fe85](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7065fe859c1fbb54d87291f47ed928529c08b47d?refName=refs%2Fheads%2F2025%2Fbugfix%2Feli%2Fsidenav) โดย @elumilay)
- เอกสาร
  - เพิ่ม Manual URL Change Handling ภายใต้ Sidenav active navigation ([#ea5a9ee2](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ea5a9ee2743e6e7f00a8573fbe42536aaf13189b?refName=refs%2Fheads%2F2025%2Fbugfix%2Feli%2Fsidenav) โดย @elumilay)

## 1.15.11 (2025-04-04)

- แก้ไข: List Preselected Item สำหรับ paginated Data ([#e82c3502](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e82c350270d7968b17c11abbdffe91eefe51dd84?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.15.10 (2025-04-04)

- แก้ไข: Modal X button size ([#a07ee801](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a07ee801b921df428a7a96ed216d700adee0f9a9?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.15.9 (2025-04-03)

- แก้ไข: Warning Mesages on List due to Menu List is not localized ([#9b4bb542](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/9b4bb5424ae5c71e12c9c104e23276119ae9b383?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.15.8 (2025-04-03)

- คุณสมบัติ
  - เพิ่ม hover และ active state ให้กับ notif และ request icon ([#5d89ec25](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5d89ec2550e2f56fd45cc34a3b6b44002c30bf0c?refName=refs%2Fheads%2F2025%2Ffeature%2Felii%2Fsidenav) โดย @elumilay)
  - เพิ่ม isNotifActive และ isRequestActive ให้กับ sidenav props
  - อัปเดต Request icon
  - ปรับ tooltip distance สำหรับ request และ notif icon เมื่อ hover

## 1.15.7 (2025-04-03)

- แก้ไข: อัปเดต z-index สำหรับ date picker ([#53b07c57](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/53b07c57a5fd03c692d187e1851bb8b1b5bdfe75?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.15.6 (2025-04-02)

- แก้ไข: ลบ extra border ใน Lozenge ([#87d46d9f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/87d46d9f8789fd712e261627b823c06f6c4abcbc?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FFIX_EXTRA_BORDER_IN_LOZENGE) โดย @jbanares)

## 1.15.5 (2025-04-01)

- แก้ไข: table with Pagination layout / Sorting with Api ([#5bd18285](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5bd18285719a10d7665208a8619cbfbb071e5185?refName=refs/heads/2025/Fix/andrea/table-pagination) โดย @adestajo)

## 1.15.4 (2025-03-31)

- แก้ไข: Rerender List if from API Calls ([#e5356e24](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e5356e24c73e072096e81b6dd5a3c012601196f0?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.15.3 (2025-03-31)

- แก้ไข: DQA update สำหรับ File Upload ([#3e1456ea](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3e1456eadba7c5da538df1fa0425997d64788300?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FDQA_FILE_UPLOAD) โดย @jbanares)

## 1.15.2 (2025-03-31)

- แก้ไข
  - Textarea Helper Message, เพิ่ม Datepicker ISO Formats, แก้ไข Input DQA, แก้ไข Dropdown Muenulist ([#f129de9d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f129de9d2dd33741f0fe58efc1d5912c13e10e62?refName=refs/heads/2025/feature/arias/ds-updates) โดย @jarias)

## 1.15.1 (2025-03-28)

- แก้ไข
  - update avatar และ filter components สำหรับ layout และ functionality ที่ดีขึ้น ([#cb85cae8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cb85cae8ee3f38319c1d4bf8fa80d83fe9fd5487?refName=refs/heads/2025/Fix/andrea/lozenge-avatar-filter) โดย @adestajo)

## 1.15.0 (2025-03-27)

- คุณสมบัติ
  - Ladderized List และ Dropdown ([#17aca737](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/17aca7371556b77c0d24924394c6488bf81458a9?refName=refs/heads/2025/FEATURE/Paulo/LADDERIZED_DROPDOWN) โดย @jbanares)
  - อัปเดต list component ให้มี subtext property
- Refactor
  - Refactored List และ Dropdown components และอัปเดต v-model logic
  - อัปเดต table pagination component ด้วย dropdown ที่อัปเดตแล้ว

## 1.14.3 (2025-03-27)

- แก้ไข
  - Commit 620a2021: feat: เพิ่ม fullwidth prop ให้กับ button และอัปเดต related components; ปรับปรุง date-picker placement และ filter infinite scroll handling ([#620a2021](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/620a202119aa765928717bd509efe6f2ed36715b?refName=refs/heads/2025/Fix/andrea/dqa-shift-center) โดย @adestajo)

## 1.14.3 (2025-03-26)

- แก้ไข
  - อัปเดต Contact Number Issues Encountered, อัปเดต Modal Z-index และ Snackbar ([#08426ee1](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/08426ee1ed5b601fc56e0d99cd6a6dd0a4adfed4?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.14.2 (2025-03-26)

- คุณสมบัติ
  - เพิ่ม chip cells ([#c06d856d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c06d856d858bb6b7ab82b66f7d870eab7ed094ce?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_CHIPS_AND_MULTIPLE_TITLE) โดย @jfabula)
  - เพิ่ม multiple chips และ lozenges cells ([#61bd0f1a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/61bd0f1a68daf3aeeadbe40dcc8ef584662380cf?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_CHIPS_AND_MULTIPLE_TITLE) โดย @jfabula)
  - เพิ่ม initial support สำหรับ avatar ใน chips ([#bc31a2a1](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/bc31a2a198ba18d9fc4fec4f8380cdd5b7d5a75a?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_CHIPS_AND_MULTIPLE_TITLE) โดย @jfabula)

## 1.14.1 (2025-03-25)

- แก้ไข
  - hover color และ label size ([#a6e3d90](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a6e3d90daaee6dad95d8b67a448dd785bc3a338b?refName=refs/heads/2025/FIX/Xyrk/CHECKBOX_DQA) โดย @jfabula)

## 1.14.0 (2025-03-24)

- คุณสมบัติ
  - อัปเดต Phone Number Input, เพิ่ม Input Dropdown, Tooltip Update ([#bb1dc265](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/bb1dc2659be52f5657d09c2750480a755ac31f49?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.13.10 (2025-03-24)

- เอกสาร
  - Checkbox indeterminate documentation ([#075d5fc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/075d5fcc13dc901c1f1d4a2ceff6ee6d0ee3b0b3?refName=refs/heads/2025/FIX/Xyrk/CHECKBOX_DQA) โดย @jfabula)

## 1.13.9 (2025-03-24)

- แก้ไข
  - Checkbox DQA ([#9f1d8c0](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/9f1d8c07719bfe61ec7a923f2acb50f4ea9c4cb5?refName=refs/heads/2025/FIX/Xyrk/CHECKBOX_DQA) โดย @jfabula)

## 1.13.8 (2025-03-21)

- แก้ไข
  - ลบ prop warning สำหรับ sidenav notification และ request number
  - เพิ่ม full height สำหรับ sidepanel content ([#dd811532](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dd811532c60b66ca6b748a3d1210075731512d44?refName=refs%2Fheads%2F2025%2FFIX%2FELI%2FSIDENAV) โดย @elumilay)

## 1.13.7 (2025-03-21)

- แก้ไข
  - อัปเดต Border Focus สำหรับ Input ([#7e77e74e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e77e74e09eadc5704240d5c5bcca3711dac530e?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.13.6 (2025-03-21)

- แก้ไข
  - เปลี่ยน logic สำหรับ invisible headers ([#302069b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/302069b00430bfeefc4825c366885da527142c9c?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FTABLE_HEADER) โดย @jfabula)

## 1.13.5 (2025-03-20)

- คุณสมบัติ
  - Commit ddf1ee3b: เพิ่ม deselect functionality ให้กับ filter component และอัปเดต documentation ([#ddf1ee3b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dd9acf632bcb077b1f8b78d2ca34de255c588de2?refName=refs/heads/2025/FIX/Xyrk/TABLE_HEADER) โดย @adestajo)

## 1.13.4 (2025-03-20)

- แก้ไข
  - Input Icon Implementation, Input pre-value implementation
  - Radio Button Margin Fix Update
  - Dropdown overflow X ([#80e3aab6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/80e3aab63efef23c95e6c40970135337900ab0e2?refName=refs/heads/2025/feature/arias/ds-updates) โดย @jarias)

## 1.13.3 (2025-03-20)

- แก้ไข
  - Table Header หายไป ([#dd9acf6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dd9acf632bcb077b1f8b78d2ca34de255c588de2?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FTABLE_HEADER) โดย @jfabula)

## 1.13.2 (2025-03-19)

- คุณสมบัติ
  - Commit 146e3e3d: ปรับปรุง table และ filter components ด้วย properties และ styles ใหม่ ([#146e3e3d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/146e3e3de08c50b66646181a512118ac6673c59b?refName=refs/heads/2025/Fix/andrea/fixes) โดย @adestajo)

## 1.13.1 (2025-03-19)

- คุณสมบัติ
  - เพิ่ม Table Lozenge Cells ([#b2ea23e](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b2ea23e8af842870b5bc8b3e97918a825394f7fd?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_ROW_ICON_LOZENGE_AND_HEADER) โดย @jfabula)

## 1.13.0 (2025-03-17)

- คุณสมบัติ
  - เพิ่ม collapsible component และ documentation. อัปเดต card props และ documentation ([#b5d669ad](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b5d669adb78ab6a41351130270bfa3621b5309b5?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Fcollapsible) โดย @jmanalang)

## 1.12.5 (2025-03-17)

- แก้ไข
  - Issues encountered with Datepicker ([#d8d923f8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d8d923f848d3d05b225cd60594dd5cf745897e54?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.12.4 (2025-03-14)

- แก้ไข
  - แก้ไข Checkbox Issues ([#a5c0c17b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a5c0c17b782edf39cd907ac7fc5ab3040f25b2ec?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.12.3 (2025-03-14)

- แก้ไข
  - Documentation Fix
  - Datepicker DQA ([#d0eae35f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d0eae35ffdb63a4268def0cc6791f619d9a3d9bf?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.12.2 (2025-03-14)

- แก้ไข
  - Commit 5221335b: feat: เพิ่ม unique ID generation สำหรับ filter และ time picker components ([#5221335b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5221335b50573c545f198f044457a02e9db0d1bb?refName=refs/heads/2025/Fix/andrea/floating-vue-unique-id) โดย @adestajo)

## 1.12.1 (2025-03-13)

- แก้ไข
  - Datepicker Spacing Issues Encountered ([#64f62be1](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/64f62be1bd0c6355bc45c1b3fab8468a58cbbbf0?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.12.0 (2025-03-13)

- คุณสมบัติ
  - Input contact number ([#bf8098c7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/bf8098c753ebbd09fc86e73cacbcaac0a3517bd9?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_CONTACT_NUMBER) โดย @jbanares)

## 1.11.8 (2025-03-13)

- แก้ไข
  - Datepicker and Radio Issues Encountered ([#64f62be1](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/64f62be1bd0c6355bc45c1b3fab8468a58cbbbf0?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.11.7 (2025-03-13)

- แก้ไข
  - Commit 3d728473: ปรับปรุง time-picker component: อัปเดต prop types, เพิ่ม helperText และ id, และปรับปรุง styling ([#3d728473](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3d7284733833d62bb1c4f4e6b58ab2a89e7480ce?refName=refs/heads/2025/Fix/andrea/time-picket-use-floating-vue) โดย @adestajo)

## 1.11.6 (2025-03-13)

- คุณสมบัติ
  - เพิ่ม table row on click functionality ([#8c23d194](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/8c23d19499a2ac0aa7ae3771de60aa6955ef7b5c?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Ftable-row-click) โดย @jmanalang)

## 1.11.5 (2025-03-13)

- แก้ไข
  - Commit b588ec0f: refactor: อัปเดต filter component layout และ styles สำหรับ usability ที่ดีขึ้น ([#b588ec0f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b588ec0faff2b714d4f48a6b6e2c6024d38f32a1?refName=refs/heads/2025/Fix/andrea/filter-refactor) โดย @adestajo)
  - Commit 3ca9888c: อัปเดต table sorting เมื่อไม่มี define sortOrder attr ([#3ca9888c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3ca9888ce95204aafc4ef20add8da88dff2f0f25?refName=refs/heads/2025/Fix/andrea/filter-refactor) โดย @adestajo)

## 1.11.4 (2025-03-12)

- แก้ไข
  - Handle Dropdown Disable Popper ([#1343a379](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1343a379ee97adac26466b19f42f0006f8beb68d?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.11.3 (2025-03-12)

- แก้ไข
  - อัปเดต Radio Component และ Fixed Issues Encountered ([#1f7fd299](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1f7fd2997bcdf01316c0c1c2244bb8caa3da79f1?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.11.2 (2025-03-12)

- แก้ไข
  - แก้ไข Pre Defined Values สำหรับ input field with data reactiveness
  - Dropdown preSelectedItems data reactiveness
  - Input Icons ไม่ได้ center aligned และควรจะสามารถใช้ multi icon ได้
  - เพิ่ม package script auto build on code change ([#92436bfa](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/92436bfa7e58b40eeee6c431e11227e0dd600114?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.11.1 (2025-03-12)

- แก้ไข
  - Commit 643c87ae: feat: อัปเดต emit types สำหรับ checkbox, filter, และ textarea components([#643c87ae](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/643c87aed308569cc699c6cb86c2faa448096151?refName=refs/heads/2025/Fix/andrea/enhancement-calendar-cell) โดย @adestajo)
  - Commit eebf9e88: feat: เพิ่ม viewOnly prop ให้กับ calendar cell และอัปเดต click handling ([#eebf9e88](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/eebf9e888d346c9606ac7f69898555fad33096f3?refName=refs/heads/2025/Fix/andrea/enhancement-calendar-cell) โดย @adestajo)

## 1.11.0 (2025-03-12)

- คุณสมบัติ
  - File Upload ([#ec602c1c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ec602c1c555e4ada5e4dfdc6004af9653a7b4a24?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FFILE_UPLOAD) โดย @jbanares)

## 1.10.3 (2025-03-12)

- แก้ไข
  - Table pagination dropdown field ไม่ได้เปิด([#ec771e01](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ec771e01671289eb25ed48c90832828f12f836ab?refName=refs/heads/2025/FIX/Xyrk/TABLE_PAGINATION_DOCS_AND_DROPDOWN) @jfabula)
  - Table action search field length ([#7b9780f6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7b9780f663093df1e76e809fe82f5b099dbdbdd3?refName=refs/heads/2025/FIX/Xyrk/TABLE_PAGINATION_DOCS_AND_DROPDOWN) @jfabula)

## 1.10.2 (2025-03-11)

- แก้ไข
  - Input v-model issue binding ([#01492d98](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/01492d98d04ac11ff59c8f852210c1ec436b746a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.10.1 (2025-03-11)

- แก้ไข
  - Input Text Min Max Issue ([#01492d98](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/01492d98d04ac11ff59c8f852210c1ec436b746a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.10.0 (2025-03-11)

- คุณสมบัติ
  - เพิ่ม component ใหม่ Floating Action ด้วย documentation ([#14c2d007](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/14c2d00772e993011c050569de67bf05b4e9f49b?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Ffloating-action) โดย @jmanalang)

## 1.9.3 (2025-03-11)

- แก้ไข
  - Commit ae8dc972: ปรับปรุง table component styling ([#ae8dc972](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae8dc9722459cd4e568939a098aba680f1634bc3?refName=refs/heads/2025/Fix/andrea/enhancement-table-n-calendar-cell) โดย @adestajo)
  - Commit 3813677a: feat: เพิ่ม fullwidth prop ให้กับ calendar cell ([#3813677a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3813677a50b19aab86b2b9a2fd93bdb6368d593e?refName=refs/heads/2025/Fix/andrea/enhancement-table-n-calendar-cell) โดย @adestajo)

## 1.9.2 (2025-03-11)

- แก้ไข
  - Input field Height
  - Input field handle model and value
  - Droprown fix issues encountered ([#01492d98](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/01492d98d04ac11ff59c8f852210c1ec436b746a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.9.1 (2025-03-10)

- แก้ไข
  - เพิ่ม min max length attribute support สำหรับ input fields ([#cb92027d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cb92027d75a3200d5170d511e36491ddf3731cba?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.9.0 (2025-03-10)

- คุณสมบัติ
  - Refactored Dropdown by splitting list component
  - Refactored Modal to handle popper issues and added animations
  - อัปเดต Datepicker issues encountered
  - เพิ่ม component ใหม่ List ด้วย documentation ([#53a6a82f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/53a6a82fa82a0f859bbf3ddc5704c9b9f001df49?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdropdown-refactor) โดย @jarias)

## 1.8.2 (2025-03-07)

- แก้ไข
  - DQA สำหรับ slider component ([#a555ece3](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a555ece319a158817e3c48e3f7472e008471fcde?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-slider) โดย @dale)

## 1.8.1 (2025-03-07)

- แก้ไข
  - DQA สำหรับ slider component ([#504a9a90](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/504a9a9059b554c415235875cadaf506a2c69c25?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-slider) โดย @dale)

## 1.8.0 (2025-03-07)

- คุณสมบัติ
  - Progress Bar component และ slider documentation([d1420e1f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d1420e1fc6721ac8a0b1df9cca6689f0b10d9e7c?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fprogressbar) โดย @dale)

## 1.7.4 (2025-03-07)

- แก้ไข
  - Table overlap with footer ([#90ed36de](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/90ed36de8c7959e52dfa1ded52ecba22de5e5374?refName=refs/heads/2025/FIX/Xyrk/TABLE_FOOTER_OVERLAP) โดย @jfabula)
  - ลบ unnecessary attributes ใน table footer ([#4f821020](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4f821020cb2ceeae9119aacb89f1fedd1bdea2ac?refName=refs/heads/2025/FIX/Xyrk/TABLE_FOOTER_OVERLAP) โดย @jfabula)
  - Font weight inherit on input ([#b4d1751a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/b4d1751af2af1367cd51ec69919f125787f323b0?refName=refs/heads/2025/FIX/Xyrk/TABLE_FOOTER_OVERLAP) โดย @jfabula)

## 1.7.3 (2025-03-07)

- คุณสมบัติ
  - Commit 3f3cb7b6: ปรับปรุง filter component code readability และ type safety :D ([#3f3cb7b6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3f3cb7b687c5b24d43adda9898364aa2dbb558b1?refName=refs/heads/2025/Fix/andrea/AI-optimized-filter) โดย @adestajo)

## 1.7.2 (2025-03-07)

- แก้ไข
  - DQA สำหรับ slider component ([#89aeea52](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/89aeea52dbaf416d3a669113c883cb8c1d4de920?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-slider) โดย @dale)

## 1.7.1 (2025-03-06)

- คุณสมบัติ
  - Commit df2e6398: feat: เพิ่ม Calendar Cell component ด้วย usage examples และ documentation ([#df2e6398](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/df2e63987eeab4334916fbf8b9ccc3d42ec248d5?refName=refs/heads/2025/Feature/andrea/calendar-cell) โดย @adestajo)

## 1.7.0 (2025-03-06)

- คุณสมบัติ
  - Slider component และ slider documentation([ef66f65](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ef66f65d92648b2d6c0d498cda4823491241103a?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fslider) โดย @dale)

## 1.6.7 (2025-03-06)

- คุณสมบัติ
  - Commit 5867fc71: Refactor filter component props และ events; อัปเดต time picker focus behavior และ table imports ([#5867fc71](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5867fc710404012d6dfb0175c839b7a2d499485d?refName=refs/heads/2025/Feature/andrea/filter) โดย @adestajo)

## 1.6.6 (2025-03-05)

- คุณสมบัติ
  - Table Footer Pagination ([#dc4b702d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dc4b702d8eb789580b6f8aab8ca5c098cfdea223?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_FOOTER) โดย @jfabula)

## 1.6.5 (2025-03-04)

- คุณสมบัติ
  - เพิ่ม Table Actions section ใน table ([#7fd19bb8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7fd19bb8f5e6c83ae4d441353fbec375342e1ddc?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_ACTIONS) โดย @jfabula)

## 1.6.4 (2025-03-04)

- แก้ไข
  - อัปเดต date picker documentation และ component width default value ([#418b3e30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/418b3e30cae42ecba6e9913dee6f6371e46a0482?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) @jarias)

## 1.6.3 (2025-03-04)

- แก้ไข
  - Documentation Empty State Image ([#60b670fc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/60b670fc0a816041a6db23829280cf2af0adea5a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) @jarias)

## 1.6.2 (2025-03-04)

- แก้ไข
  - Documentation Empty State Image ([#60b670fc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/60b670fc0a816041a6db23829280cf2af0adea5a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) @jarias)

## 1.6.1 (2025-03-04)

- คุณสมบัติ
  - Date Picker - Enable number in month input, Added general validation ([#34412d4a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/34412d4a5f1f95e837d7ed4472877f12a52cfb92?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdate-picker) @jarias)

## 1.6.0 (2025-03-03)

- คุณสมบัติ
  - Date Picker ([#7602974d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7602974d42d59055c2028e707e0032961e12f02d?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdate-picker) @jarias)

## 1.5.7 (2025-03-03)

- คุณสมบัติ
  - Commit 97d44216: emit table sort ([#97d44216](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/97d44216912e82abe1d805dadba5b1f7244d4b37?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

- แก้ไข
  - คอมมิต 609aea96: เพิ่มค่าเริ่มต้นสำหรับรูปภาพสถานะว่าง ([#609aea96](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/609aea961fc07edee42a9d52fb53633f3f665bde?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)
    - เพิ่มกรอบขอบให้กับป้าย badge ([#7e7ccf7f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e7ccf7f0f2bf65dd88f7cbac550248ebfac5bf7?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

## 1.6.6 (2025-03-05)

- คุณสมบัติ
  - ฟีเจอร์ Table Footer Pagination ([#dc4b702d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/dc4b702d8eb789580b6f8aab8ca5c098cfdea223?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_FOOTER) โดย @jfabula)

## 1.6.5 (2025-03-04)

- คุณสมบัติ
  - เพิ่มส่วน Table Actions ในคอมโพเนนต์ตาราง ([#7fd19bb8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7fd19bb8f5e6c83ae4d441353fbec375342e1ddc?refName=refs/heads/2025/FEATURE/Xyrk/TABLE_ACTIONS) โดย @jfabula)

## 1.6.4 (2025-03-04)

- แก้ไข
  - อัปเดตเอกสาร date picker และค่าเริ่มต้นความกว้างของ component ([#418b3e30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/418b3e30cae42ecba6e9913dee6f6371e46a0482?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 1.6.3 (2025-03-04)
  - แก้ไข
    - อัปเดตรูปภาพสถานะว่างในเอกสาร ([#60b670fc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/60b670fc0a816041a6db23829280cf2af0adea5a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.6.2 (2025-03-04)

- แก้ไข
  - อัปเดตเอกสารรูปภาพสถานะว่าง ([#60b670fc](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/60b670fc0a816041a6db23829280cf2af0adea5a?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 1.6.1 (2025-03-04)
  - คุณสมบัติ
    - Date Picker - เปิดใช้งานตัวเลขในช่องเดือน, เพิ่มการตรวจสอบข้อมูลทั่วไป ([#34412d4a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/34412d4a5f1f95e837d7ed4472877f12a52cfb92?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdate-picker) โดย @jarias)

## 1.6.0 (2025-03-03)

- คุณสมบัติ
  - Date Picker ([#7602974d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7602974d42d59055c2028e707e0032961e12f02d?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdate-picker) @jarias)

## 1.5.7 (2025-03-03)

- คุณสมบัติ
  - Commit 97d44216: ส่งข้อมูลการเรียงลำดับตาราง ([#97d44216](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/97d44216912e82abe1d805dadba5b1f7244d4b37?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

  - แก้ไข
    - Commit 609aea96: เพิ่มค่าเริ่มต้นสำหรับรูปภาพสถานะว่าง ([#609aea96](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/609aea961fc07edee42a9d52fb53633f3f665bde?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)
      - เพิ่มกรอบขอบให้กับป้าย ([#7e7ccf7f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e7ccf7f0f2bf65dd88f7cbac550248ebfac5bf7?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

## 1.5.6 (2025-03-03)

- แก้ไข
  - การเคลื่อนที่ของคำนำหน้าและไอคอนในข้อความช่วยเหลือ ([#bd809417](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/ff11dd36-9e5b-4dee-ab48-0999d0a61cfd/commit/bd809417bb06570620683002b3e6e51bb8a6c2ed/) โดย @jfabula)
    - เพิ่มสล็อตเทมเพลตสำหรับคอมโพเนนต์อินพุต ([#e0cc862c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e0cc862cfc70ff97890c1315fb8700b59b75038b?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FINPUT_HELPER_SPACE_PREFIX_AND_ICON) โดย @jfabula)

## 1.5.5 (2025-03-03)

- แก้ไข
  - DQA สำหรับ card ([f7c2f293])(https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f7c2f29303d05c8cb5642956f2adcf198241d66d?refName=refs%2Fheads%2F2025%2Ffix%2Fjames%2FDQA-card) โดย @jmanalang

## 1.5.4 (2025-02-27)

- แก้ไข
  - ตรวจสอบคุณภาพและอัปเดตเอกสารสำหรับสถานะ ([#7e8b0ad6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e8b0ad6ea97836c3eda3d5c02737a449814757f?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-status) โดย @dale)

## 1.5.2 (2025-02-27)

- แก้ไข
  - จำนวนอวตาร์ ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

  ## 1.5.1 (2025-02-27)
  - แก้ไข
    - อักษรย่อในอวตาร์ ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

## 1.5.0 (2025-02-26)

- คุณสมบัติ
  - สถานะ ([#7a1e32e7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1cad1d936be4982da9c521f518a55e7ee04c7a95) โดย @dale)
  - เอกสารสถานะ ([ea8732da](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ea8732da1bfd9bb282989588f3bdefd396707229?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fstatus) โดย @dale)

## 1.4.16 (2025-02-26)

- แก้ไข
  - แก้ไขการนำเข้า Iconify ([#05bbaee9](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/05bbaee9b3b1608e2695341acd913702b8024bbd?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FFIX_ISSUE_WITH_ICONIFY_IMPORTS) โดย @jbanares)

## 1.4.15 (2025-02-26)

- แก้ไข
  - เอกสารแผงด้านข้าง ([#6a1d115f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6a1d115f4fd34a8070bdaf698e99aa9030649619?refName=refs/heads/2025/Fix/andrea/sidepanel-md) โดย @jarias)

## 1.4.14 (2025-02-26)

- แก้ไข
  - ซ่อนแถบเลื่อนตารางและแก้ไขส่วนหัว ([#5073baa8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5073baa830888e89683dc8d53c9635cc59b14bc3?refName=refs/heads/2025/Fix/andrea/DQA-table) โดย @adestajo)

## 1.4.13 (2025-02-26)

- แก้ไข
  - เปลี่ยนการใช้งานของ props การแจ้งเตือนและคำขอ ([#92f9409d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/92f9409d889d11ec596fe1ebb411383beab23b0e?refName=refs%2Fheads%2F2025%2FFIX%2FELI%2FSIDENAV) โดย @elumilay)

  ## 1.4.12 (2025-02-25)
  - แก้ไข
    - ค่าเริ่มต้นทูลทิป ([cc6eb7b4]https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cc6eb7b42e9ccd9996c13785d083bdc678346139?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip-update โดย @jarias)

  ## 1.4.11 (2025-02-25)
  - คุณสมบัติ
    - ฟิลด์อินพุตชื่อผู้ใช้ ([#d001cb3a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d001cb3a51a0ae2c568d4b5e46c44d6dba7d883c?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์อินพุตอีเมล ([#66db9867](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/66db986714fd3315c66c1a20106ad7d018d58450?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์อินพุตรหัสผ่าน ([#fd1614ce](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/fd1614ce492a50b324c5d53ea25705e953d60382?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์อินพุต URL ([#502d7800](hhttps://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/502d7800207a9d09e6e1136d86820250a804d4cb?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ปรับปรุงฟิลด์อินพุตการค้นหา ([#a68a739d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a68a739db3d6fc1767a44939e76a93ecde97d2a5?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)

  ## 1.4.10 (2025-02-24)
  - การปรับปรุง
    - พื้นที่ข้อความแบบอ่านอย่างเดียว ([#93cee4fa](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/93cee4fa229eb85e892c3d45bc994be69334deb7?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)
    - เปลี่ยน timePicker เป็น Kebab Casing ([#cf28f559](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cf28f559ab914d8ed29934c4aaa0986413933013?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)

  ## 1.4.9 (2025-02-24)
  - คุณสมบัติ
    - รูปแบบอวตาร์ ([#257ebf9b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/257ebf9b29d68f8ce44f8c489375757470742abb?refName=refs%2Fheads%2F2025%2FFearure%2Favatar-variant) โดย @adestajo)

  ## 1.4.8 (2025-02-24)
  - คุณสมบัติ
    - ข้อความช่วยเหลืออินพุต ([#0b19d997](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0b19d99758e20c3c05cd1d4b60e18a76d44bdd4c?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)
  - แก้ไข
    - แก้ไขโทนสีของ snackbar สำหรับอันตรายและข้อควรระวัง ([#23512c95](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/23512c957be34ab04e640091c2b9e3e98db6b1b8?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)

  ## 1.4.7 (2025-02-24)
  - คุณสมบัติ
    - พื้นที่ข้อความ ([#1c8100f4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1c8100f431890eb773e6faf2cc850bcbd388e896?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Ftextarea) โดย @adestajo)

  ## 1.4.6 (2025-02-24)
  - แก้ไข
    - ตรวจสอบคุณภาพสำหรับ sidenav และ sidepanel ([#e5d81457](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e5d81457a49c5755782bf0e176d1dbb0645e747e?refName=refs/heads/2025/FIX/ELI/SIDENAV) โดย @elumilay)

  ## 1.4.5 (2025-02-24)
  - คุณสมบัติ
    - ชิปส์ - อีเวนต์กำหนดเองและน้ำหนักไอคอน
    - เพิ่มจำนวนสำหรับอวตาร์ ([#831236b7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/831236b7e45ee16da1758ee0737a38428fd2ef37?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Fchip-custom-event) โดย @adestajo)

  ## 1.4.4 (2025-02-24)
  - คุณสมบัติ
    - ทำความสะอาดโค้ดและเอกสาร
    - ใช้วิธีการคอมไพล์คลาส
    - ใช้ toRefs สำหรับ Props
    - เปลี่ยน Empty State จาก PNG เป็น SVG
    - ทำให้การค้นหาอินพุตง่ายขึ้น
      ([#5648d141](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5648d1417abfaad9b63077bcb8bd53eefea78783?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.4.3 (2025-02-21)

- คุณสมบัติ
  - ชิปส์ - การทำงานต่อเนื่องโดย Michael Raquel
    - เพิ่มจำนวนสำหรับอวตาร์ ([#02350704](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0235070425f681fdd2197fe427b175addae81e71?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Fcontinuation-chip-created-by-michael-raquel) โดย @adestajo)

  ## 1.4.2 (2025-02-21)
  - คุณสมบัติ
    - แก้ไขปัญหาการสร้าง ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 1.4.1 (2025-02-21)
  - คุณสมบัติ
    - เพิ่มการนำทางเวอร์ชัน, อัปเดตเช็คบอกซ์ ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 1.4.0 (2025-02-21)
  - คุณสมบัติ
    - เพิ่มคอมโพเนนต์การ์ด ([#3f56c1fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3f56c1fedc9a0fcc199f14ba6488ac46bc2b51cf?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Fcard) โดย @jmanalang)

  ## 1.3.2 (2025-02-19)
  - แก้ไข
    - ตาราง (เส้นขอบส่วนหัว)
    - เพิ่มสถานะกำลังโหลด
    - สีแท็บที่ถูกปิดการใช้งาน ([#a49e1136](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a49e11368244092bd821e1284059ea7d85ef23dc?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2Ffix-table) โดย @adestajo)

  ## 1.3.1 (2025-02-19)
  - คุณสมบัติ
    - เพิ่มช่องค้นหาสำหรับประเภทการค้นหา ([#](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ac4bf72bf82c7949b994f9b2da17eadaea580960?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_INPUT_FIELD) โดย @jfabula)

  ## 1.3.0 (2025-02-19)
  - คุณสมบัติ
    - เพิ่มคำนำหน้า spr- ในคลาส, ลบคำนำหน้าคอมโพเนนต์ที่กำหนดเอง ([#3c784d17](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3c784d17198c20f048cfd9cd30485722c4ea51b0?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 1.2.25 (2025-02-19)
  - แก้ไข
    - อวตาร์(สล็อต)- เพิ่มขนาดเริ่มต้น ([#faff2264](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/faff226470ac5558f7534445c05e2e9a2bd8df3a?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FDQA-avatar-icon-size) โดย @adestajo)

  ## 1.2.24 (2025-02-19)
  - แก้ไข
    - เงื่อนไขข้อความทูลทิป ([#ae9c7cba](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae9c7cba240b4800ccbeb762c842fda933d2122f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

## 1.2.23 (2025-02-19)

- แก้ไข
  - ความกว้างสูงสุดของทูลทิป ([#ae9c7cba](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae9c7cba240b4800ccbeb762c842fda933d2122f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

  ## 1.2.22 (2025-02-18)
  - แก้ไข
    - อวตาร์ ([#777b4a30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/777b4a30399fb438fedd984c18c2cd6322f7763c?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FDQA-Avatar) โดย @adestajo)

  ## 1.2.21 (2025-02-18)
  - คุณสมบัติ
    - เพิ่มคอมโพเนนต์แผงด้านข้าง ([#31efa9d2](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/31efa9d2ae91a24c9835b84b05e31200c44e6d65?refName=refs%2Fheads%2F2025%2Ffeature%2Feli%2Fsidepanel) โดย @elumilay)

  ## 1.2.20 (2025-02-18)
  - คุณสมบัติ
    - เพิ่มประสิทธิภาพและเพิ่มการรองรับ HTML สำหรับทูลทิป
      ([#eb477dd4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/eb477dd467721bac7f837856a2233e8240153864?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

  ## 1.2.19 (2025-02-18)
  - คุณสมบัติ
    - เพิ่มคอมโพเนนต์ดรอปดาวน์และเช็คบอกซ์พร้อมเอกสาร
      ([#4583fe30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4583fe3036ca120c5d3e77e12f83783242d4dedf?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdropdown) โดย @jarias)

  ## 1.2.18 (2025-02-17)
  - คุณสมบัติ
    - ตาราง ([#e6dc765d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e6dc765dc7324f5bd41d0001a2ba9c0668c75d9f?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Finitial-tabl) โดย @adestajo)

  ## 1.2.17 (2025-02-13)
  - แก้ไข: สไตล์อินพุตและปุ่ม ([#c381653a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c381653ac879038e8913ba917eb3261aa86bc41f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fselect) โดย @jarias)

  ## 1.2.16 (2025-02-07)
  - แก้ไข
    - อัปเดตคลัง Pinia สำหรับคอมโพเนนต์ snackbar ([#759c761c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/759c761ca57201d1411927133e56602844aabcff?refName=refs/heads/2025/FIX/Paulo/UPDATED_PINIA_STORE_FOR_SNACKBAR) โดย @jbanares)

  ## 1.2.15 (2025-02-07)
  - คุณสมบัติ
    - Commit 97d44216: ส่งข้อมูลการเรียงลำดับตาราง ([#97d44216](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/97d44216912e82abe1d805dadba5b1f7244d4b37?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

- แก้ไข
  - Commit 609aea96: เพิ่มค่าเริ่มต้นสำหรับรูปภาพสถานะว่าง ([#609aea96](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/609aea961fc07edee42a9d52fb53633f3f665bde?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)
    - เพิ่มกรอบขอบให้กับป้าย ([#7e7ccf7f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e7ccf7f0f2bf65dd88f7cbac550248ebfac5bf7?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

  ## 1.2.14 (2025-02-07)
  - แก้ไข
    - การเคลื่อนที่ของคำนำหน้าและไอคอนในข้อความช่วยเหลือ ([#bd809417](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/ff11dd36-9e5b-4dee-ab48-0999d0a61cfd/commit/bd809417bb06570620683002b3e6e51bb8a6c2ed/) @jfabula)
    - เพิ่มสล็อตเทมเพลตสำหรับคอมโพเนนต์อินพุต ([#e0cc862c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e0cc862cfc70ff97890c1315fb8700b59b75038b?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FINPUT_HELPER_SPACE_PREFIX_AND_ICON) @jfabula)

  ## 1.2.13 (2025-02-07)
  - แก้ไข
    - ตรวจสอบคุณภาพสำหรับการ์ด ([f7c2f293])(https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f7c2f29303d05c8cb5642956f2adcf198241d66d?refName=refs%2Fheads%2F2025%2Ffix%2Fjames%2FDQA-card) โดย @jmanalang

  ## 1.2.12 (2025-02-07)
  - แก้ไข
    - ตรวจสอบคุณภาพและอัปเดตเอกสารสำหรับสถานะ ([#7e8b0ad6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e8b0ad6ea97836c3eda3d5c02737a449814757f?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-status) โดย @dale)

  ## 1.2.11 (2025-02-07)
  - แก้ไข
    - ลบการนำเข้าไอคอนในพื้นที่ทดลอง ([#a659167](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a6591677f381ebb519670f4f493d195d61f2e33c?refName=refs/heads/2025/Fix/andrea/remove-playground-icon-imort) โดย @adestajo)

  ## 1.2.10 (2025-02-07)
  - แก้ไข
    - จำนวนอวตาร์ ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

  ## 1.2.9 (2025-02-07)
  - แก้ไข
    - อักษรย่อในอวตาร์ ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

  ## 1.2.8 (2025-02-07)
  - คุณสมบัติ
    - สถานะ ([#7a1e32e7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1cad1d936be4982da9c521f518a55e7ee04c7a95) โดย @dale)
    - เอกสารสถานะ ([ea8732da](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ea8732da1bfd9bb282989588f3bdefd396707229?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fstatus) โดย @dale)

  ## 1.2.7 (2025-02-07)
  - แก้ไข
    - แก้ไขการนำเข้า Iconify ([#05bbaee9](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/05bbaee9b3b1608e2695341acd913702b8024bbd?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FFIX_ISSUE_WITH_ICONIFY_IMPORTS) โดย @jbanares)

## 1.2.6 (2025-02-07)

- แก้ไข
  - เอกสารแผงด้านข้าง ([#6a1d115f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6a1d115f4fd34a8070bdaf698e99aa9030649619?refName=refs/heads/2025/Fix/andrea/sidepanel-md) โดย @jarias)

## 1.2.5 (2025-02-07)

- แก้ไข
  - ซ่อนแถบเลื่อนตารางและแก้ไขส่วนหัว ([#5073baa8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5073baa830888e89683dc8d53c9635cc59b14bc3?refName=refs/heads/2025/Fix/andrea/DQA-table) โดย @adestajo)

## 1.2.4 (2025-02-07)

- แก้ไข
  - เปลี่ยนการใช้งานของ props การแจ้งเตือนและคำขอ ([#92f9409d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/92f9409d889d11ec596fe1ebb411383beab23b0e?refName=refs%2Fheads%2F2025%2FFIX%2FELI%2FSIDENAV) โดย @elumilay)

## 1.2.3 (2025-02-07)

- แก้ไข
  - ค่าเริ่มต้นทูลทิป ([cc6eb7b4]https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cc6eb7b42e9ccd9996c13785d083bdc678346139?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip-update โดย @jarias)

## 1.2.2 (2025-02-07)

- คุณสมบัติ
  - ฟิลด์อินพุตชื่อผู้ใช้ ([#d001cb3a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d001cb3a51a0ae2c568d4b5e46c44d6dba7d883c?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
  - ฟิลด์อินพุตอีเมล ([#66db9867](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/66db986714fd3315c66c1a20106ad7d018d58450?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
  - ฟิลด์อินพุตรหัสผ่าน ([#fd1614ce](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/fd1614ce492a50b324c5d53ea25705e953d60382?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
  - ฟิลด์อินพุต URL ([#502d7800](hhttps://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/502d7800207a9d09e6e1136d86820250a804d4cb?refName=refs%2Fheads%2F2025%2FFEATURE%2FXyrk%2FSEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
  - ปรับปรุงฟิลด์อินพุตการค้นหา ([#a68a739d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a68a739db3d6fc1767a44939e76a93ecde97d2a5?refName=refs%2Fheads%2F2025%2FFEATURE%2FXyrk%2FSEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)

## 1.2.1 (2025-02-07)

- การปรับปรุง
  - พื้นที่ข้อความแบบอ่านอย่างเดียว ([#93cee4fa](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/93cee4fa229eb85e892c3d45bc994be69334deb7?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)
  - เปลี่ยน timePicker เป็น Kebab Casing ([#cf28f559](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cf28f559ab914d8ed29934c4aaa0986413933013?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)

## 1.2.0 (2025-02-07)

- คุณสมบัติ
  - รูปแบบอวตาร์ ([#257ebf9b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/257ebf9b29d68f8ce44f8c489375757470742abb?refName=refs%2Fheads%2F2025%2FFearure%2Favatar-variant) โดย @adestajo)

## 1.1.9 (2025-02-07)

- คุณสมบัติ
  - ข้อความช่วยเหลืออินพุต ([#0b19d997](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0b19d99758e20c3c05cd1d4b60e18a76d44bdd4c?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)
- แก้ไข
  - แก้ไขโทนสีของ snackbar สำหรับอันตรายและข้อควรระวัง ([#23512c95](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/23512c957be34ab04e640091c2b9e3e98db6b1b8?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)

## 1.1.8 (2025-02-07)

- คุณสมบัติ
  - พื้นที่ข้อความ ([#1c8100f4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1c8100f431890eb773e6faf2cc850bcbd388e896?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Ftextarea) โดย @adestajo)

  ## 1.1.7 (2025-02-07)
  - แก้ไข
    - ตรวจสอบคุณภาพสำหรับแถบนำทางด้านข้างและแผงด้านข้าง ([#e5d81457](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e5d81457a49c5755782bf0e176d1dbb0645e747e?refName=refs/heads/2025/FIX/ELI/SIDENAV) โดย @elumilay)

  ## 1.1.6 (2025-02-07)
  - คุณสมบัติ
    - ชิพส์ - อีเวนต์ที่กำหนดเองและน้ำหนักไอคอน
    - เพิ่มจำนวนสำหรับอวตาร์ ([#831236b7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/831236b7e45ee16da1758ee0737a38428fd2ef37?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Fchip-custom-event) โดย @adestajo)

  ## 1.1.5 (2025-02-07)
  - คุณสมบัติ
    - ทำความสะอาดโค้ดและเอกสาร
    - แนวทางการรวมคลาส
    - ใช้ toRefs สำหรับ Props
    - เปลี่ยน Empty State จาก PNG เป็น SVG
    - ทำให้การค้นหาอินพุตง่ายขึ้น
      ([#5648d141](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5648d1417abfaad9b63077bcb8bd53eefea78783?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 1.1.4 (2025-02-07)
  - คุณสมบัติ
    - ชิพส์ - งานต่อเนื่องโดย Michael Raquel
    - เพิ่มจำนวนสำหรับอวตาร์ ([#02350704](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0235070425f681fdd2197fe427b175addae81e71?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Fcontinuation-chip-created-by-michael-raquel) โดย @adestajo)

  ## 1.1.3 (2025-02-07)
  - คุณสมบัติ
    - แก้ไขปัญหาการสร้าง ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.1.2 (2025-02-07)

- คุณสมบัติ
  - เพิ่มการนำทางเวอร์ชันและอัปเดตเช็คบอกซ์ ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.1.1 (2025-02-07)

- คุณสมบัติ
  - เพิ่มคอมโพเนนต์การ์ด ([#3f56c1fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3f56c1fedc9a0fcc199f14ba6488ac46bc2b51cf?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Fcard) โดย @jmanalang)

## 1.1.0 (2025-02-07)

- แก้ไข
  - ตาราง (เส้นขอบส่วนหัว)
  - เพิ่มสถานะกำลังโหลด
  - สีแท็บที่ถูกปิดการใช้งาน ([#a49e1136](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a49e11368244092bd821e1284059ea7d85ef23dc?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2Ffix-table) โดย @adestajo)

## 1.0.9 (2025-02-07)

- คุณสมบัติ
  - เพิ่มช่องค้นหาสำหรับประเภทการค้นหา ([#](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ac4bf72bf82c7949b994f9b2da17eadaea580960?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_INPUT_FIELD) โดย @jfabula)

## 1.0.8 (2025-02-07)

- คุณสมบัติ
  - เพิ่มคำนำหน้า spr- ในคลาส, ลบคำนำหน้าคอมโพเนนต์ที่กำหนดเอง ([#3c784d17](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3c784d17198c20f048cfd9cd30485722c4ea51b0?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 1.0.7 (2025-02-07)

- แก้ไข
  - อวตาร์(สล็อต)- เพิ่มขนาดเริ่มต้น ([#faff2264](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/faff226470ac5558f7534445c05e2e9a2bd8df3a?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FDQA-avatar-icon-size) โดย @adestajo)

## 1.0.6 (2025-02-07)

- แก้ไข
  - เงื่อนไขข้อความทูลทิป ([#ae9c7cba](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae9c7cba240b4800ccbeb762c842fda933d2122f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

## 1.0.5 (2025-02-07)

- แก้ไข
  - ความกว้างสูงสุดของทูลทิป ([#ae9c7cba](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae9c7cba240b4800ccbeb762c842fda933d2122f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

  ## 1.0.4 (2025-02-07)
  - แก้ไข
    - อวตาร์ ([#777b4a30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/777b4a30399fb438fedd984c18c2cd6322f7763c?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FDQA-Avatar) โดย @adestajo)

  ## 1.0.3 (2025-02-07)
  - คุณสมบัติ
    - เพิ่มคอมโพเนนต์แผงด้านข้าง ([#31efa9d2](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/31efa9d2ae91a24c9835b84b05e31200c44e6d65?refName=refs%2Fheads%2F2025%2Ffeature%2Feli%2Fsidepanel) โดย @elumilay)

  ## 1.0.2 (2025-02-07)
  - คุณสมบัติ
    - เพิ่มประสิทธิภาพและเพิ่มการรองรับ HTML สำหรับทูลทิป
      ([#eb477dd4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/eb477dd467721bac7f837856a2233e8240153864?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

  ## 1.0.1 (2025-02-07)
  - คุณสมบัติ
    - เพิ่มคอมโพเนนต์ดรอปดาวน์และเช็คบอกซ์พร้อมเอกสารประกอบ
      ([#4583fe30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4583fe3036ca120c5d3e77e12f83783242d4dedf?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdropdown) โดย @jarias)

## 1.0.0 (2025-02-07)

- คุณสมบัติ
  - ตาราง ([#e6dc765d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e6dc765dc7324f5bd41d0001a2ba9c0668c75d9f?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Finitial-tabl) โดย @adestajo)

  ## 0.9.9 (2025-02-07)
  - แก้ไข: รูปแบบอินพุตและปุ่ม ([#c381653a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c381653ac879038e8913ba917eb3261aa86bc41f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fselect) โดย @jarias)

  ## 0.9.8 (2025-02-07)
  - แก้ไข
    - อัปเดตคลัง Pinia สำหรับคอมโพเนนต์ snackbar ([#759c761c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/759c761ca57201d1411927133e56602844aabcff?refName=refs/heads/2025/FIX/Paulo/UPDATED_PINIA_STORE_FOR_SNACKBAR) โดย @jbanares)

  ## 0.9.7 (2025-02-07)
  - คุณสมบัติ
    - Commit 97d44216: ส่งการเรียงลำดับตาราง ([#97d44216](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/97d44216912e82abe1d805dadba5b1f7244d4b37?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

- แก้ไข
  - Commit 609aea96: เพิ่มค่าเริ่มต้นสำหรับรูปภาพสถานะว่าง ([#609aea96](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/609aea961fc07edee42a9d52fb53633f3f665bde?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)
    - เพิ่มกรอบขอบป้าย ([#7e7ccf7f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e7ccf7f0f2bf65dd88f7cbac550248ebfac5bf7?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

  ## 0.9.6 (2025-02-07)
  - แก้ไข
    - การย้ายตำแหน่งของคำนำหน้าและไอคอนบนข้อความช่วยเหลือ ([#bd809417](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/ff11dd36-9e5b-4dee-ab48-0999d0a61cfd/commit/bd809417bb06570620683002b3e6e51bb8a6c2ed/) @jfabula)
    - เพิ่มช่องใส่เทมเพลตสำหรับคอมโพเนนต์อินพุต ([#e0cc862c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e0cc862cfc70ff97890c1315fb8700b59b75038b?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FINPUT_HELPER_SPACE_PREFIX_AND_ICON) @jfabula)

  ## 0.9.5 (2025-02-07)
  - แก้ไข
    - ตรวจสอบคุณภาพการ์ด ([f7c2f293])(https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f7c2f29303d05c8cb5642956f2adcf198241d66d?refName=refs%2Fheads%2F2025%2Ffix%2Fjames%2FDQA-card) โดย @jmanalang

## 0.9.4 (2025-02-07)

- แก้ไข
  - ตรวจสอบคุณภาพและอัปเดตเอกสารสำหรับสถานะ ([#7e8b0ad6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e8b0ad6ea97836c3eda3d5c02737a449814757f?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-status) โดย @dale)

  ## 0.9.3 (2025-02-07)
  - แก้ไข
    - ลบไอคอนที่นำเข้าในพื้นที่ทดลอง ([#a659167](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a6591677f381ebb519670f4f493d195d61f2e33c?refName=refs/heads/2025/Fix/andrea/remove-playground-icon-imort) โดย @adestajo)

  ## 0.9.2 (2025-02-07)
  - แก้ไข
    - จำนวนอวตาร์ ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

## 0.9.1 (2025-02-07)

- แก้ไข
  - อินิเชียลอวตาร์ ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

  ## 0.9.0 (2025-02-07)
  - คุณสมบัติ
    - สถานะ ([#7a1e32e7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1cad1d936be4982da9c521f518a55e7ee04c7a95) โดย @dale)
    - เอกสารสถานะ ([ea8732da](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ea8732da1bfd9bb282989588f3bdefd396707229?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fstatus) โดย @dale)

  ## 0.8.9 (2025-02-07)
  - แก้ไข
    - แก้ไขการนำเข้า Iconify ([#05bbaee9](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/05bbaee9b3b1608e2695341acd913702b8024bbd?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FFIX_ISSUE_WITH_ICONIFY_IMPORTS) โดย @jbanares)

  ## 0.8.8 (2025-02-07)
  - แก้ไข
    - เอกสารประกอบแผงด้านข้าง ([#6a1d115f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6a1d115f4fd34a8070bdaf698e99aa9030649619?refName=refs/heads/2025/Fix/andrea/sidepanel-md) โดย @jarias)

## 0.8.7 (2025-02-07)

- แก้ไข
  - ซ่อนแถบเลื่อนตารางและแก้ไขส่วนหัว ([#5073baa8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5073baa830888e89683dc8d53c9635cc59b14bc3?refName=refs/heads/2025/Fix/andrea/DQA-table) โดย @adestajo)

  ## 0.8.6 (2025-02-07)
  - แก้ไข
    - เปลี่ยนการใช้งาน props ของ Notif และ Request ([#92f9409d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/92f9409d889d11ec596fe1ebb411383beab23b0e?refName=refs%2Fheads%2F2025%2FFIX%2FELI%2FSIDENAV) โดย @elumilay)

  ## 0.8.5 (2025-02-07)
  - แก้ไข
    - ค่าเริ่มต้นทูลทิป ([cc6eb7b4]https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cc6eb7b42e9ccd9996c13785d083bdc678346139?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip-update โดย @jarias)

## 0.8.4 (2025-02-07)

- คุณสมบัติ
  - ฟิลด์อินพุตชื่อผู้ใช้ ([#d001cb3a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d001cb3a51a0ae2c568d4b5e46c44d6dba7d883c?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์อินพุตอีเมล ([#66db9867](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/66db986714fd3315c66c1a20106ad7d018d58450?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์อินพุตรหัสผ่าน ([#fd1614ce](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/fd1614ce492a50b324c5d53ea25705e953d60382?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์อินพุต URL ([#502d7800](hhttps://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/502d7800207a9d09e6e1136d86820250a804d4cb?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ปรับปรุงฟิลด์อินพุตการค้นหา ([#a68a739d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a68a739db3d6fc1767a44939e76a93ecde97d2a5?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)

  ## 0.8.3 (2025-02-07)
  - การดูแล
    - textarea ที่อ่านได้อย่างเดียว ([#93cee4fa](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/93cee4fa229eb85e892c3d45bc994be69334deb7?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)
    - แปลง timePicker เป็น Kebab Casing ([#cf28f559](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cf28f559ab914d8ed29934c4aaa0986413933013?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)

  ## 0.8.2 (2025-02-07)
  - คุณสมบัติ
    - รูปแบบอวตาร์ ([#257ebf9b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/257ebf9b29d68f8ce44f8c489375757470742abb?refName=refs%2Fheads%2F2025%2FFearure%2Favatar-variant) โดย @adestajo)

## 0.8.1 (2025-02-07)

- คุณสมบัติ
  - ข้อความช่วยเหลืออินพุต ([#0b19d997](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0b19d99758e20c3c05cd1d4b60e18a76d44bdd4c?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)
  - แก้ไข
    - แก้ไขโทนแจ้งเตือนสำหรับอันตรายและข้อควรระวัง ([#23512c95](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/23512c957be34ab04e640091c2b9e3e98db6b1b8?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)

  ## 0.8.0 (2025-02-07)
  - คุณสมบัติ
    - พื้นที่ข้อความ ([#1c8100f4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1c8100f431890eb773e6faf2cc850bcbd388e896?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Ftextarea) โดย @adestajo)

  ## 0.7.9 (2025-02-07)
  - แก้ไข
    - ตรวจสอบคุณภาพสำหรับแถบด้านข้างและแผงด้านข้าง ([#e5d81457](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e5d81457a49c5755782bf0e176d1dbb0645e747e?refName=refs/heads/2025/FIX/ELI/SIDENAV) โดย @elumilay)

## 0.7.8 (2025-02-07)

- คุณสมบัติ
  - ชิพส์ - อีเวนต์ที่กำหนดเองและน้ำหนักไอคอน
    - เพิ่มจำนวนนับสำหรับอวตาร์ ([#831236b7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/831236b7e45ee16da1758ee0737a38428fd2ef37?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Fchip-custom-event) โดย @adestajo)

  ## 0.7.7 (2025-02-07)
  - คุณสมบัติ
    - การทำความสะอาดโค้ดและเอกสาร
    - แนวทางการรวมคลาส
    - ใช้ toRefs สำหรับ Props
    - เปลี่ยนสถานะว่างจาก PNG เป็น SVG
    - ทำให้การค้นหาอินพุตง่ายขึ้น
      ([#5648d141](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5648d1417abfaad9b63077bcb8bd53eefea78783?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 0.7.6 (2025-02-07)
  - คุณสมบัติ
    - ชิพส์ - การทำงานต่อเนื่องที่สร้างโดย Michael Raquel
    - เพิ่มจำนวนนับสำหรับอวตาร์ ([#02350704](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0235070425f681fdd2197fe427b175addae81e71?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Fcontinuation-chip-created-by-michael-raquel) โดย @adestajo)

## 0.7.5 (2025-02-07)

- คุณสมบัติ
  - แก้ไขปัญหาการสร้าง ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 0.7.4 (2025-02-07)
  - คุณสมบัติ
    - เพิ่มการนำทางเวอร์ชัน, อัปเดตเช็คบ็อกซ์ ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 0.7.3 (2025-02-07)
  - คุณสมบัติ
    - เพิ่มคอมโพเนนต์การ์ด ([#3f56c1fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3f56c1fedc9a0fcc199f14ba6488ac46bc2b51cf?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Fcard) โดย @jmanalang)

## 0.7.2 (2025-02-07)

- แก้ไข
  - ตาราง (เส้นขอบส่วนหัว)
  - เพิ่มสถานะกำลังโหลด
  - สีปุ่มที่ถูกปิดใช้งาน ([#a49e1136](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a49e11368244092bd821e1284059ea7d85ef23dc?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2Ffix-table) โดย @adestajo)

## 0.7.1 (2025-02-07)

- คุณสมบัติ
  - เพิ่ม Dropdown และ Checkbox component พร้อมเอกสารประกอบ
    ([#4583fe30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4583fe3036ca120c5d3e77e12f83783242d4dedf?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdropdown) โดย @jarias)

## 0.6.2 (2025-02-07)

- คุณสมบัติ
  - ตาราง ([#e6dc765d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e6dc765dc7324f5bd41d0001a2ba9c0668c75d9f?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Finitial-tabl) โดย @adestajo)

  ## 0.6.1 (2025-02-07)
  - แก้ไข: รูปแบบอินพุตและปุ่ม ([#c381653a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c381653ac879038e8913ba917eb3261aa86bc41f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fselect) โดย @jarias)

  ## 0.6.0 (2025-02-07)
  - แก้ไข
    - อัปเดตคลัง Pinia สำหรับคอมโพเนนต์แจ้งเตือน ([#759c761c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/759c761ca57201d1411927133e56602844aabcff?refName=refs/heads/2025/FIX/Paulo/UPDATED_PINIA_STORE_FOR_SNACKBAR) โดย @jbanares)

  ## 0.5.9 (2025-02-07)
  - คุณสมบัติ
    - Commit 97d44216: ส่งการเรียงลำดับตาราง ([#97d44216](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/97d44216912e82abe1d805dadba5b1f7244d4b37?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

- แก้ไข
  - Commit 609aea96: เพิ่มค่าเริ่มต้นสำหรับรูปภาพสถานะว่าง ([#609aea96](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/609aea961fc07edee42a9d52fb53633f3f665bde?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)
  - เพิ่มกรอบขอบป้าย ([#7e7ccf7f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e7ccf7f0f2bf65dd88f7cbac550248ebfac5bf7?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

## 0.5.8 (2025-02-07)

- แก้ไข
  - การย้ายตำแหน่งของคำนำหน้าและไอคอนบนข้อความช่วยเหลือ ([#bd809417](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/ff11dd36-9e5b-4dee-ab48-0999d0a61cfd/commit/bd809417bb06570620683002b3e6e51bb8a6c2ed/) @jfabula)
  - เพิ่มช่องใส่เทมเพลตสำหรับคอมโพเนนต์อินพุต ([#e0cc862c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e0cc862cfc70ff97890c1315fb8700b59b75038b?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FINPUT_HELPER_SPACE_PREFIX_AND_ICON) @jfabula)

## 0.5.7 (2025-02-07)

- แก้ไข
  - ตรวจสอบคุณภาพการ์ด ([f7c2f293])(https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f7c2f29303d05c8cb5642956f2adcf198241d66d?refName=refs%2Fheads%2F2025%2Ffix%2Fjames%2FDQA-card) โดย @jmanalang

## 0.5.6 (2025-02-07)

- แก้ไข
  - ตรวจสอบคุณภาพและอัปเดตเอกสารสำหรับสถานะ ([#7e8b0ad6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e8b0ad6ea97836c3eda3d5c02737a449814757f?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-status) โดย @dale)

## 0.5.5 (2025-02-07)

- แก้ไข
  - ลบไอคอนที่นำเข้าในพื้นที่ทดลอง ([#a659167](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a6591677f381ebb519670f4f493d195d61f2e33c?refName=refs/heads/2025/Fix/andrea/remove-playground-icon-imort) โดย @adestajo)

## 0.5.4 (2025-02-07)

- แก้ไข
  - จำนวนอวตาร ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

## 0.5.3 (2025-02-07)

- แก้ไข
  - อวตารเริ่มต้น ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

## 0.5.2 (2025-02-07)

- คุณสมบัติ
  - สถานะ ([#7a1e32e7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1cad1d936be4982da9c521f518a55e7ee04c7a95) โดย @dale)
  - เอกสารสถานะ ([ea8732da](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ea8732da1bfd9bb282989588f3bdefd396707229?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fstatus) โดย @dale)

## 0.5.1 (2025-02-07)

- แก้ไข
  - แก้ไขการนำเข้า Iconify ([#05bbaee9](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/05bbaee9b3b1608e2695341acd913702b8024bbd?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FFIX_ISSUE_WITH_ICONIFY_IMPORTS) โดย @jbanares)

## 0.5.0 (2025-02-07)

- แก้ไข
  - เอกสารประกอบแผงด้านข้าง ([#6a1d115f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6a1d115f4fd34a8070bdaf698e99aa9030649619?refName=refs/heads/2025/Fix/andrea/sidepanel-md) โดย @jarias)

## 0.4.9 (2025-02-07)

- แก้ไข
  - ซ่อนแถบเลื่อนตารางและแก้ไขส่วนหัว ([#5073baa8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5073baa830888e89683dc8d53c9635cc59b14bc3?refName=refs/heads/2025/Fix/andrea/DQA-table) โดย @adestajo)

## 0.4.8 (2025-02-07)

- แก้ไข
  - เปลี่ยนการใช้งาน props ของ Notif และ Request ([#92f9409d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/92f9409d889d11ec596fe1ebb411383beab23b0e?refName=refs%2Fheads%2F2025%2FFIX%2FELI%2FSIDENAV) โดย @elumilay)

  ## 0.4.7 (2025-02-07)
  - แก้ไข
    - ค่าเริ่มต้นทูลทิป ([cc6eb7b4]https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cc6eb7b42e9ccd9996c13785d083bdc678346139?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip-update โดย @jarias)

  ## 0.4.6 (2025-02-07)
  - คุณสมบัติ
    - ฟิลด์ชื่อผู้ใช้ ([#d001cb3a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d001cb3a51a0ae2c568d4b5e46c44d6dba7d883c?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์อีเมล ([#66db9867](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/66db986714fd3315c66c1a20106ad7d018d58450?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์รหัสผ่าน ([#fd1614ce](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/fd1614ce492a50b324c5d53ea25705e953d60382?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ฟิลด์ URL ([#502d7800](hhttps://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/502d7800207a9d09e6e1136d86820250a804d4cb?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ปรับปรุงฟิลด์ค้นหา ([#a68a739d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a68a739db3d6fc1767a44939e76a93ecde97d2a5?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)

## 0.4.5 (2025-02-07)

- Chore
  - textarea ที่อ่านได้อย่างเดียว ([#93cee4fa](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/93cee4fa229eb85e892c3d45bc994be69334deb7?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)
  - แปลง timePicker เป็น Kebab Casing ([#cf28f559](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cf28f559ab914d8ed29934c4aaa0986413933013?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)

## 0.4.4 (2025-02-07)

- คุณสมบัติ
  - รูปแบบอวตาร์ ([#257ebf9b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/257ebf9b29d68f8ce44f8c489375757470742abb?refName=refs%2Fheads%2F2025%2FFearure%2Favatar-variant) โดย @adestajo)

## 0.4.3 (2025-02-07)

- คุณสมบัติ
  - ข้อความช่วยเหลือสำหรับอินพุต ([#0b19d997](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0b19d99758e20c3c05cd1d4b60e18a76d44bdd4c?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)
- แก้ไข
  - แก้ไขโทนสีแจ้งเตือนสำหรับอันตรายและข้อควรระวัง ([#23512c95](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/23512c957be34ab04e640091c2b9e3e98db6b1b8?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)

## 0.4.2 (2025-02-07)

- คุณสมบัติ
  - Textarea ([#1c8100f4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1c8100f431890eb773e6faf2cc850bcbd388e896?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Ftextarea) โดย @adestajo)

  ## 0.4.1 (2025-02-07)
  - แก้ไข
    - การตรวจสอบคุณภาพสำหรับ sidenav และ sidepanel ([#e5d81457](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e5d81457a49c5755782bf0e176d1dbb0645e747e?refName=refs/heads/2025/FIX/ELI/SIDENAV) โดย @elumilay)

  ## 0.4.0 (2025-02-07)
  - คุณสมบัติ
    - ชิพส์ - อีเวนต์ที่กำหนดเองและน้ำหนักไอคอน
    - เพิ่มจำนวนนับสำหรับอวตาร์ ([#831236b7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/831236b7e45ee16da1758ee0737a38428fd2ef37?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Fchip-custom-event) โดย @adestajo)

## 0.3.9 (2025-02-07)

- คุณสมบัติ
  - การทำความสะอาดโค้ดและเอกสาร
    - วิธีการคอมไพล์คลาส
    - ใช้ toRefs สำหรับ Props
    - เปลี่ยน Empty State จาก PNG เป็น SVG
    - ทำให้ Input Search เรียบง่ายขึ้น
      ([#5648d141](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5648d1417abfaad9b63077bcb8bd53eefea78783?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 0.3.8 (2025-02-07)
  - คุณสมบัติ
    - Chips - งานต่อเนื่องที่สร้างโดย Michael Raquel
    - เพิ่มจำนวนนับสำหรับ Avatar ([#02350704](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0235070425f681fdd2197fe427b175addae81e71?refName=refs%2Fheads%2F2025%2Ffeat%2Fandrea%2Fcontinuation-chip-created-by-michael-raquel) โดย @adestajo)

  ## 0.3.7 (2025-02-07)
  - คุณสมบัติ
    - แก้ไขปัญหาการ Build ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

## 0.3.6 (2025-02-07)

- คุณสมบัติ
  - เพิ่มการนำทางเวอร์ชัน, อัปเดตเช็คบ็อกซ์ ([#1bec8905](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1bec89052c0c5244c8fca455b613e989e77f4681?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 0.3.5 (2025-02-07)
  - คุณสมบัติ
  - เพิ่ม card component ([#3f56c1fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3f56c1fedc9a0fcc199f14ba6488ac46bc2b51cf?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Fcard) โดย @jmanalang)
    - เพิ่มคอมโพเนนต์การ์ด ([#3f56c1fe](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3f56c1fedc9a0fcc199f14ba6488ac46bc2b51cf?refName=refs%2Fheads%2F2025%2Ffeature%2Fjames%2Fcard) โดย @jmanalang)

## 0.3.4 (2025-02-07)

## 0.3.4 (2025-02-07)

- แก้ไข
  - แก้ไขle (header Border)
    - ตาราง (เส้นขอบส่วนหัว)
    - เพิ่มสถานะกำลังโหลด([#a49e1136](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a49e11368244092bd821e1284059ea7d85ef23dc?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2Ffix-table) โดย @adestajo)
    - สีแท็บที่ปิดใช้งาน ([#a49e1136](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a49e11368244092bd821e1284059ea7d85ef23dc?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2Ffix-table) โดย @adestajo)

## 0.3.3 (2025-02-07)

- คุณสมบัติ
  - เพิ่มอินพุตการค้นหาสำหรับประเภทการค้นหา ([#](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ac4bf72bf82c7949b994f9b2da17eadaea580960?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_INPUT_FIELD) โดย @jfabula)

  ## 0.3.2 (2025-02-07)
  - คุณสมบัติ
    - เพิ่มคำนำหน้า spr- ในคลาส, ลบคำนำหน้าคอมโพเนนต์ที่กำหนดเอง ([#3c784d17](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/3c784d17198c20f048cfd9cd30485722c4ea51b0?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)

  ## 0.3.1 (2025-02-07)
  - แก้ไข
    - อวทาร์(สล็อต)- เพิ่มขนาดเริ่มต้น ([#faff2264](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/faff226470ac5558f7534445c05e2e9a2bd8df3a?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FDQA-avatar-icon-size) โดย @adestajo)

## 0.3.0 (2025-02-07)

- แก้ไข
  - เงื่อนไขข้อความทูลทิป ([#ae9c7cba](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae9c7cba240b4800ccbeb762c842fda933d2122f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

  ## 0.2.9 (2025-02-07)
  - แก้ไข
    - ความกว้างสูงสุดของทูลทิป ([#ae9c7cba](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ae9c7cba240b4800ccbeb762c842fda933d2122f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

## 0.2.8 (2025-02-07)

- แก้ไข
  - อวตาร ([#777b4a30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/777b4a30399fb438fedd984c18c2cd6322f7763c?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FDQA-Avatar) โดย @adestajo)

  ## 0.2.7 (2025-02-07)
  - คุณสมบัติ
    - เพิ่มคอมโพเนนต์แผงด้านข้าง ([#31efa9d2](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/31efa9d2ae91a24c9835b84b05e31200c44e6d65?refName=refs%2Fheads%2F2025%2Ffeature%2Feli%2Fsidepanel) โดย @elumilay)

## 0.2.6 (2025-02-07)

- คุณสมบัติ
  - เพิ่มประสิทธิภาพและรองรับ HTML สำหรับทูลทิป
    ([#eb477dd4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/eb477dd467721bac7f837856a2233e8240153864?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip) โดย @jarias)

## 0.2.5 (2025-02-07)

- คุณสมบัติ
  - เพิ่มคอมโพเนนต์ดรอปดาวน์และเช็คบ็อกซ์พร้อมเอกสารประกอบ
    ([#4583fe30](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/4583fe3036ca120c5d3e77e12f83783242d4dedf?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fdropdown) โดย @jarias)

## 0.2.4 (2025-02-07)

- คุณสมบัติ
  - Table ([#e6dc765d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e6dc765dc7324f5bd41d0001a2ba9c0668c75d9f?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Finitial-tabl) โดย @adestajo)

## 0.2.3 (2025-02-07)

- แก้ไข: รูปแบบอินพุตและปุ่ม ([#c381653a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c381653ac879038e8913ba917eb3261aa86bc41f?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fselect) โดย @jarias)

## 0.2.2 (2025-02-07)

- แก้ไข
  - อัปเดตคลัง Pinia สำหรับคอมโพเนนต์แจ้งเตือน ([#759c761c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/759c761ca57201d1411927133e56602844aabcff?refName=refs/heads/2025/FIX/Paulo/UPDATED_PINIA_STORE_FOR_SNACKBAR) โดย @jbanares)

## 0.2.1 (2025-02-07)

- คุณสมบัติ
  - Commit 97d44216: ส่งการเรียงลำดับตาราง ([#97d44216](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/97d44216912e82abe1d805dadba5b1f7244d4b37?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

- แก้ไข
  - Commit 609aea96: เพิ่มค่าเริ่มต้นสำหรับรูปภาพสถานะว่าง ([#609aea96](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/609aea961fc07edee42a9d52fb53633f3f665bde?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)
    - เพิ่มกรอบสำหรับป้ายกำกับ ([#7e7ccf7f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e7ccf7f0f2bf65dd88f7cbac550248ebfac5bf7?refName=refs/heads/2025/Feature/andrea/added-badge-table) โดย @adestajo)

## 0.2.0 (2025-02-07)

- แก้ไข
  - การย้ายตำแหน่งของคำนำหน้าและไอคอนบนข้อความช่วยเหลือ ([#bd809417](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/ff11dd36-9e5b-4dee-ab48-0999d0a61cfd/commit/bd809417bb06570620683002b3e6e51bb8a6c2ed/) @jfabula)
    - เพิ่ม template slots สำหรับคอมโพเนนต์อินพุต ([#e0cc862c](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e0cc862cfc70ff97890c1315fb8700b59b75038b?refName=refs%2Fheads%2F2025%2FFIX%2FXyrk%2FINPUT_HELPER_SPACE_PREFIX_AND_ICON) @jfabula)

## 0.1.9 (2025-02-07)

- แก้ไข
  - ตรวจสอบคุณภาพและทดสอบสำหรับคอมโพเนนต์การ์ด ([f7c2f293])(https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/f7c2f29303d05c8cb5642956f2adcf198241d66d?refName=refs%2Fheads%2F2025%2Ffix%2Fjames%2FDQA-card) โดย @jmanalang

## 0.1.8 (2025-02-07)

- แก้ไข
  - DQA และอัปเดตเอกสารสำหรับสถานะ ([#7e8b0ad6](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/7e8b0ad6ea97836c3eda3d5c02737a449814757f?refName=refs%2Fheads%2F2025%2Ffix%2Fdale%2FDQA-status) โดย @dale)

## 0.1.7 (2025-02-07)

- แก้ไข
  - ลบไอคอนที่นำเข้าในส่วน Playground ([#a659167](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a6591677f381ebb519670f4f493d195d61f2e33c?refName=refs/heads/2025/Fix/andrea/remove-playground-icon-imort) โดย @adestajo)

## 0.1.6 (2025-02-07)

- แก้ไข
  - จำนวนอวตาร ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

## 0.1.5 (2025-02-07)

- แก้ไข
  - อวตารเริ่มต้น ([#c621772](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/c621772f6d4a44596edae878f13bba535399d4b8?refName=refs%2Fheads%2F2025%2FFix%2Fandrea%2FPOLY-41) โดย @adestajo)

## 0.1.4 (2025-02-07)

- คุณสมบัติ
  - สถานะ ([#7a1e32e7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1cad1d936be4982da9c521f518a55e7ee04c7a95) โดย @dale)
    - เอกสารประกอบสถานะ ([ea8732da](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/ea8732da1bfd9bb282989588f3bdefd396707229?refName=refs%2Fheads%2F2025%2Ffeature%2Fdale%2Fstatus) โดย @dale)

## 0.1.3 (2025-02-07)

- แก้ไข
  - แก้ไขการนำเข้า Iconify ([#05bbaee9](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/05bbaee9b3b1608e2695341acd913702b8024bbd?refName=refs%2Fheads%2F2025%2FFIX%2FPaulo%2FFIX_ISSUE_WITH_ICONIFY_IMPORTS) โดย @jbanares)

## 0.1.2 (2025-02-07)

- แก้ไข
  - เอกสารประกอบ SidePanel ([#6a1d115f](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/6a1d115f4fd34a8070bdaf698e99aa9030649619?refName=refs/heads/2025/Fix/andrea/sidepanel-md) โดย @jarias)

## 0.1.1 (2025-02-07)

- แก้ไข
  - ซ่อนแถบเลื่อนของตารางและแก้ไขส่วนหัว ([#5073baa8](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5073baa830888e89683dc8d53c9635cc59b14bc3?refName=refs/heads/2025/Fix/andrea/DQA-table) โดย @adestajo)

## 0.1.0 (2025-02-07)

- แก้ไข
  - แก้ไขการใช้งาน props ของ Notif และ Request ([#92f9409d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/92f9409d889d11ec596fe1ebb411383beab23b0e?refName=refs%2Fheads%2F2025%2FFIX%2FELI%2FSIDENAV) โดย @elumilay)

## 0.0.9 (2025-02-07)

- แก้ไข
  - ค่าเริ่มต้นของทูลทิป ([cc6eb7b4]https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cc6eb7b42e9ccd9996c13785d083bdc678346139?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Ftooltip-update โดย @jarias)

## 0.0.8 (2025-02-07)

- คุณสมบัติ
  - ช่องใส่ชื่อผู้ใช้ ([#d001cb3a](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/d001cb3a51a0ae2c568d4b5e46c44d6dba7d883c?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ช่องใส่อีเมล ([#66db9867](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/66db986714fd3315c66c1a20106ad7d018d58450?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ช่องใส่รหัสผ่าน ([#fd1614ce](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/fd1614ce492a50b324c5d53ea25705e953d60382?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ช่องใส่ URL ([#502d7800](hhttps://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/502d7800207a9d09e6e1136d86820250a804d4cb?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)
    - ปรับปรุงช่องค้นหา ([#a68a739d](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/a68a739db3d6fc1767a44939e76a93ecde97d2a5?refName=refs/heads/2025/FEATURE/Xyrk/SEARCH_USERNAME_EMAIL_PASSWORD_URL_FIELD) โดย @jfabula)

## 0.0.7 (2025-02-07)

- Chore
  - textarea readonly ([#93cee4fa](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/93cee4fa229eb85e892c3d45bc994be69334deb7?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)
  - timePicker to Kebab Casing ([#cf28f559](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/cf28f559ab914d8ed29934c4aaa0986413933013?refName=refs/heads/2025/Chore/andrea/kebabcaseTimepicker) โดย @adestajo)

## 0.0.6 (2025-02-07)

- คุณสมบัติ
  - ชนิดของอวตาร ([#257ebf9b](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/257ebf9b29d68f8ce44f8c489375757470742abb?refName=refs%2Fheads%2F2025%2FFearure%2Favatar-variant) โดย @adestajo)

## 0.0.5 (2025-02-07)

- คุณสมบัติ
  - ข้อความช่วยเหลือสำหรับอินพุต ([#0b19d997](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/0b19d99758e20c3c05cd1d4b60e18a76d44bdd4c?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)
  - แก้ไข
    - แก้ไขโทนสี snackbar สำหรับ danger และ caution ([#23512c95](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/23512c957be34ab04e640091c2b9e3e98db6b1b8?refName=refs%2Fheads%2F2025%2FFEATURE%2FPaulo%2FINPUT_HELPER_MESSAGE) โดย @jbanares)

## 0.0.4 (2025-02-07)

- คุณสมบัติ
  - Textarea ([#1c8100f4](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/1c8100f431890eb773e6faf2cc850bcbd388e896?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Ftextarea) โดย @adestajo)

## 0.0.3 (2025-02-07)

- แก้ไข
  - DQA สำหรับ sidenav และ sidepanel ([#e5d81457](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/e5d81457a49c5755782bf0e176d1dbb0645e747e?refName=refs/heads/2025/FIX/ELI/SIDENAV) โดย @elumilay)

## 0.0.2 (2025-02-07)

- คุณสมบัติ
  - ชิป - อีเวนต์ที่กำหนดเองและน้ำหนักไอคอน
    - เพิ่มจำนวนสำหรับอวตาร ([#831236b7](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/831236b7e45ee16da1758ee0737a38428fd2ef37?refName=refs%2Fheads%2F2025%2FFeature%2Fandrea%2Fchip-custom-event) โดย @adestajo)

## 0.0.1 (2025-02-07)

- คุณสมบัติ
  - โค้ดและการทำความสะอาดเอกสาร
    - แนวทางการรวมคลาส
    - ใช้ toRefs สำหรับ Props
    - เปลี่ยน Empty State จาก PNG เป็น SVG
    - ทำให้ Input Search เรียบง่ายขึ้น
      ([#5648d141](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next/commit/5648d1417abfaad9b63077bcb8bd53eefea78783?refName=refs%2Fheads%2F2025%2Ffeature%2Farias%2Fds-updates) โดย @jarias)
