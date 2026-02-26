import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-founder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <!-- Background Element -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent skew-x-12 opacity-50 z-0"></div>
      
      <!-- Decorative circle -->
      <div class="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-orange-500/10 rounded-full blur-3xl z-0"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10 w-full flex justify-center">
        <div class="flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">
           <!-- Profile Image Area -->
           <div class="w-full lg:w-1/3 flex flex-col items-center">
              <div class="relative w-64 h-64 md:w-80 md:h-80 group perspective-1000">
                 <!-- Decorative Ring -->
                 <div class="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-full transform -translate-x-3 -translate-y-3 opacity-50 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                 <div class="absolute inset-0 border-2 border-white/20 rounded-full transform translate-x-3 translate-y-3 opacity-50 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
                 
                 <!-- Image -->
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                   alt="Shiva Sankar" 
                   class="w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                 />
              </div>
              
              <div class="text-center mt-8">
                 <h3 class="text-3xl font-bold text-white font-heading">Shiva Sankar</h3>
                 <p class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 font-bold tracking-[0.2em] uppercase text-sm mt-1">Founder & CEO</p>
                 <div class="flex items-center justify-center gap-4 mt-6">
                    <a href="#" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-orange-500 hover:border-transparent transition-all duration-300 text-white shadow-lg text-lg">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-primary hover:to-orange-500 hover:border-transparent transition-all duration-300 text-white shadow-lg text-lg">
                      <i class="fas fa-envelope"></i>
                    </a>
                 </div>
              </div>
           </div>

           <!-- Content Area -->
           <div class="w-full lg:w-2/3 bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-12 rounded-3xl relative">
              <i class="fas fa-quote-left text-6xl text-primary/20 absolute top-6 left-6 -z-10"></i>
              
              <div class="flex items-center gap-3 mb-6">
                 <div class="w-8 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
                 <span class="text-primary font-bold uppercase tracking-[0.2em] text-xs">Leadership Vision</span>
              </div>
              
              <h2 class="text-3xl md:text-4xl font-light italic leading-relaxed mb-8 text-white font-heading">
                "Our vision is to build a future where talent meets opportunity seamlessly. We don't just fill positions; we build careers and empower businesses to reach their full potential."
              </h2>
              
              <div class="h-1 w-24 bg-gradient-to-r from-primary to-orange-500 rounded-full mb-8"></div>
              
              <p class="text-slate-300 text-lg leading-relaxed">
                 With over a decade of experience in the recruitment industry, Shiva Sankar has led Three Circles International to become a trusted partner for organizations across the Middle East. His commitment to ethical practices and personalized service drives the core ethos of our success.
              </p>
           </div>
        </div>
      </div>
    </section>
  `
})
export class FounderComponent { }
