import type { MetadataRoute } from 'next';
export default function sitemap():MetadataRoute.Sitemap {const base=process.env.NEXT_PUBLIC_SITE_URL || 'https://franklin-santiago-trabalhista.netlify.app';return ['','trabalhista/','familia/','privacidade/'].map(p=>({url:`${base}/${p}`,changeFrequency:'monthly',priority:p===''?1:0.8}))}
