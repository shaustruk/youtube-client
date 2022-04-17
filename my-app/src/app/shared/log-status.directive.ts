import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLogStatus]'
})
export class LogStatusDirective implements OnInit {
  private logStatus: string = 'false';

  @Input('appLogStatus') status: boolean;

  constructor(private renderer: Renderer2,
    private dateTag: ElementRef) { }

  ngOnInit(): void {
    const { nativeElement } = this.dateTag;
    this.logStatus = String(this.status);
    // if (this.logStatus === 'false') {
    //   this.renderer.setStyle(nativeElement, 'background-color', 'yellow')
    // }
    // else {
    //   this.renderer.setStyle(nativeElement, 'background-color', 'green')
    // };
  }
}
