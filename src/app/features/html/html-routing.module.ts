import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from 'src/app/layout/components/slideshow/slideshow.component';
import { ComponentComponent } from './components/component/component.component';
import { CustomComponent } from './components/custom/custom.component';
import { LibraryComponent } from './components/library/library.component';
import { MainComponent } from './components/main/main.component';
import { NativeElementsComponent } from './components/native-elements/native-elements.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

enum HTMLRoutes {
  main = "main",
  component = "component",
  nativeElements = "native-elements",
  library = "library",
  custom = "custom",
}

const routes: Routes = [{
    path: '',
    component: SlideshowComponent,
    data: {routes: Object.values(HTMLRoutes), mainRoute: 'html'},
    children: [
      {
        path: HTMLRoutes.main,
        component: MainComponent,
      },
      {
        path: HTMLRoutes.component,
        component: ComponentComponent,
      },
      {
        path: HTMLRoutes.nativeElements,
        component: NativeElementsComponent,
      },
      {
        path: HTMLRoutes.library,
        component: LibraryComponent,
      },
      {
        path: HTMLRoutes.custom,
        component: CustomComponent,
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HtmlRoutingModule { }
