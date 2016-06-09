import {Component,OnInit} from 'angular2/core';
import {WeatherItemComponent} from './weather-item.component';
import {WeatherItem} from './weather-item'
import {WEATHERITEMS} from './weather.data';

@Component({
    selector: 'weather-list',
    template: `
    <section class="weather-list">
        <weather-item *ngFor= "#weatheritem of weatheritems" [item]=weatheritem > </weather-item>
    </section>    
                `,
    directives: [WeatherItemComponent]
})
export class WeatherListComponent implements OnInit{
    weatheritems : WeatherItem[];
    
    ngOnInit():any{
        this.weatheritems = WEATHERITEMS;
    }
}