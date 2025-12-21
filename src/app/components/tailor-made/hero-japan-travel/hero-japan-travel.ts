import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-japan-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-japan-travel.html',
  styleUrls: ['./hero-japan-travel.scss'],
})
export class HeroJapanTravel {
  heroImage =
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&q=80';

  stats = [
    { value: '18+', label: 'Itinerari' },
    { value: '15+', label: 'Anni Esperienza' },
    { value: '5000+', label: 'Viaggiatori' },
  ];

  constructor(private router: Router) {}

  scrollToTours() {
    const element = document.getElementById('tours-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  openContact() {
    this.router.navigate(['/contatti']);
  }
}
