
import React from 'react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  return (
    <div className="flex flex-col min-h-full pb-28 bg-[#0B1E3B] font-sans">
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes rotate-glow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .ai-studio-glow::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: conic-gradient(
            transparent 0deg,
            transparent 270deg,
            #f2b90d 360deg
          );
          animation: rotate-glow 3s linear infinite;
          z-index: 0;
        }
      `}} />

      {/* 顶部导航 */}
      <header className="sticky top-0 z-30 px-6 py-5 flex items-center justify-between glass border-b border-white/5">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-black italic tracking-tighter leading-none mb-1 font-display">
            ME<span className="text-primary not-italic ml-0.5">学院</span>
          </h1>
          <div className="flex items-center gap-1.5">
            <p className="text-[9px] text-white/40 font-bold tracking-wider">咪咕音乐 × 中国音乐学院 联合出品</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <span className="material-symbols-outlined text-white/40 text-2xl hover:text-primary transition-colors">search</span>
          <span className="material-symbols-outlined text-white/40 text-2xl">notifications</span>
        </div>
      </header>

      {/* 轮播推广图 */}
      <section className="px-5 pt-4">
        <div className="relative h-48 rounded-[2.5rem] overflow-hidden shadow-2xl group active:scale-[0.98] transition-all border border-white/5">
          <img 
            src={imageUrl} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
            alt="Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1E3B]/95 via-[#0B1E3B]/30 to-transparent"></div>
          <div className="absolute inset-y-0 left-8 flex flex-col justify-center max-w-[80%]">
            <div className="inline-flex items-center gap-1.5 bg-primary/20 backdrop-blur-md px-2 py-0.5 rounded-full mb-2 border border-primary/20 w-fit">
               <span className="material-symbols-outlined text-[10px] text-primary fill">stars</span>
               <span className="text-primary text-[8px] font-black uppercase tracking-widest">Event Live</span>
            </div>
            <h2 className="text-white text-2xl font-black mb-1 font-display tracking-tight leading-tight">国风乐器·视频彩铃<br/><span className="text-primary italic">百万流量赛开启报名</span></h2>
            <p className="text-white/40 text-[9px] mb-4 font-medium uppercase tracking-widest">寻找最美国风演奏者 · 赢取丰厚奖金池</p>
            <button onClick={() => onNavigate(Page.Registration)} className="bg-primary text-background-dark text-[10px] font-black px-6 py-2.5 rounded-full w-max shadow-xl shadow-primary/20 flex items-center gap-2">
               立即上传作品参赛
               <span className="material-symbols-outlined text-xs">arrow_outward</span>
            </button>
          </div>
        </div>
      </section>

      {/* 核心入口矩阵 */}
      <section className="px-5 py-8 grid grid-cols-2 gap-4">
        {/* AI 工作室 - 增加了流光跑马灯效果 */}
        <div 
          onClick={() => onNavigate(Page.AIStudio)}
          className="relative aspect-square rounded-[2rem] p-[1px] group active:scale-95 transition-all overflow-hidden ai-studio-glow shadow-2xl shadow-primary/10"
        >
          <div className="relative z-10 w-full h-full bg-gradient-to-br from-[#1A3A6B] to-[#11294d] rounded-[calc(2.5rem-1px)] p-6 flex flex-col justify-between overflow-hidden">
            <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
              <span className="material-symbols-outlined text-3xl fill">auto_awesome</span>
            </div>
            <div>
              <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">AI 工作室</h4>
              <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Intelligent Lab</p>
            </div>
            <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/[0.03] text-8xl font-light rotate-12">bolt</span>
          </div>
        </div>

        {/* 课程中心 */}
        <div 
          onClick={() => onNavigate(Page.CourseCenter)}
          className="relative aspect-square bg-[#152B4D]/60 rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-3xl fill">auto_stories</span>
          </div>
          <div>
            <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">课程中心</h4>
            <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Academy</p>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/[0.03] text-8xl font-light rotate-12">menu_book</span>
        </div>

        {/* 展演舞台 */}
        <div 
          onClick={() => onNavigate(Page.OfflineStage)}
          className="relative aspect-square bg-[#152B4D]/60 rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-3xl fill">stadium</span>
          </div>
          <div>
            <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">展演舞台</h4>
            <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Live Stage</p>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/[0.03] text-8xl font-light rotate-12">theater_comedy</span>
        </div>

        {/* 考级报名 */}
        <div 
          onClick={() => onNavigate(Page.Registration)}
          className="relative aspect-square bg-[#152B4D]/60 rounded-[2rem] border border-white/5 p-6 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
        >
          <div className="size-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all duration-300">
            <span className="material-symbols-outlined text-3xl fill">app_registration</span>
          </div>
          <div>
            <h4 className="text-white text-base font-black mb-0.5 font-display tracking-tight">考级报名</h4>
            <p className="text-white/30 text-[9px] font-bold uppercase tracking-widest">Level Exam</p>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-white/[0.03] text-8xl font-light rotate-12">verified_user</span>
        </div>
      </section>

      {/* 今日精选 */}
      <section className="px-5 mb-10">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-white font-black text-lg font-display tracking-tight">今日精选推荐</h3>
          <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase">EDITOR'S PICKS</span>
        </div>
        
        <div className="space-y-4">
          {[
            { title: '莫扎特：D大调变奏曲深度解析', teacher: '李名阳 教授', price: '¥199' },
            { title: '大师班：小提琴揉弦技巧进阶', teacher: '张羽 教授', price: '¥258' }
          ].map((item, i) => (
            <div 
              key={i} 
              onClick={() => onNavigate(Page.CourseDetail)} 
              className="bg-[#152B4D]/30 p-4 rounded-[1.8rem] flex items-center gap-5 border border-[#1A3A6B]/50 active:bg-white/5 transition-all group"
            >
              <div className="size-20 bg-[#0B1E3B] rounded-2xl overflow-hidden shrink-0 shadow-inner group-hover:scale-105 transition-transform border border-white/[0.03]">
                <img src={imageUrl} className="w-full h-full object-cover opacity-80" alt={item.title} />
              </div>
              <div className="flex-1 flex flex-col justify-center py-1">
                <div className="mb-2">
                  <h5 className="text-white text-[13px] font-black line-clamp-1 mb-1 font-display tracking-tight">{item.title}</h5>
                  <span className="text-[10px] text-white/40 font-bold tracking-wider">{item.teacher}</span>
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
