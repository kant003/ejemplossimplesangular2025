import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-ejemplo12-hijo',
  imports: [],
  templateUrl: './ejemplo12-hijo.component.html',
  styleUrl: './ejemplo12-hijo.component.css'
})
export class Ejemplo12HijoComponent {
  //@Input() texto = ''
  texto = input.required()
  //@Input() color = 'black'
  color = input()
}
