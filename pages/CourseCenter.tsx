
import React, { useState } from 'react';
import { Page } from '../types';

interface CourseCenterProps {
  onNavigate: (page: Page) => void;
}

const CourseCenter: React.FC<CourseCenterProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('music');

  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B]">
      <header className="sticky top-0 z-20 glass px-6 py-5 flex items-center gap-5">
        <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/60">arrow_back_ios</button>
        <div>
          <h1 className="text-white text-base font-black font-display tracking-tight">发现名师课程</h1>
          <p className="text-[8px] text-primary/60 font-bold uppercase tracking-[0.2em]">Explore Global Courses</p>
        </div>
      </header>

      {/* 分类标签 */}
      <div className="flex gap-10 px-6 py-4 border-b border-white/5 overflow-x-auto no-scrollbar">
        {[
          { id: 'music', label: '精品音乐课' },
          { id: 'engineer', label: 'AI认证计划' },
          { id: 'master', label: '大师殿堂' }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap text-sm font-black pb-2 transition-all relative ${activeTab === tab.id ? 'text-primary' : 'text-white/30'}`}
          >
            {tab.label}
            {activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"></div>}
          </button>
        ))}
      </div>

      <main className="p-6">
        {/* AI 工程师认证 - 极简科技风格 */}
        {activeTab === 'engineer' && (
          <div className="mb-8 relative bg-gradient-to-br from-[#121212] to-[#1e3c72]/20 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[9px] bg-primary/10 text-primary px-3 py-1 rounded-full font-black tracking-[0.2em] mb-4 inline-block">ACCREDITATION</span>
              <h2 className="text-white text-2xl font-black italic mb-2 tracking-tighter font-display">AI 音乐工程师认证</h2>
              <p className="text-white/40 text-[10px] mb-8 font-medium leading-relaxed max-w-[80%]">跨学科融合教学，从声学原理到 AI 算法，由咪咕音乐与中国音乐学院联合签发权威证书。</p>
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-[9px] text-white/30 font-bold uppercase">Price</span>
                  <span className="text-white text-xl font-black tracking-tight font-display">¥29.9<span className="text-[10px] text-white/40 italic font-sans ml-1">/月</span></span>
                </div>
                <button className="flex-1 bg-primary text-background-dark h-12 rounded-2xl font-black text-xs tracking-widest hover:bg-white transition-all shadow-xl shadow-primary/10">立即加入认证计划</button>
              </div>
            </div>
            <span className="material-symbols-outlined absolute -right-8 -top-8 text-white/[0.03] text-[12rem] font-light rotate-12 pointer-events-none">memory</span>
          </div>
        )}

        <div className="space-y-6">
          {activeTab === 'master' && (
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: '莫扎特作品的演奏美学', teacher: '李名阳 教授', price: '¥199', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ8GUyqSsEPYOF1Fd4oqNpEpYOobpoAm7YTFKuN0M_38SgRQGkYRmFkEOpl3jCHPhYN-UFagDgiOyjatfhFYQs8-aqSpRhY4FojHuvUcsaSzj4eYsXIzLDk29zp5ZeyGIfZYbcTNMZ1LBgleaNo50BpeR3b280XqXtuxYpw_ChEPzCAcuMY-XoEN3m9ggWXs82VFsDgXAlM9l1tb-na9boAovj9OoUZ4RSmH-_UklbHz7aiHODFY5lvO1PpENAeeEfsf751c3B08TX' },
                { title: '肖邦：浪漫主义的极致解读', teacher: '张羽 教授', price: '¥258', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgn7oVibDI4dCxRYx2TjfMDCT1vX1RGkq1LAsPPd6D9pB3KpCAspieGpK9J6su1algSVnBplH5N0eCHJYDHyzflTCJI2ZRg0mUpFuOH1ykhkYrpE_ZtYRM9TIzd2_bZ9XLBKzRPDXRolAnrjQMvcn9S-EJ1G9Djg1Gz6Pss3-xVV5M-pXJuQbhpDkjY28-nF4A-IazzswMod6P_VkbidJhfLppKHI0bYHtOdS6j57ksIF23d_arsTnppA1EOuhi9FMwqtL7U8aCbjC' }
              ].map((c, i) => (
                <div key={i} onClick={() => onNavigate(Page.CourseDetail)} className="group relative bg-[#11294d]/40 rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl active:scale-[0.98] transition-all">
                   <div className="h-48 relative overflow-hidden">
                      <img src={c.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={c.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-5 bg-primary/20 backdrop-blur-md text-primary text-[8px] font-black px-3 py-1 rounded-full border border-primary/20 tracking-[0.2em] uppercase italic">Masterclass</div>
                   </div>
                   <div className="p-6 flex justify-between items-end">
                      <div>
                        <h4 className="text-white text-base font-black font-display mb-1 tracking-tight">{c.title}</h4>
                        <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{c.teacher}</span>
                      </div>
                      <div className="text-right flex flex-col items-end gap-1">
                         <span className="text-primary font-black text-lg font-display">{c.price}</span>
                         <span className="material-symbols-outlined text-white/20 text-xl font-light">shopping_cart</span>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'music' && (
             <div className="grid grid-cols-1 gap-5">
                {[
                  { title: '钢琴考级一级：乐理与演奏精讲', teacher: '王伟老师', price: '¥99', tag: 'RECOMMENDED', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAA4nHkDteDdtjc2v7eoZHqP-8ETcx8E-3mrvvX2ZP6ypr4ZMR-Lfw7wHKnnf8u03ZtSHW6H-Ag3g4DDqgaObkvnSLDBezuT6Io-PlpVjSZ8kV8uSyjocBlledRNldYQB8qNgqdd1R95-JHH_tOhPdoIB1ss7KQAoIWO_gNx3aCXrQVcMtY6SLrh55BvNre6fQaokGxkF2zw7ckZ_iar9ZFxH8VuIB9kcEIDMWBm68WOj-1XrFR7JsZYTM-RK5Q2SzBuQI0E7zxfZGN' },
                  { title: '古筝技法：从入门到专业跨越', teacher: '赵琴老师', price: '免费', tag: 'FREE', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyHoo8t6Y6ToeXtFpE23EBMJvlzd7oiTCFYVaoSXRFv9AgxC5dGFkDQ1_pCWBtJ9fnYITGmbRxww7XWcS0oKEr2-w47iQ89IHoUKl_wReM_-7QBsA89wJBr_ENbujeHX34R6pb5zLvlZLWctPWIjPegYfdUt8gfh1RTP5KAOBBkPF9eJ9YAAIc1KWnM0LzO8Awv2IJBKkehOd1TYvDe3Wg-xiizcHoLGKvT9GxSY4JF2zsCUDYXveF-JvCUOvCnYh-tvTUMi73P8Ty' }
                ].map((c, i) => (
                  <div key={i} onClick={() => onNavigate(Page.CourseDetail)} className="bg-surface-dark/30 p-4 rounded-3xl flex gap-5 border border-white/5 active:bg-white/5 transition-all">
                    <div className="size-24 rounded-2xl overflow-hidden shrink-0 shadow-xl">
                      <img src={c.img} className="w-full h-full object-cover" alt={c.title} />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                           <span className="text-[7px] font-black text-primary border border-primary/30 px-1.5 py-0.5 rounded italic">{c.tag}</span>
                           <h4 className="text-white text-xs font-black line-clamp-1 font-display">{c.title}</h4>
                        </div>
                        <span className="text-[9px] text-white/40 font-bold uppercase tracking-widest">{c.teacher}</span>
                      </div>
                      <div className="flex items-center justify-between">
                         <span className="text-primary text-sm font-black font-display tracking-widest">{c.price}</span>
                         <span className="material-symbols-outlined text-white/20 text-lg">chevron_right</span>
                      </div>
                    </div>
                  </div>
                ))}
             </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CourseCenter;
