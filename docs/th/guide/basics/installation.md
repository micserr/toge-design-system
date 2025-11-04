---
title: การติดตั้ง
descripttion: คำแนะนำในการติดตั้งแพ็คเกจ Design System Next จาก Azure Artifacts หรือ npm registry สาธารณะ
outline: deep
---

# การติดตั้ง

> [!IMPORTANT]  
> **Design System Next** เป็น**แพ็คเกจส่วนตัว**ที่โฮสต์บน **Azure Artifacts** คุณต้องเชื่อมต่อกับฟีด Azure Artifacts เพื่อรับรองความถูกต้องและเข้าถึงแพ็คเกจ  
> สำหรับคำแนะนำโดยละเอียด โปรดดูที่ [Connect to Feed Guide](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_artifacts/feed/Design-System-Next/connect)

## เชื่อมต่อกับฟีด Azure Artifacts

ตรวจสอบให้แน่ใจว่าสภาพแวดล้อมการพัฒนาของคุณเชื่อมต่อกับฟีด Azure Artifacts ขั้นตอนนี้เป็นสิ่งจำเป็นสำหรับการรับรองความถูกต้องและเพื่อเข้าถึงแพ็คเกจส่วนตัว หากคุณพบปัญหา โปรดดูที่ [Connect to Feed Guide](https://dev.azure.com/sproutphil/Sprout%20Design%20System/_artifacts/feed/Design-System-Next/connect)

## ติดตั้งแพ็คเกจ

เมื่อเชื่อมต่อแล้ว คุณสามารถติดตั้งแพ็คเกจโดยใช้ npm:

```bash
npm install design-system-next
```

## ทางเลือก: npm Registry สาธารณะ

หากคุณไม่มีสิทธิ์เข้าถึง Azure Artifacts หรือไม่ต้องการใช้ คุณยังมีแพ็คเกจเวอร์ชันสาธารณะที่พร้อมใช้งานบน npm registry:

```bash
npm install design-system-next
```

คุณสามารถดูรายละเอียดแพ็คเกจสาธารณะได้ที่ [npmjs.com/package/design-system-next](https://www.npmjs.com/package/design-system-next)

> [!NOTE]
> เวอร์ชัน npm registry สาธารณะอาจแตกต่างเล็กน้อยจากเวอร์ชัน Azure Artifacts ในแง่ของคุณสมบัติหรือความถี่ในการอัปเดต สำหรับสภาพแวดล้อมการผลิต เราขอแนะนำให้ใช้เวอร์ชัน Azure Artifacts เมื่อเป็นไปได้
