import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Tour {
  id: string;
  title: string;
  subtitle: string;
  category: 'group' | 'individual' | 'honeymoon' | 'special';
  cities: string[];
  tags: string[];
  image: string;
  price: number;
  priceOriginal?: number;
  duration: string;
  features: string[];
  ribbon?: {
    text: string;
    color: 'pink' | 'purple' | 'gold' | 'red';
  };
}

@Component({
  selector: 'app-related-tours',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './related-tours.html',
  styleUrls: ['./related-tours.scss'],
})
export class RelatedTours implements OnInit {
  @Input() currentTourId!: string;
  @Input() currentCategory?: string;
  @Input() currentCities?: string[];
  @Input() currentTags?: string[];
  @Input() maxResults: number = 3;

  relatedTours: Tour[] = [];

  // Database mockato di tutti i tour disponibili
  private allTours: Tour[] = [
    {
      id: 'yuki',
      title: 'Yuki',
      subtitle: 'Tour di Capodanno',
      category: 'group',
      cities: ['Tokyo', 'Kyoto', 'Osaka'],
      tags: ['inverno', 'capodanno', 'tradizioni', 'ryokan'],
      image: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
      price: 4290,
      priceOriginal: 4490,
      duration: '12 giorni',
      features: ['Tour di Capodanno', 'Volo da Milano'],
      ribbon: { text: 'PROMOZIONE', color: 'red' },
    },
    {
      id: 'satsuki',
      title: 'Satsuki',
      subtitle: 'Fioritura dei Ciliegi',
      category: 'group',
      cities: ['Tokyo', 'Kyoto', 'Nara'],
      tags: ['primavera', 'sakura', 'fioritura', 'ryokan'],
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80',
      price: 3590,
      priceOriginal: 3990,
      duration: '12 giorni',
      features: ['Notte in Ryokan', 'Volo Diretto'],
      ribbon: { text: 'PROMOZIONE', color: 'red' },
    },
    {
      id: 'maiko',
      title: 'Maiko',
      subtitle: 'Tour Culturale',
      category: 'group',
      cities: ['Kyoto', 'Osaka', 'Nara'],
      tags: ['cultura', 'tradizioni', 'ryokan', 'templi'],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      price: 3890,
      priceOriginal: 3990,
      duration: '12 giorni',
      features: ['Notte in Ryokan', 'Volo Diretto'],
      ribbon: { text: 'ANTEPRIMA', color: 'purple' },
    },
    {
      id: 'giappone-classico',
      title: 'Giappone Classico',
      subtitle: 'Tour su Misura',
      category: 'individual',
      cities: ['Tokyo', 'Kyoto', 'Hiroshima', 'Kanazawa'],
      tags: ['su misura', 'flessibile', 'classico', 'completo'],
      image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
      price: 2290,
      duration: '12 notti',
      features: ['12 Notti', 'Volo Escluso'],
      ribbon: { text: 'BEST SELLER', color: 'gold' },
    },
    {
      id: 'giappone-famiglia',
      title: 'Giappone Famiglia',
      subtitle: 'Viaggio per Famiglie',
      category: 'individual',
      cities: ['Tokyo', 'Osaka', 'Kyoto'],
      tags: ['famiglia', 'bambini', 'divertimento', 'flessibile'],
      image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=800&q=80',
      price: 1890,
      duration: '10 notti',
      features: ['10 Notti', 'Volo Escluso'],
      ribbon: { text: 'BEST SELLER', color: 'gold' },
    },
    {
      id: 'giappone-maldive',
      title: 'Giappone e Maldive',
      subtitle: 'Tour Combinato',
      category: 'honeymoon',
      cities: ['Tokyo', 'Kyoto', 'Maldive'],
      tags: ['honeymoon', 'lusso', 'mare', 'romantico'],
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      price: 5390,
      duration: '15 notti',
      features: ['15 Notti', 'Voli Inclusi'],
      ribbon: { text: 'HONEYMOON', color: 'pink' },
    },
    {
      id: 'giappone-bali',
      title: 'Giappone e Bali',
      subtitle: 'Tour Combinato',
      category: 'honeymoon',
      cities: ['Tokyo', 'Kyoto', 'Bali'],
      tags: ['honeymoon', 'mare', 'romantico', 'esotico'],
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      price: 3690,
      duration: '16 notti',
      features: ['16 Notti', 'Voli Inclusi'],
      ribbon: { text: 'HONEYMOON', color: 'pink' },
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.calculateRelatedTours();
  }

  private calculateRelatedTours(): void {
    // Filtra il tour corrente
    const availableTours = this.allTours.filter(
      (tour) => tour.id !== this.currentTourId
    );

    // Calcola il punteggio di similarità per ogni tour
    const scoredTours = availableTours.map((tour) => ({
      tour,
      score: this.calculateSimilarityScore(tour),
    }));

    // Ordina per punteggio decrescente
    scoredTours.sort((a, b) => b.score - a.score);

    // Prendi i primi N tour
    this.relatedTours = scoredTours
      .slice(0, this.maxResults)
      .map((item) => item.tour);
  }

  private calculateSimilarityScore(tour: Tour): number {
    let score = 0;

    // 1. Stessa categoria = +30 punti
    if (this.currentCategory && tour.category === this.currentCategory) {
      score += 30;
    }

    // 2. Città in comune = +10 punti per ogni città
    if (this.currentCities) {
      const commonCities = tour.cities.filter((city) =>
        this.currentCities!.includes(city)
      );
      score += commonCities.length * 10;
    }

    // 3. Tag in comune = +15 punti per ogni tag
    if (this.currentTags) {
      const commonTags = tour.tags.filter((tag) =>
        this.currentTags!.includes(tag)
      );
      score += commonTags.length * 15;
    }

    // 4. Bonus per tour promozionali = +5 punti
    if (tour.ribbon?.text === 'PROMOZIONE') {
      score += 5;
    }

    // 5. Bonus per tour popolari = +8 punti
    if (tour.ribbon?.text === 'BEST SELLER') {
      score += 8;
    }

    return score;
  }

  viewTourDetail(tourId: string): void {
    this.router.navigate(['/tour', tourId]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getRibbonClasses(color?: string): string {
    const baseClasses =
      'absolute top-4 right-4 px-3 py-1.5 text-xs font-bold rounded-full shadow-lg z-10';

    switch (color) {
      case 'pink':
        return `${baseClasses} bg-pink-watabi text-white`;
      case 'purple':
        return `${baseClasses} bg-purple-600 text-white`;
      case 'gold':
        return `${baseClasses} bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900`;
      case 'red':
        return `${baseClasses} bg-red-600 text-white`;
      default:
        return `${baseClasses} bg-gray-800 text-white`;
    }
  }
}