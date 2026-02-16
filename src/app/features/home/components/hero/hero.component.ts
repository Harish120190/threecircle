import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="relative h-[90vh] w-full flex items-center overflow-hidden bg-slate-900">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
          alt="Corporate Building" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10"></div>

      <!-- Content -->
      <div class="relative z-20 container mx-auto px-4 md:px-8 pt-20">
        <div class="max-w-3xl animate-fade-in-up">
          <div class="flex items-center gap-2 mb-6">
            <div class="w-12 h-1 bg-primary"></div>
            <span class="text-primary font-bold tracking-[0.2em] uppercase text-sm">Building Tomorrow</span>
          </div>
          
          <h1 class="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Strategic <span class="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Talent</span> &<br>
            <span class="text-white">Workflow Solutions</span>
          </h1>
          
          <p class="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed border-l-4 border-primary pl-6">
            Empowering organizations in Oman & MENA with world-class recruitment, consultancy, and training services tailored for the future.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-0">
            <a href="#services" class="btn btn-primary">
              Our Services
            </a>
            <a href="#about" class="btn btn-outline border-l-0 sm:border-l-0">
              Discover More
            </a>
          </div>
        </div>
      </div>
      
      <!-- Stats Strip -->
      <div class="absolute bottom-0 left-0 w-full z-30 bg-white/5 backdrop-blur-sm border-t border-white/10 py-6 hidden md:block">
         <div class="container mx-auto px-8 flex justify-between items-center text-white">
            <div class="flex flex-col">
               <span class="text-3xl font-bold">10+</span>
               <span class="text-xs uppercase tracking-wider text-slate-400">Years Active</span>
            </div>
            <div class="w-px h-10 bg-white/20"></div>
            <div class="flex flex-col">
               <span class="text-3xl font-bold">500+</span>
               <span class="text-xs uppercase tracking-wider text-slate-400">Placements</span>
            </div>
             <div class="w-px h-10 bg-white/20"></div>
            <div class="flex flex-col">
               <span class="text-3xl font-bold">50+</span>
               <span class="text-xs uppercase tracking-wider text-slate-400">Partners</span>
            </div>
             <div class="w-px h-10 bg-white/20"></div>
             <p class="text-sm text-slate-400 italic">"Empowering the Future of Work"</p>
         </div>
      </div>
    </section>
  `,
  styles: [`
    .animate-fade-in-up {
      animation: fadeInUp 1s ease-out forwards;
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(40px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class HeroComponent { }
