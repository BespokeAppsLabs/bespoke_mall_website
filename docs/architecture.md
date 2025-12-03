# Bespoke Mall Architecture

## High-Level Overview
Monorepo (TurboRepo):
- `apps/backend`: NestJS API + Prisma PG.
- `apps/web`: Next.js tenant/admin dashboard.
- `apps/mobile`: React Native app (Expo).
- `apps/kiosk-player`: Orange Pi agent (Node/Python).
- `packages/ui`: Shared components (shadcn).

## System Diagram
```mermaid
graph TB
  subgraph "Frontend"
    Mobile[React Native App<br/>Swipe, Wallet, Map]
    Web[Next.js Dashboards<br/>Admin/Tenant]
  end
  subgraph "Backend"
    API[NestJS API<br/>Tenants, Ads, Orders]
    DB[(PostgreSQL<br/>Prisma)]
  end
  subgraph "Kiosk Network"
    Kiosks[Orange Pi Players x N<br/>MPV Store-and-Forward]
    CMS[Kiosk CMS<br/>Scheduling]
  end
  subgraph "External"
    Flutterwave[Flutterwave<br/>Payments]
  end

  Mobile --> API
  Web --> API
  CMS --> API
  Kiosks --> CMS
  API --> DB
  API --> Flutterwave
```

## Data Flow: Ad Campaign
```mermaid
sequenceDiagram
  Tenant->>API: POST /campaigns (brief)
  API->>DB: CREATE ad_campaigns
  Admin->>API: UPDATE status = 'production'
  API->>Tenant: Notify pending_approval
  Tenant->>API: APPROVE
  API->>CMS: Schedule to kiosks
  CMS->>Kiosks: Download assets
  Kiosks->>Visitors: Play loop
  Kiosks->>API: Log events
  API->>DB: INSERT ad_events
  API->>Tenant: Analytics dashboard
```

## Key Decisions (ADRs)
1. **Monorepo**: Turbo for shared deps, CI efficiency.
2. **NestJS**: Modular, typed, enterprise-ready.
3. **Prisma**: Schema-first, migrations, typegen.
4. **Store-and-Forward**: Kiosk reliability.
5. **Flutterwave**: SA payments, splits for commissions.

## Deployment
- Backend: Docker + DO App Platform.
- Web: Vercel.
- Mobile: Expo EAS.
- Kiosks: SD card image.

Scales to 10k users, 50 kiosks.