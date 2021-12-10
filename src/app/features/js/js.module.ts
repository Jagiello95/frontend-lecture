import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagicComponent } from './components/magic/magic.component';
import { JsRoutingModule } from './js-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommentsComponent } from './components/comments/comments.component';
import { LanguageComponent } from './components/language/language.component';
import { NamesComponent } from './components/names/names.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CodeEditorModule } from '@ngstack/code-editor';
import {NgxCodejarModule} from 'ngx-codejar'

import {DialogModule} from 'primeng/dialog';
import { DataStructuresComponent } from './components/data-structures/data-structures.component';
import { ReferenceComponent } from './components/reference/reference.component';
import { EqualComponent } from './components/equal/equal.component';
import { AsyncComponent } from './components/async/async.component';
import { MainComponent } from './components/main/main.component';
import { IfComponent } from './components/if/if.component';

@NgModule({
  declarations: [
    MagicComponent,
    CommentsComponent,
    LanguageComponent,
    NamesComponent,
    DataStructuresComponent,
    ReferenceComponent,
    EqualComponent,
    AsyncComponent,
    MainComponent,
    IfComponent,
  ],
  imports: [
    DialogModule,
    FormsModule,
    JsRoutingModule,
    SharedModule,
    MonacoEditorModule,
    CodeEditorModule,
    NgxCodejarModule
  ]
})
export class JsModule { }
