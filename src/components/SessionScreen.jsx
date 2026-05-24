import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { ExerciseCard } from './ExerciseCard.jsx';
import { Timer } from './Timer.jsx';
import { PROGRAM, exerciseKey } from '../data/program.js';

export function SessionScreen({ weekIdx, sessionIdx, state, updateState, onBack }) {
  const week = PROGRAM.weeks[weekIdx];
  const session = week.sessions[sessionIdx];
  const [showTimer, setShowTimer] = useState(false);
  const [timerSec, setTimerSec] = useState(90);

  const totalEx = session.blocks.reduce((sum, b) => sum + b.exercises.length, 0);
  const doneEx = session.blocks.reduce((sum, b, bIdx) =>
    sum + b.exercises.filter((ex, eIdx) => {
      const k = exerciseKey(weekIdx, sessionIdx, bIdx, eIdx);
      const sd = state.sets?.[k] || {};
      return Array.from({ length: ex.sets }).every((_, i) => sd[i]?.done);
    }).length, 0);
  const pct = totalEx > 0 ? Math.round((doneEx / totalEx) * 100) : 0;

  const startTimer = (sec) => { setTimerSec(sec); setShowTimer(true); };

  return (
    <div className="min-h-screen bg-zinc-950 pb-32">
      <div className="sticky top-0 z-10 bg-zinc-950/95 backdrop-blur border-b border-zinc-800">
        <div className="px-4 py-3 flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 active:bg-zinc-800 rounded-lg">
            <ArrowLeft className="w-5 h-5 text-zinc-400" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] tracking-[0.2em] font-bold text-amber-500">
              WK {week.num} · {week.label} · {session.day} {session.date}
            </div>
            <div className="font-black text-lg leading-tight text-zinc-100 truncate font-display">
              {session.theme}
            </div>
          </div>
          <div className="text-right">
            <div className="font-mono text-2xl font-black text-amber-500">{pct}<span className="text-sm text-zinc-500">%</span></div>
            <div className="text-[10px] text-zinc-500">{doneEx}/{totalEx}</div>
          </div>
        </div>
        <div className="h-1 bg-zinc-900">
          <div className="h-full bg-amber-500 transition-all" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="px-4 py-4 space-y-5">
        {session.blocks.map((block, bIdx) => {
          const isPowerBlock = /power|rotational|agility|speed|finisher/i.test(block.name);
          return (
            <div key={bIdx}>
              <div className="flex items-center gap-2 mb-2 px-1">
                <div className={`text-xs tracking-[0.15em] font-black ${isPowerBlock ? 'text-red-500' : 'text-zinc-400'} font-display`}>
                  {isPowerBlock && '⚡ '}{block.name.toUpperCase()}
                </div>
                <div className="flex-1 h-px bg-zinc-800" />
              </div>
              <div className="space-y-2">
                {block.exercises.map((ex, eIdx) => (
                  <ExerciseCard
                    key={eIdx}
                    exercise={ex}
                    exKey={exerciseKey(weekIdx, sessionIdx, bIdx, eIdx)}
                    state={state}
                    updateState={updateState}
                    onStartTimer={startTimer}
                    isPower={isPowerBlock}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {showTimer && (
        <div className="fixed bottom-0 inset-x-0 z-20 bg-zinc-900 border-t border-amber-500/30 shadow-2xl">
          <div className="px-4 py-3 flex items-center justify-between border-b border-zinc-800">
            <div className="text-[10px] tracking-[0.2em] font-bold text-amber-500">REST TIMER</div>
            <button onClick={() => setShowTimer(false)} className="p-1 active:bg-zinc-800 rounded">
              <X className="w-5 h-5 text-zinc-400" />
            </button>
          </div>
          <div className="py-4">
            <Timer initialSeconds={timerSec} autostart={true} soundEnabled={state.soundEnabled !== false} />
          </div>
        </div>
      )}
    </div>
  );
}
