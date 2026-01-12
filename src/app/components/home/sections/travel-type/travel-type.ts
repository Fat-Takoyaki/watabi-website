import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContentService } from '../../../../services/content.services';

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

interface SpecialTour {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  route: string;
  icon: string;
  features: string[];
  badge: string;
  badgeSecondary: string;
  dates: string;
  image: string;
}

interface TravelTypesContent {
  header: {
    title: string;
    subtitle: string;
  };
  travelTypes: TravelType[];
  specialTour: SpecialTour;
  footer: {
    note: string;
    noteColor?: string;
    ctaText: string;
    ctaLink: string;
  };
}

@Component({
  selector: 'app-travel-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './travel-type.html',
  styleUrls: ['./travel-type.scss'],
})
export class TravelTypes implements OnInit {
  content: TravelTypesContent | null = null;

  constructor(private router: Router, private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadContent();
  }

  private loadContent(): void {
    this.contentService
      .loadContent<TravelTypesContent>('travel-types')
      .subscribe({
        next: (data) => {
          if (data) {
            this.content = data;
          } else {
            this.content = this.getEmergencyContent();
          }
        },
        error: (err) => {
          console.error('Errore caricamento Travel Types:', err);
          this.content = this.getEmergencyContent();
        },
      });
  }

  navigateToType(route: string): void {
    this.router.navigate([route]);
  }

  private getEmergencyContent(): TravelTypesContent {
    return {
      header: {
        title:
          'Qual è il tuo <span class="text-red-watabi">tipo di viaggio</span>?',
        subtitle:
          "Qualunque sia il tuo stile di viaggio, c'è un Giappone che ti aspetta",
      },
      travelTypes: [
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
          features: [
            'Gruppi ristretti',
            'Guide italiane',
            'Partenze garantite',
          ],
          gradient: 'from-jade to-jade-dark',
        },
      ],
      specialTour: {
        id: 'hanami-2026',
        title: 'Tour Hanami 2026',
        subtitle: 'Vivi la magia della fioritura dei ciliegi',
        description:
          "Un viaggio esclusivo durante il periodo più magico dell'anno in Giappone. Ammira i sakura in fiore nei luoghi più iconici, partecipa a picnic sotto i ciliegi e vivi la tradizione dell'hanami con esperienze autentiche.",
        route: '/hanami-tour',
        icon: 'pi-sun',
        features: [
          'Parchi e giardini esclusivi',
          'Picnic hanami tradizionali',
          'Guida esperta italiana',
        ],
        badge: 'Primavera 2026',
        badgeSecondary: 'Posti Limitati',
        dates: 'Partenze: Marzo - Aprile 2026',
        image:
          'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&q=80',
      },
      footer: {
        note: 'Non sai quale scegliere? Ogni viaggio Watabi è completamente personalizzabile.',
        noteColor: 'text-white',
        ctaText: 'Scopri di più su i Viaggi su Misura',
        ctaLink: '/contact',
      },
    };
  }
}
