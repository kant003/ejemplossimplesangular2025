import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejer3Component } from './ejer3.component';

describe('Ejer3Component', () => {
  let component: Ejer3Component;
  let fixture: ComponentFixture<Ejer3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejer3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejer3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
