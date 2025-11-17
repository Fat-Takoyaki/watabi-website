import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface TravelType {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: {
    icon: string;
    title: string;
    description: string;
  }[];
  image: string;
  color: 'pink' | 'purple';
  ctaText: string;
  route: string;
}

@Component({
  selector: 'app-travel-type',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-type.html',
  styleUrls: ['./travel-type.scss'],
})
export class Traveltype {
  categories: TravelType[] = [
    {
      id: 'individual',
      title: 'Viaggi Individuali',
      subtitle: 'Su misura',
      description:
        'Ami stare in gruppo e conoscere persone nuove o preferisci viaggiare libero e indipendente?',
      features: [
        {
          icon: 'pi-pencil',
          title: 'Su Misura',
          description:
            'Locanda tradizionale o hotel moderno? Escursioni nella natura o itinerari urbani ?',
        },
        {
          icon: 'pi-cog',
          title: 'Preparazione del viaggio',
          description:
            'Un team di esperti vi aiuterà a programmare al meglio la vostra vacanza.',
        },
        {
          icon: 'pi-mobile',
          title: 'Programma giornaliero su Smartphone',
          description:
            'Il nostro innovativo programma su smartphone vi guiderà nelle vostre giornate di vacanza.',
        },
        {
          icon: 'pi-user',
          title: 'Accoglienza sempre inclusa',
          description:
            'Al vostro arrivo troverete sempre un nostro assistente.',
        },
      ],
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80',
      color: 'pink',
      ctaText: 'Vedi tutti i Tour',
      route: '/individual-tours',
    },
    {
      id: 'group',
      title: 'Tour di Gruppo',
      subtitle: 'Piccoli Gruppi',
      description:
        'Locanda tradizionale o hotel moderno? Escursioni nella natura o itinerari urbani?',
      features: [
        {
          icon: 'pi-users',
          title: 'Piccoli Gruppi',
          description:
            'Partenze da massimo 18/20 viaggiatori per ogni gruppo, per viaggiare in maniera confortevole.',
        },
        {
          icon: 'pi-send',
          title: 'Volo sempre incluso',
          description:
            'Il volo da Milano Malpensa o da Roma Fiumicino, con bagaglio in stiva, è sempre incluso.',
        },
        {
          icon: 'pi-star',
          title: 'Tour leader esperti',
          description:
            'I nostri accompagnatori parlano giapponese e conoscono la destinazione.',
        },
        {
          icon: 'pi-sun',
          title: 'Attività tradizionali',
          description: 'Vivi esperienze tipiche giapponesi.',
        },
      ],
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80',
      color: 'purple',
      ctaText: 'Vedi tutti i Tour',
      route: '/group-tours',
    },
  ];

  constructor(private router: Router) {}

  viewAllTours(route: string) {
    this.router.navigate([route]);
  }

  getGradientClasses(color: string): string {
    if (color === 'pink') {
      return 'from-pink-600 to-pink-800';
    }
    return 'from-purple-600 to-purple-800';
  }

  getAccentColor(color: string): string {
    return color === 'pink' ? 'text-pink-600' : 'text-purple-600';
  }

  getBgAccentColor(color: string): string {
    return color === 'pink' ? 'bg-pink-50' : 'bg-purple-50';
  }
}
