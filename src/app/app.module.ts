import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeatherBlogComponent } from './weather-blog/weather-blog.component';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';



@NgModule({
  declarations: [
    AppComponent,
    WeatherBlogComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
