import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from 'src/app/layout/components/slideshow/slideshow.component';
import { AdviceComponent } from './components/advice/advice.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { ThanksComponent } from './components/thanks/thanks.component';

enum OutroRoutes {
  advice = "advice",
  questions = "questions",
  thanksIguess = "thanks"
}

const routes: Routes = [{
    path: '',
    component: SlideshowComponent,
    data: {routes: Object.values(OutroRoutes), mainRoute: 'outro'},
    children: [
      {
        path: OutroRoutes.advice,
        component: AdviceComponent,
      },
      {
        path: OutroRoutes.questions,
        component: QuestionsComponent,
      },
      {
        path: OutroRoutes.thanksIguess,
        component: ThanksComponent,
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OutroRoutingModule { }
