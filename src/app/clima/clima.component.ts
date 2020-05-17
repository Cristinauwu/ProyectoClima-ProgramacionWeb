import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../clima.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.css']
})
export class ClimaComponent implements OnInit {

  loaded = false;
  Clima1 = []; 
  Clima = []; 
  date = new Date();

  constructor( private climaAPI: ClimaService) { }

  ngOnInit() {
    this.climaAPI.getInfo().subscribe(
      data => {
        this.loaded = true;

        data.clima.dataseries[0].date=(this.date.getTime());
        this.Clima1[0] = data.clima.dataseries[0];

        for (let i = 0; i < 4; i++) {
          data.clima.dataseries[i+1].date=(this.date.getTime() + (24*60*60*1000)*(i+1));
          this.Clima[i] = data.clima.dataseries[i+1];
        }

      }, error => {
        alert('OCURRIO UN ERROR');
      }
    );
  }

  getImage(str){
    var Image:string;
    switch(str){
      case 'clear':
          Image='https://image.flaticon.com/icons/png/512/2698/2698194.png';
        break;

      case 'pcloudy':
          Image='https://image.flaticon.com/icons/png/512/1146/1146869.png';
        break;

      case 'cloudy':
          Image='https://image.flaticon.com/icons/png/512/414/414927.png';
        break;
      
      case 'mcloudy':
          Image='https://image.flaticon.com/icons/png/512/1163/1163634.png';
        break;
        
      case 'rain':
          Image='https://image.flaticon.com/icons/svg/1146/1146858.svg';
        break;

      case 'snow':
          Image='https://image.flaticon.com/icons/png/512/614/614116.png';
        break;
        
      case 'lightrain':
          Image='https://image.flaticon.com/icons/svg/2910/2910202.svg';
        break;
    }
    return Image;
  }
  
  getDay(str){
    var Day:string;
    switch(str){
      case 'Monday':
          Day='Lunes';
        break;

      case 'Tuesday':
          Day='Martes';
        break;

      case 'Wednesday':
          Day='Miércoles';
        break;
      
      case 'Thursday':
          Day='Jueves';
        break;
        
      case 'Friday':
          Day='Viernes';
        break;

      case 'Saturday':
          Day='Sábado';
        break;
        
      case 'Sunday':
         Day='Domingo';
        break;
    }
    return Day;
  }
}
