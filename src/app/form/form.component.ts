import { Component, OnInit } from '@angular/core';
import {weather} from '../data/weather';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  weather: weather;
  selectedWeather: weather;
  fubar: any;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedWeather(weather: weather): void {
    this.selectedWeather = weather;
    console.log(`${weather.name}`);
  }

}
