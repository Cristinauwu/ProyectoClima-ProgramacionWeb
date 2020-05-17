import { Component, OnInit } from '@angular/core';
import { GeolocalizacionService } from '../geolocalizacion.service';

@Component({
  selector: 'app-geolocalizacion',
  templateUrl: './geolocalizacion.component.html',
  styleUrls: ['./geolocalizacion.component.css']
})
export class GeolocalizacionComponent implements OnInit {

  loaded = false;
  Info: any;
  date = new Date();
  Hour: any;

  constructor(private localizacionAPI: GeolocalizacionService) { }

  ngOnInit() {
    this.localizacionAPI.getInfo().subscribe(
      data => {
        this.loaded = true;
        this.Info = data;
        this.Hour = `${this.date.getHours()}:${this.date.getMinutes()}`;
      }, error => {
        alert('OCURRIO UN ERROR');
      }
    );
  }

}
