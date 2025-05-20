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

// src/typings.d.ts
interface Window {
  chatwootSettings?: {
    position: string;
    type: string;
    launcherTitle: string;
  };
  chatwootSDK?: {
    run: (config: {
      websiteToken: string;
      baseUrl: string;
    }) => void;
  };
}

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
    // Definindo as configurações do Chatwoot no objeto window
    (window as any).chatwootSettings = {
      position: 'right',
      type: 'standard',
      launcherTitle: 'Fale conosco no chat'
    };

    const script = this.renderer.createElement('script');
    script.src = 'https://chat.fluxodigitaltech.com.br/packs/js/sdk.js';
    script.defer = true;
    script.async = true;
    
    script.onload = () => {
      if ((window as any).chatwootSDK) {
        (window as any).chatwootSDK.run({
          websiteToken: 'qSbYYAQDt5hj2xVazaWCQ1yU',
          baseUrl: 'https://chat.fluxodigitaltech.com.br'
        });
      }
    };

    this.renderer.appendChild(document.body, script);
  }
}