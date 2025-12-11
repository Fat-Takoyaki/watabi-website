import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Header } from '../../header/header';
import { RelatedTours } from '../related-tours/related-tours';
import { ExtensionSelector } from '../extension-selector/extension-selector';
import { ExtensionsService } from '../../../services/extensions.service';
import { Extension } from '../../../models/extension.model';
import { TourMap } from '../../tour-map/tour-map';

interface TourStop {
  city: string;
  nights: number;
  description: string;
  highlights: string[];
  images: string[];
  nearbyExcursions?: NearbyExcursion[];
}

interface NearbyExcursion {
  name: string;
  description: string;
  distance: string;
  duration: string;
  transport: string;
}

interface PricePackage {
  name: string;
  stars: number;
  price: number;
  originalPrice?: number;
  features: string[];
  color: 'teal' | 'gold';
}

interface InfoSection {
  title: string;
  content: string;
}

interface SidebarInfo {
  icon: string;
  title: string;
  items?: { label: string; highlight: string }[];
  description?: string;
  trustpilot?: { reviews: number; link: string };
  contacts?: { type: string; value: string; link?: string }[];
}

@Component({
  selector: 'app-tour-detail',
  standalone: true,
  imports: [CommonModule, Header, RelatedTours, ExtensionSelector, TourMap],
  templateUrl: './tour-detail.html',
  styleUrls: ['./tour-detail.scss'],
})
export class TourDetail implements OnInit, AfterViewInit, OnDestroy {
  tourId = 'yuki';
  backgroundImage =
    'https://images.unsplash.com/photo-1602479185176-e48241133836?w=1920&q=80';

  // Estensioni
  availableExtensionIds = ['dubai', 'singapore', 'maldive'];
  availableExtensions: Extension[] = [];
  selectedExtension: Extension | null = null;
  showExtensionModal = false;

  // STICKY CTA - Sistema migliorato
  showStickyCta = false;
  @ViewChild('quoteCard') quoteCard!: ElementRef;
  private quoteCardBottom = 0;
  private readonly NAVBAR_HEIGHT = 80; // top-20 = 5rem = 80px
  private readonly SCROLL_THRESHOLD = 900; // Mostra dopo 900px di scroll
  private ticking = false; // RAF optimization
  private observer?: IntersectionObserver;
  private lastShowState = false;
  private readonly HYSTERESIS = 40; // px, margine per evitare flicker

  tourTitle = 'Giappone Autentico';
  tourSubtitle = 'Tour Yuki';
  tourDescription =
    'Quota calcolata su base 1 partecipante in un periodo di media stagione e da riconfermare tramite preventivo.';

  minParticipants = 1;
  totalDays = 16;
  totalNights = 14;
  accommodationType = '13 in Hotel, 1 in Ryokan';
  transportType = 'Autobus, Treno';
  mealsIncluded = '3 colazioni, 3 cene';
  recommendedPeriod = 'Da Settembre a Maggio';
  priceFrom = 3300;

  breadcrumbs = [
    { label: 'HOME', route: '/' },
    { label: 'VIAGGIO GIAPPONE', route: '/japan-travel' },
    { label: 'TOUR CLASSICO', route: null },
  ];

  tourIntroduction = `Questo itinerario ti porterà alla scoperta del Giappone più autentico, combinando le città iconiche con esperienze uniche nei villaggi tradizionali. Perfetto per chi vuole vivere il Giappone in modo completo, con la giusta combinazione di cultura, natura e gastronomia. L'itinerario è completamente personalizzabile in base alle tue esigenze.`;

  quickHighlights = [
    { icon: 'pi-users', label: 'Partecipanti', value: 'Min. 1 persona' },
    { icon: 'pi-home', label: 'Pernottamenti', value: '13 Hotel + 1 Ryokan' },
    { icon: 'pi-shop', label: 'Pasti', value: '3 colazioni + 3 cena' },
    { icon: 'pi-calendar', label: 'Periodo', value: 'Set - Maggio' },
  ];

  // Tab management
  private activeTabs: {
    [city: string]: 'description' | 'places' | 'excursions';
  } = {};

