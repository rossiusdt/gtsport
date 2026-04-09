import PricingCards from './components/PricingCards';
import PromoBanner from './components/PromoBanner';

export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <PromoBanner />
      <div className="flex-1 flex items-center justify-center py-16 px-6">
        <PricingCards />
      </div>
    </div>
  );
}
