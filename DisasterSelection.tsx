import { Link } from 'react-router-dom';
import { disasters } from '../data/mockData';
import { useApp } from '../context/AppContext';
import Logo from './Logo';
import {
  Activity, Waves, CloudRain, Flame, ArrowLeft, BookOpen,
  Clock, Trophy, Star, ChevronRight, Shield,
} from 'lucide-react';

const disasterIcons: Record<string, React.ReactNode> = {
  earthquake: <Activity className="w-8 h-8" strokeWidth={1.75} />,
  tsunami: <Waves className="w-8 h-8" strokeWidth={1.75} />,
  flood: <CloudRain className="w-8 h-8" strokeWidth={1.75} />,
  fire: <Flame className="w-8 h-8" strokeWidth={1.75} />,
};

const difficultyLabels: Record<string, string> = {
  beginner: 'Pemula',
  intermediate: 'Menengah',
  advanced: 'Mahir',
};

const difficultyColors: Record<string, string> = {
  beginner: 'bg-sakato-success/10 text-sakato-success border-sakato-success/20',
  intermediate: 'bg-accent/15 text-accent-600 border-accent/20',
  advanced: 'bg-sakato-danger/10 text-sakato-danger border-sakato-danger/20',
};

const gradientColors: Record<string, string> = {
  earthquake: 'from-amber-500 to-orange-600',
  tsunami: 'from-cyan-500 to-blue-600',
  flood: 'from-blue-500 to-indigo-600',
  fire: 'from-red-500 to-orange-500',
};

export default function DisasterSelection() {
  const { user } = useApp();

  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Header */}
      <header className="bg-white border-b border-sakato-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/dashboard" className="p-2 hover:bg-slate-100 rounded-btn transition-colors" aria-label="Kembali">
                <ArrowLeft className="w-5 h-5 text-sakato-text-muted" strokeWidth={1.75} />
              </Link>
              <div>
                <h1 className="text-lg font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>Pilih Simulasi</h1>
                <p className="text-sm text-sakato-text-muted">Pilih jenis bencana untuk memulai</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/" className="hidden sm:block">
                <Logo height={38} />
              </Link>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-btn">
                <Star className="w-4 h-4 text-accent" strokeWidth={1.75} />
                <span className="text-sm font-medium text-accent-600">{user.xp} XP</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Introduction */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-btn mb-6">
            <Shield className="w-8 h-8 text-accent" strokeWidth={1.75} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Siap Menjadi Ahli Mitigasi?
          </h2>
          <p className="text-lg text-sakato-text-muted max-w-2xl mx-auto">
            Pilih jenis bencana yang ingin kamu pelajari. Setiap simulasi memiliki skenario interaktif dengan tingkat kesulitan berbeda.
          </p>
        </div>

        {/* Disaster Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {disasters.map((disaster) => {
            const completed = user.completedSimulations.find(s => s.disasterType === disaster.id);
            const isCompleted = !!completed;

            return (
              <Link
                key={disaster.id}
                to={`/simulation/${disaster.id}`}
                className="group overflow-hidden bg-white rounded-card border border-sakato-border hover:border-secondary/30 hover:shadow-soft-lg transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={disaster.image}
                    alt={disaster.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${gradientColors[disaster.id]} opacity-50`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur rounded-btn flex items-center justify-center text-primary shadow-soft">
                    {disasterIcons[disaster.id]}
                  </div>

                  {/* Completion Badge */}
                  {isCompleted && (
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-2 bg-secondary text-white rounded-btn shadow-soft">
                      <Trophy className="w-4 h-4" strokeWidth={1.75} />
                      <span className="text-sm font-semibold">{completed.score}%</span>
                    </div>
                  )}

                  {/* Title */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{disaster.name}</h3>
                    <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-full border ${difficultyColors[disaster.difficulty]}`}>
                      {difficultyLabels[disaster.difficulty]}
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <p className="text-sakato-text-muted mb-5 line-clamp-2">{disaster.description}</p>

                  {/* Stats Row */}
                  <div className="flex items-center gap-6 mb-5 pb-5 border-b border-sakato-border">
                    <div className="flex items-center gap-2 text-sakato-text-muted">
                      <BookOpen className="w-5 h-5" strokeWidth={1.75} />
                      <span className="font-medium text-sm">{disaster.estimatedTime} Menit</span>
                    </div>
                    <div className="flex items-center gap-2 text-sakato-text-muted">
                      <Clock className="w-5 h-5" strokeWidth={1.75} />
                      <span className="font-medium text-sm">{disaster.statistics.eventsPerYear.toLocaleString()} Kejadian/Tahun</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-btn font-bold transition-all ${
                    isCompleted
                      ? 'bg-secondary/10 text-secondary'
                      : 'bg-primary text-white group-hover:bg-primary-700'
                  }`}>
                    {isCompleted ? (
                      <>
                        <Trophy className="w-5 h-5" strokeWidth={1.75} />
                        Main Lagi
                      </>
                    ) : (
                      <>
                        Mulai Simulasi
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={1.75} />
                      </>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Tips Section */}
        <div className="mt-12 bg-primary rounded-card p-8 text-white relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/5 rounded-full" />
          <h3 className="text-xl font-bold mb-6 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>Tips Sebelum Memulai</h3>
          <div className="grid md:grid-cols-3 gap-6 relative">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent text-primary rounded-btn flex items-center justify-center flex-shrink-0 font-bold text-sm">1</div>
              <div>
                <div className="font-semibold mb-1">Baca dengan Teliti</div>
                <div className="text-sm text-white/60">Setiap skenario memiliki detail penting untuk keputusanmu.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent text-primary rounded-btn flex items-center justify-center flex-shrink-0 font-bold text-sm">2</div>
              <div>
                <div className="font-semibold mb-1">Pikirkan Konsekuensi</div>
                <div className="text-sm text-white/60">Setiap pilihan memiliki hasil yang berbeda.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-accent text-primary rounded-btn flex items-center justify-center flex-shrink-0 font-bold text-sm">3</div>
              <div>
                <div className="font-semibold mb-1">Belajar dari Kesalahan</div>
                <div className="text-sm text-white/60">Ulangi simulasi untuk hasil lebih baik.</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
