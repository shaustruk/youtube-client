import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  styles: [`input.ng-invalid.ng-touched {
    background-color: #de1d1d4f;
 }`],
})
export class AdminPageComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  public inputArea = {
    title: "Title",
    description: "Description",
    img: "img",
    link: "Link video",
    date: "Creation date",
    btn: "Create card"
  }

  public createCardForm: FormGroup;
  public title: string;
  public description: string = ('');
  public img: string = ('');
  public link: string = ('');
  public date: string = ('');
  public today: Date = new Date();

  constructor(private route: Router) { }

  ngOnInit(): void {
    this.createCardForm = new FormGroup({
      "title": new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(20)]),
      "description": new FormControl('', [Validators.required, Validators.maxLength(255)]),
      "img": new FormControl('', [Validators.required, Validators.pattern(/(http|https):\/\/([\w.]+\/?)\S*/)]),
      "link": new FormControl('', [Validators.required, Validators.pattern(/(http|https):\/\/([\w.]+\/?)\S*/)]),
      "date": new FormControl('', [Validators.required])
    })

    this.createCardForm.controls['title'].valueChanges.subscribe((value) => {
      this.title = value;
    })
    this.createCardForm.controls['description'].valueChanges.subscribe((value) => {
      this.description = value;
    })
    this.createCardForm.controls['img'].valueChanges.subscribe((value) => {
      this.img = value;
    })
    this.createCardForm.controls['link'].valueChanges.subscribe((value) => {
      this.link = value;
    })
    this.createCardForm.controls['date'].valueChanges.subscribe((value) => {
      this.date = value;
      console.log(value)
    })
  }

  createCard() {
    console.log(this.form);


  }
  goHome() {
    this.route.navigate(['']);

  }
}
