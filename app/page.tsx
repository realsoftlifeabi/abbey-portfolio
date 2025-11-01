import { getAllProjects } from '@/lib/projects';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { OfferStack } from '@/components/sections/OfferStack';
import { Process } from '@/components/sections/Process';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';

export default async function HomePage() {
  const projects = await getAllProjects();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CaseStudies projects={projects} />
        <OfferStack />
        <Process />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
