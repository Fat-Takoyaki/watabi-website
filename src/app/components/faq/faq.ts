import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQ {
  question: string;
  answer: string;
  category: 'pratica' | 'sicurezza' | 'cultura' | 'logistica' | 'none';
  icon?: string;
  isOpen?: boolean;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss'],
})
export class Faq {
  selectedCategory: string = 'all';

  categories: FAQCategory[] = [
    { id: 'all', name: 'Tutte', icon: 'pi-list', color: 'slate' },
    {
      id: 'pratica',
      name: 'Info Pratiche',
      icon: 'pi-info-circle',
      color: 'blue',
    },
    { id: 'sicurezza', name: 'Sicurezza', icon: 'pi-shield', color: 'teal' },
    {
      id: 'cultura',
      name: 'Cultura',
      icon: 'pi-question-circle',
      color: 'gold',
    },
    {
      id: 'logistica',
      name: 'Logistica',
      icon: 'pi-map-marker',
      color: 'purple',
    },
    { id: 'none', name: 'WATABI', icon: 'pi-heart', color: 'red' },
  ];

  faqs: FAQ[] = [
    {
      question: 'Cosa significa Watabi?',
      answer:
        'Watabi è un gioco di parole che combina "wa" (和 - armonia in giapponese) con "tabi" (旅 - viaggio), rappresentando il nostro impegno per viaggi armoniosi in Giappone.',
      category: 'none',
      icon: 'pi-heart',
      isOpen: true,
    },
    {
      question: 'Cosa è richiesto per entrare in Giappone?',
      answer:
        "È necessario un passaporto in corso di validità e un biglietto di ritorno al momento dell'ingresso. Non sono richieste vaccinazioni obbligatorie.",
      category: 'pratica',
      icon: 'pi-info-circle',
      isOpen: false,
    },
    {
      question: 'Quale moneta circola in Giappone? Si può pagare con carta?',
      answer:
        'La moneta è lo Yen (¥). Le carte di credito e debito sono sempre più accettate, ma è consigliabile avere contanti per piccoli negozi, templi e alcuni ristoranti tradizionali.',
      category: 'pratica',
      icon: 'pi-info-circle',
      isOpen: false,
    },
    {
      question: 'Si può prelevare con il bancomat in Giappone?',
      answer:
        'Sì, gli ATM dei 7-Eleven e delle poste giapponesi (Japan Post) accettano carte internazionali e sono disponibili 24/7.',
      category: 'pratica',
      icon: 'pi-info-circle',
      isOpen: false,
    },
    {
      question: 'Quali adattatori servono per la corrente?',
      answer:
        'Il Giappone usa prese di tipo A e B (spine piatte americane) con voltaggio 100V. Porta un adattatore universale se i tuoi dispositivi hanno spine europee.',
      category: 'pratica',
      icon: 'pi-info-circle',
      isOpen: false,
    },
    {
      question: "L'acqua è potabile?",
      answer:
        "Sì, l'acqua del rubinetto è sicura e di ottima qualità in tutto il Giappone.",
      category: 'sicurezza',
      icon: 'pi-shield',
      isOpen: false,
    },
    {
      question: 'Viaggiare in Giappone è sicuro?',
      answer:
        'Il Giappone è uno dei paesi più sicuri al mondo, con tassi di criminalità molto bassi. È sicuro anche per viaggiatori soli e donne.',
      category: 'sicurezza',
      icon: 'pi-shield',
      isOpen: false,
    },
    {
      question: 'Come comportarsi in caso di terremoto?',
      answer:
        'Mantieni la calma, proteggiti sotto un tavolo robusto, allontanati da finestre e oggetti che potrebbero cadere. Segui le istruzioni del personale locale e raggiungi le aree di evacuazione indicate.',
      category: 'sicurezza',
      icon: 'pi-shield',
      isOpen: false,
    },
    {
      question: 'In Giappone si parla inglese?',
      answer:
        "Nelle grandi città e nelle zone turistiche l'inglese è abbastanza diffuso. È utile avere un'app di traduzione per situazioni più complesse.",
      category: 'cultura',
      icon: 'pi-question-circle',
      isOpen: false,
    },
    {
      question: 'Qual è la religione principale del Giappone?',
      answer:
        'Le religioni principali sono lo Shintoismo e il Buddhismo, spesso praticate insieme. Molti giapponesi partecipano a rituali di entrambe le tradizioni.',
      category: 'cultura',
      icon: 'pi-question-circle',
      isOpen: false,
    },
    {
      question: 'In Giappone si può fumare per strada?',
      answer:
        'In molte città è vietato fumare per strada, tranne in aree designate. Ci sono multe per chi non rispetta il divieto.',
      category: 'cultura',
      icon: 'pi-question-circle',
      isOpen: false,
    },
    {
      question: 'Come ci si comporta nelle terme giapponesi?',
      answer:
        'Bisogna lavarsi completamente prima di entrare nelle vasche. Non si indossano costumi nelle terme tradizionali. I tatuaggi potrebbero non essere ammessi in alcune strutture.',
      category: 'cultura',
      icon: 'pi-question-circle',
      isOpen: false,
    },
    {
      question: 'Come connettersi a internet in Giappone?',
      answer:
        "Puoi noleggiare un pocket WiFi all'aeroporto o acquistare una SIM card giapponese. Molti hotel e caffè offrono WiFi gratuito.",
      category: 'logistica',
      icon: 'pi-map-marker',
      isOpen: false,
    },
    {
      question: 'Qual è il fuso orario in Giappone?',
      answer:
        "Il Giappone è a UTC+9. Rispetto all'Italia ci sono +8 ore in inverno e +7 ore in estate (quando in Italia è in vigore l'ora legale).",
      category: 'logistica',
      icon: 'pi-map-marker',
      isOpen: false,
    },
    {
      question: 'Si può viaggiare con bambini in Giappone?',
      answer:
        'Assolutamente sì! Il Giappone è molto family-friendly con strutture adatte ai bambini, trasporti accessibili e un ambiente sicuro.',
      category: 'logistica',
      icon: 'pi-map-marker',
      isOpen: false,
    },
  ];

