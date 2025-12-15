
import { CheckCircle2, QrCode, Smartphone, Zap, BarChart3 } from "lucide-react"

export const solutionContent = {
    sectionHeader: {
        badge: "The Solution",
        title: "Closing the Loop with 'Verified Value'",
        description: "We don't just display ads; we track the entire journey from impression to redemption. Our platform connects the Kiosk (Discovery) to the App (Action) to the POS (Transaction)."
    },
    features: [
        {
            icon: QrCode,
            title: "The Green Ticket",
            description: "A secure, animated digital voucher system that allows even informal vendors to verify transactions without POS integration.",
        },
        {
            icon: Smartphone,
            title: "Ad-Engagement Engine",
            description: "Gamified interactions like 'Swipe-to-Save' and 'Watch-to-Win' that transform ads from interruptions into value.",
        },
        {
            icon: BarChart3,
            title: "Full-Funnel Attribution",
            description: "Tenants see the exact path: Ad View → Deal Saved → In-Store Redemption. Real ROI transparency.",
        },
        {
            icon: Zap,
            title: "Store-and-Forward",
            description: "Kiosks download content at night and play offline perfectly. Zero reliance on daytime bandwidth.",
        },
    ],
    benefitsTitle: "Strategic Advantages",
    benefits: [
        "Proven ROI for skeptical tenants",
        "Optimistic Offline for reliability",
        "Sepedi Language Localization",
        "Data-light 'Savvy Shopper' mode",
        "Gamified community retention",
        "Viral 'Success Showcase' onboarding",
    ],
    platformLink: "View Platform Modules",
    howItWorks: {
        title: "The Usage Lifecycle",
        steps: [
            { step: "01", title: "Discover", desc: "User sees deal on Kiosk" },
            { step: "02", title: "Engage", desc: "Scans to save to App" },
            { step: "03", title: "Redeem", desc: "Show Green Ticket in-store" },
            { step: "04", title: "Verify", desc: "Tenant confirms & pays fee" },
        ]
    }
}
