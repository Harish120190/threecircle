import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="pt-20">
      <!-- Premium Hero Section -->
      <section class="relative bg-slate-900 text-white min-h-[60vh] flex items-center overflow-hidden">
        <!-- Animated Background Gradients -->
        <div class="absolute inset-0 z-0">
           <div class="absolute top-0 right-0 w-full md:w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 animate-pulse"></div>
           <div class="absolute bottom-0 left-0 w-full md:w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4"></div>
           <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div class="container mx-auto px-4 md:px-8 relative z-10 text-center py-24">
            <div class="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
               <span class="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500"></span>
               <span class="text-white font-bold uppercase tracking-[0.2em] text-xs">Our Story</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight">
               Pioneering <br/>
               <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Excellence</span>
            </h1>
            <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Founded on the principles of integrity and innovation, Three Circles International is reshaping the recruitment landscape in Oman and beyond.
            </p>
        </div>
      </section>

      <!-- Glassmorphic Company Overview -->
      <section class="py-24 bg-white relative overflow-hidden">
        <!-- Decorative subtle grid -->
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="flex flex-col lg:flex-row gap-20 items-center">
             
             <!-- Text Content -->
             <div class="w-full lg:w-1/2">
                <div class="flex items-center gap-3 mb-6">
                   <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
                   <span class="text-primary font-bold uppercase tracking-[0.2em] text-sm">About Us</span>
                </div>
                
                <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-10 font-heading leading-tight">
                  Three Circles <br><span class="text-slate-500 font-light">International SPC</span>
                </h2>
                
                <div class="space-y-6 text-slate-600 text-lg leading-relaxed relative">
                  <!-- Quote accent -->
                  <i class="fas fa-quote-left absolute -top-6 -left-6 text-6xl text-slate-100 -z-10"></i>
                  
                  <p>
                    Three Circles International SPC is a leading recruitment and HR consultancy firm headquartered in the Sultanate of Oman. Established with a vision to bridge the gap between exceptional talent and visionary organizations, we have grown to become a trusted partner for businesses across the MENA region.
                  </p>
                  <p>
                    Our name reflects our holistic approach: connecting <strong class="text-slate-900">Clients</strong>, <strong class="text-slate-900">Candidates</strong>, and <strong class="text-slate-900">Community</strong> in a seamless circle of value creation. We believe that successful recruitment is not just about filling vacancies but about building sustainable partnerships that drive growth.
                  </p>
                  <p>
                    With over a decade of industry expertise, our team utilizes data-driven insights and a personalized touch to deliver bespoke workforce solutions, ranging from executive search and volume hiring to strategic HR consulting and training.
                  </p>
                </div>
             </div>
             
             <!-- Image Collage -->
             <div class="w-full lg:w-1/2 relative">
                <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/10 to-orange-500/10 rounded-full blur-3xl -z-10"></div>
                
                <div class="grid grid-cols-2 gap-6 relative z-10 perspective-1000">
                   <div class="transform translate-y-12 transition-transform duration-700 hover:-translate-y-2 group">
                      <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                         <div class="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                         <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Meeting" class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700">
                      </div>
                   </div>
                   <div class="transform -translate-y-4 transition-transform duration-700 hover:-translate-y-8 group">
                      <div class="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                         <div class="absolute inset-0 bg-gradient-to-t from-orange-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                         <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Teamwork" class="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700">
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
      
      <!-- Glowing Strategic Pillars -->
      <section class="py-24 bg-slate-900 overflow-hidden relative">
         <!-- Abstract glow -->
         <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-5xl bg-gradient-to-r from-primary/10 to-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

         <div class="container mx-auto px-4 md:px-8 relative z-10">
            <div class="text-center mb-20 max-w-3xl mx-auto">
               <div class="flex items-center justify-center gap-3 mb-4">
                  <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
                  <span class="text-primary font-bold uppercase tracking-[0.2em] text-sm">Core Strategy</span>
                  <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
               </div>
               <h2 class="text-4xl md:text-5xl font-bold text-white font-heading">
                 Our Strategic <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Pillars</span>
               </h2>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
               <!-- Integrity -->
               <div class="group relative bg-slate-800/50 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]"></div>
                  
                  <div class="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-3xl mb-8 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-lg">
                    <i class="fas fa-balance-scale"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-4 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-500 transition-colors">Unwavering Integrity</h3>
                  <p class="text-slate-400 leading-relaxed">
                    We operate with the highest ethical standards, ensuring transparency and trust in every interaction with clients and candidates.
                  </p>
               </div>

               <!-- Innovation -->
               <div class="group relative bg-slate-800/50 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]"></div>
                  
                  <div class="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-3xl mb-8 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-lg">
                    <i class="fas fa-lightbulb"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-4 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-500 transition-colors">Continuous Innovation</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Leveraging the latest HR technologies and market trends to provide forward-thinking solutions that stay ahead of the curve.
                  </p>
               </div>

               <!-- Impact -->
               <div class="group relative bg-slate-800/50 backdrop-blur-xl p-10 rounded-[2rem] border border-white/10 hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-[2rem]"></div>
                  
                  <div class="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center text-primary text-3xl mb-8 border border-white/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-lg">
                    <i class="fas fa-chart-line"></i>
                  </div>
                  <h3 class="text-2xl font-bold text-white mb-4 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-orange-500 transition-colors">Measurable Impact</h3>
                  <p class="text-slate-400 leading-relaxed">
                    Focusing on results that matter—reducing time-to-hire, improving retention, and driving organizational performance.
                  </p>
               </div>
            </div>
         </div>
      </section>

      <!-- Premium Why Oman / Call to Action -->
      <section class="py-32 bg-white relative overflow-hidden">
         <!-- Abstract shapes -->
         <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary/10 to-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
         <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 to-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
         
         <div class="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-5xl">
            <h2 class="text-4xl md:text-6xl font-bold mb-8 font-heading text-slate-900">
               Why <span class="relative inline-block px-4 py-2 text-white bg-slate-900 transform -skew-x-12 ml-2"><span class="inline-block transform skew-x-12 relative z-10">Oman?</span><div class="absolute inset-0 bg-gradient-to-r from-primary to-orange-500 mix-blend-multiply opacity-80"></div></span>
            </h2>
            <p class="text-xl md:text-2xl text-slate-600 leading-relaxed mb-12 font-light">
               As a strategic hub in the Middle East, Oman offers a unique blend of stability, growth, and diverse talent. Three Circles International is proud to contribute to the nation's <strong>Vision 2040</strong> by empowering the local workforce and attracting global expertise to drive economic diversification.
            </p>
            <div class="flex justify-center">
               <a routerLink="/contact" class="btn btn-primary px-10 py-4 text-xl shadow-xl shadow-primary/30 flex items-center justify-center gap-3">
                 Partner With Us <i class="fas fa-arrow-right"></i>
               </a>
            </div>
         </div>
      </section>
    </div>
  `
})
export class AboutPageComponent { }
