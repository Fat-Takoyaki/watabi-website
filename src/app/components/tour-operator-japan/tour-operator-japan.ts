import { Component } from '@angular/core';
import { Header } from '../header/header';
import { WhoIsWatabi } from "../japan-travel/sectionts/who-is-watabi/who-is-watabi";
import { HeroJapanTravel } from "./hero-japan-travel/hero-japan-travel";

@Component({
  selector: 'app-tour-operator-japan',
  imports: [WhoIsWatabi, HeroJapanTravel],
  templateUrl: './tour-operator-japan.html',
  styleUrl: './tour-operator-japan.scss',
})
export class TourOperatorJapan {
  }
