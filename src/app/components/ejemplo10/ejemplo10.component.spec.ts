import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo10Component } from './ejemplo10.component';

describe('Ejemplo10Component', () => {
  let component: Ejemplo10Component;
  let fixture: ComponentFixture<Ejemplo10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo10Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
