import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InclusionItem {
  text: string;
  icon: string;
}

@Component({
  selector: 'app-whats-included',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whats-included.html',
  styleUrls: ['./whats-included.scss'],
})
export class WhatsIncluded {
  included: InclusionItem[] = [
    {
      text: 'Itinerario personalizzato costruito sulle tue esigenze e interessi',
      icon: 'pi-map',
    },
    {
      text: 'App di viaggio Watabi con itinerario dettagliato, mappe offline e suggerimenti',
      icon: 'pi-mobile',
    },
    {
      text: 'Prenotazione di tutti gli alloggi selezionati (hotel, ryokan, appartamenti)',
      icon: 'pi-home',
    },
    {
      text: "Biglietti ferroviari secondo l'itinerario",
      icon: 'pi-directions',
    },
    {
      text: 'Prenotazione di esperienze speciali (es. cene kaiseki, cerimonie del tè, laboratori)',
      icon: 'pi-star',
    },
    {
      text: 'Assistenza WhatsApp in italiano H24 durante tutto il viaggio',
      icon: 'pi-whatsapp',
    },
    {
      text: 'Supporto pre-partenza: consigli su visti, assicurazioni, cosa portare',
      icon: 'pi-info-circle',
    },
    {
      text: "Gestione imprevisti e modifiche dell'itinerario in corso d'opera",
      icon: 'pi-shield',
    },
  ];

  notIncluded: InclusionItem[] = [
    {
      text: "Prenotazione con richiesta di cauzione per ristoranti",
      icon: 'pi-shopping-bag',
    },
    {
      text: 'Ingressi a musei, templi e attrazioni (salvo quelli inclusi nelle esperienze prenotate)',
      icon: 'pi-ticket',
    },
    {
      text: 'Trasporti non previsti nell\'itinerario (taxi, autobus locali, ecc.)',
      icon: 'pi-car',
    },
    {
      text: 'Spese personali e acquisti',
      icon: 'pi-wallet',
    },
  ];

  extraServices: InclusionItem[] = [
    {
      text: 'Guide italiane per tour specifici nelle principali città',
      icon: 'pi-user',
    },
    {
      text: 'Prenotazione voli internazionali e interni',
      icon: 'pi-send',
    },
    {
      text: 'Transfer privati aeroporto-hotel con autista parlante italiano',
      icon: 'pi-car',
    },
    {
      text: 'Noleggio tascabile Wi-Fi portatile per tutta la durata del viaggio',
      icon: 'pi-wifi',
    },
    {
      text: 'Assicurazione viaggio completa con copertura sanitaria e annullamento',
      icon: 'pi-shield',
    },
    {
      text: 'Esperienze esclusive: lezioni di cucina, incontri con artigiani, cerimonie private',
      icon: 'pi-heart',
    },
  ];
}
