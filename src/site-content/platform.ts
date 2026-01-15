import { LayoutDashboard, Monitor, Smartphone, Users } from 'lucide-react';

export const platformContent = {
  sectionHeader: {
    badge: 'Platform Ecosystem',
    title: 'Technology That Works Here',
    description:
      'Built for the realities of Lephalale. Offline-first kiosks, data-light mobile apps, and tenant tools that prove their worth.',
  },
  modules: [
    {
      id: 'customer',
      title: "The 'Savvy Shopper' App",
      icon: Smartphone,
      description:
        'A data-sensitive, gamified mobile experience focusing on speed and value.',
      features: [
        'Scan-to-Save from Kiosks',
        'Green Ticket Redemption System',
        'Optimistic Offline Architecture',
        'Sepedi Language & Voice Support',
        'Gamified Savings Scoreboard',
      ],
      extendedFeatures: [
        'Thumb-Zone navigation design',
        'Data usage transparency indicators',
        'Live mall events feed',
        'Local community voting',
        "Push notifications for 'Daily Drops'",
      ],
      image: '/images/customer-app.jpg',
      technicalSpecs: [
        'React Native (Expo)',
        'Offline-capable critical flows',
        'Optimized for Samsung A03',
        'Low-bandwidth image modes',
      ],
    },
    {
      id: 'kiosk',
      title: 'Digital Signage Network',
      icon: Monitor,
      description:
        "The 'Billboard' of the mall. High-visibility touchpoints that drive app acquisition.",
      features: [
        'Store-and-Forward Content Delivery',
        '100% Offline Playback Capability',
        'QR Code Acquisition Bridges',
        'Remote Health Monitoring',
        'Dynamic Ad Scheduling',
      ],
      extendedFeatures: [
        'Nightly content sync integration',
        'Emergency content swap',
        'Computer vision audience analytics',
        'Interactive touch directory',
        'Multi-format support (4K Video)',
      ],
      image: '/images/mall-dashboard.jpg', // Using dashboard placeholder for now
      technicalSpecs: [
        'Orange Pi 5+ Hardware',
        'MPV Player Engine',
        'Linux-based OS',
        'Watchdog auto-reboot',
      ],
    },
    {
      id: 'tenant',
      title: 'Tenant Success Portal',
      icon: Users,
      description:
        'Proof of ROI. Tools that show tenants exactly how digital ads drive physical sales.',
      features: [
        'Full-Funnel Attribution Dashboard',
        'Ad Creative Approval Workflow',
        "'Success Showcase' Leader_board",
        'Green Ticket Verification Tools',
        'Automated Performance Reports',
      ],
      extendedFeatures: [
        'Campaign scheduling',
        'Revenue vs Ad Spend tracking',
        'Peer benchmarking (anonymized)',
        'Creative asset management',
        'Direct support chat',
      ],
      image: '/images/tenant-portal.jpg',
      technicalSpecs: [
        'Next.js Administration Web App',
        'Real-time data visualization',
        'Role-based access control',
        'Mobile-friendly for owners',
      ],
    },
    {
      id: 'admin',
      title: 'Ops Command Center',
      icon: LayoutDashboard,
      description: 'Operational excellence tools for the Bespoke Admin team.',
      features: [
        'Global Device Health Monitoring',
        'One-Click Remediation Actions',
        'Content Sync Status Awareness',
        'Ad Production Queue Management',
        'SLA Tracking',
      ],
      extendedFeatures: [
        'Incident response workflows',
        'Remote shell access (SSH)',
        'Automated alert escalation',
        'Tenant onboarding pipelines',
      ],
      image: '/images/mall-dashboard.jpg',
      technicalSpecs: [
        'Centralized Cloud Infrastructure',
        'Real-time WebSocket telemetry',
        'Secure VPN tunneling',
      ],
    },
  ],
  modal: {
    moduleLabel: 'Module Details',
    coreFeaturesLabel: 'Core Features',
    extendedCapabilitiesLabel: 'Extended Capabilities',
    technicalSpecsLabel: 'Tech Stack',
    uptimeLabel: 'Uptime Target',
    supportLabel: 'Support',
    supportValue: '24/7 Ops',
    cta: 'Technical Deep Dive',
  },
};
