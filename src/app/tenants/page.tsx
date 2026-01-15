import { tenantContent } from '@/site-content';

export default function TenantsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <section className="container mx-auto px-4">
        <span className="text-gold font-medium tracking-wider uppercase text-sm mb-4 block">
          {tenantContent.hero.badge}
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {tenantContent.hero.title}
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8">
          {tenantContent.hero.description}
        </p>
        <button className="bg-gold text-midnight px-8 py-4 rounded-full font-bold hover:opacity-90 transition">
          {tenantContent.hero.cta}
        </button>
      </section>

      <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-8">
        {tenantContent.benefits.map((benefit, i) => (
          <div
            key={i}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <benefit.icon className="w-12 h-12 text-gold mb-4" />
            <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
