"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { LayoutDashboard, Users, Smartphone, Monitor, ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

const platformModules = [
  {
    id: "mall",
    title: "Mall Management Suite",
    icon: LayoutDashboard,
    description: "Complete control center for mall operations, tenant management, and analytics.",
    features: [
      "Centralized dashboard for all operations",
      "Tenant performance tracking",
      "Revenue analytics and reporting",
      "Digital advertising management",
      "Customer engagement tools",
    ],
    image: "/modern-admin-dashboard-with-charts-and-analytics-d.jpg",
  },
  {
    id: "tenant",
    title: "Tenant Portal",
    icon: Users,
    description: "Empower tenants with tools to manage their digital presence and performance.",
    features: [
      "Digital storefront management",
      "Promotion scheduling",
      "Customer insights",
      "Inventory integration",
      "Sales reporting",
    ],
    image: "/tenant-management-portal-interface-dark-theme-mode.jpg",
  },
  {
    id: "customer",
    title: "Customer Experience",
    icon: Smartphone,
    description: "Seamless mobile and web experience for shoppers to discover, engage, and purchase.",
    features: [
      "Interactive mall directory",
      "Personalized recommendations",
      "Digital promotions",
      "Order tracking",
      "Loyalty integration",
    ],
    image: "/mobile-shopping-app-interface-dark-theme-elegant.jpg",
  },
  {
    id: "kiosk",
    title: "Digital Signage Network",
    icon: Monitor,
    description: "Monetize physical spaces with dynamic digital advertising displays.",
    features: [
      "Centralized content management",
      "Automated ad scheduling",
      "Real-time monitoring",
      "Revenue tracking",
      "Content generation",
    ],
    image: "/digital-signage-kiosk-in-shopping-mall-modern.jpg",
  },
]

export function PlatformSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [activeModule, setActiveModule] = useState(platformModules[0])

  return (
    <section id="platform" ref={containerRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Platform Overview</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A comprehensive suite of tools designed for mall management, tenant success, and exceptional customer
            experiences.
          </p>
        </motion.div>

        {/* Module Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {platformModules.map((module) => (
            <button
              key={module.id}
              onClick={() => setActiveModule(module)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeModule.id === module.id
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              <module.icon className="w-4 h-4" />
              {module.title}
            </button>
          ))}
        </motion.div>

        {/* Active Module Display */}
        <motion.div
          key={activeModule.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <activeModule.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{activeModule.title}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8">{activeModule.description}</p>
            <ul className="space-y-4">
              {activeModule.features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <Button className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground">
              Learn More
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden border border-border bg-card">
              <img
                src={activeModule.image || "/placeholder.svg"}
                alt={activeModule.title}
                className="w-full aspect-video object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
