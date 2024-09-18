import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8080/smart/user/v1/getUserList"
  constructor(private httpClient: HttpClient) {}
  getUserList(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }


}
