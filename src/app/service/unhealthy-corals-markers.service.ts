import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})
export class UnhealthyCoralsMarkersService {
  unHealthyCorals: string = '/assets/data/paje-unHealthy-corals.geojson';
  borderCircle: string = '/assets/data/paje-circle.geojson';

  constructor(
    private httpClient: HttpClient
  ) { }

  static scaledRadius(val: number, maxVal: number): number {
    return 40 * (val / maxVal);
  }

  public makeUnHealthyCoralMarkers(map: L.Map): void {
    this.httpClient.get(this.unHealthyCorals).subscribe(
      (response: any) => {
        var unHealhtyCoralIcon = L.icon({
          iconUrl: 'assets/123.png',
          // shadowUrl: 'assets/leaf-shadow.png',

          // iconSize: [38, 95], // size of the icon
          iconSize: [50, 70], // size of the icon
          // shadowSize: [50, 64], // size of the shadow
          iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
          shadowAnchor: [4, 62],  // the same for the shadow
          popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
        });

        for (const unHealthyCoral of response.features) {
          const longitude = unHealthyCoral.geometry.coordinates[0];
          const latitude = unHealthyCoral.geometry.coordinates[1];
          const unHealthyCoralMarker = L.marker([latitude, longitude], { icon: unHealhtyCoralIcon });
          // unHealthyCoralMarker.bindPopup("<b>This is a!</b> <br> I am a popup.");
          unHealthyCoralMarker.bindPopup("<b>Area: </b> Paje <br> <b>Condition: </b> Un-Healthy Coral ");

          unHealthyCoralMarker.addTo(map);
        }
      }
    );
  }

}
