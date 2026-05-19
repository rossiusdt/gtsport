import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <img
            src="/logo-hero-top.png"
            alt="Health Logo"
            className="h-9 w-auto object-contain"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {['Planos', 'Modalidades', 'Unidades', 'Sobre nós'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-stone-500 hover:text-green-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-stone-500 hover:text-green-600 transition-colors">
            Entrar
          </a>
          <a
            href="#planos"
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-bold rounded-lg transition-colors duration-200"
          >
            Começar agora
          </a>
        </div>

        <button
          className="md:hidden p-2 text-stone-500"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-stone-200 px-6 py-4 flex flex-col gap-4">
          {['Planos', 'Modalidades', 'Unidades', 'Sobre nós'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-stone-600">
              {item}
            </a>
          ))}
          <a
            href="#planos"
            className="px-4 py-2 bg-green-600 text-white text-sm font-bold rounded-lg text-center"
          >
            Começar agora
          </a>
        </div>
      )}
    </header>
  );
}
