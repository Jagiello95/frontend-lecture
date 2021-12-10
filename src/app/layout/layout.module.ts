import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { DropdownModule } from 'primeng/dropdown'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LayoutComponent,
    SlideshowComponent,
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    DropdownModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    LayoutComponent,
    SlideshowComponent
  ]
})
export class LayoutModule { }
