//https://dev.to/paviad/angular-wait-for-all-images-to-load-3hp1

import {Directive, ElementRef, HostListener} from "@angular/core";
import {ImageService} from "./ImageService";

@Directive({
  selector: 'img'
})
export class ImgDirective {
  constructor(private el: ElementRef, private imageService: ImageService) {
    imageService.imageLoading(el.nativeElement);
  }

  @HostListener('load')
  onLoad() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }

  @HostListener('error')
  onError() {
    this.imageService.imageLoadedOrError(this.el.nativeElement);
  }
}
