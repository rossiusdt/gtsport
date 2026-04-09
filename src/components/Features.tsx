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
    <section id="modalidades" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3 block">
              Por que nos escolher
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              Muito mais do que
              <br />
              <span className="text-orange-500">uma academia</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
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
            <div className="absolute -bottom-6 -left-6 bg-orange-500 rounded-2xl p-5 shadow-xl">
              <p className="text-white text-3xl font-black">+2.400</p>
              <p className="text-orange-100 text-sm font-medium">alunos ativos</p>
            </div>
            <div className="absolute -top-6 -right-6 bg-gray-900 rounded-2xl p-5 shadow-xl">
              <p className="text-white text-3xl font-black">98%</p>
              <p className="text-gray-400 text-sm font-medium">satisfação</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-7 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-orange-100 group-hover:bg-orange-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-gray-900 font-bold text-base mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
