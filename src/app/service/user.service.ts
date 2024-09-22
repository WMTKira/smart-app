import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private baseUrl = "http://localhost:8223/smart/user/v1/getUserList"
  constructor(private httpClient: HttpClient) {}
  getUserList() {
    return this.httpClient.get(`${this.baseUrl}`);
  }


}
