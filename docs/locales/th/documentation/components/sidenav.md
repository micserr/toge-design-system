---
title: แถบนำทางด้านข้าง
descripttion: แถบนำทางด้านข้างให้แถบนำทางที่ปรับแต่งได้ซึ่งรวมโลโก้ ลิงก์นำทาง การดำเนินการด่วน และแถบค้นหา
outline: deep
---

# แถบนำทางด้านข้าง

แถบนำทางด้านข้างให้แถบนำทางที่ปรับแต่งได้ซึ่งรวมโลโก้ ลิงก์นำทาง การดำเนินการด่วน และแถบค้นหา

![ตัวอย่าง Sidenav](../../../../public/images/sidenav-sample.png)

## การใช้งานพื้นฐาน

ในการใช้งานคอมโพเนนต์ Sidenav ให้ใช้ไวยากรณ์ต่อไปนี้:

```vue
<spr-sidenav>
  <template #logo-image>
    <img src="[logo_image_path]" alt="logo" />
  </template>
</spr-sidenav>
```

## ช่อง

### โลโก้ภาพที่กำหนดเอง

ช่อง `logo-image` ช่วยให้คุณสามารถแทรกลงโก้ที่กำหนดเองในแถบนำทางด้านข้างได้ ใช้เทมเพลตต่อไปนี้เพื่อเพิ่มโลโก้:

```vue
<template #logo-image>
  <img src="[image_path]" alt="logo" />
</template>
```

## การรวมคอมโพเนนต์ไอคอน

Design System ให้พร็อพเพอร์ตี้ `icon` ที่ช่วยให้คุณใช้คอมโพเนนต์ Icon ได้ คุณสามารถใช้คอมโพเนนต์ Icon เพื่อแสดงไอคอนในแถบนำทางด้านข้างได้

ปัจจุบัน Design System ใช้ไลบรารี Iconify เพื่อแสดงไอคอน คุณสามารถใช้ชื่อไอคอน Iconify เพื่อแสดงไอคอนในแถบนำทางด้านข้างได้ สำหรับข้อมูลเพิ่มเติมเกี่ยวกับ Iconify โปรดดูที่ <a href="https://iconify.design/docs/usage/svg/iconify" target="_blank">เอกสาร Iconify</a>

### ไอคอนที่กำหนดเอง

ในการใช้ไอคอนที่กำหนดเองสำหรับลิงก์นำทางของคุณ ให้ระบุลิงก์ CDN ไปยังภาพโดยใช้พร็อพเพอร์ตี้ `icon` สำหรับสถานะที่ใช้งานอยู่ ให้อัปโหลดลิงก์ CDN เวอร์ชันของไอคอนที่มี `-fill` เพิ่มต่อท้ายก่อนนามสกุลไฟล์ คอมโพเนนต์จะสลับระหว่างไอคอนเริ่มต้นและไอคอนที่ใช้งานอยู่โดยอัตโนมัติตามสถานะนำทาง:

การตั้งชื่อ CDN \
เริ่มต้น: https://eco-cdn-prod.azureedge.net/payroll.svg \
ใช้งานอยู่: https://eco-cdn-prod.azureedge.net/payroll-fill.svg

```vue
<script lang="ts" setup>
const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'https://eco-cdn-prod.azureedge.net/payroll.svg',
        },
      ],
    },
  ],
});
</script>
```

## ลิงก์นำทาง

ลิงก์นำทางถูกจัดระเบียบเป็นส่วนที่จัดกลุ่ม โดยแต่ละส่วนประกอบด้วยหมวดหมู่ต่างๆ แต่ละหมวดหมู่มีลิงก์ที่อาจมีเมนูย่อยและเมนูย่อยย่อย

การกำหนดลิงก์นำทางมี 2 ส่วน คือ `top` และ `bottom` แต่ละส่วนสามารถมี `parentLinks` ได้หลายรายการที่แสดงถึงรายการนำทางระดับบนสุด

```vue
<template>
  <spr-sidenav :nav-links="navLinks">
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
</script>
```

### โครงสร้างลิงก์นำทาง

แอตทริบิวต์ nav-links คาดหวังอาร์เรย์ของออบเจกต์ที่กำหนดเมนูนำทาง แต่ละออบเจกต์สามารถมี:

<ul>
  <li>
    <code class="spr-mr-2">top:</code>
    <span> 
      คุณสามารถกำหนดลิงก์นำทางระดับบนสุดในส่วนบนของแถบนำทางด้านข้างได้
    </span>
  </li>
  <li>
    <code class="spr-mr-2">bottom:</code>
    <span> 
      คุณสามารถกำหนดลิงก์นำทางระดับบนสุดในส่วนล่างของแถบนำทางด้านข้างได้
    </span>
  </li>
  <li>
    <code class="spr-mr-2">parentLinks:</code>
    <span> 
      รายการลิงก์นำทางระดับบนสุด แต่ละลิงก์อาจมีพร็อพเพอร์ตี้เพิ่มเติมเช่น 
      <code>title</code>, 
      <code>icon</code>, <code>redirect</code> และ <code>menuLinks</code>
    </span>
  </li>
  <li>
    <code class="spr-mr-2">title:</code>
    <span>
      ชื่อของแต่ละรายการลิงก์นำทาง เมื่อ <code>menulinks</code> ว่างหรือไม่ได้ระบุ 
      ชื่อจะแสดงเมื่อโฮเวอร์ที่ parent link
    </span>
  </li>
  <li>
    <code class="spr-mr-2">icon:</code>
    <span>
      ไอคอนที่เกี่ยวข้องกับ <code>parentLinks</code> เท่านั้น โดยปกติเป็น iconify string (เช่น `ph:home`, `ph:users-three`)
      ดูเพิ่มเติมได้ที่ <a href="https://iconify.design/docs/usage/svg/iconify/">Iconify</a>
    </span>
  </li>
  <li>
    <code class="spr-mr-2">redirect:</code>
    <span>
      URL หรือเส้นทางที่ผู้ใช้จะถูกเปลี่ยนเส้นทางเมื่อคลิกที่รายการนำทาง การเปลี่ยนเส้นทางจะไม่ทำงานหากมี <code>menuLinks</code> หรือ <code>submenuLinks</code>
    </span>
  </li>
  <li>
    <code class="spr-mr-2">openInNewTab:</code>
    <span>
      แฟล็กบูลีนที่ระบุว่าลิงก์จะเปิดในแท็บใหม่หรือไม่
    </span>
  </li>
  <li>
    <code class="spr-mr-2">isAbsoluteURL:</code>
    <span>
      แฟล็กบูลีนที่ระบุว่าลิงก์จะเปิดโดยใช้ href หรือไม่
    </span>
  </li>
  <li>
    <code class="spr-mr-2">link:</code>
    <span>
      URL หรือปลายทางจริงสำหรับรายการนำทาง มักใช้สำหรับการกำหนดเส้นทางภายในหรือลิงก์ไปยังส่วนต่างๆ ของแอป
    </span>
  </li>
  <li>
    <code class="spr-mr-2">menuLinks:</code>
    <span>
      ปรากฏภายใต้ <code>parentLinks</code> รายการนำทาง ลิงก์เมนูเหล่านี้กำหนดส่วนหรือหมวดหมู่เพิ่มเติมภายใต้ parent link
    </span>
  </li>
  <li>
    <code class="spr-mr-2">submenuLinks:</code>
    <span>
      ลิงก์ที่ซ้อนอยู่ภายใต้ <code>menuLinks</code> เปิดใช้งานการนำทางหลายระดับ ลิงก์เหล่านี้เป็นการแบ่งย่อยเพิ่มเติมหรือรายการลูกภายใต้แต่ละส่วน <code>menuLinks</code>
    </span>
  </li>
  <li>
    <code class="spr-mr-2">hidden:</code>
    <span>
      แฟล็กบูลีนที่ระบุว่ารายการการดำเนินการด่วนควรถูกซ่อนหรือไม่
    </span>
  </li>
