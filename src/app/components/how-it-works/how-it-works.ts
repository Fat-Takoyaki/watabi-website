import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WorkflowStep {
  number: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
  gradient: string;
}

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.html',
  styleUrls: ['./how-it-works.scss'],
})
export class HowItWorks {
  steps: WorkflowStep[] = [
    {
      number: '01',
      title: 'Contatto e Ascolto',
      description:
        "Raccontaci il tuo sogno giapponese: interessi, aspettative, budget e necessità. Ogni viaggio inizia dall'ascolto.",
      icon: 'pi-comments',
      details: [
        'Compila il form o contattaci direttamente',
        'Parliamo al telefono o via email, come preferisci',
        'Ti facciamo domande per capire il tuo stile di viaggio',
        'Nessun impegno in questa fase',
      ],
      gradient: 'from-blue-500 to-blue-700',
    },
    {
      number: '02',
      title: 'Progettazione Condivisa',
      description:
        'Il tuo consulente Watabi crea una prima proposta di itinerario personalizzato, che discutiamo e perfezioniamo insieme.',
      icon: 'pi-map',
      details: [
        'Ricevi una proposta dettagliata entro 3-5 giorni',
        'Include tappe, alloggi, esperienze e preventivo completo',
        'Modifiche illimitate fino alla tua piena soddisfazione',
        'Consigli su periodo migliore e ottimizzazioni',
      ],
      gradient: 'from-purple-500 to-purple-700',
    },
    {
      number: '03',
      title: 'Conferma e Finalizzazione',
      description:
        "Una volta approvato l'itinerario, procediamo con le prenotazioni e ti prepariamo per la partenza.",
      icon: 'pi-check-circle',
      details: [
        'Prenotazione di tutti gli alloggi e esperienze',
        'Acquisto biglietti ferroviari',
        'Invio documentazione e informazioni pre-partenza',
        'Supporto per voli, assicurazioni e servizi extra',
      ],
      gradient: 'from-green-500 to-green-700',
    },
    {
      number: '04',
      title: "L'App Navi",
      description:
        'Ricevi la nostra app di viaggio dedicata con tutto ciò che ti serve: itinerario dettagliato, mappe offline e suggerimenti.',
      icon: 'pi-mobile',
      details: [
        'Itinerario giorno per giorno con orari e indicazioni',
        'Mappe offline di tutte le città',
        'Indirizzi in giapponese per taxi e ristoranti',
        'Suggerimenti su cosa vedere nelle vicinanze',
      ],
      gradient: 'from-orange-500 to-orange-700',
    },
    {
      number: '05',
      title: 'Assistenza Prima, Durante e Dopo',
      description:
        'Non sei mai solo: supporto WhatsApp H24 in italiano per qualsiasi necessità, imprevisto o semplice consiglio.',
      icon: 'pi-headphones',
      details: [
        'WhatsApp dedicato attivo 24/7 durante il viaggio',
        'Gestione immediata di imprevisti e modifiche',
        'Consigli in tempo reale su ristoranti e attività',
        'Supporto post-viaggio per feedback e futuri viaggi',
      ],
      gradient: 'from-red-500 to-red-700',
    },
  ];

  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
