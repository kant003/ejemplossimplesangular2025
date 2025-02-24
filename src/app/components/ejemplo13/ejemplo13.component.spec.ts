import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13Component } from './ejemplo13.component';

describe('Ejemplo13Component', () => {
  let component: Ejemplo13Component;
  let fixture: ComponentFixture<Ejemplo13Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo13Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
