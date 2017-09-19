import { WeatherService } from '../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
  styleUrls: ['./dc.component.css']
})
export class DcComponent implements OnInit {
  avgWeather;
  minWeather;
  maxWeather;
  humidity;
  status;
  city = 'Washington,Dc';
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
