import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Traveltype } from './travel-type/travel-type';

interface Tour {
  id: string;
  title: string;
  category: string;
  features: string[];
  dates?: string;
  departure?: string;
  priceOriginal?: number;
  priceDiscounted?: number;
  priceFrom?: number;
  hasItinerary: boolean;
  ribbon?: {
    text: string;
    color: 'pink' | 'purple' | 'blue' | 'red';
  };
  image: string;
  availableExtensions: string[]; 
}

@Component({
  selector: 'app-tours',
  standalone: true,
  imports: [CommonModule, Traveltype],
  templateUrl: './tours.html',
  styleUrls: ['./tours.scss'],
})
export class Tours {
  tours: Tour[] = [
    {
      id: 'yuki',
      title: 'Yuki',
      category: 'TOUR DI GRUPPO',
      features: ['Tour di Capodanno'],
      dates: 'Dal 24/12/25 al 04/01/26',
      departure: 'Volo da Milano Malpensa',
      priceOriginal: 4490,
      priceDiscounted: 4290,
      hasItinerary: true,
      ribbon: { text: 'PROMOZIONE', color: 'red' },
      image:
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
      availableExtensions: ['dubai', 'singapore'], 
    },
    {
      id: 'satsuki',
      title: 'Satsuki',
      category: 'TOUR DI GRUPPO',
      features: ['Notte in Ryokan'],
      dates: 'Dal 10/05/26 al 21/05/26',
      departure: 'Volo da Milano Malpensa (Diretto)',
      priceOriginal: 3990,
      priceDiscounted: 3590,
      hasItinerary: true,
      ribbon: { text: 'PROMOZIONE', color: 'red' },
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
      availableExtensions: ['okinawa', 'bali', 'thailandia'],
    },
    {
      id: 'maiko',
      title: 'Maiko',
      category: 'TOUR DI GRUPPO',
      features: ['Notte in Ryokan'],
      dates: 'Dal 21/05/26 al 02/06/26',
      departure: 'Volo da Milano Malpensa (Diretto)',
      priceOriginal: 3990,
      priceDiscounted: 3890,
      hasItinerary: true,
      ribbon: { text: 'ANTEPRIMA', color: 'purple' },
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      availableExtensions: ['okinawa', 'bali'],
    },
    {
      id: 'matcha',
      title: 'Matcha',
      category: 'TOUR DI GRUPPO',
      features: ['Ryokan e Monastero'],
      dates: 'Dal 27/06/26 al 10/07/26',
      departure: 'Volo da Roma Fiumicino',
      hasItinerary: false,
      ribbon: { text: 'ANTEPRIMA', color: 'purple' },
      image:
        'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
      availableExtensions: ['okinawa', 'bali'],
    },
    {
      id: 'azuki',
      title: 'Azuki',
      category: 'TOUR DI GRUPPO',
      features: ['Hiroshima e Ryokan'],
      dates: 'Dal 28/06/26 al 12/07/26',
      departure: 'Volo da Milano Malpensa (Diretto)',
      hasItinerary: false,
      ribbon: { text: 'ANTEPRIMA', color: 'purple' },
      image:
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&q=80',
      availableExtensions: ['okinawa', 'bali', 'singapore'],
    },
    {
      id: 'suiren',
      title: 'Suiren',
      category: 'TOUR DI GRUPPO',
      features: ['Monastero e Ryokan'],
      dates: 'Dal 12/07/26 al 26/07/26',
      departure: 'Volo da Milano Malpensa (Diretto)',
      hasItinerary: false,
      ribbon: { text: 'BEST SELLER', color: 'blue' },
      image:
        'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&q=80',
      availableExtensions: ['okinawa', 'bali'],
    },
    {
      id: 'famiglia',
      title: 'Giappone Famiglia',
      category: 'VIAGGIO SU MISURA',
      features: ['10 Notti', 'Volo Escluso'],
      priceFrom: 1890,
      hasItinerary: true,
      ribbon: { text: 'BEST SELLER', color: 'blue' },
      image:
        'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
      availableExtensions: ['okinawa', 'singapore', 'dubai'],
    },
    {
      id: 'classico',
      title: 'Giappone Classico',
      category: 'VIAGGIO SU MISURA',
      features: ['12 Notti', 'Volo Escluso'],
      priceFrom: 2290,
      hasItinerary: true,
      ribbon: { text: 'BEST SELLER', color: 'blue' },
      image:
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80',
      availableExtensions: [
        'maldive',
        'bali',
        'okinawa',
        'thailandia',
        'dubai',
        'singapore',
      ],
    },
    {
      id: 'fantastico',
      title: 'Giappone Fantastico',
      category: 'VIAGGIO SU MISURA',
      features: ['18 Notti', 'Volo Escluso'],
      priceFrom: 3390,
      hasItinerary: true,
      ribbon: { text: 'BEST SELLER', color: 'blue' },
      image:
        'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
      availableExtensions: [
        'maldive',
        'bali',
        'okinawa',
        'thailandia',
        'dubai',
        'singapore',
      ],
    },
  ];

  constructor(private router: Router) {}

  viewDetails(offerId: string) {
    this.router.navigate(['/tour', offerId]);
  }

  getRibbonClasses(color?: string): string {
    const baseClasses =
      'absolute top-4 right-4 px-3 py-1 text-xs font-bold rounded-full shadow-lg z-10';

    switch (color) {
      case 'pink':
        return `${baseClasses} bg-gradient-to-r from-sakura to-pink-watabi text-white`;
      case 'purple':
        return `${baseClasses} bg-gradient-to-r from-wisteria to-wisteria-dark text-white`;
      case 'blue':
        return `${baseClasses} bg-gradient-to-r from-ocean-light to-ocean text-white`;
      case 'red':
        return `${baseClasses} bg-gradient-to-r from-red-watabi to-red-dark text-white`;
      default:
        return `${baseClasses} bg-gradient-to-r from-zen-gray to-zen-dark text-white`;
    }
  }
}
