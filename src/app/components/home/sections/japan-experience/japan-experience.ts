import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Feature {
  icon: string;
  title: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-japan-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './japan-experience.html',
  styleUrls: ['./japan-experience.scss'],
})
export class JapanExperience {
  features: Feature[] = [
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
  ];
}
