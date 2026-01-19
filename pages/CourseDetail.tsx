
import React from 'react';
import { Page } from '../types';

interface CourseDetailProps {
  onNavigate: (page: Page) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onNavigate }) => {
  const imageUrl = "https://i.imgs.ovh/2026/01/14/yv8QAU.png";
  
  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] pb-24 font-sans">
      {/* 视频播放区 */}
      <div className="aspect-video w-full relative bg-black shadow-2xl">
        <img 
          src={imageUrl} 
          className="w-full h-full object-cover opacity-60" 
          alt="Course Cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="size-16 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-primary/30 active:scale-90 transition-all">
             <span className="material-symbols-outlined text-primary text-4xl fill">play_arrow</span>
           </div>
        </div>
        
        {/* 顶部控制栏 */}
        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between">
          <button onClick={() => onNavigate(Page.Study)} className="size-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white border border-white/10 active:scale-95 transition-all">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-white/60">cast</span>
            <span className="material-symbols-outlined text-white/60">more_vert</span>
          </div>
        </div>

        {/* 进度条预览 */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <div className="h-full bg-primary w-1/3 shadow-[0_0_8px_#f2b90d]"></div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h1 className="text-white text-xl font-black font-display tracking-tight leading-tight mb-2">钢琴考级精讲：乐理与演奏一级</h1>
            <p className="text-white/40 text-[11px] font-bold tracking-widest uppercase">已学 35% · 本节已学 12:45</p>
          </div>
          <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-lg text-primary text-[10px] font-black italic">
            正在学习
          </div>
        </div>

        <div className="flex gap-8 border-b border-white/5 mb-6">
          <button className="pb-3 text-primary border-b-2 border-primary font-black text-sm tracking-widest italic">课程目录</button>
          <button className="pb-3 text-white/40 font-bold text-sm tracking-widest">学习资料</button>
          <button className="pb-3 text-white/40 font-bold text-sm tracking-widest">师生问答</button>
        </div>

        {/* 课时列表 */}
        <div className="space-y-4">
          {[
            { id: 1, title: '课程介绍：钢琴基础理论', time: '05:30', status: 'completed' },
            { id: 2, title: '手型与指法基础训练', time: '12:45', status: 'playing' },
            { id: 3, title: '认识五线谱与音高', time: '08:12', status: 'unlocked' },
            { id: 4, title: '第一首练习曲：小星星', time: '15:20', status: 'unlocked' },
          ].map(lesson => (
            <div 
              key={lesson.id} 
              className={`p-5 rounded-[1.8rem] border flex items-center justify-between transition-all active:scale-[0.98] ${
                lesson.status === 'playing' ? 'bg-primary/5 border-primary/20 shadow-lg' : 'bg-[#112138] border-white/5'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className={`size-8 rounded-full flex items-center justify-center text-[10px] font-black ${
                  lesson.status === 'playing' ? 'bg-primary text-background-dark' : 'bg-white/5 text-white/30'
                }`}>
                  {lesson.id}
                </div>
                <div>
                  <h4 className={`text-sm font-black tracking-tight mb-1 ${lesson.status === 'playing' ? 'text-primary' : 'text-white/80'}`}>{lesson.title}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-white/30 font-bold uppercase">{lesson.time}</span>
                    {lesson.status === 'completed' && <span className="material-symbols-outlined text-xs text-green-500 fill">check_circle</span>}
                  </div>
                </div>
              </div>
              <span className={`material-symbols-outlined text-xl ${
                lesson.status === 'playing' ? 'text-primary animate-pulse' : 'text-white/10'
              }`}>
                {lesson.status === 'playing' ? 'bar_chart' : 'play_circle'}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* 底部学习工具栏 */}
      <div className="fixed bottom-0 left-0 right-0 p-5 glass border-t border-white/10 z-50 flex gap-4">
        <button className="flex-1 bg-white/5 py-4 rounded-2xl text-white/60 font-black text-[11px] tracking-[0.2em] border border-white/10 active:bg-white/10 flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-xl">download</span>
          离线缓存
        </button>
        <button 
          onClick={() => onNavigate(Page.AIRefine)}
          className="flex-[2] bg-primary py-4 rounded-2xl text-background-dark font-black text-sm tracking-widest italic active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
        >
          <span className="material-symbols-outlined fill">science</span>
          开启智慧陪练
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
