import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { createCard, ICardCustom } from 'src/app/redux';
import { AppState, CardsState } from 'src/app/redux/state';
import { CustomCard, ICustomCard } from '../models/custom-cards';

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
  public inputArea = {
    title: 'Title',
    description: 'Description',
    img: 'img',
    link: 'Link video',
    date: 'Creation date',
    btn: 'Create card',
  };

  public createCardForm: FormGroup;

  public today: Date = new Date();

  constructor(private route: Router, private store: Store<CardsState>) {}

  ngOnInit(): void {
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

  public createCard() {
    // const newCard: ICustomCard = new CustomCard {
    // this.createCardForm.value.title,

    // }
    // console.log(newCard);
    //   this.store.dispatch(createCard({ newCard }));
    const card: ICardCustom = this.createCardForm.value;
    console.log(card);
    this.store.dispatch(createCard({ card }));
  }
  goHome() {
    this.route.navigate(['']);
  }
}
