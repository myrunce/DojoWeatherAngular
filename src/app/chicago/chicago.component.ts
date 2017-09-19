import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  avgWeather;
  minWeather;
  maxWeather;
  humidity;
  status;
  city = 'Chicago,Il';
  constructor(private _weatherService: WeatherService) {
    this.getWeather();
  }

  ngOnInit() {
  }

  getWeather() {
    this._weatherService.getWeather(this.city, (info) => {
      this.avgWeather = Math.floor((info.main.temp * 1.8) - 459.67);
      this.minWeather = Math.floor((info.main.temp_min * 1.8) - 459.67);
      this.maxWeather = Math.floor((info.main.temp_max * 1.8) - 459.67);
      this.humidity = info.main.humidity;
      this.status = info.weather[0].description;
    });
  }
}
