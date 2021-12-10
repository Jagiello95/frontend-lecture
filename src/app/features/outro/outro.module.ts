import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdviceComponent } from './components/advice/advice.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ThanksComponent } from './components/thanks/thanks.component';
import { OutroRoutingModule } from './outro-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AdviceComponent,
    QuestionsComponent,
    ThanksComponent
  ],
  imports: [
    CommonModule,
    OutroRoutingModule,
    SharedModule
  ]
})
export class OutroModule { }
