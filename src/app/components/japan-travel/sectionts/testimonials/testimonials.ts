import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Testimonial {
  name: string;
  travelType: string;
  date: string;
  rating: number;
  text: string;
  image: string;
  highlight?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss'],
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Marco e Giulia',
      travelType: 'Viaggio di Nozze',
      date: 'Aprile 2024',
      rating: 5,
      text: "Il nostro viaggio di nozze in Giappone con Watabi è stato semplicemente perfetto. Ogni dettaglio era curato, dai ryokan tradizionali alle esperienze esclusive. L'assistenza in italiano ci ha fatto sentire sempre sicuri, anche quando ci siamo persi tra i vicoli di Kyoto!",
      image:
        'https://images.unsplash.com/photo-1528164344705-47542687000d?w=400&q=80',
      highlight: 'Organizzazione impeccabile',
    },
    {
      name: 'Famiglia Rossi',
      travelType: 'Viaggio in Famiglia con 2 bambini',
      date: 'Agosto 2024',
      rating: 5,
      text: 'Viaggiare con due bambini piccoli ci preoccupava, ma Watabi ha costruito un itinerario perfetto per le nostre esigenze. Ritmi rilassati, hotel comodi e attività pensate anche per i più piccoli. I nostri figli parlano ancora dei cervi di Nara!',
      image:
        'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&q=80',
      highlight: 'Perfetto per famiglie',
    },
    {
      name: 'Alessandro',
      travelType: 'Viaggio Solo - Tematico Anime',
      date: 'Ottobre 2024',
      rating: 5,
      text: 'Come grande fan degli anime, cercavo un viaggio che andasse oltre i soliti tour. Watabi ha creato un itinerario su misura che mi ha fatto visitare location iconiche, studi di animazione e negozi specializzati. Un sogno diventato realtà.',
      image:
        'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400&q=80',
      highlight: 'Personalizzazione totale',
    },
    {
      name: 'Laura e Monica',
      travelType: 'Viaggio con Amiche',
      date: 'Marzo 2024',
      rating: 5,
      text: "Due settimane indimenticabili tra Tokyo, Kyoto e Hiroshima. L'app di viaggio è stata utilissima per orientarci, e sapere di avere sempre qualcuno disponibile su WhatsApp ci ha dato una tranquillità incredibile. Torneremo sicuramente!",
      image:
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80',
      highlight: 'Supporto costante',
    },
    {
      name: 'Paolo',
      travelType: 'Viaggio Spirituale - Templi e Natura',
      date: 'Novembre 2024',
      rating: 5,
      text: "Cercavo un'esperienza più profonda del Giappone, lontano dalle folle turistiche. Watabi mi ha guidato in templi zen nascosti, sentieri di montagna e piccoli villaggi rurali. Un viaggio che mi ha cambiato.",
      image:
        'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&q=80',
      highlight: 'Esperienza autentica',
    },
    {
      name: 'Sofia e Matteo',
      travelType: 'Viaggio in Coppia',
      date: 'Maggio 2024',
      rating: 5,
      text: "La flessibilità è stata la chiave del nostro viaggio. Abbiamo potuto modificare l'itinerario anche durante il viaggio, e Watabi è stata sempre disponibile ad aiutarci. Un servizio che va oltre le aspettative.",
      image:
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&q=80',
      highlight: 'Flessibilità totale',
    },
  ];

  constructor(private router: Router) {}

  navigateToReviews() {
    this.router.navigate(['/recensioni']);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
