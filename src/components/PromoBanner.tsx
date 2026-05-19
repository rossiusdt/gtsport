import { Gift, Timer } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanner() {
  const [count] = useState(3);

  return (
    <div className="relative overflow-hidden bg-green-600 border-b border-green-700">
      <div className="relative max-w-5xl mx-auto px-6 py-3.5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 text-white flex-shrink-0" />
          <p className="text-white font-bold text-sm tracking-wide uppercase">
            OS 5 PRIMEIROS A COMPRAR GANHAM 2 MESES GRÁTIS!
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-white/20 rounded-full px-3 py-1">
          <Timer className="w-3.5 h-3.5 text-white" />
          <span className="text-white text-xs font-semibold">
            {count} vagas restantes
          </span>
        </div>
      </div>
    </div>
  );
}
