import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Step } from '../../models/step.model';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  imports: [NgFor],
  styleUrls: ['./methodology.component.scss']
})
export class MethodologyComponent implements OnInit {
  steps: Step[] = [
    {
      number: 1,
      title: 'Diagnóstico (30 min)',
      description: 'Olhamos seus números reais — churn, ticket, ciclo de cliente, custo de aquisição. Saímos com 3 alavancas concretas. Sem proposta vazia.'
    },
    {
      number: 2,
      title: 'Plano com KPI',
      description: 'Plano de 90 dias com meta clara: matrícula, agendamento, retenção. Definimos os indicadores que vão nos cobrar — incluindo nós.'
    },
    {
      number: 3,
      title: 'Implantação do stack',
      description: 'Dashboard, WhatsApp automatizado, CRM e funil de mídia ligados ao seu sistema. Treinamento da equipe. Tudo testado em ambiente real.'
    },
    {
      number: 4,
      title: 'Ritmo de operação',
      description: 'Reunião semanal de números. Otimização contínua de criativos, copy e funil. Você fica no negócio — a Fluxo opera o motor.'
    },
    {
      number: 5,
      title: 'Escala e expansão',
      description: 'Quando o motor estiver previsível, ajudamos a abrir nova unidade, lançar nova modalidade ou escalar mídia. Crescimento sem caos.'
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
    this.title.setTitle('Metodologia de Growth — Fluxo Digital & Tech');

    this.meta.updateTag({
      name: 'description',
      content:
        'Diagnóstico, plano com KPI, stack tecnológico, ritmo semanal e expansão. A metodologia da Fluxo para crescimento previsível em serviços recorrentes.'
    });

    this.meta.updateTag({
      property: 'og:title',
      content: 'Metodologia de Growth comprovada — Fluxo Digital & Tech'
    });
    this.meta.updateTag({
      property: 'og:description',
      content: '5 etapas para sair do achismo e crescer com previsibilidade no seu setor.'
    });
  }

  trackByStep(index: number, step: Step): number {
    return step.number;
  }
}
