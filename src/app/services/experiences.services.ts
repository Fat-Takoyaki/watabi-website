import { Injectable } from '@angular/core';
import { ExperiencePackage } from '../models/experience.model';

@Injectable({
  providedIn: 'root',
})
export class ExperiencesService {
  private experiences: ExperiencePackage[] = [
    {
      id: 'tea-ceremony',
      name: 'Cerimonia del Tè Tradizionale',
      description:
        "Partecipa a un'autentica cerimonia del tè giapponese condotta da un maestro certificato in un tradizionale chashitsu.",
      price: 85,
      duration: '2 ore',
      image:
        'https://images.unsplash.com/photo-1545048702-79362596cdc9?w=800&q=80',
      category: 'cultura',
      highlights: [
        'Maestro certificato',
        'Kimono tradizionale incluso',
        'Dolci wagashi artigianali',
        'Spiegazione in italiano/inglese',
      ],
      availability: 'alta',
    },
    {
      id: 'ninja-museum',
      name: 'Museo dei Ninja + Workshop',
      description:
        'Scopri i segreti dei ninja con una visita guidata al museo e un workshop pratico con armi e tecniche autentiche.',
      price: 65,
      duration: '3 ore',
      image:
        'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&q=80',
      category: 'cultura',
      highlights: [
        'Guida esperta in storia ninja',
        'Prova delle armi tradizionali',
        'Costume ninja incluso',
        'Certificato di partecipazione',
      ],
      availability: 'media',
    },
    {
      id: 'sumo-experience',
      name: 'Incontro di Sumo dal Vivo',
      description:
        'Assisti a un emozionante incontro di sumo professionale con posti riservati e spiegazione delle regole tradizionali.',
      price: 120,
      duration: '4 ore',
      image:
        'https://images.unsplash.com/photo-1590650213165-f5f7c90f0f18?w=800&q=80',
      category: 'sport',
      highlights: [
        'Posti in arena premium',
        'Guida esperta di sumo',
        'Chanko nabe dinner incluso',
        'Incontro con lottatori (se disponibile)',
      ],
      availability: 'bassa',
    },
    {
      id: 'sushi-making',
      name: 'Corso di Preparazione Sushi',
      description:
        "Impara l'arte del sushi da un chef professionista in una cucina tradizionale giapponese.",
      price: 95,
      duration: '3 ore',
      image:
        'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80',
      category: 'gastronomia',
      highlights: [
        'Chef professionista',
        'Ingredienti premium inclusi',
        'Ricettario da portare a casa',
        'Degustazione delle proprie creazioni',
      ],
      availability: 'alta',
    },
    {
      id: 'geisha-district',
      name: 'Tour del Quartiere delle Geisha',
      description:
        'Esplora il misterioso mondo delle geisha con una passeggiata guidata nel quartiere di Gion a Kyoto.',
      price: 75,
      duration: '2.5 ore',
      image:
        'https://images.unsplash.com/photo-1528164344805-02d8b47a1f8a?w=800&q=80',
      category: 'cultura',
      highlights: [
        'Guida locale esperta',
        'Possibilità di avvistare geisha',
        'Visita a ochaya tradizionale',
        'Kimono rental opzionale',
      ],
      availability: 'alta',
    },
    {
      id: 'mount-fuji-hike',
      name: 'Escursione al Monte Fuji',
      description:
        'Trekking guidato sulle pendici del sacro Monte Fuji con vista panoramica sui laghi circostanti.',
      price: 110,
      duration: 'Giornata intera',
      image:
        'https://images.unsplash.com/photo-1576674466914-c430e1085da7?w=800&q=80',
      category: 'natura',
      highlights: [
        'Guida alpina certificata',
        'Equipaggiamento incluso',
        'Pranzo bento box',
        'Transfer da/per Tokyo',
      ],
      availability: 'media',
    },
    {
      id: 'sake-tasting',
      name: 'Degustazione Sake Premium',
      description:
        'Tour di una tradizionale sakagura con degustazione guidata di sake premium e abbinamenti gastronomici.',
      price: 80,
      duration: '2 ore',
      image:
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80',
      category: 'gastronomia',
      highlights: [
        'Visita alla distilleria',
        'Degustazione di 6 sake diversi',
        'Sommelier sake certificato',
        'Snack abbinati inclusi',
      ],
      availability: 'alta',
    },
    {
      id: 'onsen-experience',
      name: 'Esperienza Onsen Privato',
      description:
        'Rilassati in un tradizionale bagno termale giapponese con area privata e trattamenti spa.',
      price: 90,
      duration: '3 ore',
      image:
        'https://images.unsplash.com/photo-1583537707907-fe88f2e0b5b1?w=800&q=80',
      category: 'natura',
      highlights: [
        'Onsen privato riservato',
        'Yukata e asciugamani inclusi',
        'Massaggio rilassante 30 min',
        'Tè verde e dolcetti',
      ],
      availability: 'media',
    },
  ];

  getAllExperiences(): ExperiencePackage[] {
    return [...this.experiences];
  }

  getExperienceById(id: string): ExperiencePackage | undefined {
    return this.experiences.find((exp) => exp.id === id);
  }

  getExperiencesByCategory(category: string): ExperiencePackage[] {
    return this.experiences.filter((exp) => exp.category === category);
  }

  getExperiencesByIds(ids: string[]): ExperiencePackage[] {
    return this.experiences.filter((exp) => ids.includes(exp.id));
  }
}
