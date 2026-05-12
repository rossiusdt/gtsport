import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-yellow-400/20 border border-yellow-400/40 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
            <span className="text-yellow-400 text-xs font-semibold tracking-wide uppercase">
              Matrículas abertas
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-none mb-6">
            TRANSFORME
            <br />
            <span className="text-yellow-400">SEU CORPO.</span>
            <br />
            SUA VIDA.
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
            Academia completa com as melhores modalidades, equipamentos de ponta e profissionais
            altamente qualificados para te acompanhar em cada passo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#planos"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-black text-base rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30"
            >
              Ver planos e preços
            </a>
            <a
              href="#modalidades"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:border-yellow-400/50 text-white font-semibold text-base rounded-xl transition-all duration-200 backdrop-blur-sm hover:text-yellow-400"
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
                  className="w-10 h-10 rounded-full border-2 border-black object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-zinc-400 text-sm">
                <span className="text-white font-semibold">+2.400</span> alunos satisfeitos
              </span>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#planos"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 hover:text-yellow-400 transition-colors group"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Ver planos</span>
        <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-yellow-400" />
      </a>
    </section>
  );
}
