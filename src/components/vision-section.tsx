"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { visionContent } from "@/site-content"

export function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="vision" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">{visionContent.sectionHeader.badge}</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6 text-balance">
            {visionContent.sectionHeader.title}<span className="text-primary">{visionContent.sectionHeader.highlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {visionContent.sectionHeader.description}
          </p>
        </motion.div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionContent.visionPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <point.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Narrative Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 p-8 lg:p-12 rounded-3xl bg-card border border-border relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-foreground mb-6">
                {visionContent.narrative.title}
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {visionContent.narrative.paragraphs.map((para, i) => (
                  <p key={i} className={i === visionContent.narrative.paragraphs.length - 1 ? "text-foreground font-medium" : ""}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-secondary/50 overflow-hidden">
                <img
                  src="/modern-shopping-mall-interior-with-digital-display.jpg"
                  alt={visionContent.narrative.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
