import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ThemeService } from './core/services/theme.service';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: Observable<boolean>;
  zipcode:string='77058';
  public weatherData;
  public forecastData;


  constructor(private themeService: ThemeService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    this.weatherService.getWeather(this.zipcode).subscribe(res => {console.log('wres', res);this.weatherData=res; });
    this.weatherService.getWeatherForcast(this.zipcode).subscribe(res => {console.log('fres', res);this.forecastData=res; });
  }

  onSubmitZip(zipcd){
     this.zipcode=zipcd.zipcd;
     this.weatherService.getWeather(this.zipcode).subscribe(res => {console.log('wres', res);this.weatherData=res; });
     this.weatherService.getWeatherForcast(this.zipcode).subscribe(res => {console.log('fres', res);this.forecastData=res; });
    //call to server will happen only on subscribe
  }
}