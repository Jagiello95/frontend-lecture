import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from 'src/app/layout/route-transition-animations';

@Component({
  selector: 'app-native-elements',
  templateUrl: './native-elements.component.html',
  styleUrls: ['./native-elements.component.scss'],
   // make slide in/out animation available to this component
   animations: [slideInOutAnimation],

   // attach the slide in/out animation to the host (root) element of this component
   host: { '[@slideInOutAnimation]': '' }
})
export class NativeElementsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
