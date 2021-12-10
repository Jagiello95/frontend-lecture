import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './components/component/component.component';
import { HtmlRoutingModule } from './html-routing.module';
import { NativeElementsComponent } from './components/native-elements/native-elements.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainComponent } from './components/main/main.component';
import { LibraryComponent } from './components/library/library.component';
import { CustomComponent } from './components/custom/custom.component';




@NgModule({
  declarations: [
    ComponentComponent,
    NativeElementsComponent,
    WrapperComponent,
    MainComponent,
    LibraryComponent,
    CustomComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    HtmlRoutingModule
  ]
})
export class HtmlModule { }
