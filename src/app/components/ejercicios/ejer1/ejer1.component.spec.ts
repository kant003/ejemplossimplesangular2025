import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer1Component } from './ejer1.component';

describe('Ejer1Component', () => {
  let component: Ejer1Component;
  let fixture: ComponentFixture<Ejer1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
