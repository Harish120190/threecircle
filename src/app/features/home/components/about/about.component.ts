import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 bg-white overflow-hidden">
      <div class="container mx-auto px-4 md:px-8">
        <div class="flex flex-col lg:flex-row gap-16 items-center">
          <!-- Image Column -->
          <div class="w-full lg:w-1/2 relative group">
            <div class="absolute inset-0 bg-primary/10 translate-x-4 translate-y-4 z-0 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Team collaboration" 
              class="relative z-10 w-full h-auto object-cover shadow-lg border-2 border-slate-100"
            />
          </div>

          <!-- Text Column -->
          <div class="w-full lg:w-1/2">
            <div class="flex items-center gap-2 mb-6">
               <div class="w-8 h-1 bg-primary"></div>
               <span class="text-primary font-bold uppercase tracking-widest text-sm">Who We Are</span>
            </div>
            
            <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Pioneering <span class="text-primary">Excellence</span> in<br>Global Recruitment
            </h2>
            
            <p class="text-slate-600 text-lg mb-6 leading-relaxed">
              Three Circles International SPC is a premier recruitment and HR consultancy firm based in the Sultanate of Oman. We specialize in connecting world-class talent with leading organizations across the MENA region.
            </p>
            
            <p class="text-slate-600 text-lg mb-10 leading-relaxed">
              Our holistic approach combines strategic insight, rigorous screening, and personalized matching to ensure sustainable success for both employers and job seekers.
            </p>

            <!-- Key Stats Grid -->
            <div class="grid grid-cols-2 gap-8 border-t border-slate-200 pt-8">
               <div>
                  <h4 class="text-3xl font-bold text-slate-900 mb-1">100%</h4>
                  <p class="text-sm text-slate-500 uppercase tracking-wider">Client Satisfaction</p>
               </div>
               <div>
                  <h4 class="text-3xl font-bold text-slate-900 mb-1">24/7</h4>
                  <p class="text-sm text-slate-500 uppercase tracking-wider">Dedicated Support</p>
               </div>
            </div>

            <div class="mt-10">
               <a href="#contact" class="btn btn-secondary">
                 Get in Touch
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent { }
