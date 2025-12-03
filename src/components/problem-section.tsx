"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AlertTriangle, Building2, TrendingDown, Users } from "lucide-react"

const problems = [
  {
    icon: Building2,
    title: "Physical Space Limits",
    description:
      "Every square meter is accounted for. Expansion requires massive capital investment, permits, and years of construction.",
    stat: "100%",
    statLabel: "Space Utilization",
  },
  {
    icon: TrendingDown,
    title: "Revenue Saturation",
    description: "Traditional rental income has plateaued. Without new space, revenue growth stagnates.",
    stat: "2-3%",
    statLabel: "Annual Growth Cap",
  },
  {
    icon: Users,
    title: "Changing Consumer Behavior",
    description: "Post-pandemic shoppers expect digital experiences. Physical-only presence is no longer enough.",
    stat: "73%",
    statLabel: "Digital-First Shoppers",
  },
]

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="problem" ref={containerRef} className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-destructive" />
            </div>
            <span className="text-destructive font-medium tracking-widest uppercase text-sm">The Challenge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6">
            Malls Are Running Out of Room to Grow
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The traditional retail model has hit its ceiling. Physical expansion is expensive, time-consuming, and
            increasingly risky in a shifting market.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-destructive/30 transition-all duration-500">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{problem.description}</p>

                {/* Stat */}
                <div className="pt-6 border-t border-border">
                  <div className="text-3xl font-bold text-foreground">{problem.stat}</div>
                  <div className="text-sm text-muted-foreground mt-1">{problem.statLabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <blockquote className="text-2xl lg:text-3xl font-serif text-foreground italic max-w-4xl mx-auto">
            "The question isn't whether malls need to evolve — it's how quickly they can adapt before becoming
            obsolete."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
