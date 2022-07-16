import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeTimeLineComponent } from './prime-time-line.component';

describe('PrimeTimeLineComponent', () => {
  let component: PrimeTimeLineComponent;
  let fixture: ComponentFixture<PrimeTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimeTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimeTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
