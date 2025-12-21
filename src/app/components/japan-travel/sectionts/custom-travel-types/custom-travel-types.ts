import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface TravelCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  route: string;
  icon: string;
  highlights: string[];
  gradient: string;
}

@Component({
  selector: 'app-custom-travel-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-travel-types.html',
  styleUrls: ['./custom-travel-types.scss']
})
export class CustomTravelTypes {
  travelCategories: TravelCategory[] = [
    {
      id: 'family',
      title: 'Viaggio in Famiglia',
      subtitle: 'Esperienze pensate per grandi e piccini',
      description: 'Ritmi rilassati, alloggi comodi e attività family-friendly. Dal parco dei cervi di Nara ai musei interattivi di Tokyo, ogni tappa è studiata per coinvolgere tutta la famiglia senza stress.',
      image: 'https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?w=800&q=80',
      route: '/viaggio-giappone-famiglia',
      icon: 'pi-users',
      highlights: [
        'Ritmi adatti ai bambini',
        'Alloggi spaziosi e confortevoli',
        'Esperienze interattive e coinvolgenti'
      ],
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      id: 'honeymoon',
      title: 'Viaggio di Nozze',
      subtitle: 'Il vostro sogno romantico in Giappone',
      description: 'Ryokan tradizionali con onsen privati, cene kaiseki raffinate, tramonti sul Monte Fuji. Un itinerario esclusivo per celebrare il vostro amore in uno dei paesi più affascinanti al mondo.',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80',
      route: '/viaggio-nozze-giappone',
      icon: 'pi-heart',
      highlights: [
        'Esperienze romantiche ed esclusive',
        'Ryokan di lusso con onsen privati',
        'Cene kaiseki e momenti speciali'
      ],
      gradient: 'from-pink-500 to-pink-700'
    },
    {
      id: 'couple-friends',
      title: 'Viaggi in Coppia o con Amici',
      subtitle: 'Libertà e avventura condivisa',
      description: 'Scoprite il Giappone al vostro ritmo, tra città pulsanti e natura incontaminata. Itinerari flessibili che si adattano ai vostri interessi, dalla movida di Tokyo alle montagne delle Alpi Giapponesi.',
      image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=800&q=80',
      route: '/viaggio-giappone-coppia',
      icon: 'pi-heart-fill',
      highlights: [
        'Massima flessibilità',
        'Mix perfetto tra città e natura',
        'Esperienze autentiche e locali'
      ],
      gradient: 'from-purple-500 to-purple-700'
    },
    {
      id: 'thematic',
      title: 'Viaggi Tematici',
      subtitle: 'Il Giappone secondo le tue passioni',
      description: 'Dal Giappone degli anime e manga, ai percorsi spirituali nei templi zen, dalle esperienze culinarie agli itinerari nella natura selvaggia. Ogni viaggio è costruito attorno alla tua passione.',
      image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80',
      route: '/contatti',
      icon: 'pi-star',
      highlights: [
        'Giappone fantastico (anime, manga, pop culture)',
        'Giappone mistico (templi, santuari, spiritualità)',
        'Giappone rurale (villaggi, natura, tradizioni)'
      ],
      gradient: 'from-orange-500 to-orange-700'
    }
  ];

  constructor(private router: Router) {}

  navigateToCategory(route: string) {
    this.router.navigate([route]);
  }
}