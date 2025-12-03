import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Strength {
  icon: string;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-watabi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './watabi.html',
  styleUrl: './watabi.scss',
})
export class Watabi {
  strengths: Strength[] = [
    {
      icon: 'pi-map-marker',
      title: 'Sede in Giappone',
      description:
        'Il nostro team vive e lavora a Tokyo, con una conoscenza diretta e aggiornata del territorio',
      color: 'from-red-watabi to-red-dark',
    },
    {
      icon: 'pi-users',
      title: 'Assistenza in Italiano',
      description:
        'Guide e supporto nella tua lingua, per viaggiare senza barriere linguistiche',
      color: 'from-bamboo to-bamboo-light',
    },
    {
      icon: 'pi-heart',
      title: 'Esperienza Autentica',
      description:
        'Itinerari che vanno oltre i luoghi turistici, per scoprire il vero spirito del Giappone',
      color: 'from-sakura to-pink-watabi',
    },
    {
      icon: 'pi-sliders-h',
      title: 'Massima Flessibilità',
      description:
        'Ogni viaggio è costruito su misura, modificabile in ogni momento secondo le tue esigenze',
      color: 'from-jade to-jade-dark',
    },
  ];

  constructor(private router: Router) {}

  navigateToAbout() {
    this.router.navigate(['/about']);
  }
}
