import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-orange-500 rounded-lg flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-black tracking-tight text-gray-900">
            ORANGE<span className="text-orange-500">FIT</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Planos', 'Modalidades', 'Unidades', 'Sobre nós'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-gray-700 hover:text-orange-500 transition-colors">
            Entrar
          </a>
          <a
            href="#planos"
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold rounded-lg transition-colors duration-200"
          >
            Começar agora
          </a>
        </div>

        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {['Planos', 'Modalidades', 'Unidades', 'Sobre nós'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-gray-700">
              {item}
            </a>
          ))}
          <a
            href="#planos"
            className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-lg text-center"
          >
            Começar agora
          </a>
        </div>
      )}
    </header>
  );
}