</ul>

<p>นี่คือโครงสร้างสำหรับแอตทริบิวต์ nav-links:</p>

```Javascript
{
  top: [
    {
      parentLinks: [
        {
          title: <String>,
          icon: <String>,
          hidden: <Boolean>,
          redirect: {
            openInNewTab: <Boolean>,
            isAbsoluteURL: <Boolean>,
            link: <String>,
          },
          menuLinks: [
            {
              menuHeading: <String>,
              items: [
                {
                  title: <String>,
                  hidden: <Boolean>,
                  redirect: {
                    openInNewTab: <Boolean>,
                    isAbsoluteURL: <Boolean>,
                    link: <String>,
                  },
                  submenuLinks: [
                    {
                      subMenuHeading: <String>,
                      items: [
                        {
                          title: <String>,
                          hidden: <Boolean>,
                          redirect: {
                            openInNewTab: <Boolean>,
                            isAbsoluteURL: <Boolean>,
                            link: <String>,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: <String>,
          icon: <String>,
          redirect: {
            openInNewTab: <Boolean>,
            isAbsoluteURL: <Boolean>,
            link: <String>,
          },
          menuLinks: [
            {
              menuHeading: <String>,
              items: [
                {
                  title: <String>,
                  redirect: {
                    openInNewTab: <Boolean>,
                    isAbsoluteURL: <Boolean>,
                    link: <String>,
                  },
                  submenuLinks: [
                    {
                      subMenuHeading: <String>,
                      items: [
                        {
                          title: <String>,
                          redirect: {
                            openInNewTab: <Boolean>,
                            isAbsoluteURL: <Boolean>,
                            link: <String>,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            }
          ],
        },
      ],
    },
  ]
}
```

## การนำทางที่ใช้งานอยู่

พร็อพเพอร์ตี้ `active-nav` ช่วยให้คุณสามารถไฮไลต์สถานะที่ใช้งานอยู่ทั่วทั้งระดับต่างๆ ของการนำทาง (parent, menu, และ submenu) เพื่อรวมเข้ากับคอมโพเนนต์ Sidenav ของคุณ ตรวจสอบให้แน่ใจว่าค่าของการนำทางที่ใช้งานอยู่ตรงกับชื่อของรายการที่เกี่ยวข้องในโครงสร้างการนำทางที่ใช้งานอยู่ของคุณ และส่งออบเจกต์การนำทางที่ใช้งานอยู่พร้อมกับ props อื่นๆ ของคุณ

นี่คือตัวอย่างวิธีการใช้งานพร็อพเพอร์ตี้การนำทางที่ใช้งานอยู่:

```vue
<template>
  <spr-sidenav :active-nav="activeNav" :nav-links="navLinks">
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'Home',
          icon: 'ph:house-simple',
          menuLinks: [
            {
              menuHeading: 'Sub Heading 1',
              items: [
                {
                  title: 'Dashboard 1',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Sub Heading 1',
                      items: [
                        {
                          title: 'Home 1',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 2',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Sub Heading 2',
                      items: [
                        {
                          title: 'Home 3',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Home 4',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'Dashboard 2',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
</script>
```

### การจัดการการเปลี่ยน URL ด้วยตนเอง

เมื่อผู้ใช้เปลี่ยน URL ด้วยตนเอง พร็อพเพอร์ตี้ `active-nav` จะไม่อัปเดตโดยอัตโนมัติ สิ่งนี้เป็นเพราะ `active-nav` โดยปกติจะถูกกำหนดผ่านการคลิกที่ไอคอนนำทาง และการพิมพ์ URL ด้วยตนเองไม่ได้ทริกเกอร์ลอจิกเดียวกัน

เพื่อจัดการสิ่งนี้ คุณสามารถใช้ `Router Meta Field` เพิ่มออบเจกต์ `activeNav` ภายในฟิลด์ `meta` ของเส้นทาง และเฝ้าดูการเปลี่ยนเส้นทาง จากนั้นกำหนดออบเจกต์ `activeNav` จาก meta ของเส้นทางไปยังพร็อพเพอร์ตี้ `active-nav` ของ sidenav ของคุณ

```vue
const routes = [ { path: 'workflows', name: 'workflows', meta:{ activeNav: { parentNav: 'Flow', menu: '', submenu: '', }
} }, ]
```

```vue
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const activeNav = ref({
  parentNav: 'หน้าแรก HR',
  menu: 'แดชบอร์ด HR',
  submenu: 'การจัดการการลา',
});

router.beforeEach((to) => {
  if (to.meta.activeNav) {
    activeNav.value = to.meta.activeNav;
  }
});
</script>
```

## การใช้ข้อมูล API (isNavApi)

