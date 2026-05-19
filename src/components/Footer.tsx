import { Instagram, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img
              src="/logo-hero-top.png"
              alt="Health Logo"
              className="h-8 w-auto object-contain mb-4 brightness-0 invert"
            />
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              A academia completa para transformar seu corpo e sua vida. Qualidade, estrutura e
              profissionalismo em cada detalhe.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="w-9 h-9 bg-stone-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
              >
                <Instagram className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Planos</h4>
            <ul className="space-y-3">
              {['Orange Anual', 'Platinum Mensal', 'Plano Mensal', 'Plano Trimestral'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-stone-400 hover:text-green-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-stone-400 text-sm">
                <Phone className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                (11) 9 9999-9999
              </li>
              <li className="flex items-start gap-2 text-stone-400 text-sm">
                <MapPin className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" />
                Av. Paulista, 1000 — São Paulo, SP
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-600 text-xs">
            © 2024 Health Academia. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {['Privacidade', 'Termos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-stone-600 hover:text-stone-400 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
