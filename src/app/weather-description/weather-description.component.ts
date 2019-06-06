import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { IWeatherData, IWeather, IForecast } from '../../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-description',
  templateUrl: './weather-description.component.html',
  styleUrls: ['./weather-description.component.scss']
})
export class WeatherDescriptionComponent implements OnInit {
  public weatherData: IWeatherData;
  public forecastData: IForecast;
  private subscriptions: Subscription[] = [];
  @Input() public weatherDatazip: IWeatherData;
  @Input() public forcastDatazip: IForecast;

  constructor(  ) { }

  ngOnInit() {
    

  }



 
}
