import type { Metadata } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';

import './globals.css';
import { firm } from '@/lib/content';
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

const site = process.env.NEXT_PUBLIC_SITE_URL || 'https://franklin-santiago-trabalhista.netlify.app';
export const metadata: Metadata = {
 metadataBase: new URL(site), title: `${firm.name} | Atendimento Jurídico em Natal/RN`,
 description: 'Orientação jurídica em Direito Trabalhista e Direito de Família. Atendimento presencial em Natal/RN e online.',
 robots: {index:true,follow:true},
 openGraph: {locale:'pt_BR',type:'website',siteName:firm.name},
};
export default function RootLayout({children}:{children:React.ReactNode}) {
 return <html lang="pt-BR">{gtmId && <GoogleTagManager gtmId={gtmId} />}<body><a href="#conteudo" className="skip-link">Pular para o conteúdo</a>{children}</body></html>;
}

