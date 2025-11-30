export interface ModuleItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export interface Benefit {
  id: number;
  text: string;
}

export enum ToneType {
  PROFESSIONAL = 'Profissional e Autoritário',
  STORYTELLER = 'Storyteller Emocionante',
  VIRAL = 'Viral e Energético (TikTok/Reels)',
  FRIENDLY = 'Amigável e Acolhedor'
}
