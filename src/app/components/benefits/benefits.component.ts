import { Component } from '@angular/core';
import { Benefit } from '../../models/benefit.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  imports: [NgFor],
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  benefits: Benefit[] = [
    {
      icon: 'fas fa-database',
      title: 'Gestão Baseada em Dados',
      description: 'Decisões estratégicas apoiadas por dados reais e indicadores precisos, reduzindo a subjetividade na gestão.'
    },
    {
      icon: 'fas fa-clock',
      title: 'Otimização de Tempo',
      description: 'Automação de processos repetitivos libera sua equipe para focar no que realmente importa: o atendimento ao aluno.'
    },
    {
      icon: 'fas fa-money-bill-wave',
      title: 'Redução de Custos',
      description: 'Identificação de desperdícios e oportunidades de economia, com melhor alocação de recursos.'
    },
    {
      icon: 'fas fa-users',
      title: 'Experiência do Aluno',
      description: 'Tecnologia que encanta e fideliza, transformando alunos em promotores da sua marca.'
    },
    {
      icon: 'fas fa-chart-pie',
      title: 'Novas Fontes de Receita',
      description: 'E-commerce permite vender produtos, serviços e assinaturas 24/7, aumentando seu faturamento.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Vantagem Competitiva',
      description: 'Diferenciação no mercado com tecnologia de ponta e gestão profissionalizada.'
    }
  ];
}