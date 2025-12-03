"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Circle, Clock, Rocket, Zap, TrendingUp } from "lucide-react"

const phases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    duration: "Months 1-3",
    status: "current",
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
    duration: "Months 4-6",
    status: "upcoming",
    icon: Zap,
    items: [
      "On-platform payments integration",
      "Pickup & delivery module",
      "Tenant onboarding automation",
      "Advanced user analytics",
      "Kiosk network deployment",
    ],
  },
  {
    phase: "Phase 3",
    title: "Scale",
    duration: "Months 7-12",
    status: "future",
    icon: TrendingUp,
    items: [
      "AI-powered recommendations",
      "Delivery fleet integration",
      "EV infrastructure support",
      "Multi-mall platform expansion",
      "Advanced reporting suite",
    ],
  },
]

export function RoadmapSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="roadmap" ref={containerRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">Implementation Roadmap</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
            A Clear Path to Launch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Structured phases designed for rapid deployment, measurable milestones, and continuous value delivery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center ${
                      phase.status === "current"
                        ? "bg-primary shadow-lg shadow-primary/30"
                        : "bg-secondary border border-border"
                    }`}
                  >
                    {phase.status === "current" ? (
                      <Clock className="w-6 h-6 text-primary-foreground" />
                    ) : (
                      <Circle className="w-6 h-6 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div
                    className={`p-8 rounded-2xl ${
                      phase.status === "current"
                        ? "bg-primary/5 border-2 border-primary/30"
                        : "bg-card border border-border"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                          phase.status === "current" ? "bg-primary/20" : "bg-secondary"
                        }`}
                      >
                        <phase.icon
                          className={`w-5 h-5 ${phase.status === "current" ? "text-primary" : "text-muted-foreground"}`}
                        />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-medium tracking-wider uppercase">{phase.phase}</span>
                        <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{phase.duration}</p>
                    <ul className="space-y-3">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              phase.status === "current" ? "text-primary" : "text-muted-foreground"
                            }`}
                          />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
