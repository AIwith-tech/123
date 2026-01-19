
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
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-24">
      <header className="sticky top-0 z-40 glass border-b border-white/5 px-6 py-4 flex items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-white text-2xl font-black font-display tracking-tighter italic">学习中心</h1>
        </div>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-white/40 text-[26px]">search</span>
          <span className="material-symbols-outlined text-white/40 text-[26px]">history</span>
        </div>
      </header>

      <section className="px-5 pt-6 mb-8">
        <div className="bg-[#111928]/80 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-6 flex items-center justify-between shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="size-12 rounded-full bg-[#1a2c42] flex items-center justify-center text-cyan-400 border border-cyan-400/20">
              <span className="material-symbols-outlined fill">bar_chart</span>
            </div>
            <div>
              <p className="text-white/30 text-[10px] font-bold tracking-widest">今日学习时长</p>
              <p className="text-white text-2xl font-black font-display italic leading-none mt-0.5">45 <span className="text-sm not-italic opacity-60">分钟</span></p>
            </div>
          </div>
          <div className="w-px h-10 bg-white/5"></div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-white/30 text-[10px] font-bold tracking-widest">连续打卡</p>
              <p className="text-white text-2xl font-black font-display italic leading-none mt-0.5">12 <span className="text-sm not-italic opacity-60">天</span></p>
            </div>
            <div className="size-12 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 border border-orange-500/20">
              <span className="material-symbols-outlined fill">local_fire_department</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="px-6 flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#00c2ff] rounded-full shadow-[0_0_8px_#00c2ff] shrink-0"></div>
            <h3 className="text-white text-lg font-black font-display tracking-tight italic">已购课程</h3>
          </div>
          <button className="text-white/30 text-[11px] font-bold flex items-center gap-1 group">
            全部已购 <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">chevron_right</span>
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto px-6 no-scrollbar snap-x">
          {buyoutCourses.map((course) => (
            <div 
              key={course.id}
              onClick={() => onNavigate(Page.CourseDetail)}
              className="min-w-[280px] snap-center bg-[#111928] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl relative group active:scale-[0.98] transition-all"
            >
              <div className="h-44 relative">
                <img src={course.img} className="w-full h-full object-cover" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111928] via-transparent to-transparent"></div>
                <div className="absolute -bottom-4 right-6 size-12 rounded-2xl bg-[#1a2c42]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center text-cyan-400 shadow-xl group-hover:bg-cyan-500 group-hover:text-background-dark transition-all duration-500">
                   <span className="material-symbols-outlined fill text-2xl">{course.icon}</span>
                </div>
              </div>

              <div className="p-6 pt-8">
                <h4 className="text-white text-lg font-black font-display tracking-tight mb-1">{course.title}</h4>
                <p className="text-white/30 text-[10px] font-bold mb-6">{course.subtitle}</p>
                
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white/40 text-[10px] font-bold">已学 {course.progress}%</span>
                  <span className="text-white/40 text-[10px] font-bold">上次学到：{course.lastLesson}</span>
                </div>
                
                <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                   <div 
                    className="h-full bg-[#00c2ff] rounded-full shadow-[0_0_10px_#00c2ff]" 
                    style={{ width: `${course.progress}%` }}
                   ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <div className="px-6 flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#8b5cf6] rounded-full shadow-[0_0_8px_#8b5cf6] shrink-0"></div>
            <h3 className="text-white text-xl font-black font-display tracking-tight italic">会员专享</h3>
          </div>
          <div className="bg-[#8b5cf6]/20 border border-[#8b5cf6]/30 px-3 py-1 rounded-lg text-[#c4b5fd] text-[9px] font-black tracking-widest italic">
            高级会员生效中
          </div>
        </div>

        <div className="flex gap-5 overflow-x-auto px-6 no-scrollbar snap-x">
          {vipCourses.map((course) => (
            <div 
              key={course.id}
              className={`min-w-[300px] snap-center bg-gradient-to-br ${course.gradient} rounded-[2rem] p-7 border border-white/10 shadow-2xl relative overflow-hidden active:scale-[0.98] transition-all group`}
            >
              <div className="absolute top-0 right-0 opacity-[0.03] translate-x-1/4 -translate-y-1/4">
                <span className="material-symbols-outlined text-[180px] fill text-white">workspace_premium</span>
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-10">
                  <div className="flex gap-4 items-center">
                    <div className="size-14 rounded-2xl bg-black/30 backdrop-blur-md flex items-center justify-center text-[#8b5cf6] border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-3xl fill">{course.icon}</span>
                    </div>
                    <div>
                      <h4 className="text-white text-lg font-black font-display tracking-tight mb-1">{course.title}</h4>
                      <p className="text-[#8b5cf6] text-[10px] font-bold tracking-tight">{course.org}</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-white/20">stars</span>
                </div>

                <div className="flex justify-between items-end mb-3">
                  <span className="text-white/40 text-[10px] font-bold tracking-widest">学习进度</span>
                  <span className="text-[#f2b90d] text-xl font-black font-display italic leading-none">{course.progress}%</span>
                </div>

                <div className="w-full h-2 bg-black/20 rounded-full overflow-hidden mb-4">
                  <div 
                    className="h-full bg-gradient-to-r from-[#8b5cf6] to-[#f2b90d] rounded-full shadow-[0_0_12px_rgba(139,92,246,0.5)]" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>

                <p className="text-white/20 text-[9px] font-bold tracking-widest text-right">有效期至 {course.expiry}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Study;
