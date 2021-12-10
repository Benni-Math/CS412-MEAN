import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
// @ts-ignore
import * as io from 'socket.io-client';
let loc = []

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PS6';
}

export class formService {
  private url = 'http://localhost:3000';
  private socket: any;

  public sendWeather(loc: any) {
    this.socket.emit('weather-loc', loc);
  }

  // attempting to connect with server url
  constructor() {
    if (!this.socket) {
      this.socket = io(this.url);
    }
  }
}
