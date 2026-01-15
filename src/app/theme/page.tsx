'use client';

import {
  ArrowRight,
  CreditCard,
  Database,
  Mail,
  Sparkles,
  User,
} from 'lucide-react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function ThemePalettePage() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground relative overflow-hidden">
      <BackgroundBeams className="-z-10" />

      <div className="max-w-6xl mx-auto p-8 space-y-20 relative z-10">
        {/* Header */}
        <section>
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Design System
          </Badge>
          <h1 className="text-6xl font-serif mb-4">Bespoke Midnight</h1>
          <p className="text-muted-foreground text-xl max-w-2xl">
            A world-class visual language for the digital mall revolution.
            Powered by <span className="text-primary font-bold">Shadcn UI</span>{' '}
            and <span className="text-primary font-bold">Aceternity</span>{' '}
            effects.
          </p>
        </section>

        {/* Colors */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Background</h3>
            <Card className="h-32 bg-background border-border flex items-end p-4">
              <span className="text-sm font-mono text-muted-foreground">
                var(--background)
              </span>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Primary</h3>
            <Card className="h-32 bg-primary border-primary flex items-end p-4 text-primary-foreground">
              <span className="text-sm font-mono">var(--primary)</span>
            </Card>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Success/Emerald</h3>
            <Card className="h-32 bg-[#10B981] border-[#10B981] flex items-end p-4 text-white">
              <span className="text-sm font-mono">#10B981</span>
            </Card>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold border-b border-border pb-4">
            Typography
          </h2>
          <div className="space-y-6">
            <h1 className="text-7xl font-serif">Playfair Display H1</h1>
            <h2 className="text-5xl font-serif text-primary">
              Playfair Display H2
            </h2>
            <h3 className="text-3xl font-serif">Playfair Display H3</h3>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Geist Sans: This is our primary body font. It is designed for
              readability and a modern, technical feel. The mall's digital layer
              must be legible and crisp across all viewports.
            </p>
          </div>
        </section>

        {/* Components */}
        <section className="space-y-12">
          <h2 className="text-3xl font-bold border-b border-border pb-4">
            Components
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Buttons */}
            <div className="space-y-6">
              <h3 className="text-xl text-muted-foreground uppercase tracking-widest text-sm">
                Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                >
                  Primary Action <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button variant="secondary" size="lg" className="rounded-full">
                  Secondary Glass
                </Button>
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-primary group"
                >
                  Ghost Link{' '}
                  <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-6">
              <h3 className="text-xl text-muted-foreground uppercase tracking-widest text-sm">
                Inputs
              </h3>
              <div className="space-y-4">
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    className="pl-12 py-6 bg-input/50 rounded-xl"
                  />
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="pl-12 py-6 bg-input/50 rounded-xl"
                  />
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="space-y-6">
            <h3 className="text-xl text-muted-foreground uppercase tracking-widest text-sm">
              Cards & Effects
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Standard Card */}
              <Card className="group relative overflow-hidden transition-colors hover:border-primary/50">
                <CardHeader>
                  <Database className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Data Nexus</CardTitle>
                  <CardDescription>
                    Verified proprietary intent data.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    The data grid lights up the dark economy through verified
                    transactions.
                  </p>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>

              {/* Standard Card */}
              <Card className="group relative overflow-hidden transition-colors hover:border-primary/50">
                <CardHeader>
                  <CreditCard className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Green Ticket</CardTitle>
                  <CardDescription>
                    Digital receipts for informal trade.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Every scan builds a credit footprint for unbanked vendors.
                  </p>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>

              {/* Standard Card */}
              <Card className="group relative overflow-hidden transition-colors hover:border-primary/50">
                <CardHeader>
                  <Sparkles className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Shopper Plus</CardTitle>
                  <CardDescription>Premium rewards tier.</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Double points when supporting verified local vendors.
                  </p>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
