import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-24 bg-orange-500 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-white rounded-full" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Comece sua transformação
          <br />
          ainda hoje!
        </h2>
        <p className="text-orange-100 text-lg mb-10 max-w-xl mx-auto">
          Não espere mais para investir em você. Garanta sua vaga com o menor preço e sem taxa de adesão.
        </p>
        <a
          href="#planos"
          className="inline-flex items-center gap-2 px-10 py-5 bg-white text-orange-500 font-black text-base rounded-xl hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-2xl"
        >
          Ver planos agora
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
