import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface InfoCard {
  icon: string;
  title: string;
  items: InfoItem[];
  gradient: string;
}

interface InfoItem {
  label: string;
  value: string;
  highlight?: boolean;
}

interface TransportOption {
  icon: string;
  name: string;
  description: string;
  cost: string;
}

@Component({
  selector: 'app-info-japan-travel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-japan-travel.html',
  styleUrls: ['./info-japan-travel.scss']
})
export class InfoJapanTravel {
  travelInfo: InfoCard[] = [
    {
      icon: 'pi-send',
      title: 'Come Andare',
      gradient: 'from-blue-500 to-indigo-600',
      items: [
        { label: 'Documenti', value: 'Passaporto valido + biglietto di ritorno' },
        { label: 'Voli diretti', value: 'ITA Airways (Roma-Tokyo), ANA (Milano-Tokyo)' },
        { label: 'Durata volo', value: '12-14 ore (volo diretto)' },
        { label: 'Aeroporti principali', value: 'Tokyo (Narita/Haneda), Osaka (Kansai)' },
        { label: 'Prenotazione consigliata', value: '6-9 mesi in anticipo (alta stagione)' }
      ]
    },
    {
      icon: 'pi-wallet',
      title: 'Quanto Costa',
      gradient: 'from-green-500 to-emerald-600',
      items: [
        { label: 'Volo', value: '€650-1200 (media €900-1000)', highlight: true },
        { label: 'Pranzi', value: '€5-10 a pasto' },
        { label: 'Cene', value: '€25-40 (ristoranti standard)' },
        { label: 'Metro/Treni locali', value: '€1,50-10 per corsa' },
        { label: 'Ingressi attrazioni', value: '€3-10 (molti templi gratuiti)' },
        { label: 'Budget giornaliero stimato', value: '€40-80 al giorno', highlight: true }
      ]
    }
  ];

  transportOptions: TransportOption[] = [
    {
      icon: 'pi-bolt',
      name: 'Shinkansen',
      description: 'Treni ad alta velocità che collegano le principali città con puntualità estrema',
      cost: 'Variabile (JR Pass disponibile)'
    },
    {
      icon: 'pi-map',
      name: 'Metro',
      description: 'Sistema metropolitano efficiente in città come Tokyo, Osaka e Kyoto',
      cost: 'Economico (€1,50-3)'
    },
    {
      icon: 'pi-car',
      name: 'Taxi',
      description: 'Comodi per brevi distanze, specialmente a Kyoto. Costosi per lunghe tratte',
      cost: 'Costoso'
    },
    {
      icon: 'pi-verified',
      name: 'Autobus',
      description: 'Coprono aree urbane e rurali. Affollati a Kyoto durante l\'alta stagione',
      cost: 'Economico'
    },
    {
      icon: 'pi-compass',
      name: 'Noleggio Auto',
      description: 'Ideale per aree remote. Richiede patente internazionale',
      cost: 'Medio-Alto'
    },
    {
      icon: 'pi-sun',
      name: 'Bicicletta',
      description: 'Perfetta per esplorare città come Kyoto. Noleggio presso stazioni e negozi',
      cost: 'Economico'
    }
  ];
}