  tourStops: TourStop[] = [
    {
      city: 'Tokyo',
      nights: 4,
      description:
        "Tokyo, 12 milioni di abitanti, è la capitale e principale porta di accesso del Giappone. Poco dopo il vostro arrivo sarete già in grado di iniziare l'esplorazione di questa stupenda città.",
      highlights: ['Asakusa', 'Shibuya', 'Ginza', 'Palazzo Imperiale'],
      images: [
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80',
        'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80',
      ],
      nearbyExcursions: [
        {
          name: 'Kamakura',
          description:
            'Visita alla città storica con il grande Buddha di bronzo e i templi zen immersi nella natura.',
          distance: '50 km',
          duration: 'Mezza giornata',
          transport: 'Treno JR',
        },
        {
          name: 'Nikko',
          description:
            'Patrimonio UNESCO con santuari magnifici e natura spettacolare tra montagne e cascate.',
          distance: '140 km',
          duration: 'Giornata intera',
          transport: 'Treno JR',
        },
      ],
    },
    {
      city: 'Kanazawa',
      nights: 1,
      description:
        'Talvolta sottovalutata dai turisti stranieri, la splendida Kanazawa non è invece mai dimenticata dai turisti giapponesi che vi accorrono ogni anno numerosissimi.',
      highlights: ['Quartiere dei samurai', 'Mercato del pesce', 'Kenrokuen'],
      images: [
        'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80',
        'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
        'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
      ],
      nearbyExcursions: [
        {
          name: 'Shirakawago',
          description:
            'Villaggio patrimonio UNESCO con le tradizionali case gassho-zukuri con tetti di paglia.',
          distance: '80 km',
          duration: 'Mezza giornata',
          transport: 'Bus turistico',
        },
      ],
    },
    {
      city: 'Kyoto',
      nights: 4,
      description:
        "Kyoto è la città d'arte del Giappone per definizione. Camminare per le sue strette vie imbattendosi in templi e scorci tradizionali ad ogni passo è un'emozione unica.",
      highlights: ['Fushimi Inari', "Padiglione d'oro", 'Arashiyama', 'Gion'],
      images: [
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
        'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
      ],
      nearbyExcursions: [
        {
          name: 'Nara',
          description:
            'Antica capitale con il Todaiji, il grande Buddha e i famosi cervi sacri nel parco.',
          distance: '45 km',
          duration: 'Mezza giornata',
          transport: 'Treno JR',
        },
        {
          name: 'Osaka',
          description:
            'Esplorazione del castello e del vivace quartiere di Dotonbori per lo street food.',
          distance: '50 km',
          duration: 'Mezza giornata',
          transport: 'Treno JR',
        },
      ],
    },
    {
      city: 'Hiroshima',
      nights: 1,
      description:
        "Hiroshima è la città principale della regione di Chugoku. Completamente ricostruita dopo l'esplosione atomica, ha oggi l'attenzione turistica puntata nel Parco del Memoriale della Pace.",
      highlights: [
        'Memoriale della Pace',
        'Museo della Pace',
        'Parco della Pace',
      ],
      images: [
        'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80',
        'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=800&q=80',
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&q=80',
      ],
      nearbyExcursions: [
        {
          name: 'Miyajima',
          description:
            'Isola sacra con il famoso torii galleggiante e il santuario Itsukushima.',
          distance: '20 km',
          duration: 'Mezza giornata',
          transport: 'Treno + Traghetto',
        },
      ],
    },
  ];

  pricePackages: PricePackage[] = [
    {
      name: 'TRE STELLE',
      stars: 3,
      price: 2290,
      features: [
        'Hotel Categoria Standard',
        'Accoglienza e transfer in treno',
        'Assicurazione Medico-Bagaglio',
        'Itinerario day by day su Smartphone',
        'Router Pocket WiFi',
        'Treni JR lunga percorrenza 2a classe',
      ],
      color: 'teal',
    },
    {
      name: 'QUATTRO STELLE',
      stars: 4,
      price: 2690,
      features: [
        'Hotel Categoria Superior',
        'Accoglienza e transfer in treno',
        'Assicurazione Medico-Bagaglio',
        'Itinerario day by day su Smartphone',
        'Router Pocket WiFi',
        'Treni JR lunga percorrenza 2a classe',
      ],
      color: 'gold',
    },
  ];

  infoSections: InfoSection[] = [
    {
      title: 'Prezzo per persona',
      content:
        'Il prezzo è da intendersi per persona, in base camera matrimoniale. Supplemento twin e riduzione 3° e 4° letto adulti e bambini su richiesta. Supplemento singola non disponibile.',
    },
    {
      title: 'Stagionalità',
      content:
        'Il prezzo è calcolato in base al costo medio dei servizi in bassa stagione. Per i periodi di alta e altissima stagione, o in concomitanza con i fine settimana o festività nazionali, i prezzi potrebbero subire dei rialzi che faremo del nostro meglio per ridurre al minimo.',
    },
    {
      title: 'Tipologia di viaggio',
      content: 'Individuale a date libere.',
    },
  ];

