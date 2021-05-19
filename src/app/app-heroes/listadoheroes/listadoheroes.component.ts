import { Component} from '@angular/core';

@Component({
  selector: 'app-listadoheroes',
  templateUrl: './listadoheroes.component.html',
  styleUrls: ['./listadoheroes.component.css']
})
export class ListadoheroesComponent {

  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América'
  ];
  heroeBorrado: string = '';

  borrarHeroe () {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
