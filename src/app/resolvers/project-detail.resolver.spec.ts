import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { projectDetailResolver } from './project-detail.resolver';

describe('projectDetailResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => projectDetailResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
