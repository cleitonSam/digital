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
    { name: 'Fitness Total', logo: 'https://via.placeholder.com/150x80?text=Fitness+Total' },
    { name: 'Gym Evolution', logo: 'https://via.placeholder.com/150x80?text=Gym+Evolution' },
    { name: 'Power Club', logo: 'https://via.placeholder.com/150x80?text=Power+Club' },
    { name: 'Body Tech', logo: 'https://via.placeholder.com/150x80?text=Body+Tech' },
    { name: 'Smart Fit', logo: 'https://via.placeholder.com/150x80?text=Smart+Fit' },
    { name: 'Bio Ritmo', logo: 'https://via.placeholder.com/150x80?text=Bio+Ritmo' },
    { name: 'Blue Fitness', logo: 'https://via.placeholder.com/150x80?text=Blue+Fitness' }
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