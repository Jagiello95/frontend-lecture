import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from 'src/app/layout/components/slideshow/slideshow.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { LazyComponent } from './components/lazy/lazy.component';
import { MainComponent } from './components/main/main.component';
import { ReduxComponent } from './components/redux/redux.component';
import { RenderingComponent } from './components/rendering/rendering.component';
import { StructureComponent } from './components/structure/structure.component';
import { ToolsComponent } from './components/tools/tools.component';

enum ArchitectureRoutes {
  main = "main",
  frameworks = "frameworks",
  rendering = "rendering",
  redux = "redux",
  structure = "structure",
  lazy = "lazy",
  tools = "tools"
}

const routes: Routes = [{
    path: '',
    component: SlideshowComponent,
    data: {routes: Object.values(ArchitectureRoutes), mainRoute: 'architecture'},
    children: [
      {
        path: ArchitectureRoutes.main,
        component: MainComponent,
      },
      {
        path: ArchitectureRoutes.frameworks,
        component: FrameworksComponent,
      },
      {
        path: ArchitectureRoutes.rendering,
        component: RenderingComponent,
      },
      {
        path: ArchitectureRoutes.redux,
        component: ReduxComponent,
      },
      {
        path: ArchitectureRoutes.structure,
        component: StructureComponent,
      },
      {
        path: ArchitectureRoutes.lazy,
        component: LazyComponent,
      },
      {
        path: ArchitectureRoutes.tools,
        component: ToolsComponent,
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArchitectureRoutingModule { }
