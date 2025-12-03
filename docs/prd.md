---
stepsCompleted: []
inputDocuments: []
workflowType: 'prd'
lastStep: 0
project_name: 'Bespoke-Mall'
user_name: 'Lucas'
date: '2025-12-02'
---

# Product Requirements Document (PRD) - Bespoke Mall Digital Platform

## 1. Executive Summary
Bespoke Mall is a comprehensive digital platform designed to transform Lephalale Mall into a revenue-generating digital hub. Phase 1 focuses on two core products:
- **Mobile/Web App**: For customers (swipe-to-save ads, directory, wallet) and tenants (portal for ad requests, analytics).
- **Digital Signage & Kiosk Network**: Managed backend for ad scheduling, content delivery to screens.

**Key Goals**:
- Generate recurring ad revenue.
- Improve tenant visibility and sales.
- Collect data for future expansions (delivery, EV).

**Target Launch**: MVP in 3 months.

## 2. Business Objectives
- **Revenue**: R25k-50k/month from ads in Year 1.
- **Adoption**: 60% tenant onboarding in 6 weeks.
- **Engagement**: 2k-5k app users, 98% kiosk uptime.

## 3. User Personas
### 3.1 Mall Customer (Primary)
- **Demographics**: Local shoppers, families, youth from mining town/informal settlement.
- **Needs**: Deals, map, directory, redeem coupons via QR.
- **Pain Points**: Finding stores, missing promotions.

### 3.2 Tenant (Store Owner)
- **Needs**: Easy ad requests, analytics (views, swipes), ROI dashboard.
- **Pain Points**: Low visibility, manual marketing.

### 3.3 Bespoke Admin
- **Needs**: Kanban queue, calendar scheduling, node monitoring.

## 4. Key Features (MVP)
### 4.1 Mobile App (React Native)
- **Home Feed**: Carousel hero ads, vertical scroll mixed content (news, events, ads).
- **Swipe Drop**: Tinder-style ad cards (swipe right=save to wallet, left=pass).
- **Wallet**: Saved deals with QR codes for redeem.
- **Directory/Map**: Search stores, interactive 2D map.
- **Mall Live**: Stream ad loops or live events.

### 4.2 Tenant Portal (Web)
- **Campaign Overview**: Active ads, stats (views, saves).
- **Create Request**: Wizard for ad brief (type, goal, assets).
- **Analytics**: Funnel (impressions, swipes, conversions).

### 4.3 Admin Dashboard (Web)
- **Production Queue**: Kanban (draft, production, approval).
- **Master Schedule**: Drag-drop calendar for screens.
- **System Pulse**: Node map (green/red), sync status.

### 4.4 Backend & Kiosk
- **CMS**: Ad scheduling, store-and-forward to Orange Pi players.
- **Analytics**: Event logs (AdEvent interface).
- **Payments**: Flutterwave for future marketplace.

## 5. User Flows
### 5.1 Ad Request Workflow
1. Tenant submits brief → IN_QUEUE.
2. Admin triages → IN_PRODUCTION.
3. Creative ready → PENDING_APPROVAL.
4. Tenant approves → SCHEDULED → Live.

### 5.2 Swipe Interaction
1. User swipes right → Save to wallet, log positive.
2. Tap → Expand details.
3. QR redeem at store.

## 6. Data Model
```typescript
// Core Entities (PostgreSQL)
interface Tenant { id: string; name: string; ... }
interface AdCampaign { id: string; tenantId: string; status: 'DRAFT' | 'APPROVED'; ... }
interface AdEvent {
  eventId: string;
  adId: string;
  type: 'IMPRESSION' | 'SWIPE_RIGHT' | 'QR_REDEEM';
  platform: 'APP' | 'KIOSK';
  ...
}
```

## 7. Non-Functional Requirements
- **Performance**: 60fps swipe, <2s kiosk sync.
- **Reliability**: 99% kiosk uptime, offline playback.
- **Security**: JWT auth, Flutterwave PCI compliance.
- **Scalability**: 10k users, 50 kiosks.
- **Accessibility**: VoiceOver, high contrast.

## 8. Tech Stack
- Frontend: Next.js (web), React Native (mobile).
- Backend: NestJS, PostgreSQL, Prisma.
- Payments: Flutterwave.
- Kiosk: Orange Pi 5+, MPV player.

## 9. Risks & Mitigations
| Risk | Mitigation |
|------|------------|
| Low Adoption | Free trials, outreach. |
| Kiosk Downtime | Store-and-forward. |
| Payment Issues | Webhook retries, manual recon.

## 10. Success Metrics
- Tenant Onboard: 60%.
- App DAU: 500+.
- Ad Revenue: R25k/mo.
- Uptime: 98%.

**Approval Sign-off**: ________________ Date: ______
