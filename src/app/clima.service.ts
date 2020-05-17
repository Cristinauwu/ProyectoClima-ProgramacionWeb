import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GeolocalizacionService } from './geolocalizacion.service';
import { mergeMap, map} from 'rxjs/operators';

interface Data {
  init: number;
  dataseries: Dataserie[];
}
interface Dataserie {
  date: number;
  weather: string;
  dato: number;
  dato2: number;
}

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  
  constructor(private http: HttpClient, private localizacionAPI: GeolocalizacionService)  {}
  
  getInfo(){
    const params = new HttpParams();
    return this.http.get('http://api.ipstack.com/check?access_key=edca2a74712dfcfafea766d7122c6211',{
      params
    }).pipe(
      mergeMap(
        (info : any) =>{
          const params ={
            lon: info.longitude,
            lat: info.latitude,
            product: 'civillight',
            output: 'json'
          };
          return this.http.get<Data>('http://www.7timer.info/bin/api.pl',{params})
          .pipe(
            map(clima => ({clima, info}))
          );
        }
      )
    );
  }
}
