
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppHeroesModule } from './app-heroes/app-heroes.module';
import { AppContadorModule } from './app-contador/app-contador.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppHeroesModule,
    AppContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
