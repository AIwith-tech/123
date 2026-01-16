
import React, { useState } from 'react';
import { Page, PerformanceEvent } from '../types';

interface OfflineStageProps {
  onNavigate: (page: Page) => void;
}

const OfflineStage: React.FC<OfflineStageProps> = ({ onNavigate }) => {
  const [filter, setFilter] = useState<'ongoing' | 'upcoming' | 'ended'>('ongoing');

  const events: PerformanceEvent[] = [
    { id: '1', title: '2024 中国音乐学院春季优秀作品展演', date: '2024.04.15 - 04.20', location: '北京 · 国音音乐厅', status: 'ongoing', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8GUyqSsEPYOF1Fd4oqNpEpYOobpoAm7YTFKuN0M_38SgRQGkYRmFkEOpl3jCHPhYN-UFagDgiOyjatfhFYQs8-aqSpRhY4FojHuvUcsaSzj4eYsXIzLDk29zp5ZeyGIfZYbcTNMZ1LBgleaNo50BpeR3b280XqXtuxYpw_ChEPzCAcuMY-XoEN3m9ggWXs82VFsDgXAlM9l1tb-na9boAovj9OoUZ4RSmH-_UklbHz7aiHODFY5lvO1PpENAeeEfsf751c3B08TX' },
    { id: '2', title: '全国青少年钢琴大奖赛（上海站）', date: '2024.06.10', location: '上海 · 东方艺术中心', status: 'upcoming', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgn7oVibDI4dCxRYx2TjfMDCT1vX1RGkq1LAsPPd6D9pB3KpCAspieGpK9J6su1algSVnBplH5N0eCHJYDHyzflTCJI2ZRg0mUpFuOH1ykhkYrpE_ZtYRM9TIzd2_bZ9XLBKzRPDXRolAnrjQMvcn9S-EJ1G9Djg1Gz6Pss3-xVV5M-pXJuQbhpDkjY28-nF4A-IazzswMod6P_VkbidJhfLppKHI0bYHtOdS6j57ksIF23d_arsTnppA1EOuhi9FMwqtL7U8aCbjC' },
    { id: '3', title: '2023 冬季民乐盛典回顾展', date: '2023.12.01', location: '广州 · 星海音乐厅', status: 'ended', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA4nHkDteDdtjc2v7eoZHqP-8ETcx8E-3mrvvX2ZP6ypr4ZMR-Lfw7wHKnnf8u03ZtSHW6H-Ag3g4DDqgaObkvnSLDBezuT6Io-PlpVjSZ8kV8uSyjocBlledRNldYQB8qNgqdd1R95-JHH_tOhPdoIB1ss7KQAoIWO_gNx3aCXrQVcMtY6SLrh55BvNre6fQaokGxkF2zw7ckZ_iar9ZFxH8VuIB9kcEIDMWBm68WOj-1XrFR7JsZYTM-RK5Q2SzBuQI0E7zxfZGN' },
  ];

  const filteredEvents = events.filter(e => e.status === filter);

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B]">
      <header className="sticky top-0 z-20 glass px-6 py-5 flex items-center gap-5">
        <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/60">arrow_back_ios</button>
        <div>
          <h1 className="text-white text-base font-black font-display tracking-tight">展演舞台报名</h1>
          <p className="text-[8px] text-primary/60 font-bold uppercase tracking-[0.2em]">Live Performance Portal</p>
        </div>
      </header>

      {/* 状态筛选 */}
      <div className="flex justify-around p-4 border-b border-white/5">
        {[
          { id: 'ongoing', label: '进行中' },
          { id: 'upcoming', label: '即将开放' },
          { id: 'ended', label: '精彩回顾' }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setFilter(tab.id as any)}
            className={`text-[11px] font-black px-5 py-2 rounded-full transition-all tracking-wider ${filter === tab.id ? 'bg-primary text-background-dark shadow-xl shadow-primary/20' : 'bg-white/5 text-white/30 hover:bg-white/10'}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <main className="p-6 space-y-8 pb-24">
        {filteredEvents.length > 0 ? filteredEvents.map(event => (
          <div key={event.id} className="group relative bg-[#11294d]/40 border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all active:scale-[0.98]">
             <div className="h-56 relative overflow-hidden">
                <img src={event.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={event.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                {event.status === 'ongoing' && (
                  <div className="absolute top-5 right-5 bg-red-600 text-white text-[8px] font-black px-3 py-1.5 rounded-full shadow-2xl animate-pulse tracking-widest uppercase italic">
                     Registration Active
                  </div>
                )}
             </div>
             <div className="p-7">
                <h3 className="text-white font-black text-lg mb-4 leading-tight tracking-tight font-display">{event.title}</h3>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-white/40 text-[11px] font-bold font-sans">
                     <span className="material-symbols-outlined text-lg text-primary/60">event</span>
                     <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/40 text-[11px] font-bold font-sans">
                     <span className="material-symbols-outlined text-lg text-primary/60">location_on</span>
                     <span className="tracking-tight">{event.location}</span>
                  </div>
                </div>
                {event.status === 'ongoing' ? (
                  <button onClick={() => onNavigate(Page.Registration)} className="w-full bg-primary text-background-dark py-4 rounded-2xl font-black text-sm tracking-widest italic flex items-center justify-center gap-2 active:scale-95 transition-all shadow-xl shadow-primary/10">
                    立即报名参演
                    <span className="material-symbols-outlined text-lg">local_activity</span>
                  </button>
                ) : (
                  <button disabled className="w-full bg-white/5 text-white/20 py-4 rounded-2xl font-black text-sm cursor-not-allowed border border-white/5">
                    {event.status === 'upcoming' ? '名额即将开放 · 敬请关注' : '已闭幕 · 查看获奖名单'}
                  </button>
                )}
             </div>
          </div>
        )) : (
          <div className="py-32 flex flex-col items-center text-center">
             <span className="material-symbols-outlined text-white/10 text-7xl mb-6 font-light">auto_awesome_motion</span>
             <p className="text-white/30 text-xs font-bold tracking-[0.2em] uppercase">No events found in this category</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default OfflineStage;
