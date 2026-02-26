import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="py-24 bg-white relative">
      <!-- Decorative background -->
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <!-- Section Header -->
        <div class="flex flex-col items-center text-center mb-16">
          <div class="flex items-center gap-3 mb-4">
             <div class="w-12 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
             <span class="text-primary font-bold uppercase tracking-[0.2em] text-sm">What We Do</span>
             <div class="w-12 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
          </div>
          <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
            Comprehensive <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Business Solutions</span>
          </h2>
          <p class="text-slate-600 text-lg max-w-2xl leading-relaxed">
            From talent acquisition to strategic consulting, we deliver end-to-end solutions designed to drive growth and efficiency for your organization.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services" class="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-slate-100">
             
             <!-- Gradient Border Top (Hover) -->
             <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-orange-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

             <!-- Large Background Icon -->
             <div class="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500 group-hover:-rotate-12 pointer-events-none">
               <i [class]="service.icon + ' text-9xl text-primary'"></i>
             </div>

             <!-- Content -->
             <div class="relative z-10 flex flex-col h-full">
               <!-- Icon Container -->
               <div class="w-16 h-16 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-300 shadow-sm">
                 <i [class]="service.icon + ' text-2xl'"></i>
               </div>
               
               <h3 class="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors font-heading">{{ service.title }}</h3>
               
               <p class="text-slate-600 mb-8 leading-relaxed flex-grow">
                 {{ service.description }}
               </p>
               
               <div class="mt-auto">
                 <a [routerLink]="['/services']" class="inline-flex items-center text-sm font-bold uppercase tracking-wider text-primary group-hover:text-orange-600 transition-colors">
                   Read More 
                   <i class="fas fa-arrow-right ml-2 transform group-hover:translate-x-1 transition-transform"></i>
                 </a>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ServicesComponent {
  services = [
    {
      title: 'Staffing & Recruiting',
      description: 'Connecting you with top-tier talent across various industries to meet your organizational goals.',
      icon: 'fas fa-users'
    },
    {
      title: 'Strategic Consulting',
      description: 'Expert advice to optimize your business processes, enhance performance, and drive sustainable growth.',
      icon: 'fas fa-chess-knight'
    },
    {
      title: 'Training & Coaching',
      description: 'Empowering your workforce with specialized training programs to bridge skill gaps and boost productivity.',
      icon: 'fas fa-chalkboard-teacher'
    },
    {
      title: 'Digital Production',
      description: 'End-to-end digital media solutions including video production, ad campaigns, and brand storytelling.',
      icon: 'fas fa-video'
    },
    {
      title: 'IWG Flexible Workspaces',
      description: 'Providing world-class office solutions through our partnership with IWG to suit your flexible work needs.',
      icon: 'fas fa-building'
    },
    {
      title: 'CSR Services',
      description: 'Guiding your corporate social responsibility initiatives to create meaningful social impact.',
      icon: 'fas fa-hand-holding-heart'
    },
    {
      title: 'Digital Printing',
      description: 'High-quality digital printing services for all your corporate branding and marketing materials.',
      icon: 'fas fa-print'
    }
  ];
}
