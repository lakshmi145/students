import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
     .pipe(catchError(this.errorHandler))

     
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error.message||"server error");
  }
}
