import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {
  public inputArea = {
    title: "Title",
    description: "Description",
    img: "img",
    link: "Link video",
  }
  constructor(private route: Router) { }

  ngOnInit(): void { }
  goHome() {
    this.route.navigate(['']);

  }
}
