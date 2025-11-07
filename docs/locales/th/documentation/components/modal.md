---
title: โมดอล
descripttion: โมดอลเป็นคอมโพเนนต์ UI ที่หลากหลายซึ่งช่วยให้คุณแสดงข้อมูลสำคัญ การแจ้งเตือน หรือพรอมต์แก่ผู้ใช้โดยไม่ต้องให้ผู้ใช้ออกจากหน้าเว็บปัจจุบัน โดยทั่วไปจะประกอบด้วยส่วนหัว เนื้อหา และส่วนท้าย สามารถนำเสนอได้ทุกอย่างตั้งแต่องค์ประกอบแจ้งเตือนไปจนถึงแบบฟอร์ม โมดอลสามารถปิดได้โดยผู้ใช้ ซึ่งช่วยให้สามารถส่งมอบรายละเอียดที่จำเป็นหรือรวบรวมข้อมูลได้อย่างเป็นธรรมชาติโดยรักษาความต่อเนื่องของการโต้ตอบ
outline: deep
---

# โมดอล

โมดอลเป็นคอมโพเนนต์ UI ที่หลากหลายซึ่งช่วยให้คุณแสดงข้อมูลสำคัญ การแจ้งเตือน หรือพรอมต์แก่ผู้ใช้โดยไม่ต้องให้ผู้ใช้ออกจากหน้าเว็บปัจจุบัน โดยทั่วไปจะประกอบด้วยส่วนหัว เนื้อหา และส่วนท้าย สามารถนำเสนอได้ทุกอย่างตั้งแต่องค์ประกอบแจ้งเตือนไปจนถึงแบบฟอร์ม โมดอลสามารถปิดได้โดยผู้ใช้ ซึ่งช่วยให้สามารถส่งมอบรายละเอียดที่จำเป็นหรือรวบรวมข้อมูลได้อย่างเป็นธรรมชาติโดยรักษาความต่อเนื่องของการโต้ตอบ

## การใช้งานพื้นฐาน

<div>
  <spr-button tone="success" @click="modalModel.modal1 = true">
    เปิดโมดอล
  </spr-button>

  <spr-modal v-model="modalModel.modal1">
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลตัวอย่าง</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel">
    <p class="spr-text-center">นี่คือโมดอลตัวอย่าง</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## ส่วนหัว

ส่วนหัวของโมดอลใช้เพื่อแสดงชื่อหรือหัวข้อ เพื่อให้ผู้ใช้เข้าใจบริบทของเนื้อหาภายใน คุณสามารถกำหนดส่วนหัวได้สองวิธี:

<ul>
  <li>การใช้พร็อพเพอร์ตี้ title: ส่งสตริงไปยังพร็อพเพอร์ตี้ title เพื่อกำหนดส่วนหัวของโมดอลอย่างรวดเร็ว</li>
  <li>
    การใช้สล็อต: หรือคุณสามารถปรับแต่งส่วนหัวโดยใช้สล็อต
    เพื่อให้มีความยืดหยุ่นมากขึ้นในการแทรกเนื้อหาที่ซับซ้อนหรือไดนามิก
  </li>
</ul>

ความยืดหยุ่นนี้ช่วยให้คุณปรับแต่งส่วนหัวของโมดอลให้ตรงกับความต้องการของแอปพลิเคชันเฉพาะของคุณ

<h5 class="spr-mb-3">โดยใช้พร็อพเพอร์ตี้ <code>title</code>:</h5>

<div>
  <spr-button tone="success" @click="modalModel.modal2 = true">
    เปิดโมดอล
  </spr-button>

  <spr-modal v-model="modalModel.modal2" title="ส่วนหัวโมดอลพร็อพส์">
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอล</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel" title="ส่วนหัวโมดอลพร็อพส์">
    <p class="spr-text-center">นี่คือโมดอลตัวอย่าง</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

<h5 class="spr-mb-3">โดยใช้ <code>slot</code>:</h5>

<div>
  <spr-button tone="success" @click="modalModel.modal3 = true">
    เปิดโมดอล
  </spr-button>

  <spr-modal v-model="modalModel.modal3">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอล</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel">
    <template #header>ส่วนหัวโมดอลสล็อต</template>

    <p class="spr-text-center">นี่คือโมดอลตัวอย่าง</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

