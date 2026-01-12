import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirect root to home
  {
    path: '',
    loadComponent: () => import('./components/home/home').then((m) => m.Home),
    pathMatch: 'full',
    data: { title: 'Home - WATABI' },
  },
  {

    path: 'content-editor',
    loadComponent: () => import('./pages/content-editor/content-editor').then((m) => m.ContentEditor),
    data: { title: 'WATABI - Content Editor' },
  },

  // Home page (app.component per ora)
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full',
  },
  // {
  //   path: 'viaggio-su-misura-giappone',
  //   loadComponent: () =>
  //     import('./components/japan-travel/japan-travel').then(
  //       (m) => m.JapanTravel
  //     ),
  //   data: { title: 'Japan Travel - WATABI' },
  // },
  {
    path: 'viaggio-su-misura-giappone',
    loadComponent: () =>
      import('./components/tailor-made/tailor-made').then(
        (m) => m.TailorMade
      ),
    data: { title: 'Tour su Misura - WATABI' },
  },
  {
    path: 'tour-opererator-giappone',
    loadComponent: () =>
      import('./components/tour-operator-japan/tour-operator-japan').then(
        (m) => m.TourOperatorJapan
      ),
    data: { title: 'Tour Operator Giappone - WATABI' },
  },
  // NavBar pages (redirect a home fino a quando non esistono)
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
      import('./components/tours/tour-detail/tour-detail').then(
        (m) => m.TourDetail
      ),
    data: { title: 'Dettaglio Tour - WATABI' },
  },

  // Offer Detail
  {
    path: 'offer/:id',
    loadComponent: () =>
      import('./components/tours/tour-detail/tour-detail').then(
        (m) => m.TourDetail
      ),
    data: { title: 'Offerta - WATABI' },
  },

  // 🆕 Checkout/Preventivo
  {
    path: 'checkout',
    loadComponent: () =>
      import('./components/checkout/checkout').then((m) => m.Checkout),
    data: { title: 'Riepilogo e Preventivo - WATABI' },
  },

  /* Quote Confirmation (dopo invio preventivo)
  {
    path: 'quote-confirmation',
    loadComponent: () =>
      import('./components/checkout/quote-confirmation').then(
        (m) => m.QuoteConfirmation
      ),
    data: { title: 'Preventivo Inviato - WATABI' },
  },*/

  // Quote/Preventivo (redirect a checkout)
  {
    path: 'quote',
    redirectTo: 'checkout',
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
