import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgSwitch } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page2Component } from './component/page2/page2.component';
import { Page1Component } from './component/page1/page1.component';
import { Page3Component } from './component/page3/page3.component';
import { Page4Component } from './component/page4/page4.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [NgSwitch],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
