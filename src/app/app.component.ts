import { Component, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { IntegrationsComponent } from './components/integrations/integrations.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { ServicesComponent } from './components/services/services.component';



@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, HeroComponent, AboutComponent, ServicesComponent, IntegrationsComponent, BenefitsComponent, MethodologyComponent, CtaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent implements OnInit {
 title = 'digital-fluxo-tech';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.loadChatwootScript();
  }

  private loadChatwootScript(): void {
    // Verifique se o script já foi carregado
    if (document.querySelector('script[src*="chat.fluxodigitaltech.com.br"]')) {
      return;
    }

    // Configurações do Chatwoot
    window.chatwootSettings = {
      position: 'right',
      type: 'standard',
      launcherTitle: 'Fale conosco no chat'
    };

    const script = this.renderer.createElement('script');
    script.src = 'https://canal.fluxodigitaltech.com.br/packs/js/sdk.js';
    script.defer = true;
    script.async = true;
    
    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken: 'qSbYYAQDt5hj2xVazaWCQ1yU',
          baseUrl: 'https://canal.fluxodigitaltech.com.br',
          containerId: 'chatwoot-container' // Adicione esta linha
        });
      }
    };

    this.renderer.appendChild(document.body, script);
  }
}