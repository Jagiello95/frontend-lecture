import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IndicatorComponent } from './components/indicator/indicator.component';
import { SlideContainerComponent } from './components/slide-container/slide-container.component';
import { SlideComponent } from './components/slide/slide.component';
import { HeaderComponent } from './components/header/header.component';
import { ChipComponent } from './components/chip/chip.component';
import { CircleComponent } from './components/circle/circle.component';



@NgModule({
  declarations: [
    IndicatorComponent,
    SlideContainerComponent,
    SlideComponent,
    HeaderComponent,
    ChipComponent,
    CircleComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    IndicatorComponent,
    SlideContainerComponent,
    SlideComponent,
    HeaderComponent,
    ChipComponent,
    CircleComponent
  ]
})
export class SharedModule { }
