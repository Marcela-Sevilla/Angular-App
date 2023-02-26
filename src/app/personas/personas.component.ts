import { Component } from "@angular/core";

@Component({
    selector: 'app-personas',
    templateUrl: './personas.component.html',
    styleUrls: ['./personas.component.css']
})
export class PersonasComponent{

    deshabilitar: boolean = false;
    mensaje: string = '';
    titulo: string = 'Ingeniera';
    mostrar: boolean = false;
    total: number =0;

    mostrarMensaje(){
        this.mostrar = true;
        this.mensaje = 'Bienvenido a mi primera App en Angular.';
    };

    sumaTotal(totalSuma:number){
        this.total = totalSuma;
    }

}