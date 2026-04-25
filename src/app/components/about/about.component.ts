import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,
  imports: [NgFor]
})
export class AboutComponent implements OnInit {
  // Logos genéricos — substitua pelos clientes reais
  clients = [
    { name: 'Cliente 1', logo: 'https://i.imgur.com/lN0LTy9.jpeg' },
    { name: 'Cliente 2', logo: 'https://i.imgur.com/flQuzEs.png' },
    { name: 'Cliente 3', logo: 'https://i.imgur.com/gKYAGiY.png' },
    { name: 'Cliente 4', logo: 'https://i.imgur.com/Nm0hyK5.png' },
    { name: 'Cliente 5', logo: 'https://i.imgur.com/Jc0OiiJ.png' },
    { name: 'Cliente 6', logo: 'https://i.imgur.com/UJWueVv.png' },
    { name: 'Cliente 7', logo: 'https://i.imgur.com/gm8QORO.png' },
    { name: 'Cliente 8', logo: 'https://i.imgur.com/GHG39rh.png' },
    { name: 'Cliente 9', logo: 'https://i.imgur.com/GdOU1P4.png' },
    { name: 'Cliente 10', logo: 'https://i.imgur.com/k9AL8hI.png' }
  ];

  duplicatedClients: any[] = [];
  animationDuration: string = '';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.duplicatedClients = [...this.clients, ...this.clients];

    if (isPlatformBrowser(this.platformId)) {
      this.calculateAnimationDuration();
      window.addEventListener('resize', this.calculateAnimationDuration.bind(this));
    }
  }

  calculateAnimationDuration() {
    const baseDuration = 20;
    const clientCount = this.clients.length;
    const screenWidth = isPlatformBrowser(this.platformId) ? window.innerWidth : 1024;
    const mobileFactor = screenWidth < 768 ? 1.5 : 1;

    const duration = baseDuration * (clientCount / 8) * mobileFactor;
    this.animationDuration = `${duration}s`;
  }
}
