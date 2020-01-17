import { Mappable } from "./mappable.interface";
export class Map {
  private map: google.maps.Map;

  constructor(divID: string) {
    this.map = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  public addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.map,
      position: { lat: mappable.location.lat, lng: mappable.location.lng }
    });
  }
}
