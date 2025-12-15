"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ChevronRight, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { platformContent } from "@/site-content"

export function PlatformSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(containerRef, { once: true, margin: "-100px" })
    const [activeModule, setActiveModule] = useState(platformContent.modules[0])
    const [expandedModule, setExpandedModule] = useState<string | null>(null)

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
                    <span className="text-primary font-medium tracking-widest uppercase text-sm">{platformContent.sectionHeader.badge}</span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mt-4 mb-6">
                        {platformContent.sectionHeader.title}
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        {platformContent.sectionHeader.description}
                    </p>
                </motion.div>

                {/* Module Selector */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {platformContent.modules.map((module) => (
                        <button
                            key={module.id}
                            onClick={() => setActiveModule(module)}
                            className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeModule.id === module.id
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
                        <ul className="space-y-4 mb-8">
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
                        <Button
                            onClick={() => setExpandedModule(activeModule.id)}
                            className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
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

                {/* Expanded Modal - Full Screen */}
                {expandedModule && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
                        onClick={() => setExpandedModule(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.98, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.98, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 w-full h-full bg-card"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {(() => {
                                const module = platformContent.modules.find((m) => m.id === expandedModule)
                                if (!module) return null

                                return (
                                    <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12 overflow-y-auto">
                                        {/* Close Button */}
                                        <button
                                            onClick={() => setExpandedModule(null)}
                                            className="fixed top-8 right-8 z-20 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border border-border hover:bg-background flex items-center justify-center transition-all duration-300 group"
                                            aria-label="Close"
                                        >
                                            <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                        </button>

                                        {/* Centered Content Container */}
                                        <div className="w-full max-w-7xl">
                                            {/* Hero Header */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.6 }}
                                                className="text-center mb-12"
                                            >
                                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                                                    <module.icon className="w-4 h-4" />
                                                    {platformContent.modal.moduleLabel}
                                                </div>
                                                <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6">{module.title}</h2>
                                                <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                                    {module.description}
                                                </p>
                                            </motion.div>

                                            {/* Bento Grid */}
                                            <div className="grid grid-cols-6 gap-4 lg:gap-6 auto-rows-[120px]">
                                                {/* Stats Row - 3 equal cards */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.1 }}
                                                    className="col-span-6 md:col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 flex flex-col items-center justify-center text-center"
                                                >
                                                    <div className="text-5xl font-bold text-foreground mb-2">{module.features.length}</div>
                                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{platformContent.modal.coreFeaturesLabel}</div>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.15 }}
                                                    className="col-span-6 md:col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 flex flex-col items-center justify-center text-center"
                                                >
                                                    <div className="text-5xl font-bold text-foreground mb-2">99%</div>
                                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{platformContent.modal.uptimeLabel}</div>
                                                </motion.div>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.2 }}
                                                    className="col-span-6 md:col-span-2 row-span-2 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6 flex flex-col items-center justify-center text-center"
                                                >
                                                    <div className="text-5xl font-bold text-foreground mb-2">{platformContent.modal.supportValue}</div>
                                                    <div className="text-sm text-muted-foreground uppercase tracking-wider">{platformContent.modal.supportLabel}</div>
                                                </motion.div>

                                                {/* Core Features - Large Card */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.25 }}
                                                    className="col-span-6 md:col-span-3 row-span-4 rounded-2xl bg-card border border-border p-8 overflow-hidden"
                                                >
                                                    <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                                                        <div className="w-8 h-1 bg-primary rounded-full" />
                                                        {platformContent.modal.coreFeaturesLabel}
                                                    </h3>
                                                    <div className="space-y-3 overflow-y-auto max-h-[calc(100%-4rem)]">
                                                        {module.features.map((feature, index) => (
                                                            <motion.div
                                                                key={feature}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                                                                className="flex items-start gap-3 group"
                                                            >
                                                                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                                                    <Check className="w-3.5 h-3.5 text-primary" />
                                                                </div>
                                                                <span className="text-foreground leading-snug">{feature}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>

                                                {/* Extended Capabilities - Large Card */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.3 }}
                                                    className="col-span-6 md:col-span-3 row-span-4 rounded-2xl bg-card border border-border p-8 overflow-hidden"
                                                >
                                                    <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                                                        <div className="w-8 h-1 bg-primary rounded-full" />
                                                        {platformContent.modal.extendedCapabilitiesLabel}
                                                    </h3>
                                                    <div className="space-y-3 overflow-y-auto max-h-[calc(100%-4rem)]">
                                                        {module.extendedFeatures.map((feature, index) => (
                                                            <motion.div
                                                                key={feature}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ duration: 0.3, delay: 0.35 + index * 0.05 }}
                                                                className="flex items-start gap-3 group"
                                                            >
                                                                <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                                                    <Check className="w-3.5 h-3.5 text-primary" />
                                                                </div>
                                                                <span className="text-foreground leading-snug">{feature}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>

                                                {/* Technical Specs - Wide Card */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 0.5, delay: 0.35 }}
                                                    className="col-span-6 row-span-2 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 p-8"
                                                >
                                                    <h3 className="text-2xl font-semibold text-foreground mb-6 flex items-center gap-2">
                                                        <div className="w-8 h-1 bg-primary rounded-full" />
                                                        {platformContent.modal.technicalSpecsLabel}
                                                    </h3>
                                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                                        {module.technicalSpecs.map((spec, index) => (
                                                            <motion.div
                                                                key={spec}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                                                className="flex items-start gap-3"
                                                            >
                                                                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                                                                <span className="text-foreground font-medium text-sm leading-snug">{spec}</span>
                                                            </motion.div>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            </div>

                                            {/* CTA Button */}
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.5, delay: 0.4 }}
                                                className="mt-12 flex justify-center"
                                            >
                                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-7 text-lg rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 group">
                                                    <span>{platformContent.modal.cta}</span>
                                                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </Button>
                                            </motion.div>
                                        </div>
                                    </div>
                                )
                            })()}
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    )
}
