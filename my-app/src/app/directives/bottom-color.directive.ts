import { Directive, OnInit, ElementRef, Input, AfterViewInit, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { items } from '../mocks/cards-list.mock';

@Directive({
  selector: '[appBottomColor]'
})
export class BottomColorDirective implements OnInit {
  public obj = items;
  public datePublication: number;

  public today: number = Date.now();
  public oneMonthMiliSec: number = 30 * 24 * 60 * 60 * 1000;
  public sixMonthMiliSec: number = 30 * 24 * 60 * 60 * 1000 * 6;
  public sevenDaysMilisec: number = 7 * 24 * 60 * 60 * 1000;
  public isdateLessMonth: boolean = false;
  public isdateMoreMonth: boolean = false;
  public isdateLessSevenDays: boolean = false;
  public isDateMoreSixMonth: boolean = false;

  @Input('appBottomColor') dateAdd: string;

  constructor(private dateTag: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {

    this.datePublication = Date.parse(this.dateAdd);
    console.log(this.dateAdd)
    this.isdateLessSevenDays = (this.today - this.datePublication) <= this.sevenDaysMilisec;
    this.isdateLessMonth = (this.today - this.datePublication) <= this.oneMonthMiliSec;
    this.isdateMoreMonth = (this.today - this.datePublication) >= this.oneMonthMiliSec;
    this.isDateMoreSixMonth = (this.today - this.datePublication) >= this.sixMonthMiliSec;

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
