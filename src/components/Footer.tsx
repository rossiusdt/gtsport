import { Dumbbell, Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black tracking-tight text-white">
                ORANGE<span className="text-orange-500">FIT</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              A academia completa para transformar seu corpo e sua vida. Qualidade, estrutura e
              profissionalismo em cada detalhe.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Planos</h4>
            <ul className="space-y-3">
              {['Orange Anual', 'Platinum Mensal', 'Plano Mensal', 'Plano Trimestral'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-3.5 h-3.5 text-orange-500 flex-shrink-0" />
                (11) 9 9999-9999
              </li>
              <li className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-3.5 h-3.5 text-orange-500 flex-shrink-0 mt-0.5" />
                Av. Paulista, 1000 — São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © 2024 OrangeFit. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {['Privacidade', 'Termos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
