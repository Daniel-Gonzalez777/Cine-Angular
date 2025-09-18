import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Peliculacard } from './peliculacard';

describe('Peliculacard', () => {
  let component: Peliculacard;
  let fixture: ComponentFixture<Peliculacard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Peliculacard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Peliculacard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
