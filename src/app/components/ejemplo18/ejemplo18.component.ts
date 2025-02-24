import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ejemplo18',
  imports: [],
  templateUrl: './ejemplo18.component.html',
  styleUrl: './ejemplo18.component.css'
})
export class Ejemplo18Component implements OnInit {
  titulo: string | null = null
  especialidad: string | null = null
  activeRoute = inject(ActivatedRoute)
  router = inject(Router)
  
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.titulo = params['titulo'] || null
      this.especialidad = params['especialidad'] || null
    })
  }
  cambiar(){
    this.router.navigate([], {
      queryParams: {titulo:'Fontanero', especialidad:'Griferia'}
    })
    
  }
}
