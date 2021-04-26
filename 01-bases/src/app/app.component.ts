import { Component } from '@angular/core';

@Component({
  // Nombre que el componente va a tener
  selector: 'app-root',
  // Por lo menos si tiene una contraparte html
  templateUrl: './app.component.html',
  // Cuando se hace de menos de 3 lineas, màs, usar ``
  // template: '<span>Luis</span>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  

  // restar(){
  //   this.numero -= 1;
  // }
}
