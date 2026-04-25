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
export class ServicesComponent {
  // ---- 5 PRODUTOS DE GROWTH (foco da home) ----
  services: Service[] = [
    {
      icon: 'fas fa-chart-line',
      title: 'Dashboard de Performance',
      items: [
        'KPIs do seu setor: churn, matrícula, ticket, LTV',
        'Integração com seu sistema (academia, clínica, pet)',
        'Alertas automáticos para queda de ativos',
        'Acesso pelo celular em tempo real'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Ver demo do dashboard'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'Automação WhatsApp 24/7',
      items: [
        'Recuperação de cliente sumido (winback)',
        'Confirmação automática de aulas e consultas',
        'Resposta inteligente fora do horário',
        'Pesquisa de NPS e prova social',
        'Integração com seu CRM e agenda'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Quero automatizar meu WhatsApp'
    },
    {
      icon: 'fas fa-users-cog',
      title: 'CRM + Gestão de Reputação',
      items: [
        'Funil comercial: visita → matrícula → retenção',
        'Monitoramento de Google Reviews em tempo real',
        'Resposta padronizada e personalizada',
        'Recuperação de cliente insatisfeito',
        'Score de saúde da carteira'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Conhecer o CRM'
    },
    {
      icon: 'fas fa-globe',
      title: 'Sites e Landing Pages que vendem',
      items: [
        'Landing page por modalidade / serviço',
        'Otimização para Google (SEO técnico)',
        'Captura integrada com WhatsApp e CRM',
        'Velocidade < 1.5s (Core Web Vitals)',
        'Mobile-first de verdade'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Ver sites publicados'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Mídia paga com ROAS rastreado',
      items: [
        'Meta Ads + Google Ads para captação local',
        'Criativos específicos do seu setor',
        'Acompanhamento de matrícula gerada por canal',
        'Otimização semanal por CAC',
        'Relatório mensal sem firula'
      ],
      link: 'https://wa.me/5511920412220',
      linkText: 'Quero rodar mídia que vende'
    }
  ];

  // ---- TRACK TECH (em outra seção, fora da home principal) ----
  // mantidos no model mas não exibidos como growth
  techServices: Service[] = [
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Integrado',
      items: ['Loja virtual segura', 'Assinaturas recorrentes', 'Pagamentos integrados'],
      link: 'https://wa.me/5511920412220',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Integração de Sistemas',
      items: ['APIs e webhooks', 'Fluxo de dados automatizado', 'Centralização de informações'],
      link: 'https://wa.me/5511920412220',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Design e Conteúdo Digital',
      items: ['Criativos para tráfego pago', 'Conteúdo audiovisual', 'Banco de imagens próprio'],
      link: 'https://wa.me/5511920412220',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-desktop',
      title: 'Suporte Técnico Especializado',
      items: ['Suporte remoto', 'Visitas técnicas', 'Monitoramento proativo'],
      link: 'https://wa.me/5511920412220',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-video',
      title: 'CFTV e Sistemas de Alarme',
      items: ['Câmeras profissionais', 'Acesso remoto', 'Monitoramento 24/7'],
      link: 'https://wa.me/5511920412220',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-volume-up',
      title: 'Sonorização Ambiente',
      items: ['Projeto acústico', 'Som profissional', 'Controle centralizado'],
      link: 'https://wa.me/5511920412220',
      linkText: 'Saiba mais'
    }
  ];

  orderedServices: Service[];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {
    // Apenas os 5 de growth aparecem na home
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
        'Dashboards, WhatsApp automatizado, CRM, sites e mídia paga com ROAS rastreado. O stack completo para academias, clínicas e pet shops crescerem com dados.'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Stack de Growth para serviços recorrentes — Fluxo Digital & Tech'
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Tecnologia que atrai, converte e retém. Conheça os 5 pilares do nosso stack de growth.'
    });
  }

  trackByService(index: number, service: Service): string {
    return service.title;
  }
}
