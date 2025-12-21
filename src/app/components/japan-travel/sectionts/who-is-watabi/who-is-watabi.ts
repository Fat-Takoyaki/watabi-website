import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface WatabiFeature {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

@Component({
  selector: 'app-who-is-watabi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './who-is-watabi.html',
  styleUrls: ['./who-is-watabi.scss'],
})
export class WhoIsWatabi {
  @Input() showHeader: boolean = true;
  
  features: WatabiFeature[] = [
    {
      icon: 'pi-calendar',
      title: 'Dal 2010 in Giappone',
      description: 'Oltre 14 anni di esperienza sul territorio giapponese',
      gradient: 'from-red-watabi to-red-dark',
    },
    {
      icon: 'pi-building',
      title: 'Uffici a Tokyo, Kyoto e Osaka',
      description: 'Presenza diretta nelle principali città del Giappone',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: 'pi-verified',
      title: '5000+ Viaggiatori Soddisfatti',
      description:
        'Migliaia di italiani hanno scelto Watabi per il loro viaggio',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: 'pi-flag',
      title: 'Team Italiano e Giapponese',
      description: 'Il meglio di entrambe le culture per servirti al meglio',
      gradient: 'from-purple-500 to-purple-700',
    },
  ];

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/tour-operator-giappone']);
  }
}
