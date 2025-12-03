import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {
  constructor(private router: Router) {}

  scrollToTravelTypes() {
    const element = document.getElementById('travel-types');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}