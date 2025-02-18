import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo2',
  imports: [],
  templateUrl: './ejemplo2.component.html',
  styleUrl: './ejemplo2.component.css'
})
export class Ejemplo2Component {
  cont = 0

  incrementar(){
    this.cont ++
  }
}
