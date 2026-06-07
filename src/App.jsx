import React, { useState } from 'react';
import { HomeScreen } from './components/HomeScreen.jsx';
import { SessionScreen } from './components/SessionScreen.jsx';
import { StatsScreen } from './components/StatsScreen.jsx';
import { BottomNav } from './components/BottomNav.jsx';
import { useLocalStorage } from './hooks/useLocalStorage.js';
import { PROGRAMS, PEOPLE, programIdForPerson } from './data/program.js';

// Migrate the original single-program state shape into per-program logs.
// Old: { sets: {...}, profile, soundEnabled }
// New: { logs: { ramp: { sets }, logan: { sets } }, profile, soundEnabled }
function migrate(state) {
  if (state.logs) return state;
  const legacySets = state.sets || {};
  const { sets, ...rest } = state;
  return {
    ...rest,
    logs: {
      ramp: { sets: legacySets },
      logan: { sets: {} }
    }
  };
}

// One-time wipe of Logan's logged sets for the Jun 8, 2026 program restart.
// Bump the version to wipe again on every device.
const LOGAN_RESET_VERSION = 1;

function normalize(state) {
  let s = migrate(state);
  if ((s.resets?.logan || 0) < LOGAN_RESET_VERSION) {
    s = {
      ...s,
      logs: { ...s.logs, logan: { ...s.logs?.logan, sets: {} } },
      resets: { ...s.resets, logan: LOGAN_RESET_VERSION }
    };
  }
  return s;
}

export default function App() {
  const [view, setView] = useState('home');
  const [openSession, setOpenSession] = useState(null);
  const [rawState, setState] = useLocalStorage('replab_state_v1', {
    logs: { ramp: { sets: {} }, logan: { sets: {} } },
    profile: 'D-Rock',
    soundEnabled: true
  });

  const state = normalize(rawState);
  const profile = state.profile || 'D-Rock';
  const programId = programIdForPerson(profile);
  const program = PROGRAMS[programId];
  const sets = state.logs?.[programId]?.sets || {};

  // Scoped updater: mutate only the active program's sets.
  const updateSets = (fn) => setState(prev => {
    const s = normalize(prev);
    const cur = s.logs?.[programId]?.sets || {};
    const next = typeof fn === 'function' ? fn(cur) : fn;
    return {
      ...s,
      logs: { ...s.logs, [programId]: { ...s.logs?.[programId], sets: next } }
    };
  });

  const cycleProfile = () => setState(prev => {
    const s = normalize(prev);
    const idx = PEOPLE.findIndex(p => p.name === (s.profile || 'D-Rock'));
    const nextName = PEOPLE[(idx + 1) % PEOPLE.length].name;
    return { ...s, profile: nextName };
  });

  if (openSession) {
    return (
      <div className="max-w-md mx-auto">
        <SessionScreen
          program={program}
          weekIdx={openSession.weekIdx}
          sessionIdx={openSession.sessionIdx}
          sets={sets}
          updateSets={updateSets}
          soundEnabled={state.soundEnabled !== false}
          onBack={() => setOpenSession(null)}
        />
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      {view === 'home' && (
        <HomeScreen
          program={program}
          profile={profile}
          sets={sets}
          onCycleProfile={cycleProfile}
          onOpenSession={(w, s) => setOpenSession({ weekIdx: w, sessionIdx: s })}
        />
      )}
      {view === 'stats' && <StatsScreen program={program} sets={sets} />}
      <BottomNav view={view} setView={setView} />
    </div>
  );
}
