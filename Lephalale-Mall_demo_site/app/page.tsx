import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { PlatformSection } from "@/components/platform-section"
import { ImpactSection } from "@/components/impact-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function ProposalPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <VisionSection />
      <ProblemSection />
      <SolutionSection />
      <PlatformSection />
      <ImpactSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </main>
  )
}
