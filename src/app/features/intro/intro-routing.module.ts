import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from 'src/app/layout/components/slideshow/slideshow.component';
import { AboutComponent } from './components/about/about.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { TitleComponent } from './components/title/title.component';

enum IntroRoutes {
  title = "title",
  about = "about",
  timeline = "timeline"
}

const routes: Routes = [{
    path: '',
    component: SlideshowComponent,
    data: {routes: Object.values(IntroRoutes), mainRoute: 'intro'},
    children: [
      {
        path: IntroRoutes.title,
        component: TitleComponent,
      },
      {
        path: IntroRoutes.about,
        component: AboutComponent,
      },
      {
        path: IntroRoutes.timeline,
        component: TimelineComponent,
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IntroRoutingModule { }
