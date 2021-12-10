import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreprocessingComponent } from './components/preprocessing/preprocessing.component';
import { CssRoutingModule } from './css-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { VariablesComponent } from './components/variables/variables.component';
import { UnitsComponent } from './components/units/units.component';
import { InlineComponent } from './components/inline/inline.component';
import { SpecifityComponent } from './components/specifity/specifity.component';
import { AlignmentComponent } from './components/alignment/alignment.component';
import { ScssFeaturesComponent } from './components/scss-features/scss-features.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    PreprocessingComponent,
    VariablesComponent,
    UnitsComponent,
    InlineComponent,
    SpecifityComponent,
    AlignmentComponent,
    ScssFeaturesComponent,
    EncapsulationComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    CssRoutingModule,
    SharedModule
  ]
})
export class CssModule { }