<h5 class="spr-mb-3">
  คุณยังสามารถบังคับลบปุ่ม <code>X</code> ออกจากส่วนหัวได้โดยใช้พร็อพเพอร์ตี้ <code>closeButtonX</code>:
</h5>

<div>
  <spr-button tone="success" @click="modalModel.modal4 = true">
    เปิดโมดอล
  </spr-button>

  <spr-modal v-model="modalModel.modal4" :closeButtonX="false">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอล</p>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel" :closeButtonX="false">
    <template #header>ส่วนหัวโมดอลสล็อต</template>

    <p class="spr-text-center">นี่คือโมดอลตัวอย่าง</p>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## ส่วนท้าย

ส่วนท้ายของโมดอลสามารถมีปุ่มการดำเนินการเช่น "ยกเลิก" หรือ "บันทึก" หรืออาจแสดงข้อความได้ คุณสามารถปรับแต่งได้โดยใช้สล็อตหรือพร็อพเพอร์ตี้เพื่อให้การดำเนินการที่ชัดเจนหรือข้อมูลเพิ่มเติมแก่ผู้ใช้

<div>
  <spr-button tone="success" @click="modalModel.modal5 = true">
    เปิดโมดอล
  </spr-button>

  <spr-modal v-model="modalModel.modal5">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอล</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal5 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel">
    <template #header>ส่วนหัวโมดอลสล็อต</template>

    <p class="spr-text-center">นี่คือโมดอลตัวอย่าง</p>

    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## ตั้งค่าโมดอลให้ทำงาน

เพื่อให้โมดอลมองเห็นได้ ให้ผูกค่า `v-model` กับสถานะการมองเห็นของโมดอล โดยการตั้งค่า `v-model` เป็น `true` จะทำให้โมดอลทำงานและแสดงบนหน้าจอ ซึ่งช่วยให้ควบคุมการมองเห็นของโมดอลได้แบบไดนามิก ทำให้สามารถเปิดและปิดได้โดยโปรแกรมตามการโต้ตอบของผู้ใช้หรือเงื่อนไขอื่นๆ ในแอปพลิเคชันของคุณ

## ปิดใช้งานการเว้นวรรคเนื้อหา

คุณสามารถควบคุมการเว้นวรรคเนื้อหาภายในโมดอลได้โดยส่งพร็อพเพอร์ตี้ `contentPadding` ตั้งค่าเป็น `true` เพื่อเปิดใช้งานการเว้นวรรค หรือ `false` เพื่อปิดใช้งาน ซึ่งช่วยให้คุณปรับแต่งเลย์เอาต์ของเนื้อหาโมดอลได้ เพื่อให้ได้การออกแบบที่ปรับแต่งได้มากขึ้นและดึงดูดสายตามากขึ้นตามความต้องการของคุณ

<div>
  <spr-button tone="success" @click="modalModel.modal6 = true">
    เปิดโมดอล
  </spr-button>

  <spr-modal v-model="modalModel.modal6" :contentPadding="false">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus ut lectus tempor, ac volutpat turpis malesuada. Suspendisse potenti. Sed efficitur mi non dui tincidunt, non venenatis lorem lacinia. Ut scelerisque, mi nec egestas interdum, lorem ante volutpat enim, at volutpat purus purus ac magna. Nulla facilisi. Integer fermentum neque sit amet sollicitudin suscipit. Integer scelerisque sapien a risus cursus, nec euismod lacus faucibus. Etiam sed eros in velit egestas lobortis.
    </p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal6 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel" :contentPadding="false">
    <template #header>ส่วนหัวโมดอลสล็อต</template>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula metus ut lectus tempor, ac volutpat
      turpis malesuada. Suspendisse potenti. Sed efficitur mi non dui tincidunt, non venenatis lorem lacinia. Ut
      scelerisque, mi nec egestas interdum, lorem ante volutpat enim, at volutpat purus purus ac magna. Nulla facilisi.
      Integer fermentum neque sit amet sollicitudin suscipit. Integer scelerisque sapien a risus cursus, nec euismod
      lacus faucibus. Etiam sed eros in velit egestas lobortis.
    </p>

    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## ขนาด

