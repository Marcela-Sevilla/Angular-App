import { Component } from '@angular/core';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent {
  
  nombre: string = 'Marcela';
  apellido: string = 'Sevilla Lopez';
  private edad: number = 18;
  ciudad: string = 'Barranquilla';

  // Funciones en Angular
  getEdad():number{
    return this.edad
  }
}
