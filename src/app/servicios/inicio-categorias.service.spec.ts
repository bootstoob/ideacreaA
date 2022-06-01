import { TestBed } from '@angular/core/testing';

import { InicioCategoriasService } from './inicio-categorias.service';

describe('InicioCategoriasService', () => {
  let service: InicioCategoriasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InicioCategoriasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
