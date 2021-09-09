import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpCovidServiceService } from '../http-services/http-covid-service.service';
@Injectable({
  providedIn: 'root',
})
export class CovidServiceService {
  
  constructor(private httpCovidServiceService: HttpCovidServiceService) {}
  
  getUsInfo(): Observable<any> {
    return this.httpCovidServiceService.getUsInfo().pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getStataesInfo(): Observable<any> {
    return this.httpCovidServiceService.getStatesInfo().pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }

  getStataes(): Observable<any> {
    return this.httpCovidServiceService.getStates().pipe(
      map((res) => {
        return res;
      }),
      catchError((err) => {
        return throwError(err);
      })
    );
  }
}