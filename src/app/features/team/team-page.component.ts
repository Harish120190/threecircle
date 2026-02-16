import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-team-page',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div class="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div class="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h4 class="text-primary font-bold uppercase tracking-widest text-sm mb-4">The People Behind The Success</h4>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Meet Our Experts</h1>
            <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              A diverse team of professionals united by a passion for connecting talent with opportunity.
            </p>
        </div>
      </section>

      <!-- Leadership Section -->
      <section class="py-24 bg-white">
         <div class="container mx-auto px-4 md:px-8">
            <div class="text-center mb-16">
               <h2 class="text-3xl font-bold text-slate-900">Leadership</h2>
               <div class="h-1 w-20 bg-primary mx-auto mt-4"></div>
            </div>

            <div class="max-w-4xl mx-auto bg-slate-50 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-slate-100">
               <div class="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Shiva Sankar" class="w-full h-full object-cover rounded-full border-4 border-white shadow-lg">
               </div>
               <div class="text-center md:text-left">
                  <h3 class="text-2xl font-bold text-slate-900">Shiva Sankar</h3>
                  <p class="text-primary font-bold tracking-wide uppercase text-sm mb-6">Founder & CEO</p>
                  <p class="text-slate-600 leading-relaxed italic mb-6">
                     "Building Three Circles International has been a journey of passion and purpose. Our team is our greatest asset, and their dedication to our clients' success is what sets us apart."
                  </p>
                  <div class="flex justify-center md:justify-start gap-4">
                     <a href="#" class="text-slate-400 hover:text-primary transition-colors text-xl"><i class="fab fa-linkedin"></i></a>
                     <a href="#" class="text-slate-400 hover:text-primary transition-colors text-xl"><i class="fas fa-envelope"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Team Grid -->
      <section class="py-24 bg-slate-50">
        <div class="container mx-auto px-4 md:px-8">
          <div class="text-center mb-16">
               <h2 class="text-3xl font-bold text-slate-900">Our Core Team</h2>
               <div class="h-1 w-20 bg-primary mx-auto mt-4"></div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let member of team" class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border-t-4 border-transparent hover:border-primary">
               <div class="h-64 overflow-hidden relative">
                  <img [src]="member.image" [alt]="member.name" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                  <div class="absolute inset-0 bg-secondary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                     <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors"><i class="fab fa-linkedin-in"></i></a>
                     <a href="#" class="w-10 h-10 bg-white rounded-full flex items-center justify-center text-secondary hover:text-primary transition-colors"><i class="fas fa-envelope"></i></a>
                  </div>
               </div>
               <div class="p-6 text-center">
                  <h3 class="text-xl font-bold text-slate-900 mb-1">{{ member.name }}</h3>
                  <p class="text-primary text-sm uppercase tracking-wide font-medium">{{ member.role }}</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Join Us CTA -->
       <section class="py-20 bg-primary text-white text-center">
          <div class="container mx-auto px-4">
             <h2 class="text-3xl font-bold mb-6">Want to Join Our Team?</h2>
             <p class="text-xl opacity-90 mb-8 max-w-2xl mx-auto">We are always looking for talented individuals to join our growing family.</p>
             <a routerLink="/careers" class="inline-block bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-slate-100 transition-colors shadow-lg">View Open Positions</a>
          </div>
       </section>
    </div>
  `
})
export class TeamPageComponent {
    team = [
        { name: 'Vandana', role: 'Senior Consultant', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Tavish', role: 'Recruitment Manager', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Preet', role: 'Business Development', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Mayank', role: 'Operations Head', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Juile', role: 'Training Coordinator', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Leela', role: 'Finance Executive', image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
        { name: 'Yousuf', role: 'Public Relations', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
    ];
}
