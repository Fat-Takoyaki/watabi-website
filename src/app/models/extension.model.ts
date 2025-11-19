// Models per il sistema di estensioni

export interface Extension {
  id: string;
  name: string;
  destination: string;
  type: 'mare' | 'citta' | 'natura';
  nights: number;
  priceFrom: number;
  availableMonths: number[]; // 1-12 per validare stagionalità
  image: string;
  description: string;
  features: string[];
  icon: string;
  highlights: string[];
}

export interface Tour {
  id: string;
  title: string;
  category: string;
  features: string[];
  dates?: string;
  departure?: string;
  priceOriginal?: number;
  priceDiscounted?: number;
  priceFrom?: number;
  hasItinerary: boolean;
  ribbon?: {
    text: string;
    color: 'pink' | 'purple' | 'blue' | 'red';
  };
  image: string;
  availableExtensions: string[]; // IDs delle estensioni disponibili
  cities?: string[];
  tags?: string[];
  duration?: string;
}

export interface QuoteRequest {
  tourId: string;
  tourTitle: string;
  packageType?: 'standard' | 'superior';
  selectedExtension?: Extension;
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    travelers: number;
    departureDate?: string;
    notes?: string;
  };
}
