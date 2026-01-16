
import React, { useState } from 'react';
import { Page } from '../types';

interface AIRefineProps {
  onNavigate: (page: Page) => void;
}

const AIRefine: React.FC<AIRefineProps> = ({ onNavigate }) => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="flex flex-col min-h-full bg-background-dark">
      <header className="sticky top-0 z-20 glass px-4 py-3 flex items-center gap-3 shadow-sm">
        <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/80">arrow_back</button>
        <div>
          <h1 className="text-white text-base font-bold">AI 智慧琴房</h1>
          <span className="text-[9px] text-white/50 tracking-wider uppercase leading-none block">AI SMART PRACTICE ROOM</span>
        </div>
      </header>

      <main className="flex-1 p-4 pb-24">
        <div className="bg-surface-dark rounded-2xl border border-white/5 p-6 mb-4 flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            <span className="text-[10px] text-white/40">实时音频采集</span>
          </div>
          
          <div className="h-32 flex items-center gap-1 mb-8">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className={`w-1 rounded-full bg-primary transition-all duration-300 ${isRecording ? 'animate-bounce' : 'h-2'}`}
                style={{ height: isRecording ? `${Math.random() * 100}%` : '8px', animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>

          <button 
            onClick={() => setIsRecording(!isRecording)}
            className={`size-20 rounded-full flex items-center justify-center shadow-lg transition-all active:scale-90 ${isRecording ? 'bg-red-500' : 'bg-primary'}`}
          >
            <span className="material-symbols-outlined text-3xl text-background-dark fill">
              {isRecording ? 'stop' : 'mic'}
            </span>
          </button>
          <p className="mt-4 text-sm text-white/60">{isRecording ? '正在监听演奏...' : '点击开始 AI 陪练'}</p>
        </div>

        <div className="space-y-3">
          <h3 className="text-white font-bold text-sm">AI 测评报告 (最近)</h3>
          {[
            { song: '练习曲 Op.299 No.1', score: 92, date: '10分钟前', issue: '速度略快' },
            { song: '莫扎特 C大调奏鸣曲', score: 85, date: '昨天', issue: '力度不够均匀' },
          ].map((item, idx) => (
            <div key={idx} className="bg-surface-dark/40 border border-white/5 p-4 rounded-xl flex items-center justify-between">
              <div>
                <h4 className="text-white text-sm font-medium">{item.song}</h4>
                <div className="flex gap-2 items-center mt-1">
                  <span className="text-[10px] text-white/40">{item.date}</span>
                  <span className="text-[10px] text-primary/80">建议：{item.issue}</span>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-primary text-xl font-bold font-display">{item.score}</span>
                <span className="text-[9px] text-white/30">综合得分</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-white/5 z-50">
        <button 
          onClick={() => onNavigate(Page.Registration)}
          className="w-full bg-primary py-3 rounded-full text-background-dark font-bold text-sm active:scale-[0.98] transition-all"
        >
          查看考级曲目库
        </button>
      </div>
    </div>
  );
};

export default AIRefine;
