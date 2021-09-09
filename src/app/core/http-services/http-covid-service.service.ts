import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class HttpCovidServiceService {
  
  constructor(private http: HttpClient) {}

  getUsInfo(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiBaseUrl}/us`
    );
  }

  getStatesInfo(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiBaseUrl}/states/info`
    );
  }

  getStates(): Observable<any> {
    return this.http.get<any>(
      `${environment.apiBaseUrl}/states`
    );
  }
}