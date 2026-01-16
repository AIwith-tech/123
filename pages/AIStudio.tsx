
import React from 'react';
import { Page } from '../types';

interface AIStudioProps {
  onNavigate: (page: Page) => void;
}

const AIStudio: React.FC<AIStudioProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans">
      <header className="sticky top-0 z-20 glass px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/60 hover:text-primary transition-colors">arrow_back_ios</button>
          <div>
            <h1 className="text-white text-base font-black font-display tracking-tight">AI工作室</h1>
            <p className="text-[8px] text-primary/60 font-bold tracking-[0.3em] uppercase">Intelligence Music Lab</p>
          </div>
        </div>
        <span className="material-symbols-outlined text-primary/40 animate-pulse">settings_input_component</span>
      </header>

      <main className="p-6 space-y-8">
        {/* AI歌曲精修卡片 */}
        <div className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden transition-all">
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-8">
              <div className="size-16 rounded-[1.5rem] bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-background-dark shadow-2xl shadow-primary/30">
                <span className="material-symbols-outlined text-4xl font-black fill">auto_fix_high</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-primary/60 font-black tracking-widest uppercase">SINGLE SERVICE</span>
                <p className="text-white text-2xl font-black font-display mt-1 tracking-tight">AI歌曲精修</p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-white/40 text-[10px] font-bold tracking-widest leading-relaxed">基于百万级音频数据训练的 AI 大模型，全方位重塑您的演奏音质，达到录音室级别表现。</p>
              <div className="grid grid-cols-2 gap-3">
                {['全频段降噪', '智能混响', '音高校准', '动态均衡'].map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/80 text-[11px] font-bold">
                    <span className="size-1.5 rounded-full bg-primary/40"></span> {t}
                  </div>
                ))}
              </div>
            </div>

            <button className="w-full bg-white text-background-dark py-4 rounded-2xl font-black text-sm tracking-widest italic flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-white/5 group-hover:bg-primary">
              立即开启 · ¥29.9 / 次
              <span className="material-symbols-outlined text-lg">bolt</span>
            </button>
          </div>
          {/* 装饰性背景 */}
          <div className="absolute top-0 right-0 size-48 bg-primary/5 rounded-full blur-[60px] -mr-24 -mt-24 group-hover:bg-primary/10 transition-all"></div>
        </div>

        {/* AI 陪练卡片 */}
        <div className="group relative bg-[#11294d]/40 backdrop-blur-3xl p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden transition-all">
          <div className="relative z-10">
            <div className="flex items-start justify-between mb-8">
              <div className="size-16 rounded-[1.5rem] bg-[#1a3a6b] border border-white/10 flex items-center justify-center text-primary shadow-xl">
                <span className="material-symbols-outlined text-4xl font-black fill">pace</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-primary/60 font-black tracking-widest uppercase">SUBSCRIPTION</span>
                <p className="text-white text-2xl font-black font-display mt-1 tracking-tight">AI 智慧陪练</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[
                { label: '实时纠错', value: '99%' },
                { label: '智能测评', value: '24h' },
                { label: '反馈时延', value: '0.1s' }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/5 p-3 rounded-2xl text-center">
                  <span className="block text-primary text-sm font-black mb-0.5">{item.value}</span>
                  <span className="text-[8px] text-white/30 font-bold tracking-tighter">{item.label}</span>
                </div>
              ))}
            </div>

            <button onClick={() => onNavigate(Page.AIRefine)} className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black text-sm tracking-widest italic flex items-center justify-center gap-3 active:scale-95 transition-all hover:bg-white/10">
              开启陪伴 · ¥30.0 / 月
              <span className="material-symbols-outlined text-lg">verified</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AIStudio;
