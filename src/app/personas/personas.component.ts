import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{

    deshabilitar = false;
    mensaje = 'Da click para ver el mensaje!';
    titulo = 'Ingeniero';
    total = 0;
    valorA = 0;
    valorB = 0;

    mostrarMensaje(){
        this.mensaje = 'Bienvenido a mi primera App en Angular.';
    }

    calcularSuma(){
        return this.total = this.valorA + this.valorB;
    }


}