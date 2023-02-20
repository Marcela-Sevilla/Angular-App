import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{

    deshabilitar: boolean = false;
    mensaje: string = 'Da click para ver el mensaje!';
    titulo: string = 'Ingeniera';
    total: number = 0;
    valorA: number = 0;
    valorB: number = 0;

    mostrarMensaje(){
        this.mensaje = 'Bienvenido a mi primera App en Angular.';
    }

    calcularSuma():void{
        this.total = this.valorA + this.valorB;
    }


}