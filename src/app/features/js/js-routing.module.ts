import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideshowComponent } from 'src/app/layout/components/slideshow/slideshow.component';
import { AsyncComponent } from './components/async/async.component';
import { CommentsComponent } from './components/comments/comments.component';
import { DataStructuresComponent } from './components/data-structures/data-structures.component';
import { EqualComponent } from './components/equal/equal.component';
import { IfComponent } from './components/if/if.component';
import { LanguageComponent } from './components/language/language.component';
import { MagicComponent } from './components/magic/magic.component';
import { MainComponent } from './components/main/main.component';
import { NamesComponent } from './components/names/names.component';
import { ReferenceComponent } from './components/reference/reference.component';

enum JsRoutes {
  main = "main",
  language = "language",
  magic= "magic",
  comments = "comments",
  names="names",
  dataStructures="data-structures",
  reference="reference",
  equal = "equal",
  async = "async",
  if = "if"

}

const routes: Routes = [{
    path: '',
    component: SlideshowComponent,
    data: {routes: Object.values(JsRoutes), mainRoute: 'js'},
    children: [
      {
        path: JsRoutes.main,
        component: MainComponent,
      },
      {
        path: JsRoutes.magic,
        component: MagicComponent,
      },
      {
        path: JsRoutes.comments,
        component: CommentsComponent,
      },
      {
        path: JsRoutes.language,
        component: LanguageComponent,
      },
      {
        path: JsRoutes.names,
        component: NamesComponent,
      },
      {
        path: JsRoutes.dataStructures,
        component: DataStructuresComponent,
      },
      {
        path: JsRoutes.reference,
        component: ReferenceComponent,
      },
      {
        path: JsRoutes.equal,
        component: EqualComponent,
      },
      {
        path: JsRoutes.async,
        component: AsyncComponent
      },
      {
        path: JsRoutes.if,
        component: IfComponent
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsRoutingModule { }
