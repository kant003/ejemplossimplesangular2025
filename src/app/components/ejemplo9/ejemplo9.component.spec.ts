import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo9Component } from './ejemplo9.component';

describe('Ejemplo9Component', () => {
  let component: Ejemplo9Component;
  let fixture: ComponentFixture<Ejemplo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo9Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
