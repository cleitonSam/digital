import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  // Você pode adicionar seus clientes como array se quiser fazer binding
  clients = [
    { name: 'Academia Premium', logo: 'assets/images/clients/premium.png' },
    { name: ' Total', logo: 'assets/images/clients/-total.png' },
    { name: 'Gym Evolution', logo: 'assets/images/clients/gym-evolution.png' },
    { name: 'Power Club', logo: 'assets/images/clients/power-club.png' },
    { name: 'Body Tech', logo: 'assets/images/clients/body-tech.png' }
  ];
}