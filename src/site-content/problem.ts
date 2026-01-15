import { HelpCircle, SignalHigh, TrendingDown } from 'lucide-react';

export const problemContent = {
  sectionHeader: {
    badge: 'The Challenge',
    title: 'The Physical Retail Blind Spot',
    description:
      "Tenants are skeptical of digital marketing because they can't see the ROI. Shoppers are data-constrained and tech-wary. The traditional mall model is disconnected.",
  },
  problems: [
    {
      icon: HelpCircle,
      title: 'The Attribution Gap',
      description:
        "Tenants ask: 'Did anyone buy because of this ad?' Physical retail has never been able to answer this definitively, unlike e-commerce.",
      stat: '0%',
      statLabel: 'ROI Visibility',
    },
    {
      icon: TrendingDown,
      title: 'Tenant Skepticism',
      description:
        "Burned by empty promises of 'brand awareness', small business tenants demand proof of sales before spending on ads.",
      stat: 'High',
      statLabel: 'Resistance to Ad Spend',
    },
    {
      icon: SignalHigh,
      title: 'Connectivity Barriers',
      description:
        'Our users rely on prepaid data (avg 500MB/mo). Heavy, always-online apps fail in this environment.',
      stat: '500MB',
      statLabel: 'Avg Monthly Data Cap',
    },
  ],
  quote:
    '"Previous attempts failed because tenants could never answer: \'Did anyone actually buy because of this ad?\'"',
};
