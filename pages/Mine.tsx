
import React from 'react';
import { Page } from '../types';

interface MineProps {
  onNavigate: (page: Page) => void;
}

const Mine: React.FC<MineProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-32">
      <header className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-black font-display tracking-tighter italic">个人中心</h1>
        </div>
        <button className="text-white/40 hover:text-white transition-colors">
          <span className="material-symbols-outlined text-[28px]">settings</span>
        </button>
      </header>

      <section className="px-8 pt-4 pb-6 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="size-24 rounded-full border-4 border-[#1A3A6B] overflow-hidden p-1 bg-gradient-to-br from-primary to-primary-dark">
            <img 
              src={imageUrl} 
              className="w-full h-full rounded-full object-cover" 
              alt="" 
            />
          </div>
          <button className="absolute bottom-1 right-1 size-7 bg-primary rounded-full border-2 border-[#0B1E3B] flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-background-dark text-sm font-black">edit</span>
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="text-white text-2xl font-black font-display">张晓艺</h2>
            <span className="material-symbols-outlined text-primary text-sm fill">female</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-[#1A3A6B]/50 text-primary text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 border border-primary/20">
              <span className="material-symbols-outlined text-[12px] fill">verified</span>
              已认证学员
            </span>
          </div>
        </div>

        <div className="w-full grid grid-cols-3 gap-4 px-2">
          {[
            { label: '练习时长', value: '128小时' },
            { label: '获得证书', value: '12' },
            { label: '综合评分', value: '98.5' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-white text-xl font-black font-display mb-1">{item.value}</div>
              <div className="text-white/30 text-[10px] font-medium whitespace-nowrap">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-5 bg-primary rounded-full"></div>
          <h3 className="text-white text-lg font-black font-display tracking-tight">作品发行</h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-surface-dark/40 border border-white/5 p-5 rounded-[2rem] flex items-center gap-4 active:bg-white/10 transition-all group">
             <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-2xl fill">video_call</span>
             </div>
             <div>
                <h4 className="text-white text-sm font-black font-display">视频彩铃发行</h4>
                <p className="text-white/30 text-[10px] font-bold tracking-tight">让演奏成为他人的来电风景</p>
             </div>
             <span className="material-symbols-outlined text-white/10 ml-auto">chevron_right</span>
          </div>
          <div className="bg-surface-dark/40 border border-white/5 p-5 rounded-[2rem] flex items-center gap-4 active:bg-white/10 transition-all group">
             <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-2xl fill">album</span>
             </div>
             <div>
                <h4 className="text-white text-sm font-black font-display">咪咕音乐发行</h4>
                <p className="text-white/30 text-[10px] font-bold tracking-tight">开启全球数字流媒体发行</p>
             </div>
             <span className="material-symbols-outlined text-white/10 ml-auto">chevron_right</span>
          </div>
        </div>
      </section>

      <section className="px-5 grid grid-cols-2 gap-4">
        <div onClick={() => onNavigate(Page.MyPerformances)} className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 active:bg-[#1A3A6B] transition-all flex flex-col justify-between h-40">
          <div>
            <div className="size-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4 shadow-inner">
              <span className="material-symbols-outlined text-2xl fill">theater_comedy</span>
            </div>
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-white text-sm font-black font-display tracking-tight">我的展演</h4>
              <span className="material-symbols-outlined text-white/10 text-base">arrow_forward</span>
            </div>
          </div>
          <div className="space-y-1.5">
             <div className="flex justify-between items-center bg-white/5 rounded-lg px-2 py-1">
               <span className="text-[10px] text-white/30 font-bold">云端</span>
               <span className="text-[10px] text-primary font-black">2个在展</span>
             </div>
             <div className="flex justify-between items-center bg-white/5 rounded-lg px-2 py-1">
               <span className="text-[10px] text-white/30 font-bold">线下</span>
               <span className="text-[10px] text-white/60 font-black">1个进行中</span>
             </div>
          </div>
        </div>

        <div className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 active:bg-[#1A3A6B] transition-all relative overflow-hidden flex flex-col justify-between h-40">
          <div>
            <div className="size-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4">
              <span className="material-symbols-outlined text-2xl fill">folder_managed</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-white text-sm font-black">作品管理</h4>
            </div>
          </div>
          <p className="text-[10px] text-white/30 font-medium">12个作品 | 1待发布</p>
        </div>

        <div className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 active:bg-[#1A3A6B] transition-all flex flex-col justify-between h-32">
          <div>
            <div className="size-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
              <span className="material-symbols-outlined text-2xl fill">shopping_bag</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-white text-sm font-black">我的订单</h4>
              <span className="material-symbols-outlined text-white/10 text-base">arrow_forward</span>
            </div>
          </div>
          <p className="text-[10px] text-white/30 font-medium">购买记录</p>
        </div>

        <div className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 relative overflow-hidden flex flex-col justify-between h-32">
          <div>
            <div className="size-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <span className="material-symbols-outlined text-2xl fill">auto_fix_high</span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <h4 className="text-white text-sm font-black tracking-tight">智能精修</h4>
            </div>
          </div>
          <p className="text-[10px] text-white/30 font-medium">已完成 5 件</p>
        </div>
      </section>
    </div>
  );
};

export default Mine;
