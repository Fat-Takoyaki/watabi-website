import { Injectable } from '@angular/core';
import { Extension } from '../models/extension.model';

@Injectable({
  providedIn: 'root',
})
export class ExtensionsService {
  private extensions: Extension[] = [
    {
      id: 'maldive',
      name: 'Maldive',
      destination: 'Maldive',
      type: 'mare',
      nights: 5,
      priceFrom: 1500,
      availableMonths: [1, 2, 3, 10, 11, 12], // Stagione secca
      image:
        'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
      description: 'Rilassati in paradiso dopo il tour in Giappone',
      features: ['Resort 5 stelle', 'Pensione completa', 'Snorkeling incluso'],
      icon: 'pi-sun',
      highlights: ['Acque cristalline', 'Barriera corallina', 'Spa luxury'],
    },
    {
      id: 'bali',
      name: 'Bali',
      destination: 'Bali, Indonesia',
      type: 'mare',
      nights: 6,
      priceFrom: 1200,
      availableMonths: [4, 5, 6, 7, 8, 9], // Stagione secca
      image:
        'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      description: "Scopri l'isola degli dei dopo il Giappone",
      features: ['Resort 4-5 stelle', 'Colazione inclusa', 'Tour Ubud'],
      icon: 'pi-sun',
      highlights: ['Templi balinesi', 'Risaie terrazzate', 'Beach club'],
    },
    {
      id: 'okinawa',
      name: 'Okinawa',
      destination: 'Okinawa, Giappone',
      type: 'mare',
      nights: 4,
      priceFrom: 800,
      availableMonths: [4, 5, 6, 7, 8, 9, 10],
      image:
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      description: 'Le spiagge tropicali del Giappone',
      features: ['Hotel fronte mare', 'Snorkeling', 'Cultura Ryukyu'],
      icon: 'pi-sun',
      highlights: ['Spiagge tropicali', 'Cultura unica', 'Cucina locale'],
    },
    {
      id: 'thailandia',
      name: 'Thailandia',
      destination: 'Phuket/Krabi, Thailandia',
      type: 'mare',
      nights: 6,
      priceFrom: 1100,
      availableMonths: [11, 12, 1, 2, 3, 4],
      image:
        'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?w=800&q=80',
      description: 'Mare e cultura thailandese',
      features: ['Resort 4 stelle', 'Colazione', 'Island hopping'],
      icon: 'pi-sun',
      highlights: ['Spiagge paradisiache', 'Templi buddhisti', 'Cucina thai'],
    },
    {
      id: 'dubai',
      name: 'Dubai',
      destination: 'Dubai, UAE',
      type: 'citta',
      nights: 4,
      priceFrom: 1300,
      availableMonths: [10, 11, 12, 1, 2, 3, 4], // Evita estate
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
      description: 'Lusso e modernità negli Emirati',
      features: ['Hotel 5 stelle', 'Desert safari', 'Burj Khalifa'],
      icon: 'pi-building',
      highlights: ['Grattacieli iconici', 'Shopping luxury', 'Deserto'],
    },
    {
      id: 'singapore',
      name: 'Singapore',
      destination: 'Singapore',
      type: 'citta',
      nights: 3,
      priceFrom: 900,
      availableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      image:
        'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
      description: 'La città giardino del futuro',
      features: ['Hotel centrale', 'Gardens by the Bay', 'Marina Bay Sands'],
      icon: 'pi-building',
      highlights: ['Architettura futuristica', 'Street food', 'Multiculturale'],
    },
  ];

  getAllExtensions(): Extension[] {
    return this.extensions;
  }

  getExtensionById(id: string): Extension | undefined {
    return this.extensions.find((ext) => ext.id === id);
  }

  getExtensionsByIds(ids: string[]): Extension[] {
    return this.extensions.filter((ext) => ids.includes(ext.id));
  }

  getExtensionsByType(type: 'mare' | 'citta' | 'natura'): Extension[] {
    return this.extensions.filter((ext) => ext.type === type);
  }

  isExtensionAvailable(extensionId: string, month?: number): boolean {
    const extension = this.getExtensionById(extensionId);
    if (!extension) return false;
    if (!month) return true;
    return extension.availableMonths.includes(month);
  }

  getAvailableExtensionsForTour(
    tourExtensionIds: string[],
    month?: number
  ): Extension[] {
    const extensions = this.getExtensionsByIds(tourExtensionIds);
    if (!month) return extensions;
    return extensions.filter((ext) => ext.availableMonths.includes(month));
  }
}
