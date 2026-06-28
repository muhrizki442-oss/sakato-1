import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { getScenarios } from '../data/mockData';
import { playCorrectSound, playWrongSound } from '../utils/sounds';
import { Activity, Waves, CloudRain, Flame, ArrowRight, Volume2, VolumeX,
  AlertTriangle, CheckCircle, XCircle, Clock, Star, Heart, Shield, ArrowLeft } from 'lucide-react';

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

export default function Simulation() {
  const { disasterType } = useParams<{ disasterType: string }>();
  const navigate = useNavigate();
  const { startSimulation, makeDecision, simulationState, settings, updateSettings } = useApp();

  const [scenarios, setScenarios] = useState<any[]>([]);
  const [currentScenarioId, setCurrentScenarioId] = useState<string | null>(null);
  const [selectedChoice, setSelectedChoice] = useState<any>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [xpAnimation, setXpAnimation] = useState(false);
  const [health, setHealth] = useState(100);

  const startSimulationRef = useRef(startSimulation);
  startSimulationRef.current = startSimulation;

  useEffect(() => {
    if (disasterType && ['earthquake', 'tsunami', 'flood', 'fire'].includes(disasterType)) {
      startSimulationRef.current(disasterType as any);
      const loaded = getScenarios(disasterType as any);
      setScenarios(loaded);
      setCurrentScenarioId(loaded[0]?.id ?? null);
    }
  }, [disasterType]);

  if (!disasterType || !scenarios.length || !currentScenarioId) {
    return null;
  }

  const currentIndex = scenarios.findIndex(s => s.id === currentScenarioId);
  const currentScenario = scenarios[currentIndex];
  const isLastScenario = currentScenario.isEnding || !currentScenario.defaultNextScenarioId;
  const progress = ((currentIndex + 1) / scenarios.length) * 100;

  const handleChoice = (choice: any) => {
    setSelectedChoice(choice);
    setShowFeedback(true);
    if (choice.isCorrect) {
      playCorrectSound();
    } else {
      playWrongSound();
    }

    if (!choice.isCorrect) {
      setHealth(prev => Math.max(prev - 15, 0));
    }

    if (choice.xpEarned > 0) {
      setXpAnimation(true);
      setTimeout(() => setXpAnimation(false), 1500);
    }
  };

  const handleNext = () => {
    if (!selectedChoice) return;

    makeDecision(currentScenario.id, selectedChoice.id, selectedChoice.xpEarned);

    const nextId = selectedChoice.nextScenarioId ?? currentScenario.defaultNextScenarioId;
    const nextScenario = nextId ? scenarios.find(s => s.id === nextId) : undefined;

    if (!nextScenario || nextScenario.isEnding) {
      navigate(`/reflection/${disasterType}`);
    } else {
      setCurrentScenarioId(nextScenario.id);
      setShowFeedback(false);
      setSelectedChoice(null);
    }
  };

  return (
    <div className="min-h-screen bg-sakato-bg">
      {/* Header */}
      <header className="bg-white border-b border-sakato-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/disasters" className="p-2 hover:bg-slate-100 rounded-btn transition-colors" aria-label="Kembali">
                <ArrowLeft className="w-5 h-5 text-sakato-text-muted" strokeWidth={1.75} />
              </Link>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 bg-gradient-to-br ${gradientColors[disasterType]} rounded-btn flex items-center justify-center text-white`}>
                  {disasterIcons[disasterType]}
                </div>
                <div>
                  <h1 className="text-lg font-bold text-sakato-text" style={{ fontFamily: 'Poppins, sans-serif' }}>{disasterNames[disasterType]}</h1>
                  <p className="text-xs text-sakato-text-muted">Skenario {currentIndex + 1} dari {scenarios.length}</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Health Bar */}
              <div className="hidden sm:flex items-center gap-2">
                <Heart className={`w-5 h-5 ${health <= 30 ? 'text-sakato-danger animate-pulse' : health <= 60 ? 'text-sakato-warning' : 'text-sakato-success'}`} strokeWidth={1.75} />
                <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`h-full transition-all duration-500 ${health <= 30 ? 'bg-sakato-danger' : health <= 60 ? 'bg-sakato-warning' : 'bg-sakato-success'}`} style={{ width: `${health}%` }} />
                </div>
              </div>

              {/* Sound Toggle */}
              <button onClick={() => updateSettings({ soundEnabled: !settings.soundEnabled })} className="p-2 hover:bg-slate-100 rounded-btn transition-colors" aria-label="Toggle Sound">
                {settings.soundEnabled ? <Volume2 className="w-5 h-5 text-sakato-text-muted" strokeWidth={1.75} /> : <VolumeX className="w-5 h-5 text-slate-400" strokeWidth={1.75} />}
              </button>

              {/* XP Counter */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 rounded-btn relative">
                <Star className="w-4 h-4 text-accent" strokeWidth={1.75} />
                <span className="text-sm font-bold text-accent-600">{simulationState?.score || 0} XP</span>
                {xpAnimation && <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-sakato-success font-bold text-sm animate-bounce">+{selectedChoice?.xpEarned || 0}</div>}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-3">
            <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
              <div className={`h-full bg-gradient-to-r ${gradientColors[disasterType]} transition-all duration-500`} style={{ width: `${progress}%` }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-sakato-text-muted">
              <span>Skenario {currentIndex + 1}</span>
              <span>{Math.round(progress)}% selesai</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Scenario Card */}
        <div className="bg-white rounded-card shadow-soft-md border border-sakato-border overflow-hidden mb-8">
          {/* Illustration */}
          <div className="relative h-64 sm:h-80">
            <img src={currentScenario.illustration} alt="Scenario illustration" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur rounded-btn">
              <Clock className="w-4 h-4 text-primary" strokeWidth={1.75} />
              <span className="font-semibold text-sakato-text text-sm">Skenario {currentIndex + 1}</span>
            </div>
          </div>

          {/* Narrative */}
          <div className="p-6 sm:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${gradientColors[disasterType]} rounded-btn flex items-center justify-center flex-shrink-0`}>
                <AlertTriangle className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-sakato-text leading-relaxed mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Situasi</h2>
                <p className="text-lg text-sakato-text-muted leading-relaxed">{currentScenario.narrative}</p>
              </div>
            </div>

            {/* Choices */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-sakato-text mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>Apa yang akan kamu lakukan?</h3>

              {currentScenario.choices.map((choice: any, index: number) => {
                const isSelected = selectedChoice?.id === choice.id;
                const isCorrect = choice.isCorrect;

                return (
                  <button
                    key={choice.id}
                    onClick={() => !showFeedback && handleChoice(choice)}
                    disabled={showFeedback}
                    className={`w-full text-left p-5 rounded-btn border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary ${
                      showFeedback
                        ? isCorrect
                          ? 'border-sakato-success bg-sakato-success/5'
                          : isSelected
                            ? 'border-sakato-danger bg-sakato-danger/5'
                            : 'border-sakato-border opacity-50'
                        : isSelected
                          ? 'border-secondary bg-secondary/5'
                          : 'border-sakato-border hover:border-secondary/40 hover:bg-sakato-bg'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-btn flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                        showFeedback
                          ? isCorrect
                            ? 'bg-sakato-success text-white'
                            : isSelected
                              ? 'bg-sakato-danger text-white'
                              : 'bg-slate-100 text-sakato-text-muted'
                          : `bg-gradient-to-br ${gradientColors[disasterType]} text-white`
                      }`}>
                        {showFeedback ? (isCorrect ? <CheckCircle className="w-5 h-5" strokeWidth={1.75} /> : isSelected ? <XCircle className="w-5 h-5" strokeWidth={1.75} /> : index + 1) : index + 1}
                      </div>
                      <div className="flex-1">
                        <span className="text-sakato-text font-medium text-lg">{choice.text}</span>
                        {showFeedback && isSelected && (
                          <div className="mt-3 p-4 rounded-btn bg-sakato-bg">
                            <div className="font-semibold text-sakato-text mb-1">Konsekuensi:</div>
                            <p className="text-sakato-text-muted mb-2">{choice.consequence}</p>
                            <div className="flex items-center gap-2 text-sm">
                              {isCorrect ? (
                                <>
                                  <CheckCircle className="w-4 h-4 text-sakato-success" strokeWidth={1.75} />
                                  <span className="text-sakato-success font-medium">Keputusan tepat! +{choice.xpEarned} XP</span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="w-4 h-4 text-sakato-danger" strokeWidth={1.75} />
                                  <span className="text-sakato-danger font-medium">Bukan pilihan terbaik. 0 XP</span>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Feedback Panel */}
        {showFeedback && selectedChoice && (
          <div className={`p-6 rounded-card mb-8 border-2 ${
            selectedChoice.isCorrect
              ? 'bg-sakato-success/5 border-sakato-success/20'
              : 'bg-sakato-warning/5 border-sakato-warning/20'
          }`}>
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-btn flex items-center justify-center flex-shrink-0 ${selectedChoice.isCorrect ? 'bg-sakato-success' : 'bg-sakato-warning'}`}>
                {selectedChoice.isCorrect ? <CheckCircle className="w-6 h-6 text-white" strokeWidth={1.75} /> : <AlertTriangle className="w-6 h-6 text-white" strokeWidth={1.75} />}
              </div>
              <div>
                <h4 className={`font-bold text-lg mb-2 ${selectedChoice.isCorrect ? 'text-sakato-success' : 'text-sakato-warning'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {selectedChoice.isCorrect ? 'Keputusan Tepat!' : 'Pembelajaran Penting'}
                </h4>
                <p className="text-sakato-text-muted leading-relaxed mb-4">{selectedChoice.feedback}</p>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className={`mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-btn font-bold text-lg transition-all ${
                isLastScenario
                  ? 'bg-sakato-success text-white hover:bg-green-600'
                  : 'bg-primary text-white hover:bg-primary-700'
              }`}
            >
              {isLastScenario ? (
                <>
                  <Shield className="w-5 h-5" strokeWidth={1.75} />
                  Selesaikan Simulasi
                </>
              ) : (
                <>
                  Lanjut ke Skenario Berikutnya
                  <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
                </>
              )}
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
