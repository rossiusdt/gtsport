import { Activity, Award, Clock, MapPin, ShieldCheck, Users } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'Horário ampliado',
    description: 'Aberto todos os dias, com horários que cabem na sua rotina. De segunda a domingo.',
  },
  {
    icon: Activity,
    title: 'Equipamentos premium',
    description: 'Aparelhos de última geração para garantir o melhor resultado nos seus treinos.',
  },
  {
    icon: Users,
    title: 'Profissionais qualificados',
    description: 'Equipe de instrutores certificados prontos para te guiar em cada exercício.',
  },
  {
    icon: MapPin,
    title: 'Várias unidades',
    description: 'Treine em qualquer uma das nossas unidades sem custo adicional nos planos Platinum.',
  },
  {
    icon: Award,
    title: 'Avaliação física gratuita',
    description: 'Receba um diagnóstico completo do seu corpo e um plano de treino personalizado.',
  },
  {
    icon: ShieldCheck,
    title: 'Valor fixo garantido',
    description: 'O preço que você contratar não sofrerá reajuste enquanto mantiver o plano ativo.',
  },
];

export default function Features() {
  return (
    <section id="modalidades" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-3 block">
              Por que nos escolher
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-6">
              Muito mais do que
              <br />
              <span className="text-yellow-400">uma academia</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Oferecemos uma experiência completa de bem-estar, com estrutura de alto nível,
              equipe especializada e comunidade engajada para te manter motivado.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Academia"
              className="w-full h-72 object-cover rounded-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-yellow-400 rounded-2xl p-5 shadow-xl">
              <p className="text-black text-3xl font-black">+2.400</p>
              <p className="text-black/70 text-sm font-medium">alunos ativos</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-zinc-900 rounded-2xl p-5 shadow-xl border border-zinc-700">
              <p className="text-white text-3xl font-black">98%</p>
              <p className="text-zinc-400 text-sm font-medium">satisfação</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-7 rounded-2xl border border-zinc-800 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/5 transition-all duration-300 bg-zinc-900"
              >
                <div className="w-12 h-12 bg-yellow-400/10 group-hover:bg-yellow-400 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-yellow-400 group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
