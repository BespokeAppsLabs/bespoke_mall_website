# Database Schema: Bespoke Mall Platform

## Overview
PostgreSQL relational schema designed for high performance and scalability. Organized by domains for modular development.

Uses Prisma for migrations and type-safety.

## Domain A: Tenant & Mall Management

### tenants
```sql
CREATE TABLE tenants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  location_description TEXT,
  category VARCHAR(100), -- e.g., 'Food', 'Fashion'
  contact_info JSONB, -- {phone: '', email: ''}
  status ENUM('active', 'pending', 'inactive') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### mall_units
```sql
CREATE TABLE mall_units (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unit_number VARCHAR(50) NOT NULL,
  floor VARCHAR(20),
  size_sqm INTEGER,
  tenant_id UUID REFERENCES tenants(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### operating_hours
```sql
CREATE TABLE operating_hours (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id) ON DELETE CASCADE,
  day_of_week INTEGER CHECK (day_of_week BETWEEN 0 AND 6), -- 0=Sunday
  open_time TIME,
  close_time TIME
);
```

## Domain B: Advertising & Content

### ad_slots
```sql
CREATE TABLE ad_slots (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type ENUM('banner', 'kiosk_video', 'featured_listing'),
  location_id UUID, -- kiosk_id or screen_id
  dimensions JSONB, -- {width: 300, height: 250}
  price_per_slot DECIMAL(10,2),
  status ENUM('available', 'booked')
);
```

### ad_campaigns
```sql
CREATE TABLE ad_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  start_date DATE,
  end_date DATE,
  budget DECIMAL(10,2),
  status ENUM('draft', 'in_queue', 'production', 'pending_approval', 'approved', 'scheduled'),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### ad_assets
```sql
CREATE TABLE ad_assets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  campaign_id UUID REFERENCES ad_campaigns(id) ON DELETE CASCADE,
  asset_url VARCHAR(500) NOT NULL,
  asset_type ENUM('image', 'video', 'audio'),
  duration_seconds INTEGER,
  file_size_bytes BIGINT
);
```

### kiosks
```sql
CREATE TABLE kiosks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location_description TEXT NOT NULL,
  hardware_id VARCHAR(100), -- Orange Pi serial
  status ENUM('online', 'offline', 'maintenance'),
  current_playlist_id UUID,
  last_sync TIMESTAMP
);
```

## Domain C: Marketplace & Orders (Post-MVP)

### products
```sql
CREATE TABLE products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  tenant_id UUID REFERENCES tenants(id),
  name VARCHAR(255),
  price DECIMAL(10,2),
  description TEXT,
  image_url VARCHAR(500)
);
```

### orders
```sql
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID, -- anon or auth
  tenant_id UUID REFERENCES tenants(id),
  status ENUM('pending', 'paid', 'ready', 'delivered', 'cancelled'),
  total_amount DECIMAL(10,2),
  created_at TIMESTAMP DEFAULT NOW()
);
```

### payments
```sql
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  flutterwave_tx_ref VARCHAR(100) UNIQUE,
  status ENUM('pending', 'success', 'failed'),
  amount DECIMAL(10,2),
  currency VARCHAR(3) DEFAULT 'ZAR'
);
```

## Domain D: Analytics & Events

### ad_events
```sql
CREATE TABLE ad_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event_id VARCHAR(100) UNIQUE,
  ad_id UUID REFERENCES ad_campaigns(id),
  tenant_id UUID REFERENCES tenants(id),
  platform ENUM('app', 'kiosk'),
  type ENUM('impression', 'swipe_right', 'swipe_left', 'expand', 'qr_redeem'),
  screen_location VARCHAR(100),
  duration_seconds INTEGER,
  user_segment VARCHAR(50), -- anonymized
  timestamp TIMESTAMP DEFAULT NOW()
);
```

## Indexes & Constraints
- Composite indexes on ad_events (ad_id, timestamp, platform) for analytics queries.
- Foreign key constraints with CASCADE where appropriate.
- Triggers for updated_at.

## Prisma Schema Snippet
```
model Tenant {
  id                 String   @id @default(uuid())
  // ...
  campaigns          AdCampaign[]
  // ...
}
```

This schema supports all MVP features and scales to post-MVP.