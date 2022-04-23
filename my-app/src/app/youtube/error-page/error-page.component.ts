import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  goHome() {
    console.log(123)
    this.router.navigate(['']);
  }
}
