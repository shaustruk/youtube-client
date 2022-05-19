import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { AppState } from 'src/app/redux/state';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
  styles: [
    `
      input.ng-invalid.ng-touched {
        background-color: #de1d1d4f;
      }
    `,
  ],
})
export class AdminPageComponent implements OnInit {
  @ViewChild('form') form: NgForm;
  public inputArea = {
    title: 'Title',
    description: 'Description',
    img: 'img',
    link: 'Link video',
    date: 'Creation date',
    btn: 'Create card',
  };

  public createCardForm: FormGroup;
  public title: string;
  public description: string = '';
  public img: string = '';
  public link: string = '';
  public date: string = '';
  public today: Date = new Date();

  constructor(private route: Router, private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log(this.store);

    this.createCardForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.maxLength(255),
      ]),
      img: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http|https):\/\/([\w.]+\/?)\S*/),
      ]),
      link: new FormControl('', [
        Validators.required,
        Validators.pattern(/(http|https):\/\/([\w.]+\/?)\S*/),
      ]),
      date: new FormControl('', [Validators.required]),
    });
  }

  createCard() {
    console.log(this.form.value);
  }
  goHome() {
    this.route.navigate(['']);
  }
}
