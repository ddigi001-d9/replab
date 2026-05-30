import React from 'react';
import { Play, Check } from 'lucide-react';
import { exerciseKey, getCurrentSession } from '../data/program.js';
import { PEOPLE } from '../data/program.js';

export function HomeScreen({ program, profile, sets, onCycleProfile, onOpenSession }) {
  const current = getCurrentSession(program);
  const today = new Date();
  const dateStr = today.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

  const currentWeek = program.weeks[current.weekIdx];
  const currentSession = currentWeek.sessions[current.sessionIdx];
  const person = PEOPLE.find(p => p.name === profile) || PEOPLE[0];

  const sessionProgress = (wIdx, sIdx) => {
    const week = program.weeks[wIdx];
    const session = week.sessions[sIdx];
    const total = session.blocks.reduce((sum, b) => sum + b.exercises.reduce((s, ex) => s + ex.sets, 0), 0);
    let done = 0;
    session.blocks.forEach((b, bIdx) => {
      b.exercises.forEach((ex, eIdx) => {
        const k = exerciseKey(wIdx, sIdx, bIdx, eIdx);
        const sd = sets?.[k] || {};
        Array.from({ length: ex.sets }).forEach((_, i) => { if (sd[i]?.done) done++; });
      });
    });
    return { done, total, pct: total > 0 ? Math.round((done / total) * 100) : 0 };
  };

  return (
    <div className="min-h-screen bg-zinc-950 pb-24">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgb(245 158 11) 35px, rgb(245 158 11) 36px)'
        }} />
        <div className="relative px-4 pt-6 pb-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] tracking-[0.25em] text-amber-500 font-bold">REPLAB</div>
              <div className="text-zinc-500 text-xs mt-0.5">{dateStr}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onCycleProfile}
                className="flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full active:bg-zinc-800"
              >
                <div className={`w-2 h-2 rounded-full ${person.dot}`} />
                <div className="font-mono text-xs font-bold text-zinc-200">{person.name}</div>
              </button>
            </div>
          </div>

          {program.note && (
            <div className="mt-4 text-[11px] leading-snug text-amber-400/90 bg-amber-500/5 border border-amber-500/20 rounded-lg px-3 py-2">
              {program.note}
            </div>
          )}

          <div className="mt-5">
            <div className="text-[10px] tracking-[0.2em] text-zinc-500 font-bold mb-1">UP NEXT · TODAY</div>
            <div className="font-black text-3xl leading-[1.05] text-zinc-100 font-display" style={{ letterSpacing: '-0.01em' }}>
              {currentSession.theme.toUpperCase()}
            </div>
            <div className="text-amber-500 text-sm font-mono mt-1">
              Week {currentWeek.num} · {currentWeek.label} · {currentSession.day} {currentSession.date}
            </div>
            <button
              onClick={() => onOpenSession(current.weekIdx, current.sessionIdx)}
              className="mt-4 w-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-black font-black tracking-wider rounded-xl py-4 flex items-center justify-center gap-2 active:scale-[0.98] transition-transform font-display"
            >
              <Play className="w-5 h-5 fill-black" /> START SESSION
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 mt-2 space-y-5">
        {program.weeks.map((week, wIdx) => (
          <div key={wIdx}>
            <div className="flex items-baseline gap-2 mb-2 px-1">
              <div className="font-black text-xs tracking-[0.2em] text-zinc-200 font-display">
                WEEK {week.num}
              </div>
              <div className="text-amber-500 text-[10px] tracking-[0.2em] font-bold">{week.label}</div>
              <div className="flex-1 h-px bg-zinc-800" />
            </div>
            <div className="text-xs text-zinc-500 italic mb-2 px-1">{week.blurb}</div>
            <div className="grid grid-cols-2 gap-2">
              {week.sessions.map((sess, sIdx) => {
                const prog = sessionProgress(wIdx, sIdx);
                const isCurrent = wIdx === current.weekIdx && sIdx === current.sessionIdx;
                return (
                  <button
                    key={sIdx}
                    onClick={() => onOpenSession(wIdx, sIdx)}
                    className={`text-left p-3 rounded-xl border active:scale-[0.97] transition-transform ${
                      isCurrent ? 'bg-amber-500/10 border-amber-500/50' :
                      prog.pct === 100 ? 'bg-emerald-950/30 border-emerald-800/50' :
                      'bg-zinc-900 border-zinc-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="font-mono font-black text-xs text-zinc-300">{sess.day} {sess.date}</div>
                      {prog.pct === 100 ? <Check className="w-4 h-4 text-emerald-500" /> :
                        prog.pct > 0 ? <div className="text-[10px] font-mono text-amber-500 font-bold">{prog.pct}%</div> :
                        null}
                    </div>
                    <div className="text-xs text-zinc-200 leading-snug font-semibold">{sess.theme}</div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
