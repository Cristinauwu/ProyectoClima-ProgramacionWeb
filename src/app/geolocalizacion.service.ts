import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeolocalizacionService {

  private baseUrl = 'http://api.ipstack.com/check?access_key=edca2a74712dfcfafea766d7122c6211';

  constructor(private http: HttpClient) { }

  getInfo(){
    return this.http.get(this.baseUrl);
  }
}
