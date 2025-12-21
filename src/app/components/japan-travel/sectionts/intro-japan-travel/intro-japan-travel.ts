import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface USPCard {
  icon: string;
  title: string;
  description: string;
  gradient: string;
}

@Component({
  selector: 'app-intro-japan-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro-japan-travel.html',
  styleUrls: ['./intro-japan-travel.scss'],
})
export class IntroJapanTravel {
  uspCards: USPCard[] = [
    {
      icon: 'pi-palette',
      title: 'Personalizzazione Totale',
      description:
        'Ogni aspetto del viaggio nasce dal dialogo con te: ritmi, tappe, interessi e budget secondo la tua visione del Giappone perfetto.',
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      icon: 'pi-globe',
      title: 'Esperienza sul Territorio',
      description:
        'Il nostro team vive in Giappone e conosce il paese da dentro, con rapporti diretti con strutture e fornitori locali.',
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      icon: 'pi-comments',
      title: 'Supporto in Italiano H24',
      description:
        'Assistenza WhatsApp costante nella tua lingua, prima, durante e dopo il viaggio. Non sarai mai solo.',
      gradient: 'from-teal-500 to-teal-700',
    },
    {
      icon: 'pi-verified',
      title: 'Affidabilità Concreta',
      description:
        'App di viaggio dedicata, prenotazioni garantite anche in alta stagione e gestione immediata degli imprevisti.',
      gradient: 'from-green-500 to-green-700',
    },
    {
      icon: 'pi-compass',
      title: 'Libertà Organizzata',
      description:
        'Viaggi in autonomia con tutto organizzato. Niente tour di gruppo, niente orari rigidi: solo libertà con supporto.',
      gradient: 'from-orange-500 to-orange-700',
    },
  ];
}
