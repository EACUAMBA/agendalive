import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import {ResponsePageable} from 'src/app/shared/model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {

  apiUrl = "http://localhost:8080/lives";

  httpOption = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithFlags(flag: string): Observable<ResponsePageable>{
    return this.httpClient.get<ResponsePageable>(this.apiUrl + "?flag=" + flag);
  }
}
