import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-24 bg-slate-50 relative overflow-hidden">
       <!-- Decorative background elements -->
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="flex flex-col lg:flex-row gap-20 items-center">
          
          <!-- Image Column -->
          <div class="w-full lg:w-1/2 relative group perspective-1000">
            <!-- Background Accent Box -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-2xl transform translate-x-6 translate-y-6 -z-10 transition-transform duration-500 group-hover:translate-x-8 group-hover:translate-y-8 opacity-80"></div>
            
            <!-- Main Image -->
            <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                 alt="Team collaboration" 
                 class="w-full h-auto object-cover"
               />
               <!-- Overlay stat -->
               <div class="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 animate-fade-in-up">
                  <div class="flex items-center gap-4">
                     <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl">
                        <i class="fas fa-handshake"></i>
                     </div>
                     <div>
                        <p class="text-2xl font-bold text-slate-900 leading-none mb-1">10+</p>
                        <p class="text-xs font-bold text-slate-500 uppercase tracking-widest">Years Trust</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          <!-- Text Column -->
          <div class="w-full lg:w-1/2">
            <div class="flex items-center gap-3 mb-6">
               <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
               <span class="text-primary font-bold uppercase tracking-[0.2em] text-sm">Who We Are</span>
            </div>
            
            <h2 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Pioneering <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Excellence</span> in<br>Global Recruitment
            </h2>
            
            <p class="text-slate-600 text-lg mb-6 leading-relaxed relative">
              <i class="fas fa-quote-left absolute -top-4 -left-4 text-4xl text-slate-200 -z-10"></i>
              Three Circles International SPC is a premier recruitment and HR consultancy firm based in the Sultanate of Oman. We specialize in connecting world-class talent with leading organizations across the MENA region.
            </p>
            
            <p class="text-slate-600 text-lg mb-10 leading-relaxed">
              Our holistic approach combines strategic insight, rigorous screening, and personalized matching to ensure sustainable success for both employers and job seekers.
            </p>

            <!-- Key Stats Grid -->
            <div class="grid grid-cols-2 gap-8 mb-10">
               <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h4 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-2">100<span class="text-primary">%</span></h4>
                  <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Client Satisfaction</p>
               </div>
               <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <h4 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-2">24<span class="text-primary">/</span>7</h4>
                  <p class="text-sm font-bold text-slate-500 uppercase tracking-wider">Dedicated Support</p>
               </div>
            </div>

            <div class="flex items-center gap-6">
               <a href="#contact" class="btn btn-primary px-8 py-3 text-lg shadow-lg shadow-primary/30 flex items-center justify-center">
                 Get in Touch <i class="fas fa-arrow-right ml-2"></i>
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent { }
