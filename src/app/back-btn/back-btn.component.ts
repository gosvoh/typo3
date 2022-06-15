import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-back-btn',
  templateUrl: './back-btn.component.html',
  styleUrls: ['./back-btn.component.scss']
})
export class BackBtnComponent {
  scrolled = 'up';
  scrollBacklash = 100;
  lastScrollPos = 0;
  constructor() { }

  // noinspection JSUnusedLocalSymbols
  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    let currentScrollBacklash = this.lastScrollPos - window.scrollY;

    if (this.lastScrollPos < window.scrollY) {
      if (Math.abs(currentScrollBacklash) > this.scrollBacklash) {
        this.scrolled = 'down';
        this.lastScrollPos = window.scrollY;
      }
    } else {
      if (Math.abs(currentScrollBacklash) > this.scrollBacklash) {
        this.scrolled = 'up';
        this.lastScrollPos = window.scrollY;
      }
    }
  }

}
