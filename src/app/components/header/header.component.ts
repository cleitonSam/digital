import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isScrolled = false;

  // Método de scroll suave personalizado
  smoothScrollTo(sectionId: string, event: Event): void {
    event.preventDefault();
    
    const section = document.getElementById(sectionId);
    const headerHeight = document.querySelector('header')?.clientHeight || 0;
    
    if (section) {
      const targetPosition = section.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 800; // Duração em milissegundos
      let startTime: number | null = null;

      // Função de animação
      const animation = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      // Inicia a animação
      requestAnimationFrame(animation);
    }
  }

  // Função de easing para efeito suave
  private easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d/2;
    if (t < 1) return c/2*t*t + b;
    t--;
    return -c/2 * (t*(t-2) - 1) + b;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}