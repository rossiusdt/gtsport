import { useEffect } from 'react';
import CtaBanner from './components/CtaBanner';
import Features from './components/Features';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import PricingCards from './components/PricingCards';
import PromoBanner from './components/PromoBanner';
import Testimonials from './components/Testimonials';
import { trackPageView } from './lib/analytics';

export default function App() {
  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PromoBanner />
      <Header />
      <Hero />
      <Features />
      <section id="planos" className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-green-600 text-sm font-bold uppercase tracking-widest mb-3 block">
              Planos e preços
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-stone-900 mb-4">
              Escolha o plano
              <br />
              <span className="text-green-600">ideal para você</span>
            </h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Sem taxa de adesão, sem contratos longos e com valor fixo garantido.
            </p>
          </div>
          <div className="flex justify-center">
            <PricingCards />
          </div>
        </div>
      </section>
      <Testimonials />
      <CtaBanner />
      <Footer />
    </div>
  );
}
