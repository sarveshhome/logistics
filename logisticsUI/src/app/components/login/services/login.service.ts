import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import {HttpService} from '../../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpService: HttpService) { }
  apiUrl = environment.apiUrl;
  validateUser(loginObj: object): Observable<any> {
    console.log('login user api called');
    let requestOptionsArgs = loginObj;
    let responseType = {responseType: 'text'};
    return this.httpService.postApi('/login', requestOptionsArgs, '')
    .pipe(
      tap(res => {
        if (res) {
          localStorage.setItem('userInfo', JSON.stringify(res));
          return res;
        }
    })
  );
  }
}
