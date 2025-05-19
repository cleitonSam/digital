import { Component, OnInit } from '@angular/core';
import { ParticlesService } from '../../service/particles.service';
import { ScrollService } from '../../service/scroll.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  constructor(
    private scrollService: ScrollService,
    private particlesService: ParticlesService
  ) {}

  ngOnInit(): void {
    this.particlesService.createParticles('hero-particles');
  }

  scrollTo(section: string): void {
    this.scrollService.scrollTo(section);
  }
}