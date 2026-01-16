
import React from 'react';
import { Page } from '../types';

interface CourseDetailProps {
  onNavigate: (page: Page) => void;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-full">
      <div className="aspect-video w-full relative bg-black">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgn7oVibDI4dCxRYx2TjfMDCT1vX1RGkq1LAsPPd6D9pB3KpCAspieGpK9J6su1algSVnBplH5N0eCHJYDHyzflTCJI2ZRg0mUpFuOH1ykhkYrpE_ZtYRM9TIzd2_bZ9XLBKzRPDXRolAnrjQMvcn9S-EJ1G9Djg1Gz6Pss3-xVV5M-pXJuQbhpDkjY28-nF4A-IazzswMod6P_VkbidJhfLppKHI0bYHtOdS6j57ksIF23d_arsTnppA1EOuhi9FMwqtL7U8aCbjC" 
          className="w-full h-full object-cover opacity-60" 
          alt="Course Cover" 
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <span className="material-symbols-outlined text-white text-6xl fill">play_circle</span>
        </div>
        <button onClick={() => onNavigate(Page.Study)} className="absolute top-4 left-4 size-10 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
      </div>

      <div className="p-4">
        <h1 className="text-white text-xl font-bold mb-2">钢琴考级精讲：乐理与演奏一级</h1>
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-1">
            <span className="material-symbols-outlined text-primary text-sm">star</span>
            <span className="text-primary text-xs font-bold">4.9</span>
          </div>
          <span className="text-white/40 text-xs">2,491 人已学习</span>
          <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded">官方认证</span>
        </div>

        <div className="flex gap-8 border-b border-white/5 mb-4">
          <button className="pb-3 text-primary border-b-2 border-primary font-bold text-sm">目录</button>
          <button className="pb-3 text-white/40 font-medium text-sm">详情</button>
          <button className="pb-3 text-white/40 font-medium text-sm">评价</button>
        </div>

        <div className="space-y-4">
          {[
            { id: 1, title: '课程介绍：钢琴基础理论', time: '05:30', active: true },
            { id: 2, title: '手型与指法基础训练', time: '12:45', active: false },
            { id: 3, title: '认识五线谱与音高', time: '08:12', active: false },
            { id: 4, title: '第一首练习曲：小星星', time: '15:20', active: false },
          ].map(lesson => (
            <div key={lesson.id} className={`p-4 rounded-xl border flex items-center justify-between ${lesson.active ? 'bg-primary/5 border-primary/20' : 'bg-surface-dark border-white/5'}`}>
              <div className="flex items-center gap-4">
                <span className={`text-xs font-bold ${lesson.active ? 'text-primary' : 'text-white/20'}`}>{lesson.id.toString().padStart(2, '0')}</span>
                <div>
                  <h4 className={`text-sm font-medium ${lesson.active ? 'text-primary' : 'text-white/80'}`}>{lesson.title}</h4>
                  <span className="text-[10px] text-white/40">{lesson.time}</span>
                </div>
              </div>
              <span className={`material-symbols-outlined text-sm ${lesson.active ? 'text-primary' : 'text-white/20'}`}>{lesson.active ? 'pause_circle' : 'play_circle'}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-white/5 z-50 flex gap-4">
        <button className="flex-1 bg-white/5 py-3 rounded-full text-white font-bold text-sm border border-white/10 active:scale-95 transition-all">收藏课程</button>
        <button 
          onClick={() => onNavigate(Page.Registration)}
          className="flex-[2] bg-primary py-3 rounded-full text-background-dark font-bold text-sm active:scale-95 transition-all shadow-lg shadow-primary/20"
        >
          立即报名考级
        </button>
      </div>
    </div>
  );
};

export default CourseDetail;
