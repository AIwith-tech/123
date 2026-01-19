
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  return (
    <div className="flex flex-col min-h-full pb-6 bg-[#0B1E3B] font-sans">
      <header className="sticky top-0 z-30 px-6 pt-4 pb-4 glass border-b border-white/5">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-black italic tracking-widest leading-none mb-0.5 font-display">
              ME<span className="text-primary not-italic ml-1.5 text-xl">学院</span>
            </h1>
            <p className="text-[9px] text-white/50 font-bold tracking-wider">咪咕音乐 X 中国音乐学院 联合出品</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white/40 text-xl">search</span>
            <span className="material-symbols-outlined text-white/60 text-xl relative">
              notifications
              <span className="absolute top-0 right-0 size-1.5 bg-red-500 rounded-full border border-[#0B1E3B]"></span>
            </span>
          </div>
        </div>
      </header>

      <section className="px-5 pt-3 relative z-10">
        <div className="relative h-40 rounded-[2rem] overflow-hidden shadow-xl group active:scale-[0.98] transition-all border border-white/5">
          <img 
            src={imageUrl} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1E3B]/95 via-[#0B1E3B]/20 to-transparent"></div>
          <div className="absolute inset-y-0 left-6 flex flex-col justify-center max-w-[85%]">
            <div className="inline-flex items-center gap-1 bg-primary/20 backdrop-blur-md px-1.5 py-0.5 rounded-full mb-2 border border-primary/20 w-fit">
               <span className="material-symbols-outlined text-[8px] text-primary fill">stars</span>
               <span className="text-primary text-[7px] font-black tracking-widest">HOT</span>
            </div>
            <h2 className="text-white text-lg font-black mb-0.5 font-display tracking-tight leading-tight">国风乐器视频彩铃赛</h2>
            <p className="text-white/40 text-[8px] mb-3 font-medium tracking-wider">寻找最美国风演奏者 · 赢取丰厚奖金</p>
            <button onClick={() => onNavigate(Page.Registration)} className="bg-primary text-background-dark text-[9px] font-black px-4 py-2 rounded-full w-max shadow-lg shadow-primary/20 flex items-center gap-1.5">
               立即报名参赛
               <span className="material-symbols-outlined text-[10px]">arrow_outward</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-4 grid grid-cols-2 gap-3">
        {/* AI实验室 */}
        <div 
          onClick={() => onNavigate(Page.AIStudio)}
          className="relative aspect-[1.7/1] bg-gradient-to-br from-[#1A3A6B] to-[#11294d] rounded-2xl border border-cyan-500/30 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.1)]"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent absolute left-0 animate-scan shadow-[0_0_8px_rgba(34,211,238,0.1)]"></div>
          </div>
          <div className="absolute -right-2 -bottom-2 opacity-10 pointer-events-none">
             <span className="material-symbols-outlined text-6xl font-light rotate-12 text-cyan-400">psychology</span>
          </div>
          <div className="relative z-10 size-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <span className="material-symbols-outlined text-xl fill animate-pulse">science</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black font-display tracking-tight">AI实验室</h4>
            <p className="text-cyan-400/60 text-[10px] font-bold italic">智能创作空间</p>
          </div>
        </div>

        {/* 课程商城 */}
        <div 
          onClick={() => onNavigate(Page.CourseCenter)}
          className="relative aspect-[1.7/1] bg-[#152B4D]/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="absolute -right-2 -bottom-2 opacity-5 pointer-events-none">
             <span className="material-symbols-outlined text-6xl font-light rotate-12 text-white">menu_book</span>
          </div>
          <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-xl fill">auto_stories</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black font-display tracking-tight">课程商城</h4>
            <p className="text-white/30 text-[10px] font-bold italic">专业体系课程</p>
          </div>
        </div>

        {/* 展演舞台 */}
        <div 
          onClick={() => onNavigate(Page.OfflineStage)}
          className="relative aspect-[1.7/1] bg-[#152B4D]/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="absolute -right-2 -bottom-2 opacity-5 pointer-events-none">
             <span className="material-symbols-outlined text-6xl font-light rotate-12 text-white">theater_comedy</span>
          </div>
          <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-xl fill">stadium</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black font-display tracking-tight">展演舞台</h4>
            <p className="text-white/30 text-[10px] font-bold italic">线下演出机会</p>
          </div>
        </div>

        {/* 考级报名 */}
        <div 
          onClick={() => onNavigate(Page.Registration)}
          className="relative aspect-[1.7/1] bg-[#152B4D]/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="absolute -right-2 -bottom-2 opacity-5 pointer-events-none">
             <span className="material-symbols-outlined text-6xl font-light rotate-12 text-white">verified</span>
          </div>
          <div className="size-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-xl fill">app_registration</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black font-display tracking-tight">考级报名</h4>
            <p className="text-white/30 text-[10px] font-bold italic">权威考级服务</p>
          </div>
        </div>
      </section>

      <section className="px-5 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#f2b90d] rounded-full shadow-[0_0_5px_#f2b90d] shrink-0"></div>
            <h3 className="text-white font-black text-base font-display tracking-tight">今日精选推荐</h3>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { title: '莫扎特：D大调变奏曲深度解析', teacher: '李名阳 教授', price: '¥199' },
            { title: '大师班：小提琴揉弦技巧进阶', teacher: '张羽 教授', price: '¥258' }
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(Page.CourseCenter)} 
              className="bg-[#152B4D]/30 p-3 rounded-2xl flex items-center gap-4 border border-[#1A3A6B]/50 active:bg-white/5 transition-all group"
            >
              <div className="size-16 bg-[#0B1E3B] rounded-xl overflow-hidden shrink-0 shadow-inner group-hover:scale-105 transition-transform border border-white/[0.03]">
                <img src={imageUrl} className="w-full h-full object-cover opacity-80" alt="" />
              </div>
              <div className="flex-1 flex flex-col justify-center py-0.5">
                <div className="mb-1">
                  <h5 className="text-white text-xs font-black line-clamp-1 font-display tracking-tight">{item.title}</h5>
                  <span className="text-[9px] text-white/40 font-bold">{item.teacher}</span>
                </div>
                <div>
                  <span className="text-primary text-xs font-black font-display tracking-wider italic">{item.price}</span>
                </div>
              </div>
              <div className="pr-1">
                <span className="material-symbols-outlined text-white/10 text-lg group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
