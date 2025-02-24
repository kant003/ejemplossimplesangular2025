import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo18Component } from './ejemplo18.component';

describe('Ejemplo18Component', () => {
  let component: Ejemplo18Component;
  let fixture: ComponentFixture<Ejemplo18Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo18Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
