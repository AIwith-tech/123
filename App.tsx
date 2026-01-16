
import React, { useState } from 'react';
import { Page } from './types';
import Home from './pages/Home';
import Study from './pages/Study';
import Stage from './pages/Stage';
import Mine from './pages/Mine';
import CourseDetail from './pages/CourseDetail';
import Registration from './pages/Registration';
import Payment from './pages/Payment';
import AIRefine from './pages/AIRefine';
import AIStudio from './pages/AIStudio';
import CourseCenter from './pages/CourseCenter';
import OfflineStage from './pages/OfflineStage';
import MyPerformances from './pages/MyPerformances';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.Home);

  const renderPage = () => {
    switch (currentPage) {
      case Page.Home: return <Home onNavigate={setCurrentPage} />;
      case Page.Study: return <Study onNavigate={setCurrentPage} />;
      case Page.Stage: return <Stage onNavigate={setCurrentPage} />;
      case Page.Mine: return <Mine onNavigate={setCurrentPage} />;
      case Page.CourseDetail: return <CourseDetail onNavigate={setCurrentPage} />;
      case Page.Registration: return <Registration onNavigate={setCurrentPage} />;
      case Page.Payment: return <Payment onNavigate={setCurrentPage} />;
      case Page.AIRefine: return <AIRefine onNavigate={setCurrentPage} />;
      case Page.AIStudio: return <AIStudio onNavigate={setCurrentPage} />;
      case Page.CourseCenter: return <CourseCenter onNavigate={setCurrentPage} />;
      case Page.OfflineStage: return <OfflineStage onNavigate={setCurrentPage} />;
      case Page.MyPerformances: return <MyPerformances onNavigate={setCurrentPage} />;
      default: return <Home onNavigate={setCurrentPage} />;
    }
  };

  const showBottomNav = [Page.Home, Page.Study, Page.Stage, Page.Mine].includes(currentPage);

  return (
    <div className="relative w-full h-screen max-w-md mx-auto bg-background-dark overflow-hidden flex flex-col shadow-2xl">
      <div className="flex-1 overflow-y-auto no-scrollbar relative">
        {renderPage()}
      </div>
      {showBottomNav && (
        <BottomNav current={currentPage} onNavigate={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
