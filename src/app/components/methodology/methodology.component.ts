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
      title: 'Diagnóstico Inicial',
      description: 'Análise detalhada da situação atual da academia, identificando pontos fortes e oportunidades de melhoria em todas as áreas.'
    },
    {
      number: 2,
      title: 'Planejamento Estratégico',
      description: 'Desenvolvimento de um plano personalizado com objetivos claros, prazos e métricas de sucesso para cada área de atuação.'
    },
    {
      number: 3,
      title: 'Implementação Tecnológica',
      description: 'Configuração e implantação de todas as soluções tecnológicas, com treinamento da equipe e ajustes conforme necessário.'
    },
    {
      number: 4,
      title: 'Monitoramento Contínuo',
      description: 'Acompanhamento dos resultados com ajustes finos e otimizações para garantir o máximo desempenho das soluções implementadas.'
    },
    {
      number: 5,
      title: 'Expansão e Escalabilidade',
      description: 'Preparação da estrutura para crescimento, garantindo que todas as unidades futuras possam ser integradas facilmente ao sistema.'
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
    this.title.setTitle('Metodologia Digital - Fluxo Digital Tech');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Conheça nosso processo de transformação digital em 5 etapas: diagnóstico, planejamento, implementação, monitoramento e expansão.'
    });

    // Open Graph / Social Media
    this.meta.updateTag({ 
      property: 'og:title', 
      content: 'Metodologia Digital Comprovada - Fluxo Digital Tech' 
    });
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Processo estruturado em 5 etapas para transformação digital eficiente e resultados mensuráveis.' 
    });
  }

  trackByStep(index: number, step: Step): number {
    return step.number; // Melhora performance do ngFor
  }
}