import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-services-page',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="relative bg-slate-900 text-white py-32 overflow-hidden">
        <div class="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div class="container mx-auto px-4 md:px-8 relative z-10 text-center">
            <h4 class="text-primary font-bold uppercase tracking-widest text-sm mb-4">Our Expertise</h4>
            <h1 class="text-5xl md:text-6xl font-bold mb-6">Solutions That Deliver</h1>
            <p class="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Comprehensive HR and consulting services designed to optimize your workforce and propel your business forward.
            </p>
        </div>
      </section>

      <!-- Detailed Services -->
      <section class="py-24 bg-white">
        <div class="container mx-auto px-4 md:px-8">
           <div class="grid gap-16">
              <!-- Service Item 1 -->
              <div class="flex flex-col md:flex-row gap-12 items-center border-b border-slate-100 pb-16">
                 <div class="w-full md:w-1/3">
                    <div class="text-primary text-6xl mb-6"><i class="fas fa-users"></i></div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-4">Staffing & Recruitment</h2>
                    <p class="text-slate-600 text-lg leading-relaxed">
                       We specialize in sourcing top-tier talent for permanent, contract, and temporary positions. Our rigorous screening process ensures a perfect cultural and technical fit for your organization.
                    </p>
                    <ul class="mt-6 space-y-2 text-slate-700 font-medium">
                       <li><i class="fas fa-check text-primary mr-2"></i> Executive Search</li>
                       <li><i class="fas fa-check text-primary mr-2"></i> Technical Recruitment</li>
                       <li><i class="fas fa-check text-primary mr-2"></i> Mass Hiring Campaigns</li>
                    </ul>
                 </div>
                 <div class="w-full md:w-2/3">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Recruitment" class="rounded-xl shadow-lg w-full h-80 object-cover">
                 </div>
              </div>

              <!-- Service Item 2 -->
              <div class="flex flex-col md:flex-row-reverse gap-12 items-center border-b border-slate-100 pb-16">
                 <div class="w-full md:w-1/3">
                    <div class="text-secondary text-6xl mb-6"><i class="fas fa-chess-knight"></i></div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-4">Strategic Consulting</h2>
                    <p class="text-slate-600 text-lg leading-relaxed">
                       Our expert consultants analyze your business processes to identify inefficiencies and implement strategic HR frameworks that drive performance and scalability.
                    </p>
                    <ul class="mt-6 space-y-2 text-slate-700 font-medium">
                       <li><i class="fas fa-check text-secondary mr-2"></i> Organizational Restructuring</li>
                       <li><i class="fas fa-check text-secondary mr-2"></i> HR Policy Development</li>
                       <li><i class="fas fa-check text-secondary mr-2"></i> Change Management</li>
                    </ul>
                 </div>
                 <div class="w-full md:w-2/3">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Consulting" class="rounded-xl shadow-lg w-full h-80 object-cover">
                 </div>
              </div>
              
              <!-- Service Item 3 -->
              <div class="flex flex-col md:flex-row gap-12 items-center">
                 <div class="w-full md:w-1/3">
                    <div class="text-slate-900 text-6xl mb-6"><i class="fas fa-chalkboard-teacher"></i></div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-4">Training & Coaching</h2>
                    <p class="text-slate-600 text-lg leading-relaxed">
                       Empower your workforce with tailored training programs. From leadership development to soft skills workshops, we help your team reach its full potential.
                    </p>
                    <ul class="mt-6 space-y-2 text-slate-700 font-medium">
                       <li><i class="fas fa-check text-slate-900 mr-2"></i> Leadership Bootcamps</li>
                       <li><i class="fas fa-check text-slate-900 mr-2"></i> Sales & Negotiation</li>
                       <li><i class="fas fa-check text-slate-900 mr-2"></i> Team Building</li>
                    </ul>
                 </div>
                 <div class="w-full md:w-2/3">
                    <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Training" class="rounded-xl shadow-lg w-full h-80 object-cover">
                 </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="py-24 bg-slate-50">
        <div class="container mx-auto px-4 md:px-8 text-center">
           <h2 class="text-3xl font-bold text-slate-900 mb-16">How We Work</h2>
           
           <div class="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <!-- Line Connector (Desktop) -->
              <div class="hidden md:block absolute top-12 left-0 w-full h-1 bg-slate-200 -z-10"></div>
              
              <div class="bg-white p-8 rounded-lg shadow-sm relative">
                 <div class="w-24 h-24 bg-primary text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-slate-50">1</div>
                 <h3 class="text-xl font-bold mb-2">Connect</h3>
                 <p class="text-slate-600 text-sm">We listen to your specific needs and challenges.</p>
              </div>

              <div class="bg-white p-8 rounded-lg shadow-sm relative">
                 <div class="w-24 h-24 bg-secondary text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-slate-50">2</div>
                 <h3 class="text-xl font-bold mb-2">Analyze</h3>
                 <p class="text-slate-600 text-sm">Our experts research market trends and data.</p>
              </div>

              <div class="bg-white p-8 rounded-lg shadow-sm relative">
                 <div class="w-24 h-24 bg-slate-900 text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-slate-50">3</div>
                 <h3 class="text-xl font-bold mb-2">Execute</h3>
                 <p class="text-slate-600 text-sm">We implement the tailored solution efficiently.</p>
              </div>
              
              <div class="bg-white p-8 rounded-lg shadow-sm relative">
                 <div class="w-24 h-24 bg-green-600 text-white text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6 border-8 border-slate-50">4</div>
                 <h3 class="text-xl font-bold mb-2">Evaluate</h3>
                 <p class="text-slate-600 text-sm">Continuous monitoring and feedback for success.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesPageComponent { }
