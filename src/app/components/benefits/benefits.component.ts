import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Benefit } from '../../models/benefit.model';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  imports: [NgFor],
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent implements OnInit {
  benefits: Benefit[] = [
    {
      icon: 'fas fa-user-plus',
      title: '+38% novas matrículas',
      description: 'Funil de mídia + landing pages + automação de visita transformam clique em cliente. Resultado médio dos clientes Fluxo nos 90 primeiros dias.'
    },
    {
      icon: 'fas fa-shield-heart',
      title: '-42% de churn',
      description: 'Detectamos cliente em risco antes do cancelamento. Régua de retenção via WhatsApp recupera quem ia embora — sem desconto agressivo.'
    },
    {
      icon: 'fas fa-stopwatch',
      title: 'Resposta em < 5 min',
      description: 'Lead que demora 30 minutos pra ser respondido vira concorrente. WhatsApp inteligente da Fluxo responde 24/7 com humano só quando precisa.'
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Ticket médio +24%',
      description: 'Upsell estruturado de plano anual, modalidades extras, produtos. Mesmo cliente, mais receita. Sem virar chato no atendimento.'
    },
    {
      icon: 'fas fa-tachometer-alt',
      title: 'Decisão com dado, não achismo',
      description: 'Dashboard único integra sua agenda, CRM, redes sociais e mídia paga. Você abre o celular e sabe se a semana foi verde ou vermelha.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Parceria com pele no jogo',
      description: 'Operamos junto com sua equipe, com reunião semanal de números. Sem terceirizada que some. KPI compartilhado, time só.'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.title.setTitle('Resultados que entregamos — Fluxo Digital & Tech');

    this.meta.updateTag({
      name: 'description',
      content:
        '+38% de matrícula, -42% de churn, ticket médio +24%. Os resultados médios dos clientes da Fluxo Digital & Tech em academias, clínicas e pet shops.'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Resultados que falam por nós — Fluxo Digital & Tech'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Veja como o stack da Fluxo move o ponteiro de matrícula, retenção e ticket no seu negócio.'
    });
  }

  trackByBenefit(index: number, benefit: Benefit): string {
    return benefit.title;
  }
}
