import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './component/page1/page1.component'
import { Page2Component } from './component/page2/page2.component'
import { Page3Component } from './component/page3/page3.component';
import { Page4Component } from './component/page4/page4.component';
import { Page5Component } from './component/page5/page5.component';

const routes: Routes = [
  { path: '', component: Page1Component },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', component: Page3Component },
  { path: 'page4', component: Page4Component },
  { path: 'page5', component: Page5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
