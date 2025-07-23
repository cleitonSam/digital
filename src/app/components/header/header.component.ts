import { Component, HostListener, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, DOCUMENT } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(DOCUMENT) private document: Document,
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.setMetaTags();
    this.setCanonicalUrl();
  }

  private setMetaTags(): void {
    // Título principal otimizado
    this.title.setTitle('Fluxo Digital Tech - Soluções em Marketing, Tecnologia e Infraestrutura');

    // Meta tags essenciais
    this.meta.addTags([
      { name: 'description', content: 'Fluxo Digital Tech: Transformação digital completa com soluções integradas de marketing digital, desenvolvimento de software e infraestrutura de TI.' },
      { name: 'keywords', content: 'marketing digital, desenvolvimento web, infraestrutura de TI, soluções tecnológicas, angular, seo, cloud computing' },
      { name: 'author', content: 'Fluxo Digital Tech' },
      { name: 'robots', content: 'index, follow' },
      
      // Open Graph / Social Media
      { property: 'og:title', content: 'Fluxo Digital Tech - Soluções Integradas de Tecnologia' },
      { property: 'og:description', content: 'Soluções completas em marketing digital, desenvolvimento de software e infraestrutura de TI para sua empresa.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.fluxodigitaltech.com.br' },
      // { property: 'og:image', content: 'URL_DA_IMAGEM' },
      
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Fluxo Digital Tech - Soluções em Tecnologia' },
      { name: 'twitter:description', content: 'Transformação digital completa para seu negócio.' }
    ]);
  }

  private setCanonicalUrl(): void {
    if (!this.isBrowser) return;
    
    const canonicalUrl = 'https://www.fluxodigitaltech.com.br' + this.router.url.split('?')[0];
    const link: HTMLLinkElement = this.renderer.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.renderer.setAttribute(link, 'href', canonicalUrl);
    this.renderer.appendChild(this.document.head, link);
  }


  // Scroll suave com fallback para SSR
  smoothScrollTo(sectionId: string, event: Event): void {
    if (!this.isBrowser) return;
    
    event.preventDefault();
    const section = this.document.getElementById(sectionId);
    const headerHeight = this.document.querySelector('header')?.clientHeight || 0;
    
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800;
      let startTime: number | null = null;

      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    }
  }

  private easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    if (!this.isBrowser) return;
    this.isScrolled = window.scrollY > 50;
  }
}