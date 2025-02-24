import { DecimalPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer2',
  imports: [ReactiveFormsModule, DecimalPipe],
  templateUrl: './ejer2.component.html',
  styleUrl: './ejer2.component.css'
})
export class Ejer2Component {
  imc = 0
  formBuilder = inject(FormBuilder)
    form: FormGroup = new FormGroup({})
    ngOnInit(): void {
      this.form = this.formBuilder.group({
        altura: ['1.80', [Validators.required]],
        peso: ['90', [Validators.required]]
      })
    }
    handleSubmit(){
      if(this.form.invalid) return
      
      /* alert(`Me has enviado los datos: 
        ${this.form.value.altura} 
        ${this.form.value.peso}
        `) */
      this.imc = this.form.value.peso / Math.pow(this.form.value.altura,2)
    }

    getImcText(){
      if(this.imc < 18.5) return 'Bajo peso'
      if(this.imc < 24.9) return 'Normal'
      if(this.imc < 29.9) return 'Sobrepeso'
      if(this.imc < 34.9) return 'Obesidad clase I'
      if(this.imc < 39.9) return 'Obesidad clase II'
      if(this.imc >= 40) return 'Obesidad clase III'
      return 'Error'
    }
}
