import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Extension } from '../../models/extension.model';
import { ExperiencePackage } from '../../models/experience.model';
import { ExperiencesService } from '../../services/experiences.services';import { FormsModule } from '@angular/forms';


interface TourPackage {
  id: string;
  name: string;
  stars: number;
  price: number;
  color: 'teal' | 'gold';
  features: string[];
}

interface Insurance {
  id: string;
  name: string;
  description: string;
  price: number;
  included: boolean;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class Checkout implements OnInit {
  // Stepper
  currentStep = 1;
  totalSteps = 5;

  // Forms
  customerForm!: FormGroup;
  
  // Selections
  selectedPackage: TourPackage | null = null;
  selectedExtension: Extension | null = null;
  selectedExperiences: ExperiencePackage[] = [];
  selectedInsurances: Insurance[] = [];

  // Available options
  availablePackages: TourPackage[] = [];
  availableExperiences: ExperiencePackage[] = [];
  availableExtensions: Extension[] = [];
  availableInsurances: Insurance[] = [];

  // Modals
  showExtensionModal = false;
  showExperienceModal = false;
  activeExtensionTab: 'mare' | 'citta' = 'mare';

  // State
  isSubmitting = false;
  additionalNotes = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private experiencesService: ExperiencesService
  ) {}

  ngOnInit(): void {
    this.initForms();
    this.loadData();
  }

