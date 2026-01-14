import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export interface ContentSection {
  id: string;
  name: string;
  storageKey: string;
  jsonPath: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  // Registry di tutte le sezioni editabili
  private sections: ContentSection[] = [
    {
      id: 'home-header',
      name: 'Home Header',
      storageKey: 'home-header-content',
      jsonPath: 'assets/data/components/header/home/home-header-content.json',
      description: 'Header della home page con CTA',
    },
    {
      id: 'japan-experience',
      name: 'Japan Experience',
      storageKey: 'japan-experience-content',
      jsonPath:
        'assets/data/home/sections/japan-experience/japan-experience-content.json',
      description: 'Sezione principale della home - Esperienza Giappone',
    },
    {
      id: 'watabi',
      name: 'Watabi Approach',
      storageKey: 'watabi-content',
      jsonPath: 'assets/data/home/sections/watabi/watabi-content.json',
      description: 'Sezione "Il nostro approccio"',
    },
    {
      id: 'travel-types',
      name: 'Travel Types',
      storageKey: 'travel-types-content',
      jsonPath:
        'assets/data/home/sections/travel-types/travel-types-content.json',
      description: 'Sezione tipi di viaggio + Tour Hanami speciale',
    },
    {
      id: 'destinations',
      name: 'Destinations',
      storageKey: 'destinations-content',
      jsonPath:
        'assets/data/home/sections/destinations/destinations-content.json',
      description: 'Sezione destinazioni principali del Giappone',
    },
    {
      id: 'best-period',
      name: 'Best Period',
      storageKey: 'best-period-content',
      jsonPath:
        'assets/data/home/sections/best-period/best-period-content.json',
      description: 'Sezione "Quando andare" - Stagioni e periodi migliori',
    },
    {
      id: 'testimonials',
      name: 'Testimonials',
      storageKey: 'testimonials-content',
      jsonPath: 'assets/data/components/reviews/reviews-content.json',
      description: 'Sezione testimonianze viaggiatori + CTA',
    },
    {
      id: 'cta-japan-travel',
      name: 'CTA Japan Travel',
      storageKey: 'cta-japan-travel-content',
      jsonPath: 'assets/data/components/cta-japan-travel/cta-japan-travel-content.json',
      description: 'CTA finale con features + bottoni',
    },

    // aggiungere qui i futuri json
  ];

  constructor(private http: HttpClient) {}

  /**
   * Ottiene la lista di tutte le sezioni disponibili
   */
  getSections(): ContentSection[] {
    return this.sections;
  }

  /**
   * Ottiene una sezione specifica per ID
   */
  getSection(id: string): ContentSection | undefined {
    return this.sections.find((s) => s.id === id);
  }

  /**
   * Carica il contenuto di una sezione
   * Prima controlla localStorage, poi il JSON originale
   */
  loadContent<T>(sectionId: string): Observable<T | null> {
    const section = this.getSection(sectionId);
    if (!section) {
      console.error(`Sezione non trovata: ${sectionId}`);
      return of(null);
    }

    // Controlla localStorage
    const localContent = localStorage.getItem(section.storageKey);
    if (localContent) {
      try {
        const parsed = JSON.parse(localContent);
        console.log(`📝 [${section.name}] Contenuto da localStorage`);
        return of(parsed as T);
      } catch (e) {
        console.error(`Errore parsing localStorage per ${section.name}:`, e);
        localStorage.removeItem(section.storageKey);
      }
    }

    // Carica da JSON originale
    return this.http.get<T>(section.jsonPath).pipe(
      map((data) => {
        console.log(`📄 [${section.name}] Contenuto da JSON originale`);
        return data;
      }),
      catchError((err) => {
        console.error(`❌ Errore caricamento ${section.name}:`, err);
        return of(null);
      })
    );
  }

  /**
   * Salva il contenuto nel localStorage
   */
  saveContent(sectionId: string, content: any): boolean {
    const section = this.getSection(sectionId);
    if (!section) {
      console.error(`Sezione non trovata: ${sectionId}`);
      return false;
    }

    try {
      localStorage.setItem(section.storageKey, JSON.stringify(content));
      console.log(`✅ [${section.name}] Salvato in localStorage`);
      return true;
    } catch (e) {
      console.error(`❌ Errore salvataggio ${section.name}:`, e);
      return false;
    }
  }

  /**
   * Ripristina il contenuto originale (rimuove da localStorage)
   */
  resetContent(sectionId: string): boolean {
    const section = this.getSection(sectionId);
    if (!section) {
      console.error(`Sezione non trovata: ${sectionId}`);
      return false;
    }

    localStorage.removeItem(section.storageKey);
    console.log(`🔄 [${section.name}] Ripristinato originale`);
    return true;
  }

  /**
   * Controlla se una sezione ha modifiche locali
   */
  hasLocalChanges(sectionId: string): boolean {
    const section = this.getSection(sectionId);
    if (!section) return false;

    return !!localStorage.getItem(section.storageKey);
  }

  /**
   * Esporta il contenuto come JSON scaricabile
   */
  exportContent(sectionId: string, content: any): void {
    const section = this.getSection(sectionId);
    if (!section) {
      console.error(`Sezione non trovata: ${sectionId}`);
      return;
    }

    const dataStr = JSON.stringify(content, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${section.id}-content.json`;
    link.click();

    URL.revokeObjectURL(url);
    console.log(`📥 [${section.name}] JSON esportato`);
  }
}
