import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

    heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
    public heroeBorrado:string = '';

    borrarHeroe(){
      // this.heroes = [];
      this.heroeBorrado = this.heroes.shift() || '';
      // const heroeBorrado = this.heroes.shift();
    }

}
