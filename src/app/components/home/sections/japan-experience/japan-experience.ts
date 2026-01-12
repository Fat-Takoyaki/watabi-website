import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ViewportScroller } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

interface JapanContent {
  header: {
    title: string;
    subtitle: string;
    intro: string;
    highlight: string;
  };
  features: Feature[];
  cta: {
    text: string;
    buttonText: string;
    buttonLink: string;
  };
}

@Component({
  selector: 'app-japan-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './japan-experience.html',
  styleUrls: ['./japan-experience.scss'],
})
export class JapanExperience implements OnInit {
  @Input() scrollOffset: number = 80;

  content: JapanContent | null = null;
  private readonly STORAGE_KEY = 'japan-experience-content';
  private readonly JSON_PATH =
    'assets/data/home/sections/japan-experience/japan-experience-content.json';

  constructor(
    private http: HttpClient,
    private viewportScroller: ViewportScroller
  ) {}

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

  ngOnInit(): void {
    this.loadContent();
  }

  private loadContent(): void {
    // Prima controlla se ci sono modifiche nel localStorage
    const localContent = localStorage.getItem(this.STORAGE_KEY);

    if (localContent) {
      try {
        this.content = JSON.parse(localContent);
        console.log('📝 Contenuti caricati da localStorage (modifiche locali)');
        return;
      } catch (e) {
        console.error(
          'Errore parsing localStorage, carico da JSON originale:',
          e
        );
        localStorage.removeItem(this.STORAGE_KEY);
      }
    }

    // Altrimenti carica dal JSON originale
    this.http.get<JapanContent>(this.JSON_PATH).subscribe({
      next: (data) => {
        this.content = data;
        console.log('📄 Contenuti caricati da JSON originale');
      },
      error: (err) => {
        console.error('❌ Errore caricamento contenuti:', err);
        // Fallback con contenuti di emergenza
        this.content = this.getEmergencyContent();
      },
    });
  }

  /**
   * Metodo pubblico per ricaricare i contenuti
   * Utile quando l'editor salva nuovi contenuti nel localStorage
   */
  public reloadContent(): void {
    this.loadContent();
  }

  /**
   * Contenuti di emergenza nel caso il JSON non sia disponibile
   */
  private getEmergencyContent(): JapanContent {
    return {
      header: {
        title: "Il Giappone: un'esperienza che ti cambia",
        subtitle: 'Tradizione, spiritualità, Innovazione e Ospitalità',
        intro:
          "Il Giappone è una terra di contrasti straordinari: templi millenari accanto a grattacieli futuristici, giardini zen che convivono con quartieri vivaci e tecnologici.<br/> È un paese dove la spiritualità permea ogni aspetto della vita quotidiana, dove l'ospitalità è un'arte e la natura è venerata con rispetto profondo.",
        highlight:
          'Una meta affascinante ma culturalmente distante, che <strong class="text-red-watabi">Watabi rende accessibile</strong> grazie alla sua presenza sul territorio e alla profonda conoscenza delle sfumature culturali che fanno la differenza tra un viaggio e un\'esperienza indimenticabile.',
      },
      features: [
        {
          icon: 'pi-home',
          title: 'Tradizione Millenaria',
          description: 'Templi zen, cerimonie del tè e ryokan autentici',
          image:
            'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80',
        },
        {
          icon: 'pi-star',
          title: 'Spiritualità',
          description: 'Shinto, buddhismo e armonia con la natura',
          image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80',
        },
        {
          icon: 'pi-bolt',
          title: 'Innovazione',
          description: 'Tecnologia futuristica e design contemporaneo',
          image:
            'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
        },
        {
          icon: 'pi-heart',
          title: "L'Omotenashi",
          description: "L'arte giapponese dell'ospitalità senza eguali",
          image:
            'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80',
        },
      ],
      cta: {
        text: 'Scopri come possiamo rendere il tuo sogno giapponese una realtà',
        buttonText: 'Il nostro approccio',
        buttonLink: '#watabi-approach',
      },
    };
  }
}
