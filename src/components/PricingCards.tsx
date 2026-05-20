import { Check, ChevronDown, ChevronUp, Gem } from 'lucide-react';
import { useState } from 'react';
import { trackClick } from '../lib/analytics';

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
      'Aulas exclusivas: Pilates, Spinning, Jump e Yoga',
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
          ? 'shadow-2xl shadow-green-600/20 ring-2 ring-green-500'
          : 'ring-1 ring-stone-200 hover:ring-green-400/60 hover:shadow-lg'
      } bg-white`}
    >
      {plan.badge && (
        <div className="bg-green-600 py-2.5 text-center">
          <div className="flex items-center justify-center gap-2">
            <Gem className="w-3.5 h-3.5 text-white" />
            <span className="text-white text-xs font-black tracking-widest uppercase">
              {plan.badge}
            </span>
            <Gem className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      )}

      <div className="p-8">
        <p className="text-green-600 text-xs font-semibold mb-1">{plan.tag}</p>

        <h3 className="text-stone-900 font-black text-base uppercase tracking-tight mb-6 leading-snug">
          {plan.name}
        </h3>

        <div className="flex items-end gap-0.5 mb-1">
          <span className="text-stone-400 text-sm font-medium mr-1 mb-3">R$</span>
          <span className="text-7xl font-black text-stone-900 leading-none">{plan.price}</span>
          <span className="text-2xl font-bold text-stone-600 mb-1.5">{plan.cents}</span>
        </div>
        <p className="text-stone-400 text-sm mb-7">{plan.period}</p>

        <a
          href={plan.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackClick('checkout_click', plan.id)}
          className="block w-full py-4 rounded-xl font-black text-sm tracking-widest uppercase text-center transition-all duration-200 mb-4 bg-green-600 hover:bg-green-700 text-white hover:shadow-lg hover:shadow-green-600/25"
        >
          EU QUERO
        </a>

        <p className="text-center text-stone-400 text-xs mb-5">{plan.note}</p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-green-600 hover:text-green-700 font-semibold text-sm transition-colors mx-auto"
        >
          {expanded ? 'Ocultar detalhes' : 'Ver detalhes'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? 'max-h-96 opacity-100 mt-5' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-stone-100 pt-5 space-y-3">
            {plan.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-green-600 stroke-[2.5]" />
                </div>
                <span className="text-stone-600 text-sm">{feature}</span>
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
