import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- Decorative Background Elements -->
      <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Vision Card -->
          <div class="group relative bg-white rounded-3xl p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2 overflow-hidden">
             <!-- Gradient top bar -->
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500 transform origin-left"></div>
             
             <!-- Background Icon -->
             <div class="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
               <i class="fas fa-eye text-9xl text-primary"></i>
             </div>

             <div class="relative z-10">
               <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center text-primary text-2xl mb-8 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                  <i class="fas fa-lightbulb"></i>
               </div>
               <h3 class="text-2xl font-bold text-slate-900 mb-4 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-500 transition-colors">Our Vision</h3>
               <p class="text-slate-600 leading-relaxed text-lg">
                 To be the most trusted and innovative partner in human capital solutions, driving growth for businesses and careers across the globe.
               </p>
             </div>
          </div>

          <!-- Mission Card -->
          <div class="group relative bg-white rounded-3xl p-10 shadow-lg shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 border border-slate-100 transform hover:-translate-y-2 overflow-hidden">
             <!-- Gradient top bar -->
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-primary transform origin-left"></div>
             
             <!-- Background Icon -->
             <div class="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 pointer-events-none">
               <i class="fas fa-bullseye text-9xl text-orange-500"></i>
             </div>

             <div class="relative z-10">
               <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 flex items-center justify-center text-orange-500 text-2xl mb-8 group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-primary group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                  <i class="fas fa-rocket"></i>
               </div>
               <h3 class="text-2xl font-bold text-slate-900 mb-4 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-primary transition-colors">Our Mission</h3>
               <p class="text-slate-600 leading-relaxed text-lg">
                 Delivering excellence through tailored recruitment strategies, comprehensive training, and ethical practices that empower organizations and individuals.
               </p>
             </div>
          </div>

          <!-- Values Card -->
           <div class="group relative bg-slate-900 rounded-3xl p-10 shadow-xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-2 overflow-hidden">
             <!-- Gradient top bar -->
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500 transform origin-left"></div>
             
             <!-- Decorative glowing orbit -->
             <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/5 rounded-full z-0 group-hover:border-primary/20 transition-colors duration-500"></div>

             <div class="relative z-10">
               <div class="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary text-2xl mb-8 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-300">
                  <i class="fas fa-gem"></i>
               </div>
               <h3 class="text-2xl font-bold text-white mb-6 font-heading">Core Values</h3>
               <ul class="space-y-4 text-slate-300">
                 <li class="flex items-center group/item"><div class="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500 mr-4 group-hover/item:scale-150 transition-transform"></div> Integrity & Ethics</li>
                 <li class="flex items-center group/item"><div class="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500 mr-4 group-hover/item:scale-150 transition-transform"></div> Excellence & Quality</li>
                 <li class="flex items-center group/item"><div class="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500 mr-4 group-hover/item:scale-150 transition-transform"></div> Innovation & Growth</li>
                 <li class="flex items-center group/item"><div class="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500 mr-4 group-hover/item:scale-150 transition-transform"></div> Client-Centricity</li>
               </ul>
             </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class VisionMissionComponent { }
