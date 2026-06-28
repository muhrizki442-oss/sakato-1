import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Logo from './Logo';
import { ArrowLeft, Sun, Moon, Volume2, VolumeX, Info, Trash2 } from 'lucide-react';

export default function Settings() {
  const { settings, updateSettings, user } = useApp();

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
                <h1 className="text-lg font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>Pengaturan</h1>
                <p className="text-sm text-sakato-text-muted">Kelola preferensimu</p>
              </div>
            </div>
            <Link to="/"><Logo height={38} /></Link>
          </div>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* User Info */}
        <div className="card p-6 mb-6">
          <div className="flex items-center gap-4">
            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-btn object-cover" />
            <div>
              <h2 className="text-xl font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{user.name}</h2>
              <p className="text-sakato-text-muted">{user.email}</p>
              <p className="text-sm text-sakato-text-muted">{user.school}</p>
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="card mb-6 overflow-hidden">
          <div className="p-4 border-b border-sakato-border">
            <h3 className="font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>Tampilan</h3>
          </div>
          <div className="divide-y divide-sakato-border">
            <button
              onClick={() => updateSettings({ darkMode: !settings.darkMode })}
              className="w-full flex items-center justify-between p-4 hover:bg-sakato-bg transition-colors"
            >
              <div className="flex items-center gap-4">
                {settings.darkMode ? (
                  <div className="w-10 h-10 bg-slate-700 rounded-btn flex items-center justify-center">
                    <Moon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-accent/15 rounded-btn flex items-center justify-center">
                    <Sun className="w-5 h-5 text-accent-600" strokeWidth={1.75} />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-semibold text-sakato-text">Mode Gelap</div>
                  <div className="text-sm text-sakato-text-muted">{settings.darkMode ? 'Aktif' : 'Tidak Aktif'}</div>
                </div>
              </div>
              <div className={`w-12 h-7 rounded-full transition-colors ${settings.darkMode ? 'bg-primary' : 'bg-slate-300'}`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${settings.darkMode ? 'translate-x-6' : 'translate-x-1'} mt-1`} />
              </div>
            </button>
          </div>
        </div>

        {/* Sound */}
        <div className="card mb-6 overflow-hidden">
          <div className="p-4 border-b border-sakato-border">
            <h3 className="font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>Suara</h3>
          </div>
          <div className="divide-y divide-sakato-border">
            <button
              onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })}
              className="w-full flex items-center justify-between p-4 hover:bg-sakato-bg transition-colors"
            >
              <div className="flex items-center gap-4">
                {settings.soundEnabled ? (
                  <div className="w-10 h-10 bg-secondary/10 rounded-btn flex items-center justify-center">
                    <Volume2 className="w-5 h-5 text-secondary" strokeWidth={1.75} />
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-slate-100 rounded-btn flex items-center justify-center">
                    <VolumeX className="w-5 h-5 text-slate-400" strokeWidth={1.75} />
                  </div>
                )}
                <div className="text-left">
                  <div className="font-semibold text-sakato-text">Efek Suara</div>
                  <div className="text-sm text-sakato-text-muted">{settings.soundEnabled ? 'Aktif' : 'Nonaktif'}</div>
                </div>
              </div>
              <div className={`w-12 h-7 rounded-full transition-colors ${settings.soundEnabled ? 'bg-secondary' : 'bg-slate-300'}`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${settings.soundEnabled ? 'translate-x-6' : 'translate-x-1'} mt-1`} />
              </div>
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="card mb-6 overflow-hidden">
          <div className="p-4 border-b border-sakato-border">
            <h3 className="font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>Informasi</h3>
          </div>
          <div className="divide-y divide-sakato-border">
            <Link to="/about" className="w-full flex items-center gap-4 p-4 hover:bg-sakato-bg transition-colors">
              <div className="w-10 h-10 bg-primary/10 rounded-btn flex items-center justify-center">
                <Info className="w-5 h-5 text-primary" strokeWidth={1.75} />
              </div>
              <div className="text-left">
                <div className="font-semibold text-sakato-text">Tentang SAKATO</div>
                <div className="text-sm text-sakato-text-muted">Pelajari lebih lanjut tentang aplikasi</div>
              </div>
            </Link>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-card border-2 border-sakato-danger/20 shadow-soft overflow-hidden">
          <div className="p-4 border-b border-sakato-danger/20 bg-sakato-danger/5">
            <h3 className="font-bold text-sakato-danger" style={{ fontFamily: 'Poppins, sans-serif' }}>Zona Bahaya</h3>
          </div>
          <div className="p-4">
            <p className="text-sm text-sakato-text-muted mb-4">
              Menghapus data akan menghapus semua progress, badge, dan sertifikatmu. Tindakan ini tidak dapat dibatalkan.
            </p>
            <button
              onClick={() => {
                if (confirm('Apakah kamu yakin ingin menghapus semua data?')) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
              className="btn-danger"
            >
              <Trash2 className="w-4 h-4" strokeWidth={1.75} />
              Hapus Semua Data
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
