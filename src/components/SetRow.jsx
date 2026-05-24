import React from 'react';
import { Check } from 'lucide-react';

export function SetRow({ setIdx, totalSets, data, onUpdate }) {
  const done = data?.done || false;
  return (
    <div className={`flex items-center gap-2 p-2 rounded-lg ${done ? 'bg-emerald-950/40 border border-emerald-800/50' : 'bg-zinc-800/40'}`}>
      <div className={`font-mono font-bold text-xs w-8 text-center ${done ? 'text-emerald-500' : 'text-zinc-500'}`}>
        {setIdx + 1}/{totalSets}
      </div>
      <input
        type="number"
        inputMode="decimal"
        placeholder="lb"
        value={data?.weight || ''}
        onChange={e => onUpdate({ ...data, weight: e.target.value })}
        className="bg-zinc-900 border border-zinc-700 rounded px-2 py-1.5 w-20 text-zinc-100 font-mono text-sm focus:border-amber-500 outline-none"
      />
      <input
        type="number"
        inputMode="numeric"
        placeholder="reps"
        value={data?.reps || ''}
        onChange={e => onUpdate({ ...data, reps: e.target.value })}
        className="bg-zinc-900 border border-zinc-700 rounded px-2 py-1.5 w-16 text-zinc-100 font-mono text-sm focus:border-amber-500 outline-none"
      />
      <select
        value={data?.rpe || ''}
        onChange={e => onUpdate({ ...data, rpe: e.target.value })}
        className="bg-zinc-900 border border-zinc-700 rounded px-1 py-1.5 w-14 text-zinc-100 font-mono text-xs outline-none focus:border-amber-500"
      >
        <option value="">RPE</option>
        {[6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10].map(n => (
          <option key={n} value={n}>{n}</option>
        ))}
      </select>
      <button
        onClick={() => onUpdate({ ...data, done: !done })}
        className={`ml-auto w-9 h-9 rounded-lg flex items-center justify-center active:scale-90 transition-transform ${done ? 'bg-emerald-600 text-white' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'}`}
      >
        <Check className="w-5 h-5" />
      </button>
    </div>
  );
}
