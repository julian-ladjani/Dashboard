import { TestBed } from '@angular/core/testing';

import { WidgetFactoryService } from './widget-factory.service';

describe('WidgetFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetFactoryService = TestBed.get(WidgetFactoryService);
    expect(service).toBeTruthy();
  });
});
