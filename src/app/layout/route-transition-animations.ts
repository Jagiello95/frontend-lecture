import { trigger, state, animate, transition, style } from '@angular/animations';

export const slideInOutAnimation =
    // trigger name for attaching this animation to an element using the [@triggerName] syntax
    trigger('slideInOutAnimation', [
      // transition(':enter', [
      //   style({transform: 'translateY(-100%)'}),
      //   animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      // ]),
      // transition(':leave', [
      //   animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      // ])
    ]);