import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Season {
  id: string;
  name: string;
  months: string;
  temperature: string;
  description: string;
  highlights: string[];
  pros: string[];
  cons: string[];
  gradient: string;
  image: string;
  bestFor: string[];
}

@Component({
  selector: 'app-best-period',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-period.html',
  styleUrl: './best-period.scss',
})
export class BestPeriod {
  seasons: Season[] = [
    {
      id: 'spring',
      name: 'Primavera',
      months: 'Marzo - Maggio',
      temperature: '10°C - 20°C',
      description:
        'La stagione più iconica del Giappone, con la fioritura dei ciliegi (Hanami) che trasforma il paese in un mare di petali rosa.',
      highlights: [
        'Hanami (fioritura ciliegi)',
        'Festival primaverili',
        'Clima mite',
      ],
      pros: ['Temperature ideali', 'Sakura in fiore', 'Atmosfera magica'],
      cons: ['Alta stagione', 'Prezzi più alti', 'Molto affollato'],
      gradient: 'from-sakura to-pink-watabi',
      image:
        'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80',
      bestFor: ['Fotografia', 'Romantici', 'Prima volta'],
    },
    {
      id: 'summer',
      name: 'Estate',
      months: 'Giugno - Agosto',
      temperature: '25°C - 35°C',
      description:
        "L'estate giapponese è calda e umida, ma offre festival tradizionali, fuochi d'artificio e la possibilità di scalare il Monte Fuji.",
      highlights: [
        'Matsuri estivi',
        'Scalata Monte Fuji',
        'Spiagge di Okinawa',
      ],
      pros: ['Festival vivaci', 'Montagne accessibili', 'Mare e spiagge'],
      cons: [
        'Molto caldo e umido',
        'Stagione delle piogge (giugno)',
        'Tifoni possibili',
      ],
      gradient: 'from-ocean-light to-ocean',
      image:
        'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
      bestFor: ['Festival', 'Trekking', 'Mare'],
    },
    {
      id: 'autumn',
      name: 'Autunno',
      months: 'Settembre - Novembre',
      temperature: '15°C - 25°C',
      description:
        'Il foliage autunnale (Koyo) tinge di rosso e oro i giardini e le montagne. Clima perfetto e meno affollato della primavera.',
      highlights: ['Koyo (foliage)', 'Clima ideale', 'Raccolto e gastronomia'],
      pros: ['Temperature perfette', 'Colori spettacolari', 'Meno turisti'],
      cons: ['Fine novembre molto freddo', 'Picco foliage variabile'],
      gradient: 'from-red-watabi to-torii-dark',
      image:
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&q=80',
      bestFor: ['Fotografia', 'Natura', 'Cibo'],
    },
    {
      id: 'winter',
      name: 'Inverno',
      months: 'Dicembre - Febbraio',
      temperature: '0°C - 10°C',
      description:
        'Inverno magico con neve sulle Alpi Giapponesi, onsen fumanti, illuminazioni natalizie e atmosfere intime nei templi.',
      highlights: ['Neve e sci', 'Onsen invernali', 'Capodanno giapponese'],
      pros: ['Bassa stagione', 'Prezzi convenienti', 'Onsen perfetti'],
      cons: ['Freddo intenso', 'Giorni più corti', 'Alcuni siti chiusi'],
      gradient: 'from-zen-gray to-ocean',
      image:
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
      bestFor: ['Sci', 'Onsen', 'Budget'],
    },
  ];

  constructor(private router: Router) {}

  navigateToGuide() {
    this.router.navigate(['/quando-andare-giappone']);
  }
}
