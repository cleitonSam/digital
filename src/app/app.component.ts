import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { CtaComponent } from './components/cta/cta.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { MethodologyComponent } from './components/methodology/methodology.component';
import { ServicesComponent } from './components/services/services.component';
import { StackComponent } from './components/stack/stack.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    StackComponent,
    AboutComponent,
    ServicesComponent,
    BenefitsComponent,
    MethodologyComponent,
    CtaComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true
})
export class AppComponent implements OnInit {
  title = 'digital-fluxo-tech';

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.loadChatwootScript();
    }
  }

  private loadChatwootScript(): void {
    if (typeof window === 'undefined' || typeof document === 'undefined') return;

    if (document.querySelector('script[src*="canal.fluxodigitaltech.com.br"]')) {
      return;
    }

    (window as any).chatwootSettings = {
      position: 'right',
      type: 'standard',
      launcherTitle: 'Fale conosco no chat'
    };

    const script = this.renderer.createElement('script');
    script.src = 'https://canal.fluxodigitaltech.com.br/packs/js/sdk.js';
    script.defer = true;
    script.async = true;

    script.onload = () => {
      if ((window as any).chatwootSDK) {
        (window as any).chatwootSDK.run({
          websiteToken: 'qSbYYAQDt5hj2xVazaWCQ1yU',
          baseUrl: 'https://canal.fluxodigitaltech.com.br',
          containerId: 'chatwoot-container'
        });
      }
    };

    this.renderer.appendChild(document.body, script);
  }
}
