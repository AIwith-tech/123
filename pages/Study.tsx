
import React from 'react';
import { Page } from '../types';

interface StudyProps {
  onNavigate: (page: Page) => void;
}

const Study: React.FC<StudyProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  const buyoutCourses = [
    {
      id: 'b1',
      title: '大师钢琴课 - 贝多芬专场',
      subtitle: '永久有效 · 共30课时',
      progress: 35,
      lastLesson: '第12课',
      icon: 'piano',
      img: imageUrl
    },
    {
      id: 'b2',
      title: '小提琴独奏进阶班',
      subtitle: '永久有效 · 共24课时',
      progress: 8,
      lastLesson: '第2课',
      icon: 'violin',
      img: imageUrl
    }
  ];

  const vipCourses = [
    {
      id: 'v1',
      title: '智能音乐工程师',
      org: '中国音乐学院认证课程',
      progress: 65,
      expiry: '2024.12.31',
      icon: 'memory',
      gradient: 'from-[#2e1c5e] to-[#121b44]'
    },
    {
      id: 'v2',
      title: '数字音频处理',
      org: '混音与母带处理实战',
      progress: 12,
      expiry: '2024.12.31',
      icon: 'equalizer',
      gradient: 'from-[#1e2a5e] to-[#0f1430]'
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-6">
      <header className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-black font-display tracking-tighter italic leading-none">学习中心</h1>
          <p className="text-[9px] text-primary/50 font-bold uppercase tracking-widest mt-0.5">Study Center</p>
        </div>
        <div className="flex items-center gap-5">
          <span className="material-symbols-outlined text-white/40 text-xl">search</span>
          <span className="material-symbols-outlined text-white/40 text-xl">history</span>
        </div>
      </header>

      <section className="px-5 pt-4 mb-6">
        <div className="bg-[#111928]/80 backdrop-blur-xl border border-white/5 rounded-2xl p-4 flex items-center justify-between shadow-xl">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-[#1a2c42] flex items-center justify-center text-cyan-400 border border-cyan-400/20 shadow-inner">
              <span className="material-symbols-outlined text-lg fill">bar_chart</span>
            </div>
            <div>
              <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase">今日时长</p>
              <p className="text-white text-xl font-black font-display italic leading-none">45 <span className="text-[10px] not-italic opacity-40">Min</span></p>
            </div>
          </div>
          <div className="w-px h-8 bg-white/5"></div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-white/30 text-[9px] font-bold tracking-widest uppercase">连续打卡</p>
              <p className="text-white text-xl font-black font-display italic leading-none">12 <span className="text-[10px] not-italic opacity-40">Days</span></p>
            </div>
            <div className="size-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20 shadow-inner">
              <span className="material-symbols-outlined text-lg fill">local_fire_department</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="px-6 flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#00c2ff] rounded-full shadow-[0_0_5px_#00c2ff]"></div>
            <h3 className="text-white text-base font-black font-display tracking-tight italic">已购课程</h3>
          </div>
          <button className="text-white/30 text-[10px] font-bold">全部已购</button>
        </div>

        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x">
          {buyoutCourses.map((course) => (
            <div 
              key={course.id}
              onClick={() => onNavigate(Page.CourseDetail)}
              className="min-w-[260px] snap-center bg-[#111928] rounded-2xl overflow-hidden border border-white/5 shadow-lg relative group active:scale-[0.98] transition-all"
            >
              <div className="h-32 relative">
                <img src={course.img} className="w-full h-full object-cover opacity-80" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111928] via-transparent to-transparent"></div>
                <div className="absolute bottom-2 right-4 size-10 rounded-xl bg-[#1a2c42]/90 backdrop-blur-md border border-white/10 flex items-center justify-center text-cyan-400 shadow-xl">
                   <span className="material-symbols-outlined fill text-xl">{course.icon}</span>
                </div>
              </div>

              <div className="p-4">
                <h4 className="text-white text-base font-black font-display tracking-tight mb-0.5">{course.title}</h4>
                <p className="text-white/30 text-[9px] font-bold mb-4">{course.subtitle}</p>
                <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full bg-[#00c2ff] rounded-full shadow-[0_0_8px_#00c2ff]" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <div className="px-6 flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-4 bg-[#8b5cf6] rounded-full shadow-[0_0_5px_#8b5cf6]"></div>
            <h3 className="text-white text-base font-black font-display tracking-tight italic">会员专享</h3>
          </div>
        </div>

        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x">
          {vipCourses.map((course) => (
            <div 
              key={course.id}
              className={`min-w-[280px] snap-center bg-gradient-to-br ${course.gradient} rounded-2xl p-5 border border-white/10 shadow-lg relative overflow-hidden group`}
            >
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-black/20 flex items-center justify-center text-[#8b5cf6] border border-white/5">
                    <span className="material-symbols-outlined text-xl fill">{course.icon}</span>
                  </div>
                  <div>
                    <h4 className="text-white text-base font-black font-display tracking-tight leading-none mb-1">{course.title}</h4>
                    <p className="text-[#8b5cf6] text-[9px] font-bold">{course.org}</p>
                  </div>
                </div>
                <div className="w-full h-1 bg-black/20 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#8b5cf6] to-primary rounded-full shadow-[0_0_8px_rgba(139,92,246,0.3)]" style={{ width: `${course.progress}%` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Study;
