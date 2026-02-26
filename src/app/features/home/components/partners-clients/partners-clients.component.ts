import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-partners-clients',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="clients" class="py-24 bg-white relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5 z-0"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-7xl">
        <!-- Business Partners -->
        <div class="mb-24">
          <div class="text-center mb-12">
            <div class="flex items-center justify-center gap-3 mb-4">
               <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
               <span class="font-bold uppercase tracking-[0.2em] text-sm text-primary">Our Network</span>
               <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 font-heading">Business <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Partners</span></h2>
          </div>
          <div class="flex flex-wrap justify-center gap-6 items-center">
            <div *ngFor="let partner of partners" class="group relative px-10 py-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div class="absolute inset-0 bg-gradient-to-r from-primary/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="relative z-10 text-xl font-bold text-slate-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-500 transition-colors">{{ partner }}</span>
            </div>
          </div>
        </div>

        <!-- Clients -->
        <div>
          <div class="text-center mb-12">
            <div class="flex items-center justify-center gap-3 mb-4">
               <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
               <span class="font-bold uppercase tracking-[0.2em] text-sm text-primary">Trusted By</span>
               <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 font-heading">Our Esteemed <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Clients</span></h2>
          </div>
          
          <!-- Grid for Clients -->
          <div class="relative overflow-hidden group">
            <div class="flex flex-wrap justify-center gap-4">
               <div *ngFor="let client of clients" class="flex items-center justify-center w-36 h-20 bg-slate-50 border border-slate-100 rounded-xl p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1">
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
