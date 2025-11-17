import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.html',
  styleUrls: ['./footer.scss'],
})
export class Footer {
  currentYear = new Date().getFullYear();
  trustpilotReviews = 217;

  legalLinks: FooterLink[] = [
    { label: 'Condizioni Generali di Contratto', route: '/terms-conditions' },
    { label: 'Privacy Policy', route: '/privacy-policy' },
    { label: 'Cookie Policy', route: '/cookie-policy' },
  ];

  insuranceLinks: FooterLink[] = [
    { label: 'Assicurazione Med. Base', route: '/insurance-base' },
    {
      label: 'Assicurazione Med. Annullamento',
      route: '/insurance-cancellation',
    },
    { label: 'Integrazione Spese Mediche', route: '/insurance-medical' },
  ];

  specialLinks: FooterLink[] = [
    {
      label: 'Fioritura dei Ciliegi in Giappone 2026',
      route: '/fioritura-2026',
    },
    { label: 'Viaggi di Nozze in Giappone', route: '/honeymoon' },
    { label: 'Capodanno in Giappone', route: '/capodanno' },
    { label: 'Last Minute Giappone', route: '/last-minute' },
  ];

  socialLinks = [
    {
      name: 'Facebook',
      icon: 'pi-facebook',
      url: 'https://facebook.com/watabi',
      color: 'hover:text-blue-600',
    },
    {
      name: 'Instagram',
      icon: 'pi-instagram',
      url: 'https://instagram.com/watabi',
      color: 'hover:text-pink-600',
    },
  ];

  contactInfo = {
    email: 'info@watabi.it',
    phone: '+39 02 1234 5678',
    address: 'Via Roma 123, 20121 Milano (MI)',
  };

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  openTrustpilot(): void {
    window.open('https://it.trustpilot.com/review/watabi.it', '_blank');
  }

  openSocial(url: string): void {
    window.open(url, '_blank');
  }
}
