import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

import { TMSService } from './tms.service';


describe('TMSService', () => {
  let service: TMSService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [TMSService]
    });
    service = TestBed.inject(TMSService);
    let httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the right data', () => {
    const mockData = {name: 'shariqueeueu', id: 6546464}
    let httpMock = TestBed.get(HttpTestingController);
    let url= 'https://my-json-server.typicode.com/srquev/user-data/db'
    service.getAllEmployeeNames().subscribe(data => {
      expect(data).toEqual(mockData);
    });
    const req = httpMock.expectOne(url);
    req.flush(mockData);
});
});
