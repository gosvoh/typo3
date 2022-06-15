import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ImageService} from "../ImageService";
import {filter} from "rxjs";

@Component({
  selector: 'app-olds',
  templateUrl: './olds.component.html',
  styleUrls: ['./olds.component.scss']
})
export class OldsComponent implements OnInit {
  loaded: boolean = false;

  constructor(private imageService: ImageService, title: Title) {
    title.setTitle('В бой идут одни старики')
  }

  ngOnInit(): void {
    this.imageService.imagesLoading$
      .pipe(filter(r => r === 0))
      .subscribe(_ => this.loaded = true);
  }

}
