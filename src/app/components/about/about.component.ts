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
  clients = [
    { name: 'Academia Premium', logo: 'https://i.imgur.com/lN0LTy9.jpeg' },
    { name: 'Fitness Total', logo: 'https://i.imgur.com/flQuzEs.png' },
    { name: 'Gym Evolution', logo: 'https://i.imgur.com/gKYAGiY.png' },
    { name: 'Power Club', logo: 'https://i.imgur.com/Nm0hyK5.png' },
    { name: 'Body Tech', logo: 'https://i.imgur.com/Jc0OiiJ.png' },
    { name: 'Smart Fit', logo: 'https://i.imgur.com/UJWueVv.png' },
    { name: 'Bio Ritmo', logo: 'https://i.imgur.com/gm8QORO.png' },
    { name: 'Blue Fitness', logo: 'https://i.imgur.com/GHG39rh.png' },
    { name: 'Blue Fitness', logo: 'https://i.imgur.com/GdOU1P4.png' },
    { name: 'Blue Fitness', logo: 'https://i.imgur.com/k9AL8hI.png' }
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
