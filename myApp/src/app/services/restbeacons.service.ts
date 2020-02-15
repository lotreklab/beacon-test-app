import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Point } from '../models/Point';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class RestBeaconsService {

  // Base url
  baseurl = 'http://165.22.25.142/api/points/';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  // GET
  GetPoint(beaconAddress: string): Observable<Point> {
    return this.http.get<Point>(this.baseurl + beaconAddress)
    .pipe(
      retry(1),
      catchError(this.errorHandle)
    )
  }

  // Error handling
  errorHandle(error) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       // Get client-side error
       errorMessage = error.error.message;
     } else {
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }

}
