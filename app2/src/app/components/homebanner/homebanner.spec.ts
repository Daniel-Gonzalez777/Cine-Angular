import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homebanner } from './homebanner';

describe('Homebanner', () => {
  let component: Homebanner;
  let fixture: ComponentFixture<Homebanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Homebanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homebanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
