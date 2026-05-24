import React, { useState } from 'react';
import { HomeScreen } from './components/HomeScreen.jsx';
import { SessionScreen } from './components/SessionScreen.jsx';
import { StatsScreen } from './components/StatsScreen.jsx';
import { BottomNav } from './components/BottomNav.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';

export default function App() {
  const [view, setView] = useState('home');
  const [openSession, setOpenSession] = useState(null);
  const [state, setState] = useLocalStorage('replab_state_v1', {
    sets: {},
    profile: 'D-Rock',
    soundEnabled: true
  });

  if (openSession) {
    return (
      <div className="max-w-md mx-auto">
        <SessionScreen
          weekIdx={openSession.weekIdx}
          sessionIdx={openSession.sessionIdx}
          state={state}
          updateState={setState}
          onBack={() => setOpenSession(null)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {view === 'home' && (
        <HomeScreen
          state={state}
          updateState={setState}
          onOpenSession={(w, s) => setOpenSession({ weekIdx: w, sessionIdx: s })}
        />
      )}
      {view === 'stats' && <StatsScreen state={state} />}
      <BottomNav view={view} setView={setView} />
    </div>
  );
}
