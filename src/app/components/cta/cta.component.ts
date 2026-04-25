import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ScrollService } from '../../service/scroll.service';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  private readonly whatsappNumber = '5511920412220';

  constructor(
    private scrollService: ScrollService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  scrollTo(section: string): void {
    this.scrollService.scrollTo(section);
  }

  onSubmit(event: Event, form: HTMLFormElement): void {
    event.preventDefault();
    if (!isPlatformBrowser(this.platformId)) return;

    const data = new FormData(form);
    const nome = (data.get('nome') as string) || '';
    const empresa = (data.get('empresa') as string) || '';
    const setor = (data.get('setor') as string) || '';
    const whats = (data.get('whatsapp') as string) || '';

    const msg =
      `Olá Fluxo! Quero meu diagnóstico gratuito.%0A%0A` +
      `Nome: ${encodeURIComponent(nome)}%0A` +
      `Negócio: ${encodeURIComponent(empresa)}%0A` +
      `Setor: ${encodeURIComponent(setor)}%0A` +
      `WhatsApp: ${encodeURIComponent(whats)}`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${msg}`;

    // Disparo de evento de conversão para GTM/GA4
    if ((window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'lead_diagnostico',
        setor,
        empresa
      });
    }

    window.open(url, '_blank', 'noopener');
  }
}
