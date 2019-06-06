import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ThemeService } from './core/services/theme.service';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector:'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  isDarkTheme: Observable<boolean>;
  zipcode:string='77058';
  public weatherData;
  public forecastData;
  private subscriptions: Subscription[] = [];


  constructor(private themeService: ThemeService, private weatherService: WeatherService) { }

  ngOnInit() {
    this.isDarkTheme = this.themeService.isDarkTheme;
    const sub1 = this.weatherService.getWeather(this.zipcode).subscribe(res => {console.log('wres', res);this.weatherData=res; });
    const sub2 = this.weatherService.getWeatherForcast(this.zipcode).subscribe(res => {console.log('fres', res);this.forecastData=res; });
    this.subscriptions.push(sub1); this.subscriptions.push(sub2);

  }

  onSubmitZip(zipcd){
     this.zipcode=zipcd.zipcd;
     const sub1 = this.weatherService.getWeather(this.zipcode).subscribe(res => {console.log('wres', res);this.weatherData=res; });
     const sub2 = this.weatherService.getWeatherForcast(this.zipcode).subscribe(res => {console.log('fres', res);this.forecastData=res; });
     this.subscriptions.push(sub1); this.subscriptions.push(sub2);
    //call to server will happen only on subscribe
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }
}