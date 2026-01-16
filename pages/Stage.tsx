
import React from 'react';
import { Page } from '../types';

interface StageProps {
  onNavigate: (page: Page) => void;
}

const Stage: React.FC<StageProps> = ({ onNavigate }) => {
  const ringtoneFeeds = [
    { 
      id: 1, 
      user: '指尖艺术', 
      title: '古筝版《大鱼》绝美意境', 
      desc: '每一次拨弦都是对大海的告白，让来电也充满诗意。#国风 #古筝 #治愈系',
      downloads: '12w', 
      likes: '5.6w',
      comments: '3.2k',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA4nHkDteDdtjc2v7eoZHqP-8ETcx8E-3mrvvX2ZP6ypr4ZMR-Lfw7wHKnnf8u03ZtSHW6H-Ag3g4DDqgaObkvnSLDBezuT6Io-PlpVjSZ8kV8uSyjocBlledRNldYQB8qNgqdd1R95-JHH_tOhPdoIB1ss7KQAoIWO_gNx3aCXrQVcMtY6SLrh55BvNre6fQaokGxkF2zw7ckZ_iar9ZFxH8VuIB9kcEIDMWBm68WOj-1XrFR7JsZYTM-RK5Q2SzBuQI0E7zxfZGN' 
    },
    { 
      id: 2, 
      user: '钢琴少女CC', 
      title: '《克罗地亚狂想曲》燃情时刻', 
      desc: '用指尖点燃冬日的激情，这首钢琴曲绝对是彩铃首选！#钢琴 #考级必备 #燃向',
      downloads: '8.4w', 
      likes: '1.2w',
      comments: '1.5k',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgn7oVibDI4dCxRYx2TjfMDCT1vX1RGkq1LAsPPd6D9pB3KpCAspieGpK9J6su1algSVnBplH5N0eCHJYDHyzflTCJI2ZRg0mUpFuOH1ykhkYrpE_ZtYRM9TIzd2_bZ9XLBKzRPDXRolAnrjQMvcn9S-EJ1G9Djg1Gz6Pss3-xVV5M-pXJuQbhpDkjY28-nF4A-IazzswMod6P_VkbidJhfLppKHI0bYHtOdS6j57ksIF23d_arsTnppA1EOuhi9FMwqtL7U8aCbjC' 
    }
  ];

  return (
    <div className="flex flex-col h-full bg-black overflow-hidden relative font-sans">
      {/* 顶部投稿提醒 */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-40 w-[90%] flex justify-between items-center pointer-events-none">
        <div className="bg-black/30 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full pointer-events-auto flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-lg fill">campaign</span>
          <span className="text-white/90 text-[11px] font-bold">投稿赢百万流量</span>
          <span className="material-symbols-outlined text-white/40 text-sm">chevron_right</span>
        </div>
        <button className="size-10 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white pointer-events-auto active:scale-90 transition-all">
          <span className="material-symbols-outlined">add</span>
        </button>
      </div>

      {/* 滑动引导动画 */}
      <div className="absolute top-1/2 right-4 -translate-y-1/2 z-40 flex flex-col items-center gap-1 opacity-60">
        <span className="material-symbols-outlined text-white animate-bounce text-xl">keyboard_double_arrow_up</span>
        <span className="[writing-mode:vertical-rl] text-white/50 text-[10px] tracking-widest font-bold">上下滑动</span>
      </div>

      {/* 主信息流 */}
      <main className="flex-1 overflow-y-scroll snap-y snap-mandatory no-scrollbar h-full">
        {ringtoneFeeds.map(feed => (
          <div 
            key={feed.id} 
            className="h-full w-full snap-start snap-always relative flex flex-col justify-end"
          >
            {/* 背景层 */}
            <div className="absolute inset-0 z-0">
              <img src={feed.img} className="w-full h-full object-cover scale-105" alt={feed.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
            </div>

            {/* 右侧功能堆叠 - 向上移动避免被遮挡 */}
            <div className="absolute right-4 bottom-44 z-30 flex flex-col items-center gap-6">
              <div className="relative">
                <div className="size-12 rounded-full border-2 border-primary overflow-hidden shadow-2xl">
                  <img src={feed.img} className="w-full h-full object-cover" alt="avatar" />
                </div>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 size-5 bg-primary rounded-full flex items-center justify-center border-2 border-black">
                  <span className="material-symbols-outlined text-black text-[14px] font-black">add</span>
                </div>
              </div>
              
              <button className="flex flex-col items-center gap-1 group active:scale-90 transition-transform">
                <div className="size-12 rounded-full bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-white text-2xl group-active:text-primary transition-colors">share</span>
                </div>
                <span className="text-[10px] text-white/80 font-bold tracking-wider">分享</span>
              </button>
            </div>

            {/* 底部信息层 - 增加底部外边距以避开 BottomNav */}
            <div className="relative z-20 px-6 pb-28 w-full max-w-full">
              <div className="flex flex-col gap-2 mb-6">
                <h3 className="text-white text-xl font-black tracking-tight drop-shadow-lg">@{feed.user}</h3>
                <p className="text-white/95 text-sm font-bold leading-relaxed line-clamp-2 drop-shadow-md">{feed.title}</p>
                <p className="text-white/60 text-xs font-medium mt-1">{feed.desc}</p>
                
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex items-center gap-1.5 bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/5 overflow-hidden max-w-[180px]">
                    <span className="material-symbols-outlined text-primary text-sm animate-spin-slow">music_note</span>
                    <div className="text-[10px] text-white/70 font-bold whitespace-nowrap overflow-hidden">
                      <span className="inline-block animate-marquee">{feed.title} - 原声演奏作品</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 核心操作：一键设置视频彩铃 */}
              <button className="group relative w-full h-14 rounded-2xl overflow-hidden active:scale-[0.97] transition-all shadow-2xl">
                <div className="absolute inset-0 bg-primary group-hover:bg-primary-dark transition-colors"></div>
                <div className="relative flex items-center justify-center gap-3 h-full">
                  <span className="material-symbols-outlined text-background-dark text-2xl fill">video_settings</span>
                  <span className="text-background-dark font-black text-base tracking-widest italic">一键设置视频彩铃</span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(80%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Stage;
