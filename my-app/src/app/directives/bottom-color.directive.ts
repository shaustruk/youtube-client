import { Directive, OnInit, ElementRef, Input, AfterViewInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { items } from '../mocks/cards-list.mock';

@Directive({
  selector: '[appBottomColor]'
})
export class BottomColorDirective implements OnInit {
  private datePublication: number;
  private today: number = Date.now();
  private oneMonthMiliSec: number = 30 * 24 * 60 * 60 * 1000;
  private sixMonthMiliSec: number = 30 * 24 * 60 * 60 * 1000 * 6;
  private sevenDaysMilisec: number = 7 * 24 * 60 * 60 * 1000;
  private isdateLessMonth: boolean = false;
  private isdateMoreMonth: boolean = false;
  private isdateLessSevenDays: boolean = false;
  private isDateMoreSixMonth: boolean = false;
  private timeFromDatepublicated: number;

  @Input('appBottomColor') dateAdd: string;


  constructor(private dateTag: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    this.datePublication = Date.parse(this.dateAdd);
    this.timeFromDatepublicated = (this.today - this.datePublication);

    this.isdateLessSevenDays = this.timeFromDatepublicated <= this.sevenDaysMilisec;
    this.isdateLessMonth = this.timeFromDatepublicated <= this.oneMonthMiliSec;
    this.isdateMoreMonth = this.timeFromDatepublicated >= this.oneMonthMiliSec;
    this.isDateMoreSixMonth = this.timeFromDatepublicated >= this.sixMonthMiliSec;

    const { nativeElement } = this.dateTag;
    if (this.isdateLessSevenDays) {
      this.renderer.setStyle(nativeElement, 'background-color', '#2f80ed')
    }
    else if (this.isdateLessMonth) {
      this.renderer.setStyle(nativeElement, 'background-color', 'green')
    }
    else if ((this.today - this.datePublication) >= this.oneMonthMiliSec && (this.today - this.datePublication) <= this.sixMonthMiliSec) {
      this.renderer.setStyle(nativeElement, 'background-color', 'yellow')
    }

    else if (this.isDateMoreSixMonth) {
      this.renderer.setStyle(nativeElement, 'background-color', 'red')
    }




    // this.renderer.setStyle(this.dateTag.nativeElement, 'background-color', 'red');

  }
}
