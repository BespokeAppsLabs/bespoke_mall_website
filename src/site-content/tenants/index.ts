import { Gift, LineChart, Store, Zap } from 'lucide-react';

export const tenantContent = {
  hero: {
    badge: 'The "Growth" Door',
    title: 'Claim Your Store. 0% Cost. 100% Growth.',
    description:
      'Professional management tools for every vendor. From boutique to pop-up, we provide the digital foundation you need to thrive.',
    cta: 'Start Your Free Pilot',
  },
  benefits: [
    {
      icon: Store,
      title: 'Free Marketplace',
      description:
        'Get your own online storefront and product management dashboard at zero cost.',
    },
    {
      icon: Zap,
      title: 'Digital Receipts',
      description:
        "Use 'Green Tickets' (QR receipts) to track sales and build your business credit score.",
    },
    {
      icon: LineChart,
      title: 'Sales analytics',
      description:
        'Understand your customers better with real-world intent data and transaction history.',
    },
    {
      icon: Gift,
      title: 'Loyalty Engine',
      description:
        'Launch your own rewards program and turn one-time shoppers into lifelong supporters.',
    },
  ],
};
