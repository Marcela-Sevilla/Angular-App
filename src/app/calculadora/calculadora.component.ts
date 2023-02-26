import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  @Output() valorTotal = new EventEmitter<number>();

  valorA: number;
  valorB: number;

  calcularSuma(){
    let total = this.valorA + this.valorB;
    this.valorTotal.emit(total);
  }
  
}
