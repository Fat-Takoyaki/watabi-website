import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroJapanTravel } from "./sectionts/hero-japan-travel/hero-japan-travel";
import { Tours } from "../tours/tours";
import { IntroJapanTravel } from "./sectionts/intro-japan-travel/intro-japan-travel";
import { SeasonsJapanTravel } from "./sectionts/seasons-japan-travel/seasons-japan-travel";
import { ShoppingJapanTravel } from "./sectionts/shopping-japan-travel/shopping-japan-travel";
import { DestinationsJapanTravel } from "./sectionts/destinations-japan-travel/destinations-japan-travel";
import { PrepareJapanTravel } from "./sectionts/prepare-japan-travel/prepare-japan-travel";
import { InfoJapanTravel } from "./sectionts/info-japan-travel/info-japan-travel";
import { Faq } from "../faq/faq";
import { CtaJapanTravel } from "./sectionts/cta-japan-travel/cta-japan-travel";

@Component({
  selector: 'app-japan-travel',
  standalone: true,
  imports: [
    CommonModule,
    HeroJapanTravel,
    Tours,
    IntroJapanTravel,
    SeasonsJapanTravel,
    ShoppingJapanTravel,
    DestinationsJapanTravel,
    PrepareJapanTravel,
    InfoJapanTravel,
    Faq,
    CtaJapanTravel
],
  templateUrl: './japan-travel.html',
  styleUrls: ['./japan-travel.scss']
})
export class JapanTravel {
  constructor() {}
}