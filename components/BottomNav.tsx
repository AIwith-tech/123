import React from 'react';
import { Page } from '../types';

interface BottomNavProps {
  current: Page;
  onNavigate: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ current, onNavigate }) => {
  const items = [
    { key: Page.Home, label: '首页', icon: 'home' },
    { key: Page.Study, label: '学习', icon: 'menu_book' },
    { key: Page.Stage, label: '视频彩铃', icon: 'stadium' },
    { key: Page.Mine, label: '我的', icon: 'person' },
  ];

  return (
    <nav 
      className="glass border-t border-white/10 px-6 flex justify-between items-center z-50 shrink-0 w-full"
      style={{ 
        paddingTop: '0.75rem',
        paddingBottom: 'calc(env(safe-area-inset-bottom) + 0.75rem)' 
      }}
    >
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => onNavigate(item.key)}
          className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
            current === item.key ? 'text-primary scale-105' : 'text-white/30'
          }`}
        >
          <span className={`material-symbols-outlined text-[26px] ${current === item.key ? 'fill' : 'font-light'}`}>
            {item.icon}
          </span>
          <span className={`text-[10px] font-black tracking-tight ${current === item.key ? 'opacity-100' : 'opacity-60'}`}>
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;