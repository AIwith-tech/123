
import React from 'react';
import { Page } from '../types';

interface StageProps {
  onNavigate: (page: Page) => void;
}

const Stage: React.FC<StageProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";
  
  const ringtoneFeeds = [
    { 
      id: 1, 
      user: '指尖艺术', 
      title: '古筝版《大鱼》绝美意境', 
      desc: '每一次拨弦都是对大海的告白...',
      downloads: '12w', 
      likes: '5.6w',
      img: imageUrl 
    },
    { 
      id: 2, 
      user: '钢琴少女CC', 
      title: '《克罗地亚狂想曲》燃情时刻', 
      desc: '用指尖点燃冬日的激情...',
      downloads: '8.4w', 
      likes: '1.2w',
      img: imageUrl 
    },
    { 
      id: 3, 
      user: '民乐大师', 
      title: '二胡《赛马》万马奔腾', 
      desc: '速度与激情的完美融合...',
      downloads: '15w', 
      likes: '9.8w',
      img: imageUrl 
    },
    { 
      id: 4, 
      user: '指尖艺术', 
      title: '琵琶行：嘈嘈切切错杂弹', 
      desc: '重现千年前的江上琴音...',
      downloads: '6.2w', 
      likes: '3.1w',
      img: imageUrl 
    },
    { 
      id: 5, 
      user: '音乐诗人', 
      title: '吉他指弹《天空之城》', 
      desc: '温暖治愈的经典旋律...',
      downloads: '4.5w', 
      likes: '2.2w',
      img: imageUrl 
    },
    { 
      id: 6, 
      user: '节奏工坊', 
      title: '打击乐：中国鼓震天响', 
      desc: '振奋人心的民族力量...',
      downloads: '21w', 
      likes: '14w',
      img: imageUrl 
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-32">
      {/* 顶部标题栏与投稿提醒 */}
      <header className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-white text-xl font-black font-display tracking-tight italic">视频彩铃</h1>
          <p className="text-[9px] text-primary/60 font-black uppercase tracking-[0.3em]">Video Ringtone</p>
        </div>
        <button className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary active:scale-90 transition-all">
          <span className="material-symbols-outlined fill">add</span>
        </button>
      </header>

      {/* 投稿赢流量横幅 - 更加精致的吸顶悬浮效果 */}
      <div className="px-5 py-4">
        <div className="bg-gradient-to-r from-primary/20 to-transparent backdrop-blur-md border border-primary/10 rounded-2xl p-4 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-background-dark shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined fill text-xl">campaign</span>
            </div>
            <div>
              <p className="text-white text-xs font-black">投稿上首页，赢百万流量</p>
              <p className="text-white/40 text-[9px] font-bold uppercase tracking-wider">Join & Gain Exposure</p>
            </div>
          </div>
          <span className="material-symbols-outlined text-primary text-xl">chevron_right</span>
        </div>
      </div>

      {/* 双列卡片网格 */}
      <main className="px-5 grid grid-cols-2 gap-4">
        {ringtoneFeeds.map(feed => (
          <div 
            key={feed.id} 
            className="group bg-[#152B4D]/30 border border-white/5 rounded-3xl overflow-hidden active:scale-95 transition-all shadow-xl"
          >
            {/* 封面图容器 */}
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={feed.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={feed.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              
              {/* 播放按钮叠加层 */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-white text-4xl fill drop-shadow-2xl">play_circle</span>
              </div>

              {/* 左上角热度标签 */}
              <div className="absolute top-3 left-3 flex items-center gap-1 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/10">
                <span className="material-symbols-outlined text-[10px] text-primary fill">local_fire_department</span>
                <span className="text-white text-[9px] font-black">{feed.downloads}</span>
              </div>
            </div>

            {/* 信息区域 */}
            <div className="p-4">
              <h3 className="text-white text-[13px] font-black font-display leading-tight line-clamp-2 mb-2 h-9">
                {feed.title}
              </h3>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <div className="size-5 rounded-full overflow-hidden border border-white/10">
                    <img src={feed.img} className="w-full h-full object-cover" alt="avatar" />
                  </div>
                  <span className="text-white/40 text-[10px] font-bold truncate max-w-[60px]">@{feed.user}</span>
                </div>
                <div className="flex items-center gap-0.5 text-white/20">
                   <span className="material-symbols-outlined text-[12px] fill">favorite</span>
                   <span className="text-[9px] font-bold">{feed.likes}</span>
                </div>
              </div>

              {/* 设置按钮 */}
              <button className="w-full py-2 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center gap-1.5 active:bg-primary active:text-background-dark transition-all">
                <span className="material-symbols-outlined text-sm font-black fill">video_settings</span>
                <span className="text-[10px] font-black italic">一键设置</span>
              </button>
            </div>
          </div>
        ))}
      </main>

      <style dangerouslySetInnerHTML={{ __html: `
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default Stage;
