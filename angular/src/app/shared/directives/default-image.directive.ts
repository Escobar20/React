import { Directive, Input, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDefaultImage]',
  host: {
    '[src]': 'checkPath(src)',
    '(error)': 'onError()'
  }
})
export class DefaultImageDirective {

  @Input() defaultImage="https://upload.wikimedia.org/wikipedia/en/b/b1/Portrait_placeholder.png";

  constructor(
    private el: ElementRef
  ) { }

  onError() {
    this.el.nativeElement.src = this.defaultImage;
  }

  checkPath(src: string) {
    return src || this.defaultImage;
  }
}
