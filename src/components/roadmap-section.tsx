"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Check, Circle } from "lucide-react"
import { roadmapContent } from "@/site-content"

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
          <span className="text-primary font-medium tracking-widest uppercase text-sm">{roadmapContent.sectionHeader.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
            {roadmapContent.sectionHeader.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {roadmapContent.sectionHeader.description}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {roadmapContent.phases.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center bg-secondary border border-border">
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                  <div className="p-8 rounded-2xl bg-card border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-secondary">
                        <phase.icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <span className="text-xs text-primary font-medium tracking-wider uppercase">{phase.phase}</span>
                        <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-muted-foreground" />
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
