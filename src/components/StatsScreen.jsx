import React from 'react';
import { Trophy } from 'lucide-react';
import { exerciseKey } from '../data/program.js';

export function StatsScreen({ program, sets }) {
  const allEntries = [];
  program.weeks.forEach((week, wIdx) => {
    week.sessions.forEach((session, sIdx) => {
      session.blocks.forEach((block, bIdx) => {
        block.exercises.forEach((ex, eIdx) => {
          const k = exerciseKey(wIdx, sIdx, bIdx, eIdx);
          const sd = sets?.[k] || {};
          Object.entries(sd).forEach(([setIdx, data]) => {
            if (data?.done && (data.weight || data.reps)) {
              allEntries.push({
                exercise: ex.name,
                week: week.num,
                day: session.day,
                date: session.date,
                weight: parseFloat(data.weight) || 0,
                reps: parseFloat(data.reps) || 0,
                rpe: data.rpe,
                who: ex.who
              });
            }
          });
        });
      });
    });
  });

  const byExercise = {};
  allEntries.forEach(e => {
    if (!byExercise[e.exercise]) byExercise[e.exercise] = { entries: [], topWeight: 0, totalSets: 0, who: e.who };
    byExercise[e.exercise].entries.push(e);
    byExercise[e.exercise].topWeight = Math.max(byExercise[e.exercise].topWeight, e.weight);
    byExercise[e.exercise].totalSets += 1;
  });

  const sorted = Object.entries(byExercise).sort((a, b) => b[1].totalSets - a[1].totalSets);

  const totalSetsLogged = allEntries.length;
  const totalSessions = new Set(allEntries.map(e => `${e.week}-${e.day}`)).size;
  const totalVolume = allEntries.reduce((sum, e) => sum + (e.weight * e.reps), 0);

  return (
    <div className="min-h-screen bg-zinc-950 pb-24 px-4 pt-6">
      <div className="text-[10px] tracking-[0.25em] text-amber-500 font-bold">REPLAB</div>
      <div className="font-black text-3xl text-zinc-100 mt-1 mb-5 font-display">THE BOARD</div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
          <div className="text-[10px] text-zinc-500 tracking-wider font-bold">SESSIONS</div>
          <div className="font-mono font-black text-2xl text-amber-500 mt-1">{totalSessions}</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
          <div className="text-[10px] text-zinc-500 tracking-wider font-bold">SETS</div>
          <div className="font-mono font-black text-2xl text-amber-500 mt-1">{totalSetsLogged}</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
          <div className="text-[10px] text-zinc-500 tracking-wider font-bold">VOLUME</div>
          <div className="font-mono font-black text-2xl text-amber-500 mt-1">
            {Math.round(totalVolume).toLocaleString()}<span className="text-xs text-zinc-500 ml-1">lb</span>
          </div>
        </div>
      </div>

      {sorted.length === 0 ? (
        <div className="bg-zinc-900 border border-zinc-800 border-dashed rounded-xl p-8 text-center">
          <Trophy className="w-10 h-10 text-zinc-700 mx-auto mb-2" />
          <div className="text-zinc-500 text-sm">No sets logged yet.</div>
          <div className="text-zinc-600 text-xs mt-1">Start a session to track lifts and PRs here.</div>
        </div>
      ) : (
        <>
          <div className="text-[10px] tracking-[0.2em] text-zinc-400 font-bold mb-2">TOP MOVEMENTS</div>
          <div className="space-y-2">
            {sorted.map(([name, data]) => (
              <div key={name} className="bg-zinc-900 border border-zinc-800 rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-bold text-zinc-100 text-sm">{name}</div>
                  <div className="text-[10px] font-mono text-zinc-500">{data.who}</div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <div className="text-[10px] text-zinc-500 tracking-wider font-bold">TOP WEIGHT</div>
                    <div className="font-mono font-black text-lg text-amber-500">
                      {data.topWeight || '—'}<span className="text-xs text-zinc-500 ml-1">{data.topWeight ? 'lb' : ''}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 tracking-wider font-bold">SETS</div>
                    <div className="font-mono font-black text-lg text-zinc-100">{data.totalSets}</div>
                  </div>
                  <div className="flex-1" />
                  <div className="text-right">
                    <div className="text-[10px] text-zinc-500 tracking-wider font-bold">LAST</div>
                    <div className="font-mono text-xs text-zinc-300">
                      {data.entries[data.entries.length - 1].weight || '—'} × {data.entries[data.entries.length - 1].reps || '—'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
