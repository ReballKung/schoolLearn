# schoolLearn — Full-Stack Learning Management System (LMS)

A production-oriented Learning Management System built from scratch with **NestJS 11 + Fastify**, **PostgreSQL + TypeORM**, **Redis**, **RabbitMQ (Outbox Pattern)**, and **Nuxt 3**.

## Tech Stack

### Backend (`api/`)

- **Runtime & Framework:** Node.js 24, NestJS 11, Fastify Adapter
- **Database & ORM:** PostgreSQL, TypeORM 0.3 (Migration-only workflow)
- **Authentication & Security:** JWT (Access + Refresh Token), bcrypt, RBAC + Dynamic Menu Permissions, IDOR protection
- **Async & Realtime:** RabbitMQ + Outbox Pattern, Redis (`ioredis` caching & distributed locks), Socket.IO
- **Files & Reporting:** Pluggable File Storage Adapter (Local / S3 / MinIO), Puppeteer (PDF Certificates & Receipts), QRCode, ExcelJS

### Frontend (`app/`)

- **Framework:** Nuxt 3, Vue 3, Pinia
- **UI & Styling:** Vuetify 3, Tailwind CSS, `@nuxtjs/i18n` (TH / EN)
- **Rendering Strategy:** Hybrid SSR (Home & Course pages for SEO/OpenGraph) + SPA (Admin & Learning Player)

### Infrastructure & DevOps

- **Local Development:** Docker Compose (PostgreSQL, Redis, RabbitMQ)
- **Production & CI/CD:** Multi-stage Dockerfiles, Nginx Reverse Proxy, GitLab CI, Kubernetes (Rancher)

## Project Structure

```text
schoolLearn/
├── api/                  # NestJS 11 + Fastify backend API
├── app/                  # Nuxt 3 + Vue 3 frontend web application
├── docker-compose.yml    # Local infrastructure (PostgreSQL, Redis, RabbitMQ)
└── README.md
```

## API Conventions

- **Learner API:** `/api/v1/...`
- **Admin Management API:** `/api/management/v1/...`
- **External Integration API:** `/api/v1/external/...`

## Getting Started

### Prerequisites

- Node.js `24.x`
- Docker & Docker Compose

### Installation

```bash
# Install root git hooks (Husky + Commitlint + lint-staged)
npm install

# Install backend dependencies
cd api && npm install

# Install frontend dependencies
cd ../app && npm install
```

### Running Locally

```bash
# Backend (NestJS)
cd api
npm run start:dev

# Frontend (Nuxt 3)
cd app
npm run dev
```

## Development Roadmap

- [x] **Phase 0.1:** Project setup, Node 24, ESLint/Prettier, Husky + Commitlint
- [ ] **Phase 0.2–0.7:** Docker Compose, Fastify bootstrap, Config/Validation, TypeORM Migrations, Nuxt 3 base
- [ ] **Phase 1:** Authentication, RBAC, Dynamic Menu Permissions, OAuth
- [ ] **Phase 2:** File Storage Adapter & Site Settings (SSR)
- [ ] **Phase 3:** Courses, Categories, Sections/Lessons & Instructor Permissions
- [ ] **Phase 4:** Enrollment, Learning Player, Outbox Pattern + RabbitMQ + Socket.IO
- [ ] **Phase 5–9:** Exams, PDF Certificates, Reviews, Cart/Checkout/Payments/Coupons, Course Bundles & Assessments
- [ ] **Phase 10–12:** Dashboards & Reports, Community, SCORM / xAPI
- [ ] **Phase 13–14:** DevOps (Docker, Nginx, GitLab CI, K8s) & AI Engineering

## Author

**Sukrit Saeliao** — Software Engineer
