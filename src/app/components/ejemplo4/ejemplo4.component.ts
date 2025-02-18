import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo4',
  imports: [CommonModule],
  templateUrl: './ejemplo4.component.html',
  styleUrl: './ejemplo4.component.css'
})
export class Ejemplo4Component {
  numero = 0
  constructor(){
    this.numero=1
  }
  incrementa(){
    this.numero ++
  }
  decrementa(){
    this.numero --
  }
  isOdd(){
    return this.numero % 2 !== 0
  }
}
