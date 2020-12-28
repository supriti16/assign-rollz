import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  @ViewChild('map') mapElement;
  map: google.maps.Map;
  lat:number=28.7041;
  long:number=77.1025;
  title = 'assignment';
  ngOnInit(): void {
    
 }
 ngAfterViewInit(){
  const mapProperties = {
    center: new google.maps.LatLng(28.7041, 77.1025),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
 }
}
