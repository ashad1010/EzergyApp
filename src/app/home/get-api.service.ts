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
    return this.http.get('https://blynk.cloud/external/api/get?token=JvQFJtdavohU5BTFohxC8E9eKfz1Vsq1&dataStreamId=3');
  }
}
