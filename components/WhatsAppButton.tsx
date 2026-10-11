'use client';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/content';

type Props = { topic?: string; source: string; children?: React.ReactNode; className?: string; floating?: boolean };
export default function WhatsAppButton({topic,source,children,className='',floating=false}: Props) {
  function onClick() {
    // Evento apenas de clique; não representa conversa iniciada nem contratação.
    if (typeof window !== 'undefined') {
      const w = window as Window & { dataLayer?: Record<string,string>[] };
      w.dataLayer?.push({event:'whatsapp_click',cta_source:source});
    }
  }
  return <a href={whatsappUrl(topic)} target="_blank" rel="noopener noreferrer" onClick={onClick}
    aria-label={floating ? 'Abrir contato do escritório pelo WhatsApp' : undefined}
    className={`${floating ? 'whatsapp-float' : 'cta-button'} ${className}`}>
    <MessageCircle size={floating ? 29 : 20} strokeWidth={2.2} aria-hidden="true" />
    {!floating && <span>{children || 'Falar pelo WhatsApp'}</span>}
  </a>;
}
