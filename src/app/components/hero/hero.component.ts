import { Component, OnInit, Inject, PLATFORM_ID, Renderer2, ElementRef } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ParticlesService } from '../../service/particles.service';
import { ScrollService } from '../../service/scroll.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  isBrowser: boolean;

  constructor(
    private scrollService: ScrollService,
    private particlesService: ParticlesService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
    private renderer: Renderer2,
    private el: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    this.setMetaTags();
    
    if (this.isBrowser) {
      this.particlesService.createParticles('hero-particles');
      this.lazyLoadLogo();
    }
  }

  private setMetaTags(): void {
    this.title.setTitle('Fluxo Digital Tech - Revolucionando o Mercado com Tecnologia');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Tecnologia, inovação e performance para levar sua empresa ao próximo nível. Soluções personalizadas em marketing digital e desenvolvimento de software.'
    });

    // Open Graph / Social Media
    this.meta.updateTag({ property: 'og:title', content: 'Fluxo Digital Tech - Revolucionando o Mercado' });
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Transformação digital completa para seu negócio com nossas soluções em tecnologia e marketing digital.' 
    });
  }

  private lazyLoadLogo(): void {
    const logo = this.el.nativeElement.querySelector('.hero-logo img');
    if (logo) {
      this.renderer.setAttribute(logo, 'loading', 'lazy');
      this.renderer.setAttribute(logo, 'decoding', 'async');
    }
  }

  scrollTo(section: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.scrollService.scrollTo(section);
  }
}