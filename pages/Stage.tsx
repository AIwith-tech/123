
import React from 'react';
import { Page } from '../types';

interface StageProps {
  onNavigate: (page: Page) => void;
}

const Stage: React.FC<StageProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";
  
  const editorChoices = [
    { title: '赛博韵律：未来之音', tag: '本周最热', desc: '沉浸在电子合成器的海洋中', gradient: 'from-[#00c2ff]/20 to-transparent' },
    { title: '传统新编：国风回响', tag: '独家首发', desc: '中国音乐学院优秀学子重新演绎', gradient: 'from-purple-500/20 to-transparent' }
  ];

  const ringtoneFeeds = [
    { id: 1, user: '小林同学', title: '春日遐想', views: '2400', img: imageUrl },
    { id: 2, user: '大马克', title: '光影节拍', views: '1800', img: imageUrl },
    { id: 3, user: '音乐生小王', title: '高山流水', views: '3200', img: imageUrl },
    { id: 4, user: '陈皮阿四', title: '塞上曲', views: '1500', img: imageUrl },
    { id: 5, user: '小美', title: '江南烟雨', views: '4500', img: imageUrl }
  ];

  const musicList = [
    { id: 'm1', title: '无尽夏日·序曲', sub: '中国音乐学院作曲系', time: '03:42', quality: 'SQ' },
    { id: 'm2', title: '钢琴随想曲 第5号', sub: '李名 · 2023届毕业生', time: '04:15', quality: 'HQ' },
    { id: 'm3', title: '云端漫步', sub: '民乐室内乐团', time: '02:58', quality: 'SQ' },
    { id: 'm4', title: '深夜的萨克斯', sub: '爵士乐社', time: '05:10', quality: 'SQ' },
    { id: 'm5', title: '竹林深处', sub: '笛子独奏', time: '03:20', quality: 'HQ' },
    { id: 'm6', title: '赛博京剧', sub: '跨界实验组', time: '04:45', quality: 'SQ' },
    { id: 'm7', title: '晨曦之光', sub: '合唱团', time: '04:02', quality: 'SQ' },
    { id: 'm8', title: '落叶季节', sub: '民谣歌手', time: '03:35', quality: 'HQ' },
    { id: 'm9', title: '海浪之声', sub: '环境音乐', time: '10:00', quality: 'SQ' },
    { id: 'm10', title: '最后的狂想', sub: '交响乐团', time: '08:24', quality: 'SQ' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-6">
      <header className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-black font-display tracking-tighter italic leading-none">咪咕专区</h1>
          <p className="text-[9px] text-primary/50 font-bold uppercase tracking-widest mt-0.5">Migu Special</p>
        </div>
        <button className="size-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary active:scale-90 transition-all">
          <span className="material-symbols-outlined text-xl font-bold">add</span>
        </button>
      </header>

      <section className="pt-4">
        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x">
          {editorChoices.map((item, i) => (
            <div key={i} className="min-w-[260px] aspect-[2.2/1] rounded-2xl p-4 border border-white/5 bg-[#112138] relative overflow-hidden snap-center group">
              <img src={imageUrl} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-110 transition-transform duration-1000" alt="" />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <span className="bg-primary/20 backdrop-blur-md px-1.5 py-0.5 rounded text-[7px] text-primary font-black tracking-widest border border-primary/10 mb-1 inline-block">
                    {item.tag}
                  </span>
                  <h4 className="text-white text-base font-black font-display tracking-tight leading-none">{item.title}</h4>
                </div>
                <p className="text-white/30 text-[9px] font-bold">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-8">
        <div className="px-6 flex items-center justify-between mb-4">
           <div className="flex items-center gap-2">
             <div className="w-1 h-4 bg-[#00c2ff] rounded-full shadow-[0_0_5px_#00c2ff]"></div>
             <h3 className="text-white text-base font-black font-display italic">视频彩铃精选</h3>
           </div>
           <button className="text-white/30 text-[10px] font-bold">更多</button>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x">
          {ringtoneFeeds.map(feed => (
            <div key={feed.id} className="min-w-[160px] relative aspect-[1/1.5] rounded-2xl overflow-hidden border border-white/5 snap-center group active:scale-95 transition-all">
              <img src={feed.img} className="w-full h-full object-cover opacity-70" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-3">
                <h4 className="text-white text-xs font-black mb-0.5 line-clamp-1">{feed.title}</h4>
                <div className="flex items-center justify-between mb-2">
                   <span className="text-white/40 text-[8px] font-bold italic">@{feed.user}</span>
                </div>
                <button className="w-full py-1.5 bg-primary text-background-dark rounded-lg text-[9px] font-black tracking-widest italic flex items-center justify-center gap-1 shadow-lg shadow-primary/20">
                  <span className="material-symbols-outlined text-[10px] fill">video_settings</span>
                  设为彩铃
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-8 px-6">
        <div className="flex items-center justify-between mb-4">
           <div className="flex items-center gap-2">
             <div className="w-1 h-4 bg-[#f2b90d] rounded-full shadow-[0_0_5px_#f2b90d]"></div>
             <h3 className="text-white text-base font-black font-display italic">咪咕音乐首发</h3>
           </div>
           <button className="text-white/30 text-[10px] font-bold">更多</button>
        </div>

        <div className="space-y-1">
          {musicList.map(music => (
            <div key={music.id} className="flex items-center gap-3 py-2 active:bg-white/5 rounded-xl transition-all">
              <div className="size-10 rounded-lg bg-[#152B4D] border border-white/5 shrink-0 overflow-hidden">
                <img src={imageUrl} className="w-full h-full object-cover opacity-40" alt="" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-white text-sm font-black font-display truncate tracking-tight">{music.title}</h4>
                  <span className="text-[7px] border border-primary/40 text-primary px-0.5 rounded font-black">{music.quality}</span>
                </div>
                <p className="text-white/30 text-[9px] font-bold truncate mt-0.5 italic">{music.sub}</p>
              </div>
              <span className="material-symbols-outlined text-white/20 text-lg">more_vert</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Stage;