  notIncluded: string[] = [
    'Biglietto aereo Italia-Giappone A/R',
    'Colazioni negli Hotels',
    'Costo dei trasporti, salvo biglietti/pass inclusi',
    'Integrazione copertura annullamento',
    'Tassa di soggiorno, bevande, pasti non in programma',
    'Visite guidate, salvo se specificato',
    'Tutto ciò non espressamente indicato tra i servizi inclusi nella formula scelta',
  ];

  sidebarInfo = [
    {
      icon: 'pi-map',
      title: 'il Viaggio e Volo',
      items: [
        { label: 'Il nostro', highlight: 'Best Seller' },
        { label: 'Ideale per', highlight: 'tutti i tipi di viaggiatori' },
        { label: 'Personalizzabile con una notte in', highlight: 'Ryokan' },
        { label: 'Volo da', highlight: 'Milano Malpensa' },
      ],
    },
    {
      icon: 'pi-star',
      title: 'i Viaggiatori',
      description:
        'Centinaia di viaggiatori ci hanno scelto per il loro viaggio in Giappone. Unisciti a loro!',
      trustpilot: { reviews: 218, link: 'https://trustpilot.com' },
    },
    {
      icon: 'pi-cog',
      title: 'Optionals',
      description:
        'Puoi aggiungere al tuo itinerario in Giappone degli optionals come assicurazione annullamento, esperienze, transfer privati o visite guidate aggiuntive.',
    },
    {
      icon: 'pi-phone',
      title: 'Chiamaci',
      contacts: [
        { type: 'Telefono', value: '0833.530869' },
        { type: 'Whatsapp', value: '0833.530869' },
        { type: 'Sito Internet', value: 'Servizi', link: '/services' },
      ],
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private extensionsService: ExtensionsService
  ) {}

  ngOnInit(): void {
    this.loadExtensions();
  }

  ngAfterViewInit(): void {
    requestAnimationFrame(() => this.updateStickyCta());
  }

  ngOnDestroy(): void {
  }

  private updateStickyCta(): void {
    const scrollY = window.scrollY || window.pageYOffset;

    if (!this.quoteCard?.nativeElement) {
      this.showStickyCta = scrollY > this.SCROLL_THRESHOLD;
      return;
    }

    const rect = this.quoteCard.nativeElement.getBoundingClientRect();
    const quoteCardTop = rect.top + window.scrollY;
    const quoteCardBottom = rect.bottom + window.scrollY;

    // Mostra la sticky CTA quando:
    // 1. Siamo scrollati oltre il bottom della card principale
    // 2. Oppure abbiamo superato la soglia minima di scroll
    const isScrolledPastCard = scrollY > quoteCardBottom - this.NAVBAR_HEIGHT;
    const shouldShow = isScrolledPastCard || scrollY > this.SCROLL_THRESHOLD;

    // Applicato hysteresis per evitare flicker
    if (
      Math.abs(scrollY - (quoteCardBottom - this.NAVBAR_HEIGHT)) >
      this.HYSTERESIS
    ) {
      this.showStickyCta = shouldShow;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        this.updateStickyCta();
        this.ticking = false;
      });
      this.ticking = true;
    }
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    this.updateStickyCta();
  }

  loadExtensions(): void {
    this.availableExtensions = this.extensionsService.getExtensionsByIds(
      this.availableExtensionIds
    );
  }

  requestQuote(): void {
    // Apri modal estensioni prima di andare al preventivo
    this.showExtensionModal = true;
  }

  onExtensionSelected(extension: Extension | null): void {
    this.selectedExtension = extension;
    this.showExtensionModal = false;

    // Naviga al form preventivo con i dati
    this.router.navigate(['/quote'], {
      state: {
        tourId: this.tourId,
        tourTitle: this.tourTitle,
        selectedExtension: extension,
      },
    });
  }

  selectExtensionFromSidebar(extension: Extension): void {
    this.selectedExtension = extension;
    // Scroll smooth al CTA
    this.scrollToQuote();
  }

  scrollToQuote(): void {
    if (this.quoteCard?.nativeElement) {
      this.quoteCard.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  navigateTo(route: string | null): void {
    if (route) {
      this.router.navigate([route]);
    }
  }

  getStarsArray(count: number): number[] {
    return Array(count).fill(0);
  }

  // Tab methods
  selectTab(city: string, tab: 'description' | 'places' | 'excursions'): void {
    this.activeTabs[city] = tab;
  }

  getActiveTab(city: string): 'description' | 'places' | 'excursions' {
    return this.activeTabs[city] || 'description';
  }
}
