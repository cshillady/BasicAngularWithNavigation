import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.component.html',
  styleUrls: ['./page4.component.css']
})
export class Page4Component implements OnInit {

  isAmazing = true;

  constructor() { }

  public day = new Date().getDay();

  ngOnInit(): void {
  }

}
