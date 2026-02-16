import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-white">
      <div class="container mx-auto px-4 md:px-8">
        <!-- Section Header -->
         <div class="mb-16 text-center max-w-3xl mx-auto">
            <h4 class="text-primary font-bold uppercase tracking-widest text-sm mb-3">Industries We Serve</h4>
            <h2 class="text-4xl font-bold text-slate-900 mb-6">Domain Expertise</h2>
            <p class="text-slate-600 text-lg">
              We bring deep sector knowledge and specialized recruitment strategies to a diverse range of industries.
            </p>
         </div>

         <!-- Image Grid -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div *ngFor="let industry of industries" class="group relative h-80 overflow-hidden cursor-pointer rounded-lg">
               <!-- Background Image -->
               <img 
                 [src]="industry.image" 
                 [alt]="industry.name"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               
               <!-- Gradient Overlay -->
               <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

               <!-- Content -->
               <div class="absolute inset-0 p-8 flex flex-col justify-end">
                  <div class="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                    <div class="text-primary text-3xl mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform -translate-y-4 group-hover:translate-y-0">
                      <i [class]="industry.icon"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2">{{ industry.name }}</h3>
                    <div class="h-0.5 w-12 bg-primary mb-4 transition-all duration-300 group-hover:w-20"></div>
                    <p class="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 h-0 group-hover:h-auto overflow-hidden">
                      {{ industry.description }}
                    </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  `
})
export class IndustriesComponent {
  industries = [
    {
      name: 'FMCG',
      icon: 'fas fa-shopping-cart',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Sourcing talent for fast-moving consumer goods, supply chain, and brand management.'
    },
    {
      name: 'Retail & Luxury',
      icon: 'fas fa-store',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Expertise in store operations, visual merchandising, and luxury brand retail.'
    },
    {
      name: 'E-commerce',
      icon: 'fas fa-laptop-code',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Connecting you with digital marketers, developers, and e-commerce strategists.'
    },
    {
      name: 'Logistics',
      icon: 'fas fa-truck',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Recruitment for transportation, warehousing, and global supply chain operations.'
    },
    {
      name: 'Oil & Gas',
      icon: 'fas fa-oil-can',
      image: 'https://images.unsplash.com/photo-1516937941348-c09e554b9605?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Specialized technical and engineering talent for the energy and petrochemical sectors.'
    },
    {
      name: 'Healthcare',
      icon: 'fas fa-heartbeat',
      image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Placing medical professionals, administrators, and allied health staff.'
    },
    {
      name: 'Construction',
      icon: 'fas fa-hard-hat',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Engineers, project managers, and skilled labor for infrastructure projects.'
    },
    {
      name: 'Tech Startup',
      icon: 'fas fa-rocket',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Agile talent for high-growth startups, fintech, and software development.'
    }
  ];
}
