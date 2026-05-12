import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-yellow-400 rounded-lg flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-black" />
          </div>
          <span className="text-xl font-black tracking-tight text-white">
            LOUD<span className="text-yellow-400">FIT</span>
            <span className="text-zinc-500 font-light text-xs ml-1 tracking-widest">IPIRANGA</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Planos', 'Modalidades', 'Unidades', 'Sobre nós'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-zinc-400 hover:text-yellow-400 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="text-sm font-semibold text-zinc-400 hover:text-yellow-400 transition-colors">
            Entrar
          </a>
          <a
            href="#planos"
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-300 text-black text-sm font-black rounded-lg transition-colors duration-200"
          >
            Começar agora
          </a>
        </div>

        <button
          className="md:hidden p-2 text-zinc-400"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black border-t border-zinc-800 px-6 py-4 flex flex-col gap-4">
          {['Planos', 'Modalidades', 'Unidades', 'Sobre nós'].map((item) => (
            <a key={item} href="#" className="text-sm font-medium text-zinc-300">
              {item}
            </a>
          ))}
          <a
            href="#planos"
            className="px-4 py-2 bg-yellow-400 text-black text-sm font-black rounded-lg text-center"
          >
            Começar agora
          </a>
        </div>
      )}
    </header>
  );
}
