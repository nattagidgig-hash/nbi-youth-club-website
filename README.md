# NBI Youth Club Website

เว็บไซต์สำหรับ NBI Youth Club สร้างด้วย Astro 6+ และ deploy บน Cloudflare Workers

## 🌐 Live Demo

**[https://nbi-youth-club-website.nattagid-gig.workers.dev](https://nbi-youth-club-website.nattagid-gig.workers.dev)**

## 🚀 เทคโนโลยีที่ใช้

- **Framework:** [Astro 6.1.10](https://astro.build/) - The web framework for content-driven websites
- **Styling:** [Tailwind CSS v4.2.4](https://tailwindcss.com/) + Typography Plugin
- **Deploy Target:** [Cloudflare Workers](https://workers.cloudflare.com/)
- **Adapter:** [@astrojs/cloudflare](https://www.npmjs.com/package/@astrojs/cloudflare)

## 📦 การติดตั้งและรันในเครื่อง

### ข้อกำหนดเบื้องต้น
- Node.js 22+ 
- npm หรือ package manager อื่นๆ

### ขั้นตอนการติดตั้ง

1. **Clone repository**
```bash
git clone https://github.com/nattagidgig-hash/nbi-youth-club-website.git
cd nbi-youth-club-website
```

2. **ติดตั้ง dependencies**
```bash
npm install
```

3. **รัน development server**
```bash
npm run dev
```

เว็บไซต์จะรันที่ `http://localhost:4321`

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | รัน development server พร้อม hot reload |
| `npm run build` | Build โปรเจกต์สำหรับ production |
| `npm run preview` | ดูตัวอย่าง build ท้องถิ่น |

## 📁 โครงสร้างโปรเจกต์

```
nbi-youth-club-website/
├── src/
│   ├── components/        # Astro components
│   │   ├── ContactForm.astro
│   │   ├── CoreValues.astro
│   │   ├── Hero.astro
│   │   ├── Navbar.astro
│   │   ├── NewsList.astro
│   │   ├── ProgramsSection.astro
│   │   ├── QuoteBanner.astro
│   │   ├── Stats.astro
│   │   └── VisionSection.astro
│   ├── content/
│   │   └── news/          # News articles (Markdown)
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   └── index.astro    # หน้าหลัก
│   ├── actions/           # Astro Actions (server-side)
│   │   └── index.ts
│   ├── content.config.ts  # Content Collections config
│   └── styles.css         # Global styles + Tailwind
├── public/                # Static assets
├── astro.config.mjs       # Astro configuration
└── package.json
```

## 🎨 ฟีเจอร์

- ✅ Responsive Design - รองรับทุกขนาดหน้าจอ
- ✅ Server-Side Rendering ด้วย Astro
- ✅ Content Collections สำหรับจัดการข่าวสาร
- ✅ Tailwind CSS v4 สำหรับ styling
- ✅ Deploy บน Cloudflare Workers (Edge Runtime)
- ✅ Performance สูง - Client bundle ต่ำสุด
- ✅ Image optimization ผ่าน Cloudflare Images

## 🔧 การ Deploy

โปรเจกต์นี้ deploy บน Cloudflare Workers:

```bash
# Build โปรเจกต์
npm run build

# Deploy ไปยัง Cloudflare
npx wrangler deploy
```

## 📝 การเพิ่มเนื้อหา

### เพิ่มข่าวสารใหม่

สร้างไฟล์ Markdown ใน `src/content/news/`:

```markdown
---
title: "ชื่อกิจกรรม"
description: "คำอธิบายสั้นๆ"
pubDate: 2026-01-01
---

เนื้อหาข่าวสาร...
```

## 🎯 Astro Component Strategy

โปรเจกต์นี้ใช้แนวทาง "Islands Architecture":

- **Static HTML:** Components ที่ไม่ต้องการ JavaScript
- **Server Islands:** ส่วนที่โหลดแบบ async ไม่บล็อก page load
- **Client Islands:** ส่วนที่ต้องการ interactivity จริงๆ เท่านั้น

## 🔐 Security

- CSRF Protection เปิดใช้งานผ่าน Astro Actions
- Form submissions ใช้ Astro Actions แทน API routes
- Security headers กำหนดค่าผ่าน adapter

## 📚 เอกสารเพิ่มเติม

- [Astro Documentation](https://docs.astro.build/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Astro Cloudflare Adapter](https://docs.astro.build/en/guides/integrations-guide/cloudflare/)

## 👨‍💻 ผู้พัฒนา

พัฒนาโดย Natta

## 📄 License

ISC

---

💡 **Tips:** หากต้องการให้เพื่อน clone โปรเจกต์นี้ แบ่งปันลิงก์นี้:
https://github.com/nattagidgig-hash/nbi-youth-club-website
