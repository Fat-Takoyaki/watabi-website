import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Season {
  name: string;
  period: string;
  description: string;
  highlights: string[];
  image: string;
  color: string;
  icon: string;
}

@Component({
  selector: 'app-japan-seasons',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './seasons-japan-travel.html',
  styleUrls: ['./seasons-japan-travel.scss']
})
export class SeasonsJapanTravel {
  seasons: Season[] = [
    {
      name: 'Primavera',
      period: 'Marzo - Maggio',
      description: 'Una delle stagioni migliori per viaggiare grazie alle temperature miti e allo spettacolo naturale dei ciliegi in fiore.',
      highlights: ['Hanami (Fioritura dei ciliegi)', 'Temperature miti', 'Festival primaverili'],
      image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=800&q=80',
      color: 'from-pink-400 to-rose-500',
      icon: 'pi-sun'
    },
    {
      name: 'Estate',
      period: 'Giugno - Settembre',
      description: 'Stagione calda e umida. Chi sopporta male il caldo dovrebbe valutare altre stagioni. Giugno è il mese delle piogge.',
      highlights: ['Festival estivi (Matsuri)', 'Fuochi d\'artificio', 'Escursioni in montagna'],
      image: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800&q=80',
      color: 'from-green-400 to-emerald-600',
      icon: 'pi-cloud'
    },
    {
      name: 'Autunno',
      period: 'Ottobre - Dicembre',
      description: 'I Momiji colorano le città e i parchi del Giappone. Una delle stagioni più fotogeniche e popolari.',
      highlights: ['Koyo (Foglie rosse)', 'Temperature perfette', 'Paesaggi autunnali'],
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80',
      color: 'from-amber-400 to-orange-600',
      icon: 'pi-star'
    },
    {
      name: 'Inverno',
      period: 'Dicembre - Febbraio',
      description: 'Ideale per gli amanti della neve e per chi vuole esplorare il sud del paese. Giornate più corte ma atmosfere uniche.',
      highlights: ['Sci e snowboard', 'Onsen nella neve', 'Illuminazioni invernali'],
      image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=800&q=80',
      color: 'from-blue-400 to-indigo-600',
      icon: 'pi-inbox'
    }
  ];
}