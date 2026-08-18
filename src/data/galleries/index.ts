import { gallery2024Hlavni } from './rocnik-2024-hlavni';
import { gallery2024Deti } from './rocnik-2024-deti';
import { galleryTrasa } from './trasa-bukova-hora';
import { galleryOficialniArchiv } from './oficialni-archiv';
import { GalleryFolder } from './types';

export * from './types';

export const PHOTO_GALLERIES: GalleryFolder[] = [
  gallery2024Hlavni,
  gallery2024Deti,
  galleryTrasa,
  galleryOficialniArchiv
];
