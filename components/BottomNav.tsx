
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
    { key: Page.Stage, label: '舞台', icon: 'stadium' },
    { key: Page.Mine, label: '我的', icon: 'person' },
  ];

  return (
    <nav className="glass border-t border-white/5 pb-8 pt-3 px-6 flex justify-between items-center z-50 fixed bottom-0 left-0 right-0 max-w-md mx-auto">
      {items.map((item) => (
        <button
          key={item.key}
          onClick={() => onNavigate(item.key)}
          className={`flex flex-col items-center gap-1 transition-all ${
            current === item.key ? 'text-primary scale-110' : 'text-white/30'
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
