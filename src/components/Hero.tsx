import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 border border-green-200 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-700 text-xs font-semibold tracking-wide uppercase">
              Matrículas abertas
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-stone-900 leading-none mb-6">
            TRANSFORME
            <br />
            <span className="text-green-600">SEU CORPO.</span>
            <br />
            SUA VIDA.
          </h1>

          <p className="text-stone-600 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Academia completa com as melhores modalidades, equipamentos de ponta e profissionais
            altamente qualificados para te acompanhar em cada passo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#planos"
              className="inline-flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-black text-base rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-green-600/30"
            >
              Ver planos e preços
            </a>
            <a
              href="#modalidades"
              className="inline-flex items-center justify-center px-8 py-4 border border-stone-300 hover:border-green-500 text-stone-700 font-semibold text-base rounded-xl transition-all duration-200 hover:text-green-700 bg-white/70 backdrop-blur-sm"
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
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-green-500 text-green-500" />
                ))}
              </div>
              <span className="text-stone-500 text-sm">
                <span className="text-stone-800 font-semibold">+2.400</span> alunos satisfeitos
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#planos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-green-600 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Ver planos</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </a>
    </section>
  );
}
