import { Component, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface MenuItem {
  label: string;
  route?: string;
  children?: MenuItem[];
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-bar.html',
  styleUrls: ['./nav-bar.scss'],
})
export class Navbar {
  isScrolled = false;
  isMobileMenuOpen = false;
  openDropdown: string | null = null;
  isMobile = false;

  menuItems: MenuItem[] = [
    { label: 'Home', route: '/' },
    { label: 'Viaggio in Giappone', route: '/japan-travel' },
    { label: 'Tour di Gruppo', route: '/group-tours' },
    { label: 'Tour Speciali', route: '/special-tours' },
    { label: 'Viaggi di Nozze', route: '/honeymoon' },
    { label: this.getFiorituraLabel(), route: '/fioritura' },
    {
      label: 'Contatti',
      children: [
        { label: 'CONTATTACI', route: '/contact' },
        { label: 'TOUR OPERATOR', route: '/tour-operator' },
        { label: 'BLOG', route: '/blog' },
      ],
    },
  ];

  constructor(private router: Router, private elementRef: ElementRef) {
    // Chiudi tutto quando cambia route
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeAll();
      });
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = this.elementRef.nativeElement.contains(event.target);

    // Se clicco fuori dalla navbar, chiudi tutto
    if (!clickedInside) {
      this.closeAll();
    }
  }

  @HostListener('document:keydown.escape')
  onEscapePress() {
    this.closeAll();
  }

  getFiorituraLabel(): string {
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth();

    // Se siamo dopo aprile (mese 3), mostriamo l'anno successivo
    const targetYear = currentMonth >= 3 ? currentYear + 1 : currentYear;

    return `Fioritura ${targetYear}`;
  }

  toggleMobileMenu(event: Event) {
    event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    // Chiudi dropdown quando apri/chiudi il menu mobile
    this.openDropdown = null;

    // Previeni lo scroll del body quando il menu è aperto
    if (this.isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  toggleDropdown(label: string, event?: Event) {
    if (event) {
      event.stopPropagation();
    }

    // Toggle: se già aperto lo chiudo, altrimenti lo apro
    this.openDropdown = this.openDropdown === label ? null : label;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.openDropdown = null;
    document.body.style.overflow = '';
  }

  closeAll() {
    this.isMobileMenuOpen = false;
    this.openDropdown = null;
    document.body.style.overflow = '';
  }

  hasChildren(item: MenuItem): boolean {
    return !!item.children && item.children.length > 0;
  }
}
