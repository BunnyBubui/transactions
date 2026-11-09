<p align="center">
  <img src="docs/assets/readme-banner.svg" alt="Transaction List" width="100%" />
</p>

<h1 align="center">Transaction List</h1>

<p align="center">Loads a JSON transaction list and filters by date; this is a frontend demonstration</p>

<p align="center">
  <img alt="Prototype" src="https://img.shields.io/badge/Prototype-0e7490?style=flat-square" /> <img alt="React" src="https://img.shields.io/badge/React-0e7490?style=flat-square" /> <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-0e7490?style=flat-square" /> <img alt="Vite" src="https://img.shields.io/badge/Vite-0e7490?style=flat-square" />
</p>

<p align="center"><a href="#overview">ภาพรวม</a> · <a href="#features">ความสามารถ</a> · <a href="#start">เริ่มใช้งาน</a> · <a href="#structure">โครงสร้าง</a> · <a href="#validation">ตรวจสอบงาน</a></p>

<a id="overview"></a>

## ภาพรวม

หน้าแสดงรายการธุรกรรมจากไฟล์ JSON พร้อมตัวกรองวันที่ ใช้ React state และ effect จัดการข้อมูลและการแสดงผล โดยข้อมูลตัวอย่างเป็นข้อมูลสมมติ

<a id="features"></a>

## ความสามารถที่มีใน source

| ส่วนงาน | รายละเอียด | อ้างอิง |
|---|---|---|
| **JSON data** | โหลดรายการตัวอย่างจาก public folder | [ดู source](public/db.json) |
| **Date filter** | กรองรายการตามวันที่ที่เลือก | [ดู source](src/App.jsx) |

<a id="start"></a>

## เริ่มต้นใช้งาน

**สิ่งที่ต้องมี:** Node.js และ npm

```sh
npm ci
npm run dev
```

คำสั่งนี้เปิดส่วนที่มี package.json ของตนเอง; ดู scripts ใน package สำหรับ build และ lint ที่มีอยู่

<a id="structure"></a>

## โครงสร้างที่ควรเริ่มอ่าน

| ตำแหน่ง | หน้าที่ |
|---|---|
| [src/](src) | source ของแอป |

<a id="validation"></a>

## คำสั่งและผลตรวจ

| โฟลเดอร์ที่รัน | คำสั่งที่มีใน package |
|---|---|
| `.` | `npm run build` |
| `.` | `npm run lint` |

<a id="scope"></a>

## ขอบเขตของงาน

เป็นการอ่าน JSON ใน frontend ไม่มี backend สำหรับบันทึกธุรกรรมใหม่

<a id="reading"></a>

## อ่านต่อ

- [บันทึกการเตรียม source](docs/CLEANUP.md)


---

<p align="center"><a href="https://github.com/BunnyBubui">BunnyBubui</a> · <a href="https://github.com/BunnyBubui/test">Software Portfolio</a></p>
