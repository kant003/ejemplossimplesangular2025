import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo19Component } from './ejemplo19.component';

describe('Ejemplo19Component', () => {
  let component: Ejemplo19Component;
  let fixture: ComponentFixture<Ejemplo19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo19Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
