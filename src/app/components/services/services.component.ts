import { Component } from '@angular/core';
import { Service } from '../../models/service.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  imports: [NgFor],
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services: Service[] = [
    {
      icon: 'fas fa-chart-line',
      title: 'Dashboards Inteligentes',
      items: [
        'Painéis visuais personalizados com indicadores',
        'Visualização de KPIs críticos em tempo real',
        'Integração com múltiplas fontes de dados',
        'Alertas automáticos para anomalias',
        'Acesso remoto e em tempo real'
      ],
      link: 'https://app.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-globe',
      title: 'Websites de Alta Conversão',
      items: [
        'Design centrado no usuário e responsivo',
        'Otimização para mecanismos de busca',
        'Integração com redes sociais',
        'Ferramentas avançadas de captação de leads',
        'Mecanização de modelos comerciais'
      ],
      link: 'http://evo.storminnovation.com.br/manager',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fab fa-whatsapp',
      title: 'Automações WhatsApp',
      items: [
        'Respostas automáticas inteligentes 24/7',
        'Atendimento personalizado via chat',
        'Agendamento de compromissos automático',
        'Lembretes e notificações importantes',
        'Integração com sistemas de CRM'
      ],
      link: 'https://chatwoot.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-star',
      title: 'Gestão de Reputação',
      items: [
        'Monitoramento de avaliações em tempo real',
        'Respostas padronizadas e personalizadas',
        'Relatórios detalhados de satisfação',
        'Estratégias de recuperação de clientes insatisfeitos',
        'Gestão estratégica de marca online'
      ],
      link: 'https://crm.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-shopping-cart',
      title: 'E-Commerce Integrado',
      items: [
        'Loja virtual completa e segura',
        'Venda de produtos e serviços online',
        'Sistema de assinaturas recorrentes',
        'Integração com meios de pagamento',
        'Gestão de estoque e pedidos'
      ],
      link: 'https://n8n.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-network-wired',
      title: 'Integração Total de Sistemas',
      items: [
        'Unificação de todas as soluções tecnológicas',
        'Compatibilidade entre diferentes plataformas',
        'Fluxo de dados automatizado entre sistemas',
        'Centralização de informações críticas'
      ],
      link: 'https://integracao.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-desktop',
      title: 'Suporte Técnico Especializado',
      items: [
        'Suporte remoto para computadores e redes',
        'Gestão de ativos e licenças',
        'Visitas técnicas programadas',
        'Monitoramento proativo de sistemas',
        'Check-up preventivo regular'
      ],
      link: 'https://suporte.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-video',
      title: 'Soluções de CFTV',
      items: [
        'Instalação profissional de câmeras',
        'Configuração de sistemas de monitoramento',
        'Acesso remoto às imagens',
        'Integração com sistemas de alarme',
        'Manutenção preventiva e corretiva'
      ],
      link: 'https://seguranca.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-volume-up',
      title: 'Sonorização Ambiente',
      items: [
        'Projeto acústico personalizado',
        'Instalação de sistemas de som profissionais',
        'Controle centralizado de áudio',
        'Soluções para ambientes corporativos',
        'Manutenção e atualizações'
      ],
      link: 'https://audio.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Sistemas de Alarme',
      items: [
        'Instalação de sensores de segurança',
        'Monitoramento 24/7',
        'Controle via aplicativo móvel',
        'Integração com outros sistemas de segurança',
        'Resposta a emergências'
      ],
      link: 'https://alarmes.storminnovation.com.br',
      linkText: 'Saiba mais'
    },
    {
      icon: 'fas fa-paint-brush',
      title: 'Design e Conteúdo Digital',
      items: [
        'Criação de imagens para redes sociais',
        'Produção de conteúdo audiovisual',
        'Artes para tráfego pago',
        'Banco de imagens personalizado',
        'Gestão de campanhas digitais'
      ],
      link: 'https://design.storminnovation.com.br',
      linkText: 'Saiba mais'
    }
  ];
  orderedServices = [
    this.services[0], // Dashboards
    this.services[3], // Gestão de Reputação
    this.services[1], // Websites
    this.services[4], // E-Commerce
    this.services[2], // WhatsApp
    this.services[5], // Integração de Sistemas
    this.services[10], // Design
    this.services[6], // Suporte Técnico
    this.services[7], // CFTV
    this.services[9], // Alarmes
    this.services[8]  // Sonorização
  ];
}