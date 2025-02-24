import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo4-b',
  imports: [CommonModule],
  templateUrl: './ejemplo4-b.component.html',
  styleUrl: './ejemplo4-b.component.css'
})
export class Ejemplo4BComponent {
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
