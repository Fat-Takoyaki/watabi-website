import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

@Component({
  selector: 'app-why-custom-watabi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-custom-watabi.html',
  styleUrls: ['./why-custom-watabi.scss'],
})
export class WhyCustomWatabi {
  benefits: Benefit[] = [
    {
      icon: 'pi-palette',
      title: 'Personalizzazione Totale',
      description:
        'Ritmi, tappe, interessi, durata e budget: ogni aspetto del viaggio nasce dal dialogo con te. Non esistono vincoli predefiniti, solo la tua visione del Giappone perfetto.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: 'pi-globe',
      title: 'Esperienza Diretta sul Territorio',
      description:
        'Il nostro team vive in Giappone e conosce il paese da dentro. Non ci limitiamo a prenotare: selezioniamo ogni esperienza personalmente, con rapporti diretti con strutture e fornitori locali.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: 'pi-comments',
      title: 'Supporto in Italiano H24',
      description:
        'Prima, durante e dopo il viaggio. Un punto di riferimento costante nella tua lingua, raggiungibile via WhatsApp in ogni momento. La sicurezza di non essere mai soli.',
      gradient: 'from-teal-500 to-teal-700',
    },
    {
      icon: 'pi-verified',
      title: 'Affidabilità Concreta',
      description:
        'Itinerari ottimizzati con la nostra app di viaggio dedicata, prenotazioni garantite anche in alta stagione, e assistenza immediata per qualsiasi imprevisto.',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: 'pi-compass',
      title: 'Libertà Organizzata',
      description:
        'Viaggi in autonomia con la tranquillità di avere tutto organizzato. Niente tour di gruppo, niente orari rigidi: solo tu, il Giappone e il nostro supporto quando serve.',
      gradient: 'from-orange-500 to-orange-700',
    },
  ];
}
