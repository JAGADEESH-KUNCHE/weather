import { Injectable } from '@angular/core';
import { Weather } from './weather';
import { WEATHER } from './weather-data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class WeatherService {

  private weatherData: Weather[] = WEATHER;
  constructor(/*private http: HttpClient*/) {}

  getWheatherData(cityName: string): Weather/*Observable<Weather>*/{

    // return this.http.get<Weather>('http://localhost:8080/weather/get?cityName'+cityName);
    for(var i=0; i<this.weatherData.length; i++){
      if(this.weatherData[i].cityName == cityName){
        return this.weatherData[i];
      }
    }
  }
}
