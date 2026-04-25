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
      icon: 'fas fa-rocket',
      title: '+38% de receita em 90 dias',
      description: 'Média dos clientes Fluxo no primeiro trimestre rodando a stack completa. Mídia, IA, atendimento e email operando juntos.'
    },
    {
      icon: 'fas fa-shield-heart',
      title: '-42% de churn',
      description: 'A IA detecta cliente em risco antes do cancelamento. A régua de retenção via WhatsApp recupera quem ia embora — sem desconto agressivo.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Resposta de lead em < 5 min',
      description: 'Lead que demora 30 minutos pra ser respondido vira concorrente. A stack responde 24/7 com IA e passa pra humano só quando precisa.'
    },
    {
      icon: 'fas fa-coins',
      title: 'Fim das mensalidades fragmentadas',
      description: 'Sem RD Station, sem ActiveCampaign, sem Manychat, sem Zendesk. Uma fatura, uma stack, uma conta — sobra dinheiro pra investir em mídia.'
    },
    {
      icon: 'fas fa-eye',
      title: 'Decisão com dado, não achismo',
      description: 'Dashboard único integra mídia, atendimento, email e CRM. Você abre o celular e sabe se a semana foi verde ou vermelha.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Pele no jogo, KPI compartilhado',
      description: 'Operamos junto com seu time, com reunião semanal de número. Sem agência terceirizada que some. Se você não cresce, a gente não fatura.'
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
        '+38% de receita, -42% de churn, resposta < 5 min, fim das mensalidades fragmentadas. Os resultados médios de quem opera com a stack Fluxo.'
    });
  }

  trackByBenefit(index: number, benefit: Benefit): string {
    return benefit.title;
  }
}
