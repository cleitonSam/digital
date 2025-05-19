import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  scrollTo(section: string): void {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(section);
      if (element) {
        const headerHeight = document.getElementById('header')?.offsetHeight || 80;
        window.scrollTo({
          top: element.offsetTop - headerHeight,
          behavior: 'smooth'
        });
      }
    }
  }
}