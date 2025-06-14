import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Montaje } from './montaje';

describe('Montaje', () => {
  let component: Montaje;
  let fixture: ComponentFixture<Montaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Montaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Montaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
