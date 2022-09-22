import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class PolygonService {
  polygon: string = '/assets/data/paje-polygon.geojson';


  constructor(private httpClient: HttpClient) { }

  public makePolygon(map: L.Map): void {
    var polygon = L.polygon([
      [39.536735980279595,
        -6.258830281724244],
      [39.53980442747757,
        -6.257923765530771],
      [39.54061981904067,
        -6.259779455817514]
    ]).addTo(map);
    polygon.bindPopup("I am a polygon.");
  }

}
