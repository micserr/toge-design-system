---
title: อวตาร
descripttion: คอมโพเนนต์ Avatar เป็นองค์ประกอบที่หลากหลายและใช้กันทั่วไปในอินเทอร์เฟซผู้ใช้ ออกแบบมาเพื่อแสดงถึงผู้ใช้หรือเอนทิตีในเชิงภาพ สามารถแสดงรูปภาพ ชื่อย่อ หรือไอคอน และสามารถปรับแต่งได้หลากหลายวิธี รวมถึงขนาด โทน และตัวแปร เพื่อให้เหมาะกับความต้องการในการออกแบบที่แตกต่างกัน อวตารยังสามารถรวมถึงตัวบ่งชี้การแจ้งเตือนและป้าย เพื่อการสื่อสารภาพที่เพิ่มขึ้น และสามารถปิดใช้งานเพื่อป้องกันการโต้ตอบของผู้ใช้เมื่อจำเป็น
outline: deep
---

# อวตาร

คอมโพเนนต์ Avatar เป็นองค์ประกอบที่หลากหลายและใช้กันทั่วไปในอินเทอร์เฟซผู้ใช้ ออกแบบมาเพื่อแสดงถึงผู้ใช้หรือเอนทิตีในเชิงภาพ สามารถแสดงรูปภาพ ชื่อย่อ หรือไอคอน และสามารถปรับแต่งได้หลากหลายวิธี รวมถึงขนาด โทน และตัวแปร เพื่อให้เหมาะกับความต้องการในการออกแบบที่แตกต่างกัน อวตารยังสามารถรวมถึงตัวบ่งชี้การแจ้งเตือนและป้าย เพื่อการสื่อสารภาพที่เพิ่มขึ้น และสามารถปิดใช้งานเพื่อป้องกันการโต้ตอบของผู้ใช้เมื่อจำเป็น

## การใช้งานพื้นฐาน

<spr-avatar />

```vue
<template>
  <spr-avatar />
</template>
```

## การแจ้งเตือน

<spr-avatar :notification="true" />

```vue
<template>
  <spr-avatar :notification="true" />
</template>
```

## ป้าย

<spr-avatar :badge="true" />

```vue
<template>
  <spr-avatar :badge="true" />
</template>
```

## รูปภาพ

<div>
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="2xl"
  />
</div>

```vue
<template>
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="2xl"
  />
</template>
```

## ขนาด

คอมโพเนนต์ avatar มีขนาด 7 แบบที่แตกต่างกัน คุณสามารถใช้ prop `size` เพื่อกำหนดขนาดของ avatar ขนาดเริ่มต้นคือ `2xl` ขนาดที่มีให้เลือกคือ `2xl`, `xl`, `lg`, `md`, `sm`, `xs`, `2xs`

<div class="spr-space-x-3 spr-flex">
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="2xl"
  />
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="xl"
  />
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="lg"
  />
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="md"
  />
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="sm"
  />
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="xs"
  />
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="2xs"
  />
</div>

```vue
<template>
  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="2xl"
  />

  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="xl"
  />

  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="lg"
  />

  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="md"
  />

  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="sm"
  />

  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="xs"
  />

  <spr-avatar
    variant="image"
    src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg"
    :notification="true"
    :badge="true"
    size="2xs"
  />
</template>
```

## ตัวแปร

<div class="spr-grid spr-gap-4">
  <div class="spr-space-x-3 spr-flex">
    <spr-avatar  initial="Juan Dela Cruz" size="2xl" />
    <spr-avatar  initial="John Jay Joe" size="xl" />
    <spr-avatar  initial="Anthony" size="lg" />
    <spr-avatar  initial="Juan Dela Cruz" size="md" />
    <spr-avatar  initial="Juan Dela Cruz" size="sm" />
    <spr-avatar  initial="Juan Dela Cruz" size="xs" />
    <spr-avatar  initial="Juan Dela Cruz" size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="count" count="10" color="secondary" size="2xl" />
    <spr-avatar variant="count" count="2"  color="secondary" size="xl" />
    <spr-avatar variant="count" count="3"  color="secondary" size="lg" />
    <spr-avatar variant="count" count="4"  color="secondary" size="md" />
    <spr-avatar variant="count" count="5"  color="secondary" size="sm" />
    <spr-avatar variant="count" count="6"  color="secondary" size="xs" />
    <spr-avatar variant="count" count="7"  color="secondary" size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="user-group" size="2xl" />
    <spr-avatar variant="user-group" size="xl" />
    <spr-avatar variant="user-group" size="lg" />
    <spr-avatar variant="user-group" size="md" />
    <spr-avatar variant="user-group" size="sm" />
    <spr-avatar variant="user-group" size="xs" />
    <spr-avatar variant="user-group" size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="user"  size="2xl" />
    <spr-avatar variant="user"  size="xl" />
    <spr-avatar variant="user"  size="lg" />
    <spr-avatar variant="user"  size="md" />
    <spr-avatar variant="user"  size="sm" />
    <spr-avatar variant="user"  size="xs" />
    <spr-avatar variant="user"  size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="client" size="2xl" />
    <spr-avatar variant="client" size="xl" />
    <spr-avatar variant="client" size="lg" />
    <spr-avatar variant="client" size="md" />
    <spr-avatar variant="client" size="sm" />
    <spr-avatar variant="client" size="xs" />
    <spr-avatar variant="client" size="2xs" />
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar variant="users-four" size="2xl" />
    <spr-avatar variant="user-sound" size="xl" />
    <spr-avatar variant="airplane" size="lg" />
    <spr-avatar variant="android-logo" size="md" />
    <spr-avatar variant="arrow-down" size="sm" />
    <spr-avatar variant="arrow-up" size="xs" />
    <spr-avatar variant="arrow-left" size="2xs" />
  </div>
