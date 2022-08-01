import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLogStatus]',
})
export class LogStatusDirective implements OnInit {
  private logStatus: boolean = false;

  @Input('appLogStatus') status: boolean;

  constructor(private renderer: Renderer2, private dateTag: ElementRef) {}

  ngOnInit(): void {
    const { nativeElement } = this.dateTag;
    this.logStatus = this.status;
    if (this.logStatus) {
      this.renderer.setStyle(nativeElement, 'color', '#49bf49');
    } else {
      this.renderer.setStyle(nativeElement, 'color', '#e45d5d');
    }
  }
}
