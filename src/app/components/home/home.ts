import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Tours } from "../tours/tours";
import { Hero } from "./sections/hero/hero";
import { JapanExperience } from "./sections/japan-experience/japan-experience";
import { Watabi } from "./sections/watabi/watabi";
import { TravelTypes } from "./sections/travel-type/travel-type";

@Component({
  selector: 'app-home',
  imports: [Header, Tours, Hero, JapanExperience, Watabi, TravelTypes],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {

}