เมื่อ `isNavApi` ถูกตั้งค่าเป็น `true` คอมโพเนนต์ sidenav คาดหวังข้อมูลนำทางในรูปแบบอื่นที่มาจาก API โดยตรง รูปแบบนี้รวมพร็อพเพอร์ตี้เพิ่มเติมเช่น `id`, `code`, `position`, `order`, และ `attributes`

```vue
<template>
  <spr-sidenav :nav-links="apiNavLinks" :is-nav-api="true" :active-nav="activeNav" @get-navlink-item="handleNavClick">
    <template #logo-image>
      <img src="/path/to/logo.png" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// ตัวอย่างโครงสร้างข้อมูล API
const apiNavLinks = ref({
  top: [
    {
      id: '135c50eb-3dbb-4e4a-b45a-9f58b4c0921f',
      code: null,
      label: 'Dashboard',
      url: 'https://ecohub-qa.ecoapp-qa.sprout.ph/dashboard',
      icon: 'ph:house-simple',
      children: [],
      position: 'top',
      order: 1,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
      code: null,
      label: 'App Management',
      url: null,
      icon: 'ph:shapes',
      children: [
        {
          id: '03b895a8-9de5-4f0e-b19b-4d965c99cd7d',
          code: null,
          label: 'Marketplace',
          url: 'https://market.sprout.ph/',
          icon: null,
          children: [],
          position: 'top',
          order: 2,
          attributes: null,
          groupId: null,
          groupName: null,
          parentMenuId: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
          isNewTab: true,
        },
      ],
      position: 'top',
      order: 2,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
      code: null,
      label: 'Payroll',
      url: null,
      icon: 'https://eco-cdn-prod.azureedge.net/payroll.svg',
      children: [
        {
          id: null,
          code: null,
          label: 'Payroll Runs',
          url: 'https://ecohub-qa-payroll.sprout.ph/Client/Payrolls.aspx',
          icon: null,
          children: [],
          position: null,
          order: 1,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: null,
        },
        {
          id: null,
          code: null,
          label: 'Setup',
          url: '',
          icon: null,
          children: [
            {
              id: null,
              code: null,
              label: 'Company Profile',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/company-profile',
              icon: null,
              children: [],
              position: null,
              order: 1,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: null,
              isNewTab: null,
            },
            {
              id: null,
              code: null,
              label: 'Department',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/department',
              icon: null,
              children: [],
              position: null,
              order: 2,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: null,
              isNewTab: null,
            },
            // ... more nested items
          ],
          position: null,
          order: 2,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: null,
        },
      ],
      position: 'top',
      order: 6,
      attributes: null,
      groupId: '2',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
  ],
  bottom: [], // รายการนำทางด้านล่างจะเป็นไปตามโครงสร้างเดียวกัน
});

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const handleNavClick = (route) => {
  console.log(route);
};

const handleSearch = (search) => {
  console.log(search);
};

const handleNotifications = (notifications) => {
  console.log(notifications);
};

const handleRequest = (request) => {
  console.log(request);
};

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'โปรไฟล์ของฉัน',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'นโยบายความเป็นส่วนตัว',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'เงื่อนไขการให้บริการ',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'ออกจากระบบ',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
  ],
});
</script>
```

## ตัวอย่างแบบเต็ม

นี่คือตัวอย่างแบบเต็มของวิธีการใช้งานคอมโพเนนต์ Sidenav:
สลับไปที่โหลดเพื่อดูสถานะการโหลด

<div class="spr-p-4 spr-w-full spr-justify-end spr-flex">
  <spr-switch v-model="loading" >สลับไปที่โหลด</spr-switch>
</div>

<div class="no-darkmode spr-m-0 spr-bg-mushroom-100 spr-text-mushroom-950 spr-font-main spr-rounded-md spr-h-[100vh] spr-w-full spr-relative spr-flex">
  <spr-sidenav 
    class="spr-absolute spr-z-[1]" 
    :quick-actions="quickActions"
    has-search
    :active-nav="activeNav"
    :nav-links="navLinks"
    :notification-count="5"
    :request-count="`99+`"
    :user-menu="userMenu"
    :loading="loading"
    @get-navlink-item="handleGetNavLinkItem"
    @search="handleSearch"
    @notifications="handleNotifications"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
  <div class="spr-flex-1 spr-px-4 spr-py-4 spr-w-full spr-max-w-[calc(100%-60px)] spr-ml-[60px] spr-overflow-auto">
    <h1>Lorem Ipsum</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis est in quam efficitur tempor. Integer blandit egestas risus, non consequat massa rhoncus eget. Donec commodo luctus diam, egestas scelerisque justo fermentum vel. Morbi vestibulum quis arcu sit amet sollicitudin. Vestibulum fringilla et risus at porttitor. Sed at augue non nunc tempus sagittis quis a magna. Mauris lacinia neque massa, sed fermentum libero dignissim et. Vivamus faucibus aliquet arcu, a viverra leo vehicula at. Aliquam ut turpis vitae mi scelerisque blandit in non diam. Nulla molestie, ipsum id interdum auctor, sem odio bibendum turpis, sed accumsan nisl nunc id lacus. Vestibulum ante eros, accumsan sit amet mollis et, fermentum at est. In hac habitasse platea dictumst.
    </p>
    <p>
      Morbi posuere orci arcu, efficitur maximus ante eleifend ut. Aliquam suscipit finibus dui a pellentesque. Praesent vel nulla turpis. Nullam gravida diam vitae lectus consectetur euismod. Pellentesque ut leo lorem. Integer nec feugiat lorem. Nam sodales nibh ut varius rutrum. Donec vel gravida purus. Aliquam dictum, elit a maximus scelerisque, lorem odio facilisis odio, volutpat interdum diam mauris vitae massa. Nunc ornare ligula eu diam bibendum finibus. Nullam maximus convallis ornare. Curabitur dolor magna, euismod at dui pretium, feugiat aliquet mi. Nullam tincidunt sapien ante, ac efficitur eros lobortis a.
    </p>
    <p>
      Nulla lacinia fermentum fermentum. Sed lorem leo, pulvinar laoreet augue vel, rhoncus sollicitudin enim. Donec vel viverra neque. Ut at ante a massa commodo consequat quis tristique diam. Duis erat ipsum, pellentesque nec urna vitae, sodales pretium dui. Quisque ullamcorper consequat lorem. Duis bibendum dapibus velit, sed pulvinar risus ornare nec. Morbi sagittis sit amet libero quis rutrum. Curabitur finibus ullamcorper nisl nec blandit. Vestibulum placerat ex leo, vel efficitur risus vehicula et. Nam non nibh dui. Sed eu pellentesque ligula, id semper massa. Sed eu nunc fringilla, posuere diam a, porttitor eros.
    </p>
    <p>
      Nulla faucibus eros eget convallis ullamcorper. Nam nec vehicula ipsum, ut pulvinar diam. Suspendisse sit amet metus rhoncus, pulvinar arcu quis, tincidunt lectus. Proin a mi quam. Aenean vitae massa dignissim lacus ultrices faucibus. Etiam ut bibendum quam. Vestibulum ut placerat neque. Aliquam laoreet congue lacus a semper. Suspendisse sed elementum diam. Nullam faucibus urna iaculis, suscipit arcu sit amet, elementum ligula. Duis at velit sed arcu condimentum porta ut id sem. Donec et odio ut purus viverra semper.
    </p>
    <p>
      Integer quam magna, semper sed vehicula eu, maximus ut mauris. Quisque non dolor ornare, pulvinar ex id, imperdiet velit. Suspendisse potenti. In dignissim nibh ut tortor interdum accumsan a sit amet ante. Morbi vehicula odio nulla, ac fermentum augue congue at. Nulla volutpat interdum ex et aliquet. Duis pharetra tellus sit amet nisl congue molestie.
    </p>
  </div>
