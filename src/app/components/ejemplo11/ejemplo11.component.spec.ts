import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo11Component } from './ejemplo11.component';

describe('Ejemplo11Component', () => {
  let component: Ejemplo11Component;
  let fixture: ComponentFixture<Ejemplo11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
