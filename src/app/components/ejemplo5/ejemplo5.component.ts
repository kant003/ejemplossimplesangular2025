import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo5',
  imports: [FormsModule],
  templateUrl: './ejemplo5.component.html',
  styleUrl: './ejemplo5.component.css'
})
export class Ejemplo5Component {
  num = 2
  constructor(){
    setInterval( ()=>this.num++,  2000)
  }
}
