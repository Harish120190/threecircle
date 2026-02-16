import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="clients" class="py-20 bg-white">
      <div class="container mx-auto px-4 md:px-6">
        <!-- Business Partners -->
        <div class="mb-20">
          <div class="text-center mb-12">
            <h4 class="text-primary font-bold uppercase tracking-wider mb-2">Our Network</h4>
            <h2 class="text-3xl md:text-4xl font-bold text-secondary">Business Partners</h2>
          </div>
          <div class="flex flex-wrap justify-center gap-12 items-center grayscale hover:grayscale-0 transition-all duration-500">
            <!-- Placeholders for Partners -->
            <div *ngFor="let partner of partners" class="text-xl font-bold text-slate-400 border border-slate-200 px-8 py-4 rounded-xl hover:border-primary hover:text-primary transition-all">
              {{ partner }}
            </div>
          </div>
        </div>

        <!-- Clients -->
        <div>
          <div class="text-center mb-12">
            <h4 class="text-primary font-bold uppercase tracking-wider mb-2">Trusted By</h4>
            <h2 class="text-3xl md:text-4xl font-bold text-secondary">Our Esteemed Clients</h2>
          </div>
          
          <!-- Marquee / Grid for Clients -->
          <div class="relative overflow-hidden group">
            <div class="flex flex-wrap justify-center gap-x-12 gap-y-8">
               <div *ngFor="let client of clients" class="flex items-center justify-center w-32 h-20 bg-slate-50 rounded-lg p-4 hover:shadow-md transition-shadow">
                 <span class="text-sm font-bold text-slate-600 text-center">{{ client }}</span>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PartnersClientsComponent {
  partners = ['Beard Production', 'Foresight Management', 'Print Oasis', 'IWG'];
  clients = ['Flipkart', 'Spar', 'Regus', 'Landmark', 'Reliance', 'Future Group', 'Walmart', 'Carrefour', 'Lulu', 'Amazon', 'Tesla (mock)', 'Google (mock)'];
}
