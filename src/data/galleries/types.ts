export interface PhotoItem {
  id: string;
  src: string;
  thumb: string;
  title: string;
  description?: string;
  author?: string;
  width?: number;
  height?: number;
}

export interface GalleryFolder {
  id: string;
  slug: string;
  title: string;
  year: string;
  date?: string;
  category: 'hlavni' | 'deti' | 'archiv' | 'trasa' | 'atmosfera';
  coverPhoto: string;
  description: string;
  photos: PhotoItem[];
}
