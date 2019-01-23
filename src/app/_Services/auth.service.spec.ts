import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { nextContext } from '@angular/core/src/render3';

describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AuthService]
  }));

  beforeEach(() =>{
    service = new AuthService(null);
  })

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('auth token should be saved if body was returned', () => {

    let httpResp = new HttpResponse({ 
      status: 200, 
      body: { token: 'testtoken' 
    }});

    spyOn(service, 'login').and.callFake(t =>{
      
    })

    //second mock approach
    /*spyOn(service, 'login').and.returnValue({

    })*/
  });
});
