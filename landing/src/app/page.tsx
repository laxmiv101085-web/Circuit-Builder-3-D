import Hero from '@/components/Hero';
import Features from '@/components/Features';
import RealExample from '@/components/RealExample';
import Showcase3D from '@/components/Showcase3D';
import Stats from '@/components/Stats';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F6F8]">
      <Hero />
      <Features />
      <RealExample />
      <Showcase3D />
      <Stats />
      <Footer />
    </main>
  );
}
