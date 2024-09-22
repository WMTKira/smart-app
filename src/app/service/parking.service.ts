import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParkingServiceService {

  private baseUrl = "http://localhost:8223/smart/parking/v1/getParkingLotList"
  constructor(private httpClient: HttpClient) {}

  
  getParkingLotList(pageNum: number, pageSize: number) {
    let params = {
      pageNum: pageNum,
      pageSize: pageSize
    }
    return this.httpClient.post(`${this.baseUrl}`, params);
  }


}
