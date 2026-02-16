import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section id="services" class="py-20 bg-slate-50">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Section Header -->
        <div class="mb-16 max-w-3xl">
          <h4 class="text-primary font-bold uppercase tracking-widest text-sm mb-3">What We Do</h4>
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Comprehensive Business Solutions</h2>
          <p class="text-slate-600 text-lg leading-relaxed">
            From talent acquisition to strategic consulting, we deliver end-to-end solutions designed to drive growth and efficiency for your organization.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let service of services" class="group bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-primary relative overflow-hidden">
             <!-- Background Icon (Faded) -->
             <div class="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
               <i [class]="service.icon + ' text-9xl text-slate-800'"></i>
             </div>

             <!-- Content -->
             <div class="relative z-10 flex flex-col h-full">
               <div class="w-14 h-14 bg-slate-100 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                 <i [class]="service.icon + ' text-2xl'"></i>
               </div>
               
               <h3 class="text-xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">{{ service.title }}</h3>
               
               <p class="text-slate-600 mb-8 leading-relaxed flex-grow">
                 {{ service.description }}
               </p>
               
               <a [routerLink]="['/services']" class="inline-flex items-center text-sm font-bold uppercase tracking-wider text-slate-900 group-hover:text-primary transition-colors">
                 Read More 
                 <svg class="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
               </a>
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
