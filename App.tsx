import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import DisasterSelection from './components/DisasterSelection';
import Simulation from './components/Simulation';
import Reflection from './components/Reflection';
import Leaderboard from './components/Leaderboard';
import Settings from './components/Settings';
import About from './components/About';
import AnalyticsDashboard from './components/AnalyticsDashboard';

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/disasters" element={<DisasterSelection />} />
          <Route path="/simulation/:disasterType" element={<Simulation />} />
          <Route path="/reflection/:disasterType" element={<Reflection />} />
          <Route path="/analytics" element={<AnalyticsDashboard />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
