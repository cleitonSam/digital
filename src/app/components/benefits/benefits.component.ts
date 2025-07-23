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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.setMetaTags();
  }

  private setMetaTags(): void {
    this.title.setTitle('Benefícios Exclusivos - Fluxo Digital Tech');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Descubra os 6 principais benefícios de nossas soluções: gestão baseada em dados, redução de custos, experiência do aluno e mais.'
    });

    // Open Graph / Social Media
    this.meta.updateTag({ 
      property: 'og:title', 
      content: 'Benefícios para Transformar Seu Negócio - Fluxo Digital Tech' 
    });
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Conheça como nossas soluções em tecnologia podem otimizar tempo, reduzir custos e aumentar receitas da sua empresa.' 
    });
  }

  trackByBenefit(index: number, benefit: Benefit): string {
    return benefit.title; // Melhora performance do ngFor
  }
}