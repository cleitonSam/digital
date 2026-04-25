import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Service } from '../../models/service.model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports: [NgFor],
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  // 5 alavancas de growth que rodam em cima da stack proprietária
  services: Service[] = [
    {
      icon: 'fas fa-chart-line',
      title: 'Performance & Mídia Paga',
      items: [
        'Meta + Google + LinkedIn + TikTok com ROAS rastreado',
        'Criativos gerados por IA + revisão humana',
        'Otimização semanal por CAC e LTV',
        'Relatório direto: real investido × real gerado'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Quero rodar mídia que vende'
    },
    {
      icon: 'fas fa-robot',
      title: 'IA de Vendas (Sales Agent)',
      items: [
        'Qualificação de lead em < 60s, 24/7',
        'Conversação por WhatsApp e site',
        'Marca reunião direto no calendário',
        'Score do lead + handoff para humano'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Conhecer a IA'
    },
    {
      icon: 'fas fa-comments',
      title: 'Atendimento Inteligente',
      items: [
        'Inbox unificado: WhatsApp, Instagram, site',
        'Distribuição automática para o time',
        'CRM nativo + histórico do cliente',
        'Resposta média < 5 min'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Ver a plataforma'
    },
    {
      icon: 'fas fa-envelope-open-text',
      title: 'Email & Automação',
      items: [
        'Plataforma própria — sem RD ou ActiveCampaign',
        'Sequências por gatilho de comportamento',
        'A/B test contínuo, segmentação fina',
        'Receita atribuída por campanha'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Quero email que converte'
    },
    {
      icon: 'fas fa-globe',
      title: 'Sites & Landing Pages',
      items: [
        'LP por produto / oferta / persona',
        'Velocidade < 1.5s (Core Web Vitals)',
        'Captura integrada à stack',
        'A/B test sem desenvolvedor'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Ver sites publicados'
    }
  ];

  orderedServices: Service[];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {
    this.orderedServices = this.services;
  }

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.title.setTitle('Stack de Growth — Fluxo Digital & Tech');

    this.meta.updateTag({
      name: 'description',
      content:
        'Performance, IA de vendas, atendimento inteligente, email marketing, sites de conversão. Cinco alavancas operadas em cima da stack proprietária da Fluxo.'
    });
  }

  trackByService(index: number, service: Service): string {
    return service.title;
  }
}
