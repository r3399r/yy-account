import { TestBed } from '@angular/core/testing';
import { OrientationService } from 'src/app/services/orientation.service';

describe('OrientationService', () => {
  let service: OrientationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrientationService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
