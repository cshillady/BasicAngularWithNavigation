import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {

  @Input() name!: string;
  @Input() symbol!: string;
  @Input() atomicNumber!: any;
  @Input() atomicWeight!: any;
  @Input() discovered!: string;

  constructor() { }

  public elementList: Array<Element> = [
    {name: "Hydrogen", symbol: "H", atomicNumber: 1, atomicWeight: 1.008, discovered: "1766 CE"},
    {name: "Helium", symbol: "He", atomicNumber: 2, atomicWeight: 4.0026, discovered: "1895 CE"},
    {name: "Carbon", symbol: "C", atomicNumber: 6, atomicWeight: 12.011, discovered: "3750 BCE"},
    {name: "Oxygen", symbol: "O", atomicNumber: 8, atomicWeight: 15.999, discovered: "1774 CE"},
    {name: "Arsenic", symbol: "As", atomicNumber: 33, atomicWeight: 74.922, discovered: "1250 CE"},
    {name: "Silver", symbol: "Ag", atomicNumber: 47, atomicWeight: 107.87, discovered: "3000 BCE"},
    {name: "Platinum", symbol: "Pt", atomicNumber: 78, atomicWeight: 195.08, discovered: "1735 CE"},
    {name: "Gold", symbol: "Au", atomicNumber: 79, atomicWeight: 196.97, discovered: "2500 BCE"},
  ];

  ngOnInit(): void {
  }

  addElement(name: string, symbol: string, atomicNumber: number, atomicWeight: number, discovered: string) {
    let element = new Element(name, symbol, atomicNumber, atomicWeight, discovered);
    this.elementList.push(element);
    this.clearElements();
  }

  clearElements() {
    this.name = "";
    this.symbol = "";
    this.atomicNumber = "";
    this.atomicWeight = "";
    this.discovered = "";
  }
}

export class Element {
  name!: string;
  symbol!: string;
  atomicNumber!: number;
  atomicWeight!: number;
  discovered!: string;

  constructor(name: string, symbol: string, atomicNumber: number, atomicWeight: number, discovered: string) {
    this.name = name;
    this.symbol = symbol;
    this.atomicNumber = atomicNumber;
    this.atomicWeight = atomicWeight;
    this.discovered = discovered;
  }
}