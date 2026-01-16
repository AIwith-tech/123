
import React from 'react';
import { Page } from '../types';

interface MineProps {
  onNavigate: (page: Page) => void;
}

const Mine: React.FC<MineProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-full bg-[#0B1E3B] font-sans pb-28">
      {/* 顶部状态栏占位 (模拟系统状态栏高度) */}
      <div className="h-10"></div>

      {/* 顶部标题栏 */}
      <header className="px-6 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary rounded-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-background-dark text-lg font-black">music_note</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-white text-sm font-black flex items-center gap-2 tracking-tight">
              咪咕音乐 <span className="text-white/30 font-light">|</span> 中国音乐学院
            </h1>
            <span className="text-[10px] text-white/40 font-medium">个人中心</span>
          </div>
        </div>
        <button className="text-white/60">
          <span className="material-symbols-outlined text-2xl font-light">settings</span>
        </button>
      </header>

      {/* 用户基本信息 */}
      <section className="px-8 pt-8 pb-6 flex flex-col items-center">
        <div className="relative mb-4">
          <div className="size-24 rounded-full border-4 border-[#1A3A6B] overflow-hidden p-1 bg-gradient-to-br from-primary to-primary-dark">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgn7oVibDI4dCxRYx2TjfMDCT1vX1RGkq1LAsPPd6D9pB3KpCAspieGpK9J6su1algSVnBplH5N0eCHJYDHyzflTCJI2ZRg0mUpFuOH1ykhkYrpE_ZtYRM9TIzd2_bZ9XLBKzRPDXRolAnrjQMvcn9S-EJ1G9Djg1Gz6Pss3-xVV5M-pXJuQbhpDkjY28-nF4A-IazzswMod6P_VkbidJhfLppKHI0bYHtOdS6j57ksIF23d_arsTnppA1EOuhi9FMwqtL7U8aCbjC" 
              className="w-full h-full rounded-full object-cover grayscale-[0.2]" 
              alt="Avatar" 
            />
          </div>
          <button className="absolute bottom-1 right-1 size-7 bg-primary rounded-full border-2 border-[#0B1E3B] flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-background-dark text-sm font-black">edit</span>
          </button>
        </div>
        
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="text-white text-2xl font-black font-display">张晓艺</h2>
            <span className="material-symbols-outlined text-primary text-sm fill">female</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <span className="bg-[#1A3A6B]/50 text-primary text-[10px] px-2 py-0.5 rounded-full flex items-center gap-1 border border-primary/20">
              <span className="material-symbols-outlined text-[12px] fill">verified</span>
              已认证学员
            </span>
            <span className="text-white/30 text-[10px] font-medium tracking-wider">ID: 80239104</span>
          </div>
        </div>

        {/* 核心数据统计 */}
        <div className="w-full grid grid-cols-3 gap-4 px-2">
          {[
            { label: '练习时长(h)', value: '128' },
            { label: '获得证书', value: '12' },
            { label: '综合评分', value: '98.5' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-white text-xl font-black font-display mb-1">{item.value}</div>
              <div className="text-white/30 text-[10px] font-medium whitespace-nowrap">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 学习进度卡片 */}
      <section className="px-5 mb-5">
        <div className="bg-[#152B4D]/60 rounded-[2rem] border border-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-white text-base font-black font-display">学习进度</h3>
              <p className="text-[10px] text-white/30 font-medium">本周目标完成情况</p>
            </div>
            <button className="text-primary text-[10px] font-black flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full border border-primary/10">
              查看详情 <span className="material-symbols-outlined text-[12px]">chevron_right</span>
            </button>
          </div>

          <div className="flex items-center gap-8 mt-6">
            {/* 环形进度条 */}
            <div className="relative size-24 flex-shrink-0">
              <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/5" strokeWidth="3" />
                <circle cx="18" cy="18" r="16" fill="none" className="stroke-primary" strokeWidth="3" strokeDasharray="75 100" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col leading-none">
                <span className="text-white text-2xl font-black font-display tracking-tighter">75<span className="text-[10px] font-sans font-medium ml-0.5">%</span></span>
              </div>
            </div>

            <div className="flex-1 space-y-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-primary"></div>
                  <span className="text-white/60 text-xs font-bold">钢琴九级备考</span>
                </div>
                <span className="text-white text-xs font-black">15/20 <span className="text-white/30 font-medium text-[10px]">课时</span></span>
              </div>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-2 rounded-full bg-white/10"></div>
                  <span className="text-white/30 text-xs font-bold">乐理基础</span>
                </div>
                <span className="text-white/20 text-xs font-bold italic tracking-wider">未开始</span>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/5">
            <p className="text-white/40 text-[10px] leading-relaxed">
              保持当前进度，预计 <span className="text-primary font-black">2周后</span> 完成考级准备。
            </p>
          </div>
        </div>
      </section>

      {/* 功能网格 */}
      <section className="px-5 grid grid-cols-2 gap-4">
        <div onClick={() => onNavigate(Page.Study)} className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 active:bg-[#1A3A6B] transition-all">
          <div className="size-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4">
            <span className="material-symbols-outlined text-2xl fill">school</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white text-sm font-black">我的课程</h4>
            <span className="material-symbols-outlined text-white/10 text-base">arrow_forward</span>
          </div>
          <p className="text-[10px] text-white/30 font-medium">3门课程正在学习</p>
        </div>

        <div className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 active:bg-[#1A3A6B] transition-all relative overflow-hidden">
          <div className="size-10 rounded-xl bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4">
            <span className="material-symbols-outlined text-2xl fill">folder_managed</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white text-sm font-black">作品管理</h4>
            <span className="bg-primary/20 text-primary text-[8px] px-1.5 py-0.5 rounded-md border border-primary/20 flex items-center gap-0.5 animate-pulse">
               <span className="material-symbols-outlined text-[10px] animate-spin">refresh</span> 上传中
            </span>
          </div>
          <p className="text-[10px] text-white/30 font-medium">12个作品 | 1个待发布</p>
        </div>

        <div className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 active:bg-[#1A3A6B] transition-all">
          <div className="size-10 rounded-xl bg-green-500/20 flex items-center justify-center text-green-400 mb-4">
            <span className="material-symbols-outlined text-2xl fill">shopping_bag</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white text-sm font-black">我的订单</h4>
            <span className="material-symbols-outlined text-white/10 text-base">arrow_forward</span>
          </div>
          <p className="text-[10px] text-white/30 font-medium">考级/课程/教材</p>
        </div>

        <div onClick={() => onNavigate(Page.AIStudio)} className="bg-[#152B4D]/60 rounded-3xl border border-white/5 p-5 active:bg-[#1A3A6B] transition-all">
          <div className="size-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
            <span className="material-symbols-outlined text-2xl fill">auto_fix_high</span>
          </div>
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-white text-sm font-black">AI精修</h4>
            <span className="material-symbols-outlined text-white/10 text-base">arrow_forward</span>
          </div>
          <p className="text-[10px] text-white/30 font-medium">剩余 3 次免费额度</p>
        </div>
      </section>

      {/* 底部通栏功能 */}
      <section className="px-5 mt-4">
        <div className="bg-[#152B4D]/60 rounded-[1.8rem] border border-white/5 p-5 flex items-center justify-between active:bg-[#1A3A6B] transition-all">
          <div className="flex items-center gap-4">
            <div className="size-10 rounded-xl bg-white/5 flex items-center justify-center text-white/40">
              <span className="material-symbols-outlined text-2xl fill">style</span>
            </div>
            <h4 className="text-white text-sm font-black">我的考级证</h4>
          </div>
          <span className="material-symbols-outlined text-white/20">chevron_right</span>
        </div>
      </section>
    </div>
  );
};

export default Mine;
