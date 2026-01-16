
import React from 'react';
import { Page, Course } from '../types';

interface StudyProps {
  onNavigate: (page: Page) => void;
}

const Study: React.FC<StudyProps> = ({ onNavigate }) => {
  const myCourses: Course[] = [
    { id: '1', title: '钢琴一级考级精讲教程', teacher: '张教授', progress: 30, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgn7oVibDI4dCxRYx2TjfMDCT1vX1RGkq1LAsPPd6D9pB3KpCAspieGpK9J6su1algSVnBplH5N0eCHJYDHyzflTCJI2ZRg0mUpFuOH1ykhkYrpE_ZtYRM9TIzd2_bZ9XLBKzRPDXRolAnrjQMvcn9S-EJ1G9Djg1Gz6Pss3-xVV5M-pXJuQbhpDkjY28-nF4A-IazzswMod6P_VkbidJhfLppKHI0bYHtOdS6j57ksIF23d_arsTnppA1EOuhi9FMwqtL7U8aCbjC' },
    { id: '3', title: '小提琴演奏基础入门', teacher: '王教授', progress: 85, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8GUyqSsEPYOF1Fd4oqNpEpYOobpoAm7YTFKuN0M_38SgRQGkYRmFkEOpl3jCHPhYN-UFagDgiOyjatfhFYQs8-aqSpRhY4FojHuvUcsaSzj4eYsXIzLDk29zp5ZeyGIfZYbcTNMZ1LBgleaNo50BpeR3b280XqXtuxYpw_ChEPzCAcuMY-XoEN3m9ggWXs82VFsDgXAlM9l1tb-na9boAovj9OoUZ4RSmH-_UklbHz7aiHODFY5lvO1PpENAeeEfsf751c3B08TX' }
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans">
      <header className="sticky top-0 z-20 glass px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-white text-xl font-black font-display tracking-tight">我的学堂</h1>
          <p className="text-[8px] text-primary/60 font-bold uppercase tracking-[0.3em]">Personal Growth Tracker</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
             <span className="material-symbols-outlined text-2xl font-black fill">military_tech</span>
          </div>
        </div>
      </header>

      <div className="p-6 flex flex-col gap-6 pb-24">
        {/* 数据看板 */}
        <div className="bg-gradient-to-br from-white/[0.05] to-transparent p-6 rounded-[2rem] border border-white/10 flex items-center justify-between shadow-2xl relative overflow-hidden">
           <div>
              <p className="text-white/30 text-[9px] font-black uppercase tracking-widest mb-1">Total Learning Time</p>
              <h3 className="text-white text-3xl font-black font-display italic">42 <span className="text-xs text-primary font-sans not-italic font-black">MINS</span></h3>
           </div>
           <button className="bg-white/10 text-white text-[10px] font-black px-5 py-2 rounded-full border border-white/10 hover:bg-white/20 transition-all uppercase tracking-widest">Calendar</button>
           <div className="absolute -right-6 -bottom-6 size-24 bg-primary/5 rounded-full blur-2xl"></div>
        </div>

        <div className="flex items-center justify-between mt-4">
          <h3 className="text-white font-black text-base font-display">正在修读</h3>
          <span className="text-[10px] text-white/30 font-bold tracking-widest uppercase">Ongoing Courses</span>
        </div>
        
        {myCourses.length > 0 ? (
          <div className="space-y-5">
            {myCourses.map(course => (
              <div 
                key={course.id} 
                onClick={() => onNavigate(Page.CourseDetail)}
                className="group bg-surface-dark/30 p-4 rounded-[2rem] flex gap-5 border border-white/5 active:bg-white/10 transition-all cursor-pointer shadow-lg"
              >
                <div className="size-20 rounded-2xl overflow-hidden shrink-0 shadow-xl group-hover:scale-105 transition-transform duration-500">
                  <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                   <div>
                      <h4 className="text-white text-xs font-black font-display leading-tight group-hover:text-primary transition-colors">{course.title}</h4>
                      <p className="text-white/40 text-[9px] font-bold mt-1 tracking-widest uppercase">{course.teacher}</p>
                   </div>
                   <div className="mt-2">
                      <div className="flex justify-between items-center mb-1.5">
                         <span className="text-[8px] text-white/30 font-black tracking-widest uppercase">Progress · {course.progress}%</span>
                         <span className="text-primary text-[8px] font-black italic tracking-widest">RESUME</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                         <div className="h-full bg-gradient-to-r from-primary to-primary-dark shadow-[0_0_8px_rgba(242,185,13,0.4)]" style={{ width: `${course.progress}%` }}></div>
                      </div>
                   </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 flex flex-col items-center text-center">
             <div className="size-24 rounded-full bg-white/5 flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-white/10 text-5xl font-light">auto_stories</span>
             </div>
             <p className="text-white/30 text-xs font-bold tracking-[0.2em] leading-relaxed">您的课程库暂时还是空的<br/>大师正期待与您在琴房相遇</p>
             <button onClick={() => onNavigate(Page.CourseCenter)} className="mt-8 bg-primary text-background-dark px-10 py-3 rounded-full text-xs font-black tracking-[0.2em] italic active:scale-95 transition-all shadow-xl shadow-primary/10">进入课程中心</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Study;
