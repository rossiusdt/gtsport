import { useState } from 'react';
import { Lock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError('E-mail ou senha inválidos.');
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="flex items-center justify-center mb-8">
          <div className="w-12 h-12 bg-yellow-500/15 rounded-2xl flex items-center justify-center">
            <Lock className="w-6 h-6 text-yellow-400" />
          </div>
        </div>
        <h1 className="text-white font-black text-2xl text-center mb-1">Painel Admin</h1>
        <p className="text-zinc-500 text-sm text-center mb-8">Acesso restrito</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-600"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-zinc-400 text-xs font-semibold mb-1.5 uppercase tracking-wide">
              Senha
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full bg-zinc-900 border border-zinc-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-yellow-500 transition-colors placeholder:text-zinc-600"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600 text-yellow-950 font-black text-sm uppercase tracking-widest py-3.5 rounded-xl hover:brightness-110 transition-all disabled:opacity-50"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
