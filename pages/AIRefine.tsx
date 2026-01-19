
import React, { useState } from 'react';
import { Page } from '../types';

interface AIRefineProps {
  onNavigate: (page: Page) => void;
}

const AIRefine: React.FC<AIRefineProps> = ({ onNavigate }) => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="flex flex-col min-h-full bg-background-dark">
      <header className="sticky top-0 z-20 glass px-4 py-3 flex items-center gap-3 shadow-sm border-b border-white/5">
        <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/80">arrow_back</button>
        <div>
          <h1 className="text-white text-base font-bold tracking-tight">智慧琴房</h1>
          <span className="text-[9px] text-white/50 tracking-wider uppercase leading-none block">SMART PRACTICE ROOM</span>
        </div>
      </header>

      <main className="flex-1 p-4 pb-24">
        <div className="bg-surface-dark rounded-3xl border border-white/5 p-8 mb-6 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-white/20'}`}></span>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">Monitoring Mode</span>
          </div>
          
          <div className="h-24 flex items-center gap-1.5 mb-10">
            {[...Array(24)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1 rounded-full bg-primary transition-all duration-300 ${isRecording ? 'animate-bounce' : 'h-2 opacity-20'}`}
                style={{ height: isRecording ? `${30 + Math.random() * 70}%` : '8px', animationDelay: `${i * 0.04}s` }}
              ></div>
            ))}
          </div>

          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`size-24 rounded-full flex items-center justify-center shadow-2xl transition-all active:scale-90 border-4 border-white/5 ${isRecording ? 'bg-red-500 shadow-red-500/20' : 'bg-primary shadow-primary/20'}`}
          >
            <span className="material-symbols-outlined text-4xl text-background-dark fill">
              {isRecording ? 'stop' : 'mic'}
            </span>
          </button>
          <p className="mt-6 text-xs font-black tracking-widest uppercase text-white/40">{isRecording ? '正在记录演奏细节...' : '点击开启智慧陪练'}</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-black text-sm font-display tracking-tight">历史练习报告</h3>
            <span className="text-[10px] text-white/20 font-bold uppercase tracking-widest">Recent Sessions</span>
          </div>
          {[
            { song: '练习曲 Op.299 No.1', score: 92, date: '10分钟前', issue: '速度略快' },
            { song: '莫扎特 C大调奏鸣曲', score: 85, date: '昨天', issue: '力度不够均匀' },
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-dark/40 border border-white/5 p-5 rounded-2xl flex items-center justify-between active:bg-white/5 transition-all">
              <div>
                <h4 className="text-white text-[13px] font-black font-display tracking-tight">{item.song}</h4>
                <div className="flex gap-3 items-center mt-2">
                  <span className="text-[9px] text-white/30 font-bold uppercase">{item.date}</span>
                  <span className="text-[9px] text-primary/80 font-bold">建议：{item.issue}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-primary text-2xl font-black font-display italic leading-none">{item.score}</span>
                <span className="text-[8px] text-white/20 font-bold uppercase tracking-tighter mt-1">Score</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="p-4 glass border-t border-white/10 z-50 fixed bottom-0 left-0 right-0" style={{ paddingBottom: 'calc(env(safe-area-inset-bottom) + 1rem)' }}>
        <button 
          onClick={() => onNavigate(Page.Registration)}
          className="w-full bg-primary py-4 rounded-2xl text-background-dark font-black text-sm tracking-widest italic active:scale-[0.98] transition-all shadow-xl shadow-primary/20"
        >
          查看配套考级曲目库
        </button>
      </div>
    </div>
  );
};

export default AIRefine;
