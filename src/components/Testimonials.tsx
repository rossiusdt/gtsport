import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Mariana Costa',
    role: 'Aluna há 2 anos',
    avatar:
      'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'Melhor academia que já frequentei! Os instrutores são incríveis e o ambiente é muito motivador. Perdi 12kg em 6 meses.',
  },
  {
    name: 'Rafael Mendes',
    role: 'Aluno há 1 ano',
    avatar:
      'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'O plano anual é o melhor custo-benefício que encontrei. Sem taxas escondidas e o valor não reajusta. Recomendo demais!',
  },
  {
    name: 'Fernanda Lima',
    role: 'Aluna há 8 meses',
    avatar:
      'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=150',
    rating: 5,
    text: 'As aulas de musculação e as modalidades inclusas são excelentes. Nunca me senti tão bem com meu corpo. Vale cada centavo!',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-3 block">
            Depoimentos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            O que nossos alunos
            <br />
            <span className="text-orange-500">estão dizendo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-gray-900 border border-gray-800 hover:border-orange-500/30 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5"
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-5 border-t border-gray-800">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
