import { Link } from 'react-router-dom';
import { leaderboard } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { Trophy, Medal, Crown, Star, ArrowLeft, TrendingUp, Users } from 'lucide-react';
import Logo from './Logo';

const levelStyles: Record<string, string> = {
  beginner: 'bg-slate-100 text-slate-600',
  explorer: 'bg-secondary/10 text-secondary',
  survivor: 'bg-accent/15 text-accent',
  disaster_master: 'bg-primary/10 text-primary',
};

const levelNames: Record<string, string> = {
  beginner: 'Pemula',
  explorer: 'Penjelajah',
  survivor: 'Penyelamat',
  disaster_master: 'Master Bencana',
};

const podiumAvatars: string[] = [
  'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=160',
  'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=160',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=160',
];

export default function Leaderboard() {
  const { user } = useApp();
  const userRank = leaderboard.findIndex((e) => e.xp < user.xp) + 1 || leaderboard.length + 1;

  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Header */}
      <header className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/dashboard"
              className="p-2.5 hover:bg-white/10 rounded-btn transition-colors"
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.75} />
            </Link>
            <Logo light height={40} />
            <div className="w-10" />
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-card bg-white/10 mb-3">
              <Trophy className="w-7 h-7 text-accent" strokeWidth={1.75} />
            </div>
            <h1
              className="text-2xl md:text-3xl font-bold mb-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Papan Peringkat Nasional
            </h1>
            <p className="text-white/70 text-sm md:text-base">
              Siswa dengan XP tertinggi dari seluruh Indonesia
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* User's Rank Card */}
        <div className="bg-sakato-surface border border-sakato-border rounded-card shadow-soft p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-btn object-cover border-2 border-sakato-border"
                />
                <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-secondary flex items-center justify-center border-2 border-sakato-surface">
                  <TrendingUp className="w-4 h-4 text-white" strokeWidth={1.75} />
                </div>
              </div>
              <div>
                <p className="text-sakato-text-muted text-xs font-medium uppercase tracking-wide">
                  Peringkatmu
                </p>
                <h2
                  className="text-lg font-bold text-sakato-text"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {user.name}
                </h2>
                <p className="text-sm text-sakato-text-muted">{user.school}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  #{userRank}
                </div>
                <div className="text-xs text-sakato-text-muted font-medium uppercase tracking-wide">
                  Peringkat
                </div>
              </div>
              <div className="h-12 w-px bg-sakato-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {user.xp.toLocaleString()}
                </div>
                <div className="text-xs text-sakato-text-muted font-medium uppercase tracking-wide">
                  Total XP
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="mb-8">
          <div className="flex items-end justify-center gap-3 sm:gap-6">
            {/* 2nd Place */}
            <div className="flex-1 max-w-[150px] flex flex-col items-center">
              <div className="w-full bg-sakato-surface border border-sakato-border rounded-card shadow-soft p-4 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xl mb-3">
                  2
                </div>
                <img
                  src={podiumAvatars[1]}
                  alt={leaderboard[1].name}
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-cover border-2 border-slate-300"
                />
                <h3
                  className="font-bold text-sakato-text text-sm truncate"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {leaderboard[1].name}
                </h3>
                <p className="text-xs text-sakato-text-muted truncate mb-2">{leaderboard[1].school}</p>
                <div className="inline-flex items-center justify-center gap-1 bg-slate-100 px-2.5 py-1 rounded-btn">
                  <Star className="w-3.5 h-3.5 text-slate-500" strokeWidth={1.75} />
                  <span className="font-bold text-slate-600 text-sm">{leaderboard[1].xp.toLocaleString()}</span>
                </div>
              </div>
              <div className="w-full h-20 bg-gradient-to-t from-slate-200 to-slate-300 rounded-t-btn mt-2" />
            </div>

            {/* 1st Place */}
            <div className="flex-1 max-w-[170px] flex flex-col items-center">
              <div className="w-full bg-sakato-surface border-2 border-accent rounded-card shadow-soft-md p-4 text-center relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-accent flex items-center justify-center shadow-soft">
                  <Crown className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-accent to-accent-500 flex items-center justify-center text-white font-bold text-2xl mb-3 mt-3 shadow-soft-md">
                  1
                </div>
                <img
                  src={podiumAvatars[0]}
                  alt={leaderboard[0].name}
                  className="w-14 h-14 rounded-full mx-auto mb-2 object-cover border-2 border-accent"
                />
                <h3
                  className="font-bold text-sakato-text truncate"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {leaderboard[0].name}
                </h3>
                <p className="text-xs text-sakato-text-muted truncate mb-2">{leaderboard[0].school}</p>
                <div className="inline-flex items-center justify-center gap-1 bg-accent/15 px-2.5 py-1 rounded-btn">
                  <Trophy className="w-4 h-4 text-accent" strokeWidth={1.75} />
                  <span className="font-bold text-accent text-base">{leaderboard[0].xp.toLocaleString()}</span>
                </div>
              </div>
              <div className="w-full h-28 bg-gradient-to-t from-accent-200 to-accent rounded-t-btn mt-2" />
            </div>

            {/* 3rd Place */}
            <div className="flex-1 max-w-[150px] flex flex-col items-center">
              <div className="w-full bg-sakato-surface border border-sakato-border rounded-card shadow-soft p-4 text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-secondary/15 flex items-center justify-center text-secondary font-bold text-xl mb-3">
                  3
                </div>
                <img
                  src={podiumAvatars[2]}
                  alt={leaderboard[2].name}
                  className="w-12 h-12 rounded-full mx-auto mb-2 object-cover border-2 border-secondary/30"
                />
                <h3
                  className="font-bold text-sakato-text text-sm truncate"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {leaderboard[2].name}
                </h3>
                <p className="text-xs text-sakato-text-muted truncate mb-2">{leaderboard[2].school}</p>
                <div className="inline-flex items-center justify-center gap-1 bg-secondary/10 px-2.5 py-1 rounded-btn">
                  <Medal className="w-3.5 h-3.5 text-secondary" strokeWidth={1.75} />
                  <span className="font-bold text-secondary text-sm">{leaderboard[2].xp.toLocaleString()}</span>
                </div>
              </div>
              <div className="w-full h-16 bg-gradient-to-t from-secondary/30 to-secondary/50 rounded-t-btn mt-2" />
            </div>
          </div>
        </div>

        {/* Full Leaderboard */}
        <div className="bg-sakato-surface border border-sakato-border rounded-card shadow-soft overflow-hidden">
          <div className="p-5 border-b border-sakato-border">
            <h3
              className="font-bold text-sakato-text flex items-center gap-2"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <Users className="w-5 h-5 text-secondary" strokeWidth={1.75} />
              Peringkat Lengkap
            </h3>
          </div>

          <div className="divide-y divide-sakato-border">
            {leaderboard.slice(3).map((entry) => (
              <div
                key={entry.rank}
                className="flex items-center gap-4 p-4 hover:bg-sakato-bg transition-colors"
              >
                <div className="w-10 h-10 rounded-btn bg-sakato-bg border border-sakato-border flex items-center justify-center font-bold text-sakato-text-muted">
                  {entry.rank}
                </div>
                <img
                  src={`https://images.pexels.com/photos/${220450 + entry.rank}/pexels-photo-${220450 + entry.rank}.jpeg?auto=compress&cs=tinysrgb&w=80`}
                  alt={entry.name}
                  className="w-10 h-10 rounded-full object-cover border border-sakato-border"
                />
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-semibold text-sakato-text truncate"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {entry.name}
                  </h4>
                  <p className="text-sm text-sakato-text-muted truncate">{entry.school}</p>
                </div>
                <div className="text-right flex flex-col items-end gap-1.5">
                  <div className="font-bold text-sakato-text">{entry.xp.toLocaleString()} XP</div>
                  <div className={`text-xs px-2.5 py-1 rounded-btn font-medium ${levelStyles[entry.level]}`}>
                    {levelNames[entry.level]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
