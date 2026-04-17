import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Marquee from './components/Marquee';
import About from './sections/About';
import Programs from './sections/Programs';
import Equipment from './sections/Equipment';
import Gallery from './sections/Gallery';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import CTABanner from './sections/CTABanner';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950 text-ink-50">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Programs />
        <Equipment />
        <Gallery />
        <Pricing />
        <Testimonials />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