</div>

```vue
<template>
  <spr-sidenav
    :quick-actions="quickActions"
    has-search
    :active-nav="activeNav"
    :nav-links="navLinks"
    :notification-count="5"
    :request-count="10"
    :user-menu="userMenu"
    @get-navlink-item="handleGetNavLinkItem"
    @search="handleSearch"
    @notifications="handleNotifications"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSidenav from '@/components/sidenav/sidenav.vue';

const quickActions = ref([
  {
    menuHeading: 'Sub Heading 1',
    items: [
      {
        title: 'Leave Request',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Onboarding Request',
        description: 'Seamlessly onboard new employees into your Sprout ecosystem',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Certificate of Employee',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
  {
    menuHeading: 'Sub Heading 2',
    items: [
      {
        title: 'ReadyWage',
        description: 'Request Form',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Workflow',
        description: 'Access your hard-earned salary in advance',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 1',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'Create Something 2',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
]);

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'HR Home',
          icon: 'ph:house-simple',
          attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
          menuLinks: [
            {
              menuHeading: 'HR Management',
              items: [
                {
                  title: 'HR Dashboard',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Employee Overview',
                      items: [
                        {
                          title: 'Employee List',
                          redirect: {},
                        },
                        {
                          title: 'Attendance',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'Benefits',
                      items: [
                        {
                          title: 'Leave Management',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'Compensation',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                          attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
                        },
                      ],
                    },
                  ],
                  attributes: [{ name: 'lozenge', value: { label: 'New', tone: 'success' } }],
                },
                {
                  title: 'HR Analytics',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Employees',
          icon: 'ph:users-three',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'HR Payroll',
          icon: 'ph:leaf',
          menuLinks: [
            {
              menuHeading: 'Payroll Management',
              items: [
                {
                  title: 'Payroll Processing',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Payroll Reports',
                  submenuLinks: [
                    {
                      subMenuHeading: 'Government Reports',
                      items: [
                        {
                          title: 'SSS Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'PhilHealth Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'Pag-IBIG Report',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              menuHeading: 'HR Setup',
              items: [
                {
                  title: 'HR Settings',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'HR Employee Records',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Finance',
          icon: 'ph:currency-rub',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'Finance Operations',
              items: [
                {
                  title: 'Payroll Budget',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Expense Tracking',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Financial Reports',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'HR Vehicles',
          icon: 'ph:wallet',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'HR Fleet',
              items: [
                {
                  title: 'Company Cars',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'Fleet Management',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'HR Gallery',
          icon: 'ph:address-book',
          menuLinks: [
            {
              menuHeading: 'HR Resources',
              items: [
                {
                  title: 'HR Dashboard',
                  submenuLinks: [
                    {
                      subMenuHeading: 'HR Team',
                      items: [
                        {
                          title: 'HR Directory',
                          redirect: {},
                        },
                        {
                          title: 'HR Attendance',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'HR Benefits',
                      items: [
                        {
                          title: 'HR Leaves',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'HR Compensation',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'HR Analytics',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'HR Resources',
          icon: 'ph:alien',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
        {
          title: 'HR News',
          icon: 'ph:align-left',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
  ],
});

const handleGetNavLinkItem = (route) => {
  console.log(route);
};

const handleSearch = (search) => {
  console.log(search);
};

const handleNotifications = (notifications) => {
  console.log(notifications);
};

const handleRequest = (request) => {
  console.log(request);
};

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'โปรไฟล์ของฉัน',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'นโยบายความเป็นส่วนตัว',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'เงื่อนไขการให้บริการ',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'ออกจากระบบ',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
  ],
});
</script>
```

## ตัวอย่างแบบเต็มด้วยข้อมูล API (isNavApi)

นี่คือการใช้งานแบบเต็มตัวอย่างโดยใช้คอมโพเนนต์ sidenav กับ `isNavApi: true` และโครงสร้างข้อมูล API จริง:

