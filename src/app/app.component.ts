import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Handyman4HireGalway';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  //   ngAfterViewInit() {
  //     // this.loadGoogleMaps().then(() => {
  //     if (isPlatformBrowser(this.platformId)) {
  //       this.initMap();
  //     }
  //     // });
  //   }
  //   initMap(): void {
  //     const mapOptions = {
  //       center: { lat: 53.3283, lng: -9.1358 }, // Coordinates for Moycullen
  //       zoom: 11, // Adjust the zoom level as needed to view the wider area
  //     };

  //     const map = new google.maps.Map(document.getElementById('map'), mapOptions);

  //     // Specify the properties of the circle
  //     const circleOptions = {
  //       strokeColor: '#FF0000', // Color of the circle's border
  //       strokeOpacity: 0.8, // Opacity of the circle's border
  //       strokeWeight: 2, // Thickness of the circle's border
  //       fillColor: '#FF0000', // Fill color of the circle
  //       fillOpacity: 0.35, // Opacity of the fill color
  //       map: map, // Map on which the circle is to be displayed
  //       center: mapOptions.center, // Coordinates for Moycullen
  //       radius: 9000, // Radius of the circle in meters
  //     };

  //     // Create the circle and add it to the map
  //     const circle = new google.maps.Circle(circleOptions);
  //   }
}
