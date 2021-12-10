import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from 'src/app/layout/route-transition-animations';

enum Some {
  some = 'some'
}
@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.scss'],
      // make slide in/out animation available to this component
      animations: [slideInOutAnimation],

      // attach the slide in/out animation to the host (root) element of this component
      host: { '[@slideInOutAnimation]': '' }
})
export class ComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(Object.values(Some))
  }

}