<div class="no-darkmode spr-m-0 spr-bg-mushroom-100 spr-text-mushroom-950 spr-font-main spr-rounded-md spr-h-[100vh] spr-w-full spr-relative spr-flex">
  <spr-sidenav 
    class="spr-absolute spr-z-[1]" 
    :nav-links="apiNavData"
    :is-nav-api="true"
    :active-nav="activeNav"
    :notification-count="12"
    :request-count="3"
    :user-menu="userMenu"
    :loading="loading"
    has-search
    @get-navlink-item="handleNavClick"
    @search="handleSearch"
    @notifications="handleNotifications"
    @requests="handleRequests"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
  <div class="spr-flex-1 spr-px-4 spr-py-4 spr-w-full spr-max-w-[calc(100%-60px)] spr-ml-[60px] spr-overflow-auto">
    <h1>ตัวอย่างการนำทางที่ขับเคลื่อนด้วย API</h1>
    <p>
      ตัวอย่างนี้แสดงให้เห็นว่าคอมโพเนนต์ sidenav ทำงานอย่างไรกับโครงสร้างข้อมูล API จริง การนำทางถูกสร้างขึ้นแบบไดนามิกจากการตอบสนอง API รองรับลำดับชั้นที่ซ้อนกันอย่างซับซ้อนด้วยหลายระดับของเมนูและเมนูย่อย
    </p>
    <p>
      ข้อมูล API รวมพร็อพเพอร์ตี้เช่น <code>groupId</code>, <code>groupName</code>, <code>parentMenuId</code>, และ <code>isNewTab</code> ซึ่งให้ฟังก์ชันการทำงานเพิ่มเติมสำหรับการจัดระเบียบและจัดการรายการนำทาง โครงสร้างนี้มักใช้ในแอปพลิเคชันระดับองค์กรที่การนำทางต้องการความยืดหยุ่นและปรับแต่งได้
    </p>
    <p>
      สังเกตว่าส่วน Payroll แสดงการซ้อนที่ลึกด้วย Setup → Company Profile และ Department items ในขณะที่ส่วน App Management แสดงลิงก์ภายนอกที่เปิดในแท็บใหม่ ความยืดหยุ่นนี้ช่วยให้ระบบนำทางที่ครอบคลุมที่สามารถรองรับสถาปัตยกรรมแอปพลิเคชันต่างๆ
    </p>
  </div>
</div>

```vue
<template>
  <spr-sidenav
    :nav-links="apiNavData"
    :is-nav-api="true"
    :active-nav="activeNav"
    :notification-count="12"
    :request-count="3"
    :user-menu="userMenu"
    has-search
    @get-navlink-item="handleNavClick"
    @search="handleSearch"
    @notifications="handleNotifications"
    @requests="handleRequests"
  >
    <template #logo-image>
      <img src="@/assets/images/sprout-hr-logo.svg" alt="logo" />
    </template>
  </spr-sidenav>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import SprSidenav from '@/components/sidenav/sidenav.vue';

// โครงสร้างข้อมูล API จริงตัวอย่าง
const apiNavData = ref({
  top: [
    {
      id: '135c50eb-3dbb-4e4a-b45a-9f58b4c0921f',
      code: null,
      label: 'Dashboard',
      url: 'https://ecohub-qa.ecoapp-qa.sprout.ph/dashboard',
      icon: 'ph:house-simple',
      children: [],
      position: 'top',
      order: 1,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
      code: null,
      label: 'App Management',
      url: null,
      icon: 'ph:shapes',
      children: [
        {
          id: '03b895a8-9de5-4f0e-b19b-4d965c99cd7d',
          code: null,
          label: 'Marketplace',
          url: 'https://market.sprout.ph/',
          icon: null,
          children: [],
          position: 'top',
          order: 2,
          attributes: null,
          groupId: null,
          groupName: null,
          parentMenuId: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
          isNewTab: true,
        },
        {
          id: '04b895a8-9de5-4f0e-b19b-4d965c99cd8e',
          code: null,
          label: 'Extensions',
          url: 'https://extensions.sprout.ph/',
          icon: null,
          children: [],
          position: 'top',
          order: 3,
          attributes: null,
          groupId: null,
          groupName: null,
          parentMenuId: '8ee582db-afa7-4c6b-a80a-503eb7057cda',
          isNewTab: true,
        },
      ],
      position: 'top',
      order: 2,
      attributes: null,
      groupId: '1',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
      code: null,
      label: 'Payroll',
      url: null,
      icon: 'https://eco-cdn-prod.azureedge.net/payroll.svg',
      children: [
        {
          id: 'payroll-runs-001',
          code: null,
          label: 'Payroll Runs',
          url: 'https://ecohub-qa-payroll.sprout.ph/Client/Payrolls.aspx',
          icon: null,
          children: [],
          position: null,
          order: 1,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: false,
        },
        {
          id: 'payroll-setup-001',
          code: null,
          label: 'Setup',
          url: '',
          icon: null,
          children: [
            {
              id: 'company-profile-001',
              code: null,
              label: 'Company Profile',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/company-profile',
              icon: null,
              children: [],
              position: null,
              order: 1,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: 'payroll-setup-001',
              isNewTab: false,
            },
            {
              id: 'department-001',
              code: null,
              label: 'Department',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/department',
              icon: null,
              children: [],
              position: null,
              order: 2,
              attributes: [],
              groupId: null,
              groupName: 'COMPANY',
              parentMenuId: 'payroll-setup-001',
              isNewTab: false,
            },
            {
              id: 'employees-001',
              code: null,
              label: 'Employees',
              url: 'https://ecohub-qa-payroll-next-qa.sprout.ph/#/global/employees',
              icon: null,
              children: [],
              position: null,
              order: 3,
              attributes: [],
              groupId: null,
              groupName: 'WORKFORCE',
              parentMenuId: 'payroll-setup-001',
              isNewTab: false,
            },
          ],
          position: null,
          order: 2,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: false,
        },
        {
          id: 'payroll-reports-001',
          code: null,
          label: 'Reports',
          url: null,
          icon: null,
          children: [
            {
              id: 'sss-report-001',
              code: null,
              label: 'SSS Reports',
              url: 'https://ecohub-qa-payroll.sprout.ph/Reports/SSS',
              icon: null,
              children: [],
              position: null,
              order: 1,
              attributes: [],
              groupId: null,
              groupName: 'GOVERNMENT',
              parentMenuId: 'payroll-reports-001',
              isNewTab: false,
            },
            {
              id: 'philhealth-report-001',
              code: null,
              label: 'PhilHealth Reports',
              url: 'https://ecohub-qa-payroll.sprout.ph/Reports/PhilHealth',
              icon: null,
              children: [],
              position: null,
              order: 2,
              attributes: [],
              groupId: null,
              groupName: 'GOVERNMENT',
              parentMenuId: 'payroll-reports-001',
              isNewTab: false,
            },
          ],
          position: null,
          order: 3,
          attributes: [],
          groupId: null,
          groupName: null,
          parentMenuId: 'e9a88315-ecf7-49ea-82d9-0c6a5fd2a9e2',
          isNewTab: false,
        },
      ],
      position: 'top',
      order: 6,
      attributes: null,
      groupId: '2',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
  ],
  bottom: [
    {
      id: 'settings-001',
      code: null,
      label: 'Settings',
      url: '/settings',
      icon: 'ph:gear',
      children: [],
      position: 'bottom',
      order: 1,
      attributes: null,
      groupId: '99',
      groupName: null,
      parentMenuId: null,
      isNewTab: false,
    },
    {
      id: 'help-001',
      code: null,
      label: 'Help & Support',
      url: 'https://help.sprout.ph',
      icon: 'ph:question',
      children: [],
      position: 'bottom',
      order: 2,
      attributes: null,
      groupId: '99',
      groupName: null,
      parentMenuId: null,
      isNewTab: true,
    },
  ],
});

const activeNav = ref({
  parentNav: 'HR Home',
  menu: 'HR Dashboard',
  submenu: 'Leave Management',
});

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'โปรไฟล์ของฉัน',
      icon: 'ph:user',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/profile',
      },
    },
    {
      title: 'การตั้งค่าบัญชี',
      icon: 'ph:gear',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/settings',
      },
    },
    {
      title: 'นโยบายความเป็นส่วนตัว',
      icon: 'ph:shield-check',
      redirect: {
        openInNewTab: true,
        isAbsoluteURL: true,
        link: 'https://sprout.ph/privacy',
      },
    },
    {
      title: 'ออกจากระบบ',
      icon: 'ph:sign-out',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/logout',
      },
    },
  ],
});

// Event handlers
const handleNavClick = (navItem) => {
  console.log('Navigation clicked:', navItem);

  // อัปเดตการนำทางที่ใช้งานอยู่ตามโครงสร้าง API
  if (navItem.parentMenuId === null) {
    // การนำทางระดับบนสุด
    activeNav.value = {
      parentNav: navItem.label,
      menu: '',
      submenu: '',
    };
  } else {
    // จัดการลอจิกนำทางที่ซ้อนกันที่นี่
    console.log('Nested navigation:', navItem);
  }

  // จัดการการนำทาง URL
  if (navItem.url) {
    if (navItem.isNewTab) {
      window.open(navItem.url, '_blank');
    } else {
      // ใช้ router ของคุณเพื่อนำทาง
      // router.push(navItem.url);
      console.log('Navigate to:', navItem.url);
    }
  }
};

const handleSearch = (searchTerm) => {
  console.log('Search:', searchTerm);
  // ใช้ฟังก์ชันการค้นหา
};

const handleNotifications = () => {
  console.log('Notifications clicked');
  // จัดการการแจ้งเตือน
};

const handleRequests = () => {
  console.log('Requests clicked');
  // จัดการคำขอ
};
</script>
```

