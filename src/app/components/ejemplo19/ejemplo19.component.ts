import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejemplo19',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './ejemplo19.component.html',
  styleUrl: './ejemplo19.component.css'
})
export class Ejemplo19Component implements OnInit{
  formBuilder = inject(FormBuilder)
  form: FormGroup = new FormGroup({})
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['Bea', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.email]]
    })
  }
  handleSubmit(){
    if(this.form.invalid) return
    
    alert(`Me has enviado los datos: 
      ${this.form.value.name} 
      ${this.form.value.email}
      `)
  }
}
