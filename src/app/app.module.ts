import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ViewSwitcherComponent } from './view-switcher/view-switcher.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ViewSwitcherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