</div>

```vue
<template>
  <div class="spr-grid spr-gap-4">
    <div class="spr-space-x-3">
      <spr-avatar initial="Juan Dela Cruz" size="2xl" />
      <spr-avatar initial="John Jay Joe" size="xl" />
      <spr-avatar initial="Anthony" size="lg" />
      <spr-avatar initial="Juan Dela Cruz" size="md" />
      <spr-avatar initial="Juan Dela Cruz" size="sm" />
      <spr-avatar initial="Juan Dela Cruz" size="xs" />
      <spr-avatar initial="Juan Dela Cruz" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="count" count="10" color="secondary" size="2xl" />
      <spr-avatar variant="count" count="2" color="secondary" size="xl" />
      <spr-avatar variant="count" count="3" color="secondary" size="lg" />
      <spr-avatar variant="count" count="4" color="secondary" size="md" />
      <spr-avatar variant="count" count="5" color="secondary" size="sm" />
      <spr-avatar variant="count" count="6" color="secondary" size="xs" />
      <spr-avatar variant="count" count="7" color="secondary" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="user-group" size="2xl" />
      <spr-avatar variant="user-group" size="xl" />
      <spr-avatar variant="user-group" size="lg" />
      <spr-avatar variant="user-group" size="md" />
      <spr-avatar variant="user-group" size="sm" />
      <spr-avatar variant="user-group" size="xs" />
      <spr-avatar variant="user-group" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="user" size="2xl" />
      <spr-avatar variant="user" size="xl" />
      <spr-avatar variant="user" size="lg" />
      <spr-avatar variant="user" size="md" />
      <spr-avatar variant="user" size="sm" />
      <spr-avatar variant="user" size="xs" />
      <spr-avatar variant="user" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="client" size="2xl" />
      <spr-avatar variant="client" size="xl" />
      <spr-avatar variant="client" size="lg" />
      <spr-avatar variant="client" size="md" />
      <spr-avatar variant="client" size="sm" />
      <spr-avatar variant="client" size="xs" />
      <spr-avatar variant="client" size="2xs" />
    </div>

    <div class="spr-space-x-3">
      <spr-avatar variant="users-four" size="2xl" />
      <spr-avatar variant="user-sound" size="xl" />
      <spr-avatar variant="airplane" size="lg" />
      <spr-avatar variant="android-logo" size="md" />
      <spr-avatar variant="arrow-down" size="sm" />
      <spr-avatar variant="arrow-up" size="xs" />
      <spr-avatar variant="arrow-left" size="2xs" />
    </div>
  </div>
</template>
```

## สล็อต

สามารถใช้สล็อตเพื่อเพิ่มเนื้อหาแบบกำหนดเองให้กับ avatar หมายเหตุ: ปรับเนื้อหาแบบกำหนดเองให้พอดีกับขนาด avatar

<div class="spr-grid spr-gap-4">
  <div class="spr-space-x-3 spr-flex">
    <spr-avatar :notification="true" :badge="true" size="2xl" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xl" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="lg" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="md" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="sm" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xs" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="2xs" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
  </div>

  <div class="spr-space-x-3 spr-flex">
    <spr-avatar :notification="true" :badge="true" size="2xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="lg">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="md">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="sm">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="2xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
  </div>
</div>

```vue
<template>
  <div>
    <spr-avatar :notification="true" :badge="true" size="2xl" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xl" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="lg" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="md" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="sm" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xs" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="2xs" color="primary">
      <Icon icon="ph:trash" />
    </spr-avatar>
  </div>

  <div>
    <spr-avatar :notification="true" :badge="true" size="2xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xl">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="lg">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="md">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="sm">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
    <spr-avatar :notification="true" :badge="true" size="2xs">
      <img src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="User Avatar" />
    </spr-avatar>
  </div>
</template>

<script lang="ts" setup>
import { Icon } from '@iconify/vue';
</script>
```

