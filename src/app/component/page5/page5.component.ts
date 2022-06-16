import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page5',
  templateUrl: './page5.component.html',
  styleUrls: ['./page5.component.css']
})
export class Page5Component implements OnInit {

  public today = new Date();
  public money: number = 1000000;
  public words: string = "this is a test sentence for string piping.";

  constructor() { }

  ngOnInit(): void {
  }

}
