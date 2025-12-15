
import { Rocket, Zap, TrendingUp } from "lucide-react"

export const roadmapContent = {
    sectionHeader: {
        badge: "Implementation Roadmap",
        title: "A Clear Path to Launch",
        description: "Structured phases designed for rapid deployment, measurable milestones, and continuous value delivery."
    },
    phases: [
        {
            phase: "Phase 1",
            title: "Foundation",
            icon: Rocket,
            items: [
                "Full mall directory and interactive map",
                "Tenant listing pages with promotions",
                "Digital advertising placements",
                "Admin dashboard for management",
                "Basic marketplace layer",
            ],
        },
        {
            phase: "Phase 2",
            title: "Expansion",
            icon: Zap,
            items: [
                "On-platform payments integration",
                "Pickup & delivery module",
                "Tenant onboarding automation",
                "User analytics",
                "Kiosk network deployment",
            ],
        },
        {
            phase: "Phase 3 (optional services)",
            title: "Scale",
            icon: TrendingUp,
            items: [
                "AI-powered recommendations",
                "Delivery fleet integration",
                "Multi-mall platform expansion",
                "Advanced Reporting suite",
            ],
        },
    ]
}