## สถานะ

<div class="spr-space-x-3 spr-flex">
  <spr-avatar variant="initial" status="danger" initial="Matthew"  :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="disabled" initial="Mark"  :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="information" initial="John"  :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="brand" initial="Mary"  :badge="true" size="2xl" />
</div>

```vue
<template>
  <spr-avatar variant="initial" status="danger" initial="Matthew" :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="disabled" initial="Mark" :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="information" initial="John" :badge="true" size="2xl" />
  <spr-avatar variant="initial" status="brand" initial="Mary" :badge="true" size="2xl" />
</template>
```

## กำลังโหลด

<div class="spr-space-x-3 spr-flex">
  <spr-avatar loading size="2xl" />
  <spr-avatar loading size="xl" />
  <spr-avatar loading size="lg"/>
  <spr-avatar loading size="md"/>
  <spr-avatar loading size="sm" />
  <spr-avatar loading size="xs" />
  <spr-avatar loading size="2xs" />
</div>

```vue
<template>
  <div>
    <spr-avatar loading size="2xl" />
    <spr-avatar loading size="xl" />
    <spr-avatar loading size="lg" />
    <spr-avatar loading size="md" />
    <spr-avatar loading size="sm" />
    <spr-avatar loading size="xs" />
    <spr-avatar loading size="2xs" />
  </div>
</template>
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
      <td>
        กำหนดประเภทของ avatar ที่จะแสดง:
        <ul>
          <li><code>image</code>: แสดงรูปภาพโดยใช้ prop <code>src</code></li>
          <li><code>initial</code>: แสดงข้อความชื่อย่อตาม prop <code>initial</code></li>
          <li><code>client</code>: แสดงไอคอนเฉพาะลูกค้า (ไอคอนอาคาร)</li>
          <li><code>user</code>: แสดงไอคอนเฉพาะผู้ใช้ (คนเดียว)</li>
          <li><code>user-group</code>: แสดงไอคอนที่แสดงถึงกลุ่มผู้ใช้ (หลายคน)</li>
          <li><code>count</code>: แสดงจำนวนตัวเลขจาก prop <code>count</code> พร้อมคำนำหน้า "+" </li>
        </ul>
      </td>
      <td>'image' | 'initial' | 'client' | 'user' | 'user-group' | 'count'</td>
      <td>'initial'</td>
    </tr>
    <tr>
      <td>src</td>
      <td>URL สำหรับรูปภาพ avatar เมื่อใช้ <code>variant="image"</code> หากไม่ได้ระบุเมื่อใช้ตัวแปรรูปภาพ จะกลับไปใช้ไอคอนที่เหมาะสมตามตัวแปร</td>
      <td>string</td>
      <td>undefined</td>
    </tr>
    <tr>
      <td>alt</td>
      <td>ข้อความทางเลือกสำหรับรูปภาพ avatar เพื่อการเข้าถึง สำคัญสำหรับโปรแกรมอ่านหน้าจอเพื่อระบุเนื้อหา avatar</td>
      <td>string</td>
      <td>'Avatar'</td>
    </tr>
    <tr>
      <td>size</td>
      <td>
        ควบคุมขนาดของ avatar มีผลต่อมิติ ขนาดตัวอักษร และตำแหน่งของตัวบ่งชี้:
        <ul>
          <li><code>2xl</code>: 80px (5rem) - ใหญ่พิเศษพิเศษ</li>
          <li><code>xl</code>: 56px (3.5rem) - ใหญ่พิเศษ</li>
          <li><code>lg</code>: 40px (2.5rem) - ใหญ่</li>
          <li><code>md</code>: 36px (2.25rem) - ปานกลาง</li>
          <li><code>sm</code>: 24px (1.5rem) - เล็ก</li>
          <li><code>xs</code>: 20px (1.25rem) - เล็กพิเศษ</li>
          <li><code>2xs</code>: 16px (1rem) - เล็กพิเศษพิเศษ</li>
        </ul>
        แต่ละขนาดจะปรับตำแหน่งการแจ้งเตือนและป้ายโดยอัตโนมัติ รวมถึงขนาดด้วย
      </td>
      <td>'2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs' | '2xs'</td>
      <td>'2xl'</td>
    </tr>
    <tr>
      <td>notification</td>
      <td>เมื่อ <code>true</code> จะแสดงตัวบ่งชี้การแจ้งเตือนขนาดเล็ก (ป้าย) ที่มุมขวาบนของ avatar การแจ้งเตือนใช้สีตัวแปร danger</td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>notificationText</td>
      <td>ข้อความที่จะแสดงในตัวบ่งชี้การแจ้งเตือน โดยปกติจะเป็นตัวเลข มองเห็นได้เฉพาะเมื่อ <code>notification</code> เป็น <code>true</code></td>
      <td>string</td>
      <td>'0'</td>
    </tr>
    <tr>
      <td>badge</td>
      <td>เมื่อ <code>true</code> จะแสดงป้ายสถานะที่มุมขวาล่างของ avatar สีของป้ายถูกกำหนดโดย prop <code>status</code></td>
      <td>boolean</td>
      <td>false</td>
    </tr>
    <tr>
      <td>initial</td>
      <td>
        ข้อความที่จะแสดงเมื่อใช้ <code>variant="initial"</code> คอมโพเนนต์จะดึงชื่อย่อโดยอัตโนมัติตามกฎเหล่านี้:
        <ul>
          <li>สำหรับชื่อเดียว: ใช้อักษรตัวแรก (เช่น "John" → "J")</li>
          <li>สำหรับหลายชื่อ: ใช้อักษรตัวแรกของชื่อแรกและนามสกุล (เช่น "John Doe" → "JD")</li>
          <li>สำหรับขนาดเล็ก (xs, 2xs): จำกัดเพียงชื่อย่อเดียว</li>
        </ul>
      </td>
      <td>string</td>
      <td>'Avatar'</td>
    </tr>
    <tr>
      <td>color</td>
      <td>
        โครงร่างสีพื้นหลังสำหรับ avatar:
        <ul>
          <li><code>primary</code>: ใช้สีพื้นผิวสำหรับพื้นหลัง</li>
          <li><code>secondary</code>: ใช้สีพื้นหลังมาตรฐาน</li>
        </ul>
        ตัวเลือกที่สาม 'tertiary' ยังถูกนำไปใช้ในโค้ดแต่ไม่ได้เปิดเผยในการตรวจสอบ prop
      </td>
      <td>'primary' | 'secondary'</td>
      <td>'primary'</td>
    </tr>
    <tr>
      <td>status</td>
      <td>
        ประเภทตัวบ่งชี้สถานะเมื่อ <code>badge</code> เป็น <code>true</code>:
        <ul>
          <li><code>brand</code>: สีแบรนด์หลัก (เขียว) โดยปกติใช้สำหรับสถานะออนไลน์หรือใช้งานอยู่</li>
          <li><code>information</code>: สีน้ำเงิน โดยปกติใช้สำหรับสถานะข้อมูล</li>
          <li><code>danger</code>: สีแดง โดยปกติใช้สำหรับสถานะข้อผิดพลาดหรือถูกบล็อก</li>
          <li><code>disabled</code>: สีเทา โดยปกติใช้สำหรับสถานะออฟไลน์หรือไม่ได้ใช้งาน</li>
        </ul>
      </td>
      <td>'brand' | 'information' | 'danger' | 'disabled'</td>
      <td>'brand'</td>
    </tr>
    <tr>
      <td>count</td>
      <td>ค่าตัวเลขที่จะแสดงเมื่อใช้ <code>variant="count"</code> จะถูกแสดงพร้อมคำนำหน้า "+" (เช่น "+10")</td>
      <td>number</td>
      <td>0</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>เมื่อ <code>true</code> จะแสดงภาพเคลื่อนไหวสถานะการโหลดแบบโครงกระดูกแทนเนื้อหา avatar จริง มีประโยชน์ในการแสดงสถานะการโหลดขณะดึงข้อมูล</td>
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
      <td>imageError</td>
      <td>ถูกปล่อยออกมาเมื่อแหล่งที่มาของรูปภาพไม่ใช่รูปภาพ</td>
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
      <td>
        <p>เนื้อหาแบบกำหนดเองที่จะแสดงภายใน avatar สามารถใช้เพื่อสร้าง avatar แบบกำหนดเองด้วยไอคอน รูปภาพ หรือเนื้อหาอื่นๆ</p>
        <p>เมื่อมีการระบุสล็อตนี้ จะมีความสำคัญเหนือกว่าการแสดงไอคอนหรือชื่อย่อมาตรฐาน เนื้อหาสล็อตจะถูกห่อหุ้มในคอนเทนเนอร์เดียวกันกับรูปภาพหรือไอคอน โดยมีขนาดและการจัดรูปแบบที่เหมาะสม</p>
        <p>หมายเหตุ: คุณควรปรับเนื้อหาแบบกำหนดเองให้พอดีกับขนาด avatar โดยเฉพาะตัวแปรขนาดที่เล็กกว่า</p>
      </td>
    </tr>
  </tbody>
</table>

## การใช้ผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
  <spr-logo name="ecosystem" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import SprAvatar from "@/components/avatar/avatar.vue";
import SprLogo from "@/components/logo/logo.vue";

import { Icon } from '@iconify/vue';
</script>
