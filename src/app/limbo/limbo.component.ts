import { Component, OnInit } from '@angular/core';
import {ImageService} from "../ImageService";
import {Title} from "@angular/platform-browser";
import {filter} from "rxjs";

@Component({
  selector: 'app-limbo',
  templateUrl: './limbo.component.html',
  styleUrls: ['./limbo.component.scss']
})
export class LimboComponent implements OnInit {
  loaded: boolean = false;

  constructor(private imageService: ImageService, title: Title) {
    title.setTitle('Limbo')
  }

  ngOnInit(): void {
    this.imageService.imagesLoading$
      .pipe(filter(r => r === 0))
      .subscribe(_ => this.loaded = true);
  }

}
