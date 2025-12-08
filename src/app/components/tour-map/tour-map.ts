import { Component, Input, AfterViewInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as L from 'leaflet';

interface MapCity {
  name: string;
  lat: number;
  lng: number;
  nights?: number;
  day?: number;
}

@Component({
  selector: 'app-tour-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tour-map.html',
  styleUrls: ['./tour-map.scss']
})
export class TourMap implements AfterViewInit, OnDestroy {
  @ViewChild('map', { static: false }) mapContainer!: ElementRef;

  @Input() cities: MapCity[] = [
    { name: 'Tokyo', lat: 35.68, lng: 139.77, nights: 3, day: 1 },
    { name: 'Hakone', lat: 35.2325, lng: 139.1070, nights: 1, day: 4 },
    { name: 'Kyoto', lat: 35.0116, lng: 135.7681, nights: 3, day: 5 },
    { name: 'Osaka', lat: 34.6937, lng: 135.5023, nights: 2, day: 8 },
    { name: 'Hiroshima', lat: 34.3853, lng: 132.4553, nights: 1, day: 10 },
    { name: 'Osaka', lat: 34.6937, lng: 135.5023, nights: 2, day: 8 },
  ];

  @Input() zoomLevel: number = 6;
  @Input() lineColor: string = '#4a5fa8';
  @Input() markerColor: string = '#dc2626';

  private map!: L.Map;
  private markers: L.Marker[] = [];
  private polyline?: L.Polyline;

  ngAfterViewInit(): void {
    this.initMap();
    this.addRoute();
    this.addMarkers();
  }

  ngOnDestroy(): void {
    if (this.map) {
      this.map.remove();
    }
  }

  private initMap(): void {
    // Centro del Giappone
    const japanCenter: L.LatLngExpression = [36.2048, 138.2529];

    this.map = L.map(this.mapContainer.nativeElement, {
      center: japanCenter,
      zoom: this.zoomLevel,
      zoomControl: true,
      scrollWheelZoom: true,
      dragging: true,
      touchZoom: true,
      doubleClickZoom: true
    });

    // Tile layer - Stile chiaro e pulito
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      maxZoom: 19
    }).addTo(this.map);

    // Fix per icone Leaflet
    this.fixLeafletIcons();
  }

  private fixLeafletIcons(): void {
    // Fix per il problema delle icone di default di Leaflet
    const iconRetinaUrl = 'assets/marker-icon-2x.png';
    const iconUrl = 'assets/marker-icon.png';
    const shadowUrl = 'assets/marker-shadow.png';
    
    const iconDefault = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    
    L.Marker.prototype.options.icon = iconDefault;
  }

  private addRoute(): void {
    if (this.cities.length < 2) return;

    const routeCoordinates: L.LatLngExpression[] = this.cities.map(city => [city.lat, city.lng]);

    this.polyline = L.polyline(routeCoordinates, {
      color: this.lineColor,
      weight: 3,
      opacity: 0.8,
      smoothFactor: 1
    }).addTo(this.map);

    // Fit map to show all route
    this.map.fitBounds(this.polyline.getBounds(), {
      padding: [50, 50]
    });
  }

  private addMarkers(): void {
    this.cities.forEach((city, index) => {
      // Custom icon con numero del giorno
      const dayIcon = this.createDayIcon(city.day || index + 1);

      const marker = L.marker([city.lat, city.lng], {
        icon: dayIcon
      }).addTo(this.map);

      // Popup con info
      const popupContent = this.createPopupContent(city);
      marker.bindPopup(popupContent);

      // Tooltip permanente con nome città
      marker.bindTooltip(city.name, {
        permanent: true,
        direction: 'top',
        className: 'city-label',
        offset: [5, -10]
      });

      this.markers.push(marker);
    });
  }

  private createDayIcon(day: number): L.DivIcon {
    return L.divIcon({
      className: 'custom-day-marker',
      html: `
        <div class="marker-pin">
        </div>
      `,
      iconSize: [20, 22],
      iconAnchor: [5, 22],
      popupAnchor: [0, -52]
    });
  }

  private createPopupContent(city: MapCity): string {
    let daysText = '';
    if (city.day && city.nights) {
      const endDay = city.day + city.nights - 1;
      daysText = `<div class="popup-days">Giorni ${city.day}-${endDay}</div>`;
    }

    return `
      <div class="popup-content">
        <div class="popup-city">${city.name.toUpperCase()}</div>
        ${daysText}
        ${city.nights ? `<div class="popup-nights">${city.nights} ${city.nights === 1 ? 'notte' : 'notti'}</div>` : ''}
      </div>
    `;
  }
}