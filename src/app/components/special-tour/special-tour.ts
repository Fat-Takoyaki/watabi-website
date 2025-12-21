import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Special {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  icon: string;
  features: string[];
  badge: string;
  image: string;
}

@Component({
  selector: 'app-special-tour',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './special-tour.html',
  styleUrls: ['./special-tour.scss'],
})
export class SpecialTour {
  constructor(private router: Router) {}

  navigateToType(route: string) {
    this.router.navigate([route]);
  }

  specialTour: Special = {
    id: 'hanami-2026',
    title: 'Tour Hanami 2026',
    subtitle: 'Vivi la magia della fioritura dei ciliegi',
    description:
      "Un viaggio esclusivo durante il periodo più magico dell'anno in Giappone. Ammira i sakura in fiore nei luoghi più iconici, partecipa a picnic sotto i ciliegi e vivi la tradizione dell'hanami con esperienze autentiche.",
    route: '/hanami-tour',
    icon: 'pi-sun',
    features: [
      'Previsioni fioritura ottimizzate',
      'Parchi e giardini esclusivi',
      'Picnic hanami tradizionali',
      'Guida esperta italiana',
    ],
    badge: 'Primavera 2026',
    image:
      'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=80', // Sakura in Kyoto
  };
}
