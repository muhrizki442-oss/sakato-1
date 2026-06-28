import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { disasters } from '../data/mockData';
import Logo from './Logo';
import {
  Activity, Waves, CloudRain, Flame, ArrowRight, ChevronRight,
  BookOpen, Menu, X, CheckCircle2, Target, Award, BarChart3,
  MessageSquare, GraduationCap, Mountain, Users, Sparkles,
  Compass, Brain, TrendingUp, Shield,
} from 'lucide-react';

const heroStats = [
  { value: '8+', label: 'Jenis Bencana' },
  { value: '100+', label: 'Skenario' },
  { value: 'Interactive', label: 'Learning' },
  { value: 'Scenario', label: 'Based' },
  { value: 'Gamification', label: 'System' },
];

const features = [
  { icon: Activity, title: 'Simulasi Interaktif', description: 'Rasakan pengambilan keputusan dalam situasi bencana nyata dengan skenario berbasis cerita yang realistis.' },
  { icon: BookOpen, title: 'Pembelajaran Berbasis Skenario', description: 'Setiap skenario dirancang berdasarkan protokol tanggap darurat resmi dari BMKG dan BNPB.' },
  { icon: Award, title: 'Gamifikasi', description: 'Kumpulkan badge, tingkatkan level, dan raih sertifikat sebagai bukti kesiapsiagaanmu.' },
  { icon: Brain, title: 'Pengambilan Keputusan', description: 'Latih kemampuan menganalisis situasi dan memilih tindakan terbaik di bawah tekanan.' },
  { icon: MessageSquare, title: 'Refleksi & Evaluasi', description: 'Tinjau setiap keputusan, pahami kesalahan, dan internalisasi pelajaran penting.' },
  { icon: TrendingUp, title: 'Pelacakan Progres', description: 'Pantau akurasi keputusan, skor, dan perkembangan belajarmu secara real-time.' },
];

const disasterIcons: Record<string, React.ReactNode> = {
  earthquake: <Activity className="w-6 h-6" />,
  tsunami: <Waves className="w-6 h-6" />,
  flood: <CloudRain className="w-6 h-6" />,
  fire: <Flame className="w-6 h-6" />,
};

