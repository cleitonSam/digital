import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
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
    private title: Title
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
      'Fluxo Digital & Tech | A stack que vende — IA, atendimento, email e estratégia em um só motor'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Não somos agência. Somos o motor. Plataforma própria de IA, atendimento e email marketing operada por estrategistas. Mais de R$ 200 milhões em vendas operadas pela stack Fluxo.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'plataforma de marketing, IA para vendas, automação de atendimento, email marketing, growth marketing, marketing performance, agência de growth, marketing digital com tecnologia própria, alternativa V4 Company, alternativa Turbo Partners'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Fluxo Digital & Tech | A stack que vende'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Plataforma própria de IA + atendimento + email + dados, operada por estrategistas. Mais de R$ 200 milhões em vendas operadas.'
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:locale', content: 'pt_BR' });

    this.meta.updateTag({
      name: 'twitter:title',
      content: 'Fluxo Digital & Tech | A stack que vende'
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: 'Plataforma própria de IA + atendimento + email. Operada por estrategistas. +R$ 200M em vendas.'
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
