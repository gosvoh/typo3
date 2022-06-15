import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs";
import {ImageService} from "../ImageService";
import {BackDirective} from "../back.directive";

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.scss']
})
export class ArtsComponent implements OnInit {
  loaded: boolean = false;
  backDirective = BackDirective;

  constructor(private imageService: ImageService, title: Title) {
    title.setTitle('Стили рисования')
  }

  ngOnInit(): void {
    this.imageService.imagesLoading$
      .pipe(filter(r => r === 0))
      .subscribe(_ => this.loaded = true);
  }

}