const disasterColors: Record<string, string> = {
  earthquake: 'bg-amber-100 text-amber-700',
  tsunami: 'bg-cyan-100 text-cyan-700',
  flood: 'bg-blue-100 text-blue-700',
  fire: 'bg-red-100 text-red-700',
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

function HeroIllustration() {
  return (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full max-w-md mx-auto">
      {/* Background circle */}
      <circle cx="250" cy="250" r="200" fill="#168C8C" opacity="0.06" />
      <circle cx="250" cy="250" r="160" fill="#168C8C" opacity="0.04" />

      {/* Mountain range */}
      <path d="M80 320L160 180L200 240L260 140L340 220L420 320H80Z" fill="#0B2341" opacity="0.08" />
      <path d="M100 320L170 200L210 250L270 170L330 230L400 320H100Z" fill="#168C8C" opacity="0.12" />
      <path d="M120 320L180 220L220 270L280 190L320 240L380 320H120Z" fill="#168C8C" opacity="0.2" />

      {/* Mountain snow caps */}
      <path d="M170 200l-5 8 5 4 5-4-5-8z" fill="#E8B229" opacity="0.5" />
      <path d="M270 170l-5 8 5 4 5-4-5-8z" fill="#E8B229" opacity="0.5" />

      {/* School building */}
      <rect x="180" y="260" width="140" height="80" rx="4" fill="#0B2341" opacity="0.9" />
      <path d="M170 260L250 220L330 260H170Z" fill="#E8B229" />
      <rect x="200" y="290" width="20" height="50" rx="2" fill="#168C8C" opacity="0.6" />
      <rect x="232" y="290" width="20" height="50" rx="2" fill="#168C8C" opacity="0.6" />
      <rect x="264" y="290" width="20" height="50" rx="2" fill="#168C8C" opacity="0.6" />
      <rect x="240" y="300" width="20" height="40" rx="2" fill="#E8B229" opacity="0.4" />
      {/* Flag on school */}
      <line x1="250" y1="220" x2="250" y2="195" stroke="#0B2341" strokeWidth="2" />
      <path d="M250 195L268 200L250 205V195Z" fill="#E8B229" />

      {/* Student 1 */}
      <circle cx="150" cy="340" r="12" fill="#0B2341" opacity="0.7" />
      <rect x="138" y="352" width="24" height="40" rx="8" fill="#168C8C" />
      <rect x="138" y="392" width="10" height="20" rx="3" fill="#0B2341" opacity="0.6" />
      <rect x="152" y="392" width="10" height="20" rx="3" fill="#0B2341" opacity="0.6" />
      {/* Backpack */}
      <rect x="130" y="356" width="10" height="24" rx="4" fill="#E8B229" opacity="0.7" />

      {/* Student 2 */}
      <circle cx="350" cy="340" r="12" fill="#0B2341" opacity="0.7" />
      <rect x="338" y="352" width="24" height="40" rx="8" fill="#E8B229" />
      <rect x="338" y="392" width="10" height="20" rx="3" fill="#0B2341" opacity="0.6" />
      <rect x="352" y="392" width="10" height="20" rx="3" fill="#0B2341" opacity="0.6" />
      {/* Book */}
      <rect x="362" y="360" width="14" height="18" rx="2" fill="#168C8C" opacity="0.7" />

      {/* Teacher */}
      <circle cx="250" cy="335" r="14" fill="#0B2341" opacity="0.8" />
      <rect x="236" y="349" width="28" height="44" rx="8" fill="#0B2341" />
      <rect x="236" y="393" width="12" height="22" rx="3" fill="#0B2341" opacity="0.7" />
      <rect x="252" y="393" width="12" height="22" rx="3" fill="#0B2341" opacity="0.7" />
      {/* Pointer */}
      <line x1="264" y1="365" x2="285" y2="355" stroke="#E8B229" strokeWidth="2" strokeLinecap="round" />

      {/* Ground */}
      <rect x="60" y="412" width="380" height="4" rx="2" fill="#0B2341" opacity="0.1" />

      {/* Shield floating */}
      <g className="animate-float">
        <path d="M380 120L360 128v16c0 10 8 18 20 22 12-4 20-12 20-22V128L380 120z" fill="#0B2341" opacity="0.9" />
        <path d="M380 128L368 134v10c0 6 5 11 12 13 7-2 12-7 12-13V134L380 128z" fill="#168C8C" opacity="0.5" />
        <path d="M380 134L372 140h4l4-3 4 3h4L380 134z" fill="#E8B229" />
      </g>

      {/* Wave decoration */}
      <path d="M60 440c20-10 40-10 60 0s40 10 60 0 40-10 60 0 40 10 60 0 40-10 60 0 40 10 60 0" stroke="#168C8C" strokeWidth="3" strokeLinecap="round" opacity="0.3" fill="none" />
      <path d="M60 460c20-10 40-10 60 0s40 10 60 0 40-10 60 0 40 10 60 0 40-10 60 0 40 10 60 0" stroke="#168C8C" strokeWidth="2" strokeLinecap="round" opacity="0.15" fill="none" />

      {/* Sparkles */}
      <circle cx="100" cy="100" r="3" fill="#E8B229" opacity="0.5" />
      <circle cx="420" cy="80" r="4" fill="#E8B229" opacity="0.4" />
      <circle cx="80" cy="200" r="2" fill="#168C8C" opacity="0.4" />
      <circle cx="440" cy="200" r="3" fill="#168C8C" opacity="0.3" />
    </svg>
  );
}

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-lg border-b border-sakato-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center" aria-label="SAKATO Home">
              <Logo height={48} />
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sakato-text-muted hover:text-primary transition-colors font-medium text-sm">Fitur</a>
              <a href="#disasters" className="text-sakato-text-muted hover:text-primary transition-colors font-medium text-sm">Bencana</a>
              <a href="#about" className="text-sakato-text-muted hover:text-primary transition-colors font-medium text-sm">Tentang</a>
              <Link to="/leaderboard" className="text-sakato-text-muted hover:text-primary transition-colors font-medium text-sm">Leaderboard</Link>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              <Link to="/dashboard" className="px-4 py-2 text-sakato-text-muted hover:text-primary transition-colors font-medium text-sm">Masuk</Link>
              <Link to="/disasters" className="btn-primary text-sm">
                Mulai Belajar
              </Link>
            </div>

            <button className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Menu">
              {mobileMenuOpen ? <X className="w-6 h-6 text-sakato-text" /> : <Menu className="w-6 h-6 text-sakato-text" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-sakato-border">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-sakato-text-muted hover:text-primary font-medium py-2">Fitur</a>
              <a href="#disasters" className="block text-sakato-text-muted hover:text-primary font-medium py-2">Bencana</a>
              <a href="#about" className="block text-sakato-text-muted hover:text-primary font-medium py-2">Tentang</a>
              <Link to="/leaderboard" className="block text-sakato-text-muted hover:text-primary font-medium py-2">Leaderboard</Link>
              <div className="pt-3 border-t border-sakato-border space-y-3">
                <Link to="/dashboard" className="block w-full text-center px-4 py-2.5 text-sakato-text-muted font-medium">Masuk</Link>
                <Link to="/disasters" className="block w-full text-center btn-primary">Mulai Belajar</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
                <Sparkles className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Platform Pembelajaran Simulasi Kebencanaan</span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-primary mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                SAKATO
              </h1>

              <p className="text-lg text-sakato-text-muted max-w-xl mb-8 leading-relaxed text-balance">
                Platform Pembelajaran Simulasi Kebencanaan Interaktif untuk Membangun Generasi yang Tangguh Menghadapi Berbagai Jenis Bencana.
              </p>

              <p className="text-xl font-semibold text-secondary mb-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Belajar Hari Ini, Selamat Esok.
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link to="/disasters" className="btn-primary group w-full sm:w-auto">
                  Mulai Simulasi
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#features" className="btn-secondary group w-full sm:w-auto">
                  Pelajari Lebih Lanjut
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right: Illustration */}
            <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <HeroIllustration />
            </div>
          </div>

          {/* Hero Stats */}
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-5 gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {heroStats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-card border border-sakato-border shadow-soft">
                <div className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>{stat.value}</div>
                <div className="text-sm text-sakato-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge bg-primary/10 text-primary mb-4">Fitur Unggulan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Belajar Mitigasi Bencana Seperti Belum Pernah Sebelumnya
            </h2>
            <p className="text-lg text-sakato-text-muted max-w-2xl mx-auto">
              Platform interaktif yang menggabungkan pembelajaran berbasis simulasi dengan elemen gamifikasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-sakato-bg rounded-card border border-sakato-border hover:border-secondary/30 hover:shadow-soft-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary rounded-btn flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-bold text-sakato-text mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>{feature.title}</h3>
                <p className="text-sakato-text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disaster Cards Section */}
      <section id="disasters" className="py-20 bg-sakato-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge bg-secondary/10 text-secondary mb-4">Pilih Jenis Bencana</span>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Empat Jenis Bencana, Satu Tujuan
            </h2>
            <p className="text-lg text-sakato-text-muted max-w-2xl mx-auto">
              Pilih jenis bencana yang ingin kamu pelajari dan mulai simulasi interaktif.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {disasters.map((disaster) => (
              <Link
                key={disaster.id}
                to={`/simulation/${disaster.id}`}
                className="group overflow-hidden bg-white rounded-card border border-sakato-border hover:border-secondary/30 hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img src={disaster.image} alt={disaster.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-btn flex items-center justify-center shadow-soft ${disasterColors[disaster.id]}`}>
                    {disasterIcons[disaster.id]}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{disaster.name}</h3>
                    <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${difficultyColors[disaster.difficulty]}`}>
                      {difficultyLabels[disaster.difficulty]}
                    </span>
                  </div>
                  <p className="text-sakato-text-muted text-sm mb-4 line-clamp-2">{disaster.description}</p>
                  <div className="flex items-center justify-between text-sm text-sakato-text-muted">
                    <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" strokeWidth={1.75} />{disaster.estimatedTime} min</span>
                    <span className="flex items-center gap-1.5 text-secondary font-medium">Mulai <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About / Philosophy Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-btn mb-6">
            <Compass className="w-8 h-8 text-accent" strokeWidth={1.75} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
            "Alam Takambang Jadi Guru"
          </h2>
          <p className="text-lg text-sakato-text-muted leading-relaxed mb-4">
            SAKATO terinspirasi dari filosofi Minangkabau "Saiyo Sakato" yang berarti bersama-sama, bermusyawarah, dan saling bertanggung jawab.
          </p>
          <p className="text-lg text-sakato-text-muted leading-relaxed mb-8">
            Filosofi ini sempurna mewakili kesiapsiagaan bencana, karena bertahan hidup dari bencana membutuhkan kerja sama, kesadaran, pendidikan, dan aksi kolektif.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-sakato-text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" strokeWidth={1.75} />
              <span>Gratis untuk Siswa</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" strokeWidth={1.75} />
              <span>Berbasis Skenario Nyata</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-secondary" strokeWidth={1.75} />
              <span>Sertifikat Resmi</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sakato-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-dialog p-10 md:p-16 text-center text-white relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
            <div className="relative">
              <Shield className="w-12 h-12 text-accent mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Siapkah Kamu Menghadapi Bencana?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">Karena keselamatan dimulai dari pengetahuan. Mulai pelajari mitigasi bencana hari ini.</p>
              <Link to="/disasters" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-primary rounded-btn font-bold text-lg hover:bg-accent-300 transition-colors shadow-soft-lg">
                Mulai Sekarang <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <Logo light height={48} />
              <p className="text-sm text-white/70 mt-4 leading-relaxed max-w-sm">
                Platform Pembelajaran Simulasi Kebencanaan Interaktif untuk Membangun Generasi Tangguh.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-lg border border-white/10">
                <span className="text-xs text-accent font-medium italic">"Alam Takambang Jadi Guru"</span>
              </div>
              <p className="text-xs text-white/50 mt-2">Inspired by the Minangkabau philosophy</p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Navigasi</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-sm text-white/60 hover:text-accent transition-colors">Tentang</Link></li>
                <li><Link to="/disasters" className="text-sm text-white/60 hover:text-accent transition-colors">Simulasi</Link></li>
                <li><Link to="/dashboard" className="text-sm text-white/60 hover:text-accent transition-colors">Pembelajaran</Link></li>
                <li><Link to="/leaderboard" className="text-sm text-white/60 hover:text-accent transition-colors">Leaderboard</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Sumber Belajar</h4>
              <ul className="space-y-3">
                <li><Link to="/disasters" className="text-sm text-white/60 hover:text-accent transition-colors">Simulasi Gempa Bumi</Link></li>
                <li><Link to="/disasters" className="text-sm text-white/60 hover:text-accent transition-colors">Simulasi Tsunami</Link></li>
                <li><Link to="/disasters" className="text-sm text-white/60 hover:text-accent transition-colors">Simulasi Banjir</Link></li>
                <li><Link to="/disasters" className="text-sm text-white/60 hover:text-accent transition-colors">Simulasi Kebakaran</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50">&copy; 2024 SAKATO. Belajar Hari Ini, Selamat Esok.</p>
            <p className="text-sm text-white/50">Educational Disaster Simulation Platform</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
