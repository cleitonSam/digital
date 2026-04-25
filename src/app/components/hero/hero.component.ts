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
    }
  }

  private setMetaTags(): void {
    this.title.setTitle(
      'Fluxo Digital & Tech | Marketing e tecnologia para academias, clínicas e pet shops'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Mais matrículas, menos churn e ticket maior para negócios de serviço recorrente. Stack de marketing, automação e dados feito sob medida para academias, clínicas e pet shops.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'marketing digital para academias, agência marketing fitness, marketing para clínicas, marketing para pet shop, automação WhatsApp academia, CRM academia, retenção de alunos, churn academia, sistema gestão academia, marketing performance fitness'
    });

    // Open Graph
    this.meta.updateTag({
      property: 'og:title',
      content: 'Fluxo Digital & Tech | Crescimento previsível para serviços recorrentes'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Marketing + tecnologia para academias, clínicas e pet shops crescerem com previsibilidade. +38% de matrícula, -42% de churn em média.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });

    // Twitter
    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Fluxo Digital & Tech | Crescimento previsível para serviços recorrentes'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Marketing e tecnologia para academias, clínicas e pet shops. Mais matrícula, menos churn.'
    });
  }

  scrollTo(section: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.scrollService.scrollTo(section);
  }
}