โมดอลมีขนาดต่างๆ เพื่อให้เหมาะกับกรณีการใช้งานที่แตกต่างกัน คุณสามารถปรับขนาดโมดอลได้โดยใช้พร็อพเพอร์ตี้ size ซึ่งช่วยให้คุณเลือกได้จากตัวเลือกต่อไปนี้:

<ul>
  <li>
    <b>เล็ก (sm) (ความกว้าง: 360px - 480px)</b>: เหมาะสำหรับเนื้อหาง่ายๆ ที่ไม่ต้องการพื้นที่มาก เช่น การแจ้งเตือนด่วนหรือข้อความสั้นๆ
  </li>
  <li>
    <b>กลาง (md) (ความกว้าง: 480px - 720px)</b>: ขนาดเริ่มต้น เหมาะสำหรับเนื้อหาปานกลาง เช่น แบบฟอร์ม ข้อความเพิ่มเติม หรือแบบฟอร์มขนาดเล็ก
  </li>
  <li>
    <b>ใหญ่ (lg) (ความกว้าง: 720px - 960px)</b>: เหมาะสำหรับแสดงเนื้อหาที่ละเอียดมากขึ้น เช่น แบบฟอร์มที่มีหลายฟิลด์ รูปภาพขนาดใหญ่ หรือข้อมูลที่ซับซ้อน
  </li>
  <li>
    <b>ใหญ่พิเศษ (xl) (ความกว้าง: 900px - 1200px)</b>: ใช้สำหรับเนื้อหาที่ใหญ่ขึ้น เช่น แบบฟอร์มที่ละเอียด ตาราง หรือข้อมูลที่มีสื่อหนักที่ต้องการพื้นที่จำนวนมาก
  </li>
</ul>

<div class="spr-flex spr-space-x-4">
  <spr-button tone="success" @click="modalModel.modal7 = true">
    เล็ก (sm)
  </spr-button>
  <spr-button tone="success" @click="modalModel.modal8 = true">
    กลาง (md)
  </spr-button>
  <spr-button tone="success" @click="modalModel.modal9 = true">
    ใหญ่ (lg)
  </spr-button>
  <spr-button tone="success" @click="modalModel.modal10 = true">
    ใหญ่พิเศษ (xl)
  </spr-button>
  <spr-button tone="success" @click="modalModel.modal11 = true">
    ใหญ่พิเศษมาก (xxl)
  </spr-button>
</div>

