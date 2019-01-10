import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NotFoundError } from '../_Components/common/not-found-error';
import { BadRequestError } from '../_Components/common/bad-request-error';
import { AppError } from '../_Components/common/app-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http
    .get(this.url, { observe: 'response'}) //second parameter is optional in order to receive full response.
    .pipe(catchError(this.handleError));
  }

  create(resource){
    return this.http
    .post(this.url, resource)
    .pipe(catchError(this.handleError));  
  }

  update(resource){
    return this.http
    .patch(this.url + '/' + resource.id,  JSON.stringify({ isRead: true }))
    .pipe(catchError(this.handleError));
  }

  delete(id){
    return this.http
    .delete(this.url + '/' + id)
    .pipe(catchError(this.handleError));    
  }

  private handleError(error: Response){
    if (error.status === 404)
      return Observable.throw(new NotFoundError);
    if (error.status === 400)
      return Observable.throw(new BadRequestError(error.json()));  

    else return Observable.throw(new AppError(error));
  }
}


