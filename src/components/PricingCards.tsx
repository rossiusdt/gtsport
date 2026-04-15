import { Check, ChevronDown, ChevronUp, Gem } from 'lucide-react';
import { useState } from 'react';

interface Plan {
  id: string;
  badge?: string;
  tag: string;
  name: string;
  price: number;
  cents: string;
  period: string;
  note: string;
  features: string[];
  highlighted: boolean;
  link: string;
}

const plans: Plan[] = [
  {
    id: 'orange-anual',
    badge: 'MAIS VANTAJOSO',
    tag: 'Recorrente',
    name: 'PLANO ORANGE',
    price: 89,
    cents: ',90',
    period: 'por mês',
    note: 'Valor fixo — não sofrerá reajuste!',
    features: [
      'Acesso ilimitado à academia',
      'Todas as modalidades inclusas',
      'Desconto em produtos',
      'Sem taxa de adesão',
    ],
    highlighted: true,
    link: 'https://seguro.compraseguraverificada.online/api/public/shopify?product=2006012848673&store=20060',
  },
  {
    id: 'platinum-mensal',
    tag: 'Recorrente',
    name: 'PLANO PLATINUM',
    price: 109,
    cents: ',90',
    period: 'por mês',
    note: 'Valor fixo — não sofrerá reajuste!',
    features: [
      'Acesso ilimitado à academia',
      'Todas as modalidades inclusas',
      'Avaliação física gratuita',
      'Acesso a todas as unidades',
      'Aulas exclusivas Platinum',
      'Desconto em produtos',
      'Sem taxa de adesão',
      'Área Kids com monitores',
    ],
    highlighted: false,
    link: 'https://seguro.compraseguraverificada.online/api/public/shopify?product=2006012827188&store=20060',
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div
      className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
        plan.highlighted
          ? 'shadow-2xl shadow-yellow-500/20 ring-2 ring-yellow-500'
          : 'ring-1 ring-zinc-700 hover:ring-yellow-700/60'
      } bg-zinc-900`}
    >
      {plan.badge && (
        <div className="bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 py-2.5 text-center">
          <div className="flex items-center justify-center gap-2">
            <Gem className="w-3.5 h-3.5 text-yellow-950" />
            <span className="text-yellow-950 text-xs font-black tracking-widest uppercase">
              {plan.badge}
            </span>
            <Gem className="w-3.5 h-3.5 text-yellow-950" />
          </div>
        </div>
      )}

      <div className="p-8">
        <p className="text-yellow-500 text-xs font-semibold mb-1">{plan.tag}</p>

        <h3 className="text-white font-black text-base uppercase tracking-tight mb-6 leading-snug">
          {plan.name}
        </h3>

        <div className="flex items-end gap-0.5 mb-1">
          <span className="text-zinc-400 text-sm font-medium mr-1 mb-3">R$</span>
          <span className="text-7xl font-black text-white leading-none">{plan.price}</span>
          <span className="text-2xl font-bold text-zinc-300 mb-1.5">{plan.cents}</span>
        </div>
        <p className="text-zinc-500 text-sm mb-7">{plan.period}</p>

        <a
          href={plan.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full py-4 rounded-xl font-black text-sm tracking-widest uppercase text-center transition-all duration-200 mb-4 ${
            plan.highlighted
              ? 'bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-yellow-950 hover:brightness-110 hover:shadow-lg hover:shadow-yellow-500/30'
              : 'bg-gradient-to-r from-yellow-700 via-yellow-500 to-yellow-700 text-yellow-950 hover:brightness-110 hover:shadow-lg hover:shadow-yellow-500/20'
          }`}
        >
          EU QUERO
        </a>

        <p className="text-center text-zinc-600 text-xs mb-5">{plan.note}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-yellow-500 hover:text-yellow-400 font-semibold text-sm transition-colors mx-auto"
        >
          {expanded ? 'Ocultar detalhes' : 'Ver detalhes'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-zinc-800 pt-5 space-y-3">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-yellow-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-yellow-400 stroke-[2.5]" />
                </div>
                <span className="text-zinc-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PricingCards() {
  return (
    <div className="w-full max-w-3xl">
      <div className="grid md:grid-cols-2 gap-5 items-start">
        {plans.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}
