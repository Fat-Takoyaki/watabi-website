import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Tours } from "../tours/tours";
import { Hero } from "./sections/hero/hero";
import { JapanExperience } from "./sections/japan-experience/japan-experience";
import { Watabi } from "./sections/watabi/watabi";
import { TravelTypes } from "./sections/travel-type/travel-type";
import { BestPeriod } from "./sections/best-period/best-period";
import { Destinations } from "./sections/destinations/destinations";
import { Faq } from "../faq/faq";
import { WhoIsWatabi } from "../japan-travel/sectionts/who-is-watabi/who-is-watabi";

@Component({
  selector: 'app-home',
  imports: [Header, Tours, JapanExperience, TravelTypes, BestPeriod, Destinations, Faq, WhoIsWatabi],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {

}
