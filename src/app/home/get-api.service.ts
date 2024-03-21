import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class GetApiService {

  constructor
  (
    private http:HttpClient
  ) { }

  apiCall()
  {
    return this.http.get('https://blynk.cloud/external/api/get?token=yNNm2Vr0dbI-c8aIPHuSZsIqcD4ElLds&dataStreamId=10');
  }
}
