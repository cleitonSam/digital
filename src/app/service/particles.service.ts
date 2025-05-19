import { Injectable } from '@angular/core';

declare const particlesJS: any;

@Injectable({
  providedIn: 'root'
})
export class ParticlesService {
  initializeParticles(containerId: string): void {
    particlesJS(containerId, {
      "particles": {
        "number": { 
          "value": 70, 
          "density": { 
            "enable": true, 
            "value_area": 800 
          } 
        },
        "color": { 
          "value": "#00F5FF" 
        },
        "shape": { 
          "type": "circle" 
        },
        "opacity": { 
          "value": 0.5, 
          "random": true 
        },
        "size": { 
          "value": 3, 
          "random": true 
        },
        "line_linked": { 
          "enable": true, 
          "distance": 150, 
          "color": "#00F5FF", 
          "opacity": 0.3, 
          "width": 1 
        },
        "move": { 
          "enable": true, 
          "speed": 2, 
          "direction": "none", 
          "random": true, 
          "straight": false 
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { 
            "enable": true, 
            "mode": "repulse" 
          },
          "onclick": { 
            "enable": true, 
            "mode": "push" 
          }
        }
      }
    });
  }

  createParticles(containerId: string): void {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Carrega o script particles.js se não estiver disponível
    if (typeof particlesJS === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
      script.onload = () => this.initializeParticles(containerId);
      document.head.appendChild(script);
    } else {
      this.initializeParticles(containerId);
    }
  }
}