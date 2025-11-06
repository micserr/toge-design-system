---
title: การ์ด
descripttion: คอนเทนเนอร์ที่ยืดหยุ่นพร้อมส่วนหัว เนื้อหา และส่วนท้ายที่ไม่บังคับ ใช้เพื่อจัดกลุ่มข้อมูลที่เกี่ยวข้อง
outline: deep
---

# การ์ด

คอนเทนเนอร์ที่ยืดหยุ่นพร้อมส่วนหัว เนื้อหา และส่วนท้ายที่ไม่บังคับ ใช้เพื่อจัดกลุ่มข้อมูลที่เกี่ยวข้อง

## การใช้งานพื้นฐาน

<spr-card>
  <template #content>
    <div>
      เนื้อหาการ์ด
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
      <br/>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
      <br/>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card>
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
  </spr-card>
</template>
```

## โทน

การ์ดรองรับโทนต่างๆ เพื่อระบุสถานะหรือระดับความสำคัญต่างๆ โทนที่มีอยู่คือ: `plain`, `neutral`, `success`, `information`, `pending`, `caution`, `accent`, และ `danger`

<div class="spr-grid spr-gap-2">
  <div class="spr-flex spr-gap-2 spr-justify-between">
    <spr-card class="spr-w-full" tone="plain">
      <template #content>
        <div class="spr-text-center">
          ธรรมดา
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="neutral">
      <template #content>
        <div class="spr-text-center">
          เป็นกลาง
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="success">
      <template #content>
        <div class="spr-text-center">
          สำเร็จ
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="information">
      <template #content>
        <div class="spr-text-center">
          ข้อมูล
        </div>
      </template>
    </spr-card>
  </div>
  <div class="spr-flex spr-gap-2 spr-justify-between">
    <spr-card class="spr-w-full" tone="pending">
      <template #content>
        <div class="spr-text-center">
          รอดำเนินการ
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="caution">
      <template #content>
        <div class="spr-text-center">
          เตือน
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="accent">
      <template #content>
        <div class="spr-text-center">
          เฉพาะ
        </div>
      </template>
    </spr-card>
    <spr-card class="spr-w-full" tone="danger">
      <template #content>
        <div class="spr-text-center">
          อันตราย
        </div>
      </template>
    </spr-card>
  </div>
</div>

## ส่วนหัวและส่วนท้าย

การส่ง `title` จะแสดงส่วนหัวโดยอัตโนมัติ ใช้สล็อต `footer` เพื่อเพิ่มส่วนท้าย

<spr-card title="หัวข้อการ์ด">
  <template #content>
    <div>
      เนื้อหาการ์ด
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">รอง</spr-button>
      <spr-button tone="success">หลัก</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="หัวข้อการ์ด">
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">รอง</spr-button>
        <spr-button tone="success">หลัก</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## บังคับซ่อนส่วนหัวและส่วนท้าย

ส่ง props `show-header` และ `show-footer` เป็น `false` เพื่อซ่อนส่วนหัวและส่วนท้ายแม้ว่าจะมีเนื้อหามา

<spr-card title="หัวข้อการ์ด" :show-header="false" :show-footer="false">
  <template #content>
    <div>
      เนื้อหาการ์ด
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">รอง</spr-button>
      <spr-button tone="success">หลัก</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="หัวข้อการ์ด" :show-header="false" :show-footer="false">
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">รอง</spr-button>
        <spr-button tone="success">หลัก</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## ไอคอน

ส่ง prop `header-icon` เพื่อแสดงไอคอนในส่วนหัว Prop `title` จำเป็นสำหรับไอคอนที่จะมองเห็นได้

<spr-card title="หัวข้อการ์ด" header-icon="ph:check-circle-duotone">
  <template #content>
    <div>
      เนื้อหาการ์ด
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">รอง</spr-button>
      <spr-button tone="success">หลัก</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="หัวข้อการ์ด" header-icon="ph:check-circle-duotone">
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">รอง</spr-button>
        <spr-button tone="success">หลัก</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## คำบรรยาย

ส่ง prop `subtitle` เพื่อแสดงคำบรรยายใต้หัวข้อ Prop `title` จำเป็น

<spr-card title="หัวข้อการ์ด" subtitle="นี่คือตัวอย่างคำบรรยาย" header-icon="ph:check-circle-duotone">
  <template #content>
    <div>
      เนื้อหาการ์ด
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
  <template #footer>
    <div class="spr-flex spr-items-center spr-ms-auto spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">รอง</spr-button>
      <spr-button tone="success">หลัก</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="หัวข้อการ์ด" subtitle="นี่คือตัวอย่างคำบรรยาย" header-icon="ph:check-circle-duotone">
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">รอง</spr-button>
        <spr-button tone="success">หลัก</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## ส่วนหัวที่กำหนดเอง

ใช้สล็อต `header` เพื่อเพิ่มเนื้อหาในส่วนหัว จะถูกวางไว้ข้างหัวข้อ

<spr-card title="หัวข้อการ์ด" header-icon="ph:newspaper-duotone">
  <template #header>
    <div class="spr-flex spr-items-center spr-justify-between spr-grow">
      <spr-badge text="9" variant="danger" size="small"/>
      <spr-button variant="secondary" size="small">รอง</spr-button>
    </div>
  </template>
  <template #content>
    <div>
      เนื้อหาการ์ด
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="หัวข้อการ์ด" header-icon="ph:newspaper-duotone">
    <template #header>
      <div class="spr-flex spr-grow spr-items-center spr-justify-between">
        <spr-badge text="9" variant="danger" size="small" />
        <spr-button variant="secondary" size="small">รอง</spr-button>
      </div>
    </template>
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
  </spr-card>
</template>
```

