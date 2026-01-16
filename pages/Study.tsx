
import React from 'react';
import { Page, Course } from '../types';

interface StudyProps {
  onNavigate: (page: Page) => void;
}

const Study: React.FC<StudyProps> = ({ onNavigate }) => {
  const certificates = [
    { id: 1, title: '声乐等级证书', level: 'LEVEL 5 VOCAL CERTIFICATE', date: '2025.08.15', icon: 'school' },
    { id: 2, title: '钢琴演奏证书', level: 'LEVEL 4 PIANO PERFORMANCE', date: '2024.12.20', icon: 'piano' }
  ];

  // 模拟已购买且正在学习的课程数据
  const purchasedCourses = [
    { 
      id: 'course_1', 
      title: '钢琴考级精讲：乐理与演奏一级', 
      currentLesson: '第4课：手型与指法基础', 
      progress: 75, 
      icon: 'piano',
      color: 'text-primary'
    },
    { 
      id: 'course_2', 
      title: 'AI 交互作曲：大模型旋律生成实战', 
      currentLesson: '第2课：Transformer模型基础', 
      progress: 20, 
      icon: 'memory',
      color: 'text-blue-400'
    },
    { 
      id: 'course_3', 
      title: '大咖课：古琴艺术指法深度解析', 
      currentLesson: '第8课：流水韵律处理', 
      progress: 45, 
      icon: 'history_edu',
      color: 'text-amber-400'
    }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-32">
      {/* 顶部标题与学情概览 */}
      <header className="px-6 pt-8 pb-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <h1 className="text-white text-2xl font-black font-display tracking-tight">学习中心</h1>
            <p className="text-[10px] text-primary/60 font-bold uppercase tracking-[0.3em]">Learning Center</p>
          </div>
          <div className="bg-white/5 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-white/60 text-[10px] font-bold tracking-tight">学习中 42min</span>
          </div>
        </div>
      </header>

      {/* 我的证书 - 横向滚动 */}
      <section className="mb-8">
        <div className="px-6 flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <h3 className="text-white text-lg font-black font-display tracking-tight">我的证书</h3>
          </div>
          <button className="text-white/30 text-[11px] font-bold flex items-center gap-1">
            查看全部 <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto px-6 no-scrollbar snap-x">
          {certificates.map(cert => (
            <div key={cert.id} className="min-w-[240px] aspect-[1.6/1] bg-gradient-to-br from-[#1A3A6B] to-[#11294d] rounded-3xl border border-white/10 p-5 relative overflow-hidden snap-center group">
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start">
                  <div className="size-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined fill">{cert.icon}</span>
                  </div>
                  <span className="bg-primary/20 text-primary text-[8px] px-2 py-0.5 rounded-full border border-primary/20 font-black tracking-widest uppercase">官方认证</span>
                </div>
                <div>
                  <h4 className="text-white text-base font-black font-display mb-0.5 tracking-tight">{cert.title}</h4>
                  <p className="text-white/30 text-[8px] font-bold tracking-widest uppercase mb-4">{cert.level}</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/20 text-[8px] font-bold uppercase tracking-widest">发证日期</p>
                      <p className="text-white/60 text-[11px] font-black font-display">{cert.date}</p>
                    </div>
                    <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <span className="material-symbols-outlined text-primary text-sm fill">verified</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </section>

      {/* 正在学习 - 已购课程列表 */}
      <section className="px-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <h3 className="text-white text-lg font-black font-display tracking-tight">正在学习</h3>
          </div>
          <div className="text-white/30 text-[12px] font-black font-display italic tracking-widest">3</div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {purchasedCourses.map(course => (
            <div 
              key={course.id} 
              onClick={() => onNavigate(Page.CourseDetail)}
              className="bg-[#152B4D]/30 border border-[#1A3A6B]/50 rounded-[2rem] p-5 flex items-center gap-4 active:scale-[0.98] transition-all group relative overflow-hidden"
            >
              {/* 进度背景条 */}
              <div 
                className="absolute bottom-0 left-0 h-1 bg-primary/20 transition-all duration-1000" 
                style={{ width: `${course.progress}%` }}
              ></div>

              <div className={`size-14 rounded-2xl bg-[#0B1E3B] flex items-center justify-center ${course.color} border border-white/[0.03] group-hover:bg-primary group-hover:text-background-dark transition-all shrink-0`}>
                <span className="material-symbols-outlined text-3xl fill">{course.icon}</span>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-white text-[14px] font-black font-display tracking-tight truncate mb-0.5">{course.title}</h4>
                <div className="flex items-center gap-2">
                  <span className="text-white/40 text-[10px] font-bold truncate">上次学至：{course.currentLesson}</span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                <span className="text-primary text-[14px] font-black font-display italic">{course.progress}%</span>
                <span className="text-white/20 text-[8px] font-bold uppercase tracking-tighter">已完成</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 近期考级卡片 */}
      <section className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-primary rounded-full"></div>
            <h3 className="text-white text-lg font-black font-display tracking-tight">近期考级</h3>
          </div>
          <p className="text-primary text-[11px] font-black italic tracking-tight">报名倒计时 3 天</p>
        </div>
        
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 bg-gradient-to-br from-[#11294d] to-black shadow-2xl p-8">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
              <span className="bg-primary text-background-dark text-[10px] px-3 py-1 rounded-md font-black italic tracking-widest uppercase">正在报名</span>
              <span className="material-symbols-outlined text-white/20">calendar_month</span>
            </div>
            
            <h2 className="text-white text-2xl font-black font-display leading-tight mb-2 tracking-tight">2026年春季全国<br/>音乐素养考级</h2>
            <p className="text-white/40 text-[10px] font-bold tracking-widest mb-8 uppercase leading-relaxed">中国音乐学院认证 · 全国统一考试 · 权威证书</p>
            
            <div className="flex items-center justify-between">
              <button 
                onClick={() => onNavigate(Page.Registration)}
                className="bg-primary hover:bg-primary-dark text-background-dark px-10 py-3.5 rounded-full font-black text-sm tracking-widest flex items-center gap-2 shadow-xl shadow-primary/20 active:scale-95 transition-all italic"
              >
                立即报名 <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
              <div className="text-right">
                <p className="text-white/30 text-[9px] font-black uppercase tracking-widest">已报名人数</p>
                <p className="text-primary text-xl font-black font-display tracking-tighter">12,450</p>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none">
            <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" className="w-full h-full object-cover" alt="" />
          </div>
        </div>
      </section>

      {/* 底部功能网格 */}
      <section className="px-6 grid grid-cols-2 gap-4">
        <div className="bg-[#152B4D]/30 border border-[#1A3A6B]/50 rounded-[1.8rem] p-5 flex flex-col gap-4 active:bg-white/10 transition-all">
          <div className="flex justify-between items-center">
            <h4 className="text-white text-sm font-black font-display tracking-tight">模拟考试</h4>
            <span className="material-symbols-outlined text-primary text-xl fill">help_center</span>
          </div>
          <p className="text-white/30 text-[10px] font-bold leading-relaxed tracking-tight">考前自测 查漏补缺</p>
        </div>

        <div className="bg-[#152B4D]/30 border border-[#1A3A6B]/50 rounded-[1.8rem] p-5 flex flex-col gap-4 active:bg-white/10 transition-all">
          <div className="flex justify-between items-center">
            <h4 className="text-white text-sm font-black font-display tracking-tight">考级简章</h4>
            <span className="material-symbols-outlined text-primary text-xl fill">description</span>
          </div>
          <p className="text-white/30 text-[10px] font-bold leading-relaxed tracking-tight">报考须知 考试大纲</p>
        </div>
      </section>
    </div>
  );
};

export default Study;
