import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Sprout Design System',
  description: 'Toge - The Sprout Design System',
  head: [
    ['link', { rel: 'icon', type: 'image/ico', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#5f67ee' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    [
      'meta',
      {
        property: 'og:title',
        content: 'Welcome to TOGE - The Sprout Design System',
      },
    ],
    ['meta', { property: 'og:site_name', content: 'Toge' }],
  ],
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: 'Sprout Design System',
      description: 'Toge - The Sprout Design System',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/guide/basics/installation' },
          {
            text: 'Components',
            link: '/documentation/components/accordion',
          },
          {
            text: 'Playground',
            link: 'https://zealous-flower-090cd4100.4.azurestaticapps.net/',
          },
        ],

        sidebar: {
          '/guide/': [
            {
              text: 'Basics',
              items: [
                {
                  text: 'Installation',
                  link: '/guide/basics/installation',
                },
                {
                  text: 'Quick Start',
                  link: '/guide/basics/quick-start',
                },
              ],
            },
            {
              text: 'Contributing',
              items: [
                {
                  text: 'Component Creation',
                  link: '/guide/contributing/component-creation',
                },
                {
                  text: 'Component Documentation',
                  link: '/guide/contributing/component-documentation',
                },
                {
                  text: 'Component Testing',
                  link: '/guide/contributing/component-testing',
                },
                {
                  text: 'Contribution',
                  link: '/guide/contributing/contribution',
                },
              ],
            },
            {
              text: 'Advanced',
              items: [{ text: 'Changelog', link: '/guide/changelog' }],
            },
          ],
          '/documentation/': [
            {
              text: 'Components',
              items: [
                {
                  text: 'Accordion',
                  link: '/documentation/components/accordion',
                },
                {
                  text: 'Attribute Filter',
                  link: '/documentation/components/attribute-filter',
                },
                {
                  text: 'Audit Trail',
                  link: '/documentation/components/audit-trail',
                },
                {
                  text: 'Avatar',
                  link: '/documentation/components/avatar',
                },
                {
                  text: 'Badge',
                  link: '/documentation/components/badge',
                },
                {
                  text: 'Banner',
                  link: '/documentation/components/banner',
                },
                {
                  text: 'Button',
                  link: '/documentation/components/button/button',
                  items: [
                    {
                      text: 'Button Dropdown',
                      link: '/documentation/components/button/button-dropdown',
                    },
                  ],
                },
                {
                  text: 'Calendar',
                  link: '/documentation/components/calendar',
                  items: [
                    {
                      text: 'Calendar Cell',
                      link: '/documentation/components/calendar-cell',
                    },
                  ],
                },

                {
                  text: 'Card',
                  link: '/documentation/components/card',
                },
                {
                  text: 'Chips',
                  link: '/documentation/components/chips',
                },
                {
                  text: 'Collapsible',
                  link: '/documentation/components/collapsible',
                },
                {
                  text: 'Dropdown',
                  link: '/documentation/components/dropdown',
                },
                {
                  text: 'Empty State',
                  link: '/documentation/components/empty-state',
                },
                {
                  text: 'Filter',
                  link: '/documentation/components/filter',
                },
                {
                  text: 'Floating Action',
                  link: '/documentation/components/floating-action',
                },
                {
                  text: 'Icon',
                  link: '/documentation/components/icon',
                },
                {
                  text: 'List',
                  link: '/documentation/components/list',
                },
                {
                  text: 'Lozenge',
                  link: '/documentation/components/lozenge',
                },
                {
                  text: 'Modal',
                  link: '/documentation/components/modal',
                },
                {
                  text: 'Progress Bar',
                  link: '/documentation/components/progress-bar',
                },
                {
                  text: 'Sidenav',
                  link: '/documentation/components/sidenav',
                },
                {
                  text: 'Sidepanel',
                  link: '/documentation/components/sidepanel/sidepanel',
                  items: [
                    {
                      text: 'Stacking Sidepanel',
                      link: '/documentation/components/sidepanel/stacking-sidepanel',
                    },
                  ],
                },
                {
                  text: 'Snackbar',
                  link: '/documentation/components/snackbar',
                },
                {
                  text: 'Status',
                  link: '/documentation/components/status',
                },
                {
                  text: 'Stepper',
                  link: '/documentation/components/stepper',
                },
                {
                  text: 'Popper',
                  link: '/documentation/components/popper',
                },
                {
                  text: 'Table',
                  link: '/documentation/components/table/table',
                  items: [
                    {
                      text: 'Table Pagination',
                      link: '/documentation/components/table/table-pagination',
                    },
                  ],
                },
                {
                  text: 'Tabs',
                  link: '/documentation/components/tabs',
                },
                {
                  text: 'Tooltip',
                  link: '/documentation/components/tooltip',
                },
              ],
            },
            {
              text: 'Forms',
              items: [
                {
                  text: 'Checkbox',
                  link: '/documentation/components/checkbox',
                },
                {
                  text: 'Date Picker',
                  link: '/documentation/components/date-picker/date-picker',
                  items: [
                    {
                      text: 'Date Range Picker',
                      link: '/documentation/components/date-picker/date-range-picker',
                    },
                    {
                      text: 'Date Calendar Picker',
                      link: '/documentation/components/date-picker/date-calendar-picker',
                    },
                  ],
                },
                {
                  text: 'File Upload',
                  link: '/documentation/components/file-upload',
                },
                {
                  text: 'Input',
                  link: '/documentation/components/input/input',
                  items: [
                    { text: 'Search Input', link: '/documentation/components/input/input-search' },
                    { text: 'Username Input', link: '/documentation/components/input/input-username' },
                    { text: 'Email Input', link: '/documentation/components/input/input-email' },
                    { text: 'Password Input', link: '/documentation/components/input/input-password' },
                    { text: 'URL Input', link: '/documentation/components/input/input-url' },
                    { text: 'Contact Number Input', link: '/documentation/components/input/input-contact-number' },
                    { text: 'Dropdown Input', link: '/documentation/components/input/input-dropdown' },
                    { text: 'Currency Input', link: '/documentation/components/input/input-currency' },
                  ],
                },
                {
                  text: 'Radio',
                  link: '/documentation/components/radio',
                },
                {
                  text: 'Select',
                  link: '/documentation/components/select/select',
                  items: [
                    {
                      text: 'Multi Select',
                      link: '/documentation/components/select/select-multiple',
                    },
                    {
                      text: 'Ladderized Select',
                      link: '/documentation/components/select/select-ladderized',
                    },
                  ],
                },
                {
                  text: 'Slider',
                  link: '/documentation/components/slider',
                },
                {
                  text: 'Switch',
                  link: '/documentation/components/switch',
                },
                {
                  text: 'Textarea',
                  link: '/documentation/components/textarea',
                },
                {
                  text: 'Time Picker',
                  link: '/documentation/components/time-picker',
                },
              ],
            },
            {
              text: 'Utilities',
              items: [
                {
                  text: 'Border Radius',
                  link: '/documentation/utilities/border-radius',
                },
                {
                  text: 'Border Color',
                  link: '/documentation/utilities/border-colors',
                },
                {
                  text: 'Colors',
                  link: '/documentation/utilities/colors',
                },
                {
                  text: 'Max Width',
                  link: '/documentation/utilities/max-width',
                },
                {
                  text: 'Spacing',
                  link: '/documentation/utilities/spacing',
                },
                {
                  text: 'Typography',
                  link: '/documentation/utilities/typography',
                },
                {
                  text: 'Skeletal Loader',
                  link: '/documentation/utilities/skeletal-loader',
                },
              ],
            },
            {
              text: 'Resources',
              items: [
                {
                  text: 'Product Logo',
                  link: '/documentation/components/logo',
                },
              ],
            },
          ],
        },

        socialLinks: [
          {
            icon: {
              svg: '<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="url(#azure-devops-color-16__paint0_linear_707_116)" d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005L15 3.622zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"/><defs><linearGradient id="azure-devops-color-16__paint0_linear_707_116" x1="8" x2="8" y1="14.956" y2="1.026" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset=".16" stop-color="#1380DA"/><stop offset=".53" stop-color="#3C91E5"/><stop offset=".82" stop-color="#559CEC"/><stop offset="1" stop-color="#5EA0EF"/></linearGradient></defs></svg>',
            },
            link: 'https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next',
            ariaLabel: 'Link To Azure DevOps',
          },
        ],

        search: {
          provider: 'local',
        },

        footer: {
          copyright: 'Copyright © 2025 Sprout Frontend Engineers',
        },
      },
    },
    th: {
      label: 'ไทย',
      lang: 'th',
      title: 'ระบบการออกแบบ Sprout',
      description: 'Toge - ระบบการออกแบบ Sprout',
      themeConfig: {
        nav: [
          { text: 'คำแนะนำ', link: '/th/guide/basics/installation' },
          {
            text: 'ส่วนประกอบ',
            link: '/th/documentation/components/accordion',
          },
          {
            text: 'พื้นที่ทดลอง',
            link: 'https://zealous-flower-090cd4100.4.azurestaticapps.net/',
          },
        ],

        sidebar: {
          '/th/guide/': [
            {
              text: 'พื้นฐาน',
              items: [
                {
                  text: 'การติดตั้ง',
                  link: '/th/guide/basics/installation',
                },
                {
                  text: 'เริ่มใช้งานด่วน',
                  link: '/th/guide/basics/quick-start',
                },
              ],
            },
            {
              text: 'การมีส่วนร่วม',
              items: [
                {
                  text: 'การสร้างส่วนประกอบ',
                  link: '/th/guide/contributing/component-creation',
                },
                {
                  text: 'เอกสารส่วนประกอบ',
                  link: '/th/guide/contributing/component-documentation',
                },
                {
                  text: 'การทดสอบส่วนประกอบ',
                  link: '/th/guide/contributing/component-testing',
                },
                {
                  text: 'การมีส่วนร่วม',
                  link: '/th/guide/contributing/contribution',
                },
              ],
            },
            {
              text: 'ขั้นสูง',
              items: [{ text: 'บันทึกการเปลี่ยนแปลง', link: '/th/guide/changelog' }],
            },
          ],
          '/th/documentation/': [
            {
              text: 'ส่วนประกอบ',
              items: [
                {
                  text: 'แอคคอร์เดียน',
                  link: '/th/documentation/components/accordion',
                },
                {
                  text: 'ตัวกรองคุณลักษณะ',
                  link: '/th/documentation/components/attribute-filter',
                },
                {
                  text: 'เส้นทางการตรวจสอบ',
                  link: '/th/documentation/components/audit-trail',
                },
                {
                  text: 'อวาตาร์',
                  link: '/th/documentation/components/avatar',
                },
                {
                  text: 'แบดจ์',
                  link: '/th/documentation/components/badge',
                },
                {
                  text: 'แบนเนอร์',
                  link: '/th/documentation/components/banner',
                },
                {
                  text: 'ปุ่ม',
                  link: '/th/documentation/components/button/button',
                  items: [
                    {
                      text: 'ปุ่มดร็อปดาวน์',
                      link: '/th/documentation/components/button/button-dropdown',
                    },
                  ],
                },
                {
                  text: 'ปฏิทิน',
                  link: '/th/documentation/components/calendar',
                  items: [
                    {
                      text: 'เซลล์ปฏิทิน',
                      link: '/th/documentation/components/calendar-cell',
                    },
                  ],
                },

                {
                  text: 'การ์ด',
                  link: '/th/documentation/components/card',
                },
                {
                  text: 'ชิปส์',
                  link: '/th/documentation/components/chips',
                },
                {
                  text: 'ที่พับได้',
                  link: '/th/documentation/components/collapsible',
                },
                {
                  text: 'ดร็อปดาวน์',
                  link: '/th/documentation/components/dropdown',
                },
                {
                  text: 'สถานะว่าง',
                  link: '/th/documentation/components/empty-state',
                },
                {
                  text: 'ตัวกรอง',
                  link: '/th/documentation/components/filter',
                },
                {
                  text: 'ปุ่มลอย',
                  link: '/th/documentation/components/floating-action',
                },
                {
                  text: 'ไอคอน',
                  link: '/th/documentation/components/icon',
                },
                {
                  text: 'รายการ',
                  link: '/th/documentation/components/list',
                },
                {
                  text: 'ป้าย',
                  link: '/th/documentation/components/lozenge',
                },
                {
                  text: 'โมดอล',
                  link: '/th/documentation/components/modal',
                },
                {
                  text: 'แถบความคืบหน้า',
                  link: '/th/documentation/components/progress-bar',
                },
                {
                  text: 'แถบด้านข้าง',
                  link: '/th/documentation/components/sidenav',
                },
                {
                  text: 'แผงด้านข้าง',
                  link: '/th/documentation/components/sidepanel/sidepanel',
                  items: [
                    {
                      text: 'แผงด้านข้างซ้อน',
                      link: '/th/documentation/components/sidepanel/stacking-sidepanel',
                    },
                  ],
                },
                {
                  text: 'แถบแจ้งเตือน',
                  link: '/th/documentation/components/snackbar',
                },
                {
                  text: 'สถานะ',
                  link: '/th/documentation/components/status',
                },
                {
                  text: 'สเตปเปอร์',
                  link: '/th/documentation/components/stepper',
                },
                {
                  text: 'ป็อปเปอร์',
                  link: '/th/documentation/components/popper',
                },
                {
                  text: 'ตาราง',
                  link: '/th/documentation/components/table/table',
                  items: [
                    {
                      text: 'การแบ่งหน้าในตาราง',
                      link: '/th/documentation/components/table/table-pagination',
                    },
                  ],
                },
                {
                  text: 'แท็บ',
                  link: '/th/documentation/components/tabs',
                },
                {
                  text: 'เครื่องมือแสดงคำแนะนำ',
                  link: '/th/documentation/components/tooltip',
                },
              ],
            },
            {
              text: 'ฟอร์ม',
              items: [
                {
                  text: 'เช็คบ็อกซ์',
                  link: '/th/documentation/components/checkbox',
                },
                {
                  text: 'เครื่องมือเลือกวันที่',
                  link: '/th/documentation/components/date-picker/date-picker',
                  items: [
                    {
                      text: 'เครื่องมือเลือกช่วงวันที่',
                      link: '/th/documentation/components/date-picker/date-range-picker',
                    },
                    {
                      text: 'เครื่องมือเลือกวันที่แบบปฏิทิน',
                      link: '/th/documentation/components/date-picker/date-calendar-picker',
                    },
                  ],
                },
                {
                  text: 'การอัปโหลดไฟล์',
                  link: '/th/documentation/components/file-upload',
                },
                {
                  text: 'ช่องป้อนข้อมูล',
                  link: '/th/documentation/components/input/input',
                  items: [
                    { text: 'ช่องป้อนข้อมูลค้นหา', link: '/th/documentation/components/input/input-search' },
                    { text: 'ช่องป้อนข้อมูลชื่อผู้ใช้', link: '/th/documentation/components/input/input-username' },
                    { text: 'ช่องป้อนข้อมูลอีเมล', link: '/th/documentation/components/input/input-email' },
                    { text: 'ช่องป้อนข้อมูลรหัสผ่าน', link: '/th/documentation/components/input/input-password' },
                    { text: 'ช่องป้อนข้อมูล URL', link: '/th/documentation/components/input/input-url' },
                    {
                      text: 'ช่องป้อนข้อมูลหมายเลขติดต่อ',
                      link: '/th/documentation/components/input/input-contact-number',
                    },
                    { text: 'ช่องป้อนข้อมูลดร็อปดาวน์', link: '/th/documentation/components/input/input-dropdown' },
                    { text: 'ช่องป้อนข้อมูลสกุลเงิน', link: '/th/documentation/components/input/input-currency' },
                  ],
                },
                {
                  text: 'เรดิโอ',
                  link: '/th/documentation/components/radio',
                },
                {
                  text: 'เลือก',
                  link: '/th/documentation/components/select/select',
                  items: [
                    {
                      text: 'เลือกหลายรายการ',
                      link: '/th/documentation/components/select/select-multiple',
                    },
                    {
                      text: 'เลือกแบบขั้นบันได',
                      link: '/th/documentation/components/select/select-ladderized',
                    },
                  ],
                },
                {
                  text: 'สไลเดอร์',
                  link: '/th/documentation/components/slider',
                },
                {
                  text: 'สวิตช์',
                  link: '/th/documentation/components/switch',
                },
                {
                  text: 'พื้นที่ข้อความ',
                  link: '/th/documentation/components/textarea',
                },
                {
                  text: 'เครื่องมือเลือกเวลา',
                  link: '/th/documentation/components/time-picker',
                },
              ],
            },
            {
              text: 'ยูทิลิตี้',
              items: [
                {
                  text: 'รัศมีขอบ',
                  link: '/th/documentation/utilities/border-radius',
                },
                {
                  text: 'สีขอบ',
                  link: '/th/documentation/utilities/border-colors',
                },
                {
                  text: 'สี',
                  link: '/th/documentation/utilities/colors',
                },
                {
                  text: 'ความกว้างสูงสุด',
                  link: '/th/documentation/utilities/max-width',
                },
                {
                  text: 'ระยะห่าง',
                  link: '/th/documentation/utilities/spacing',
                },
                {
                  text: 'ตัวอักษร',
                  link: '/th/documentation/utilities/typography',
                },
                {
                  text: 'ตัวโหลดโครงกระดูก',
                  link: '/th/documentation/utilities/skeletal-loader',
                },
              ],
            },
            {
              text: 'ทรัพยากร',
              items: [
                {
                  text: 'โลโก้ผลิตภัณฑ์',
                  link: '/th/documentation/components/logo',
                },
              ],
            },
          ],
        },

        socialLinks: [
          {
            icon: {
              svg: '<svg width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="url(#azure-devops-color-16__paint0_linear_707_116)" d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005L15 3.622zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"/><defs><linearGradient id="azure-devops-color-16__paint0_linear_707_116" x1="8" x2="8" y1="14.956" y2="1.026" gradientUnits="userSpaceOnUse"><stop stop-color="#0078D4"/><stop offset=".16" stop-color="#1380DA"/><stop offset=".53" stop-color="#3C91E5"/><stop offset=".82" stop-color="#559CEC"/><stop offset="1" stop-color="#5EA0EF"/></linearGradient></defs></svg>',
            },
            link: 'https://dev.azure.com/sproutphil/Sprout%20Design%20System/_git/Sprout%20Design%20System%20Next',
            ariaLabel: 'ลิงก์ไปยัง Azure DevOps',
          },
        ],

        search: {
          provider: 'local',
        },

        footer: {
          copyright: 'ลิขสิทธิ์ © 2025 วิศวกร Frontend ของ Sprout',
        },
      },
    },
  },
});
