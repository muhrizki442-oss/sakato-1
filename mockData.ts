import { Badge, User, LeaderboardEntry, UserLevel, Disaster } from '../types';

export { disasters, getScenarios } from './simulations';

export const initialBadges: Badge[] = [
  {
    id: 'earthquake-hero',
    name: 'Pahlawan Gempa',
    description: 'Menyelesaikan simulasi gempa bumi dengan skor minimal 80%',
    icon: 'activity',
    disasterType: 'earthquake',
    rarity: 'rare',
    requirements: [{ type: 'score_threshold', value: 80, disasterType: 'earthquake' }]
  },
  {
    id: 'tsunami-expert',
    name: 'Ahli Tsunami',
    description: 'Menyelesaikan simulasi tsunami dengan skor minimal 80%',
    icon: 'waves',
    disasterType: 'tsunami',
    rarity: 'rare',
    requirements: [{ type: 'score_threshold', value: 80, disasterType: 'tsunami' }]
  },
  {
    id: 'flood-guardian',
    name: 'Penjaga Banjir',
    description: 'Menyelesaikan simulasi banjir dengan skor minimal 80%',
    icon: 'cloud-rain',
    disasterType: 'flood',
    rarity: 'rare',
    requirements: [{ type: 'score_threshold', value: 80, disasterType: 'flood' }]
  },
  {
    id: 'fire-champion',
    name: 'Juara Kebakaran',
    description: 'Menyelesaikan simulasi kebakaran dengan skor minimal 80%',
    icon: 'flame',
    disasterType: 'fire',
    rarity: 'rare',
    requirements: [{ type: 'score_threshold', value: 80, disasterType: 'fire' }]
  },
  {
    id: 'disaster-master',
    name: 'Master Bencana',
    description: 'Menyelesaikan semua simulasi dengan skor minimal 70%',
    icon: 'shield',
    disasterType: 'general',
    rarity: 'legendary',
    requirements: [
      { type: 'simulation_complete', value: 4 },
      { type: 'streak', value: 4 }
    ]
  },
  {
    id: 'quick-decider',
    name: 'Pengambil Keputusan Cepat',
    description: 'Rata-rata waktu keputusan kurang dari 30 detik dengan akurasi 80%',
    icon: 'zap',
    disasterType: 'general',
    rarity: 'epic',
    requirements: [{ type: 'decision_accuracy', value: 80 }]
  }
];

export const mockUser: User = {
  id: 'user-1',
  name: 'Ahmad Pratama',
  email: 'ahmad.pratama@siswa.sch.id',
  role: 'student',
  educationLevel: 'SMA',
  school: 'SMA Negeri 1 Padang',
  classId: 'class-12-ipa-2',
  avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
  xp: 1250,
  level: 'explorer',
  badges: [],
  completedSimulations: [],
  learningAnalytics: {
    totalSimulationsCompleted: 0,
    totalDecisionPoints: 0,
    correctDecisionCount: 0,
    incorrectDecisionCount: 0,
    averageScore: 0,
    highestScore: 0,
    lowestScore: 100,
    totalTimeSpentMs: 0,
    averageTimePerDecisionMs: 0,
    improvementRate: 0,
    skillsMastery: {
      situationAwareness: 0,
      decisionMaking: 0,
      emergencyProtocols: 0,
      firstAidBasics: 0,
      evacuationKnowledge: 0,
      riskAssessment: 0
    },
    weeklyProgress: [],
    disasterSpecificMetrics: {
      earthquake: createEmptyMetric(),
      tsunami: createEmptyMetric(),
      flood: createEmptyMetric(),
      fire: createEmptyMetric()
    },
    lastUpdated: new Date()
  },
  preferences: {
    soundEnabled: true,
    darkMode: false,
    language: 'id',
    accessibilityMode: false,
    highContrast: false,
    reducedMotion: false,
    fontSize: 'medium'
  },
  createdAt: new Date(),
  lastActiveAt: new Date()
};

function createEmptyMetric() {
  return {
    attempts: 0,
    bestScore: 0,
    lastScore: 0,
    averageScore: 0,
    completionRate: 0,
    decisionAccuracy: 0,
    timeSpentMs: 0,
    lastAttemptAt: undefined
  };
}

export const mockTeacher = {
  id: 'teacher-1',
  name: 'Dr. Siti Rahayu, M.Pd.',
  email: 'siti.rahayu@guru.sch.id',
  role: 'teacher' as const,
  school: 'SMA Negeri 1 Padang',
  classes: [
    {
      id: 'class-12-ipa-1',
      name: 'XII IPA 1',
      grade: '12',
      studentCount: 32,
      averageScore: 78,
      completionRate: 85
    },
    {
      id: 'class-12-ipa-2',
      name: 'XII IPA 2',
      grade: '12',
      studentCount: 30,
      averageScore: 82,
      completionRate: 90
    }
  ]
};

