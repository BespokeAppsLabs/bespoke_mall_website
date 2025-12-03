"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, ArrowRight, Layers, Store, Wifi, DollarSign } from "lucide-react"

const solutionFeatures = [
  {
    icon: Store,
    title: "Digital Storefronts",
    description: "Physical tenants extend their reach. Virtual tenants join without physical space.",
  },
  {
    icon: Wifi,
    title: "Connected Ecosystem",
    description: "Seamless integration between physical experience and digital engagement.",
  },
  {
    icon: DollarSign,
    title: "Digital Rent Revenue",
    description: "New income stream from businesses that operate in your digital space.",
  },
  {
    icon: Layers,
    title: "Scalable Platform",
    description: "Grow infinitely without construction. Add tenants with zero physical constraints.",
  },
]

const benefits = [
  "New revenue without construction",
  "Enhanced customer engagement",
  "Future-proof operations",
  "Competitive advantage",
  "Tenant value enhancement",
  "Data-driven decisions",
]

export function SolutionSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="solution" ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary font-medium tracking-widest uppercase text-sm">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6 text-balance">
            The Digital Tenant Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A unified platform that transforms your mall into a hybrid destination — where physical and digital tenants
            coexist, collaborate, and generate revenue.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {solutionFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right: Benefits & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="p-8 rounded-3xl bg-card border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">What You Gain</h3>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                >
                  Explore Platform Details
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24"
        >
          <h3 className="text-2xl font-semibold text-foreground text-center mb-12">How Digital Tenants Work</h3>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Apply", desc: "Businesses request digital space" },
              { step: "02", title: "Onboard", desc: "Set up digital storefront" },
              { step: "03", title: "Operate", desc: "Engage customers digitally" },
              { step: "04", title: "Revenue", desc: "Pay digital rent monthly" },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
