---
title: เส้นทางการตรวจสอบ
description: คอมโพเนนต์เส้นทางการตรวจสอบแสดงบันทึกตามลำดับเวลาของการเปลี่ยนแปลงที่ทำกับบันทึก
outline: deep
---

# เส้นทางการตรวจสอบ

## การใช้งานพื้นฐาน

<div class="spr-w-[400px]">
  <SprAuditTrail :auditTrailLogs="mockTrailLogs" />
</div>

```vue
<template>
  <div class="spr-w-[400px]">
    <SprAuditTrail :auditTrailLogs="mockTrailLogs" />
  </div>
</template>
<script lang="ts" setup>
import SprAuditTrail from '@/components/audit-trail/audit-trail.vue';

import { ref } from 'vue';

const mockTrailLogs = [
  {
    userName: 'แม็กซ์ เวอร์สแตปเปน',
    title: 'แม็กซ์ เวอร์สแตปเปน อัปเดตเมื่อวันที่ 22 ตุลาคม 2025 เวลา 10:30 น.',
    logs: [
      {
        label: ['สถานะ'],
        oldValue: 'ไม่ใช้งาน',
        newValue: 'ใช้งาน',
      },
      {
        label: ['ทดสอบ1', 'ทดสอบ2'],
        oldValue: 'เท็จ',
        newValue: 'จริง',
      },
    ],
  },
  {
    userName: 'ออสการ์ พิแอสทรี',
    title: 'ออสการ์ พิแอสทรี อัปเดตเมื่อวันที่ 21 ตุลาคม 2025 เวลา 12:00 น.',
    logs: [
      {
        label: ['สถานะ'],
        oldValue: 'ไม่ใช้งาน',
        newValue: 'ใช้งาน',
      },
      {
        label: ['ทดสอบ1', 'ทดสอบ2', 'ทดสอบ3'],
        oldValue: 'เท็จ',
        newValue: 'จริง',
      },
    ],
  },
  {
    userName: 'แลนโด นอร์ริส',
    title: 'แลนโด นอร์ริส สร้างเมื่อวันที่ 20 ตุลาคม 2025 เวลา 13:00 น.',
    logs: [
      {
        label: ['สถานะ'],
        oldValue: 'ไม่ใช้งาน',
        newValue: 'ใช้งาน',
      },
      {
        label: ['ทดสอบ1', 'ทดสอบ2', 'ทดสอบ3'],
        oldValue: 'เท็จ',
        newValue: 'จริง',
      },
    ],
  },
];
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
      <td><code>auditTrailLogs</code></td>
      <td>
        <p>รายการรายการบันทึกเส้นทางการตรวจสอบ หากไม่ได้ระบุ avatarUrl จะแสดงอวาตาร์เริ่มต้น (ตัวอักษรย่อตาม userName)</p>
      </td>
      <td>
        <code>
          {
            userName: string;
            title: string;
            avatarUrl?: string;
            logs: {
              label: string[];
              oldValue: string;
              newValue: string;
            }[];
          }[];
        </code>              
      </td>
      <td>[]</td>
    </tr>
    <tr>
      <td><code>alwaysOpen</code></td>
      <td>
        <p>เมื่อเป็นจริง รายการบันทึกจะยังคงเปิดเมื่อเปิดรายการอื่น</p>
      </td>
      <td>boolean</td>
      <td>true</td>
    </tr>  
  </tbody>
</table>

<script lang="ts" setup>  
  import SprAuditTrail from '@/components/audit-trail/audit-trail.vue'
    
    import { ref } from 'vue'

    const mockTrailLogs = [
    {
    userName: 'แม็กซ์ เวอร์สแตปเปน',
    title: 'แม็กซ์ เวอร์สแตปเปน อัปเดตเมื่อวันที่ 22 ตุลาคม 2025 เวลา 10:30 น.',
    logs: [
      {
      label: ['สถานะ'],
      oldValue: 'ไม่ใช้งาน',
      newValue: 'ใช้งาน',
      },
      {
      label: ['ทดสอบ1', 'ทดสอบ2'],
      oldValue: 'เท็จ',
      newValue: 'จริง',
      },
    ],
    },
    {
    userName: 'ออสการ์ พิแอสทรี',
    title: 'ออสการ์ พิแอสทรี อัปเดตเมื่อวันที่ 21 ตุลาคม 2025 เวลา 12:00 น.',
    logs: [
      {
      label: ['สถานะ'],
      oldValue: 'ไม่ใช้งาน',
      newValue: 'ใช้งาน',
      },
      {
      label: ['ทดสอบ1', 'ทดสอบ2', 'ทดสอบ3'],
      oldValue: 'เท็จ',
      newValue: 'จริง',
      },
    ],
    },
    {
    userName: 'แลนโด นอร์ริส',
    title: 'แลนโด นอร์ริส สร้างเมื่อวันที่ 20 ตุลาคม 2025 เวลา 13:00 น.',
    logs: [
      {
      label: ['สถานะ'],
      oldValue: 'ไม่ใช้งาน',
      newValue: 'ใช้งาน',
      },
      {
      label: ['ทดสอบ1', 'ทดสอบ2', 'ทดสอบ3'],
      oldValue: 'เท็จ',
      newValue: 'จริง',
      },
    ],
    },
];

</script>
