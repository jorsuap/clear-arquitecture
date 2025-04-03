/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlbumApiService } from './album-api.service';

describe('Service: AlbumApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumApiService]
    });
  });

  it('should ...', inject([AlbumApiService], (service: AlbumApiService) => {
    expect(service).toBeTruthy();
  }));
});
