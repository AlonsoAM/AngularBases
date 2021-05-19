import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { ListadoheroesComponent } from './listadoheroes/listadoheroes.component';



@NgModule({
  declarations: [
    HeroesComponent,
    ListadoheroesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoheroesComponent
  ]
})
export class AppHeroesModule { }
