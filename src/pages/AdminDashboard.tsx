import { useEffect, useState } from 'react';
import {
  Users,
  MousePointerClick,
  TrendingUp,
  LogOut,
  RefreshCw,
  Activity,
  ShoppingCart,
} from 'lucide-react';
import { supabase } from '../lib/supabase';

interface Stats {
  totalVisits: number;
  uniqueVisitors: number;
  totalClicks: number;
  orangeClicks: number;
  platinumClicks: number;
  conversionRate: number;
  recentVisits: { created_at: string; referrer: string }[];
  recentClicks: { created_at: string; plan_id: string; event_type: string }[];
  visitsByDay: { date: string; count: number }[];
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  accent = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}) {
  return (
    <div className={`rounded-2xl p-6 ${accent ? 'bg-yellow-500/10 ring-1 ring-yellow-500/30' : 'bg-zinc-900 ring-1 ring-zinc-800'}`}>
      <div className="flex items-center justify-between mb-4">
        <span className="text-zinc-400 text-sm font-medium">{label}</span>
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${accent ? 'bg-yellow-500/20' : 'bg-zinc-800'}`}>
          <Icon className={`w-4 h-4 ${accent ? 'text-yellow-400' : 'text-zinc-400'}`} />
        </div>
      </div>
      <p className={`text-3xl font-black ${accent ? 'text-yellow-400' : 'text-white'}`}>{value}</p>
      {sub && <p className="text-zinc-500 text-xs mt-1">{sub}</p>}
    </div>
  );
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  async function loadStats() {
    setRefreshing(true);

    const [viewsRes, clicksRes] = await Promise.all([
      supabase.from('page_views').select('id, session_id, created_at, referrer').order('created_at', { ascending: false }),
      supabase.from('click_events').select('id, session_id, plan_id, event_type, created_at').order('created_at', { ascending: false }),
    ]);

    const views = viewsRes.data ?? [];
    const clicks = clicksRes.data ?? [];

    const uniqueSessions = new Set(views.map((v) => v.session_id)).size;
    const orangeClicks = clicks.filter((c) => c.plan_id === 'orange-anual').length;
    const platinumClicks = clicks.filter((c) => c.plan_id === 'platinum-mensal').length;
    const conversionRate = views.length > 0 ? ((clicks.length / views.length) * 100) : 0;

    // Visits by day (last 7 days)
    const dayMap: Record<string, number> = {};
    views.forEach((v) => {
      const day = new Date(v.created_at).toLocaleDateString('pt-BR');
      dayMap[day] = (dayMap[day] ?? 0) + 1;
    });
    const visitsByDay = Object.entries(dayMap)
      .map(([date, count]) => ({ date, count }))
      .slice(0, 7);

    setStats({
      totalVisits: views.length,
      uniqueVisitors: uniqueSessions,
      totalClicks: clicks.length,
      orangeClicks,
      platinumClicks,
      conversionRate,
      recentVisits: views.slice(0, 10),
      recentClicks: clicks.slice(0, 10),
      visitsByDay,
    });

    setLoading(false);
    setRefreshing(false);
  }

  useEffect(() => {
    loadStats();
  }, []);

  async function handleSignOut() {
    await supabase.auth.signOut();
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin" />
          <p className="text-zinc-400 text-sm">Carregando dados...</p>
        </div>
      </div>
    );
  }

  const maxDay = Math.max(...(stats?.visitsByDay.map((d) => d.count) ?? [1]), 1);

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-yellow-500/15 rounded-lg flex items-center justify-center">
              <Activity className="w-4 h-4 text-yellow-400" />
            </div>
            <div>
              <h1 className="text-white font-black text-base leading-none">Painel Admin</h1>
              <p className="text-zinc-500 text-xs mt-0.5">Analytics em tempo real</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={loadStats}
              disabled={refreshing}
              className="flex items-center gap-2 text-zinc-400 hover:text-white text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-800"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${refreshing ? 'animate-spin' : ''}`} />
              Atualizar
            </button>
            <button
              onClick={handleSignOut}
              className="flex items-center gap-2 text-zinc-400 hover:text-red-400 text-sm transition-colors px-3 py-1.5 rounded-lg hover:bg-zinc-800"
            >
              <LogOut className="w-3.5 h-3.5" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8 space-y-8">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={Users} label="Visitas totais" value={stats!.totalVisits} sub="pageviews registrados" />
          <StatCard icon={TrendingUp} label="Visitantes únicos" value={stats!.uniqueVisitors} sub="sessões distintas" />
          <StatCard icon={MousePointerClick} label="Cliques no botão" value={stats!.totalClicks} sub="tentativas de checkout" accent />
          <StatCard
            icon={TrendingUp}
            label="Taxa de conversão"
            value={`${stats!.conversionRate.toFixed(1)}%`}
            sub="cliques / visitas"
          />
        </div>

        {/* Plans breakdown */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-zinc-900 ring-1 ring-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <ShoppingCart className="w-4 h-4 text-yellow-400" />
              <h2 className="text-white font-bold text-sm uppercase tracking-wide">Cliques por Plano</h2>
            </div>
            <div className="space-y-4">
              {[
                { label: 'Plano Orange', count: stats!.orangeClicks, color: 'bg-yellow-500' },
                { label: 'Plano Platinum', count: stats!.platinumClicks, color: 'bg-zinc-300' },
              ].map((item) => {
                const pct = stats!.totalClicks > 0 ? (item.count / stats!.totalClicks) * 100 : 0;
                return (
                  <div key={item.label}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-300 font-medium">{item.label}</span>
                      <span className="text-zinc-400">{item.count} cliques</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-700`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Visits by day mini chart */}
          <div className="bg-zinc-900 ring-1 ring-zinc-800 rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <Activity className="w-4 h-4 text-yellow-400" />
              <h2 className="text-white font-bold text-sm uppercase tracking-wide">Visitas por Dia</h2>
            </div>
            {stats!.visitsByDay.length === 0 ? (
              <p className="text-zinc-600 text-sm">Nenhum dado ainda.</p>
            ) : (
              <div className="flex items-end gap-2 h-24">
                {stats!.visitsByDay.map((d) => (
                  <div key={d.date} className="flex-1 flex flex-col items-center gap-1 group">
                    <span className="text-zinc-500 text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {d.count}
                    </span>
                    <div
                      className="w-full bg-yellow-500/80 rounded-sm transition-all duration-500 hover:bg-yellow-400 cursor-default"
                      style={{ height: `${(d.count / maxDay) * 80}px`, minHeight: '4px' }}
                    />
                    <span className="text-zinc-600 text-xs">{d.date.slice(0, 5)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent tables */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Recent visits */}
          <div className="bg-zinc-900 ring-1 ring-zinc-800 rounded-2xl p-6">
            <h2 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Ultimas Visitas</h2>
            {stats!.recentVisits.length === 0 ? (
              <p className="text-zinc-600 text-sm">Nenhuma visita registrada.</p>
            ) : (
              <div className="space-y-2">
                {stats!.recentVisits.map((v, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-800 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0" />
                      <span className="text-zinc-400 text-xs truncate max-w-[140px]">
                        {v.referrer || 'Acesso direto'}
                      </span>
                    </div>
                    <span className="text-zinc-600 text-xs">{formatDate(v.created_at)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Recent clicks */}
          <div className="bg-zinc-900 ring-1 ring-zinc-800 rounded-2xl p-6">
            <h2 className="text-white font-bold text-sm uppercase tracking-wide mb-4">Ultimos Cliques</h2>
            {stats!.recentClicks.length === 0 ? (
              <p className="text-zinc-600 text-sm">Nenhum clique registrado.</p>
            ) : (
              <div className="space-y-2">
                {stats!.recentClicks.map((c, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-b border-zinc-800 last:border-0">
                    <div className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${c.plan_id === 'orange-anual' ? 'bg-yellow-400' : 'bg-zinc-300'}`} />
                      <span className="text-zinc-300 text-xs font-medium">
                        {c.plan_id === 'orange-anual' ? 'Plano Orange' : c.plan_id === 'platinum-mensal' ? 'Plano Platinum' : c.event_type}
                      </span>
                    </div>
                    <span className="text-zinc-600 text-xs">{formatDate(c.created_at)}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
