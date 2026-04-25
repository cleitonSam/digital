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
      description: 'Olhamos seus números reais — receita, CAC, churn, ticket. Saímos com 3 alavancas concretas. Sem proposta empurrada, sem reunião teórica.'
    },
    {
      number: 2,
      title: 'Plano com KPI compartilhado',
      description: 'Plano de 90 dias com meta clara: receita, leads, conversão. Definimos os indicadores que vão nos cobrar — e que vão te pagar bônus quando bater.'
    },
    {
      number: 3,
      title: 'Implantação da stack',
      description: 'IA, atendimento, email, mídia — tudo plugado em 14 dias. Sem fila, sem reunião pra decidir cor de botão. Treinamento da equipe incluso.'
    },
    {
      number: 4,
      title: 'Ritmo semanal de operação',
      description: 'Reunião de número toda semana. Otimização contínua de criativos, copy, funil e mídia. Você cuida do produto. A Fluxo opera o motor.'
    },
    {
      number: 5,
      title: 'Escala previsível',
      description: 'Quando o motor estiver rodando previsível, ajudamos a abrir nova frente, lançar produto novo ou multiplicar mídia. Crescimento sem caos.'
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
    this.title.setTitle('Como a Fluxo opera — Metodologia');

    this.meta.updateTag({
      name: 'description',
      content:
        'Diagnóstico, plano com KPI compartilhado, implantação da stack em 14 dias, ritmo semanal e escala previsível. Como a Fluxo opera o motor de growth.'
    });
  }

  trackByStep(index: number, step: Step): number {
    return step.number;
  }
}
