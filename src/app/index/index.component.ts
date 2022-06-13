import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() {
  }

  onHover($event: MouseEvent) {
    let card = $event.currentTarget as HTMLElement;
    let bg = card.querySelector('.bg');
    let content = card.querySelector('.content');
    if (!bg || !content) return;
    bg.classList.add('hovered');
    content.classList.add('hovered');
  }

  onLeave($event: MouseEvent) {
    let card = $event.currentTarget as HTMLElement;
    let bg = card.querySelector('.bg');
    let content = card.querySelector('.content');
    if (!bg || !content) return;
    bg.classList.remove('hovered');
    content.classList.remove('hovered');
  }

  ngOnInit(): void {
  }

}
