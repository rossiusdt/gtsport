import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/70 to-gray-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-orange-500/20 border border-orange-500/30 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
            <span className="text-orange-400 text-xs font-semibold tracking-wide uppercase">
              Matrículas abertas
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
            TRANSFORME
            <br />
            <span className="text-orange-500">SEU CORPO.</span>
            <br />
            SUA VIDA.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Academia completa com as melhores modalidades, equipamentos de ponta e profissionais
            altamente qualificados para te acompanhar em cada passo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#planos"
              className="inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold text-base rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30"
            >
              Ver planos e preços
            </a>
            <a
              href="#modalidades"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold text-base rounded-xl transition-all duration-200 backdrop-blur-sm"
            >
              Conhecer modalidades
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex -space-x-2">
              {[
                'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=80',
                'https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=80',
                'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=80',
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="member"
                  className="w-10 h-10 rounded-full border-2 border-gray-950 object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-gray-400 text-sm">
                <span className="text-white font-semibold">+2.400</span> alunos satisfeitos
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#planos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-orange-400 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Ver planos</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-orange-400" />
      </a>
    </section>
  );
}
