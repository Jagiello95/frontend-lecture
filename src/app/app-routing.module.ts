import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import('./features/intro/intro.module').then(m => m.IntroModule)
  },
  {
    path: 'architecture',
    loadChildren: () => import('./features/architecture/architecture.module').then(m => m.ArchitectureModule)
  },
  {
    path: 'html',
    loadChildren: () => import('./features/html/html.module').then(m => m.HtmlModule)
  },
  {
    path: 'css',
    loadChildren: () => import('./features/css/css.module').then(m => m.CssModule)
  },
  {
    path: 'js',
    loadChildren: () => import('./features/js/js.module').then(m => m.JsModule)
  },
  {
    path: 'mistakes',
    loadChildren: () => import('./features/mistakes/mistakes.module').then(m => m.MistakesModule)
  },
  {
    path: 'outro',
    loadChildren: () => import('./features/outro/outro.module').then(m => m.OutroModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
