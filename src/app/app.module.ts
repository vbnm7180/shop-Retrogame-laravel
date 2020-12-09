import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SilderComponent } from './silder/silder.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
