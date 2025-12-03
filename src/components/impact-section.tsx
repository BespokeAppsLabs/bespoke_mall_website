"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { TrendingUp, DollarSign, Users, Building, Shield, Package, Target } from "lucide-react"

const impactMetrics = [
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
]

const revenueStreams = [
  { name: "Digital Advertising", description: "App banners, kiosk slots, video ads", icon: Target },
  { name: "Marketplace Fees", description: "Commission on platform sales", icon: DollarSign },
  { name: "Content Services", description: "Professional ad design and content creation fees", icon: Building },
  { name: "External Listings", description: "Non-mall business listings", icon: Users },
]

export function ImpactSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="impact" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Business Impact</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
            Numbers That Drive Decisions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clear investment, measurable returns, and a sustainable growth model that scales with your ambitions.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{metric.value}</div>
              <div className="text-lg font-medium text-foreground mb-2">{metric.label}</div>
              <div className="text-sm text-muted-foreground">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Revenue Streams */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="p-8 lg:p-12 rounded-3xl bg-card border border-border"
        >
          <h3 className="text-2xl font-semibold text-foreground text-center mb-10">Revenue Streams Unlocked</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueStreams.map((stream, index) => (
              <motion.div
                key={stream.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="p-6 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <stream.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{stream.name}</h4>
                <p className="text-sm text-muted-foreground">{stream.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
