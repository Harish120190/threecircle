import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-founder',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <!-- Background Element -->
      <div class="absolute top-0 right-0 w-1/3 h-full bg-slate-800 skew-x-12 opacity-50 z-0"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row items-center gap-16">
           <!-- Profile Image -->
           <div class="w-full lg:w-1/3">
              <div class="relative w-72 h-72 mx-auto lg:ml-0">
                 <div class="absolute inset-0 border-4 border-primary rounded-full transform -translate-x-4 -translate-y-4"></div>
                 <img 
                   src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                   alt="Shiva Sankar" 
                   class="w-full h-full object-cover rounded-full border-4 border-white shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-500"
                 />
              </div>
              
              <div class="text-center lg:text-left mt-8 lg:ml-4">
                 <h3 class="text-2xl font-bold text-white">Shiva Sankar</h3>
                 <p class="text-primary font-medium tracking-wide">Founder & CEO</p>
                 <div class="flex items-center justify-center lg:justify-start gap-4 mt-4">
                    <a href="#" class="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#" class="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-primary hover:border-primary transition-all text-white">
                      <i class="fas fa-envelope"></i>
                    </a>
                 </div>
              </div>
           </div>

           <!-- Content -->
           <div class="w-full lg:w-2/3">
              <i class="fas fa-quote-left text-6xl text-slate-700 mb-6 block"></i>
              
              <h2 class="text-3xl md:text-4xl font-light italic leading-relaxed mb-8 text-slate-200">
                "Our vision is to build a future where talent meets opportunity seamlessly. We don't just fill positions; we build careers and empower businesses to reach their full potential."
              </h2>
              
              <div class="h-px w-24 bg-primary mb-8"></div>
              
              <p class="text-slate-400 text-lg leading-relaxed max-w-2xl">
                 With over a decade of experience in the recruitment industry, Shiva Sankar has led Three Circles International to become a trusted partner for organizations across the Middle East. His commitment to ethical practices and personalized service drives the company's ethos.
              </p>
           </div>
        </div>
      </div>
    </section>
  `
})
export class FounderComponent { }
