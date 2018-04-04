import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

const DEFAULT_WIDTH = 800;

@Directive({
  selector: '[appVideo]'
})
export class VideoDirective {

  constructor(private elementRef: ElementRef) { }

  @HostBinding('style.width.px') width: number = DEFAULT_WIDTH;
  @HostBinding('style.maxWidth') readonly maxWidth = '100%';
  @HostBinding('style.height.px') height: number;

  @HostListener('load', []) onLoad(): void {
    this.setHeight();
  }

  @HostListener('window:resize', []) onResize(): void {
    this.setHeight();
  }

  private setHeight(): void {
    this.height = this.elementRef.nativeElement.clientWidth * 9 / 16;
  }
}
