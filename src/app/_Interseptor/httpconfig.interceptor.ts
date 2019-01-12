import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { AccountModel } from '../_Models/account-model';

@Injectable() export class HttpConfigInterceptor implements HttpInterceptor {
    tokenFieldName = 'token';
    adminToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkFkbWluIiwiYWRtaW4iOnRydWV9.mYRopPo1c1qZM1gd0zAhQg5noBo6kisyGPiHs8Yhxuo';
    orders = [
        {id: 1, name: 'Order1'},
        {id: 2, name: 'Order2'},
        {id: 1, name: 'Order3'}
    ];
    accounts: AccountModel [] = [
        {
          id: 1,
          email: 'test@test.com',
          password: 'Test',
          token:
          `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
          .eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5vdCBBZG1pbiIsImFkbWluIjpmYWxzZX0
          .mkjBeZJjTJJBL3kC1-_cIuyAz4718bBa_Cp9LTLSomw`
        },
        {
          id: 2,
          email: 'admin@test.com',
          password: 'admin',
          token: this.adminToken
        }
      ];

    intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {

        // Get orders
        if (req.url.endsWith('/api/orders') && req.method === 'GET') {

            if (req.headers.get('Authorization').trim() === ('Bearer ' + this.adminToken).trim()) {
                return of (new HttpResponse({
                    status: 200,
                    body: this.orders
                }));
            }
            else {
                console.log('No access to orders');
                return of (new HttpResponse({
                    status: 401
                }));
            }
        }

        // Login. Return token.
        if (req.url.endsWith('/api/authenticate') && req.method === 'POST') {
            const reqCredentials: AccountModel = req.body;
            const searchAccount = this.accounts
            .find(account => account.email === reqCredentials.email
            &&  account.password === reqCredentials.password);

            if (searchAccount === undefined) {
                return of (new HttpResponse({
                    status: 400,
                }));
            }
            else if (searchAccount && searchAccount.token) {
                const body = { token: searchAccount.token };
                return of (new HttpResponse({
                    status: 200,
                    body: body
                }));
            }
        }

        return next.handle(req);
    }));
  }
 }

