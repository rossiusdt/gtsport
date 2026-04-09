import { Gift, Timer } from 'lucide-react';
import { useState } from 'react';

export default function PromoBanner() {
  const [count] = useState(3);

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 border-b border-yellow-600">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-yellow-200 rounded-full -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-yellow-200 rounded-full translate-y-1/2" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-3.5 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
        <div className="flex items-center gap-2">
          <Gift className="w-4 h-4 text-yellow-950 flex-shrink-0" />
          <p className="text-yellow-950 font-black text-sm tracking-widest uppercase">
            OS 5 PRIMEIROS A COMPRAR GANHAM 2 MESES GRÁTIS!
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-black/20 rounded-full px-3 py-1">
          <Timer className="w-3.5 h-3.5 text-yellow-950" />
          <span className="text-yellow-950 text-xs font-bold">
            {count} vagas restantes
          </span>
        </div>
      </div>
    </div>
  );
}
