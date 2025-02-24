import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer2Component } from './ejer2.component';

describe('Ejer2Component', () => {
  let component: Ejer2Component;
  let fixture: ComponentFixture<Ejer2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
