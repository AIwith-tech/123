
import React, { useState, useEffect } from 'react';
import { Page } from '../types';

interface PaymentProps {
  onNavigate: (page: Page) => void;
}

const Payment: React.FC<PaymentProps> = ({ onNavigate }) => {
  const [status, setStatus] = useState<'processing' | 'success'>('processing');

  useEffect(() => {
    const timer = setTimeout(() => setStatus('success'), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-full items-center justify-center p-8 bg-background-dark">
      {status === 'processing' ? (
        <div className="flex flex-col items-center">
          <div className="relative size-24 mb-6">
            <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-primary rounded-full border-t-transparent animate-spin"></div>
          </div>
          <h2 className="text-white text-xl font-bold mb-2">正在安全支付</h2>
          <p className="text-white/40 text-sm">请稍候，正在同步您的考级信息...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
          <div className="size-24 bg-primary rounded-full flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
            <span className="material-symbols-outlined text-background-dark text-5xl font-bold">check</span>
          </div>
          <h2 className="text-white text-2xl font-bold mb-2">支付成功</h2>
          <p className="text-white/60 text-sm mb-12">
            您已成功报名 2026 春季全国音乐考级<br/>
            具体考试时间请关注站内信通知
          </p>
          
          <div className="w-full space-y-3">
            <button 
              onClick={() => onNavigate(Page.Mine)}
              className="w-full bg-primary py-4 rounded-full text-background-dark font-bold text-sm shadow-lg shadow-primary/10"
            >
              查看我的订单
            </button>
            <button 
              onClick={() => onNavigate(Page.Home)}
              className="w-full bg-white/5 py-4 rounded-full text-white font-medium text-sm border border-white/10"
            >
              返回首页
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
