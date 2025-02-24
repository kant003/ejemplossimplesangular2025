import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejemplo13HijoComponent } from './ejemplo13-hijo.component';

describe('Ejemplo13HijoComponent', () => {
  let component: Ejemplo13HijoComponent;
  let fixture: ComponentFixture<Ejemplo13HijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejemplo13HijoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejemplo13HijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
