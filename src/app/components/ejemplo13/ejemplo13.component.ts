import { Component } from '@angular/core';
import { Ejemplo13HijoComponent } from "../ejemplo13-hijo/ejemplo13-hijo.component";

@Component({
  selector: 'app-ejemplo13',
  imports: [Ejemplo13HijoComponent],
  templateUrl: './ejemplo13.component.html',
  styleUrl: './ejemplo13.component.css'
})
export class Ejemplo13Component {
  mensaje = ''
  handleEdadChange(edad:number){
    this.mensaje = 'Mi hijo me dice que su edad es'+edad
  }
}
