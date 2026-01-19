
import React, { useState } from 'react';
import { Page } from '../types';

interface RegistrationProps {
  onNavigate: (page: Page) => void;
}

const Registration: React.FC<RegistrationProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col min-h-full">
      {/* 统一的标题栏设计 */}
      <header className="sticky top-0 z-50 glass px-6 py-4 flex items-center gap-4 border-b border-white/5">
        <button onClick={() => onNavigate(Page.Home)} className="material-symbols-outlined text-white/60 hover:text-white transition-colors">arrow_back_ios</button>
        <h1 className="text-white text-2xl font-black font-display tracking-tighter italic leading-none">考级报名</h1>
      </header>

      <div className="p-4 space-y-6 pb-24">
        <div className="bg-surface-dark p-4 rounded-2xl border border-white/5">
          <h3 className="text-white font-bold text-sm mb-4">选择考级科目</h3>
          <div className="grid grid-cols-2 gap-3">
            {['钢琴', '小提琴', '大提琴', '古筝', '二胡', '声乐'].map((item, i) => (
              <button 
                key={i} 
                className={`py-3 rounded-xl text-xs font-bold border ${i === 0 ? 'bg-primary/20 border-primary text-primary' : 'bg-white/5 border-white/10 text-white/40'}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-surface-dark p-4 rounded-2xl border border-white/5 space-y-4">
          <h3 className="text-white font-bold text-sm">考生信息</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] text-white/40 block mb-1">姓名</label>
              <input type="text" placeholder="请输入真实姓名" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-transparent" />
            </div>
            <div>
              <label className="text-[10px] text-white/40 block mb-1">证件号码</label>
              <input type="text" placeholder="身份证号 / 护照号" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-primary focus:border-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-[10px] text-white/40 block mb-1">报考等级</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-primary">
                  <option>一级</option>
                  <option>二级</option>
                  <option>三级</option>
                </select>
              </div>
              <div>
                <label className="text-[10px] text-white/40 block mb-1">考区</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-white focus:ring-1 focus:ring-primary">
                  <option>北京</option>
                  <option>上海</option>
                  <option>广州</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 glass border-t border-white/5 z-50 flex items-center justify-between">
        <div>
          <span className="text-[10px] text-white/40 block">报名费用</span>
          <span className="text-primary text-xl font-bold font-display">¥ 380.00</span>
        </div>
        <button 
          onClick={() => onNavigate(Page.Payment)}
          className="bg-primary px-10 py-3 rounded-full text-background-dark font-bold text-sm active:scale-95 transition-all"
        >
          立即支付
        </button>
      </div>
    </div>
  );
};

export default Registration;
