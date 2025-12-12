import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CTAFeature {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-cta-japan-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-japan-travel.html',
  styleUrls: ['./cta-japan-travel.scss'],
})
export class CtaJapanTravel {
  features: CTAFeature[] = [
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
  ];
}
