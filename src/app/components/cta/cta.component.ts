import { Component } from '@angular/core';
import { ScrollService } from '../../service/scroll.service';


@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent {
  constructor(private scrollService: ScrollService) {}

  scrollTo(section: string): void {
    this.scrollService.scrollTo(section);
  }
}