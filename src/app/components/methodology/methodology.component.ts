import { Component } from '@angular/core';
import { Step } from '../../models/step.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-methodology',
  templateUrl: './methodology.component.html',
  imports: [NgFor],
  styleUrls: ['./methodology.component.scss']
})
export class MethodologyComponent {
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
}