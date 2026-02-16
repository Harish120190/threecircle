import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="py-20 bg-slate-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="text-center mb-16">
          <h4 class="text-primary font-bold uppercase tracking-wider mb-2">Meet Our Experts</h4>
          <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-4">The Team Behind Your Success</h2>
          <p class="text-slate-500 max-w-2xl mx-auto">Our diverse team of professionals brings decades of combined experience to deliver exceptional results.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div *ngFor="let member of team" class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
            <div class="relative h-64 overflow-hidden">
              <img 
                [src]="member.image" 
                [alt]="member.name" 
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <div class="flex gap-4">
                  <a href="#" class="text-white hover:text-primary transition-colors"><i class="fab fa-linkedin"></i></a>
                  <a href="#" class="text-white hover:text-primary transition-colors"><i class="fas fa-envelope"></i></a>
                </div>
              </div>
            </div>
            <div class="p-6 text-center">
              <h3 class="text-lg font-bold text-secondary mb-1">{{ member.name }}</h3>
              <p class="text-primary text-sm font-medium">{{ member.role }}</p>
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
