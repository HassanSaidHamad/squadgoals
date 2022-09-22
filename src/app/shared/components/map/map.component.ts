import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import * as L from 'leaflet';
import { HealthyCoralsMarkersService } from 'src/app/service/healthy-corals-markers.service';
import { UnhealthyCoralsMarkersService } from 'src/app/service/unhealthy-corals-markers.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  private map!: L.Map;
  private states!: any;

  constructor(
    private unhealthyCoralMarkersService: UnhealthyCoralsMarkersService,
    private healthyCoralsMarkersService: HealthyCoralsMarkersService,
  ) { }


  ngAfterViewInit(): void {
    this.initMap();
    this.unhealthyCoralMarkersService.makeUnHealthyCoralMarkers(this.map);
    // this.unhealthyCoralMarkersService.makeCoralBorderMarkers(this.map);
    this.healthyCoralsMarkersService.makeHealthyCoralMarkers(this.map);
    // this.polygonService.makePolygon(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [-6.14598439985, 39.2130160332],
      zoom: 10
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    // show circle
    var circle = L.circle([-6.258790311486889, 39.53752991416994], {
      color: 'black',
      fillColor: '#0000FF',
      fillOpacity: 0.5,
      radius: 30
    }).addTo(this.map);
    circle.bindPopup("<b>Area:</b> Chakungu & Makecheni <br> <b>Status: </b> Protected Area");


    // show circle
    var circle1 = L.circle([-6.257323920062988, 39.537232227660944], {
      color: 'black',
      fillColor: '#0000FF',
      fillOpacity: 0.5,
      radius: 30
    }).addTo(this.map);
    circle1.bindPopup("<b>Area:</b> Mwamba Wa Wanawake <br> <b>Status: </b> Protected Area");


    // show circle
    var circle2 = L.circle([-6.257057235779362, 39.53887369089722], {
      color: 'black',
      fillColor: '#0000FF',
      fillOpacity: 0.5,
      radius: 30
    }).addTo(this.map);
    circle2.bindPopup("<b>Status: </b> Protected Area");


    // // Adding a polygon is as easy:
    // var polygon = L.polyline([
    //   [-6.2623602309680235, 39.538393589042656],
    //   [-6.259928727540434, 39.53983127740621],
    //   // [-6.259136952958568, 39.53865916289637]
    // ]).addTo(this.map);
    // polygon.bindPopup("I am a polygon.");

    // var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    //   denver = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    //   aurora = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    //   golden = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');

    var cities = L.layerGroup([]);

    var places = new Array();
    places.push("<img src='assets/123.png' width='20'/> Un-Healhty Corals");
    places.push("<img src='assets/1234.png' width='20'/> Healhty Corals");
    places.push("<img src='assets/circle.png' width='20'/> Protected Area");

    var lControl = L.control.layers(null!, null!);
    lControl.addTo(this.map);

    places.forEach(myFunction);

    function myFunction(item: string) {
      lControl.addOverlay(cities, '' + item + '');
    }

  }


}
