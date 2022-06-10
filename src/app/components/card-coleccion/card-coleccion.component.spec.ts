import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardColeccionComponent } from './card-coleccion.component';

describe('CardColeccionComponent', () => {
  let component: CardColeccionComponent;
  let fixture: ComponentFixture<CardColeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardColeccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardColeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
