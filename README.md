# pranay.dev

My personal portfolio — built with **Next.js**, **Tailwind CSS**, and deployed on **Vercel**.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000?style=flat-square&logo=vercel)

## ✨ Features

- **Dark / Light mode** with smooth theme toggle
- **Responsive** mobile-first design
- **Floating dock** navigation with social links
- **Sections** — Hero, About, Work, Education, Projects, Skills, Contact
- Clean, minimal aesthetic inspired by [amritwt.me](https://amritwt.me)

## 🛠 Tech Stack

| Layer | Tech |
|-------|------|
| Framework | [Next.js 15](https://nextjs.org) (App Router) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Language | TypeScript |
| Fonts | Geist Sans & Geist Mono |
| Hosting | [Vercel](https://vercel.com) |

## 🚀 Getting Started

```bash
# clone the repo
git clone https://github.com/YOUR_USERNAME/my-portfolio.git
cd my-portfolio

# install dependencies
pnpm install

# start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see it live.

## 📁 Project Structure

```
app/
├── components/
│   ├── Dock.tsx              # floating bottom navigation
│   ├── ThemeProvider.tsx      # dark/light mode context
│   ├── ThemeToggle.tsx        # theme switch button
│   └── Pages/
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── WorkSection.tsx
│       ├── EducationSection.tsx
│       ├── ProjectsSection.tsx
│       ├── SkillsSection.tsx
│       └── ContactSection.tsx
├── layout.tsx
├── page.tsx
└── globals.css
public/
└── Starship2.jpg             # profile image
```

## 📄 License

MIT — feel free to fork and make it your own.

---

Built with ☕ by **Pranay**
