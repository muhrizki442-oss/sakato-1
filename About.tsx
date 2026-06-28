import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  Target, Heart, Globe,
  Activity, Waves, CloudRain, Flame, ArrowLeft,
  ExternalLink, CheckCircle, AlertTriangle, Mountain,
} from 'lucide-react';

const references = [
  { source: 'BMKG', name: 'Badan Meteorologi, Klimatologi, dan Geofisika', url: 'https://www.bmkg.go.id' },
  { source: 'BNPB', name: 'Badan Nasional Penanggulangan Bencana', url: 'https://www.bnpb.go.id' },
  { source: 'BPBD', name: 'Badan Penanggulangan Bencana Daerah', url: '#' },
  { source: 'PMI', name: 'Palang Merah Indonesia', url: 'https://www.pmi.or.id' },
];

const disasterFacts = [
  {
    icon: Activity,
    title: 'Gempa Bumi',
    facts: [
      'Indonesia mengalami 5.000+ gempa bumi per tahun',
      'Berada di pertemuan 3 lempeng tektonik: Eurasia, Indo-Australia, dan Pasifik',
      '128 gunung berapi aktif (terbanyak di dunia)',
      'Gempa Cianjur 2022 menyebabkan 602 korban jiwa',
    ],
    color: 'bg-accent',
  },
  {
    icon: Waves,
    title: 'Tsunami',
    facts: [
      'Tsunami Aceh 2004 menyebabkan 230.000+ korban jiwa',
      'Sistem InaTEWS dipasang sejak 2008',
      'Waktu peringatan: 5-15 menit sebelum tiba di pantai',
      'Tanda alami: air surut drastis, gempa besar',
    ],
    color: 'bg-secondary',
  },
  {
    icon: CloudRain,
    title: 'Banjir',
    facts: [
      '10.6 juta orang terdampak banjir setiap tahun',
      'Jakarta mengalami banjir 20+ kali per tahun',
      'Penyebab: curah hujan tinggi, drainase buruk, konversi lahan',
      'Risiko leptospirosis dari air banjir terkontaminasi',
    ],
    color: 'bg-primary',
  },
  {
    icon: Flame,
    title: 'Kebakaran',
    facts: [
      '2.500+ kebakaran per tahun di Indonesia',
      'Jakarta: kerugian Rp 800 miliar per tahun',
      'Penyebab utama: hubungan arus pendek, kompor gas',
      'Asap adalah penyebab kematian utama (bukan api)',
    ],
    color: 'bg-accent',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-10">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-btn bg-white/10 hover:bg-white/20 transition-colors text-sm font-medium"
              aria-label="Kembali ke dashboard"
            >
              <ArrowLeft className="w-4 h-4" strokeWidth={1.75} />
              Kembali
            </Link>
          </div>

          <div className="text-center pb-10">
            <div className="flex justify-center mb-6">
              <Logo light height={64} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
              SAKATO
            </h1>
            <p className="text-lg text-white/80 mb-1">
              Simulasi Adaptif Kebencanaan berbasis Aktivitas dan Teknologi
            </p>
            <p className="text-xl text-accent" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Belajar Hari Ini, Selamat Esok.
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission */}
        <section className="mb-12">
          <div className="bg-sakato-surface rounded-card border border-sakato-border shadow-soft p-8">
            <h2
              className="text-2xl font-bold text-sakato-text mb-4 flex items-center gap-3"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Target className="w-6 h-6 text-secondary" strokeWidth={1.75} />
              Misi Kami
            </h2>
            <p className="text-lg text-sakato-text-muted leading-relaxed mb-6">
              Meningkatkan kesiapan menghadapi bencana pada siswa SMP dan SMA di Indonesia
              melalui platform pembelajaran interaktif berbasis simulasi. Kami percaya bahwa
              pengetahuan mitigasi bencana harus dapat diakses oleh semua orang.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-5 bg-sakato-bg rounded-card border border-sakato-border">
                <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  32+
                </div>
                <div className="text-sm text-sakato-text-muted">Skenario Interaktif</div>
              </div>
              <div className="text-center p-5 bg-sakato-bg rounded-card border border-sakato-border">
                <div className="text-4xl font-bold text-secondary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  4
                </div>
                <div className="text-sm text-sakato-text-muted">Jenis Bencana</div>
              </div>
              <div className="text-center p-5 bg-sakato-bg rounded-card border border-sakato-border">
                <div className="text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  100%
                </div>
                <div className="text-sm text-sakato-text-muted">Gratis</div>
              </div>
            </div>
          </div>
        </section>

        {/* Disaster Facts */}
        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-sakato-text mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <AlertTriangle className="w-6 h-6 text-accent" strokeWidth={1.75} />
            Fakta Bencana di Indonesia
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {disasterFacts.map((disaster, index) => (
              <div
                key={index}
                className="bg-sakato-surface rounded-card border border-sakato-border shadow-soft p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 ${disaster.color} rounded-btn flex items-center justify-center`}>
                    <disaster.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    {disaster.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {disaster.facts.map((fact, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-sakato-text-muted">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* References */}
        <section className="mb-12">
          <h2
            className="text-2xl font-bold text-sakato-text mb-6 flex items-center gap-3"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            <Globe className="w-6 h-6 text-secondary" strokeWidth={1.75} />
            Referensi Resmi
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {references.map((ref, index) => (
              <a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-sakato-surface rounded-card border border-sakato-border shadow-soft hover:border-secondary hover:shadow-soft-md transition-all"
              >
                <ExternalLink className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.75} />
                <div>
                  <div className="font-semibold text-sakato-text">{ref.source}</div>
                  <div className="text-sm text-sakato-text-muted">{ref.name}</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Important Message */}
        <section className="mb-12">
          <div className="bg-primary text-white rounded-card p-8 relative overflow-hidden">
            <Mountain className="absolute -bottom-10 -right-10 w-48 h-48 text-white/5" strokeWidth={1.75} />
            <h3
              className="text-2xl font-bold mb-4 flex items-center gap-3 relative"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Heart className="w-6 h-6 text-accent" strokeWidth={1.75} />
              Mengapa Mitigasi Penting?
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed relative">
              Indonesia adalah negara dengan risiko bencana tertinggi di dunia. Dengan posisi
              di Cincin Api Pasifik, kita menghadapi gempa bumi, tsunami, gunung berapi,
              banjir, dan kebakaran setiap tahun. Pengetahuan mitigasi adalah investasi
              untuk keselamatan diri dan orang-orang yang kita cintai.
            </p>
            <div className="bg-white/10 rounded-card p-4 text-sm relative backdrop-blur">
              <p className="mb-2"><strong>Kunci Keselamatan:</strong></p>
              <ul className="space-y-1">
                <li>1. Kenali risiko di daerahmu</li>
                <li>2. Pelajari protokol tanggap darurat</li>
                <li>3. Siapkan tas siaga bencana</li>
                <li>4. Latih keluarga dan komunitas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-sakato-text-muted">
          <p>&copy; 2024 SAKATO. Educational Disaster Simulation Platform.</p>
          <p className="mt-2 italic">"Alam Takambang Jadi Guru" — Filosofi Minangkabau</p>
        </div>
      </main>
    </div>
  );
}
