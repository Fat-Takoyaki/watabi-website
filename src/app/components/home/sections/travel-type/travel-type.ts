import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface TravelType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  route: string;
  icon: string;
  features: string[];
  gradient: string;
}

@Component({
  selector: 'app-travel-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-type.html',
  styleUrls: ['./travel-type.scss'],
})
export class TravelTypes {
  travelTypes: TravelType[] = [
    {
      id: 'custom',
      title: 'Viaggi su Misura',
      subtitle: 'La tua avventura, le tue regole',
      description:
        "Costruiamo insieme l'itinerario perfetto per te, che tu viaggi da solo, in coppia o in famiglia. Massima libertà e flessibilità.",
      image:
        'https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=800&q=80',
      route: '/custom-travel',
      icon: 'pi-user',
      features: [
        '100% Personalizzabile',
        'Adatto alle famiglie',
        'Partenze libere',
      ],
      gradient: 'from-red-watabi to-red-dark',
    },
    {
      id: 'honeymoon',
      title: 'Viaggi di Nozze',
      subtitle: 'Il vostro sogno romantico',
      description:
        'Esperienze esclusive e momenti indimenticabili per celebrare il vostro amore in uno dei paesi più affascinanti al mondo.',
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
      route: '/honeymoon',
      icon: 'pi-heart',
      features: [
        'Esperienze romantiche',
        'Ryokan di lusso',
        'Itinerari esclusivi',
      ],
      gradient: 'from-sakura to-pink-watabi',
    },
    {
      id: 'group',
      title: 'Viaggi di Gruppo',
      subtitle: 'Scopri il Giappone con altri viaggiatori',
      description:
        "Tour guidati con partenze garantite, per vivere il Giappone in compagnia con l'esperienza di guide esperte.",
      image:
        'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
      route: '/group-tours',
      icon: 'pi-users',
      features: ['Gruppi ristretti', 'Guide italiane', 'Partenze garantite'],
      gradient: 'from-jade to-jade-dark',
    },
  ];

  constructor(private router: Router) {}

  navigateToType(route: string) {
    this.router.navigate([route]);
  }
}
