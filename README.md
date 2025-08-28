WealthWise – AI-Powered Finance Platform

![Next.js](https://img.shields.io/badge/Next.js-15-blue)
![React](https://img.shields.io/badge/React-19-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Status](https://img.shields.io/badge/status-active-brightgreen)

> **Turn Spending Into Strategy** with an AI-integrated full-stack finance platform built using the latest web technologies.


---

## 🚀 Overview

**WealthWise** is a cutting-edge AI-powered finance management platform that empowers users to track spending, manage accounts, and gain insights into their financial health. With features like intelligent budget alerts, automated monthly reports, receipt scanning via AI, and multi-account management – it's your personal finance assistant, reimagined.

🌐 Live Demo : https://wealthwise-iota.vercel.app

---

## 🧠 Features

- 📊 **Dashboard**: Overview of income, expenses, net savings.
- 🧾 **AI-Powered Receipt Scanner**: Auto-fill transactions using image uploads.
- 💼 **Multi-Account Management**: Create and manage multiple savings accounts.
- 🔁 **Recurring Transactions**: Auto-detect and manage recurring payments.
- 🔔 **Budget Alerts**: Email reminders when budget usage crosses thresholds.
- 📅 **Monthly Reports**: Generate and receive personalized financial summaries.
- ✨ **Dark Mode**: Fully responsive and theme-aware design.
- 🔐 **Secure Auth**: Clerk authentication & Arcjet bot protection.

---

## 🛠️ Tech Stack

| Layer        | Tech                                                                 |
|--------------|----------------------------------------------------------------------|
| Frontend     | **Next.js 15**, **React 19**, **Tailwind CSS**, **Shadcn UI**        |
| Backend/API  | **Node.js**, **Next.js Server Actions**, **Inngest (cron jobs)**     |
| Auth & Infra | **Clerk**, **Arcjet**, **Resend (Emails)**                           |
| Database     | **PostgreSQL**, **Prisma ORM**, **Supabase**                         |
| AI & Utils   | **Gemini API (Google AI)** for insights, **Zod**, **React Hook Form**|

---

## Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/siddharthj14/wealthwise.git
cd wealthwise
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Setup Environment Variables

Create a `.env.local` file and add necessary credentials:

```env
# Required to enable Clerk authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=               
CLERK_SECRET_KEY=

# Custom auth routes
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Database connection
DATABASE_URL=             # Supabase pooling URL (Transaction Pooler URL at Connect at Supabase)
DIRECT_URL=               # For local Prisma migration (Direct Connection URL at Supabase)

# 3rd Party Services
ARCJET_KEY=               # For bot protection and rate limiting
RESEND_API_KEY=           # For email alerts & reports
GEMINI_API_KEY=           # Google AI for receipt scanner (The code uses Gemini-2.5-flash model)

```

# 3.1. After setting up DATABASE_URL in .env.local

```
# Pull the schema if Supabase already has tables
npx prisma db pull

# OR push your local schema to Supabase (⚠️ overwrites existing)
npx prisma db push

# For migrations (better for production)
npx prisma migrate dev --name init
```

### 4. Run the Dev Server

```bash
npm run dev
```

Visit `http://localhost:3000` to see it in action.

---

## 🧪 Key Modules & Highlights

* **Auth Middleware**: `middleware.ts` handles secure routes with Clerk.
* **Emailing**: Budget alert & monthly reports via Resend.
* **AI Integration**: Receipt image parsing using Gemini Vision API.
* **Inngest Cron**: Scheduled background jobs for budget reminders.
* **Advanced UI**: Theme toggle, responsive dashboard, modals, tooltips.

---

## 📂 Folder Structure

```
/app           → Route handlers & pages
/components   → Reusable UI elements (Cards, Forms, Tables)
/lib          → Utility functions (auth, rate-limiting)
/data         → Static datasets (categories, stats)
/hooks        → Custom React Hooks
/prisma       → Schema & DB client setup
/public       → Assets and static files
```

---

## 🧠 Learnings & Takeaways

* Integrated **AI in Finance**, combining LLM APIs with form automation.
* Built a **production-grade UI/UX** with Shadcn & Tailwind best practices.
* Used **serverless workflows** and CRON jobs (Inngest) for alerting systems.
* Strengthened backend with **Prisma transactions** and API rate-limiting.

---

## 📈 Future Scope

* 🔮 Personalized spending predictions using ML.
* 📱 Mobile-first PWA support.
* 🏦 Integration with banking APIs for real-time syncing.

---

## 🙌 Acknowledgements

* [Clerk](https://clerk.dev/)
* [Supabase](https://supabase.com/)
* [Inngest](https://www.inngest.com/)
* [Arcjet](https://arcjet.com/)
* [Resend](https://resend.com/)
* [Gemini API](https://deepmind.google/technologies/gemini/)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'feat: add new feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a pull request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ✨ Demo
🚀 Deployed on [Vercel](https://vercel.com/)

▶️ [View Deployed Project](https://wealthwise-iota.vercel.app)

---

## 🙋‍♂️ Author

**Siddharth Jain**
📧 [siddharthj1405@gmail.com](mailto:siddharthj1405@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/siddharthj1405) | [GitHub](https://github.com/siddharthj14)

---
