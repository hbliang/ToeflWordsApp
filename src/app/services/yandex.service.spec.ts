import { TestBed, inject } from '@angular/core/testing';

import { YandexService } from './yandex.service';

describe('YandexService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YandexService]
    });
  });

  it('should be created', inject([YandexService], (service: YandexService) => {
    expect(service).toBeTruthy();
  }));
});
