import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeLoginCardComponent } from './prime-login-card.component';

describe('PrimeLoginCardComponent', () => {
  let component: PrimeLoginCardComponent;
  let fixture: ComponentFixture<PrimeLoginCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeLoginCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeLoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
