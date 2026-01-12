import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  constructor(private viewportScroller: ViewportScroller) {}

  @Input() backgroundImage: string =
    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1920&q=80';
  @Input() title: string = 'Il Giappone per viaggiare liberi';
  @Input() subtitle: string = 'Un modo diverso di viaggiare';
  @Input() overlayOpacity: number = 0.3;
  @Input() minHeight: string = '550px';

  @Input() showCta: boolean = false;
  @Input() ctaText: string = 'Scopri di più';
  @Input() ctaLink: string = '#';

  /** Altezza della navbar sticky (regolala) */
  @Input() scrollOffset: number = 80;

  scrollTo(link: string, ev?: Event): void {
    ev?.preventDefault();

    const id = (link || '').replace('#', '').trim();
    if (!id) return;

    const el = document.getElementById(id);
    if (!el) return;

    const y =
      el.getBoundingClientRect().top + window.scrollY - this.scrollOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth',
    });
  }

  isMobile(): boolean {
    return window.innerWidth < 768;
  }

  cloudImages = {
    cloud1: './assets/img/cloud-1.png',
    cloud2: './assets/img/cloud-2.png',
    cloud3: './assets/img/cloud-3.png',
    cloud4: './assets/img/cloud-4.png',
    cloud5: './assets/img/cloud-5.png',
  };
}
