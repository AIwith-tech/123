
import React, { useState } from 'react';
import { Page } from '../types';

interface CourseCenterProps {
  onNavigate: (page: Page) => void;
}

const CourseCenter: React.FC<CourseCenterProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'buyout' | 'subscribe'>('buyout');
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  const buyoutCourses = [
    {
      id: 1,
      tag: '大师班',
      title: '大师钢琴课：情感与技巧的深度融合',
      teacher: '李教授',
      org: '中国音乐学院',
      oldPrice: '¥399',
      price: '¥199',
      action: '购买',
      type: 'buy'
    },
    {
      id: 2,
      tag: '名师',
      title: '古筝入门：从零开始的国乐之旅',
      teacher: '张老师',
      org: '资深演奏家',
      oldPrice: '¥259',
      price: '¥129',
      action: '试看',
      type: 'trial'
    },
    {
      id: 3,
      tag: '大师班',
      title: '小提琴进阶：揉弦与拨奏的艺术',
      teacher: '王教授',
      org: '中国音乐学院',
      oldPrice: '¥459',
      price: '¥299',
      action: '购买',
      type: 'buy'
    }
  ];

  const certifications = [
    {
      id: 'ai_music',
      title: 'AI 音乐工程师认证',
      issuer: '中国音乐学院 × 咪咕音乐',
      issuerType: '联合认证',
      icon: 'music_note',
      gradient: 'from-[#8b5cf6] to-[#6d28d9]',
      tag: '专业音乐背景'
    },
    {
      id: 'aigc_app',
      title: '生成式人工智能（AIGC）应用工程师认证',
      issuer: '中国移动元宇宙数智赋能中心',
      issuerType: '官方颁发',
      icon: 'psychology',
      gradient: 'from-[#4f46e5] to-[#3730a3]',
      tag: '前沿科技赋能'
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans overflow-hidden">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 glass px-6 py-5 flex items-center justify-between border-b border-white/5">
        <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white text-2xl">arrow_back_ios</button>
        <h1 className="text-white text-lg font-bold tracking-tight">课程中心</h1>
        <button className="material-symbols-outlined text-white text-2xl">more_horiz</button>
      </header>

      {/* 顶部切换 Tab */}
      <div className="px-6 py-4 sticky top-[68px] z-40 bg-[#0B1E3B]">
        <div className="flex p-1 bg-white/5 rounded-2xl border border-white/5 shadow-inner">
          <button 
            onClick={() => setActiveTab('buyout')}
            className={`flex-1 py-3 text-sm font-bold transition-all rounded-xl relative ${activeTab === 'buyout' ? 'text-white' : 'text-white/40'}`}
          >
            精品课程
            {activeTab === 'buyout' && <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#00c2ff] rounded-full shadow-[0_0_8px_#00c2ff]"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('subscribe')}
            className={`flex-1 py-3 text-sm font-bold transition-all rounded-xl relative ${activeTab === 'subscribe' ? 'text-white' : 'text-white/40'}`}
          >
            会员专享
            {activeTab === 'subscribe' && <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#00c2ff] rounded-full shadow-[0_0_8px_#00c2ff]"></div>}
          </button>
        </div>
      </div>

      <main className="px-6 pb-20 flex-1 overflow-y-auto no-scrollbar">
        {activeTab === 'buyout' ? (
          <div className="animate-in fade-in slide-in-from-right-4 duration-300">
            <div className="flex items-center justify-between mb-6 mt-2">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#00c2ff] text-xl fill">auto_awesome</span>
                  <h2 className="text-white text-xl font-bold font-display tracking-tight">精品课程</h2>
                </div>
                <p className="text-[#00c2ff] text-[11px] font-bold tracking-tight opacity-80">一次购买，终身学习</p>
              </div>
              <button className="text-white/30 text-[11px] font-bold flex items-center">
                全部 <span className="material-symbols-outlined text-sm ml-0.5">chevron_right</span>
              </button>
            </div>

            <div className="space-y-4">
              {buyoutCourses.map(course => (
                <div key={course.id} className="bg-[#112138] border border-white/5 rounded-[1.8rem] p-4 flex gap-4 active:scale-[0.98] transition-all shadow-xl">
                  <div className="relative size-28 shrink-0">
                    <img src={imageUrl} className="w-full h-full object-cover rounded-2xl opacity-90 shadow-lg" alt="" />
                    <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-[9px] text-white font-bold border border-white/10">
                      {course.tag}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between py-0.5">
                    <div>
                      <h4 className="text-white text-[15px] font-bold leading-snug line-clamp-2 font-display">{course.title}</h4>
                      <p className="text-white/40 text-[11px] mt-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[13px] opacity-60">school</span>
                        {course.teacher} · {course.org}
                      </p>
                    </div>
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-white/20 text-[10px] line-through font-medium mb-0.5">{course.oldPrice}</span>
                        <span className="text-[#00c2ff] text-lg font-black font-display tracking-tighter italic leading-none">{course.price}</span>
                      </div>
                      <button className={`flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-[12px] font-black transition-all shadow-lg ${
                        course.type === 'buy' 
                          ? 'bg-[#00c2ff] text-background-dark shadow-[#00c2ff]/10' 
                          : 'bg-white/5 text-white/70 border border-white/10'
                      }`}>
                        {course.action}
                        <span className="material-symbols-outlined text-sm fill">{course.type === 'buy' ? 'shopping_bag' : 'play_circle'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pt-2 space-y-6">
            {/* 会员专享卡片列表 */}
            {certifications.map((cert) => (
              <div 
                key={cert.id}
                className={`relative w-full bg-gradient-to-br ${cert.gradient} rounded-[2rem] p-6 shadow-xl border border-white/10 overflow-hidden active:scale-[0.98] transition-all`}
              >
                {/* 装饰性水印与微光 */}
                <div className="absolute -top-10 -right-10 size-32 bg-white/10 blur-3xl rounded-full"></div>
                <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-8xl fill text-white">{cert.icon}</span>
                </div>

                <div className="relative z-10">
                  {/* 卡片头部：小标签 */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-white/20 backdrop-blur-md px-2 py-0.5 rounded text-[8px] text-white font-black uppercase tracking-widest border border-white/5">
                      {cert.issuerType}
                    </span>
                    <span className="text-white/40 text-[9px] font-bold tracking-tighter">
                      {cert.tag}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-white text-xl font-black italic tracking-tighter leading-tight mb-3 pr-10">
                    {cert.title}
                  </h3>

                  {/* 颁发单位 */}
                  <div className="flex items-center gap-2 mb-8">
                    <div className="size-6 rounded-lg bg-white/10 flex items-center justify-center border border-white/10">
                      <span className="material-symbols-outlined text-primary text-[14px] fill">verified</span>
                    </div>
                    <p className="text-white/60 text-[10px] font-bold tracking-tight">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* 底部购买区 */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-white/30 text-[9px] font-bold uppercase tracking-wider">MONTHLY FEE</span>
                      <span className="text-white text-xl font-black font-display italic leading-none">¥ 29.0 <span className="text-[10px] font-normal not-italic opacity-40">/ 月</span></span>
                    </div>
                    <button className="bg-[#f2b90d] text-[#3d2c04] px-6 py-2.5 rounded-xl font-black text-[11px] tracking-widest italic shadow-lg flex items-center gap-1.5 active:scale-95 transition-all">
                      立即开启
                      <span className="material-symbols-outlined text-sm">bolt</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* 底部补充说明 */}
            <div className="pt-4 text-center">
              <p className="text-white/20 text-[9px] font-bold tracking-[0.2em] uppercase leading-relaxed px-8">
                双认证体系 · 助力职业进阶<br/>
                咪咕音乐与中国移动元宇宙数智赋能中心联合打造
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseCenter;
