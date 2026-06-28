import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { disasters } from '../data/mockData';
import Logo from './Logo';
import {
  Target, Award, BarChart3, PieChart,
  Activity, Waves, CloudRain, Flame, ChevronRight, ArrowLeft,
  Zap, Brain, Shield, AlertTriangle, Download, TrendingUp
} from 'lucide-react';

const disasterIcons: Record<string, React.ReactNode> = {
  earthquake: <Activity className="w-5 h-5" strokeWidth={1.75} />,
  tsunami: <Waves className="w-5 h-5" strokeWidth={1.75} />,
  flood: <CloudRain className="w-5 h-5" strokeWidth={1.75} />,
  fire: <Flame className="w-5 h-5" strokeWidth={1.75} />
};

const disasterBgColors: Record<string, string> = {
  earthquake: 'bg-amber-100 text-amber-700',
  tsunami: 'bg-cyan-100 text-cyan-700',
  flood: 'bg-blue-100 text-blue-700',
  fire: 'bg-red-100 text-red-700',
};

export default function AnalyticsDashboard() {
  const { user, getXPProgress } = useApp();
  const xpProgress = getXPProgress();

  const completedCount = user.completedSimulations.length;
  const totalCorrect = user.completedSimulations.reduce((sum, s) => sum + s.correctDecisions, 0);
  const totalDecisions = user.completedSimulations.reduce((sum, s) => sum + s.totalDecisions, 0);
  const accuracy = totalDecisions > 0 ? Math.round((totalCorrect / totalDecisions) * 100) : 0;

  const report = {
    studentName: user.name,
    school: user.school,
    totalSimulations: completedCount,
    averageScore: completedCount > 0
      ? Math.round(user.completedSimulations.reduce((sum, s) => sum + s.score, 0) / completedCount)
      : 0,
    totalXP: user.xp,
    level: user.level
  };

  const handleDownloadReport = () => {
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `sakato-report-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Header */}
      <header className="bg-white border-b border-sakato-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="p-2 hover:bg-slate-100 rounded-btn transition-colors">
                <ArrowLeft className="w-5 h-5 text-sakato-text-muted" strokeWidth={1.75} />
              </Link>
              <div>
                <h1 className="text-lg font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>Analitik Pembelajaran</h1>
                <p className="text-sm text-sakato-text-muted">Statistik performa</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/" className="hidden sm:block"><Logo height={38} /></Link>
              <button
                onClick={handleDownloadReport}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-btn hover:bg-primary-700 transition-colors text-sm font-medium"
              >
                <Download className="w-4 h-4" strokeWidth={1.75} />
                <span className="hidden sm:inline">Unduh Laporan</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<Target className="w-6 h-6" strokeWidth={1.75} />} label="Akurasi Total" value={`${accuracy}%`} color="secondary" />
          <StatCard icon={<Zap className="w-6 h-6" strokeWidth={1.75} />} label="Total XP" value={user.xp.toLocaleString()} color="accent" />
          <StatCard icon={<Award className="w-6 h-6" strokeWidth={1.75} />} label="Badge" value={`${user.badges.length}/6`} color="primary" />
          <StatCard icon={<BarChart3 className="w-6 h-6" strokeWidth={1.75} />} label="Simulasi" value={`${completedCount}/${disasters.length}`} color="info" />
        </div>

        {/* Overall Score */}
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-bold text-sakato-text mb-6 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <Brain className="w-5 h-5 text-secondary" strokeWidth={1.75} />
            Ringkasan Performa
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="12" className="text-slate-200" />
                <circle
                  cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="12"
                  strokeDasharray={`${(accuracy / 100) * 440} 440`}
                  className={accuracy >= 80 ? 'text-sakato-success' : accuracy >= 50 ? 'text-accent' : 'text-sakato-danger'}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{accuracy}</span>
                <span className="text-sm text-sakato-text-muted">% Akurasi</span>
              </div>
            </div>
            <div className="flex-1 space-y-4 w-full">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-sakato-bg rounded-btn">
                  <div className="text-sm text-sakato-text-muted">Keputusan Benar</div>
                  <div className="text-2xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{totalCorrect}</div>
                </div>
                <div className="p-4 bg-sakato-bg rounded-btn">
                  <div className="text-sm text-sakato-text-muted">Total Keputusan</div>
                  <div className="text-2xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{totalDecisions}</div>
                </div>
                <div className="p-4 bg-sakato-bg rounded-btn">
                  <div className="text-sm text-sakato-text-muted">Skor Rata-rata</div>
                  <div className="text-2xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{report.averageScore}%</div>
                </div>
                <div className="p-4 bg-sakato-bg rounded-btn">
                  <div className="text-sm text-sakato-text-muted">Level</div>
                  <div className="text-2xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{user.level.replace('_', ' ')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Disaster Performance */}
        <div className="card p-6 mb-8">
          <h2 className="text-lg font-bold text-sakato-text mb-6 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <PieChart className="w-5 h-5 text-secondary" strokeWidth={1.75} />
            Performa per Jenis Bencana
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {disasters.map(disaster => {
              const completed = user.completedSimulations.find(s => s.disasterType === disaster.id);
              return (
                <div key={disaster.id} className="p-4 rounded-btn border border-sakato-border hover:border-secondary/30 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-btn flex items-center justify-center ${disasterBgColors[disaster.id]}`}>
                      {disasterIcons[disaster.id]}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sakato-text">{disaster.name}</h3>
                      <p className="text-xs text-sakato-text-muted">{completed ? `${completed.correctDecisions}/${completed.totalDecisions} keputusan benar` : 'Belum dicoba'}</p>
                    </div>
                    {completed && (
                      <div className={`text-lg font-bold ${completed.score >= 80 ? 'text-sakato-success' : completed.score >= 60 ? 'text-accent-600' : 'text-sakato-danger'}`}>
                        {completed.score}%
                      </div>
                    )}
                  </div>
                  {completed ? (
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${completed.score >= 80 ? 'bg-sakato-success' : completed.score >= 60 ? 'bg-accent' : 'bg-sakato-danger'}`}
                        style={{ width: `${completed.score}%` }}
                      />
                    </div>
                  ) : (
                    <Link
                      to={`/simulation/${disaster.id}`}
                      className="block text-center py-2 bg-secondary/10 text-secondary rounded-btn text-sm font-medium hover:bg-secondary/20 transition-colors"
                    >
                      Mulai Simulasi <ChevronRight className="w-4 h-4 inline" strokeWidth={1.75} />
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Recommendations */}
        {completedCount > 0 && (
          <div className="bg-primary rounded-card p-6 mb-8 text-white">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <Shield className="w-5 h-5 text-accent" strokeWidth={1.75} />
              Rekomendasi Peningkatan
            </h2>
            <div className="space-y-3">
              {accuracy < 60 && (
                <div className="flex items-start gap-3 p-3 bg-white/10 rounded-btn">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" strokeWidth={1.75} />
                  <span className="text-sm">Fokus pada pemahaman protokol dasar: Drop, Cover, Hold On untuk gempa</span>
                </div>
              )}
              {accuracy >= 60 && accuracy < 80 && (
                <div className="flex items-start gap-3 p-3 bg-white/10 rounded-btn">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" strokeWidth={1.75} />
                  <span className="text-sm">Tingkatkan kecepatan dan ketepatan pengambilan keputusan</span>
                </div>
              )}
              {accuracy >= 80 && (
                <div className="flex items-start gap-3 p-3 bg-white/10 rounded-btn">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" strokeWidth={1.75} />
                  <span className="text-sm">Kinerja sangat baik! Tetap pertahankan dan transfer pengetahuan ke teman-temanmu</span>
                </div>
              )}
              {user.completedSimulations.length < 4 && (
                <div className="flex items-start gap-3 p-3 bg-white/10 rounded-btn">
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" strokeWidth={1.75} />
                  <span className="text-sm">Selesaikan semua {4 - user.completedSimulations.length} simulasi tersisa untuk memahami berbagai jenis bencana</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* XP Progress */}
        <div className="card p-6">
          <h2 className="text-lg font-bold text-sakato-text mb-4 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <TrendingUp className="w-5 h-5 text-accent" strokeWidth={1.75} />
            Progress XP
          </h2>
          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <span className="text-sakato-text-muted">Level: {user.level.replace('_', ' ')}</span>
              <span className="font-medium text-sakato-text">{user.xp} XP</span>
            </div>
            <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  xpProgress.percentage >= 75 ? 'bg-sakato-success' : xpProgress.percentage >= 50 ? 'bg-accent' : 'bg-secondary'
                }`}
                style={{ width: `${xpProgress.percentage}%` }}
              />
            </div>
            <div className="text-xs text-sakato-text-muted mt-1 text-right">
              {xpProgress.required === Infinity ? 'Max Level!' : `${xpProgress.current} / ${xpProgress.required} XP ke level berikutnya`}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: 'primary' | 'secondary' | 'accent' | 'info' }) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/15 text-accent-600',
    info: 'bg-sakato-info/10 text-sakato-info',
  };

  return (
    <div className="card p-5">
      <div className={`w-12 h-12 rounded-btn flex items-center justify-center mb-3 ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{value}</div>
      <div className="text-sm text-sakato-text-muted">{label}</div>
    </div>
  );
}
