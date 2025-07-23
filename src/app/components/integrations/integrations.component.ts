import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';
import { Meta, Title } from '@angular/platform-browser';
import { Integration } from '../../models/integration.model';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  imports: [NgFor],
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent implements OnInit {
  integrations: Integration[] = [
    {
      icon: 'fab fa-instagram',
      title: 'Instagram',
      description: 'Integração completa para gestão de redes sociais e captação de leads'
    },
    {
      icon: 'fab fa-facebook',
      title: 'Facebook',
      description: 'Sincronização de eventos, mensagens e publicações'
    },
    {
      icon: 'fas fa-robot',
      title: 'N8N',
      description: 'Automação de workflows e processos empresariais'
    },
    {
      icon: 'fas fa-ai',
      title: 'Agente IAS',
      description: 'Inteligência Artificial para atendimento e suporte'
    },
    {
      icon: 'fas fa-envelope',
      title: 'E-mail Marketing',
      description: 'Campanhas automatizadas e segmentadas'
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
    this.title.setTitle('Integrações Avançadas - Fluxo Digital Tech');
    
    this.meta.updateTag({
      name: 'description',
      content: 'Conectamos sua empresa com as principais plataformas: Instagram, Facebook, N8N, IA e E-mail Marketing para otimizar seus processos.'
    });

    // Open Graph / Social Media
    this.meta.updateTag({ 
      property: 'og:title', 
      content: 'Integrações com as Melhores Plataformas - Fluxo Digital Tech' 
    });
    this.meta.updateTag({ 
      property: 'og:description', 
      content: 'Soluções de integração com Instagram, Facebook, automação N8N, Inteligência Artificial e E-mail Marketing.' 
    });
  }

  trackByIntegration(index: number, integration: Integration): string {
    return integration.title; // Melhora performance do ngFor
  }
}