# Prototype UI Plan: Clone & Adapt Strategy

## Objective
Rapidly prototype high-fidelity UIs for web (admin/tenant) and mobile by cloning open-source templates, stripping backend logic, and integrating our custom API.

## Selected Repositories

### 1. Web Admin/Tenant Dashboard
**Repo**: [Electronics eCommerce Shop with Admin Dashboard](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS)[https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS](https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS)

**Why**:
- Next.js + Node.js backend (easy to decouple).
- Full admin dashboard (kanban-like, analytics charts).
- Tenant-facing shop pages (product listings → ad campaigns).
- Tailwind CSS (matches our design system).

**Keep**:
- Dashboard layout, charts (Recharts), tables (TanStack Table).
- Auth pages, forms (React Hook Form).
- Tenant shop/product pages (repurpose for ad assets).

**Remove/Replace**:
- Ecommerce backend (orders, cart) → Our ad/tenant API.
- Fake data → Mock our Prisma-generated types.
- Unnecessary deps (Stripe, etc.) → Flutterwave later.

### 2. Mobile App (Patterns)
**Repo**: [UberEatsClone](https://github.com/sergeyCodenameOne/UberEatsClone)[https://github.com/sergeyCodenameOne/UberEatsClone](https://github.com/sergeyCodenameOne/UberEatsClone)

**Why**:
- React Native swipe mechanics (perfect for "Daily Drop").
- Wallet/orders flow (repurpose for saved deals).
- Map integration (Google Maps or Leaflet).

**Keep**:
- Swipe card component (adapt SwipeAdComponent.tsx).
- Bottom tabs, wallet screen.
- Gesture handlers (PanGesture).

**Remove**:
- Delivery logic → Mall directory/map.

### 3. Next.js Shop References
Search: [nextjs-shop](https://github.com/topics/nextjs-shop)

Pick top-starred for additional components (product cards → ad cards).

## Implementation Steps
1. **Clone & Prune** (Day 1):
   ```
   git clone <repo> apps/web-ui-clone
   cd apps/web-ui-clone
   rm -rf backend/ src/data/ # Strip backend/data
   npm i # Clean install
   ```

2. **Mock API Integration** (Day 2):
   - Replace API calls with MSW (mock service worker).
   - Use our Prisma types for mock data.

3. **Custom Components** (Week 1):
   - Kanban queue (React DnD).
   - SwipeAd (from projectInfo/SwipeAdComponent.tsx).
   - Calendar scheduler (FullCalendar).

4. **Design System** (Ongoing):
   - Extract to `packages/ui`.
   - Tailwind + shadcn/ui.

## Risks & Mitigations
- **Bloat**: Audit deps post-clone (npm ls --depth=0).
- **Licensing**: MIT/Apache only.
- **Mobile Parity**: Use Expo for RN web preview.

This plan gets us demo-ready UIs in 1 week, freeing time for backend.