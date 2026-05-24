import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const formatTime = (sec) => {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
};

const playBeep = (ctxRef, freq = 880, duration = 0.15) => {
  try {
    if (!ctxRef.current) ctxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    const ctx = ctxRef.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.frequency.value = freq;
    osc.type = 'square';
    gain.gain.value = 0.1;
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
    osc.stop(ctx.currentTime + duration);
  } catch {}
};

export function Timer({ initialSeconds = 90, autostart = false, onComplete, soundEnabled = true }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(autostart);
  const [target, setTarget] = useState(initialSeconds);
  const intervalRef = useRef(null);
  const audioCtxRef = useRef(null);

  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setSeconds(s => {
          if (s <= 1) {
            clearInterval(intervalRef.current);
            setRunning(false);
            if (soundEnabled) playBeep(audioCtxRef);
            onComplete && onComplete();
            return 0;
          }
          if (s <= 4 && soundEnabled) playBeep(audioCtxRef, 440, 0.05);
          return s - 1;
        });
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, soundEnabled, onComplete]);

  const reset = (sec = target) => { setSeconds(sec); setRunning(false); };
  const adjust = (delta) => {
    setSeconds(Math.max(0, seconds + delta));
    setTarget(Math.max(0, target + delta));
  };

  const pct = target > 0 ? ((target - seconds) / target) * 100 : 0;
  const isWarning = seconds <= 10 && seconds > 0;
  const isDone = seconds === 0;

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative w-44 h-44">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgb(39 39 42)" strokeWidth="6" />
          <circle
            cx="50" cy="50" r="44" fill="none"
            stroke={isDone ? 'rgb(16 185 129)' : isWarning ? 'rgb(239 68 68)' : 'rgb(245 158 11)'}
            strokeWidth="6" strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 44}`}
            strokeDashoffset={`${2 * Math.PI * 44 * (1 - pct / 100)}`}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`font-mono text-5xl font-black tracking-tight ${isDone ? 'text-emerald-500' : isWarning ? 'text-red-500 animate-pulse' : 'text-zinc-100'}`}>
            {formatTime(seconds)}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button onClick={() => adjust(-15)} className="px-3 py-2 bg-zinc-800 rounded-lg text-zinc-300 font-mono text-sm active:bg-zinc-700">-15</button>
        <button
          onClick={() => setRunning(r => !r)}
          className={`px-6 py-2 rounded-lg font-bold tracking-wide text-black ${running ? 'bg-red-500' : 'bg-amber-500'} active:scale-95 transition-transform`}
        >
          {running ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </button>
        <button onClick={() => reset()} className="px-3 py-2 bg-zinc-800 rounded-lg text-zinc-300 active:bg-zinc-700">
          <RotateCcw className="w-4 h-4" />
        </button>
        <button onClick={() => adjust(15)} className="px-3 py-2 bg-zinc-800 rounded-lg text-zinc-300 font-mono text-sm active:bg-zinc-700">+15</button>
      </div>
    </div>
  );
}