  get filteredFaqs(): FAQ[] {
    if (this.selectedCategory === 'all') {
      return this.faqs;
    }
    return this.faqs.filter((faq) => faq.category === this.selectedCategory);
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  toggleFaq(faq: FAQ): void {
    // Se clicco sulla FAQ "Watabi" (none), non fare nulla
    if (faq.category === 'none') {
      return;
    }

    // Se la FAQ che sto aprendo è già aperta, la chiudo
    if (faq.isOpen) {
      faq.isOpen = false;
      return;
    }

    // Chiudi tutte le FAQ tranne "Watabi"
    this.faqs.forEach((f) => {
      if (f.category !== 'none') {
        f.isOpen = false;
      }
    });

    // Apri la FAQ selezionata
    faq.isOpen = true;
  }
  getCategoryColor(categoryId: string): string {
    const colorMap: { [key: string]: string } = {
      red: 'bg-gradient-to-br from-red-500 to-red-700',
      slate: 'bg-gradient-to-br from-slate-500 to-slate-700',
      blue: 'bg-gradient-to-br from-blue-500 to-blue-700',
      teal: 'bg-gradient-to-br from-teal-500 to-teal-700',
      gold: 'bg-gradient-to-br from-yellow-500 to-yellow-700',
      purple: 'bg-gradient-to-br from-purple-500 to-purple-700',
    };

    const category = this.categories.find((c) => c.id === categoryId);
    return category ? colorMap[category.color] : colorMap['slate'];
  }

  getCategoryButtonClass(categoryId: string): string {
    const colorMap: { [key: string]: string } = {
      red: 'bg-gradient-to-br from-red-500 to-red-700 text-white shadow-lg scale-105',
      slate: 'bg-gradient-to-br from-slate-500 to-slate-700 text-white shadow-lg scale-105',
      blue: 'bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg scale-105',
      teal: 'bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-lg scale-105',
      gold: 'bg-gradient-to-br from-yellow-500 to-yellow-700 text-white shadow-lg scale-105',
      purple:
        'bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg scale-105',
    };

    if (this.selectedCategory === categoryId) {
      const category = this.categories.find((c) => c.id === categoryId);
      return category ? colorMap[category.color] : colorMap['slate'];
    }
    return 'bg-white text-slate-700 hover:bg-slate-100 shadow-md hover:shadow-lg';
  }

  getCategoryIconColor(categoryId: string): string {
    const colorMap: { [key: string]: string } = {
      red: 'text-red-600',
      slate: 'text-slate-600',
      blue: 'text-blue-600',
      teal: 'text-teal-600',
      gold: 'text-yellow-600',
      purple: 'text-purple-600',
    };

    const category = this.categories.find((c) => c.id === categoryId);
    return category ? colorMap[category.color] : colorMap['slate'];
  }
}
