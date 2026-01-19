
import React from 'react';
import { Page } from '../types';

interface StageProps {
  onNavigate: (page: Page) => void;
}

const Stage: React.FC<StageProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";
  
  const editorChoices = [
    { title: '赛博韵律：未来之音', tag: '本周最热', desc: '沉浸在电子合成器的海洋中', gradient: 'from-[#00c2ff]/20 to-transparent' },
    { title: '传统新编：国风回响', tag: '独家首发', desc: '中国音乐学院优秀学子重新演绎', gradient: 'from-purple-500/20 to-transparent' },
    { title: '校园歌手大赛集锦', tag: '新声代', desc: '聆听来自校园最纯粹、最动人的声音', gradient: 'from-orange-500/20 to-transparent' }
  ];

  const ringtoneFeeds = [
    { id: 1, user: '小林同学', title: '春日遐想', views: '2.4k', img: imageUrl },
    { id: 2, user: 'DJ_Mike', title: '光影节拍', views: '1.8k', img: imageUrl },
    { id: 3, user: '音乐生小张', title: '吉他独奏-夜', views: '3.1k', img: imageUrl },
    { id: 4, user: '视觉实验室', title: '流动色彩', views: '980', img: imageUrl }
  ];

  const musicList = [
    { id: 'm1', title: '无尽夏日·序曲', sub: '中国音乐学院作曲系', time: '03:42', quality: 'SQ' },
    { id: 'm2', title: '钢琴随想曲 No.5', sub: '李明 · 2023届毕业生', time: '04:15', quality: 'HQ' },
    { id: 'm3', title: '风的季节 (Cover)', sub: '校园民谣社', time: '03:20', quality: 'HQ' },
    { id: 'm4', title: '弦乐四重奏：黎明', sub: '室内乐团', time: '05:10', quality: 'SQ' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-32">
      {/* 顶部标题栏 - 已更名为 咪咕专区 */}
      <header className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-5 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-white text-xl font-black font-display tracking-tight italic">咪咕专区</h1>
          <p className="text-[9px] text-primary/60 font-black uppercase tracking-[0.3em]">Migu Zone</p>
        </div>
        <button className="size-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary active:scale-90 transition-all">
          <span className="material-symbols-outlined fill">add</span>
        </button>
      </header>

      {/* 1. 编辑精选轮播 */}
      <section className="pt-6">
        <div className="px-6 flex items-center justify-between mb-4">
           <div className="flex items-center gap-2">
             <div className="w-1 h-4 bg-[#00c2ff] rounded-full shadow-[0_0_8px_#00c2ff]"></div>
             <h3 className="text-white text-base font-black font-display">编辑精选</h3>
           </div>
           <div className="flex gap-2">
             <span className="material-symbols-outlined text-white/20 text-lg">chevron_left</span>
             <span className="material-symbols-outlined text-white/40 text-lg">chevron_right</span>
           </div>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x">
          {editorChoices.map((item, i) => (
            <div key={i} className={`min-w-[280px] h-40 rounded-2xl p-5 border border-white/5 bg-gradient-to-br ${item.gradient} relative overflow-hidden snap-center`}>
              <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30" alt="" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="bg-black/40 backdrop-blur-md px-2 py-0.5 rounded text-[8px] text-white font-black uppercase tracking-widest border border-white/10 mb-2 inline-block">
                    {item.tag}
                  </span>
                  <h4 className="text-white text-lg font-black font-display leading-tight">{item.title}</h4>
                </div>
                <p className="text-white/40 text-[10px] line-clamp-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 精选视频彩铃 - 瀑布流布局 */}
      <section className="pt-10">
        <div className="px-6 flex items-center justify-between mb-5">
           <div className="flex items-center gap-2">
             <div className="w-1 h-4 bg-[#00c2ff] rounded-full shadow-[0_0_8px_#00c2ff]"></div>
             <h3 className="text-white text-base font-black font-display">精选视频彩铃</h3>
           </div>
           <button className="text-white/30 text-[10px] font-bold flex items-center">
             查看更多 <span className="material-symbols-outlined text-sm">chevron_right</span>
           </button>
        </div>
        
        <div className="px-6 grid grid-cols-2 gap-4">
          {ringtoneFeeds.map(feed => (
            <div key={feed.id} className="relative aspect-[9/16] rounded-2xl overflow-hidden border border-white/5 group active:scale-95 transition-all">
              <img src={feed.img} className="w-full h-full object-cover" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
              
              {/* 信息叠加 */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h4 className="text-white text-xs font-black mb-1 line-clamp-1">{feed.title}</h4>
                <div className="flex items-center justify-between mb-3">
                   <span className="text-white/40 text-[9px] font-bold">@{feed.user}</span>
                   <span className="text-white/40 text-[9px] flex items-center gap-0.5">
                     <span className="material-symbols-outlined text-[10px] fill">visibility</span>
                     {feed.views}
                   </span>
                </div>
                {/* 核心操作：设为彩铃 */}
                <button className="w-full py-2 bg-primary text-background-dark rounded-lg text-[10px] font-black tracking-widest italic flex items-center justify-center gap-1 shadow-lg shadow-primary/20 active:bg-white transition-colors">
                  <span className="material-symbols-outlined text-xs fill">video_settings</span>
                  设为彩铃
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 咪咕音乐首发 - 已更名 */}
      <section className="pt-12">
        <div className="px-6 flex items-center justify-between mb-6">
           <div className="flex items-center gap-2">
             <div className="w-1 h-4 bg-[#00c2ff] rounded-full shadow-[0_0_8px_#00c2ff]"></div>
             <h3 className="text-white text-base font-black font-display">咪咕音乐首发</h3>
           </div>
           <button className="text-primary text-[10px] font-black flex items-center gap-1">
             <span className="material-symbols-outlined text-sm fill">play_circle</span>
             全部播放
           </button>
        </div>

        <div className="px-6 space-y-1">
          {musicList.map(music => (
            <div key={music.id} className="flex items-center gap-4 py-3 active:bg-white/5 rounded-xl transition-all">
              <div className="size-11 rounded-lg bg-[#152B4D] overflow-hidden border border-white/5 shrink-0">
                <img src={imageUrl} className="w-full h-full object-cover opacity-60" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-white text-[13px] font-black font-display truncate">{music.title}</h4>
                  <span className="text-[7px] border border-white/20 text-white/40 px-1 rounded h-3 flex items-center font-bold">{music.quality}</span>
                </div>
                <p className="text-white/30 text-[10px] font-medium truncate mt-0.5">{music.sub}</p>
              </div>
              <div className="flex items-center gap-4 text-white/20">
                <span className="text-[10px] font-bold">{music.time}</span>
                <span className="material-symbols-outlined text-lg">favorite</span>
                <span className="material-symbols-outlined text-lg">more_vert</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stage;
