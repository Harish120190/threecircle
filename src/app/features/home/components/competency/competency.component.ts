import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-competency',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-20 relative bg-secondary overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute right-0 top-0 w-[500px] h-[500px] border-[50px] border-white rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div class="absolute left-0 bottom-0 w-[300px] h-[300px] border-[30px] border-primary rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <div class="text-center mb-16">
           <h4 class="text-primary font-bold uppercase tracking-wider mb-2">Why Choose Us</h4>
           <h2 class="text-3xl md:text-4xl font-bold text-white">Our Core Competencies</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div *ngFor="let item of competencies" class="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors group">
            <h3 class="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{{ item.title }}</h3>
            <p class="text-slate-400 text-sm leading-relaxed">{{ item.description }}</p>
            <div class="w-12 h-1 bg-primary mt-6 rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
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
