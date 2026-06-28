import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, SimulationState, DecisionRecord, AppSettings, DisasterType, UserLevel, CompletedSimulation } from '../types';
import { mockUser, initialBadges, getLevelFromXP, getXPForNextLevel, levelNames } from '../data/mockData';

interface AppContextType {
  user: User;
  settings: AppSettings;
  simulationState: SimulationState | null;
  startSimulation: (disasterType: DisasterType) => void;
  makeDecision: (scenarioId: string, choiceId: string, xpEarned: number) => void;
  completeSimulation: () => CompletedSimulation;
  addBadge: (disasterType: DisasterType) => void;
  updateSettings: (settings: Partial<AppSettings>) => void;
  getXPProgress: () => { current: number; required: number; percentage: number };
  levelNames: Record<UserLevel, string>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(() => {
    const saved = localStorage.getItem('sakato_user');
    return saved ? JSON.parse(saved) : mockUser;
  });

  const [settings, setSettings] = useState<AppSettings>(() => {
    const saved = localStorage.getItem('sakato_settings');
    return saved ? JSON.parse(saved) : { soundEnabled: true, darkMode: false };
  });

  const [simulationState, setSimulationState] = useState<SimulationState | null>(() => {
    const saved = localStorage.getItem('sakato_simulation');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('sakato_user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('sakato_settings', JSON.stringify(settings));
    if (settings.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [settings]);

  useEffect(() => {
    if (simulationState) {
      localStorage.setItem('sakato_simulation', JSON.stringify(simulationState));
    } else {
      localStorage.removeItem('sakato_simulation');
    }
  }, [simulationState]);

  const startSimulation = (disasterType: DisasterType) => {
    setSimulationState({
      disasterType,
      currentScenarioId: `${disasterType}-1`,
      score: 0,
      decisions: [],
      startTime: new Date(),
      isCompleted: false
    });
  };

  const makeDecision = (scenarioId: string, choiceId: string, xpEarned: number) => {
    if (!simulationState) return;

    const decision: DecisionRecord = {
      scenarioId,
      choiceId,
      isCorrect: xpEarned > 0,
      timestamp: new Date()
    };

    setSimulationState(prev => ({
      ...prev!,
      score: prev!.score + xpEarned,
      decisions: [...prev!.decisions, decision]
    }));
  };

  const completeSimulation = (): CompletedSimulation => {
    if (!simulationState) {
      throw new Error('No active simulation');
    }

    const correctDecisions = simulationState.decisions.filter(d => d.isCorrect).length;
    const totalDecisions = simulationState.decisions.length;
    const score = Math.round((correctDecisions / totalDecisions) * 100);

    const completed: CompletedSimulation = {
      disasterType: simulationState.disasterType,
      score,
      correctDecisions,
      totalDecisions,
      completedAt: new Date(),
      certificateId: score >= 80 ? `cert-${Date.now()}` : undefined
    };

    setUser(prev => {
      const newXP = prev.xp + simulationState.score;
      const newLevel = getLevelFromXP(newXP);
      const updatedSimulations = [...prev.completedSimulations];
      const existingIndex = updatedSimulations.findIndex(s => s.disasterType === simulationState.disasterType);
      if (existingIndex >= 0) {
        if (score > updatedSimulations[existingIndex].score) {
          updatedSimulations[existingIndex] = completed;
        }
      } else {
        updatedSimulations.push(completed);
      }

      return {
        ...prev,
        xp: newXP,
        level: newLevel,
        completedSimulations: updatedSimulations
      };
    });

    setSimulationState(null);
    return completed;
  };

  const addBadge = (disasterType: DisasterType) => {
    const badge = initialBadges.find(b => b.disasterType === disasterType);
    if (!badge) return;

    setUser(prev => {
      if (prev.badges.find(b => b.id === badge.id)) return prev;
      return {
        ...prev,
        badges: [...prev.badges, { ...badge, earnedAt: new Date() }]
      };
    });
  };

  const updateSettings = (newSettings: Partial<AppSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const getXPProgress = () => {
    const required = getXPForNextLevel(user.level);
    const currentLevelXP = user.level === 'beginner' ? 0 :
                           user.level === 'explorer' ? 1000 :
                           user.level === 'survivor' ? 2500 : 5000;
    const xpInCurrentLevel = user.xp - currentLevelXP;
    const xpNeededForNext = required - currentLevelXP;
    return {
      current: xpInCurrentLevel,
      required: xpNeededForNext,
      percentage: Math.min((xpInCurrentLevel / xpNeededForNext) * 100, 100)
    };
  };

  return (
    <AppContext.Provider value={{
      user,
      settings,
      simulationState,
      startSimulation,
      makeDecision,
      completeSimulation,
      addBadge,
      updateSettings,
      getXPProgress,
      levelNames
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
}
