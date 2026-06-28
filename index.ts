// ============================================
// CORE USER TYPES
// ============================================

export type UserRole = 'student' | 'teacher' | 'admin';

export type DisasterType = 'earthquake' | 'tsunami' | 'flood' | 'fire';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type EducationLevel = 'SMP' | 'SMA';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  educationLevel: EducationLevel;
  school: string;
  classId?: string;
  avatar: string;
  xp: number;
  level: UserLevel;
  badges: Badge[];
  completedSimulations: CompletedSimulation[];
  learningAnalytics: LearningAnalytics;
  preferences: UserPreferences;
  createdAt: Date;
  lastActiveAt: Date;
}

export type UserLevel = 'beginner' | 'explorer' | 'survivor' | 'disaster_master';

export interface UserPreferences {
  soundEnabled: boolean;
  darkMode: boolean;
  language: 'id' | 'en';
  accessibilityMode: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: 'small' | 'medium' | 'large';
}

// ============================================
// LEARNING ANALYTICS
// ============================================

export interface LearningAnalytics {
  totalSimulationsCompleted: number;
  totalDecisionPoints: number;
  correctDecisionCount: number;
  incorrectDecisionCount: number;
  averageScore: number;
  highestScore: number;
  lowestScore: number;
  totalTimeSpentMs: number;
  averageTimePerDecisionMs: number;
  improvementRate: number;
  skillsMastery: SkillsMastery;
  weeklyProgress: WeeklyProgress[];
  disasterSpecificMetrics: Record<DisasterType, DisasterMetric>;
  lastUpdated: Date;
}

export interface SkillsMastery {
  situation awareness: number;
  decisionMaking: number;
  emergencyProtocols: number;
  firstAidBasics: number;
  evacuationKnowledge: number;
  riskAssessment: number;
}

export interface DisasterMetric {
  attempts: number;
  bestScore: number;
  lastScore: number;
  averageScore: number;
  completionRate: number;
  decisionAccuracy: number;
  timeSpentMs: number;
  lastAttemptAt?: Date;
}

export interface WeeklyProgress {
  week: string;
  simulationsCompleted: number;
  xpEarned: number;
  accuracy: number;
  timeSpentMs: number;
}

// ============================================
// ACHIEVEMENT & BADGE SYSTEM
// ============================================

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  disasterType: DisasterType | 'general';
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  earnedAt?: Date;
  requirements: BadgeRequirement[];
}

export interface BadgeRequirement {
  type: 'simulation_complete' | 'score_threshold' | 'streak' | 'time_limit' | 'decision_accuracy';
  value: number;
  disasterType?: DisasterType;
}

export interface CompletedSimulation {
  id: string;
  disasterType: DisasterType;
  score: number;
  correctDecisions: number;
  totalDecisions: number;
  pathTaken: string[];
  decisionHistory: DecisionRecord[];
  reflectionCompleted: boolean;
  selfAssessment?: SelfAssessment;
  startedAt: Date;
  completedAt: Date;
  timeSpentMs: number;
  certificateId?: string;
}

// ============================================
// SELF-ASSESSMENT & REFLECTION
// ============================================

export interface SelfAssessment {
  confidenceRating: 1 | 2 | 3 | 4 | 5;
  understoodKeyPoints: boolean[];
  areasToImprove: string[];
  mainTakeaways: string[];
  practicalApplicationPlan: string;
  submittedAt: Date;
}

export interface ReflectionQuestion {
  id: string;
  type: 'single-choice' | 'multiple-choice' | 'short-answer' | 'rating';
  question: string;
  options?: string[];
  placeholder?: string;
}

export interface ReflectionResponse {
  questionId: string;
  response: string | string[] | number;
}

// ============================================
// BRANCHING SIMULATION SYSTEM
// ============================================

export interface Disaster {
  id: DisasterType;
  name: string;
  description: string;
  icon: string;
  image: string;
  difficulty: DifficultyLevel;
  estimatedTime: number;
  objectives: LearningObjective[];
  prerequisites: DisasterType[];
  statistics: DisasterStatistics;
  references: MitigationReference[];
}

export interface LearningObjective {
  id: string;
  description: string;
  bloomLevel: 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create';
  disaster: DisasterType;
}

export interface Scenario {
  id: string;
  disasterType: DisasterType;
  order: number;
  narrative: string;
  narrativeAudio?: string;
  illustration: string;
  situationContext: string;
  timeContext: string;
  dangerLevel: 'low' | 'medium' | 'high' | 'critical';
  emotionalTone: 'neutral' | 'tense' | 'urgent' | 'desperate';
  keyLearningPoints: string[];
  choices: Choice[];
  consequences: ScenarioConsequence | null;
  previousScenarioId?: string;
  defaultNextScenarioId?: string;
  isEnding?: boolean;
  endingType?: 'success' | 'partial' | 'failure' | 'heroic';
  endingNarrative?: string;
}

export interface Choice {
  id: string;
  text: string;
  isCorrect: boolean;
  isPartiallyCorrect: boolean;
  choiceCategory: 'immediate-action' | 'help-others' | 'gather-information' | 'evacuate' | 'secure-area';
  nextScenarioId?: string;
  consequence: string;
  feedback: string;
  xpEarned: number;
  decisionReason: string;
  commonMistake?: string;
}

export interface ScenarioConsequence {
  narrative: string;
  healthImpact: number;
  xpImpact: number;
  emotionalImpact: number;
  unlocksScenario?: string;
}

