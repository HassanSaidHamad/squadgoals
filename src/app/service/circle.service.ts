import { Injectable } from '@angular/core';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class CircleService {
  circle: string = '/assets/data/paje-circle.geojson';

  constructor() { }
}
