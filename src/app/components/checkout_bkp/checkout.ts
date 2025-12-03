import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Extension } from '../../models/extension.model';
import { ExperiencePackage } from '../../models/experience.model';
import { ExperiencesService } from '../../services/experiences.services';

interface TourPackage {
  name: string;
  stars: number;
  price: number;
  color: 'teal' | 'gold';
}

interface CheckoutData {
  tourId: string;
  tourTitle: string;
  tourPackage: TourPackage;
  selectedExtension: Extension | null;
  selectedExperiences: ExperiencePackage[];
}

interface Participant {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phone: string;
}

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss'],
})
export class Checkout implements OnInit {
  checkoutForm!: FormGroup;
  checkoutData: CheckoutData | null = null;

  availableExperiences: ExperiencePackage[] = [];
  selectedExperiences: ExperiencePackage[] = [];

  availableExtensions: Extension[] = [];
  selectedExtension: Extension | null = null;

  showExperienceModal = false;
  showExtensionModal = false;
  activeExtensionTab: 'mare' | 'citta' = 'mare';
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private experiencesService: ExperiencesService
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.checkoutData = navigation.extras.state as CheckoutData;
    }
  }

  ngOnInit(): void {
    // Mock data per testing se non arriva da navigazione
    if (!this.checkoutData) {
      this.checkoutData = this.getMockCheckoutData();
    }

    this.initForm();
    this.loadExperiences();
    this.loadExtensions();

    // Carica estensione selezionata se presente
    if (this.checkoutData?.selectedExtension) {
      this.selectedExtension = this.checkoutData.selectedExtension;
    }

    // Carica esperienze già selezionate se presenti
    if (this.checkoutData?.selectedExperiences?.length) {
      this.selectedExperiences = [...this.checkoutData.selectedExperiences];
    }
  }

  initForm(): void {
    this.checkoutForm = this.fb.group({
      participants: this.fb.array([this.createParticipantForm()]),
    });
  }

  createParticipantForm(): FormGroup {
    return this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      gender: ['', Validators.required],
      fiscalCode: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required],
      country: ['Italia', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+\s()-]+$/)]],
      dateOfBirth: ['', Validators.required],
      documentType: ['passport', Validators.required],
      documentNumber: ['', Validators.required],
      documentExpiry: ['', Validators.required],
    });
  }

  get participants(): FormArray {
    return this.checkoutForm.get('participants') as FormArray;
  }

  addParticipant(): void {
    this.participants.push(this.createParticipantForm());
  }

  removeParticipant(index: number): void {
    if (this.participants.length > 1) {
      this.participants.removeAt(index);
    }
  }

  loadExperiences(): void {
    this.availableExperiences = this.experiencesService.getAllExperiences();
  }

  loadExtensions(): void {
    // Mock estensioni - in futuro da ExtensionsService
    this.availableExtensions = [
      {
        id: 'maldive',
        name: 'Maldive',
        destination: 'Maldive',
        type: 'mare',
        nights: 5,
        priceFrom: 1500,
        availableMonths: [1, 2, 3, 10, 11, 12],
        image:
          'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
        description: 'Rilassati in paradiso dopo il tour in Giappone',
        features: [
          'Resort 5 stelle',
          'Pensione completa',
          'Snorkeling incluso',
        ],
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
        availableMonths: [4, 5, 6, 7, 8, 9],
        image:
          'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
        description: "Scopri l'isola degli dei dopo il Giappone",
        features: ['Resort 4-5 stelle', 'Colazione inclusa', 'Tour Ubud'],
        icon: 'pi-sun',
        highlights: ['Templi balinesi', 'Risaie terrazzate', 'Beach club'],
      },
      {
        id: 'dubai',
        name: 'Dubai',
        destination: 'Dubai, UAE',
        type: 'citta',
        nights: 4,
        priceFrom: 1300,
        availableMonths: [10, 11, 12, 1, 2, 3, 4],
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
        highlights: [
          'Architettura futuristica',
          'Street food',
          'Multiculturale',
        ],
      },
    ];
  }

  toggleExperience(experience: ExperiencePackage): void {
    const index = this.selectedExperiences.findIndex(
      (e) => e.id === experience.id
    );
    if (index > -1) {
      this.selectedExperiences.splice(index, 1);
    } else {
      this.selectedExperiences.push(experience);
    }
  }

  isExperienceSelected(experienceId: string): boolean {
    return this.selectedExperiences.some((e) => e.id === experienceId);
  }

  removeExperience(experienceId: string): void {
    this.selectedExperiences = this.selectedExperiences.filter(
      (e) => e.id !== experienceId
    );
  }

  toggleExtension(extension: Extension): void {
    // Se clicchi sulla stessa estensione, la deseleziona
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
    return this.availableExtensions.filter((ext) => ext.type === 'mare');
  }

  get cittaExtensions(): Extension[] {
    return this.availableExtensions.filter((ext) => ext.type === 'citta');
  }

  calculateTotalPrice(): number {
    if (!this.checkoutData) return 0;

    let total = this.checkoutData.tourPackage.price * this.participants.length;

    if (this.selectedExtension) {
      total += this.selectedExtension.priceFrom * this.participants.length;
    }

    this.selectedExperiences.forEach((exp) => {
      total += exp.price * this.participants.length;
    });

    return total;
  }

  async submitQuoteRequest(): Promise<void> {
    if (this.checkoutForm.invalid) {
      this.markFormGroupTouched(this.checkoutForm);
      return;
    }

    this.isSubmitting = true;

    const quoteRequest = {
      tour: {
        id: this.checkoutData!.tourId,
        title: this.checkoutData!.tourTitle,
        package: this.checkoutData!.tourPackage,
      },
      extension: this.selectedExtension,
      experiences: this.selectedExperiences,
      participants: this.checkoutForm.value.participants,
      totalPrice: this.calculateTotalPrice(),
      timestamp: new Date().toISOString(),
    };

    try {
      // Mock API call - sostituire con vera chiamata HTTP
      await this.mockApiCall(quoteRequest);

      // Redirect alla pagina di conferma
      this.router.navigate(['/quote-confirmation'], {
        state: { quoteRequest },
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

  private markFormGroupTouched(formGroup: FormGroup | FormArray): void {
    Object.keys(formGroup.controls).forEach((key) => {
      const control = formGroup.get(key);
      control?.markAsTouched();

      if (control instanceof FormGroup || control instanceof FormArray) {
        this.markFormGroupTouched(control);
      }
    });
  }

  getStarsArray(count: number): number[] {
    return Array(count).fill(0);
  }

  // Mock data per testing diretto
  private getMockCheckoutData(): CheckoutData {
    return {
      tourId: 'giappone-classico',
      tourTitle: 'Tour Classico del Giappone',
      tourPackage: {
        name: 'QUATTRO STELLE',
        stars: 4,
        price: 2690,
        color: 'gold',
      },
      selectedExtension: {
        id: 'maldive',
        name: 'Maldive',
        destination: 'Maldive',
        type: 'mare',
        nights: 5,
        priceFrom: 1500,
        availableMonths: [1, 2, 3, 10, 11, 12],
        image:
          'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
        description: 'Rilassati in paradiso dopo il tour in Giappone',
        features: [
          'Resort 5 stelle',
          'Pensione completa',
          'Snorkeling incluso',
        ],
        icon: 'pi-sun',
        highlights: ['Acque cristalline', 'Barriera corallina', 'Spa luxury'],
      },
      selectedExperiences: [
        {
          id: 'tea-ceremony',
          name: 'Cerimonia del Tè Tradizionale',
          description:
            "Partecipa a un'autentica cerimonia del tè giapponese condotta da un maestro certificato",
          price: 85,
          duration: '2 ore',
          image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
          category: 'cultura',
          highlights: [
            'Maestro certificato',
            'Kimono tradizionale incluso',
            'Dolci wagashi artigianali',
          ],
          availability: 'alta',
        },
        {
          id: 'sumo-experience',
          name: 'Incontro di Sumo dal Vivo',
          description:
            'Assisti a un emozionante incontro di sumo professionale con posti riservati',
          price: 120,
          duration: '4 ore',
          image:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80',
          category: 'sport',
          highlights: [
            'Posti in arena premium',
            'Guida esperta di sumo',
            'Chanko nabe dinner incluso',
          ],
          availability: 'bassa',
        },
      ],
    };
  }
}
