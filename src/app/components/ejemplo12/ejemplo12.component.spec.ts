import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo12Component } from './ejemplo12.component';

describe('Ejemplo12Component', () => {
  let component: Ejemplo12Component;
  let fixture: ComponentFixture<Ejemplo12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo12Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
