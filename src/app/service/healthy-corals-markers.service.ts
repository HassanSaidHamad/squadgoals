import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class HealthyCoralsMarkersService {
  healthyCorals: string = '/assets/data/paje-healthy-corals.geojson';


  constructor(private httpClient: HttpClient) { }

  public makeHealthyCoralMarkers(map: L.Map): void {
    this.httpClient.get(this.healthyCorals).subscribe(
      (response: any) => {
        var healhtyCoralIcon = L.icon({
          iconUrl: 'assets/1234.png',

          iconSize: [50, 70], // size of the icon
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        for (const unHealthyCoral of response.features) {
          const longitude = unHealthyCoral.geometry.coordinates[0];
          const latitude = unHealthyCoral.geometry.coordinates[1];
          const unHealthyCoralMarker = L.marker([latitude, longitude], { icon: healhtyCoralIcon });
          unHealthyCoralMarker.bindPopup("<b>Area: </b> Paje <br> <b>Condition: </b> Healthy Coral");

          unHealthyCoralMarker.addTo(map);
        }

      }
    );
  }

}
