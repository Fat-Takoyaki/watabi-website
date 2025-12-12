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
  styleUrls: ['./intro-japan-travel.scss']
})
export class IntroJapanTravel {
  uspCards: USPCard[] = [
    {
      icon: 'pi-users',
      title: 'Guide Esperte',
      description: 'Le guide che incontrerete fanno tutte parte della nostra famiglia: vi presenteranno il Giappone in maniera intima e coinvolgente.',
      gradient: 'from-red-watabi to-red-dark'
    },
    {
      icon: 'pi-globe',
      title: 'Uffici in Italia e Giappone',
      description: 'Presenza costante con uffici in entrambi i paesi. Siamo sempre raggiungibili, alla breve distanza di un click.',
      gradient: 'from-blue-500 to-blue-800'
    },
    {
      icon: 'pi-star',
      title: 'Libertà del Viaggiatore',
      description: 'Organizzazione ed efficienza senza vincoli. Definisci i tuoi ritmi, noi pensiamo al resto.',
      gradient: 'from-teal-500 to-teal-600'
    }
  ];
}