<div>
  <spr-modal v-model="modalModel.modal7" size="sm">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลเล็กตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal7 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
  <spr-modal v-model="modalModel.modal8" size="md">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลกลางตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal8 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
  <spr-modal v-model="modalModel.modal9" size="lg">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลใหญ่ตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal9 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
  <spr-modal v-model="modalModel.modal10" size="xl">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลใหญ่พิเศษตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal10 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
  <spr-modal v-model="modalModel.modal11" size="xxl">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลใหญ่พิเศษมากตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal11 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <div class="spr-flex spr-space-x-4">
    <spr-button tone="success" @click="modalModel.small = true">เล็ก (sm)</spr-button>
    <spr-button tone="success" @click="modalModel.medium = true">กลาง (md)</spr-button>
    <spr-button tone="success" @click="modalModel.large = true">ใหญ่ (lg)</spr-button>
    <spr-button tone="success" @click="modalModel.extraLarge = true">ใหญ่พิเศษ (xl)</spr-button>
    <spr-button tone="success" @click="modalModel.extraExtraLarge = true">ใหญ่พิเศษมาก (xxl)</spr-button>
  </div>

  <spr-modal v-model="modalModel.small" size="sm">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลเล็กตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.small = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>

  <spr-modal v-model="modalModel.medium" size="md">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลกลางตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.medium = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>

  <spr-modal v-model="modalModel.large" size="lg">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลใหญ่ตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.large = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>

  <spr-modal v-model="modalModel.extraLarge" size="xl">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลใหญ่พิเศษตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.extraLarge = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>

  <spr-modal v-model="modalModel.extraExtraLarge" size="xxl">
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอลใหญ่พิเศษมากตัวอย่าง</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.extraExtraLarge = false">ปิด</spr-button>
      </div>
    </template>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref({
  small: false,
  medium: false,
  large: false,
  extraLarge: false,
  extraExtraLarge: false,
});
</script>
```

## ป้องกันการปิดโดยการคลิกพื้นหลัง

เพื่อป้องกันไม่ให้โมดอลปิดเมื่อผู้ใช้คลิกที่พื้นหลัง (พื้นที่นอกโมดอล) คุณสามารถปิดใช้งานพฤติกรรมนี้ได้โดยตั้งค่าพร็อพเพอร์ตี้ที่เหมาะสม เช่น `staticBackdrop` เป็น `true` ซึ่งจะทำให้มั่นใจได้ว่าโมดอลยังคงเปิดอยู่แม้ว่าผู้ใช้จะโต้ตอบกับพื้นหลังก็ตาม ซึ่งต้องใช้การดำเนินการอย่างชัดเจนของผู้ใช้ (เช่น การคลิกปุ่มปิด) เพื่อปิดโมดอล

<div>
  <spr-button tone="success" @click="modalModel.modal12 = true">
    เปิดโมดอล
  </spr-button>

  <spr-modal v-model="modalModel.modal12" staticBackdrop>
    <template #header>ส่วนหัวโมดอลสล็อต</template>
    <p class="!spr-m-0 spr-text-center">นี่คือโมดอล</p>
    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel.modal12 = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
</div>

```vue
<template>
  <spr-button tone="success" @click="modalModel = true">เปิดโมดอล</spr-button>

  <spr-modal v-model="modalModel" staticBackdrop>
    <template #header>ส่วนหัวโมดอลสล็อต</template>

    <p class="spr-text-center">นี่คือโมดอลตัวอย่าง</p>

    <template #footer>
      <div class="spr-flex spr-w-full spr-justify-end">
        <spr-button tone="success" @click="modalModel = false">ปิด</spr-button>
      </div>
    </template>
  </spr-modal>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const modalModel = ref<boolean>(false);
