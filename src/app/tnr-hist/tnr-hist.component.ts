import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-tnr-hist',
  templateUrl: './tnr-hist.component.html',
  styleUrls: ['./tnr-hist.component.scss']
})
export class TnrHistComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Times New Roman')
  }

  ngOnInit(): void {
  }

}
