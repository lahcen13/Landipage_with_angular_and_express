import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then(m => m.HomeComponent),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./features/pricing/pricing').then(m => m.PricingComponent),
  },
  {
    path: 'faq',
    loadComponent: () =>
      import('./features/faq/faq').then(m => m.FaqComponent),
  },
  { path: '**', redirectTo: '' },
];
