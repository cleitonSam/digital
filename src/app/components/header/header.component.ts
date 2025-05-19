import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from '../../service/scroll.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;

  constructor(private scrollService: ScrollService) {}

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll')
  checkScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  scrollTo(section: string, event: Event): void {
    event.preventDefault();
  
  }
}