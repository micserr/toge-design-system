---
title: รัศมีขอบ
descripttion: คลาสยูทิลิตี้สำหรับตั้งค่ารัศมีขอบบนองค์ประกอบ
outline: deep
---

# รัศมีขอบ

คลาสรัศมีขอบสำหรับองค์ประกอบที่โค้งมนอย่างสม่ำเสมอ

<table>
  <thead>
    <tr>
      <th>ค่า</th>
      <th>ตัวแปร Root</th>
      <th>คลาส</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>2px</td>
      <td><code>--size-50</code></td>
      <td><code>spr-rounded-border-radius-2xs</code></td>
    </tr>
    <tr>
      <td>4px</td>
      <td><code>--size-100</code></td>
      <td><code>spr-rounded-border-radius-xs</code></td>
    </tr>
    <tr>
      <td>6px</td>
      <td><code>--size-150</code></td>
      <td><code>spr-rounded-border-radius-sm</code></td>
    </tr>
    <tr>
      <td>8px</td>
      <td><code>--size-200</code></td>
      <td><code>spr-rounded-border-radius-md</code></td>
    </tr>
    <tr>
      <td>12px</td>
      <td><code>--size-250</code></td>
      <td><code>spr-rounded-border-radius-lg</code></td>
    </tr>
    <tr>
      <td>16px</td>
      <td><code>--size-300</code></td>
      <td><code>spr-rounded-border-radius-xl</code></td>
    </tr>
    <tr>
      <td>999px</td>
      <td>-</td>
      <td><code>spr-rounded-border-radius-full</code></td>
    </tr>
  </tbody>
</table>

## การใช้งาน

ใส่คลาสรัศมีขอบกับองค์ประกอบใดก็ได้:

```html
<!-- รัศมีเล็ก (8px) -->
<div class="spr-rounded-border-radius-md spr-bg-mushroom-100 p-4">เนื้อหา</div>

<!-- รัศมีใหญ่ (16px) -->
<div class="spr-rounded-border-radius-xl spr-border spr-border-solid spr-border-color-weak p-4">การ์ด</div>

<!-- วงกลม/ pill เต็ม -->
<button class="spr-rounded-border-radius-full spr-bg-kangkong-600 spr-text-color-inverted-strong px-4 py-2">
  ปุ่ม
</button>
```