export interface SimulationState {
  id: string;
  disasterType: DisasterType;
  currentScenarioId: string;
  score: number;
  health: number;
  pathTaken: string[];
  decisions: DecisionRecord[];
  startTime: Date;
  lastUpdateTime: Date;
  isCompleted: boolean;
  branchingMetrics: BranchingMetrics;
}

export interface DecisionRecord {
  scenarioId: string;
  choiceId: string;
  isCorrect: boolean;
  isPartiallyCorrect: boolean;
  reactionTimeMs: number;
  timestamp: Date;
  healthBefore: number;
  healthAfter: number;
}

export interface BranchingMetrics {
  totalPathsAvailable: number;
  uniqueEndingsReached: number;
  bestPathScore: number;
  currentPathOptimal: boolean;
  missedOpportunities: string[];
}

// ============================================
// TEACHER MODE
// ============================================

export interface TeacherClass {
  id: string;
  name: string;
  school: string;
  grade: string;
  teacherId: string;
  students: StudentSummary[];
  assignments: ClassAssignment[];
  averageClassScore: number;
  completionRate: number;
  createdAt: Date;
}

export interface StudentSummary {
  id: string;
  name: string;
  email: string;
  avatar: string;
  xp: number;
  level: UserLevel;
  completedSimulations: number;
  averageScore: number;
  lastActiveAt: Date;
  atRisk: boolean;
}

export interface ClassAssignment {
  id: string;
  disasterType: DisasterType;
  name: string;
  description: string;
  dueDate: Date;
  assignedAt: Date;
  completionCriteria: {
    minScore: number;
    requiredAttempts: number;
  timeLimitEnable: boolean;
    timeLimitMinutes?: number;
  reflectionRequired: boolean;
  selfAssessmentRequired: boolean;
  };
  progress: AssignmentProgress[];
}

export interface AssignmentProgress {
  studentId: string;
  status: 'not_started' | 'in_progress' | 'completed' | 'overdue' | 'exceeded_attempts';
  attempts: number;
  bestScore: number;
  completedAt?: Date;
  timeSpentMs?: number;
  reflectionCompleted: boolean;
}

// ============================================
// REPORTING SYSTEM
// ============================================

export interface StudentLearningReport {
  id: string;
  studentId: string;
  classId?: string;
  reportPeriod: {
    startDate: Date;
    endDate: Date;
  };
  overallPerformance: {
    totalSimulations: number;
    averageScore: number;
    totalXP: number;
    level: UserLevel;
    badgesEarned: number;
  };
  disasterPerformance: Record<DisasterType, DisasterPerformanceReport>;
  skillsAnalysis: SkillsMastery;
  timeAnalysis: {
    totalTimeSpentMinutes: number;
    averageTimePerSimulation: number;
    bestPerformingTimeOfDay: string;
    consistencyScore: number;
  };
  improvementTrend: {
    weeklyScores: number[];
    hasImprovingTrend: boolean;
    improvementRate: number;
  };
  recommendations: string[];
  generatedAt: Date;
}

export interface DisasterPerformanceReport {
  attempts: number;
  bestScore: number;
  averageScore: number;
  completionStatus: 'not_started' | 'in_progress' | 'completed' | 'mastered';
  strengths: string[];
  areasForImprovement: string[];
  learningObjectivesMet: string[];
  learningObjectivesPending: string[];
  recentAttempts: AttemptSummary[];
}

export interface AttemptSummary {
  id: string;
  date: Date;
  score: number;
  correctDecisions: number;
  totalDecisions: number;
  timeSpentMs: number;
  pathType: 'optimal' | 'acceptable' | 'suboptimal';
}

// ============================================
// INDONESIAN MITIGATION REFERENCES
// ============================================

export interface MitigationReference {
  id: string;
  source: 'BMKG' | 'BNPB' | 'BPBD' | 'RedCross' | 'UNESCO' | 'Ministry';
  title: string;
  description: string;
  url?: string;
  documentType: 'guide' | 'infographic' | 'video' | 'protocol' | 'regulation';
  disasterType: DisasterType | 'general';
  lastUpdated: Date;
}

export interface DisasterStatistics {
  eventsPerYear: number;
  affectedPeople: string;
  highRiskZones: string[];
  preparednessRate: string;
  lastMajorEvent?: {
    name: string;
    date: string;
    impact: string;
  };
  economicImpact: string;
}

// ============================================
// CERTIFICATE SYSTEM
// ============================================

export interface Certificate {
  id: string;
  studentName: string;
  studentId: string;
  disasterType: DisasterType;
  score: number;
  achievementLevel: UserLevel;
  decisionAccuracy: number;
  completedAt: Date;
  timeSpentMs: number;
  learningObjectivesMet: string[];
  teacherSignOff?: {
    name: string;
    school: string;
    signedAt: Date;
  };
  verificationCode: string;
  validUntil?: Date;
}

// ============================================
// LEADERBOARD & SOCIAL
// ============================================

export interface LeaderboardEntry {
  rank: number;
  id: string;
  name: string;
  school: string;
  grade?: string;
  xp: number;
  level: UserLevel;
  badges: number;
  simulationsCompleted: number;
  accuracy: number;
  lastActiveAt: Date;
}

// ============================================
// ACCESSIBILITY
// ============================================

export interface AccessibilitySettings {
  screenReaderMode: boolean;
  highContrast: boolean;
  reducedMotion: boolean;
  fontSize: number;
  keyboardNavigation: boolean;
  colorBlindMode: 'none' | 'protanopia' | 'deuteranopia' | 'tritanopia';
  focusIndicators: boolean;
  pauseAnimations: boolean;
  captionsEnabled: boolean;
}
