import React, { useState } from 'react';
import { ChevronRight, Check, Zap, Youtube, Timer as TimerIcon } from 'lucide-react';
import { SetRow } from './SetRow.jsx';
import { Timer } from './Timer.jsx';
import { ytSearchUrl } from '../data/program.js';

export function ExerciseCard({ exercise, exKey, state, updateState, onStartTimer, isPower }) {
  const [expanded, setExpanded] = useState(false);
  const sets = exercise.sets;
  const setData = state.sets?.[exKey] || {};
  const doneCount = Array.from({ length: sets }).filter((_, i) => setData[i]?.done).length;
  const complete = doneCount === sets;

  return (
    <div className={`rounded-xl ${complete ? 'bg-emerald-950/30 border-emerald-800/50' : 'bg-zinc-900 border-zinc-800'} border transition-colors`}>
      <button
        onClick={() => setExpanded(e => !e)}
        className="w-full p-3 flex items-start gap-3 text-left active:bg-zinc-800/50 rounded-xl"
      >
        <div className="flex-shrink-0 mt-0.5">
          {complete ? (
            <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Check className="w-5 h-5 text-white" />
            </div>
          ) : (
            <div className={`w-9 h-9 rounded-lg border-2 ${isPower ? 'border-red-500/60' : 'border-zinc-700'} flex items-center justify-center font-mono font-black text-xs ${isPower ? 'text-red-500' : 'text-zinc-500'}`}>
              {doneCount}/{sets}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="font-bold text-zinc-100 leading-tight">{exercise.name}</div>
            {isPower && <Zap className="w-4 h-4 text-red-500" />}
          </div>
          <div className="text-xs text-zinc-400 mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5">
            <span><span className="text-zinc-600">sets</span> <span className="font-mono text-zinc-300">{exercise.sets}</span></span>
            <span><span className="text-zinc-600">reps</span> <span className="font-mono text-zinc-300">{exercise.reps}</span></span>
            {exercise.tempo !== '—' && (
              <span><span className="text-zinc-600">tempo</span> <span className="font-mono text-amber-500">{exercise.tempo}</span></span>
            )}
            <span><span className="text-zinc-600">who</span> <span className="font-mono text-zinc-300">{exercise.who}</span></span>
          </div>
        </div>
        <ChevronRight className={`w-5 h-5 text-zinc-600 flex-shrink-0 transition-transform ${expanded ? 'rotate-90' : ''}`} />
      </button>

      {expanded && (
        <div className="px-3 pb-3 border-t border-zinc-800 pt-3 space-y-3">
          {exercise.notes && (
            <div className="text-xs text-amber-400/90 italic px-1">{exercise.notes}</div>
          )}
          <div className="flex items-center justify-between gap-2">
            <a
              href={ytSearchUrl(exercise.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-zinc-400 px-3 py-1.5 bg-zinc-800 rounded-lg active:bg-zinc-700"
            >
              <Youtube className="w-4 h-4 text-red-500" /> Form demo
            </a>
            <div className="text-xs text-zinc-500 font-mono">Load: <span className="text-zinc-300">{exercise.load}</span></div>
          </div>

          <div className="space-y-1.5">
            {Array.from({ length: sets }).map((_, i) => (
              <SetRow
                key={i}
                setIdx={i}
                totalSets={sets}
                data={setData[i]}
                onUpdate={(d) => updateState(s => ({
                  ...s,
                  sets: {
                    ...s.sets,
                    [exKey]: { ...s.sets?.[exKey], [i]: d }
                  }
                }))}
              />
            ))}
          </div>

          {exercise.isInterval ? (
            <div className="bg-zinc-950/60 rounded-lg p-3 border border-zinc-800">
              <div className="text-xs text-zinc-500 mb-2 font-bold tracking-wider">INTERVAL TIMER</div>
              <Timer initialSeconds={exercise.workSec} soundEnabled={state.soundEnabled !== false} />
            </div>
          ) : (
            <button
              onClick={() => onStartTimer(90)}
              className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 active:bg-amber-500 active:text-black text-amber-500 rounded-lg font-bold tracking-wide text-sm transition-colors flex items-center justify-center gap-2"
            >
              <TimerIcon className="w-4 h-4" /> Start 90s rest
            </button>
          )}
        </div>
      )}
    </div>
  );
}