</script>
```

## การอ้างอิง API

### พร็อพส์

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
      <td>modelValue</td>
      <td>ควบคุมการมองเห็นของโมดอล เมื่อ <code>true</code> โมดอลจะแสดง เมื่อ <code>false</code> จะถูกซ่อน ใช้กับ v-model สำหรับการผูกสองทาง</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>title</td>
      <td>ข้อความที่จะแสดงในส่วนหัวของโมดอล ซึ่งช่วยให้เพิ่มชื่อได้อย่างตรงไปตรงมาโดยไม่ต้องใช้สล็อต หากใช้ทั้งพร็อพเพอร์ตี้นี้และสล็อตส่วนหัว เนื้อหาสล็อตจะมีความสำคัญเหนือกว่า</td>
      <td>string</td>
      <td>''</td>
    </tr>
    <tr>
      <td>size</td>
      <td>
        กำหนดความกว้างของกล่องโต้ตอบโมดอล:
        <ul>
          <li><code>sm</code>: ขนาดเล็ก (360px - 480px) - เหมาะสำหรับการแจ้งเตือนหรือข้อความสั้นๆ</li>
          <li><code>md</code>: ขนาดกลาง (480px - 720px) - ขนาดเริ่มต้น เหมาะสำหรับแบบฟอร์มและเนื้อหาปานกลาง</li>
          <li><code>lg</code>: ขนาดใหญ่ (720px - 960px) - สำหรับแบบฟอร์มที่ละเอียดหรือข้อมูลที่ซับซ้อน</li>
          <li><code>xl</code>: ขนาดใหญ่พิเศษ (900px - 1200px) - สำหรับเนื้อหาที่ครอบคลุมหรือข้อมูลที่มีสื่อหนัก</li>
          <li><code>xxl</code>: ขนาดใหญ่พิเศษมาก (1200px - 1400px) - สำหรับเนื้อหาที่ใหญ่มากหรือเลย์เอาต์ที่ซับซ้อน</li>
        </ul>
      </td>
      <td>'sm' | 'md' | 'lg' | 'xl' | 'xxl'</td>
      <td>'md'</td>
    </tr>
    <tr>
      <td>closeButtonX</td>
      <td>เมื่อ <code>true</code> จะแสดงปุ่ม X ที่มุมขวาบนของส่วนหัวโมดอลซึ่งช่วยให้ผู้ใช้ปิดโมดอลได้ ตั้งค่าเป็น <code>false</code> เพื่อลบปุ่มนี้</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>contentPadding</td>
      <td>ควบคุมว่าเนื้อหาโมดอลมีระยะห่างหรือไม่ เมื่อ <code>true</code> จะเพิ่มระยะห่างมาตรฐานให้กับพื้นที่เนื้อหา เมื่อ <code>false</code> จะลบระยะห่าง ทำให้เนื้อหาสามารถขยายไปถึงขอบของโมดอลได้</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>hasFooter</td>
      <td>ควบคุมว่าโมดอลมีส่วนท้ายหรือไม่ เมื่อ <code>true</code> จะสงวนพื้นที่สำหรับส่วนท้าย เมื่อ <code>false</code> จะไม่แสดงพื้นที่ส่วนท้าย</td>
      <td>boolean</td>
      <td>true</td>
    </tr>
    <tr>
      <td>staticBackdrop</td>
      <td>เมื่อ <code>true</code> จะป้องกันไม่ให้โมดอลปิดเมื่อผู้ใช้คลิกที่พื้นหลัง (พื้นที่นอกโมดอล) ซึ่งมีประโยชน์สำหรับโมดอลที่ต้องการการดำเนินการอย่างชัดเจนของผู้ใช้เพื่อปิด เมื่อเปิดใช้งาน การคลิกที่พื้นหลังจะทำให้เกิดอนิเมชันกระเด้งเพื่อระบุว่าโมดอลไม่สามารถปิดได้ด้วยวิธีนี้</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

### อีเวนต์

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
      <td>update:modelValue</td>
      <td>ถูกปล่อยออกมาจากเมื่อสถานะการมองเห็นของโมดอลเปลี่ยนแปลง อีเวนต์นี้ใช้สำหรับการผูก v-model ให้ทำงานได้อย่างถูกต้อง ถูกเรียกเมื่อโมดอลถูกปิดผ่านปุ่ม X หรือโดยการคลิกที่พื้นหลัง (เมื่อ <code>staticBackdrop</code> เป็น <code>false</code>)</td>
      <td>(value: boolean): สถานะการมองเห็นใหม่ของโมดอล</td>
    </tr>
  </tbody>
</table>

### สล็อต

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
      <td>พื้นที่เนื้อหาหลักของโมดอล วางเนื้อหาหลักของคุณที่นี่ โดยเนื้อหาจะมีระยะห่างโดยค่าเริ่มต้น (ควบคุมโดยพร็อพเพอร์ตี้ <code>contentPadding</code>)</td>
    </tr>
    <tr>
      <td>header</td>
      <td>เนื้อหาแบบกำหนดเองสำหรับส่วนหัวของโมดอล สล็อตนี้มีความสำคัญเหนือกว่าพร็อพเพอร์ตี้ <code>title</code> หากใช้ทั้งสอง ส่วนหัวจะรวมปุ่มปิด X เสมอเว้นแต่ <code>closeButtonX</code> จะถูกตั้งค่าเป็น <code>false</code></td>
    </tr>
    <tr>
      <td>footer</td>
      <td>เนื้อหาแบบกำหนดเองสำหรับส่วนท้ายของโมดอล โดยทั่วไปจะมีปุ่มการดำเนินการเช่น "ยกเลิก" หรือ "บันทึก" จะแสดงผลเฉพาะเมื่อ <code>hasFooter</code> เป็น <code>true</code></td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="sidekick" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SprModal from "@/components/modal/modal.vue"
import SprButton from "@/components/button/button.vue"
import SprLogo from "@/components/logo/logo.vue";

const modalModel = ref({
  modal1: false,
  modal2: false,
  modal3: false,
  modal4: false,
  modal5: false,
  modal6: false,
  modal7: false,
  modal8: false,
  modal9: false,
  modal10: false,
  modal11: false,
  modal12: false,
});
</script>
