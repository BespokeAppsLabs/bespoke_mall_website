
import { TrendingUp, DollarSign, Users, Building, Shield, Package, Target } from "lucide-react"

export const impactContent = {
    sectionHeader: {
        badge: "Business Impact",
        title: "Numbers That Drive Decisions",
        description: "Clear investment, measurable returns, and a sustainable growth model that scales with your ambitions."
    },
    metrics: [
        {
            icon: Shield,
            value: "99%",
            label: "Uptime Guarantee",
            description: "Store-and-forward technology ensures ads play even offline",
        },
        {
            icon: TrendingUp,
            value: "40%+",
            label: "Revenue Increase",
            description: "Projected growth from digital tenant revenue",
        },
        {
            icon: Users,
            value: "∞",
            label: "Tenant Capacity",
            description: "Unlimited digital tenants without space constraints",
        },
        {
            icon: Package,
            value: "1",
            label: "Single Vendor",
            description: "Complete solution: software, hardware, ads & maintenance",
        },
    ],
    revenueStreams: {
        title: "Revenue Streams Unlocked",
        items: [
            { name: "Digital Advertising", description: "App banners, kiosk slots, video ads", icon: Target },
            { name: "Marketplace Fees", description: "Commission on platform sales", icon: DollarSign },
            { name: "Content Services", description: "Professional ad design and content creation fees", icon: Building },
            { name: "External Listings", description: "Non-mall business listings", icon: Users },
        ]
    }
}
