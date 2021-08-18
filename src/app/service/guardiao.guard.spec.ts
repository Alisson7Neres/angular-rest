import { TestBed, async, inject } from '@angular/core/testing';

import { GuardiaoGuard } from './guardiao.guard';

describe('GuardiaoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardiaoGuard]
    });
  });

  it('should ...', inject([GuardiaoGuard], (guard: GuardiaoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
