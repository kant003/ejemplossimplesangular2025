import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo3-b',
  imports: [CommonModule],
  templateUrl: './ejemplo3-b.component.html',
  styleUrl: './ejemplo3-b.component.css'
})
export class Ejemplo3BComponent {
  profes = ['Antonio', 'Lorena', 'Pepe']

  productos = [
    {id:1, nombre:'Pera', precio:2},
    {id:2, nombre:'Manzana', precio:1.4},
    {id:3, nombre:'Naranja', precio:3},
  ]

  usuario = {
    nombre: 'Jose',
    apellidos: 'Ruiz',
    edad: 22
  }
}
