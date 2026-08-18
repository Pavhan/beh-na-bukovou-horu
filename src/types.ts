export interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  category?: string;
  location: string;
  isHighlight?: boolean;
}

export interface RaceCategory {
  id: string;
  code: string;
  name: string;
  gender: 'M' | 'F' | 'ALL';
  yearRange: string;
  birthMin?: number;
  birthMax?: number;
  distance: string;
  type: 'adult' | 'junior' | 'child';
  description?: string;
}

export interface CourseRecord {
  category: string;
  holder: string;
  time: string;
  year: string;
  notes?: string;
}

export interface Sponsor {
  name: string;
  tier: 'patron' | 'gold' | 'partner' | 'supporter';
  logoUrl?: string;
  description?: string;
  url?: string;
}

export interface GalleryPhoto {
  id: string;
  url: string;
  title: string;
  author: string;
  year: string;
}

export interface ResultLink {
  year: string;
  url: string;
  badge?: string;
  description: string;
}
