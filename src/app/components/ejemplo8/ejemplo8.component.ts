import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo8',
  imports: [],
  templateUrl: './ejemplo8.component.html',
  styleUrl: './ejemplo8.component.css'
})
export class Ejemplo8Component {
  resultado = 0

  sumar(num1:number,num2:number){
    this.resultado = num1+num2
  }
}