หาก prop `title` ถูกละเว้น สล็อต `header` สามารถปรับแต่งส่วนหัวได้อย่างสมบูรณ์

<spr-card>
  <template #header>
    <div>
      <img src="@/assets/images/banner-sample.svg" class="spr-w-full spr-h-[18px] spr-object-cover spr-rounded-t-border-radius-xl spr-pointer-events-none" />
    </div>
  </template>
  <template #content>
    <div>
      เนื้อหาการ์ด
    </div>
    <div>
      Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card>
    <template #header>
      <div>
        <img
          src="@/assets/images/banner-sample.svg"
          class="spr-pointer-events-none spr-h-[18px] spr-w-full spr-rounded-t-border-radius-xl spr-object-cover"
        />
      </div>
    </template>
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
  </spr-card>
</template>
```

## ความกว้างเส้นขอบ

ส่ง prop `border-width` เพื่อปรับแต่งความกว้างเส้นขอบของการ์ด ยอมรับค่าความกว้าง CSS ที่ถูกต้องใดๆ

<spr-card title="หัวข้อการ์ด" border-width="6px">
  <template #content>
    <div>เนื้อหาการ์ด</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
  </template>
  <template #footer>
    <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">รอง</spr-button>
      <spr-button tone="success">หลัก</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="หัวข้อการ์ด" border-width="6px">
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">รอง</spr-button>
        <spr-button tone="success">หลัก</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## รัศมีเส้นขอบ

ส่ง prop `border-radius-size` เพื่อปรับแต่งรัศมีเส้นขอบของการ์ด ยอมรับขนาดที่กำหนดไว้ล่วงหน้า: `xl`, `lg`, `md`, `sm`, `xs`, และ `2xs`

<spr-card title="หัวข้อการ์ด" border-radius-size="sm">
  <template #content>
    <div>เนื้อหาการ์ด</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
  </template>
  <template #footer>
    <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
      <spr-button variant="secondary">รอง</spr-button>
      <spr-button tone="success">หลัก</spr-button>
    </div>
  </template>
</spr-card>

```vue
<template>
  <spr-card title="หัวข้อการ์ด" border-radius-size="sm">
    <template #content>
      <div>เนื้อหาการ์ด</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
      <div>Lorem ipsectetur adipiscing elit. Sed etiam, sed etiam.</div>
    </template>
    <template #footer>
      <div class="spr-ms-auto spr-flex spr-items-center spr-gap-size-spacing-3xs">
        <spr-button variant="secondary">รอง</spr-button>
        <spr-button tone="success">หลัก</spr-button>
      </div>
    </template>
  </spr-card>
