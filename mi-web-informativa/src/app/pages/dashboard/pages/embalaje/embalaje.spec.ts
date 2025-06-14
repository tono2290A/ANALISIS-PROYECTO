import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Embalaje } from './embalaje';

describe('Embalaje', () => {
  let component: Embalaje;
  let fixture: ComponentFixture<Embalaje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Embalaje]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Embalaje);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