export const leaderboard: LeaderboardEntry[] = [
  { rank: 1, id: '1', name: 'Siti Rahayu', school: 'SMA Negeri 5 Bandung', xp: 5420, level: 'disaster_master', badges: 4, simulationsCompleted: 4, accuracy: 92, lastActiveAt: new Date() },
  { rank: 2, id: '2', name: 'Budi Santoso', school: 'SMA Negeri 1 Surabaya', xp: 4850, level: 'survivor', badges: 3, simulationsCompleted: 4, accuracy: 88, lastActiveAt: new Date() },
  { rank: 3, id: '3', name: 'Dewi Lestari', school: 'SMP Negeri 2 Yogyakarta', xp: 4200, level: 'survivor', badges: 3, simulationsCompleted: 4, accuracy: 85, lastActiveAt: new Date() },
  { rank: 4, id: '4', name: 'Agus Wijaya', school: 'SMA Negeri 3 Medan', xp: 3650, level: 'explorer', badges: 2, simulationsCompleted: 3, accuracy: 82, lastActiveAt: new Date() },
  { rank: 5, id: '5', name: 'Rina Kusuma', school: 'SMP Negeri 1 Semarang', xp: 3100, level: 'explorer', badges: 2, simulationsCompleted: 3, accuracy: 79, lastActiveAt: new Date() },
  { rank: 6, id: '6', name: 'Fajar Nugroho', school: 'SMA Negeri 7 Jakarta', xp: 2800, level: 'explorer', badges: 1, simulationsCompleted: 2, accuracy: 76, lastActiveAt: new Date() },
  { rank: 7, id: '7', name: 'Maya Putri', school: 'SMP Negeri 4 Surabaya', xp: 2400, level: 'beginner', badges: 1, simulationsCompleted: 2, accuracy: 74, lastActiveAt: new Date() },
  { rank: 8, id: '8', name: 'Dimas Pratama', school: 'SMA Negeri 2 Makassar', xp: 2100, level: 'beginner', badges: 1, simulationsCompleted: 2, accuracy: 72, lastActiveAt: new Date() },
  { rank: 9, id: '9', name: 'Putra Wibowo', school: 'SMP Negeri 3 Denpasar', xp: 1800, level: 'beginner', badges: 0, simulationsCompleted: 1, accuracy: 68, lastActiveAt: new Date() },
  { rank: 10, id: '10', name: 'Sari Indah', school: 'SMA Negeri 1 Palembang', xp: 1500, level: 'beginner', badges: 0, simulationsCompleted: 1, accuracy: 65, lastActiveAt: new Date() }
];

export const levelNames: Record<UserLevel, string> = {
  beginner: 'Pemula',
  explorer: 'Penjelajah',
  survivor: 'Penyelamat',
  disaster_master: 'Master Bencana'
};

export const levelColors: Record<UserLevel, string> = {
  beginner: 'bg-slate-100 text-slate-700',
  explorer: 'bg-secondary/10 text-secondary',
  survivor: 'bg-accent/15 text-accent-600',
  disaster_master: 'bg-accent/20 text-accent-700'
};

export function getLevelFromXP(xp: number): UserLevel {
  if (xp >= 5000) return 'disaster_master';
  if (xp >= 2500) return 'survivor';
  if (xp >= 1000) return 'explorer';
  return 'beginner';
}

export function getXPForNextLevel(level: UserLevel): number {
  switch (level) {
    case 'beginner': return 1000;
    case 'explorer': return 2500;
    case 'survivor': return 5000;
    case 'disaster_master': return Infinity;
  }
}

export const reflectionQuestions = [
  {
    id: 'confidence',
    type: 'rating' as const,
    question: 'Seberapa percaya dirimu dalam menghadapi situasi bencana serupa?'
  },
  {
    id: 'main-takeaway',
    type: 'short-answer' as const,
    question: 'Satu hal paling penting yang kamu pelajari dari simulasi ini?',
    placeholder: 'Tuliskan insight utamamu...'
  },
  {
    id: 'application',
    type: 'short-answer' as const,
    question: 'Bagaimana kamu akan menerapkan pembelajaran ini di kehidupan nyata?',
    placeholder: 'Tuliskan rencana aplikasimu...'
  },
  {
    id: 'improvement',
    type: 'multiple-choice' as const,
    question: 'Area mana yang ingin kamu tingkatkan?',
    options: [
      'Kesadaran situasi (situational awareness)',
      'Kecepatan pengambilan keputusan',
      'Pengetahuan protokol darurat',
      'Ketahanan mental dalam krisis',
      'Semua area di atas'
    ]
  }
];
