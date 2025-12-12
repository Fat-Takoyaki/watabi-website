import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Destination {
  name: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  popular: boolean;
}

@Component({
  selector: 'app-japan-destinations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './destinations-japan-travel.html',
  styleUrls: ['./destinations-japan-travel.scss'],
})
export class DestinationsJapanTravel {
  destinations: Destination[] = [
    {
      name: 'Tokyo',
      tagline: 'La modernità',
      description:
        "Una capitale come poche altre. La sua dimensione e le sue megastrutture convivono con la calma e l'ordine del vissuto quotidiano.",
      image:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80',
      highlights: ['Shinjuku', 'Shibuya', 'Asakusa', 'Ginza'],
      popular: true,
    },
    {
      name: 'Kyoto',
      tagline: "La città d'arte",
      description:
        "La città d'arte del Giappone per definizione. Templi e scorci tradizionali ad ogni passo.",
      image:
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
      highlights: ['Fushimi Inari', 'Kinkaku-ji', 'Arashiyama', 'Gion'],
      popular: true,
    },
    {
      name: 'Osaka',
      tagline: 'La cucina di strada',
      description:
        'Il castello, Dotonbori e lo street food più famoso del Giappone.',
      image:
        'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80',
      highlights: ['Dotonbori', 'Castello', 'Shinsekai'],
      popular: true,
    },
    {
      name: 'Hiroshima e Miyajima',
      tagline: 'Storia e spiritualità',
      description:
        'Il Memoriale della Pace e il torii galleggiante più iconico del Giappone.',
      image:
        'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
      highlights: ['Peace Memorial', 'Miyajima', 'Itsukushima Shrine'],
      popular: true,
    },
    {
      name: 'Hakone',
      tagline: 'Monte Fuji e Onsen',
      description: 'La vista del Monte Fuji, bagni termali e natura.',
      image:
        'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80',
      highlights: ['Monte Fuji', 'Lago Ashi', 'Onsen'],
      popular: false,
    },
    {
      name: 'Nara',
      tagline: 'I cervi sacri',
      description:
        "L'antica capitale con il Todaiji e i famosi cervi nel parco.",
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80',
      highlights: ['Todaiji', 'Nara Park', 'Cervi sacri'],
      popular: false,
    },
    {
      name: 'Kanazawa',
      tagline: 'Tradizione preservata',
      description:
        'Quartiere dei samurai, mercato del pesce e il giardino Kenrokuen.',
      image:
        'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80',
      highlights: ['Kenrokuen', 'Quartiere samurai', 'Mercato Omicho'],
      popular: false,
    },
    {
      name: 'Nikko',
      tagline: 'Patrimonio UNESCO',
      description:
        'Santuari magnifici e natura spettacolare tra montagne e cascate.',
      image:
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&q=80',
      highlights: ['Toshogu Shrine', 'Cascate', 'Natura'],
      popular: false,
    },
    {
      name: 'Takayama',
      tagline: 'Le Alpi giapponesi',
      description:
        'Villaggio di montagna con atmosfera tradizionale preservata.',
      image:
        'https://images.unsplash.com/photo-1590559899731-a382839e5549?w=600&q=80',
      highlights: ['Old Town', 'Festival', 'Hida Beef'],
      popular: false,
    },
    {
      name: 'Shirakawa-go',
      tagline: 'Villaggio delle fiabe',
      description: 'Case tradizionali gassho-zukuri patrimonio UNESCO.',
      image:
        'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=80',
      highlights: ['Gassho-zukuri', 'Patrimonio UNESCO', 'Paesaggio rurale'],
      popular: false,
    },
    {
      name: 'Kamakura',
      tagline: 'Il Grande Buddha',
      description: 'Città storica con templi zen e il Buddha di bronzo.',
      image:
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600&q=80',
      highlights: ['Grande Buddha', 'Templi Zen', 'Spiagge'],
      popular: false,
    },
    {
      name: 'Okinawa',
      tagline: 'Il mare tropicale',
      description:
        'Isole subtropicali con spiagge paradisiache e cultura unica.',
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80',
      highlights: ['Spiagge', 'Snorkeling', 'Cultura Ryukyu'],
      popular: false,
    },
    {
      name: 'Hokkaido',
      tagline: "L'isola del nord",
      description: 'Natura selvaggia, sci e gastronomia eccezionale.',
      image:
        'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=600&q=80',
      highlights: ['Sapporo', 'Sci', 'Natura'],
      popular: false,
    },
    {
      name: 'Koyasan',
      tagline: 'Il monte sacro',
      description: 'Centro del buddhismo Shingon, dormire in un monastero.',
      image:
        'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=80',
      highlights: ['Monasteri', 'Okunoin Cemetery', 'Esperienza spirituale'],
      popular: false,
    },
    {
      name: 'Himeji',
      tagline: 'Il castello bianco',
      description: 'Il castello più bello e meglio preservato del Giappone.',
      image:
        'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=600&q=80',
      highlights: ['Himeji Castle', 'Patrimonio UNESCO', 'Giardini'],
      popular: false,
    },
    {
      name: 'Nagano',
      tagline: 'Le scimmie delle nevi',
      description:
        'Olimpiadi invernali, templi e le famose scimmie nei bagni termali.',
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=600&q=80',
      highlights: ['Scimmie nelle onsen', 'Zenko-ji', 'Montagne'],
      popular: false,
    },
  ];

  showAll = false;
  shouldAnimate = false;

  toggleShowAll() {
    if (!this.showAll) {
      // Sta per espandere - attiva animazione
      this.shouldAnimate = true;
      this.showAll = true;
    } else {
      // Sta per collassare - no animazione
      this.shouldAnimate = false;
      this.showAll = false;
    }
  }

  getPopularCount(): number {
    return this.destinations.filter((d) => d.popular).length;
  }
}
