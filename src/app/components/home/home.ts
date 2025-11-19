import { Component } from '@angular/core';
import { Header } from "../header/header";
import { Tours } from "../tours/tours";

@Component({
  selector: 'app-home',
  imports: [Header, Tours],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