## การอ้างอิง API

### Props

พร็อพเพอร์ตี้ต่อไปนี้พร้อมใช้งานสำหรับคอมโพเนนต์ Sidenav:

<table>
  <thead>
    <tr>
      <td class="spr-min-w-[180px]">ชื่อ</td>
      <td>คำอธิบาย</td>
      <td>ประเภท</td>
      <td>ค่าเริ่มต้น</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>quick-actions</code>
      </td>
      <td>แสดงเมนูการดำเนินการด่วนที่มีรายการที่จัดกลุ่ม แต่ละการดำเนินการด่วนสามารถมีชื่อ คำอธิบาย ไอคอน และข้อมูลการเปลี่ยนเส้นทาง</td>
      <td>QuickAction[]</td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>
        <code>has-search</code>
      </td>
      <td>ควบคุมการมองเห็นของปุ่มค้นหาในแถบนำทางด้านข้าง</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>active-nav</code>
      </td>
      <td>ตั้งค่าสถานะที่ใช้งานอยู่สำหรับการนำทาง รวมถึงการนำทาง parent, menu และ submenu ใช้เพื่อไฮไลต์รายการนำทางที่ใช้งานอยู่</td>
      <td>{ parentNav: string; menu: string; submenu: string }</td>
      <td><code>{ parentNav: '', menu: '', submenu: '' }</code></td>
    </tr>
    <tr>
      <td>
        <code>nav-links</code>
      </td>
      <td>กำหนดโครงสร้างนำทางด้วยส่วนบนและล่าง แต่ละส่วนประกอบด้วย parent links, menu links และ submenu links สำหรับการนำทางแบบลำดับชั้น</td>
      <td>NavLinks</td>
      <td><code>{ top: [], bottom: [] }</code></td>
    </tr>
    <tr>
      <td>
        <code>notification-count</code>
      </td>
      <td>แสดงแบดจ์ตัวนับการแจ้งเตือนบนไอคอนการแจ้งเตือน ใช้ <code>0</code> เพื่อแสดงไอคอนโดยไม่มีแบดจ์หรือ string ว่างเพื่อซ่อนโดยสิ้นเชิง</td>
      <td>string | number</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>
        <code>request-count</code>
      </td>
      <td>แสดงแบดจ์ตัวนับคำขอบนไอคอนคำขอ ใช้ <code>0</code> เพื่อแสดงไอคอนโดยไม่มีแบดจ์หรือ string ว่างเพื่อซ่อนโดยสิ้นเชิง</td>
      <td>string | number</td>
      <td><code>''</code></td>
    </tr>
    <tr>
      <td>
        <code>user-menu</code>
      </td>
      <td>แสดงอวาตาร์ผู้ใช้ที่ด้านล่างของแถบนำทางด้านข้างพร้อมกับเมนูได้ เมนูผู้ใช้สามารถมีรายการต่างๆ เช่น โปรไฟล์ การตั้งค่า และออกจากระบบ

</td>
      <td>UserMenu | false</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>is-notif-active</code>
      </td>
      <td>ควบคุมว่าปุ่มการแจ้งเตือนจะปรากฏในสถานะที่ใช้งานอยู่ด้วยการจัดรูปแบบไอคอนที่เต็มหรือไม่</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>is-request-active</code>
      </td>
      <td>ควบคุมว่าปุ่มคำขอจะปรากฏในสถานะที่ใช้งานอยู่ด้วยการจัดรูปแบบไอคอนที่เต็มหรือไม่</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>
        <code>is-nav-api</code>
      </td>
      <td>เมื่อตั้งค่าเป็น true คอมโพเนนต์จะคาดหวังข้อมูลนำทางในรูปแบบ API และจะแปลงเป็นรูปแบบภายใน มีประโยชน์เมื่อรวมเข้ากับ API หลังบ้าน</td>
      <td>boolean</td>
      <td><code>false</code></td>
    </tr>
  </tbody>
