import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  imports: [],
  templateUrl: './ejer1.component.html',
  styleUrl: './ejer1.component.css'
})
export class Ejer1Component {
  numeros = [1,5,22,78,1,3,65]

  // Otra forma
  getOdds(){
    return this.numeros.filter(n => n%2!==0)
  }
}
