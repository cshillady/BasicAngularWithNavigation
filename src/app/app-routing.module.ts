import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './component/page1/page1.component'
import { Page2Component } from './component/page2/page2.component'

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
