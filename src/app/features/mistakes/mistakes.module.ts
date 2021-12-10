import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { MistakesRoutingModule } from './mistakes-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SmartComponent } from './components/smart/smart.component';
import { MarketingComponent } from './components/marketing/marketing.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AuthComponent } from './components/auth/auth.component';



@NgModule({
  declarations: [
    MainComponent,
    SmartComponent,
    MarketingComponent,
    HotelComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    MistakesRoutingModule,
    SharedModule
  ]
})
export class MistakesModule { }
