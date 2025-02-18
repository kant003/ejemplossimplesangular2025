import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MayusculasParesPipe } from '../../pipes/mayusculas-pares.pipe';

@Component({
  selector: 'app-ejemplo10',
  imports: [CommonModule, MayusculasParesPipe],
  templateUrl: './ejemplo10.component.html',
  styleUrl: './ejemplo10.component.css'
})
export class Ejemplo10Component {
  hoy = new Date()
  nombre = 'angel'
  
}
