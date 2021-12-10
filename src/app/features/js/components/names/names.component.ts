import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {
  //
  private a = 2;
  private b = 3;

  //
  private rectangleXSide = 2;
  private rectangleYSide = 3;

  constructor() { }

  ngOnInit(): void {
  }

  public executeExampleCalculations() {
    console.log(this.action());
    console.log(this.calculateRectangleArea());
  }

  public action(): number {
    return this.a * this.b
  }

  public calculateRectangleArea() {
    return this.rectangleXSide * this.rectangleYSide;
  }

  

}
