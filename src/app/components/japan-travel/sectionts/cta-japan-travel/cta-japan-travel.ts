import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../../services/content.services';

interface CTAFeature {
  icon: string;
  title: string;
  description: string;
}

type ButtonVariant = 'primary' | 'secondary';

interface CTAButton {
  icon: string;
  text: string;
  href: string;
  variant: ButtonVariant;
}

interface CtaJapanTravelContent {
  header: {
    title: string; // può contenere HTML
    subtitle: string; // può contenere HTML
  };
  features: CTAFeature[];
  buttons: CTAButton[];
}

@Component({
  selector: 'app-cta-japan-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-japan-travel.html',
  styleUrls: ['./cta-japan-travel.scss'],
})
export class CtaJapanTravel implements OnInit {
  content: CtaJapanTravelContent | null = null;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadContent();
  }

  private loadContent(): void {
    this.contentService
      .loadContent<CtaJapanTravelContent>('cta-japan-travel')
      .subscribe({
        next: (data) => {
          this.content = data ?? this.getEmergencyContent();
        },
        error: () => {
          this.content = this.getEmergencyContent();
        },
      });
  }

  private getEmergencyContent(): CtaJapanTravelContent {
    return {
      header: {
        title: 'Pronto a <span class="text-red-300">Partire</span>?',
        subtitle:
          'Il tuo viaggio dei sogni in Giappone ti aspetta. Lascia che Watabi trasformi il tuo sogno in realtà.',
      },
      features: [
        {
          icon: 'pi-users',
          title: 'Guide Esperte',
          description: 'Parte della famiglia Watabi',
        },
        {
          icon: 'pi-heart',
          title: 'Tour Personalizzati',
          description: 'Viaggi su misura per te',
        },
        {
          icon: 'pi-shield',
          title: 'Assistenza 24/7',
          description: 'Sempre al tuo fianco',
        },
        {
          icon: 'pi-star',
          title: 'Esperienza Unica',
          description: 'Dal 2015 specialisti del Giappone',
        },
      ],
      buttons: [
        {
          icon: 'pi pi-send'.replace('pi ', ''), // evita duplicazione se ti capita di mettere già "pi-send"
          text: 'Richiedi un Preventivo',
          href: '/',
          variant: 'primary',
        },
        {
          icon: 'pi pi-users'.replace('pi ', ''),
          text: 'Scopri i nostri Tour',
          href: '/tour-di-gruppo',
          variant: 'secondary',
        },
      ],
    };
  }
}
