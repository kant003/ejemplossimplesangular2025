import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3',
  imports: [CommonModule],
  templateUrl: './ejemplo3.component.html',
  styleUrl: './ejemplo3.component.css'
})
export class Ejemplo3Component {
  profes = ['Antonio', 'Lorena', 'Pepe']
}
