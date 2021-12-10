import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './components/about/about.component';
import { IntroRoutingModule } from './intro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimelineComponent } from './components/timeline/timeline.component';
import {TimelineModule} from 'primeng/timeline';
import { TitleComponent } from './components/title/title.component';


@NgModule({
  declarations: [
    AboutComponent,
    TimelineComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    IntroRoutingModule,
    SharedModule,
    TimelineModule
  ]
})
export class IntroModule { }
