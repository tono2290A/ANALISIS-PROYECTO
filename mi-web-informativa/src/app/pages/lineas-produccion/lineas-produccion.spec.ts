import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasProduccion } from './lineas-produccion';

describe('LineasProduccion', () => {
  let component: LineasProduccion;
  let fixture: ComponentFixture<LineasProduccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LineasProduccion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineasProduccion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
