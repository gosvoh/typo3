import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ImageService} from "../ImageService";
import {filter} from "rxjs";

@Component({
  selector: 'app-lembas',
  templateUrl: './lembas.component.html',
  styleUrls: ['./lembas.component.scss']
})
export class LembasComponent {
  loaded: boolean = false;

  constructor(private imageService: ImageService, title: Title) {
    title.setTitle('Лембас')
  }

  images = [
    {path: 'assets/img/lembas/06.jpg'},
    {path: 'assets/img/lembas/07.jpg'},
    {path: 'assets/img/lembas/08.jpg'}
  ]

  ngOnInit(): void {
    this.imageService.imagesLoading$
      .pipe(filter(r => r === 0))
      .subscribe(_ => this.loaded = true);
  }

}
