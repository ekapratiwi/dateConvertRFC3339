import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FirstPageComponent } from './views/first-page/first-page.component';
import { ResultPageComponent } from './views/result-page/result-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    ResultPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
