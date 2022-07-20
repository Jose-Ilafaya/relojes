import { TestBed } from '@angular/core/testing';

import { ColeccionesService } from './colecciones.service';

describe('ColeccionesService', () => {
  let service: ColeccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColeccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
