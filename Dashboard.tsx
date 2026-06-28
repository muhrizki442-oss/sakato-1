import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { disasters, levelNames } from '../data/mockData';
import Logo from './Logo';
import {
  Activity, Waves, CloudRain, Flame, Trophy, Star,
  BookOpen, Award, ChevronRight, Settings, Zap, Target, Clock,
  BarChart3, TrendingUp, Shield, Sparkles,
} from 'lucide-react';

const disasterIcons: Record<string, React.ReactNode> = {
  earthquake: <Activity className="w-5 h-5" strokeWidth={1.75} />,
  tsunami: <Waves className="w-5 h-5" strokeWidth={1.75} />,
  flood: <CloudRain className="w-5 h-5" strokeWidth={1.75} />,
  fire: <Flame className="w-5 h-5" strokeWidth={1.75} />,
};

const difficultyLabels: Record<string, string> = {
  beginner: 'Pemula',
  intermediate: 'Menengah',
  advanced: 'Mahir',
};

const difficultyColors: Record<string, string> = {
  beginner: 'bg-sakato-success/10 text-sakato-success',
  intermediate: 'bg-accent/15 text-accent-600',
  advanced: 'bg-sakato-danger/10 text-sakato-danger',
};

export default function Dashboard() {
  const { user, getXPProgress } = useApp();
  const xpProgress = getXPProgress();

  const completedCount = user.completedSimulations.length;
  const totalSimulations = disasters.length;
  const totalCorrect = user.completedSimulations.reduce((sum, s) => sum + s.correctDecisions, 0);
  const totalDecisions = user.completedSimulations.reduce((sum, s) => sum + s.totalDecisions, 0);
  const accuracy = totalDecisions > 0 ? Math.round((totalCorrect / totalDecisions) * 100) : 0;
  const avgScore = completedCount > 0 ? Math.round(user.completedSimulations.reduce((sum, s) => sum + s.score, 0) / completedCount) : 0;

  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Header */}
      <header className="bg-white border-b border-sakato-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <Logo height={48} />
            </Link>
            <div className="flex items-center gap-2">
              <Link to="/leaderboard" className="p-2.5 hover:bg-slate-100 rounded-btn transition-colors" aria-label="Leaderboard">
                <Trophy className="w-5 h-5 text-accent" strokeWidth={1.75} />
              </Link>
              <Link to="/settings" className="p-2.5 hover:bg-slate-100 rounded-btn transition-colors" aria-label="Pengaturan">
                <Settings className="w-5 h-5 text-sakato-text-muted" strokeWidth={1.75} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Selamat Datang, {user.name.split(' ')[0]}!
          </h1>
          <p className="text-sakato-text-muted">Lanjutkan perjalanan belajarmu dan jadi ahli mitigasi bencana.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Profile Card */}
          <div className="lg:col-span-1 bg-primary rounded-card p-6 text-white relative overflow-hidden">
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/5 rounded-full" />
            <div className="absolute -bottom-20 -left-10 w-40 h-40 bg-secondary/10 rounded-full" />

            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-btn object-cover border-2 border-white/20" />
                <div>
                  <h2 className="text-lg font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{user.name}</h2>
                  <p className="text-white/60 text-sm">{user.school}</p>
                  <span className="inline-block px-2.5 py-0.5 bg-white/10 rounded-lg text-xs mt-1.5 font-medium">{user.educationLevel}</span>
                </div>
              </div>

              {/* Level Badge */}
              <div className="bg-white/10 rounded-btn p-5 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent rounded-btn flex items-center justify-center">
                      <Trophy className="w-4 h-4 text-primary" strokeWidth={1.75} />
                    </div>
                    <span className="font-semibold">{levelNames[user.level]}</span>
                  </div>
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full font-medium">
                    Level {user.level === 'beginner' ? 1 : user.level === 'explorer' ? 2 : user.level === 'survivor' ? 3 : 4}
                  </span>
                </div>

                {/* XP Progress */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/60">Progres XP</span>
                    <span className="font-semibold">{user.xp.toLocaleString()} XP</span>
                  </div>
                  <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-700"
                      style={{ width: `${xpProgress.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-white/50 mt-2">
                    {xpProgress.required === Infinity ? 'Level Maksimal!' : `${xpProgress.current} / ${xpProgress.required} XP`}
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                <Link to="/disasters" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 rounded-btn p-3 transition-colors font-medium text-sm">
                  <BookOpen className="w-4 h-4" strokeWidth={1.75} /> Simulasi
                </Link>
                <Link to="/analytics" className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 rounded-btn p-3 transition-colors font-medium text-sm">
                  <BarChart3 className="w-4 h-4" strokeWidth={1.75} /> Analitik
                </Link>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            <StatCard icon={<Target className="w-6 h-6" strokeWidth={1.75} />} label="Akurasi Keputusan" value={`${accuracy}%`} color="secondary" link="/analytics" />
            <StatCard icon={<Zap className="w-6 h-6" strokeWidth={1.75} />} label="Total XP" value={user.xp.toLocaleString()} color="accent" />
            <StatCard icon={<Award className="w-6 h-6" strokeWidth={1.75} />} label="Badge Diperoleh" value={`${user.badges.length}`} color="primary" />
            <StatCard icon={<Clock className="w-6 h-6" strokeWidth={1.75} />} label="Simulasi Selesai" value={`${completedCount}/${totalSimulations}`} color="info" />
          </div>
        </div>

        {/* Badges Section */}
        {user.badges.length > 0 && (
          <div className="card p-6 mb-6">
            <h3 className="text-lg font-bold text-primary mb-5 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              <Award className="w-5 h-5 text-accent" strokeWidth={1.75} /> Badge Terkumpul
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {user.badges.map((badge) => (
                <div key={badge.id} className="flex items-center gap-3 p-4 bg-sakato-bg rounded-btn border border-sakato-border">
                  <div className="w-10 h-10 bg-primary rounded-btn flex items-center justify-center text-white">
                    {disasterIcons[badge.disasterType] || <Award className="w-5 h-5" strokeWidth={1.75} />}
                  </div>
                  <div>
                    <div className="font-semibold text-sakato-text text-sm">{badge.name}</div>
                    <div className="text-xs text-sakato-text-muted">{badge.earnedAt ? new Date(badge.earnedAt).toLocaleDateString('id-ID') : '-'}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Simulations Progress */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>Simulasi Tersedia</h3>
            <Link to="/disasters" className="text-secondary hover:text-secondary-600 text-sm font-medium flex items-center gap-1 transition-all hover:gap-2">
              Lihat Semua <ChevronRight className="w-4 h-4" strokeWidth={1.75} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {disasters.map((disaster) => {
              const completed = user.completedSimulations.find(s => s.disasterType === disaster.id);
              const isCompleted = !!completed;

              return (
                <Link
                  key={disaster.id}
                  to={`/simulation/${disaster.id}`}
                  className="group flex items-center gap-4 p-4 rounded-btn border border-sakato-border hover:border-secondary/30 hover:bg-sakato-bg transition-all"
                >
                  <div className="relative w-20 h-20 rounded-btn overflow-hidden flex-shrink-0">
                    <img src={disaster.image} alt={disaster.name} className="w-full h-full object-cover" />
                    {isCompleted && (
                      <div className="absolute inset-0 bg-secondary/80 flex items-center justify-center">
                        <Trophy className="w-8 h-8 text-white" strokeWidth={1.75} />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-sakato-text">{disaster.name}</h4>
                      <span className={`px-2 py-0.5 text-xs font-medium rounded-full ${difficultyColors[disaster.difficulty]}`}>
                        {difficultyLabels[disaster.difficulty]}
                      </span>
                    </div>
                    <p className="text-sm text-sakato-text-muted line-clamp-1 mb-2">{disaster.description}</p>
                    <div className="flex items-center gap-4 text-xs text-sakato-text-muted">
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" strokeWidth={1.75} />{disaster.estimatedTime} min</span>
                      {isCompleted && (
                        <span className="flex items-center gap-1 text-secondary font-medium">
                          <Star className="w-3 h-3 fill-current" /> Skor: {completed.score}%
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-secondary transition-colors" strokeWidth={1.75} />
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}

function StatCard({ icon, label, value, color, link }: { icon: React.ReactNode; label: string; value: string; color: 'primary' | 'secondary' | 'accent' | 'info'; link?: string }) {
  const colorClasses = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    accent: 'bg-accent/15 text-accent-600',
    info: 'bg-sakato-info/10 text-sakato-info',
  };

  const content = (
    <div className="card p-5 hover:shadow-soft-md transition-shadow h-full">
      <div className={`w-12 h-12 rounded-btn flex items-center justify-center mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <div className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{value}</div>
      <div className="text-sm text-sakato-text-muted">{label}</div>
    </div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }
  return content;
}
