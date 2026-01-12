import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Tours } from '../tours/tours';
import { Hero } from './sections/hero/hero';
import { JapanExperience } from './sections/japan-experience/japan-experience';
import { Watabi } from './sections/watabi/watabi';
import { TravelTypes } from './sections/travel-type/travel-type';
import { BestPeriod } from './sections/best-period/best-period';
import { Destinations } from './sections/destinations/destinations';
import { Faq } from '../faq/faq';
import { WhoIsWatabi } from '../japan-travel/sectionts/who-is-watabi/who-is-watabi';
import { Testimonials } from '../japan-travel/sectionts/testimonials/testimonials';
import { CtaJapanTravel } from '../japan-travel/sectionts/cta-japan-travel/cta-japan-travel';
import { ContentService } from '../../services/content.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    Header,
    Tours,
    JapanExperience,
    TravelTypes,
    BestPeriod,
    Destinations,
    Faq,
    Watabi,
    Testimonials,
    CtaJapanTravel,
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  headerContent: any = null;

  constructor(private router: Router, private contentService: ContentService) {}

  ngOnInit(): void {
    this.loadHeaderContent();
  }

  private loadHeaderContent(): void {
    this.contentService.loadContent<any>('home-header').subscribe({
      next: (data) => {
        if (data) {
          this.headerContent = data;
        } else {
          this.headerContent = this.getDefaultHeaderContent();
        }
      },
    });
  }

  private getDefaultHeaderContent(): any {
    return {
      showCta: true,
      ctaText: 'Trova il tuo Viaggio',
      ctaLink: '#trova-il-tuo-viaggio',
      backgroundImage:
        'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80',
      title: 'Il Giappone per viaggiare liberi',
      subtitle: 'Un modo diverso di viaggiare',
      overlayOpacity: 0.3,
      minHeight: '550px',
    };
  }
}
