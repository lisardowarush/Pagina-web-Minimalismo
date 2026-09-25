export interface SocialChannel {
  id: string;
  name: string;
  handle: string;
  url: string;
  description: string;
  badge: string;
  color: string;
  bgColor: string;
}

export const SOCIAL_CHANNELS: SocialChannel[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'Lisardo Warush',
    url: 'https://www.linkedin.com/in/lisardo-warush',
    description: 'Artículos sobre liderazgo en el hogar, organización consciente y bienestar familiar.',
    badge: 'Artículos y Enfoque Profesional',
    color: 'text-[#0A66C2]',
    bgColor: 'hover:border-[#0A66C2]/40',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@LisardoWarushMinimalismo',
    url: 'https://www.youtube.com/@LisardoWarushMinimalismo',
    description: 'Videos detallados, recorridos por espacios despejados y guías paso a paso para familias.',
    badge: 'Guías y Recorridos Prácticos',
    color: 'text-[#FF0000]',
    bgColor: 'hover:border-[#FF0000]/40',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@lisardo_minimalismo',
    url: 'https://www.tiktok.com/@lisardo_minimalismo',
    description: 'Consejos rápidos de 30 segundos para ordenar juguetes, rutinas matutinas y hábitos ligeros.',
    badge: 'Tips Rápidos del Día a Día',
    color: 'text-slate-900',
    bgColor: 'hover:border-slate-900/40',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@lisardowarush.familiar',
    url: 'https://www.instagram.com/lisardowarush.familiar',
    description: 'Historias diarias de vida real, fotos de transformación de rincones y reflexiones cotidianas.',
    badge: 'Comunidad e Inspiración Diaria',
    color: 'text-[#E1306C]',
    bgColor: 'hover:border-[#E1306C]/40',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: 'Lisardo Warush - Minimalismo Familiar',
    url: 'https://www.facebook.com/lisardowarush.minimalismo',
    description: 'Grupo y página abierta para padres que buscan compartir vivencias y apoyarse mutuamente.',
    badge: 'Espacio Comunitario y Debates',
    color: 'text-[#1877F2]',
    bgColor: 'hover:border-[#1877F2]/40',
  },
];

export const CONTACT_EMAIL = 'lisardowarush51@gmail.com';
