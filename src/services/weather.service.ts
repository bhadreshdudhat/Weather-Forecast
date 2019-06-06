import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { constants } from 'src/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(private http: HttpClient) { }

  public getWeather(zip:string) {
       return this.http.get(environment.weatherUrl+'?zip='+zip+',us&appid='+ constants.appid);
    }

    public getWeatherForcast(zip:string) {
      return this.http.get(environment.forecastUrl+'?zip='+zip+'&appid='+ constants.appid);
       //to allow CORS : cors-anywhere.herokuapp.com/http://api.
   }
}
