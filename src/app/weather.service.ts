import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WeatherService {
  weather;
  constructor(private _http: Http) { }

  getWeather(city, callback) {
    this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d0946cbe22e020252cce7f5c56266a67').subscribe(
      (response) => {
        this.weather = response.json();
        callback(this.weather);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