</table>

### Events

Events ต่อไปนี้ถูกปล่อยออกมาจากคอมโพเนนต์ Sidenav:

<table>
  <thead>
    <tr>
      <td class="spr-min-w-[180px]">ชื่อ</td>
      <td>คำอธิบาย</td>
      <td>พารามิเตอร์</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>get-navlink-item</code>
      </td>
      <td>ถูกปล่อยออกมาเมื่อคลิกลิงก์นำทาง ส่งคืนออบเจกต์รายการที่คลิกพร้อมข้อมูลการเปลี่ยนเส้นทางและสถานะนำทางที่ใช้งานอยู่ Event นี้ให้จุดเชื่อมต่อเพื่อจัดการการนำทาง router ของคุณ</td>
      <td>
        <code>objectItem: object</code> - รายการนำทางที่คลิกพร้อมข้อมูลการเปลี่ยนเส้นทางและสถานะนำทางที่ใช้งานอยู่
      </td>
    </tr>
    <tr>
      <td>
        <code>search</code>
      </td>
      <td>ถูกปล่อยออกมาเมื่อคลิกปุ่มค้นหา สามารถใช้เพื่อเรียกใช้ฟังก์ชันการค้นหาในแอปพลิเคชัน parent</td>
      <td>
        <code>event: string</code> - มี string ค่า 'search-triggered'
      </td>
    </tr>
    <tr>
      <td>
        <code>notifications</code>
      </td>
      <td>ถูกปล่อยออกมาเมื่อคลิกปุ่มการแจ้งเตือน สามารถใช้เพื่อเรียกใช้แผงการแจ้งเตือนหรือฟังก์ชันในแอปพลิเคชัน parent</td>
      <td>
        <code>event: string</code> - มี string ค่า 'notifications-triggered'
      </td>
    </tr>
    <tr>
      <td>
        <code>requests</code>
      </td>
      <td>ถูกปล่อยออกมาเมื่อคลิกปุ่มคำขอ สามารถใช้เพื่อเรียกใช้แผงคำขอหรือฟังก์ชันในแอปพลิเคชัน parent</td>
      <td>
        <code>event: string</code> - มี string ค่า 'requests-triggered'
      </td>
    </tr>
  </tbody>
</table>

### Slots

<table>
  <thead>
    <tr>
      <td class="spr-min-w-[180px]">ชื่อ</td>
      <td>คำอธิบาย</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code>logo-image</code>
      </td>
      <td>
        Slot สำหรับแทรกรูปภาพโลโก้ที่ด้านบนของ sidenav โดยปกติใช้กับแท็ก <code>&lt;img&gt;</code> พื้นที่โลโก้มีสไตล์ที่กำหนดไว้ล่วงหน้าสำหรับการแสดงโลโก้ขนาดเล็ก (24px × 24px) อย่างเหมาะสม
      </td>
    </tr>
  </tbody>
</table>

### Types

คอมโพเนนต์ Sidenav ใช้ประเภทข้อมูลที่ซับซ้อนต่อไปนี้:

#### QuickAction

```typescript
type QuickAction = {
  menuHeading: string;
  items: QuickActionItem[];
};

type QuickActionItem = {
  title: string;
  description: string;
  icon: string;
  iconBgColor: string; // ค่า: 'green' หรือ 'purple'
  redirect: Redirect;
  hidden: boolean;
};
```

#### NavLinks

```typescript
type NavLinks = {
  top: { parentLinks: ParentLinkItem[] }[];
  bottom: { parentLinks: ParentLinkItem[] }[];
};

type ParentLinkItem = {
  title: string;
  icon: string;
  link?: string;
  redirect?: Redirect;
  menuLinks: MenuLink[];
  submenuLinks?: SubmenuLink[];
  hidden?: boolean;
  attributes?: Attributes[]; // สำหรับ metadata เพิ่มเติมเช่น lozenges
};

type MenuLink = {
  menuHeading: string;
  items: MenuLinkItem[] | ParentLinkItem[];
};

type MenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  submenuLinks: SubmenuLink[];
  attributes?: Attributes[]; // สำหรับ metadata เพิ่มเติมเช่น lozenges
};

type SubmenuLink = {
  subMenuHeading: string;
  items: SubmenuLinkItem[] | ParentLinkItem[];
};

type SubmenuLinkItem = {
  title: string;
  hidden: boolean;
  redirect: Redirect;
  attributes?: Attributes[]; // สำหรับ metadata เพิ่มเติมเช่น lozenges
};

type Redirect = {
  openInNewTab: boolean;
  isAbsoluteURL: boolean;
  link: string;
};
```

#### ประเภทข้อมูล API

เมื่อใช้ `isNavApi: true` ประเภทต่อไปนี้จะใช้สำหรับการนำทางที่มาจาก API:

```typescript
type NavAPILinks = {
  top: { parentLinks: NavItem[] }[];
  bottom: { parentLinks: NavItem[] }[];
};

interface NavItem {
  id: string;
  groupId: string;
  label: string;
  icon?: string | null;
  url?: string | null;
  isNewTab?: boolean;
  children?: NavItem[] | null;
  groupName?: string | null;
  hidden?: boolean;
  attributes?: Attributes[] | null;
  position?: string;
  order?: number;
  parentMenuId?: string | null;
}

type Attributes = {
  name: string;
  value: unknown | string | number | boolean | AttrLozenge;
};

type AttrLozenge = {
  label: string;
  tone?: string; // ค่าที่ถูกต้อง: 'danger', 'information', 'plain', 'pending', 'success', 'neutral', 'caution'
};
```

#### UserMenu

```typescript
type UserMenu = {
  name: string;
  email: string;
  profileImage: string;
  items: UserMenuItem[];
};

type UserMenuItem = {
  title: string;
  icon: string;
  hidden: boolean;
  redirect: Redirect;
};
```

## การใช้งานผลิตภัณฑ์

<div class="spr-flex spr-items-center spr-gap-4 spr-rounded">
  <spr-logo name="ecosystem" theme="dark" width="50px" />
  <spr-logo name="hr" theme="dark"  width="50px" />
  <spr-logo name="payroll" theme="dark" width="50px" />
</div>

<script lang="ts" setup>
import { ref } from 'vue';

import SideNavDataApi from '../../../../json-data/side-nav-api.json';

