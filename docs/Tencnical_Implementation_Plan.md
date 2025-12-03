# Technical Implementation Plan: Lephalale Mall Platform

**To:** Development Team  
**From:** Project Lead  
**Subject:** Rapid Development Strategy for Lephalale Mall Platform

This document outlines the technical strategy for the rapid development of the Lephalale Mall digital platform. Our goal is to deliver a high-quality MVP within 3 months while building a foundation that is scalable and maintainable.

---

### 1. Core Development Strategy: Clone UI, Build a Custom API

After careful consideration, we will adopt a "Clone UI, Build API" strategy.

**The Question:** *Would it be better to just clone the UI and recreate an API?*

**The Answer:** Yes, unequivocally. We will leverage open-source "clone" repositories **for their frontend components and UI structure only**. The entire backend, including the API, will be custom-built by our team.

**Rationale:**
*   **Speed:** Cloning a well-designed UI (like an "Uber Eats" or "eCommerce" template) gives us a production-quality look and feel from day one. This allows us to focus engineering hours on the most critical part of the project: the business logic.
*   **Quality & Security:** Open-source backend clones are notoriously unreliable, often containing poorly written code, security vulnerabilities, and inefficient database queries. Building our own API ensures we control the quality, security, and performance of the system.
*   **Customization:** Our business logic (mall management, ad networks, tenant-specific features) is unique. A custom API allows us to model our data and workflows precisely to meet the project's requirements, rather than fighting against a pre-existing, ill-fitting structure.

---

### 2. Proposed Tech Stack

*   **Frontend (Web):** **Next.js**. We will use a reference repository for the UI structure.
*   **Frontend (Mobile):** **React Native** or a **PWA** served from the Next.js app. The choice will depend on a final assessment of the UI clone's compatibility.
*   **Backend API:** **Node.js with NestJS**. This provides a scalable, TypeScript-first architecture that is well-suited for building robust APIs.
*   **Database:** **PostgreSQL**. Its relational nature is ideal for the structured data we'll be handling (tenants, ads, orders).
*   **Payment Gateway:** **Flutterwave**. This is the primary payment provider for the South African market and will be integrated for all on-platform transactions.
*   **Deployment:** The stack will be deployed on AWS or DigitalOcean, managed via our standard DevOps practices.

**Reference Repositories for UI Cloning:**
*   **Web Marketplace/Shop:** Explore options under `https://github.com/topics/nextjs-shop`
*   **Admin Dashboard:** `https://github.com/Kuzma02/Electronics-eCommerce-Shop-With-Admin-Dashboard-NextJS-NodeJS`
*   **Mobile Patterns:** `https://github.com/sergeyCodenameOne/UberEatsClone` (for React Native structure and component ideas)

---

### 3. Database Schema: A Systematic Approach

We will design and implement the database schema in logical domains. This allows for parallel development and a clear separation of concerns.

#### Domain A: Tenant & Mall Management (Priority 1)
This domain covers the core entities of the mall itself.

| Table | Column | Description |
| :--- | :--- | :--- |
| **Tenants** | `id`, `name`, `location_description`, `category`, `contact_info`, `status` | Stores all tenant information. `status` can be 'Active', 'Pending', 'Inactive'. |
| **MallUnits**| `id`, `unit_number`, `floor`, `size_sqm`, `tenant_id` (FK) | Represents the physical units in the mall and their assignment to tenants. |
| **OperatingHours**| `id`, `tenant_id` (FK), `day_of_week`, `open_time`, `close_time`| Manages the complex opening hours for different tenants. |

#### Domain B: Advertising & Content (Priority 1)
This domain manages the entire ad network, from slots to campaigns.

| Table | Column | Description |
| :--- | :--- | :--- |
| **AdSlots** | `id`, `type`, `location_id`, `dimensions` | Defines available advertising spaces (e.g., 'AppBanner', 'KioskVideo'). |
| **AdCampaigns**| `id`, `tenant_id` (FK), `start_date`, `end_date`, `budget`, `status` | Manages tenant advertising campaigns. |
| **AdAssets** | `id`, `campaign_id` (FK), `asset_url`, `asset_type`, `duration_seconds` | Stores the actual creative assets (images, videos) for a campaign. |
| **Kiosks** | `id`, `location_description`, `status`, `current_playlist_id` (FK) | Represents the physical advertising kiosks in the mall. |

#### Domain C: Marketplace & Orders (Priority 2)
This domain will be built out after the core MVP is stable.

| Table | Column | Description |
| :--- | :--- | :--- |
| **Products** | `id`, `tenant_id` (FK), `name`, `price`, `description`, `image_url` | The products sold by tenants on the platform. |
| **Orders** | `id`, `user_id` (FK), `tenant_id` (FK), `status`, `total_amount` | Manages customer orders from creation to completion. |
| **OrderItems**| `id`, `order_id` (FK), `product_id` (FK), `quantity`, `price_at_purchase` | Line items for each order. |
| **Payments** | `id`, `order_id` (FK), `flutterwave_ref`, `status`, `amount` | Tracks payment status and references from Flutterwave. |

---

### 4. Risk Assessment & Mitigation

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| **"Clone" Code Quality** | High | **Strict UI-Only Cloning.** We will strip all backend logic, state management, and data fetching from the cloned repository. We will only retain the JSX/TSX components, CSS, and general page structure. The application logic will be rewritten by us to meet our standards. |
| **Flutterwave Integration**| Medium | **Build a Proof-of-Concept (POC) First.** Before integrating into the main app, a developer will build a small, standalone app to validate the entire Flutterwave payment lifecycle (payment, webhooks, settlement, refunds). We will also build a manual reconciliation tool in the admin dashboard. |
| **Kiosk Connectivity** | Medium | **Implement "Store and Forward" Logic.** The kiosk application must be built to download its playlist and content locally. It will continue to play ads even if the internet connection is lost. Playback logs and analytics will be queued and synced to the server once connectivity is restored. |
| **Scalability of MVP** | Low | **Modular Monolith Architecture.** The NestJS API will be designed with modularity in mind. Key services (e.g., "Ad Server", "Order Management", "Tenant Service") will be logically separated, allowing them to be potentially scaled or extracted into microservices in the future if required. |
| **Dependency Hell** | Medium | **Aggressive Dependency Pruning.** The first step after cloning a UI repo is to identify and remove all unnecessary dependencies. We will create a clean `package.json` with only the libraries essential for the UI rendering. |

---

### 5. Immediate Next Steps

1.  **Repository Setup:** Initialize a new monorepo (e.g., using Turborepo) with placeholders for `apps/web`, `apps/mobile`, `apps/kiosk-player`, and `packages/api-client`, `packages/ui-components`.
2.  **UI Clone Evaluation:** Assign a frontend developer to download and evaluate the candidate UI clone repositories. The goal is to select one, strip out its logic, and set it up in the `apps/web` directory.
3.  **Schema & Migrations:** Assign a backend developer to start creating the database migrations (using a tool like `node-pg-migrate` or Prisma Migrate) for **Domain A (Tenant & Mall)** and **Domain B (Advertising)**.
4.  **Flutterwave POC:** Assign a developer to begin the standalone Flutterwave proof-of-concept immediately. This is a critical path item.

Let's get started