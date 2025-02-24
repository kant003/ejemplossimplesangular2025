import { Component, EventEmitter, output, Output } from '@angular/core';

@Component({
  selector: 'app-ejemplo13-hijo',
  imports: [],
  templateUrl: './ejemplo13-hijo.component.html',
  styleUrl: './ejemplo13-hijo.component.css'
})
export class Ejemplo13HijoComponent {
  //@Output() edadCambia = new EventEmitter<number>();
  edadCambia = output<number>()

  avisarAlPadre(edad: number){
    this.edadCambia.emit(edad)
  }
}
