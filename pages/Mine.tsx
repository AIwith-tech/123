
import React from 'react';
import { Page } from '../types';

interface MineProps {
  onNavigate: (page: Page) => void;
}

const Mine: React.FC<MineProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-6">
      <header className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-black font-display tracking-tighter italic leading-none">个人中心</h1>
          <p className="text-[9px] text-primary/50 font-bold uppercase tracking-widest mt-0.5">Member Profile</p>
        </div>
        <button className="text-white/40">
          <span className="material-symbols-outlined text-xl">settings</span>
        </button>
      </header>

      <section className="px-6 pt-4 pb-4 flex flex-col items-center">
        <div className="relative mb-3">
          <div className="size-20 rounded-full border-[3px] border-[#1A3A6B] overflow-hidden p-0.5 bg-gradient-to-br from-primary to-primary-dark shadow-xl">
            <img 
              src={imageUrl} 
              className="w-full h-full rounded-full object-cover shadow-inner" 
              alt="" 
            />
          </div>
          <button className="absolute bottom-0 right-0 size-6 bg-primary rounded-full border-2 border-[#0B1E3B] flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-background-dark text-[10px] font-black">edit</span>
          </button>
        </div>
        
        <div className="text-center mb-5">
          <h2 className="text-white text-xl font-black font-display tracking-tight mb-1 leading-none">张晓艺 <span className="text-[10px] text-primary ml-1 opacity-60">Lv.8</span></h2>
          <span className="bg-primary/10 text-primary text-[8px] px-2 py-0.5 rounded-full border border-primary/20 font-black uppercase tracking-widest">
            Verified Scholar
          </span>
        </div>

        <div className="w-full grid grid-cols-3 gap-2 px-2 pb-6 border-b border-white/5">
          {[
            { label: '练习时长', value: '128H' },
            { label: '获得证书', value: '12' },
            { label: '综合评分', value: '98.5' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-white text-lg font-black font-display italic leading-none mb-1">{item.value}</div>
              <div className="text-white/20 text-[8px] font-bold uppercase tracking-tighter">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 恢复作品发行模块 */}
      <section className="px-6 mb-6 mt-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-1 h-4 bg-primary rounded-full shadow-[0_0_5px_#f2b90d]"></div>
          <h3 className="text-white text-base font-black font-display tracking-tight italic">作品发行</h3>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-[#152B4D]/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 active:bg-white/10 transition-all group">
             <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-xl fill">video_call</span>
             </div>
             <div>
                <h4 className="text-white text-[13px] font-black font-display">视频彩铃发行</h4>
                <p className="text-white/30 text-[9px] font-bold tracking-tight">让演奏成为他人的来电风景</p>
             </div>
             <span className="material-symbols-outlined text-white/10 ml-auto text-lg">chevron_right</span>
          </div>
          <div className="bg-[#152B4D]/40 border border-white/5 p-4 rounded-2xl flex items-center gap-4 active:bg-white/10 transition-all group">
             <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-all">
                <span className="material-symbols-outlined text-xl fill">album</span>
             </div>
             <div>
                <h4 className="text-white text-[13px] font-black font-display">咪咕音乐发行</h4>
                <p className="text-white/30 text-[9px] font-bold tracking-tight">开启全球数字流媒体发行</p>
             </div>
             <span className="material-symbols-outlined text-white/10 ml-auto text-lg">chevron_right</span>
          </div>
        </div>
      </section>

      {/* 底部功能网格 */}
      <section className="px-5 mb-4">
        <div className="grid grid-cols-2 gap-3">
          <div 
            onClick={() => onNavigate(Page.MyPerformances)} 
            className="relative aspect-[1.7/1] bg-[#152B4D]/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
          >
            <div className="size-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
              <span className="material-symbols-outlined text-lg fill">theater_comedy</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-white text-base font-black font-display tracking-tight leading-none mb-1">我的展演</h4>
              <p className="text-white/20 text-[9px] font-bold italic">参演记录</p>
            </div>
          </div>

          <div 
            className="relative aspect-[1.7/1] bg-[#152B4D]/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
          >
            <div className="size-8 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
              <span className="material-symbols-outlined text-lg fill">folder_managed</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-white text-base font-black font-display tracking-tight leading-none mb-1">作品管理</h4>
              <p className="text-white/20 text-[9px] font-bold italic">12个已上架</p>
            </div>
          </div>

          <div 
            className="relative aspect-[1.7/1] bg-[#152B4D]/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
          >
            <div className="size-8 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400 border border-green-500/20">
              <span className="material-symbols-outlined text-lg fill">shopping_bag</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-white text-base font-black font-display tracking-tight leading-none mb-1">我的订单</h4>
              <p className="text-white/20 text-[9px] font-bold italic">购买历史</p>
            </div>
          </div>

          <div 
            className="relative aspect-[1.7/1] bg-[#152B4D]/60 rounded-2xl border border-white/5 p-4 flex flex-col justify-between group active:scale-95 transition-all overflow-hidden"
          >
            <div className="size-8 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/20">
              <span className="material-symbols-outlined text-lg fill">auto_fix_high</span>
            </div>
            <div className="relative z-10">
              <h4 className="text-white text-base font-black font-display tracking-tight leading-none mb-1">智能精修</h4>
              <p className="text-white/20 text-[9px] font-bold italic">服务进度</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mine;
