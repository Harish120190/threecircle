import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competency',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-24 relative bg-slate-900 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute right-0 top-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/30 to-transparent rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute left-0 bottom-0 w-[500px] h-[500px] bg-gradient-to-tr from-orange-500/20 to-transparent rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div class="container mx-auto px-4 md:px-8 relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
           <div class="flex items-center justify-center gap-3 mb-4">
               <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
               <span class="font-bold uppercase tracking-[0.2em] text-sm text-primary">Why Choose Us</span>
               <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
           </div>
           <h2 class="text-4xl md:text-5xl font-bold text-white font-heading mb-6">
             Our Core <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Competencies</span>
           </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div *ngFor="let item of competencies; let i = index" class="relative group">
            <!-- Glow Effect -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none -z-10"></div>
            
            <!-- Card -->
            <div class="bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2 h-full flex flex-col items-start relative z-10">
              <div class="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-primary text-xl mb-6 font-bold font-heading border border-white/10 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white transition-all duration-500">
                0{{ i + 1 }}
              </div>
              <h3 class="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors font-heading">{{ item.title }}</h3>
              <p class="text-slate-400 text-sm leading-relaxed flex-grow">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class CompetencyComponent {
  competencies = [
    {
      title: 'Global Standards',
      description: 'We adhere to international best practices in all our operations, ensuring world-class service delivery for our clients and candidates.'
    },
    {
      title: 'Tailored Solutions',
      description: 'We understand that every business is unique. Our solutions are customized to meet your specific goals and organizational culture.'
    },
    {
      title: 'Sustainability',
      description: 'We are committed to sustainable business practices that create long-term value for our stakeholders and the community.'
    },
    {
      title: 'Training & Coaching',
      description: 'Beyond recruitment, we empower teams with cutting-edge training and leadership coaching to drive performance.'
    }
  ];
}
