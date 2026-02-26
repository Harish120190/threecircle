import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- Decorative Elements -->
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="flex items-center justify-center gap-3 mb-4">
               <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
               <span class="font-bold uppercase tracking-[0.2em] text-sm text-primary">Meet Our Experts</span>
               <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            The Team Behind <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Your Success</span>
          </h2>
          <p class="text-slate-600 text-lg leading-relaxed">
             Our diverse team of professionals brings decades of combined experience to deliver exceptional results.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div *ngFor="let member of team" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border border-slate-100 transform hover:-translate-y-2">
            <div class="relative h-72 overflow-hidden">
              <img 
                [src]="member.image" 
                [alt]="member.name" 
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <!-- Gradient Overlay on Hover -->
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                <div class="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <a href="#" class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors border border-white/30"><i class="fab fa-linkedin-in"></i></a>
                  <a href="#" class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors border border-white/30"><i class="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
            
            <div class="p-6 text-center relative">
              <!-- Decorative Line -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full transform -translate-y-1/2 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              
              <h3 class="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors font-heading">{{ member.name }}</h3>
              <p class="text-slate-500 text-sm font-medium uppercase tracking-wider">{{ member.role }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TeamComponent {
  team = [
    { name: 'Vandana', role: 'Senior Consultant', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Tavish', role: 'Recruitment Manager', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Preet', role: 'HR Specialist', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Mayank', role: 'Business Development', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Juile', role: 'Talent Acquisition', image: 'https://images.unsplash.com/photo-1598550874175-4d7112ee7f1c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Leela', role: 'Operations Head', image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
    { name: 'Yousuf', role: 'Regional Manager', image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80' },
  ];
}
