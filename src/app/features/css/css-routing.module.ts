import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from 'src/app/layout/components/slideshow/slideshow.component';
import { AlignmentComponent } from './components/alignment/alignment.component';
import { EncapsulationComponent } from './components/encapsulation/encapsulation.component';
import { InlineComponent } from './components/inline/inline.component';
import { MainComponent } from './components/main/main.component';
import { PreprocessingComponent } from './components/preprocessing/preprocessing.component';
import { ScssFeaturesComponent } from './components/scss-features/scss-features.component';
import { SpecifityComponent } from './components/specifity/specifity.component';
import { UnitsComponent } from './components/units/units.component';
import { VariablesComponent } from './components/variables/variables.component';

enum CssRoutes {
  main = "main",
  preprocessing= "preprocessing",
  encapsulation = "encapsulation",
  features="features",
  variables = "variables",
  units = "units",
  inline ="inline",
  specifity = "specifity",
  alignment = "alignment"
}

const routes: Routes = [{
    path: '',
    component: SlideshowComponent,
    data: {routes: Object.values(CssRoutes), mainRoute: 'css'},
    children: [
      {
        path: CssRoutes.main,
        component: MainComponent,
      },
      {
        path: CssRoutes.preprocessing,
        component: PreprocessingComponent,
      },
      {
        path: CssRoutes.encapsulation,
        component: EncapsulationComponent,
      },
      {
        path: CssRoutes.features,
        component: ScssFeaturesComponent,
      },
      {
        path: CssRoutes.variables,
        component: VariablesComponent,
      },
      {
        path: CssRoutes.units,
        component: UnitsComponent,
      },
      {
        path: CssRoutes.inline,
        component: InlineComponent,
      },
      {
        path: CssRoutes.specifity,
        component: SpecifityComponent,
      },
      {
        path: CssRoutes.alignment,
        component: AlignmentComponent,
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CssRoutingModule { }
