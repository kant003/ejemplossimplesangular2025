import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ejemplo17',
  imports: [],
  templateUrl: './ejemplo17.component.html',
  styleUrl: './ejemplo17.component.css'
})
export class Ejemplo17Component implements OnInit {
  id = ''
  activeRoute = inject(ActivatedRoute)
  //constructor(private activeRoute: ActivatedRoute){} 
  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['id']
  }
}
