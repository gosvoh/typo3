import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ImageService} from "../ImageService";
import {filter} from "rxjs";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  loaded = false;

  constructor(private imageService: ImageService, title: Title) {
    title.setTitle('4 статьи')
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
    this.imageService.imagesLoading$
      .pipe(filter(r => r === 0))
      .subscribe(_ => this.loaded = true);
  }

}
