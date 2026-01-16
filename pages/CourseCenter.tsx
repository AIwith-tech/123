
import React, { useState } from 'react';
import { Page } from '../types';

interface CourseCenterProps {
  onNavigate: (page: Page) => void;
}

const CourseCenter: React.FC<CourseCenterProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('music');
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";

  const masterCourses = [
    { 
      title: '非遗文化：古琴艺术指法深度解析', 
      teacher: '龚一 教授', 
      tag: '非遗国家级传承人', 
      price: '¥399', 
      img: imageUrl 
    },
    { 
      title: '德奥经典：钢琴演奏的逻辑与美学', 
      teacher: '杨韵琳 教授', 
      tag: '国音钢琴系主任', 
      price: '¥599', 
      img: imageUrl 
    },
    { 
      title: '流行前沿：现代音乐制作与编曲思维', 
      teacher: '知名制作人 A', 
      tag: '金牌制作人', 
      price: '¥499', 
      img: imageUrl 
    }
  ];

  const engineerModules = [
    { title: 'AI 交互作曲', icon: 'bolt', desc: '基于大模型的旋律生成', level: 'Level 1' },
    { title: '神经音频引擎', icon: 'memory', desc: '实时音色迁移技术', level: 'Level 2' },
    { title: '空间音频混音', icon: 'surround_sound', desc: '全景声与算法驱动', level: 'Level 3' },
    { title: '虚拟人乐手', icon: 'face_retouching_natural', desc: '动作捕捉与智能演奏', level: 'Level 2' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-32">
      <header className="sticky top-0 z-30 glass px-6 py-6 border-b border-white/5">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/60">arrow_back_ios</button>
          <div>
            <h1 className="text-white text-xl font-black font-display tracking-tight italic">课程中心</h1>
            <p className="text-[9px] text-primary/60 font-black uppercase tracking-[0.3em]">Knowledge Powerhouse</p>
          </div>
        </div>
      </header>

      {/* 顶部标签切换 - 悬浮胶囊样式 */}
      <nav className="flex p-2 m-6 bg-white/5 rounded-2xl border border-white/5 sticky top-[84px] z-20 backdrop-blur-xl">
        {[
          { id: 'music', label: '精品课' },
          { id: 'master', label: '大师课' },
          { id: 'engineer', label: 'AI音乐工程师' }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 text-[11px] font-black transition-all rounded-xl ${activeTab === tab.id ? 'bg-primary text-background-dark shadow-lg shadow-primary/20' : 'text-white/40 hover:text-white/60'}`}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main className="px-6">
        {/* 精品课 - 垂直双栏布局 */}
        {activeTab === 'music' && (
          <div className="grid grid-cols-1 gap-6">
            {[
              { title: '乐理基础必修：从零开始识五线谱', teacher: '王莉', students: '4.2w', price: '¥49', img: imageUrl },
              { title: '钢琴考级精讲：莫扎特奏鸣曲集', teacher: '陈思教授', students: '1.5w', price: '¥199', img: imageUrl },
              { title: '民乐入门：二胡基础弓法实践', teacher: '张悦老师', students: '8k', price: '¥128', img: imageUrl }
            ].map((course, i) => (
              <div key={i} onClick={() => onNavigate(Page.CourseDetail)} className="bg-white/5 rounded-[2.5rem] p-4 flex gap-5 border border-white/5 active:scale-95 transition-all group shadow-xl">
                <div className="size-28 rounded-3xl overflow-hidden shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                  <img src={course.img} className="w-full h-full object-cover" alt={course.title} />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h4 className="text-white text-sm font-black font-display leading-tight line-clamp-2">{course.title}</h4>
                    <p className="text-white/40 text-[9px] font-bold mt-2 tracking-widest uppercase">{course.teacher} · {course.students}人已学</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-primary text-base font-black italic tracking-tighter">{course.price}</span>
                    <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white/20 group-hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-base">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 大师课 - 宽幅艺术卡片 */}
        {activeTab === 'master' && (
          <div className="space-y-10">
            {masterCourses.map((c, i) => (
              <div key={i} onClick={() => onNavigate(Page.CourseDetail)} className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden group shadow-2xl border border-white/10">
                <img src={c.img} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt={c.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-black/30"></div>
                
                <div className="absolute top-6 left-6">
                  <span className="bg-primary/90 text-background-dark text-[10px] font-black px-4 py-1.5 rounded-full italic tracking-widest uppercase shadow-xl">MASTER</span>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="bg-white/10 backdrop-blur-md text-white text-[9px] font-black px-3 py-1 rounded-full border border-white/10">{c.tag}</span>
                  </div>
                  <h3 className="text-white text-2xl font-black font-display leading-tight mb-4">{c.title}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-white/60 text-xs font-bold">{c.teacher}</p>
                    <span className="text-primary text-lg font-black italic">{c.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI音乐工程师 */}
        {activeTab === 'engineer' && (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="relative bg-[#1A3A6B]/30 rounded-[3rem] border border-white/10 p-10 overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="size-12 rounded-2xl bg-primary flex items-center justify-center text-background-dark shadow-lg">
                    <span className="material-symbols-outlined text-3xl fill">memory</span>
                  </div>
                  <div>
                    <span className="text-white text-lg font-black font-display block leading-none">AI 音乐工程师</span>
                    <span className="text-primary/60 text-[9px] font-black uppercase tracking-[0.2em]">Professional Certification</span>
                  </div>
                </div>

                <h2 className="text-white text-3xl font-black italic tracking-tighter mb-4 leading-none">定义音乐<br/>的下一个时代</h2>
                <p className="text-white/40 text-[10px] font-bold leading-relaxed mb-10 max-w-[80%] uppercase tracking-widest">中国音乐学院 × 咪咕音乐 联合认证</p>
                
                <div className="flex flex-col gap-3">
                  <button className="h-14 bg-white text-background-dark rounded-2xl font-black text-sm tracking-widest italic flex items-center justify-center gap-3 active:scale-95 transition-all shadow-xl shadow-white/5">
                    立即加入认证计划
                    <span className="material-symbols-outlined text-lg">bolt</span>
                  </button>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
                 <span className="material-symbols-outlined text-[12rem] font-light rotate-12">terminal</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                 <h4 className="text-white font-black text-base font-display">核心技能矩阵</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {engineerModules.map((m, i) => (
                  <div key={i} className="bg-white/5 border border-white/5 p-6 rounded-[2.5rem] group hover:border-primary/20 transition-all">
                    <div className="flex justify-between items-start mb-4">
                      <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-2xl fill">{m.icon}</span>
                      </div>
                      <span className="text-[8px] font-black text-white/20 uppercase tracking-widest">{m.level}</span>
                    </div>
                    <h5 className="text-white text-xs font-black mb-1 font-display">{m.title}</h5>
                    <p className="text-white/30 text-[9px] font-bold leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseCenter;
