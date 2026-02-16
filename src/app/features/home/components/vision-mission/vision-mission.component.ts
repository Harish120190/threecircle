import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 bg-slate-50">
      <div class="container mx-auto px-4 md:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <!-- Vision Card -->
          <div class="bg-white p-10 shadow-lg border-t-4 border-primary hover:shadow-2xl transition-all duration-300">
             <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-primary text-2xl mb-6">
                <i class="fas fa-eye"></i>
             </div>
             <h3 class="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
             <p class="text-slate-600 leading-relaxed">
               To be the most trusted and innovative partner in human capital solutions, driving growth for businesses and careers across the globe.
             </p>
          </div>

          <!-- Mission Card -->
          <div class="bg-white p-10 shadow-lg border-t-4 border-secondary hover:shadow-2xl transition-all duration-300">
             <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-secondary text-2xl mb-6">
                <i class="fas fa-bullseye"></i>
             </div>
             <h3 class="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
             <p class="text-slate-600 leading-relaxed">
               Delivering excellence through tailored recruitment strategies, comprehensive training, and ethical practices that empower organizations and individuals.
             </p>
          </div>

          <!-- Values Card -->
           <div class="bg-white p-10 shadow-lg border-t-4 border-slate-900 hover:shadow-2xl transition-all duration-300">
             <div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center text-slate-900 text-2xl mb-6">
                <i class="fas fa-gem"></i>
             </div>
             <h3 class="text-2xl font-bold text-slate-900 mb-4">Core Values</h3>
             <ul class="space-y-3 text-slate-600">
               <li class="flex items-center"><i class="fas fa-check text-primary mr-3"></i> Integrity & Ethics</li>
               <li class="flex items-center"><i class="fas fa-check text-primary mr-3"></i> Excellence & Quality</li>
               <li class="flex items-center"><i class="fas fa-check text-primary mr-3"></i> Innovation & Growth</li>
               <li class="flex items-center"><i class="fas fa-check text-primary mr-3"></i> Client-Centricity</li>
             </ul>
          </div>

        </div>
      </div>
    </section>
  `
})
export class VisionMissionComponent { }
