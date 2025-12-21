import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroJapanTravel } from "./sectionts/hero-japan-travel/hero-japan-travel";
import { IntroJapanTravel } from "./sectionts/intro-japan-travel/intro-japan-travel";
import { SeasonsJapanTravel } from "./sectionts/seasons-japan-travel/seasons-japan-travel";
import { ShoppingJapanTravel } from "./sectionts/shopping-japan-travel/shopping-japan-travel";
import { DestinationsJapanTravel } from "./sectionts/destinations-japan-travel/destinations-japan-travel";
import { PrepareJapanTravel } from "./sectionts/prepare-japan-travel/prepare-japan-travel";
import { Faq } from "../faq/faq";
import { CtaJapanTravel } from "./sectionts/cta-japan-travel/cta-japan-travel";
import { TravelTypes } from "../home/sections/travel-type/travel-type";

@Component({
  selector: 'app-japan-travel',
  standalone: true,
  imports: [
    CommonModule,
    HeroJapanTravel,
    IntroJapanTravel,
    SeasonsJapanTravel,
    ShoppingJapanTravel,
    DestinationsJapanTravel,
    PrepareJapanTravel,
    Faq,
    CtaJapanTravel,
    TravelTypes
],
  templateUrl: './japan-travel.html',
  styleUrls: ['./japan-travel.scss']
})
export class JapanTravel {
  constructor() {}
}