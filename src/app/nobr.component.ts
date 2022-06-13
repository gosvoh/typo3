import {Component} from "@angular/core";

@Component({
  selector: 'nobr',
  styles: ['nobr {white-space: nowrap}'],
  template: `<ng-content></ng-content>`
})
export class NobrComponent {
}
