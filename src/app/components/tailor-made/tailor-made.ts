import { Component } from '@angular/core';
import { HeroJapanTravel } from './hero-japan-travel/hero-japan-travel';
import { IntroJapanTravel } from '../japan-travel/sectionts/intro-japan-travel/intro-japan-travel';
import { HowItWorks } from '../japan-travel/sectionts/how-it-works/how-it-works';
import { Tours } from '../tours/tours';
import { WhatsIncluded } from '../japan-travel/sectionts/whats-included/whats-included';
import { Testimonials } from '../japan-travel/sectionts/testimonials/testimonials';
import { InfoJapanTravel } from '../japan-travel/sectionts/info-japan-travel/info-japan-travel';
import { Faq } from '../faq/faq';
import { CtaJapanTravel } from '../japan-travel/sectionts/cta-japan-travel/cta-japan-travel';
import { CustomTravelTypes } from "../japan-travel/sectionts/custom-travel-types/custom-travel-types";
import { SpecialTour } from '../special-tour/special-tour'; 

@Component({
  selector: 'app-tailor-made',
  imports: [
    HeroJapanTravel,
    IntroJapanTravel,
    HowItWorks,
    Tours,
    WhatsIncluded,
    Testimonials,
    InfoJapanTravel,
    Faq,
    CtaJapanTravel,
    CustomTravelTypes,
    SpecialTour
],
  templateUrl: './tailor-made.html',
  styleUrl: './tailor-made.scss',
})
export class TailorMade {}
