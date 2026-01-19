
import React, { useState } from 'react';
import { Page } from '../types';

interface MyPerformancesProps {
  onNavigate: (page: Page) => void;
}

const MyPerformances: React.FC<MyPerformancesProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'cloud' | 'offline'>('cloud');
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  const cloudWorks = [
    { title: '2026 春季钢琴独奏 - 萧邦', date: '2026-03-15', views: '1.2k', status: '已展示' },
    { title: '古筝独奏《渔舟唱晚》', date: '2026-01-20', views: '850', status: '已展示' }
  ];

  const offlineEvents = [
    { title: '2026 中国音乐学院优秀作品展演', date: '2026-04-15', status: '准考证已生成', location: '北京 · 国音音乐厅', active: true },
    { title: '2025 全国青少年大奖赛 (复赛)', date: '2025-11-10', status: '已获银奖', location: '上海 · 东方艺术中心', active: false }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-6">
      <header className="sticky top-0 z-30 glass px-6 py-6 border-b border-white/5 flex items-center gap-4">
        <button onClick={() => onNavigate(Page.Mine)} className="material-symbols-outlined text-white/60">arrow_back_ios</button>
        <div>
          <h1 className="text-white text-xl font-black font-display tracking-tight italic">我的展演</h1>
          <p className="text-[9px] text-primary/60 font-black uppercase tracking-[0.3em]">Performance Records</p>
        </div>
      </header>

      {/* 标签切换 */}
      <nav className="flex p-2 m-6 bg-white/5 rounded-2xl border border-white/5">
        <button 
          onClick={() => setActiveTab('cloud')}
          className={`flex-1 py-3 text-[11px] font-black transition-all rounded-xl ${activeTab === 'cloud' ? 'bg-primary text-background-dark shadow-lg' : 'text-white/40'}`}
        >
          云展演 (作品)
        </button>
        <button 
          onClick={() => setActiveTab('offline')}
          className={`flex-1 py-3 text-[11px] font-black transition-all rounded-xl ${activeTab === 'offline' ? 'bg-primary text-background-dark shadow-lg' : 'text-white/40'}`}
        >
          线下展演 (项目)
        </button>
      </nav>

      <main className="px-6 space-y-6">
        {activeTab === 'cloud' ? (
          <div className="space-y-4">
            {cloudWorks.map((work, i) => (
              <div key={i} className="bg-white/5 rounded-3xl p-4 flex gap-4 border border-white/5 active:bg-white/10 transition-all">
                <div className="size-20 rounded-2xl overflow-hidden shrink-0">
                  <img src={imageUrl} className="w-full h-full object-cover" alt="" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-0.5">
                  <div>
                    <h4 className="text-white text-sm font-black font-display leading-tight">{work.title}</h4>
                    <p className="text-white/40 text-[10px] font-bold mt-1 uppercase tracking-widest">{work.date}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-[10px] font-black flex items-center gap-1">
                      <span className="material-symbols-outlined text-xs fill">visibility</span> {work.views}
                    </span>
                    <span className="text-white/20 text-[10px] font-bold italic">{work.status}</span>
                  </div>
                </div>
              </div>
            ))}
            <button className="w-full py-4 border-2 border-dashed border-white/10 rounded-3xl flex flex-col items-center justify-center gap-1 text-white/30 active:bg-white/5 transition-all">
              <span className="material-symbols-outlined text-2xl">add_circle</span>
              <span className="text-[10px] font-bold tracking-widest uppercase">发布新的云展演作品</span>
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {offlineEvents.map((event, i) => (
              <div key={i} className={`bg-[#152B4D]/60 rounded-3xl p-6 border ${event.active ? 'border-primary/20 shadow-xl' : 'border-white/5'}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-white text-base font-black font-display leading-tight mb-1">{event.title}</h4>
                    <p className="text-white/40 text-[9px] font-bold tracking-widest uppercase">{event.location}</p>
                  </div>
                  <span className={`text-[10px] font-black italic px-3 py-1 rounded-full ${event.active ? 'bg-primary/20 text-primary' : 'bg-white/5 text-white/20'}`}>
                    {event.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-white/40 text-sm">calendar_month</span>
                    <span className="text-white/60 text-[11px] font-bold">{event.date}</span>
                  </div>
                  {event.active && (
                    <button className="bg-primary px-4 py-1.5 rounded-full text-background-dark text-[10px] font-black tracking-widest italic shadow-lg shadow-primary/20">
                      查看详情
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default MyPerformances;