  initForms(): void {
    this.customerForm = this.fb.group({
      // Dati Cliente
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]+$/)]],
      
      // Preferenze Contatto
      contactPhone: [false],
      contactWhatsapp: [false],
      
      // Viaggiatori
      adults: [2, [Validators.required, Validators.min(1)]],
      children6to11: [0, Validators.required],
      children2to5: [0, Validators.required],
      infants: [0, Validators.required],
      
      // Data Partenza
      departureDate: ['', Validators.required],
      flexibleDates: ['no', Validators.required],
      
      // Volo
      includeFlight: ['no', Validators.required],
      departureAirport: ['']
    });
  }

  loadData(): void {
    // Carica pacchetti
    this.availablePackages = [
      {
        id: 'tre-stelle',
        name: 'TRE STELLE',
        stars: 3,
        price: 2290,
        color: 'teal',
        features: [
          'Hotel Categoria Standard',
          'Accoglienza e transfer in treno',
          'Assicurazione Medico-Bagaglio',
          'Itinerario day by day su Smartphone',
          'Router Pocket WiFi',
          'Treni JR lunga percorrenza 2a classe'
        ]
      },
      {
        id: 'quattro-stelle',
        name: 'QUATTRO STELLE',
        stars: 4,
        price: 2690,
        color: 'gold',
        features: [
          'Hotel Categoria Superior',
          'Accoglienza e transfer in treno',
          'Assicurazione Medico-Bagaglio',
          'Itinerario day by day su Smartphone',
          'Router Pocket WiFi',
          'Treni JR lunga percorrenza 2a classe',
          'Welcome Kit',
          'Supporto 24/7 in italiano'
        ]
      }
    ];

    // Carica esperienze
    this.availableExperiences = this.experiencesService.getAllExperiences();

    // Carica estensioni
    this.loadExtensions();

    // Carica assicurazioni
    this.availableInsurances = [
      {
        id: 'base',
        name: 'Medico-Bagaglio Base',
        description: 'Copertura medica e bagaglio standard',
        price: 0,
        included: true
      },
      {
        id: 'premium',
        name: 'Aumento Massimale',
        description: 'Massimale medico aumentato a €50.000',
        price: 45,
        included: false
      },
      {
        id: 'cancellation',
        name: 'Assicurazione Annullamento',
        description: 'Rimborso in caso di annullamento viaggio',
        price: 89,
        included: false
      }
    ];

    // Seleziona assicurazione base di default
    this.selectedInsurances = [this.availableInsurances[0]];
  }

  loadExtensions(): void {
    this.availableExtensions = [
      {
        id: 'maldive',
        name: 'Maldive',
        destination: 'Maldive',
        type: 'mare',
        nights: 5,
        priceFrom: 1500,
        availableMonths: [1, 2, 3, 10, 11, 12],
        image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
        description: 'Rilassati in paradiso dopo il tour in Giappone',
        features: ['Resort 5 stelle', 'Pensione completa', 'Snorkeling incluso'],
        icon: 'pi-sun',
        highlights: ['Acque cristalline', 'Barriera corallina', 'Spa luxury']
      },
      {
        id: 'bali',
        name: 'Bali',
        destination: 'Bali, Indonesia',
        type: 'mare',
        nights: 6,
        priceFrom: 1200,
        availableMonths: [4, 5, 6, 7, 8, 9],
        image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
        description: 'Scopri l\'isola degli dei',
        features: ['Resort 4-5 stelle', 'Colazione inclusa', 'Tour Ubud'],
        icon: 'pi-sun',
        highlights: ['Templi balinesi', 'Risaie terrazzate', 'Beach club']
      },
      {
        id: 'dubai',
        name: 'Dubai',
        destination: 'Dubai, UAE',
        type: 'citta',
        nights: 4,
        priceFrom: 1300,
        availableMonths: [10, 11, 12, 1, 2, 3, 4],
        image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
        description: 'Lusso e modernità',
        features: ['Hotel 5 stelle', 'Desert safari', 'Burj Khalifa'],
        icon: 'pi-building',
        highlights: ['Grattacieli iconici', 'Shopping luxury', 'Deserto']
      },
      {
        id: 'singapore',
        name: 'Singapore',
        destination: 'Singapore',
        type: 'citta',
        nights: 3,
        priceFrom: 900,
        availableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80',
        description: 'La città giardino del futuro',
        features: ['Hotel centrale', 'Gardens by the Bay', 'Marina Bay Sands'],
        icon: 'pi-building',
        highlights: ['Architettura futuristica', 'Street food', 'Multiculturale']
      }
    ];
  }

  // Stepper Navigation
  nextStep(): void {
    if (this.canProceed()) {
      this.currentStep++;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  goToStep(step: number): void {
    if (step <= this.currentStep || this.isStepCompleted(step - 1)) {
      this.currentStep = step;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  canProceed(): boolean {
    switch (this.currentStep) {
      case 1:
        return this.customerForm.valid;
      case 2:
        return this.selectedPackage !== null;
      case 3:
        return true; // Esperienze/estensioni opzionali
      case 4:
        return true; // Assicurazioni (base già selezionata)
      case 5:
        return true; // Riepilogo
      default:
        return false;
    }
  }

  isStepCompleted(step: number): boolean {
    switch (step) {
      case 1:
        return this.customerForm.valid;
      case 2:
        return this.selectedPackage !== null;
      case 3:
        return true;
      case 4:
        return true;
      default:
        return false;
    }
  }

  // Package Selection
  selectPackage(pkg: TourPackage): void {
    this.selectedPackage = pkg;
  }

  // Extension Management
  toggleExtension(extension: Extension): void {
    if (this.selectedExtension?.id === extension.id) {
      this.selectedExtension = null;
    } else {
      this.selectedExtension = extension;
    }
  }

  isExtensionSelected(extensionId: string): boolean {
    return this.selectedExtension?.id === extensionId;
  }

  removeExtension(): void {
    this.selectedExtension = null;
  }

  get mareExtensions(): Extension[] {
    return this.availableExtensions.filter(ext => ext.type === 'mare');
  }

  get cittaExtensions(): Extension[] {
    return this.availableExtensions.filter(ext => ext.type === 'citta');
  }

  // Experience Management
  toggleExperience(experience: ExperiencePackage): void {
    const index = this.selectedExperiences.findIndex(e => e.id === experience.id);
    if (index > -1) {
      this.selectedExperiences.splice(index, 1);
    } else {
      this.selectedExperiences.push(experience);
    }
  }

  isExperienceSelected(experienceId: string): boolean {
    return this.selectedExperiences.some(e => e.id === experienceId);
  }

  removeExperience(experienceId: string): void {
    this.selectedExperiences = this.selectedExperiences.filter(e => e.id !== experienceId);
  }

  // Insurance Management
  toggleInsurance(insurance: Insurance): void {
    if (insurance.included) return; // Non puoi deselezionare quella base
    
    const index = this.selectedInsurances.findIndex(i => i.id === insurance.id);
    if (index > -1) {
      this.selectedInsurances.splice(index, 1);
    } else {
      this.selectedInsurances.push(insurance);
    }
  }

  isInsuranceSelected(insuranceId: string): boolean {
    return this.selectedInsurances.some(i => i.id === insuranceId);
  }

  // Price Calculations
  getTotalTravelers(): number {
    const form = this.customerForm.value;
    return form.adults + form.children6to11 + form.children2to5 + form.infants;
  }

  getPackageTotal(): number {
    if (!this.selectedPackage) return 0;
    return this.selectedPackage.price * this.getTotalTravelers();
  }

  getExtensionTotal(): number {
    if (!this.selectedExtension) return 0;
    return this.selectedExtension.priceFrom * this.getTotalTravelers();
  }

  getExperiencesTotal(): number {
    return this.selectedExperiences.reduce((sum, exp) => {
      return sum + (exp.price * this.getTotalTravelers());
    }, 0);
  }

  getInsurancesTotal(): number {
    return this.selectedInsurances.reduce((sum, ins) => {
      return sum + (ins.price * this.getTotalTravelers());
    }, 0);
  }

  calculateTotalPrice(): number {
    return this.getPackageTotal() + 
           this.getExtensionTotal() + 
           this.getExperiencesTotal() + 
           this.getInsurancesTotal();
  }

  // Submit
  async submitQuoteRequest(): Promise<void> {
    if (!this.canProceed()) return;

    this.isSubmitting = true;

    const quoteRequest = {
      customer: this.customerForm.value,
      package: this.selectedPackage,
      extension: this.selectedExtension,
      experiences: this.selectedExperiences,
      insurances: this.selectedInsurances,
      totalPrice: this.calculateTotalPrice(),
      totalTravelers: this.getTotalTravelers(),
      additionalNotes: this.additionalNotes,
      timestamp: new Date().toISOString(),
    };

    try {
      await this.mockApiCall(quoteRequest);
      this.router.navigate(['/quote-confirmation'], {
        state: { quoteRequest }
      });
    } catch (error) {
      console.error('Errore invio preventivo:', error);
      alert('Si è verificato un errore. Riprova più tardi.');
    } finally {
      this.isSubmitting = false;
    }
  }

  private mockApiCall(data: any): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Quote Request Sent:', data);
        resolve();
      }, 1500);
    });
  }

  getStarsArray(count: number): number[] {
    return Array(count).fill(0);
  }
}