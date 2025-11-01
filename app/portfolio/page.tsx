import ProjectsList from '@/components/lists/ProjectsList';
import { getAllProjects } from '@/lib/projects';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { CTA } from '@/components/sections/CTA';

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <>
      <Header />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-liftoff-blue/10 via-background to-liftoff-orange/10">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Launch Sprint Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From fintech to AI dashboards—explore case studies showcasing strategy-backed design,
              production-grade Next.js builds, and measurable outcomes.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <ProjectsList projects={projects} />
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
