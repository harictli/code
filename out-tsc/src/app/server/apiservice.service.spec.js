import { TestBed } from '@angular/core/testing';
import { ApiserviceService } from './apiservice.service';
describe('ApiserviceService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(ApiserviceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=apiservice.service.spec.js.map