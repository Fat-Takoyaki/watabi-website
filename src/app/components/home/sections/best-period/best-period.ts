import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ContentService } from '../../../../services/content.services';

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

interface InfoCard {
  id: string;
  icon: string;
  iconColor: string;
  title: string;
  bgColor: string;
  borderColor: string;
  description: string;
}

interface BestPeriodContent {
  header: {
    title: string;
    description: string;
  };
  seasons: Season[];
  infoCards: InfoCard[];
  cta: {
    title: string;
    description: string;
    primaryButton: {
      text: string;
      link: string;
    };
    secondaryButton: {
      text: string;
      link: string;
    };
  };
}

@Component({
  selector: 'app-best-period',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './best-period.html',
  styleUrl: './best-period.scss',
})
export class BestPeriod implements OnInit {
  content: BestPeriodContent | null = null;

  constructor(private router: Router, private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadContent();
  }

  private loadContent(): void {
    this.contentService
      .loadContent<BestPeriodContent>('best-period')
      .subscribe({
        next: (data) => {
          if (data) {
            this.content = data;
          } else {
            this.content = this.getEmergencyContent();
          }
        },
        error: (err) => {
          console.error('Errore caricamento Best Period:', err);
          this.content = this.getEmergencyContent();
        },
      });
  }

  navigateToGuide(): void {
    if (this.content?.cta.primaryButton.link) {
      this.router.navigate([this.content.cta.primaryButton.link]);
    } else {
      this.router.navigate(['/quando-andare-giappone']);
    }
  }

  navigateToContact(): void {
    if (this.content?.cta.secondaryButton.link) {
      this.router.navigate([this.content.cta.secondaryButton.link]);
    } else {
      this.router.navigate(['/contact']);
    }
  }

  private getEmergencyContent(): BestPeriodContent {
    return {
      header: {
        title:
          'Qual è il <span class="text-red-watabi">periodo migliore</span> per andare in Giappone?',
        description:
          "Il Giappone è bellissimo tutto l'anno, ma ogni stagione offre esperienze uniche. Scegli il periodo che rispecchia meglio ciò che vuoi vivere durante il tuo viaggio.",
      },
      seasons: [
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
          highlights: [
            'Koyo (foliage)',
            'Clima ideale',
            'Raccolto e gastronomia',
          ],
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
          gradient: 'from-zen-slate to-ocean',
          image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
          bestFor: ['Sci', 'Onsen', 'Budget'],
        },
      ],
      infoCards: [
        {
          id: 'peak-season',
          icon: 'pi-heart',
          iconColor: 'text-pink-600',
          title: 'Fioriture',
          bgColor: 'from-pink-50 to-pink-100/50',
          borderColor: 'border-pink-200',
          description:
            "<strong>Marzo-Aprile</strong> (Hanami) e <strong>Novembre</strong> (Koyo) regalano i panorami più spettacolari dell'anno. Ideali per chi vuole vivere il Giappone nella sua massima bellezza.",
        },
        {
          id: 'golden-week',
          icon: 'pi-calendar',
          iconColor: 'text-yellow-600',
          title: 'Golden Week',
          bgColor: 'from-yellow-50 to-yellow-100/50',
          borderColor: 'border-yellow-200',
          description:
            "Fine aprile / inizio maggio è uno dei momenti più vivaci dell'anno: festival, eventi, atmosfera energica e città in festa. Perfetto per chi vuole un Giappone pieno di vita.",
        },
        {
          id: 'low-season',
          icon: 'pi-check-circle',
          iconColor: 'text-green-600',
          title: 'Risparmia',
          bgColor: 'from-green-50 to-green-100/50',
          borderColor: 'border-green-200',
          description:
            '<strong>Gennaio-Febbraio</strong> e <strong>Giugno-Luglio</strong> offrono un Giappone più tranquillo, con ottime occasioni di viaggio e la possibilità di esplorare con calma.',
        },
      ],
      cta: {
        title: 'Hai bisogno di aiuto per scegliere?',
        description:
          'Ogni periodo ha il suo fascino. Parlaci delle tue aspettative e ti aiuteremo a scegliere il momento perfetto per il tuo viaggio in Giappone.',
        primaryButton: {
          text: 'Guida completa stagioni',
          link: '/quando-andare-giappone',
        },
        secondaryButton: {
          text: 'Chiedi una consulenza',
          link: '/contact',
        },
      },
    };
  }
}