import SprSidenav from '@/components/sidenav/sidenav.vue';
import SprLogo from "@/components/logo/logo.vue";
import SprSwitch from '@/components/switch/switch.vue';

const loading= ref(false);
const quickActions = ref([
  {
    menuHeading: 'หัวข้อย่อย 1',
    items: [
      {
        title: 'คำขอการลา',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'คำขอการเริ่มงาน',
        description: 'Seamlessly onboard new employees into your Sprout ecosystem',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'หนังสือรับรองพนักงาน',
        description: 'Lorem ipsum dolor sit amet consectetur. ',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
  {
    menuHeading: 'หัวข้อย่อย 2',
    items: [
      {
        title: 'ReadyWage',
        description: 'แบบฟอร์มคำขอ',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'สร้างเวิร์กโฟลว์',
        description: 'Access your hard-earned salary in advance',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'สร้างบางอย่าง 1',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
      {
        title: 'สร้างบางอย่าง 2',
        description: 'Lorem ipsum dolor sit amet consectetur.',
        icon: 'ph:house-simple',
        iconBgColor: 'purple',
        redirect: {
          openInNewTab: false,
          isAbsoluteURL: false,
          link: '/',
        },
      },
    ],
  },
]);

const activeNav = ref({
  parentNav: 'หน้าแรก HR',
  menu: 'แดชบอร์ด HR',
  submenu: 'การจัดการการลา',
});
const apiNavData = ref(SideNavDataApi);
const navLinks = ref({
  top: [
    {
      parentLinks: [
        {
          title: 'หน้าแรก HR',
          icon: 'ph:house-simple',
          attributes: [{ name: 'lozenge', value: { label: 'ใหม่', tone: 'success' } }],
          menuLinks: [
            {
              menuHeading: 'การจัดการ HR',
              items: [
                {
                  title: 'แดชบอร์ด HR',
                  submenuLinks: [
                    {
                      subMenuHeading: 'ภาพรวมพนักงาน',
                      items: [
                        {
                          title: 'รายชื่อพนักงาน',
                          redirect: {},
                        },
                        {
                          title: 'การเข้างาน',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'สวัสดิการ',
                      items: [
                        {
                          title: 'การจัดการการลา',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'ค่าตอบแทน',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                          attributes: [{ name: 'lozenge', value: { label: 'ใหม่', tone: 'success' } }],
                        },
                      ],
                    },
                  ],
                  attributes: [{ name: 'lozenge', value: { label: 'ใหม่', tone: 'success' } }],
                },
                {
                  title: 'การวิเคราะห์ HR',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'พนักงาน HR',
          icon: 'ph:users-three',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'เงินเดือน HR',
          icon: 'ph:leaf',
          menuLinks: [
            {
              menuHeading: 'การจัดการเงินเดือน',
              items: [
                {
                  title: 'การดำเนินการเงินเดือน',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'รายงานเงินเดือน',
                  submenuLinks: [
                    {
                      subMenuHeading: 'รายงานภาครัฐ',
                      items: [
                        {
                          title: 'รายงาน SSS',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'รายงาน PhilHealth',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                        {
                          title: 'รายงาน Pag-IBIG',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              menuHeading: 'การตั้งค่า HR',
              items: [
                {
                  title: 'การตั้งค่า HR',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'บันทึกพนักงาน HR',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'การเงิน HR',
          icon: 'ph:currency-rub',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'การดำเนินการทางการเงิน',
              items: [
                {
                  title: 'งบประมาณเงินเดือน',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'การติดตามค่าใช้จ่าย',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'รายงานทางการเงิน',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
        {
          title: 'ยานพาหนะ HR',
          icon: 'ph:wallet',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
          menuLinks: [
            {
              menuHeading: 'กลุ่มยานพาหนะ HR',
              items: [
                {
                  title: 'รถบริษัท',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
                {
                  title: 'การจัดการกลุ่มยานพาหนะ',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  bottom: [
    {
      parentLinks: [
        {
          title: 'แกลเลอรี่ HR',
          icon: 'ph:address-book',
          menuLinks: [
            {
              menuHeading: 'ทรัพยากร HR',
              items: [
                {
                  title: 'แดชบอร์ด HR',
                  submenuLinks: [
                    {
                      subMenuHeading: 'ทีม HR',
                      items: [
                        {
                          title: 'ไดเรกทอรี่ HR',
                          redirect: {},
                        },
                        {
                          title: 'การเข้างาน HR',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                    {
                      subMenuHeading: 'สวัสดิการ HR',
                      items: [
                        {
                          title: 'การลา HR',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: true,
                            link: 'https://www.google.com/',
                          },
                        },
                        {
                          title: 'ค่าตอบแทน HR',
                          redirect: {
                            openInNewTab: false,
                            isAbsoluteURL: false,
                            link: '/',
                          },
                        },
                      ],
                    },
                  ],
                },
                {
                  title: 'การวิเคราะห์ HR',
                  redirect: {
                    openInNewTab: false,
                    isAbsoluteURL: false,
                    link: '/',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      parentLinks: [
        {
          title: 'ทรัพยากร HR',
          icon: 'ph:alien',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
        {
          title: 'ข่าว HR',
          icon: 'ph:align-left',
          redirect: {
            openInNewTab: false,
            isAbsoluteURL: false,
            link: '/',
          },
        },
      ],
    },
  ],
});

const handleGetNavLinkItem = (route) => {
  console.log(route);
};

const handleSearch = (search) => {
  console.log(search);
};

const handleNotifications = (notifications) => {
  console.log(notifications);
};

const handleRequest = (request) => {
  console.log(request);
};

const userMenu = ref({
  name: 'John Doe',
  email: 'johnDoe@sprout.ph',
  profileImage: 'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
  items: [
    {
      title: 'โปรไฟล์ของฉัน',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'นโยบายความเป็นส่วนตัว',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'เงื่อนไขการให้บริการ',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
    {
      title: 'ออกจากระบบ',
      icon: 'ph:house-simple',
      redirect: {
        openInNewTab: false,
        isAbsoluteURL: false,
        link: '/',
      },
    },
  ],
});

const handleNavClick = (navItem) => {
  console.log('Navigation clicked:', navItem);
  // จัดการลอจิกนำทางที่นี่
};  

const handleRequests = () => {
  console.log('Requests clicked');
  // จัดการคำขอ
};
</script>
