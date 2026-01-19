
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  return (
    <div className="flex flex-col min-h-full pb-10 bg-[#0B1E3B] font-sans">
      <header className="sticky top-0 z-30 px-6 pt-6 pb-6 glass border-b border-white/5">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-white text-3xl font-black italic tracking-widest leading-none mb-1 font-display">
              ME<span className="text-primary not-italic ml-2 text-2xl">学院</span>
            </h1>
            <p className="text-[10px] text-white/50 font-bold tracking-wider">咪咕音乐 × 中国音乐学院 联合出品</p>
          </div>
          <div className="flex items-center gap-5">
            <span className="material-symbols-outlined text-white/40 text-2xl">search</span>
            <span className="material-symbols-outlined text-white/60 text-2xl relative">
              notifications
              <span className="absolute top-0.5 right-0.5 size-2 bg-red-500 rounded-full border border-[#0B1E3B]"></span>
            </span>
          </div>
        </div>
      </header>

      <section className="px-5 pt-4 relative z-10">
        <div className="relative h-52 rounded-[2.5rem] overflow-hidden shadow-2xl group active:scale-[0.98] transition-all border border-white/5">
          <img 
            src={imageUrl} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1E3B]/95 via-[#0B1E3B]/30 to-transparent"></div>
          <div className="absolute inset-y-0 left-8 flex flex-col justify-center max-w-[80%]">
            <div className="inline-flex items-center gap-1.5 bg-primary/20 backdrop-blur-md px-2 py-0.5 rounded-full mb-3 border border-primary/20 w-fit">
               <span className="material-symbols-outlined text-[10px] text-primary fill">stars</span>
               <span className="text-primary text-[8px] font-black tracking-widest">活动进行中</span>
            </div>
            <h2 className="text-white text-2xl font-black mb-1 font-display tracking-tight leading-tight">国风乐器·视频彩铃<br/><span className="text-primary italic text-xl">百万流量赛开启报名</span></h2>
            <p className="text-white/40 text-[9px] mb-4 font-medium tracking-widest">寻找最美国风演奏者 · 赢取丰厚奖金池</p>
            <button onClick={() => onNavigate(Page.Registration)} className="bg-primary text-background-dark text-[10px] font-black px-6 py-2.5 rounded-full w-max shadow-xl shadow-primary/20 flex items-center gap-2">
               立即上传作品参赛
               <span className="material-symbols-outlined text-xs">arrow_outward</span>
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-8 grid grid-cols-2 gap-4">
        <div 
          onClick={() => onNavigate(Page.AIStudio)}
          className="relative aspect-square bg-gradient-to-br from-[#1A3A6B] to-[#11294d] rounded-[2rem] border border-cyan-500/30 p-6 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.15)]"
        >
          {/* 扫描动画层 */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-[2rem]">
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent absolute left-0 animate-scan shadow-[0_0_15px_#22d3ee]"></div>
          </div>

          <div className="absolute -right-4 -bottom-4 opacity-10 pointer-events-none">
             <span className="material-symbols-outlined text-9xl font-light rotate-12 text-cyan-400">psychology</span>
          </div>
          <div className="absolute inset-0 border-2 border-cyan-400/20 rounded-[2rem] animate-pulse"></div>
          <div className="relative z-10 size-12 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-background-dark transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
            <span className="material-symbols-outlined text-3xl fill animate-[pulse_2s_ease-in-out_infinite]">science</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">AI实验室</h4>
            <p className="text-cyan-400/50 text-[9px] font-bold italic flex items-center gap-1">
              <span className="size-1 rounded-full bg-cyan-400 animate-ping"></span>
              智能创作空间
            </p>
          </div>
        </div>

        <div 
          onClick={() => onNavigate(Page.CourseCenter)}
          className="relative aspect-square bg-[#152B4D]/60 rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
             <span className="material-symbols-outlined text-9xl font-light rotate-12 text-white">menu_book</span>
          </div>
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-3xl fill">auto_stories</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">课程中心</h4>
            <p className="text-white/30 text-[9px] font-bold italic">专业体系课程</p>
          </div>
        </div>

        <div 
          onClick={() => onNavigate(Page.OfflineStage)}
          className="relative aspect-square bg-[#152B4D]/60 rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
             <span className="material-symbols-outlined text-9xl font-light rotate-12 text-white">theater_comedy</span>
          </div>
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-3xl fill">stadium</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">展演舞台</h4>
            <p className="text-white/30 text-[9px] font-bold italic">线下演出机会</p>
          </div>
        </div>

        <div 
          onClick={() => onNavigate(Page.Registration)}
          className="relative aspect-square bg-[#152B4D]/60 rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
             <span className="material-symbols-outlined text-9xl font-light rotate-12 text-white">verified</span>
          </div>
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-3xl fill">app_registration</span>
          </div>
          <div className="relative z-10">
            <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">考级报名</h4>
            <p className="text-white/30 text-[9px] font-bold italic">权威考级服务</p>
          </div>
        </div>
      </section>

      <section className="px-5 mb-10">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#f2b90d] rounded-full shadow-[0_0_8px_#f2b90d] shrink-0"></div>
            <h3 className="text-white font-black text-lg font-display tracking-tight">今日精选推荐</h3>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { title: '莫扎特：D大调变奏曲深度解析', teacher: '李名阳 教授', price: '¥199' },
            { title: '大师班：小提琴揉弦技巧进阶', teacher: '张羽 教授', price: '¥258' }
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(Page.CourseCenter)} 
              className="bg-[#152B4D]/30 p-4 rounded-[1.8rem] flex items-center gap-5 border border-[#1A3A6B]/50 active:bg-white/5 transition-all group"
            >
              <div className="size-20 bg-[#0B1E3B] rounded-2xl overflow-hidden shrink-0 shadow-inner group-hover:scale-105 transition-transform border border-white/[0.03]">
                <img src={imageUrl} className="w-full h-full object-cover opacity-80" alt="" />
              </div>
              <div className="flex-1 flex flex-col justify-center py-1">
                <div className="mb-2">
                  <h5 className="text-white text-[13px] font-black line-clamp-1 mb-1 font-display tracking-tight">{item.title}</h5>
                  <span className="text-[10px] text-white/40 font-bold">{item.teacher}</span>
                </div>
                <div>
                  <span className="text-primary text-[14px] font-black font-display tracking-wider italic">{item.price}</span>
                </div>
              </div>
              <div className="pr-1">
                <span className="material-symbols-outlined text-white/10 text-xl group-hover:text-primary transition-colors">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
