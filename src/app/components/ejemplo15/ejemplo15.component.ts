import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo15',
  imports: [CommonModule],
  templateUrl: './ejemplo15.component.html',
  styleUrl: './ejemplo15.component.css'
})
export class Ejemplo15Component {
  user={
    name: 'Jose',
    isAdmin: true,
    city: 'Vigo'
  }
}
