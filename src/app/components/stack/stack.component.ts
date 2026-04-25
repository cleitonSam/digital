import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';

interface StackItem {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  number: string;
  numberLabel: string;
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {
  items: StackItem[] = [
    {
      badge: '01 · IA',
      title: 'IA que qualifica e vende',
      subtitle: 'Sales Agent · Copy Engine · Lead Scoring',
      description:
        'Agente de IA que conversa com lead frio, qualifica em segundos e marca a reunião — 24h por dia. O mesmo motor que escreve a próxima campanha de mídia paga.',
      features: [
        'Qualificação de lead em < 60s',
        'Geração de copy de criativo e email',
        'Score por probabilidade de compra',
        'Treinada com seu funil — não genérica'
      ],
      number: '24/7',
      numberLabel: 'operando enquanto você dorme'
    },
    {
      badge: '02 · ATENDIMENTO',
      title: 'Plataforma de atendimento integrada',
      subtitle: 'WhatsApp · Instagram · Site · Telefone — em um só lugar',
      description:
        'Toda conversa do seu negócio em um inbox unificado, com IA respondendo o que dá pra automatizar e humano só onde precisa. Resposta média < 5 minutos.',
      features: [
        'Inbox unificado (WhatsApp, IG, site)',
        'Resposta automatizada com IA',
        'Distribuição inteligente para o time',
        'CRM nativo + histórico do cliente'
      ],
      number: '< 5min',
      numberLabel: 'tempo médio de primeira resposta'
    },
    {
      badge: '03 · EMAIL & AUTOMAÇÃO',
      title: 'Email marketing que converte',
      subtitle: 'Sequências · Segmentação · A/B teste automático',
      description:
        'Plataforma própria de email marketing com automação visual, segmentação por comportamento e teste A/B contínuo. Sem RD Station, sem ActiveCampaign — sem mensalidade extra.',
      features: [
        'Editor drag & drop',
        'Automações visuais por gatilho',
        'Segmentação por comportamento',
        'Relatório de receita por campanha'
      ],
      number: '+R$ 200M',
      numberLabel: 'em vendas geradas pela stack'
    }
  ];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {}

  trackByItem(index: number, item: StackItem): string {
    return item.title;
  }
}
