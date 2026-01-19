
import React from 'react';
import { Page } from '../types';

interface OfflineStageProps {
  onNavigate: (page: Page) => void;
}

const OfflineStage: React.FC<OfflineStageProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  const pastHighlights = [
    { id: 'p1', title: '2025 冬季民族乐盛典', tag: '优秀作品奖', img: imageUrl },
    { id: 'p2', title: '“琴韵东方”青少年钢琴赛', tag: '高光时刻', img: imageUrl },
    { id: 'p3', title: '咪咕音乐·国风原创大赏', tag: '人气作品', img: imageUrl },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-24">
      {/* 顶部标题栏 */}
      <header className="sticky top-0 z-50 glass px-6 py-6 flex items-center gap-4">
        <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/60">arrow_back_ios</button>
        <div>
          <h1 className="text-white text-xl font-black font-display tracking-tight italic">展演舞台报名</h1>
          <p className="text-[8px] text-primary/60 font-bold uppercase tracking-[0.2em]">Live Performance Portal</p>
        </div>
      </header>

      {/* 状态快捷导航 - 更加轻量化 */}
      <div className="flex px-6 py-4 gap-3 overflow-x-auto no-scrollbar">
        {['进行中', '即将开放', '精彩回顾'].map((label, i) => (
          <button 
            key={i}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-[11px] font-black tracking-widest transition-all ${
              i === 0 ? 'bg-primary text-background-dark shadow-lg shadow-primary/20' : 'bg-white/5 text-white/30 border border-white/5'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <main className="px-5 space-y-10 mt-2">
        {/* 正在进行的项目 - 极致参考图还原 */}
        <section>
          <div className="relative bg-[#11294d]/40 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/5 group">
            {/* 封面图容器 */}
            <div className="relative h-64 overflow-hidden">
              <img src={imageUrl} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Exhibition" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11294d] via-transparent to-black/20"></div>
              
              {/* 图片上的活跃标签 */}
              <div className="absolute top-6 right-6 bg-[#E13232] text-white text-[9px] font-black px-4 py-1.5 rounded-full shadow-2xl animate-pulse tracking-widest uppercase italic border border-white/20">
                 Registration Active
              </div>
            </div>

            {/* 内容描述区 */}
            <div className="p-8">
              <h3 className="text-white font-black text-2xl mb-6 leading-tight tracking-tight font-display pr-4">
                2026 中国音乐学院<br/>春季优秀作品展演
              </h3>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-white/60 text-[12px] font-bold">
                   <span className="material-symbols-outlined text-xl text-primary/80 fill">calendar_month</span>
                   <span className="tracking-tight">2026.04.15 - 04.20</span>
                </div>
                <div className="flex items-center gap-3 text-white/60 text-[12px] font-bold">
                   <span className="material-symbols-outlined text-xl text-primary/80 fill">location_on</span>
                   <span className="tracking-tight">北京 · 国音音乐厅</span>
                </div>
              </div>

              {/* 主行动按钮 */}
              <button 
                onClick={() => onNavigate(Page.Registration)}
                className="w-full bg-primary text-background-dark py-4 rounded-2xl font-black text-sm tracking-widest italic flex items-center justify-center gap-3 active:scale-95 transition-all shadow-[0_10px_30px_rgba(242,185,13,0.3)]"
              >
                立即报名参演
                <span className="material-symbols-outlined text-lg fill">confirmation_number</span>
              </button>
            </div>
          </div>
        </section>

        {/* 精彩回顾展示区 - 作品展示逻辑 */}
        <section className="space-y-6 pb-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-primary rounded-full"></div>
              <h3 className="text-white text-lg font-black font-display tracking-tight">往届精彩回顾</h3>
            </div>
            <button className="text-white/30 text-[10px] font-bold tracking-widest uppercase flex items-center">
              查看全部 <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>

          {/* 横向作品画廊 */}
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x">
            {pastHighlights.map((item) => (
              <div key={item.id} className="min-w-[200px] snap-center group">
                <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/5 mb-3">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[8px] text-white/80 border border-white/5 font-bold mb-1 inline-block">
                      {item.tag}
                    </span>
                    <h4 className="text-white text-[12px] font-black font-display line-clamp-1">{item.title}</h4>
                  </div>
                  {/* 播放按钮 */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-white/80 text-4xl fill">play_circle</span>
                  </div>
                </div>
              </div>
            ))}
            
            {/* 更多回顾占位 */}
            <div className="min-w-[140px] aspect-[3/4] rounded-[2rem] border border-white/5 bg-white/5 flex flex-col items-center justify-center gap-2 snap-center">
               <span className="material-symbols-outlined text-white/10 text-3xl">auto_awesome_motion</span>
               <span className="text-white/20 text-[9px] font-bold tracking-widest uppercase">更多记录</span>
            </div>
          </div>
        </section>
      </main>

      {/* 底部浮动引导 - 仅在滑动到下方时可见（可选交互增强） */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-max pointer-events-none">
        <p className="bg-black/60 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full text-white/40 text-[9px] font-bold tracking-widest uppercase shadow-2xl">
          展示自我 · 站上属于你的舞台
        </p>
      </div>
    </div>
  );
};

export default OfflineStage;
