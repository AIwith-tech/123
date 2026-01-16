
export enum Page {
  Home = 'home',
  Study = 'study',
  Stage = 'stage',
  Mine = 'mine',
  CourseDetail = 'course_detail',
  Registration = 'registration',
  Payment = 'payment',
  AIRefine = 'ai_refine',
  AIStudio = 'ai_studio',
  CourseCenter = 'course_center',
  OfflineStage = 'offline_stage',
  MyPerformances = 'my_performances'
}

export interface Course {
  id: string;
  title: string;
  teacher: string;
  progress: number;
  image: string;
  tag?: string;
  price?: string;
  isSubscribed?: boolean;
}

export interface PerformanceEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  status: 'ongoing' | 'upcoming' | 'ended';
  image: string;
}
