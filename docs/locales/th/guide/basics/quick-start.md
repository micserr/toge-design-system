---
title: เริ่มใช้งานด่วน
descripttion: คำแนะนำเริ่มใช้งานด่วนเพื่อให้คุณเริ่มใช้งาน Design System Next ในแอปพลิเคชัน Vue ของคุณ
outline: deep
---

# เริ่มใช้งานด่วน

### นำเข้าไลบรารี

ก่อนอื่น นำเข้าไลบรารีและสไตล์ จากนั้นใช้เป็นปลั๊กอินในแอป Vue ของคุณ:

```javascript
import SproutDesignSystem from 'design-system-next'; // [!code ++]

import 'design-system-next/style.css'; // นำเข้าสไตล์ของไลบรารี // [!code ++]
import App from './App.vue';

const app = createApp(App);

app.use(SproutDesignSystem); // ลงทะเบียนปลั๊กอินระบบการออกแบบ // [!code ++]
app.mount('#app');
```

### คำนำหน้าคอมโพเนนต์เริ่มต้น

โดยค่าเริ่มต้น คอมโพเนนต์ทั้งหมดจะมีคำนำหน้า `spr-` ตัวอย่างเช่น คอมโพเนนต์ปุ่มจะใช้เป็น `<spr-button />`

### ตัวเลือกการใช้งาน

มีสองวิธีในการใช้คอมโพเนนต์จาก Design System:

#### 1. การลงทะเบียนส่วนกลาง (แนะนำสำหรับแอปส่วนใหญ่)

หลังจากใช้ `app.use(SproutDesignSystem)` คอมโพเนนต์ทั้งหมดจะพร้อมใช้งานส่วนกลางโดยอัตโนมัติด้วยคำนำหน้า `spr-`:

```vue
<template>
  <spr-button>คลิกฉัน</spr-button>
  <spr-input v-model="value" />
</template>
```

#### 2. นำเข้าที่เลือกได้ (สำหรับบัณฑลที่ปรับให้เหมาะสม)

นำเข้าคอมโพเนนต์เฉพาะที่คุณต้องการเพื่อลดขนาดบัณฑล:

```javascript
import { Button, Input } from 'design-system-next';
```

```vue
<template>
  <Button>คลิกฉัน</Button>
  <Input v-model="value" />
</template>

<script setup>
import { Button, Input } from 'design-system-next';
import { ref } from 'vue';

const value = ref('');
</script>
```

**รองรับ TypeScript:** คุณยังสามารถนำเข้าประเภท TypeScript สำหรับคอมโพเนนต์:

```typescript
import { Button, ButtonPropTypes, ButtonEmitTypes } from 'design-system-next';
import type { InputPropTypes, AvatarPropTypes } from 'design-system-next';
```

::: tip
ใช้การนำเข้าที่เลือกได้เมื่อขนาดบัณฑลเป็นสิ่งสำคัญ หรือใช้การลงทะเบียนส่วนกลางเพื่อความสะดวก
:::
