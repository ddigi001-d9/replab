import React from 'react';
import { Home, BarChart3 } from 'lucide-react';

export function BottomNav({ view, setView }) {
  const items = [
    { id: 'home', icon: Home, label: 'TODAY' },
    { id: 'stats', icon: BarChart3, label: 'BOARD' }
  ];
  return (
    <div className="fixed bottom-0 inset-x-0 z-30 bg-zinc-950/95 backdrop-blur border-t border-zinc-800">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto" style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}>
        {items.map(item => {
          const Icon = item.icon;
          const active = view === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex flex-col items-center gap-0.5 px-6 py-1.5 ${active ? 'text-amber-500' : 'text-zinc-500'} active:scale-95 transition-transform`}
            >
              <Icon className="w-5 h-5" />
              <div className="text-[10px] font-black tracking-wider font-display">{item.label}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
