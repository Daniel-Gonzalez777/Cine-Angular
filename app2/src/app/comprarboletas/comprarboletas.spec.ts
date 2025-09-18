import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comprarboletas } from './comprarboletas';

describe('Comprarboletas', () => {
  let component: Comprarboletas;
  let fixture: ComponentFixture<Comprarboletas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comprarboletas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comprarboletas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
