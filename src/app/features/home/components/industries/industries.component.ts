import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-industries',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <!-- Decorative background -->
       <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
       <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <!-- Section Header -->
         <div class="mb-16 text-center max-w-3xl mx-auto">
            <div class="flex items-center justify-center gap-3 mb-4">
               <div class="w-12 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
               <span class="font-bold uppercase tracking-[0.2em] text-sm text-primary">Industries We Serve</span>
               <div class="w-12 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 font-heading">
              Domain <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Expertise</span>
            </h2>
            <p class="text-slate-300 text-lg">
              We bring deep sector knowledge and specialized recruitment strategies to a diverse range of industries.
            </p>
         </div>

         <!-- Image Grid -->
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div *ngFor="let industry of industries" class="group relative h-80 overflow-hidden cursor-pointer rounded-2xl shadow-lg border border-white/10 hover:border-primary/50 transition-colors duration-500">
               <!-- Background Image -->
               <img 
                 [src]="industry.image" 
                 [alt]="industry.name"
                 class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
               />
               
               <!-- Gradient Overlay -->
               <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/20 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>

               <!-- Content -->
               <div class="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div class="transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                    <div class="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-primary text-2xl mb-4 border border-white/20 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white group-hover:border-transparent transition-all duration-500">
                      <i [class]="industry.icon"></i>
                    </div>
                    <h3 class="text-2xl font-bold text-white mb-2 font-heading">{{ industry.name }}</h3>
                    <div class="h-1 w-12 bg-gradient-to-r from-primary to-orange-500 mb-4 transition-all duration-500 group-hover:w-full rounded-full"></div>
                    <p class="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden leading-relaxed">
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
