import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo6',
  imports: [FormsModule],
  templateUrl: './ejemplo6.component.html',
  styleUrl: './ejemplo6.component.css'
})
export class Ejemplo6Component {
  url = "https://loremflickr.com/1280/720"
  width = 100
}