</template>
```

## API Reference

### Props

<table>
  <thead>
    <tr>
      <th>ชื่อ</th>
      <th>ประเภท</th>
      <th>ค่าเริ่มต้น</th>
      <th>คำอธิบาย</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>id</td>
      <td>string</td>
      <td>''</td>
      <td>
        ตัวระบุเฉพาะสำหรับองค์ประกอบอินพุต ใช้สำหรับเชื่อมโยงอินพุตกับป้ายกำกับเพื่อการเข้าถึง
      </td>
    </tr>
    <tr>
      <td>tone</td>
      <td>
        'plain' | 'neutral' | 'success' | 'information' | 'pending' | 'caution' | 'accent' | 'danger'
      </td>
      <td>''</td>
      <td>ตั้งหัวข้อของการ์ดในส่วนหัว</td>
    </tr>
    <tr>
      <td>title</td>
      <td>string</td>
      <td>''</td>
      <td>ตั้งหัวข้อของการ์ดในส่วนหัว</td>
    </tr>
    <tr>
      <td>subtitle</td>
      <td>string</td>
      <td>''</td>
      <td>ตั้งคำบรรยายของการ์ดที่แสดงใต้หัวข้อ ต้องมีหัวข้อจึงจะมองเห็นได้</td>
    </tr>
    <tr>
      <td>header-icon</td>
      <td>string</td>
      <td>''</td>
      <td>แสดงไอคอนในส่วนหัวโดยใช้รูปแบบชื่อไอคอน Iconify ต้องมีหัวข้อจึงจะมองเห็นได้</td>
    </tr>
    <tr>
      <td>show-header</td>
      <td>boolean</td>
      <td>true</td>
      <td>ควบคุมการมองเห็นของส่วนหัว</td>
    </tr>
    <tr>
      <td>show-footer</td>
      <td>boolean</td>
      <td>true</td>
      <td>ควบคุมการมองเห็นของส่วนท้าย</td>
    </tr>
    <tr>
      <td>border-width</td>
      <td>สไตล์ความกว้าง</td>
      <td>'1px'</td>
      <td>ตั้งความกว้างเส้นขอบของการ์ด</td>
    </tr>
    <tr>
      <td>border-radius-size</td>
      <td>'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs'</td>
      <td>'xl'</td>
      <td>ตั้งรัศมีเส้นขอบของการ์ด รวมถึงส่วนหัวและส่วนท้าย</td>
    </tr>
    <tr>
      <td>has-collapsible</td>
      <td>boolean</td>
      <td>false</td>
      <td>ระบุว่าการ์ดถูกใช้กับคอมโพเนนต์ที่ยุบได้ ซึ่งส่งผลต่อสไตล์เส้นขอบ</td>
    </tr>
    <tr>
      <td>is-collapsible-open</td>
      <td>boolean</td>
      <td>false</td>
      <td>ติดตามว่ามีการขยายเนื้อหาหรือไม่เมื่อใช้กับคอมโพเนนต์ที่ยุบได้เพื่อใช้สไตล์เส้นขอบที่เหมาะสม</td>
    </tr>
    <tr>
      <td>has-content-padding</td>
      <td>boolean</td>
      <td>true</td>
      <td>ควบคุมว่ามีการใช้การเว้นระยะกับพื้นที่เนื้อหาของการ์ดหรือไม่</td>
    </tr>
    <tr>
      <td>flexbox</td>
      <td>boolean</td>
      <td>false</td>
      <td>เมื่อเป็น true จะใช้เลย์เอาต์ flexbox กับการ์ด ทำให้เป็นคอนเทนเนอร์ flex ที่มีทิศทางคอลัมน์</td>
    </tr>
    <tr>
      <td>customBorderSize</td>
      <td>string | null</td>
      <td>null</td>
      <td>ตั้งขนาดเส้นขอบที่กำหนดเองสำหรับการ์ด หากไม่ได้ตั้งค่า จะใช้ขนาดเส้นขอบเริ่มต้น</td>
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
      <td>header</td>
      <td>เนื้อหาที่กำหนดเองสำหรับส่วนหัวของการ์ด จะถูกแสดงข้างหัวข้อหากมีมา หรือสามารถแทนที่ส่วนหัวเริ่มต้นได้อย่างสมบูรณ์หากไม่ได้ตั้งหัวข้อ</td>
    </tr>
    <tr>
      <td>content</td>
      <td>เนื้อหาหลักของการ์ด สล็อตนี้แนะนำสำหรับการจัดระเบียบเนื้อหาภายในการ์ด</td>
    </tr>
    <tr>
      <td>default</td>
      <td>สล็อตทางเลือกสำหรับเนื้อหา ใช้เฉพาะเมื่อไม่ได้มีสล็อตเนื้อหามา</td>
    </tr>
    <tr>
      <td>footer</td>
      <td>เนื้อหาที่กำหนดเองสำหรับส่วนท้ายของการ์ด โดยปกติใช้สำหรับปุ่มการดำเนินการหรือข้อมูลสรุป</td>
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
import SprCard from '@/components/card/card.vue';
import SprButton from '@/components/button/button.vue';
import SprBadge from '@/components/badge/badge.vue';
import SprLogo from "@/components/logo/logo.vue";
</script>
