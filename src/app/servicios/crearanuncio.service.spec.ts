import { TestBed } from '@angular/core/testing';

import { CrearanuncioService } from './crearanuncio.service';

describe('CrearanuncioService', () => {
  let service: CrearanuncioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearanuncioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
