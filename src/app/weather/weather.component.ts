import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  private currentWeatherValue: Weather;
  private pastWeatherValue: Weather[] = [];
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }
  searchfnc(searchCityValue: string){

    // this.weatherService.getWheatherData(searchCityValue)
    // .subscribe(
    //   (data:Weather) => {
    //     this.currentWeatherValue = data;
    //     this.currentWeatherValue.searchTime= (new Date()).toTimeString();
    //     this.pastWeatherValue.push(this.currentWeatherValue);
    //   }
    // );
    this.currentWeatherValue= this.weatherService.getWheatherData(searchCityValue);
    this.currentWeatherValue.searchTime= (new Date()).toTimeString();
    this.pastWeatherValue.push(this.currentWeatherValue);
  }
}
