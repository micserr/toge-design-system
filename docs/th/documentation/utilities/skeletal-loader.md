---
title: ตัวโหลดโครงกระดูก
descripttion: ยูทิลิตี้ตัวโหลดโครงกระดูกให้องค์ประกอบตัวยึดตำแหน่งเพื่อระบุเนื้อหาที่กำลังโหลด ปรับปรุงประสบการณ์ผู้ใช้ระหว่างการดึงข้อมูล
outline: deep
---

# ตัวโหลดโครงกระดูก

ตัวโหลดโครงกระดูกเป็นยูทิลิตี้ที่ออกแบบมาเพื่อให้ตัวยึดตำแหน่งสำหรับเนื้อหาที่กำลังโหลด มักใช้ในอินเทอร์เฟซผู้ใช้เพื่อปรับปรุงประสบการณ์ผู้ใช้โดยระบุว่ากำลังดึงข้อมูล ซึ่งช่วยลดเวลาการโหลดที่รับรู้และปรับปรุงการมีส่วนร่วมของผู้ใช้

## การใช้งานพื้นฐาน

ในการใช้ตัวโหลดโครงกระดูก คุณสามารถรวมไว้ใน HTML ของคุณดังนี้:

<div class="spr-space-y-2">
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
</div>

```html
<div class="spr-space-y-2">
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
  <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
</div>
```

## รูปแบบต่างๆ

### ขนาดต่างๆ

คุณสามารถปรับแต่งขนาดของตัวโหลดโครงกระดูกโดยใช้คลาสยูทิลิตี้ความสูงและความกว้างที่แตกต่างกัน:

<div class="spr-space-y-2">
  <!-- ตัวโหลดขนาดเล็ก -->
  <div class="spr-skeletal-loader spr-h-2 spr-w-24"></div>

  <!-- ตัวโหลดขนาดกลาง -->
  <div class="spr-skeletal-loader spr-h-4 spr-w-48"></div>

  <!-- ตัวโหลดขนาดใหญ่ -->
  <div class="spr-skeletal-loader spr-h-6 spr-w-full"></div>
</div>

```html
<!-- ตัวโหลดขนาดเล็ก -->
<div class="spr-skeletal-loader spr-h-2 spr-w-24"></div>

<!-- ตัวโหลดขนาดกลาง -->
<div class="spr-skeletal-loader spr-h-4 spr-w-48"></div>

<!-- ตัวโหลดขนาดใหญ่ -->
<div class="spr-skeletal-loader spr-h-6 spr-w-full"></div>
```

### มุมโค้ง

เพิ่มมุมโค้งสำหรับรูปลักษณ์ที่ขัดเกลา:

<div class="spr-skeletal-loader spr-h-4 spr-w-full spr-rounded-md"></div>

```html
<div class="spr-skeletal-loader spr-h-4 spr-w-full spr-rounded-md"></div>
```

### ตัวโหลดวงกลม

สร้างตัวโหลดวงกลมสำหรับรูปโปรไฟล์หรือไอคอน:

<div class="spr-skeletal-loader spr-h-12 spr-w-12 spr-rounded-full"></div>

```html
<div class="spr-skeletal-loader spr-h-12 spr-w-12 spr-rounded-full"></div>
```

## เลย์เอาต์ที่ซับซ้อน

คุณสามารถรวมตัวโหลดโครงกระดูกหลายตัวเพื่อสร้างสถานะการโหลดที่ซับซ้อนสำหรับการ์ด ตาราง หรือองค์ประกอบ UI อื่นๆ:

<!-- สถานะการโหลดการ์ด -->
<div class="spr-card spr-space-y-4 spr-p-4">
  <!-- ส่วนหัว -->
  <div class="spr-flex spr-items-center spr-space-x-3">
    <div class="spr-skeletal-loader spr-h-10 spr-w-10 spr-rounded-full"></div>
    <div class="spr-flex-1 spr-space-y-2">
      <div class="spr-skeletal-loader spr-h-3 spr-w-1/2"></div>
      <div class="spr-skeletal-loader spr-h-2 spr-w-1/4"></div>
    </div>
  </div>

  <!-- เนื้อหา -->
  <div class="spr-space-y-2">
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-3/4"></div>
  </div>
</div>

```html
<!-- สถานะการโหลดการ์ด -->
<div class="spr-card spr-space-y-4 spr-p-4">
  <!-- ส่วนหัว -->
  <div class="spr-flex spr-items-center spr-space-x-3">
    <div class="spr-skeletal-loader spr-h-10 spr-w-10 spr-rounded-full"></div>
    <div class="spr-flex-1 spr-space-y-2">
      <div class="spr-skeletal-loader spr-h-3 spr-w-1/2"></div>
      <div class="spr-skeletal-loader spr-h-2 spr-w-1/4"></div>
    </div>
  </div>

  <!-- เนื้อหา -->
  <div class="spr-space-y-2">
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-full"></div>
    <div class="spr-skeletal-loader spr-h-4 spr-w-3/4"></div>
  </div>
</div>
```
