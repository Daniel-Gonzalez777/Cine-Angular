import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estrenocard } from './estrenocard';

describe('Estrenocard', () => {
  let component: Estrenocard;
  let fixture: ComponentFixture<Estrenocard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estrenocard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estrenocard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
