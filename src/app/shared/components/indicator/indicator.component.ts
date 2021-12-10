import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent implements OnInit {
  @Input() routes!: string[];
  @Output() routeChanged = new EventEmitter<number>();

  @Input() set currentIndex(currentIndex: number) {
    this._currentIndex = currentIndex
  }

  get currentIndex(): number {
    return this._currentIndex;
  }

  private _currentIndex: number = 0;

  constructor() { }

  public onClick(i:number){
    this.currentIndex = i;
    this.routeChanged.emit(i)
  }

  ngOnInit(): void {
  }

}
