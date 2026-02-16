import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div class="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div class="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h4 class="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Story</h4>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Pioneering Excellence</h1>
            <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Founded on the principles of integrity and innovation, Three Circles International is reshaping the recruitment landscape in Oman and beyond.
            </p>
        </div>
      </section>

      <!-- Company Overview -->
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
          <div class="flex flex-col lg:flex-row gap-16 items-start">
             <div class="w-full lg:w-1/2">
                <h2 class="text-3xl font-bold text-slate-900 mb-6">About Three Circles International</h2>
                <div class="h-1 w-20 bg-primary mb-8"></div>
                
                <div class="space-y-6 text-slate-600 text-lg leading-relaxed">
                  <p>
                    Three Circles International SPC is a leading recruitment and HR consultancy firm headquartered in the Sultanate of Oman. Established with a vision to bridge the gap between exceptional talent and visionary organizations, we have grown to become a trusted partner for businesses across the MENA region.
                  </p>
                  <p>
                    Our name reflects our holistic approach: connecting <strong>Clients</strong>, <strong>Candidates</strong>, and <strong>Community</strong> in a seamless circle of value creation. We believe that successful recruitment is not just about filling vacancies but about building sustainable partnerships that drive growth.
                  </p>
                  <p>
                    With over a decade of industry expertise, our team utilizes data-driven insights and a personalized touch to deliver bespoke workforce solutions, ranging from executive search and volume hiring to strategic HR consulting and training.
                  </p>
                </div>
             </div>
             
             <div class="w-full lg:w-1/2 grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Meeting" class="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-8">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Teamwork" class="rounded-lg shadow-lg w-full h-64 object-cover">
             </div>
          </div>
        </div>
      </section>
      
      <!-- Strategic Values -->
      <section class="py-24 bg-slate-50">
         <div class="container mx-auto px-4 md:px-8">
            <div class="text-center mb-16">
               <h2 class="text-3xl font-bold text-slate-900">Our Strategic Pillars</h2>
               <div class="h-1 w-20 bg-primary mx-auto mt-4"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
               <!-- Integrity -->
               <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-slate-900">
                  <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 text-2xl mb-6">
                    <i class="fas fa-balance-scale"></i>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900 mb-4">Unwavering Integrity</h3>
                  <p class="text-slate-600">
                    We operate with the highest ethical standards, ensuring transparency and trust in every interaction with clients and candidates.
                  </p>
               </div>

               <!-- Innovation -->
               <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-primary">
                  <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                    <i class="fas fa-lightbulb"></i>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900 mb-4">Continuous Innovation</h3>
                  <p class="text-slate-600">
                    Leveraging the latest HR technologies and market trends to provide forward-thinking solutions that stay ahead of the curve.
                  </p>
               </div>

               <!-- Impact -->
               <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 border-t-4 border-secondary">
                  <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-secondary text-2xl mb-6">
                    <i class="fas fa-chart-line"></i>
                  </div>
                  <h3 class="text-xl font-bold text-slate-900 mb-4">Measurable Impact</h3>
                  <p class="text-slate-600">
                    Focusing on results that matter—reducing time-to-hire, improving retention, and driving organizational performance.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <!-- Why Oman Section -->
      <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
         <div class="absolute top-0 right-0 w-1/2 h-full bg-slate-800 skew-x-12 opacity-30"></div>
         <div class="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h2 class="text-3xl font-bold mb-8">Why Oman?</h2>
            <p class="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12">
               As a strategic hub in the Middle East, Oman offers a unique blend of stability, growth, and diverse talent. Three Circles International is proud to contribute to the nation's Vision 2040 by empowering the local workforce and attracting global expertise to drive economic diversification.
            </p>
            <a routerLink="/contact" class="btn btn-primary">Partner With Us</a>
         </div>
      </section>
    </div>
  `
})
export class AboutPageComponent { }
