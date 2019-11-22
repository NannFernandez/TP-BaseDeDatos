/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AbmService } from './abm.service';

describe('Service: Abm', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AbmService]
    });
  });

  it('should ...', inject([AbmService], (service: AbmService) => {
    expect(service).toBeTruthy();
  }));
});
