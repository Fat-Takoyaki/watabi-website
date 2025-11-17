import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Offers } from "../offers/offers";

@Component({
  selector: 'app-home',
  imports: [Header, Offers],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
