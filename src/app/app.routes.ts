import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to home
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Home page (app.component per ora)
  {
    path: 'home',
    loadComponent: () => import('./home/home').then((m) => m.Home),
    data: { title: 'Home - WATABI' },
  },

  // Navbar pages (redirect a home fino a quando non esistono)
  {
    path: 'japan-travel',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'group-tours',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'special-tours',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'honeymoon',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'fioritura',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'contact',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'tour-operator',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Tour Detail Route 
  {
    path: 'tour/:slug',
    loadComponent: () =>
      import('./offers/tour-detail/tour-detail').then(
        (m) => m.TourDetail
      ),
    data: { title: 'Dettaglio Tour - WATABI' },
  },

  // Offer Detail 
  {
    path: 'offer/:id',
    loadComponent: () =>
      import('./offers/tour-detail/tour-detail').then(
        (m) => m.TourDetail
      ),
    data: { title: 'Offerta - WATABI' },
  },

  // Quote/Preventivo (redirect per ora)
  {
    path: 'quote',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Legal pages (redirect per ora)
  {
    path: 'terms-conditions',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'privacy-policy',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'cookie-policy',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Insurance pages (redirect per ora)
  {
    path: 'insurance-base',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'insurance-cancellation',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'insurance-medical',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Travel Plans (se esiste il componente)
  {
    path: 'travel-plans',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // Individual tours (redirect per ora)
  {
    path: 'individual-tours',
    redirectTo: 'home',
    pathMatch: 'full',
  },

  // 404 Not Found - redirect to home
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
