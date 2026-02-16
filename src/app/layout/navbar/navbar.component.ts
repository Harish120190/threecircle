import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <nav
      class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-secondary border-b border-gray-800"
    >
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex items-center justify-between h-20">
          <!-- Logo -->
          <a routerLink="/" class="flex items-center gap-3 group">
            <div class="w-10 h-10 relative flex items-center justify-center bg-white rounded-full p-1">
               <!-- Simple Circle Logo Representation -->
              <div class="absolute w-5 h-5 rounded-full border-2 border-primary translate-x-[-3px]"></div>
              <div class="absolute w-5 h-5 rounded-full border-2 border-primary translate-x-[3px]"></div>
              <div class="absolute w-5 h-5 rounded-full border-2 border-primary translate-y-[4px]"></div>
            </div>
            <div class="flex flex-col">
              <span class="text-lg font-bold tracking-tighter text-white leading-none">THREE CIRCLES</span>
              <span class="text-[10px] font-medium tracking-widest text-primary leading-none mt-0.5">INTERNATIONAL</span>
            </div>
          </a>

          <!-- Desktop Menu -->
          <div class="hidden lg:flex items-center gap-10">
            <a *ngFor="let link of navLinks" 
               [routerLink]="link.path" 
               routerLinkActive="text-primary border-b-2 border-primary"
               [routerLinkActiveOptions]="{exact: link.path === '/'}"
               class="text-xs font-bold uppercase tracking-widest text-white hover:text-primary transition-colors py-2"
            >
              {{ link.name }}
            </a>
          </div>

          <!-- CTA Buttons -->
          <div class="hidden lg:flex items-center gap-0">
             <a href="#contact" class="btn bg-primary text-white border-none hover:bg-orange-600 h-20 px-8 flex items-center font-bold text-sm tracking-wider uppercase">
               Contact Us
             </a>
          </div>

          <!-- Mobile Menu Button -->
          <button (click)="toggleMobileMenu()" class="lg:hidden p-2 text-white hover:text-primary transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div *ngIf="isMobileMenuOpen()" class="lg:hidden absolute top-20 left-0 w-full bg-secondary border-b border-gray-800 shadow-xl p-0 flex flex-col animate-fade-in-down">
        <a *ngFor="let link of navLinks" 
           [routerLink]="link.path" 
           (click)="closeMobileMenu()"
           routerLinkActive="text-primary bg-slate-900"
           [routerLinkActiveOptions]="{exact: link.path === '/'}"
           class="block px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:text-primary hover:bg-slate-900 transition-all border-b border-gray-800"
        >
          {{ link.name }}
        </a>
        <a href="#contact" (click)="closeMobileMenu()" class="block px-8 py-4 text-sm font-bold uppercase tracking-wider text-white bg-primary hover:bg-orange-600 transition-all">
            Contact Us
        </a>
      </div>
    </nav>
  `,
  styles: [`
    .animate-fade-in-down {
      animation: fadeInDown 0.3s ease-out forwards;
    }
    @keyframes fadeInDown {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class NavbarComponent {
  isMobileMenuOpen = signal(false);

  navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Careers', path: '/careers' },
    { name: 'Team', path: '/team' },
  ];

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  closeMobileMenu() {
    this.isMobileMenuOpen.set(false);
  }
}
