import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [NgFor],
  styleUrls: ['./about.component.scss']
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

  ngOnInit() {
    // Duplica os clientes para criar o efeito contínuo
    this.duplicatedClients = [...this.clients, ...this.clients];
    
    // Calcula a duração da animação baseada no número de clientes
    this.calculateAnimationDuration();
    
    // Recalcula quando a janela é redimensionada
    window.addEventListener('resize', () => this.calculateAnimationDuration());
  }

  calculateAnimationDuration() {
    const baseDuration = 20; // Duração base em segundos
    const clientCount = this.clients.length;
    const duration = baseDuration * (clientCount / 8); // Ajusta para quantidade de clientes
    
    // Ajusta para telas menores
    const screenWidth = window.innerWidth;
    const mobileFactor = screenWidth < 768 ? 1.5 : 1;
    
    this.animationDuration = `${duration * mobileFactor}s`;
  }
}