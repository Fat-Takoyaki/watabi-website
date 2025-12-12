import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ShoppingCategory {
  name: string;
  description: string;
  image: string;
  icon: string;
  tips: string[];
}

@Component({
  selector: 'app-japan-shopping',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-japan-travel.html',
  styleUrls: ['./shopping-japan-travel.scss']
})
export class ShoppingJapanTravel {
  categories: ShoppingCategory[] = [
    {
      name: 'Manga e Anime',
      description: 'Per molti il Giappone è sinonimo di cultura pop. Uniqlo propone spesso t-shirt a tiratura limitata dei manga più popolari.',
      image: 'https://images.unsplash.com/photo-1542640244-7e672d6cef4e?w=400&q=80',
      icon: 'pi-book',
      tips: ['Akihabara (Tokyo)', 'Nakano Broadway', 'Animate stores']
    },
    {
      name: 'Kimono',
      description: 'L\'abito tradizionale giapponese. Disponibili anche versioni moderne (yukata) più accessibili.',
      image: 'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=80',
      icon: 'pi-shopping-bag',
      tips: ['Mercati vintage', 'Negozi a Kyoto', 'Festival estivi']
    },
    {
      name: 'Maneki Neko',
      description: 'Il gatto portafortuna che "invita" la buona sorte. Disponibile in mille varianti e colori.',
      image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&q=80',
      icon: 'pi-heart',
      tips: ['Templi e santuari', 'Negozi di souvenir', 'Mercatini']
    },
    {
      name: 'Tecnologia',
      description: 'Elettronica all\'avanguardia. Akihabara e Yodobashi Camera offrono il meglio del tech giapponese.',
      image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&q=80',
      icon: 'pi-mobile',
      tips: ['Akihabara', 'Yodobashi Camera', 'Bic Camera']
    },
  ];
}