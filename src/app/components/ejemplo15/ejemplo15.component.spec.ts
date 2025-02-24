import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo15Component } from './ejemplo15.component';

describe('Ejemplo15Component', () => {
  let component: Ejemplo15Component;
  let fixture: ComponentFixture<Ejemplo15Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo15Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
