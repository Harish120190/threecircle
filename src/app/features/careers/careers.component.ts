import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Job {
   id: number;
   title: string;
   location: string;
   type: string;
   category: string;
   description: string;
}

@Component({
   selector: 'app-careers',
   standalone: true,
   imports: [CommonModule, FormsModule],
   template: `
    <div class="pt-20">
      <!-- Hero Section -->
      <section class="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div class="container mx-auto px-4 md:px-8 relative z-10">
          <div class="max-w-3xl">
            <h4 class="text-primary font-bold uppercase tracking-widest text-sm mb-3">Join Our Context</h4>
            <h1 class="text-5xl font-bold mb-6">Build Your Career With Us</h1>
            <p class="text-xl text-slate-300 leading-relaxed mb-8">
              Explore opportunities to work with industry leaders and shape the future of recruitment and consultancy.
            </p>
          </div>
        </div>
      </section>

      <!-- Search & Filter -->
      <section class="bg-slate-100 py-8 border-b border-slate-200 sticky top-20 z-40">
        <div class="container mx-auto px-4 md:px-8">
           <div class="flex flex-col md:flex-row gap-4">
              <div class="flex-grow relative">
                 <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                 <input 
                   type="text" 
                   [(ngModel)]="searchText"
                   (ngModelChange)="filterJobs()"
                   placeholder="Search job titles or keywords..." 
                   class="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                 />
              </div>
              <div class="md:w-1/4">
                 <select 
                    [(ngModel)]="selectedCategory"
                    (ngModelChange)="filterJobs()"
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
                 >
                   <option value="">All Categories</option>
                   <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
                 </select>
              </div>
           </div>
        </div>
      </section>

      <!-- Job Listings -->
      <section class="py-16 bg-white min-h-[50vh]">
        <div class="container mx-auto px-4 md:px-8">
           <div *ngIf="filteredJobs().length > 0; else noJobs">
              <div class="grid gap-6">
                 <div *ngFor="let job of filteredJobs()" class="group bg-white border border-slate-200 p-8 rounded-lg hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                       <h3 class="text-2xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2">{{ job.title }}</h3>
                       <div class="flex flex-wrap gap-4 text-sm text-slate-500 mb-4 md:mb-0">
                          <span class="flex items-center"><i class="fas fa-map-marker-alt mr-2"></i> {{ job.location }}</span>
                          <span class="flex items-center"><i class="fas fa-briefcase mr-2"></i> {{ job.type }}</span>
                          <span class="flex items-center"><i class="fas fa-tag mr-2"></i> {{ job.category }}</span>
                       </div>
                    </div>
                    <div class="flex flex-col md:flex-row gap-4 w-full md:w-auto mt-4 md:mt-0">
                       <button (click)="toggleDetails(job.id)" class="text-slate-600 font-bold text-sm hover:text-primary transition-colors uppercase tracking-wider">
                          {{ expandedJobId() === job.id ? 'Close Details' : 'View Details' }}
                       </button>
                       <a href="mailto:info@threecircles.com?subject=Application for {{job.title}}" class="btn btn-primary py-2 px-6 text-xs">
                          Apply Now
                       </a>
                    </div>
                    
                    <!-- Expanded Details -->
                    <div *ngIf="expandedJobId() === job.id" class="w-full mt-6 pt-6 border-t border-slate-100 text-slate-600 leading-relaxed animate-fade-in">
                       <p class="mb-4"><strong>Job Description:</strong><br>{{ job.description }}</p>
                       <p class="mb-4"><strong>Requirements:</strong></p>
                       <ul class="list-disc pl-5 space-y-2 mb-6">
                          <li>Bachelor's degree in related field</li>
                          <li>3+ years of experience</li>
                          <li>Strong communication skills</li>
                          <li>Proficiency in English and Arabic is a plus</li>
                       </ul>
                       <p class="text-sm italic text-slate-400">Please send your CV to {{ 'info@threecircles.com' }} with the job title in the subject line.</p>
                    </div>
                 </div>
              </div>
           </div>
           
           <ng-template #noJobs>
              <div class="text-center py-16">
                 <div class="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400 text-3xl">
                    <i class="fas fa-search"></i>
                 </div>
                 <h3 class="text-xl font-bold text-slate-900 mb-2">No positions found</h3>
                 <p class="text-slate-500">Try adjusting your search criteria or check back later.</p>
              </div>
           </ng-template>
        </div>
      </section>
    </div>
  `,
   styles: [`
    .animate-fade-in {
      animation: fadeIn 0.3s ease-out forwards;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class CareersComponent {
   jobs: Job[] = [
      {
         id: 1,
         title: 'Senior Recruitment Consultant',
         location: 'Muscat, Oman',
         type: 'Full-time',
         category: 'Recruitment',
         description: 'We are looking for an experienced Recruitment Consultant to join our growing team. You will be responsible for sourcing, screening, and placing top talent across various industries including Oil & Gas and Construction.'
      },
      {
         id: 2,
         title: 'Business Development Manager',
         location: 'Dubai, UAE',
         type: 'Full-time',
         category: 'Sales',
         description: 'Drive business growth by identifying new opportunities and building strong relationships with corporate clients. Proven track record in B2B sales within the HR or Service industry is required.'
      },
      {
         id: 3,
         title: 'HR Coordinator',
         location: 'Muscat, Oman',
         type: 'Contract',
         category: 'Human Resources',
         description: 'Support the HR team with daily administrative tasks, employee onboarding, and record maintenance. Excellent organizational skills and attention to detail are essential.'
      },
      {
         id: 4,
         title: 'Digital Marketing Specialist',
         location: 'Remote / Hybrid',
         type: 'Part-time',
         category: 'Marketing',
         description: 'Manage our digital presence, creating engaging content for social media and overseeing our digital ad campaigns. Experience with SEO/SEM and content creation tools is a must.'
      }
   ];

   filteredJobs = signal<Job[]>(this.jobs);
   searchText = '';
   selectedCategory = '';
   expandedJobId = signal<number | null>(null);

   get categories() {
      return [...new Set(this.jobs.map(j => j.category))];
   }

   filterJobs() {
      this.filteredJobs.set(this.jobs.filter(job => {
         const matchesSearch = job.title.toLowerCase().includes(this.searchText.toLowerCase()) ||
            job.description.toLowerCase().includes(this.searchText.toLowerCase());
         const matchesCategory = this.selectedCategory ? job.category === this.selectedCategory : true;
         return matchesSearch && matchesCategory;
      }));
   }

   toggleDetails(id: number) {
      this.expandedJobId.update(currentId => currentId === id ? null : id);
   }
}
