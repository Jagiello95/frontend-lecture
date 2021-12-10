import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slide-container',
  templateUrl: './slide-container.component.html',
  styleUrls: ['./slide-container.component.scss']
})
export class SlideContainerComponent implements OnInit {
  @Input() vertical: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
