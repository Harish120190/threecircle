import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
   selector: 'app-services-page',
   standalone: true,
   imports: [CommonModule, RouterLink],
   template: `
    <div class="pt-20">
      <!-- Premium Hero Section -->
      <section class="relative bg-slate-900 text-white min-h-[60vh] flex items-center overflow-hidden">
        <!-- Animated Background Gradients -->
        <div class="absolute inset-0 z-0">
           <div class="absolute top-0 left-0 w-full md:w-[800px] h-[800px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/3 animate-pulse"></div>
           <div class="absolute bottom-0 right-0 w-full md:w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[80px] translate-y-1/3 translate-x-1/4"></div>
           <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        </div>

        <div class="container mx-auto px-4 md:px-8 relative z-10 text-center py-24">
            <div class="inline-flex items-center justify-center gap-3 mb-6 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
               <span class="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-orange-500"></span>
               <span class="text-white font-bold uppercase tracking-[0.2em] text-xs">Our Expertise</span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-8 font-heading leading-tight">
               Solutions That <br/>
               <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Deliver</span>
            </h1>
            <p class="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
              Comprehensive HR and consulting services designed to optimize your workforce and propel your business forward.
            </p>
        </div>
      </section>

      <!-- Detailed Services -->
      <section class="py-32 bg-slate-50 relative overflow-hidden">
        <!-- Abstract subtle shapes -->
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div class="container mx-auto px-4 md:px-8 relative z-10">
           <div class="grid gap-24 lg:gap-32">
              
              <!-- Service Item 1 -->
              <div class="flex flex-col lg:flex-row gap-16 items-center group">
                 <div class="w-full lg:w-5/12 perspective-1000">
                    <div class="relative transform group-hover:rotate-y-6 transition-transform duration-700">
                       <div class="absolute inset-0 bg-gradient-to-tr from-primary to-orange-500 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                       <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Recruitment" class="rounded-3xl shadow-2xl w-full h-[400px] object-cover border-4 border-white relative z-10">
                    </div>
                 </div>
                 <div class="w-full lg:w-7/12 lg:pl-12">
                    <div class="flex items-center gap-4 text-primary mb-6">
                       <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center text-3xl shadow-inner border border-primary/20">
                          <i class="fas fa-users text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500"></i>
                       </div>
                       <div class="h-1 w-12 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
                    </div>
                    <h2 class="text-4xl font-bold text-slate-900 mb-6 font-heading group-hover:text-primary transition-colors">Staffing & Recruitment</h2>
                    <p class="text-slate-600 text-lg leading-relaxed mb-8">
                       We specialize in sourcing top-tier talent for permanent, contract, and temporary positions. Our rigorous screening process ensures a perfect cultural and technical fit for your organization.
                    </p>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 font-medium">
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-primary/20 transition-colors">
                          <i class="fas fa-check-circle text-primary mr-3 text-lg"></i> Executive Search
                       </li>
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-primary/20 transition-colors">
                          <i class="fas fa-check-circle text-primary mr-3 text-lg"></i> Technical Recruitment
                       </li>
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-primary/20 transition-colors">
                          <i class="fas fa-check-circle text-primary mr-3 text-lg"></i> Mass Hiring Campaigns
                       </li>
                    </ul>
                 </div>
              </div>

              <!-- Service Item 2 -->
              <div class="flex flex-col lg:flex-row-reverse gap-16 items-center group">
                 <div class="w-full lg:w-5/12 perspective-1000">
                    <div class="relative transform group-hover:-rotate-y-6 transition-transform duration-700">
                       <div class="absolute inset-0 bg-gradient-to-tr from-orange-500 to-primary rounded-3xl transform -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                       <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Consulting" class="rounded-3xl shadow-2xl w-full h-[400px] object-cover border-4 border-white relative z-10">
                    </div>
                 </div>
                 <div class="w-full lg:w-7/12 lg:pr-12">
                    <div class="flex items-center gap-4 text-orange-500 mb-6">
                       <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-primary/10 flex items-center justify-center text-3xl shadow-inner border border-orange-500/20">
                          <i class="fas fa-chess-knight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-primary"></i>
                       </div>
                       <div class="h-1 w-12 bg-gradient-to-r from-orange-500 to-primary rounded-full"></div>
                    </div>
                    <h2 class="text-4xl font-bold text-slate-900 mb-6 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-primary transition-colors">Strategic Consulting</h2>
                    <p class="text-slate-600 text-lg leading-relaxed mb-8">
                       Our expert consultants analyze your business processes to identify inefficiencies and implement strategic HR frameworks that drive performance and scalability.
                    </p>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 font-medium">
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-orange-500/20 transition-colors">
                          <i class="fas fa-check-circle text-orange-500 mr-3 text-lg"></i> Organizational Restructuring
                       </li>
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-orange-500/20 transition-colors">
                          <i class="fas fa-check-circle text-orange-500 mr-3 text-lg"></i> HR Policy Development
                       </li>
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-orange-500/20 transition-colors">
                          <i class="fas fa-check-circle text-orange-500 mr-3 text-lg"></i> Change Management
                       </li>
                    </ul>
                 </div>
              </div>
              
              <!-- Service Item 3 -->
              <div class="flex flex-col lg:flex-row gap-16 items-center group">
                 <div class="w-full lg:w-5/12 perspective-1000">
                    <div class="relative transform group-hover:rotate-y-6 transition-transform duration-700">
                       <div class="absolute inset-0 bg-slate-900 rounded-3xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                       <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Training" class="rounded-3xl shadow-2xl w-full h-[400px] object-cover border-4 border-white relative z-10">
                    </div>
                 </div>
                 <div class="w-full lg:w-7/12 lg:pl-12">
                    <div class="flex items-center gap-4 text-slate-900 mb-6">
                       <div class="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl shadow-inner border border-slate-200">
                          <i class="fas fa-chalkboard-teacher text-slate-900"></i>
                       </div>
                       <div class="h-1 w-12 bg-slate-900 rounded-full"></div>
                    </div>
                    <h2 class="text-4xl font-bold text-slate-900 mb-6 font-heading group-hover:text-slate-700 transition-colors">Training & Coaching</h2>
                    <p class="text-slate-600 text-lg leading-relaxed mb-8">
                       Empower your workforce with tailored training programs. From leadership development to soft skills workshops, we help your team reach its full potential.
                    </p>
                    <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 font-medium">
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-slate-900/20 transition-colors">
                          <i class="fas fa-check-circle text-slate-900 mr-3 text-lg"></i> Leadership Bootcamps
                       </li>
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-slate-900/20 transition-colors">
                          <i class="fas fa-check-circle text-slate-900 mr-3 text-lg"></i> Sales & Negotiation
                       </li>
                       <li class="flex items-center p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-slate-900/20 transition-colors">
                          <i class="fas fa-check-circle text-slate-900 mr-3 text-lg"></i> Team Building
                       </li>
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </section>

      <!-- Premium Process Driven Section -->
      <section class="py-32 bg-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-5 z-0"></div>
        <div class="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-6xl">
           <div class="flex items-center justify-center gap-3 mb-4">
              <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
              <span class="text-primary font-bold uppercase tracking-[0.2em] text-sm">Methodology</span>
              <div class="w-10 h-1 bg-gradient-to-l from-primary to-orange-500 rounded-full"></div>
           </div>
           <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-20 font-heading">
              How We <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Work</span>
           </h2>
           
           <div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 relative">
              <!-- Animated Line Connector (Desktop) -->
              <div class="hidden md:block absolute top-[60px] left-[10%] w-[80%] h-1 bg-slate-100 rounded-full z-0 overflow-hidden">
                 <div class="w-full h-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-30 animate-[slide_3s_ease-in-out_infinite]"></div>
              </div>
              
              <!-- Step 1 -->
              <div class="group relative pt-6 z-10">
                 <div class="w-32 h-32 mx-auto rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center mb-8 transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-500 relative bg-clip-padding">
                    <!-- Gradient Border Effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-3xl -z-10 m-[-2px]"></div>
                    <div class="absolute inset-0 bg-white rounded-[22px] -z-10 group-hover:bg-slate-50 transition-colors"></div>
                    
                    <span class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-500">1</span>
                 </div>
                 <h3 class="text-2xl font-bold mb-4 text-slate-900 font-heading">Connect</h3>
                 <p class="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">We listen to your specific needs and challenges.</p>
              </div>

              <!-- Step 2 -->
              <div class="group relative pt-6 z-10">
                 <div class="w-32 h-32 mx-auto rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center mb-8 transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-500 relative bg-clip-padding md:translate-y-8">
                    <!-- Gradient Border Effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-orange-500 to-primary rounded-3xl -z-10 m-[-2px]"></div>
                    <div class="absolute inset-0 bg-white rounded-[22px] -z-10 group-hover:bg-slate-50 transition-colors"></div>
                    
                    <span class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-primary">2</span>
                 </div>
                 <h3 class="text-2xl font-bold mb-4 text-slate-900 font-heading md:mt-8">Analyze</h3>
                 <p class="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">Our experts research market trends and data.</p>
              </div>

              <!-- Step 3 -->
              <div class="group relative pt-6 z-10">
                 <div class="w-32 h-32 mx-auto rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center mb-8 transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-500 relative bg-clip-padding">
                    <!-- Gradient Border Effect -->
                    <div class="absolute inset-0 bg-slate-900 rounded-3xl -z-10 m-[-2px]"></div>
                    <div class="absolute inset-0 bg-white rounded-[22px] -z-10 group-hover:bg-slate-50 transition-colors"></div>
                    
                    <span class="text-5xl font-black text-slate-900">3</span>
                 </div>
                 <h3 class="text-2xl font-bold mb-4 text-slate-900 font-heading">Execute</h3>
                 <p class="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">We implement the tailored solution efficiently.</p>
              </div>
              
              <!-- Step 4 -->
              <div class="group relative pt-6 z-10">
                 <div class="w-32 h-32 mx-auto rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center justify-center mb-8 transform group-hover:-translate-y-4 group-hover:scale-105 transition-all duration-500 relative bg-clip-padding md:translate-y-8">
                    <!-- Gradient Border Effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-primary to-orange-500 rounded-3xl -z-10 m-[-2px]"></div>
                    <div class="absolute inset-0 bg-white rounded-[22px] -z-10 group-hover:bg-slate-50 transition-colors"></div>
                    
                    <span class="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-orange-500">4</span>
                 </div>
                 <h3 class="text-2xl font-bold mb-4 text-slate-900 font-heading md:mt-8">Evaluate</h3>
                 <p class="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors">Continuous monitoring and feedback for success.</p>
              </div>
           </div>
        </div>
      </section>
    </div>
  `
})
export class ServicesPageComponent { }
