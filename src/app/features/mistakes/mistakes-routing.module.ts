import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from 'src/app/layout/components/slideshow/slideshow.component';
import { AuthComponent } from './components/auth/auth.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { MainComponent } from './components/main/main.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { SmartComponent } from './components/smart/smart.component';

enum MistakesRoutes {
  main="main",
  smart="smart",
  marketing = "marketing",
  hotel = "hotel"
  
}

const routes: Routes = [{
    path: '',
    component: SlideshowComponent,
    data: {routes: Object.values(MistakesRoutes), mainRoute: 'mistakes'},
    children: [
      {
        path: MistakesRoutes.main,
        component: MainComponent,
      },
      {
        path: MistakesRoutes.smart,
        component: SmartComponent,
      },
      {
        path: MistakesRoutes.marketing,
        component: MarketingComponent,
      },
      {
        path: MistakesRoutes.hotel,
        component: HotelComponent,
      },

    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MistakesRoutingModule { }
