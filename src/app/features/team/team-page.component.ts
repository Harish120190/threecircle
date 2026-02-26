import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'app-team-page',
   standalone: true,
   imports: [CommonModule],
   template: `
    <div class="pt-20">
      <!-- Premium Hero Section -->
      <section class="relative bg-slate-900 text-white min-h-[60vh] flex items-center overflow-hidden">
        <!-- Animated Background Gradients -->
        <div class="absolute inset-0 z-0">
           <div class="absolute top-0 right-0 w-full md:w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
           <div class="absolute bottom-0 left-0 w-full md:w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
           <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div class="container mx-auto px-4 md:px-8 relative z-10 text-center py-24">
            <div class="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
               <span class="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500"></span>
               <span class="text-white font-bold uppercase tracking-[0.2em] text-xs">The People Behind The Success</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight">
               Meet Our <br/>
               <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Experts</span>
            </h1>
            <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              A diverse team of professionals united by a passion for connecting talent with opportunity.
            </p>
        </div>
      </section>

      <!-- Premium Leadership Section -->
      <section class="py-32 bg-slate-50 relative overflow-hidden">
         <!-- Abstract subtle shapes -->
         <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
         <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

         <div class="container mx-auto px-4 md:px-8 relative z-10">
            <div class="text-center mb-20">
               <div class="flex items-center justify-center gap-3 mb-4">
                  <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
                  <span class="text-primary font-bold uppercase tracking-[0.2em] text-sm">Visionary</span>
                  <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
               </div>
               <h2 class="text-4xl md:text-5xl font-bold text-slate-900 font-heading">
                 <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Leadership</span>
               </h2>
            </div>

            <div class="max-w-5xl mx-auto bg-white rounded-[2rem] p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 lg:gap-16 shadow-2xl shadow-slate-200/50 border border-slate-100 relative group transform hover:-translate-y-2 transition-all duration-500">
               <!-- Decorative accent -->
               <div class="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-[2rem] z-0"></div>
               
               <div class="w-56 h-56 md:w-72 md:h-72 flex-shrink-0 relative z-10">
                  <div class="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-full transform rotate-6 scale-105 opacity-50 group-hover:rotate-12 group-hover:scale-110 transition-all duration-700"></div>
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Shiva Sankar" class="w-full h-full object-cover rounded-full border-8 border-white shadow-xl relative z-10">
               </div>
               <div class="text-center md:text-left relative z-10">
                  <i class="fas fa-quote-left absolute -top-8 -left-4 text-6xl text-slate-100 -z-10 group-hover:text-primary/10 transition-colors duration-500"></i>
                  <h3 class="text-4xl font-bold text-slate-900 mb-2 font-heading">Shiva Sankar</h3>
                  <p class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 font-bold tracking-widest uppercase text-sm mb-8 inline-block">Founder & CEO</p>
                  <p class="text-slate-600 leading-relaxed text-xl font-light italic mb-8 relative">
                     "Building Three Circles International has been a journey of passion and purpose. Our team is our greatest asset, and their dedication to our clients' success is what sets us apart."
                  </p>
                  <div class="flex justify-center md:justify-start gap-4">
                     <a href="#" class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-primary hover:to-orange-500 hover:text-white transition-all duration-300 shadow-sm"><i class="fab fa-linkedin-in text-lg"></i></a>
                     <a href="#" class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-primary hover:to-orange-500 hover:text-white transition-all duration-300 shadow-sm"><i class="fas fa-envelope text-lg"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <!-- Glassmorphic Team Grid -->
      <section class="py-32 bg-white relative overflow-hidden">
        <!-- Background Grid -->
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-gradient-to-r from-primary/5 to-orange-500/5 blur-3xl rounded-full z-0"></div>

        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="text-center mb-20">
               <div class="flex items-center justify-center gap-3 mb-4">
                  <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
                  <span class="text-primary font-bold uppercase tracking-[0.2em] text-sm">Our Core Team</span>
                  <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
               </div>
               <h2 class="text-4xl md:text-5xl font-bold text-slate-900 font-heading">
                 The People <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Behind It All</span>
               </h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div *ngFor="let member of team" class="bg-slate-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100 transform hover:-translate-y-2">
               <div class="h-72 overflow-hidden relative">
                  <!-- Image overlay gradient -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img [src]="member.image" [alt]="member.name" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                  
                  <!-- Hover Social Links -->
                  <div class="absolute inset-x-0 bottom-0 p-6 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20">
                     <a href="#" class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors border border-white/30"><i class="fab fa-linkedin-in text-lg"></i></a>
                     <a href="#" class="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors border border-white/30"><i class="fas fa-envelope text-lg"></i></a>
                  </div>
               </div>
               <div class="p-8 text-center bg-white relative">
                  <!-- Top border accent -->
                  <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <h3 class="text-2xl font-bold text-slate-900 mb-2 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-500 transition-colors">{{ member.name }}</h3>
                  <p class="text-slate-500 text-sm uppercase tracking-widest font-bold">{{ member.role }}</p>
               </div>
            </div>
          </div>
        </div>
      </section>
      
      <!-- Premium Join Us CTA -->
       <section class="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
          <!-- Animated gradient abstract shapes -->
          <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
          <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3"></div>

          <div class="container mx-auto px-4 relative z-10 max-w-4xl border border-white/10 bg-white/5 backdrop-blur-sm rounded-[3rem] p-12 md:p-20 shadow-2xl">
             <div class="w-20 h-20 bg-gradient-to-br from-primary to-orange-500 rounded-2xl flex items-center justify-center text-white text-4xl mx-auto mb-8 shadow-lg shadow-primary/30 transform -rotate-6">
                <i class="fas fa-briefcase"></i>
             </div>
             <h2 class="text-4xl md:text-5xl font-bold mb-6 font-heading">
               Want to Join Our <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Team?</span>
             </h2>
             <p class="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
               We are always looking for talented individuals to join our growing family. Bring your skills to a place where they can make a real impact.
             </p>
             <a routerLink="/careers" class="inline-block bg-white text-slate-900 font-bold px-10 py-4 text-xl rounded-xl hover:bg-gradient-to-r hover:from-primary hover:to-orange-500 hover:text-white transition-all duration-300 shadow-xl transform hover:-translate-y-1">
               View Open Positions <i class="fas fa-arrow-right ml-2"></i>
             </a>
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
