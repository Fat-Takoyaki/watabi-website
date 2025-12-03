import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Destination {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  blogRoute: string;
  highlights: string[];
  icon: string;
}

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinations.html',
  styleUrls: ['./destinations.scss'],
})
export class Destinations {
  destinations: Destination[] = [
    {
      id: 'tokyo',
      name: 'Tokyo',
      tagline: 'Il cuore pulsante del Giappone moderno',
      description:
        'Una metropoli che non dorme mai, dove grattacieli futuristici convivono con templi antichi. Dai quartieri tecnologici di Akihabara alla spiritualità di Asakusa.',
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
      blogRoute: '/blog/tokyo-guida',
      highlights: ['Shibuya Crossing', 'Senso-ji', 'Tokyo Skytree'],
      icon: 'pi-building',
    },
    {
      id: 'kyoto',
      name: 'Kyoto',
      tagline: "L'anima tradizionale del Giappone",
      description:
        "L'antica capitale imperiale con oltre 2000 templi e santuari. Geishe, giardini zen e l'iconica foresta di bambù di Arashiyama ti aspettano.",
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      blogRoute: '/blog/kyoto-guida',
      highlights: ['Fushimi Inari', 'Kinkaku-ji', 'Gion'],
      icon: 'pi-home',
    },
    {
      id: 'osaka',
      name: 'Osaka',
      tagline: 'La capitale gastronomica del Giappone',
      description:
        'Vibrante, accogliente e famosa per il suo street food. Osaka offre modernità, cultura pop, quartieri iconici come Dōtonbori e castelli storici immersi nel verde.',
      image:
        'https://cdn.gaijinpot.com/app/uploads/sites/4/2014/04/dotonburi.jpg',
      blogRoute: '/blog/osaka-guida',
      highlights: ['Dōtonbori', 'Castello di Osaka', 'Acquario Kaiyukan'],
      icon: 'pi-map',
    },
    {
      id: 'nara',
      name: 'Nara',
      tagline: 'La città dei cervi sacri',
      description:
        'Prima capitale del Giappone, famosa per i suoi cervi mansueti che passeggiano liberamente e per il monumentale Buddha del Todai-ji.',
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=800&q=80',
      blogRoute: '/blog/nara-guida',
      highlights: ['Todai-ji', 'Parco dei cervi', 'Kasuga Taisha'],
      icon: 'pi-star',
    },
    {
      id: 'kanazawa',
      name: 'Kanazawa',
      tagline: 'La piccola Kyoto nascosta',
      description:
        'Una gemma sottovalutata con il giardino più bello del Giappone, quartieri di samurai perfettamente conservati e tradizioni artigianali vive.',
      image:
        'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80',
      blogRoute: '/blog/kanazawa-guida',
      highlights: ['Kenrokuen', 'Quartiere Higashi Chaya', 'Castello'],
      icon: 'pi-crown',
    },
    {
      id: 'okinawa',
      name: 'Okinawa',
      tagline: 'Il paradiso tropicale giapponese',
      description:
        'Isole subtropicali con spiagge cristalline, cultura unica Ryukyu e una storia affascinante. Il Giappone che non ti aspetti.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      blogRoute: '/blog/okinawa-guida',
      highlights: ['Spiagge paradisiache', 'Castello Shuri', 'Snorkeling'],
      icon: 'pi-sun',
    },
  ];

  constructor(private router: Router) {}

  navigateToBlog(route: string) {
    this.router.navigate([route]);
  }
}
