import { Injectable } from 'angular2/core';
import {WEATHERITEMS} from './weather.data';

@Injectable()

export class WeatherService {
    getWeatherItems(){
        return WEATHERITEMS;
    }
}