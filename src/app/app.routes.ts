import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/home/components/about/about.component'; // Optional direct link
import { ServicesComponent } from './features/home/components/services/services.component'; // Optional direct link
import { ContactComponent } from './features/home/components/contact/contact.component'; // Optional direct link

export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about-page.component').then(m => m.AboutPageComponent)
    },
    {
        path: 'services',
        loadComponent: () => import('./features/services/services-page.component').then(m => m.ServicesPageComponent)
    },
    {
        path: 'team',
        loadComponent: () => import('./features/team/team-page.component').then(m => m.TeamPageComponent)
    },
    { path: 'contact', component: HomeComponent },
    {
        path: 'careers',
        loadComponent: () => import('./features/careers/careers.component').then(m => m.CareersComponent)
    },
    { path: '**', redirectTo: '' }
];
