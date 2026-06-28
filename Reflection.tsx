import { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { disasters } from '../data/mockData';
import Logo from './Logo';
import {
  Activity, Waves, CloudRain, Flame, Trophy, Star, Target, CheckCircle,
  XCircle, Lightbulb, ArrowRight, Award, Download, Home, RotateCcw,
  TrendingUp, Clock, BookOpen, Heart, Shield, Sparkles, ChevronRight, Zap
} from 'lucide-react';

const disasterIcons: Record<string, React.ReactNode> = {
  earthquake: <Activity className="w-6 h-6" strokeWidth={1.75} />,
  tsunami: <Waves className="w-6 h-6" strokeWidth={1.75} />,
  flood: <CloudRain className="w-6 h-6" strokeWidth={1.75} />,
  fire: <Flame className="w-6 h-6" strokeWidth={1.75} />
};

const disasterNames: Record<string, string> = {
  earthquake: 'Gempa Bumi',
  tsunami: 'Tsunami',
  flood: 'Banjir',
  fire: 'Kebakaran'
};

const gradientColors: Record<string, string> = {
  earthquake: 'from-amber-500 to-orange-600',
  tsunami: 'from-cyan-500 to-blue-600',
  flood: 'from-blue-500 to-indigo-600',
  fire: 'from-red-500 to-orange-500'
};

const improvementTips: Record<string, string[]> = {
  earthquake: [
    'Selalu ingat: Drop, Cover, Hold On saat guncangan berlangsung',
    'Jangan berlari ke luar gedung saat guncangan — risiko tertimpa lebih tinggi',
    'Waspada aftershock: tetap waspada hingga 24-48 jam pasca-gempa',
    'Kenali jalur evakuasi di sekolah dan tempat kerja'
  ],
  tsunami: [
    'Air laut surut drastis = TANDA TSUNAMI — lari ke tempat tinggi SEGERA!',
    'Minimum 20 meter elevasi atau 2 km dari garis pantai',
    'Tsunami bisa beruntun — jangan turun sebelum all-clear',
    'Sampaikan peringatan ke orang lain — setiap detik berharga'
  ],
  flood: [
    'Matikan listrik dari MCB SEBELUM bergerak di air banjir',
    'Jangan berjalan di air banjir tanpa sepatu boot — risiko leptospirosis',
    'Arus banjir bisa sangat kuat — jangan melawan, cari tempat tinggi',
    'Waspada kontaminasi: air banjir mengandung bakteri dan kotoran'
  ],
  fire: [
    'Minyak + Air = LEDAKAN! Gunakan penutup atau baking soda untuk api minyak',
    'Ingat PASS: Pull, Aim, Squeeze, Sweep untuk APAR',
    'Merunduk saat evakuasi (low and go) — asap naik ke atas',
    'Stop, Drop, Roll jika pakaianmu terbakar'
  ]
};

export default function Reflection() {
  const { disasterType } = useParams<{ disasterType: string }>();
  const navigate = useNavigate();
  const { user, completeSimulation, addBadge } = useApp();
  const [result, setResult] = useState<any>(null);
  const [showCertificate, setShowCertificate] = useState(false);
  const [animateResults, setAnimateResults] = useState(false);
  const [confidence, setConfidence] = useState(3);
  const [mainTakeaway, setMainTakeaway] = useState('');
  const [application, setApplication] = useState('');
  const [submittedReflection, setSubmittedReflection] = useState(false);

  useEffect(() => {
    if (disasterType) {
      try {
        const completed = completeSimulation();
        setResult(completed);

        if (completed.score >= 80) {
          addBadge(disasterType as any);
        }

        setTimeout(() => setAnimateResults(true), 500);
      } catch (error) {
        navigate('/disasters');
      }
    }
  }, [disasterType, completeSimulation, addBadge, navigate]);

  if (!result || !disasterType) return null;

  const disaster = disasters.find(d => d.id === disasterType);
  const isPassed = result.score >= 80;
  const tips = improvementTips[disasterType] || [];

  const handleDownloadCertificate = () => {
    alert('Sertifikat akan diunduh sebagai PDF');
  };

  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Header */}
      <header className="bg-white border-b border-sakato-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <Link to="/dashboard" className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-to-br ${gradientColors[disasterType]} rounded-btn flex items-center justify-center text-white`}>
                {disasterIcons[disasterType]}
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>Hasil Simulasi</h1>
                <p className="text-xs text-sakato-text-muted">{disasterNames[disasterType]}</p>
              </div>
            </Link>
            <Link to="/" className="p-2 hover:bg-slate-100 rounded-btn transition-colors">
              <Home className="w-5 h-5 text-sakato-text-muted" strokeWidth={1.75} />
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Result Card */}
        <div className={`bg-white rounded-card shadow-soft-lg border-2 overflow-hidden mb-8 ${isPassed ? 'border-sakato-success/30' : 'border-sakato-border'}`}>
          {/* Header with Score */}
          <div className={`relative p-8 text-center text-white ${isPassed ? `bg-gradient-to-br ${gradientColors[disasterType]}` : 'bg-gradient-to-br from-slate-600 to-slate-700'}`}>
            {isPassed && (
              <div className="absolute top-4 right-4 animate-bounce">
                <Trophy className="w-12 h-12 text-accent" strokeWidth={1.75} />
              </div>
            )}

            <div className={`transform transition-all duration-1000 ${animateResults ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${isPassed ? 'bg-white/20' : 'bg-slate-500'}`}>
                {isPassed ? (
                  <>
                    <CheckCircle className="w-5 h-5" strokeWidth={1.75} />
                    <span className="font-semibold">Simulasi Berhasil!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5" strokeWidth={1.75} />
                    <span className="font-semibold">Belum Berhasil</span>
                  </>
                )}
              </div>

              {/* Score Circle */}
              <div className="relative inline-block mb-4">
                <svg className="w-40 h-40 transform -rotate-90">
                  <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="8" className="text-white/30" />
                  <circle cx="80" cy="80" r="70" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray={`${result.score * 4.4} 440`} className="text-white" strokeLinecap="round" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>{result.score}%</span>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>{isPassed ? 'Kamu Berhasil Lolos!' : 'Ayo Coba Lagi!'}</h2>
              <p className="text-white/90 max-w-md mx-auto">
                {isPassed ? 'Kamu telah mendemonstrasikan pemahaman yang baik tentang mitigasi bencana.' : 'Jangan menyerah! Review materi mitigasi dan coba simulasi lagi.'}
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="p-6 sm:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center p-4 bg-sakato-bg rounded-btn">
                <Target className="w-4 h-4 text-sakato-success mx-auto mb-1" strokeWidth={1.75} />
                <div className="text-3xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{result.correctDecisions}</div>
                <div className="text-sm text-sakato-text-muted">Keputusan Tepat</div>
              </div>
              <div className="text-center p-4 bg-sakato-bg rounded-btn">
                <XCircle className="w-4 h-4 text-sakato-warning mx-auto mb-1" strokeWidth={1.75} />
                <div className="text-3xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{result.totalDecisions - result.correctDecisions}</div>
                <div className="text-sm text-sakato-text-muted">Perlu Perbaikan</div>
              </div>
              <div className="text-center p-4 bg-sakato-bg rounded-btn">
                <Zap className="w-4 h-4 text-accent mx-auto mb-1" strokeWidth={1.75} />
                <div className="text-3xl font-bold text-sakato-success" style={{ fontFamily: 'Poppins, sans-serif' }}>+{result.score * 50}</div>
                <div className="text-sm text-sakato-text-muted">XP Diperoleh</div>
              </div>
              <div className="text-center p-4 bg-sakato-bg rounded-btn">
                <BookOpen className="w-4 h-4 text-sakato-info mx-auto mb-1" strokeWidth={1.75} />
                <div className="text-3xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{result.totalDecisions}</div>
                <div className="text-sm text-sakato-text-muted">Total Skenario</div>
              </div>
            </div>

            {/* Badge Unlocked */}
            {isPassed && (
              <div className="mb-8 p-6 bg-accent/5 rounded-card border border-accent/20">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradientColors[disasterType]} rounded-btn flex items-center justify-center text-white shadow-soft`}>
                    <Award className="w-8 h-8" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-accent-600 font-semibold mb-1 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" strokeWidth={1.75} />
                      Badge Diperoleh!
                    </div>
                    <div className="text-xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{disasterNames[disasterType]} Hero</div>
                  </div>
                </div>
              </div>
            )}

            {/* Learning Tips */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-sakato-text mb-4 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <Lightbulb className="w-5 h-5 text-accent" strokeWidth={1.75} />
                Tips Mitigasi {disasterNames[disasterType]}
              </h3>
              <div className="space-y-3">
                {tips.map((tip, index) => (
                  <div key={index} className={`flex items-start gap-3 p-4 rounded-btn ${
                    index < result.correctDecisions
                      ? 'bg-sakato-success/5 border border-sakato-success/20'
                      : 'bg-sakato-warning/5 border border-sakato-warning/20'
                  }`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 ${
                      index < result.correctDecisions ? 'bg-sakato-success' : 'bg-sakato-warning'
                    }`}>
                      {index < result.correctDecisions ? <CheckCircle className="w-4 h-4" strokeWidth={1.75} /> : index + 1}
                    </div>
                    <p className="text-sakato-text">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Self-Assessment Section */}
            {!submittedReflection && (
              <div className="mb-8 bg-secondary/5 rounded-card p-6 border border-secondary/20">
                <h3 className="text-lg font-bold text-sakato-text mb-2 flex items-center gap-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  <BookOpen className="w-5 h-5 text-secondary" strokeWidth={1.75} />
                  Refleksi Pembelajaran
                </h3>
                <p className="text-sakato-text-muted mb-4">Lengkapi refleksi singkat untuk menguatkan pemahamanmu.</p>

                {/* Confidence Rating */}
                <div className="mb-6">
                  <label className="block font-medium text-sakato-text mb-3">Seberapa percaya dirimu menghadapi situasi serupa?</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map(num => (
                      <button key={num} onClick={() => setConfidence(num)} className={`w-12 h-12 rounded-btn font-bold transition-all ${confidence >= num ? 'bg-secondary text-white' : 'bg-slate-200 text-sakato-text-muted hover:bg-slate-300'}`}>
                        {num}
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-sakato-text-muted">
                      {confidence <= 2 ? 'Belum yakin' : confidence <= 3 ? 'Cukup yakin' : confidence <= 4 ? 'Percaya diri' : 'Sangat percaya diri'}
                    </span>
                  </div>
                </div>

                {/* Main Takeaway */}
                <div className="mb-6">
                  <label className="block font-medium text-sakato-text mb-2">Satu hal paling penting yang kamu pelajari?</label>
                  <input type="text" value={mainTakeaway} onChange={e => setMainTakeaway(e.target.value)} placeholder="Contoh: Pentingnya menjauhi jendela saat gempa..." className="input-field" />
                </div>

                {/* Practical Application */}
                <div className="mb-6">
                  <label className="block font-medium text-sakato-text mb-2">Bagaimana kamu akan menerapkan ini di kehidupan nyata?</label>
                  <input type="text" value={application} onChange={e => setApplication(e.target.value)} placeholder="Contoh: Akan membuat jalur evakuasi di rumah..." className="input-field" />
                </div>

                <button onClick={() => setSubmittedReflection(true)} disabled={!mainTakeaway || !application} className="w-full py-3 bg-secondary text-white rounded-btn font-semibold hover:bg-secondary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
                  Kirim Refleksi
                </button>
              </div>
            )}

            {submittedReflection && (
              <div className="mb-8 p-4 bg-sakato-success/5 rounded-btn border border-sakato-success/20">
                <div className="flex items-center gap-2 text-sakato-success">
                  <CheckCircle className="w-5 h-5" strokeWidth={1.75} />
                  <span className="font-medium">Refleksi tersimpan! Pembelajaran makin kuat.</span>
                </div>
              </div>
            )}

            {/* Level Progress */}
            <div className="p-4 bg-secondary/5 rounded-card mb-8">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-secondary" strokeWidth={1.75} />
                <div>
                  <div className="font-semibold text-sakato-text">Level: {user.level.replace('_', ' ')}</div>
                  <div className="text-sm text-sakato-text-muted">Total XP: {user.xp} | Badge: {user.badges.length}</div>
                </div>
              </div>
              <Link to="/analytics" className="inline-flex items-center gap-2 text-secondary font-medium hover:underline">
                Lihat Analitik Lengkap <ChevronRight className="w-4 h-4" strokeWidth={1.75} />
              </Link>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {!isPassed && (
                <Link to={`/simulation/${disasterType}`} className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-white rounded-btn font-bold hover:bg-primary-700 transition-all">
                  <RotateCcw className="w-5 h-5" strokeWidth={1.75} />
                  Coba Lagi
                </Link>
              )}
              {isPassed && (
                <button onClick={() => setShowCertificate(true)} className="flex-1 flex items-center justify-center gap-2 py-4 bg-sakato-success text-white rounded-btn font-bold hover:bg-green-600 transition-all">
                  <Award className="w-5 h-5" strokeWidth={1.75} />
                  Lihat Sertifikat
                </button>
              )}
              <Link to="/disasters" className="flex-1 flex items-center justify-center gap-2 py-4 bg-slate-100 text-sakato-text rounded-btn font-bold hover:bg-slate-200 transition-all">
                Pilih Simulasi Lain
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Certificate Modal */}
      {showCertificate && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4" onClick={() => setShowCertificate(false)}>
          <div className="bg-white rounded-dialog max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
            <div className="p-8 text-center">
              {/* Certificate Design */}
              <div className="border-8 border-double border-accent rounded-card p-8 bg-gradient-to-br from-accent/5 to-white">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${gradientColors[disasterType]} rounded-btn flex items-center justify-center text-white`}>
                    {disasterIcons[disasterType]}
                  </div>
                  <Shield className="w-8 h-8 text-primary" strokeWidth={1.75} />
                </div>

                <h3 className="text-xs uppercase tracking-widest text-sakato-text-muted mb-2">Sertifikat Penyelesaian</h3>
                <h2 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>SAKATO</h2>

                <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />

                <p className="text-sakato-text-muted mb-2">Diberikan kepada:</p>
                <h4 className="text-3xl font-bold text-sakato-text mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>{user.name}</h4>

                <p className="text-sakato-text-muted mb-2">Atas keberhasilan menyelesaikan simulasi:</p>
                <h5 className="text-xl font-bold text-sakato-text mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>{disasterNames[disasterType]}</h5>

                <div className="flex items-center justify-center gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sakato-success" style={{ fontFamily: 'Poppins, sans-serif' }}>{result.score}%</div>
                    <div className="text-xs text-sakato-text-muted">Skor</div>
                  </div>
                  <div className="w-px h-12 bg-sakato-border" />
                  <div className="text-center">
                    <div className="text-xl font-bold text-secondary" style={{ fontFamily: 'Poppins, sans-serif' }}>{user.level.replace('_', ' ')}</div>
                    <div className="text-xs text-sakato-text-muted">Level</div>
                  </div>
                </div>

                <p className="text-sm text-sakato-text-muted mb-4">
                  {new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </p>

                <div className="text-xs text-slate-400 mt-4">
                  <p>Kode Verifikasi: SKT-{disasterType.toUpperCase()}-{Date.now().toString(36).toUpperCase()}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-6">
                <button onClick={() => setShowCertificate(false)} className="flex-1 py-3 bg-slate-100 text-sakato-text rounded-btn font-medium hover:bg-slate-200 transition-colors">
                  Tutup
                </button>
                <button onClick={handleDownloadCertificate} className="flex-1 py-3 bg-primary text-white rounded-btn font-medium hover:bg-primary-700 transition-colors flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" strokeWidth={1.75} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
