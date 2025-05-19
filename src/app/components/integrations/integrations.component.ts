import { Component } from '@angular/core';
import { Integration } from '../../models/integration.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  imports: [NgFor],
  styleUrls: ['./integrations.component.scss']
})
export class IntegrationsComponent {
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
}