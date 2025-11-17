import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./nav-bar/nav-bar";
import { Offers } from "./offers/offers";
import { Footer } from "./footer/footer";
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('watabi');
}
