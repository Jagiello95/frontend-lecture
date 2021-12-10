import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchitectureRoutingModule } from './architecture-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RenderingComponent } from './components/rendering/rendering.component';
import { ReduxComponent } from './components/redux/redux.component';
import { StructureComponent } from './components/structure/structure.component';
import { LazyComponent } from './components/lazy/lazy.component';
import { ToolsComponent } from './components/tools/tools.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    RenderingComponent,
    ReduxComponent,
    StructureComponent,
    LazyComponent,
    ToolsComponent,
    FrameworksComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    ArchitectureRoutingModule,
    SharedModule
  ]
})
export class ArchitectureModule { }
