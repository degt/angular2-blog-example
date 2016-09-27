/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommentsService } from './comments.service';

describe('Service: Comments', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentsService]
    });
  });

  it('should ...', inject([CommentsService], (service: CommentsService) => {
    expect(service).toBeTruthy();
  }));
});
