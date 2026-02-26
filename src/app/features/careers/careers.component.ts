import { Component, signal, inject, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { JobService, Job } from '../../core/services/job.service';

@Component({
   selector: 'app-careers',
   standalone: true,
   imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
        <div class="container mx-auto px-4 md:px-8 flex flex-col gap-6">
           <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div class="flex flex-col md:flex-row gap-4 flex-grow w-full md:w-auto">
                 <div class="flex-grow relative">
                    <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                    <input 
                      type="text" 
                      [ngModel]="searchText()"
                      (ngModelChange)="onSearchChange($event)"
                      placeholder="Search job titles or keywords..." 
                      class="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                    />
                 </div>
                 <div class="w-full md:w-64">
                    <select 
                       [ngModel]="selectedCategory()"
                       (ngModelChange)="onCategoryChange($event)"
                       class="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white"
                    >
                      <option value="">All Categories</option>
                      <option *ngFor="let cat of categories" [value]="cat">{{ cat }}</option>
                    </select>
                 </div>
              </div>

              <!-- General Application Button -->
              <div class="w-full md:w-auto flex justify-center md:justify-end">
                  <button (click)="applyGeneral()" class="bg-white text-primary border border-primary hover:bg-slate-50 font-bold px-6 py-3 rounded-lg shadow-sm w-full md:w-auto flex items-center justify-center transition-colors">
                      <i class="fas fa-paper-plane mr-2"></i> Submit General Application
                  </button>
              </div>
           </div>

           <!-- General Application Form Container -->
           <div *ngIf="applyingJobId() === GENERAL_APPLICATION_ID" class="w-full mt-4 bg-white p-8 rounded-xl shadow-lg border border-primary/20 animate-fade-in">
              <div class="flex justify-between items-center mb-6">
                 <div>
                    <h3 class="text-2xl font-bold text-slate-900">General Application</h3>
                    <p class="text-slate-500 mt-1">Submit your details and we'll contact you if a suitable position becomes available.</p>
                 </div>
                 <button (click)="cancelApplication()" class="text-slate-400 hover:text-red-500 transition-colors">
                     <i class="fas fa-times text-2xl"></i>
                 </button>
              </div>
              <ng-container *ngTemplateOutlet="applicationFormTemplate"></ng-container>
           </div>
        </div>
      </section>

      <!-- Job Listings -->
      <section class="py-16 bg-white min-h-[50vh]">
        <div class="container mx-auto px-4 md:px-8">
           <div *ngIf="filteredJobs().length > 0; else noJobs">
              <div class="grid gap-6">
                 <div *ngFor="let job of filteredJobs()" class="group bg-white border border-slate-200 p-8 rounded-lg transition-all duration-300 flex flex-col items-start"
                      [ngClass]="{'border-primary shadow-lg': expandedJobId() === job.id}">
                    
                    <!-- Job Header -->
                    <div class="flex flex-col md:flex-row justify-between w-full items-start md:items-center">
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
                              {{ expandedJobId() === job.id ? 'Close' : 'View Details' }}
                           </button>
                           <button *ngIf="applyingJobId() !== job.id" (click)="applyForJob(job)" class="btn btn-primary py-2 px-6 text-xs w-full md:w-auto">
                              Apply Now
                           </button>
                        </div>
                    </div>
                    
                    <!-- Expanded Details -->
                    <div *ngIf="expandedJobId() === job.id && applyingJobId() !== job.id" class="w-full mt-6 pt-6 border-t border-slate-100 text-slate-600 leading-relaxed animate-fade-in">
                       <p class="mb-4"><strong>Job Description:</strong><br>{{ job.description }}</p>
                       <p class="mb-4"><strong>Requirements:</strong></p>
                       <ul class="list-disc pl-5 space-y-2 mb-6">
                          <li>Bachelor's degree in related field</li>
                          <li>3+ years of experience</li>
                          <li>Strong communication skills</li>
                          <li>Proficiency in English and Arabic is a plus</li>
                       </ul>
                    </div>

                    <!-- Application Form -->
                    <div *ngIf="applyingJobId() === job.id" class="w-full mt-8 pt-8 border-t-2 border-primary/20 animate-fade-in">
                        <div class="flex justify-between items-center mb-6">
                            <h3 class="text-xl font-bold text-slate-900">Application Form</h3>
                            <button (click)="cancelApplication()" class="text-slate-400 hover:text-red-500 transition-colors">
                                <i class="fas fa-times text-xl"></i>
                            </button>
                        </div>
                        <ng-container *ngTemplateOutlet="applicationFormTemplate"></ng-container>
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

           <!-- Application Form Template (Reusable) -->
           <ng-template #applicationFormTemplate>
              <form [formGroup]="applicationForm" action="https://formsubmit.co/0312harish@gmail.com" method="POST" enctype="multipart/form-data" class="grid grid-cols-1 md:grid-cols-2 gap-6 p-1">
                  <!-- Hidden inputs for FormSubmit Configuration -->
                  <input type="hidden" name="_subject" [value]="'New Job Application: ' + applicationForm.get('appliedPosition')?.value + ' from ' + applicationForm.get('name')?.value">
                  <input type="hidden" name="_captcha" value="false">
                  <input type="hidden" name="_template" value="table">
                  <input type="hidden" name="_cc" value="gobiapache@gmail.com">
                  <input type="hidden" name="_next" value="http://localhost:4200/careers?success=true">
                  
                  <!-- 1. Name -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Full Name *</label>
                      <input type="text" name="name" formControlName="name" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="John Doe">
                  </div>

                  <!-- 2. Phone (Whatsapp Number) -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Phone (WhatsApp Number) *</label>
                      <input type="tel" name="phone" formControlName="phone" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="+1234567890">
                  </div>

                  <!-- 3. Gender -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Gender *</label>
                      <select name="gender" formControlName="gender" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                      </select>
                  </div>

                  <!-- 4. Email -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Email ID *</label>
                      <input type="email" name="email" formControlName="email" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="john@example.com">
                  </div>

                  <!-- 5. Present Organization -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Present Organization</label>
                      <input type="text" name="presentOrganization" formControlName="presentOrganization" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Company Name">
                  </div>

                  <!-- 6. Present Position -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Present Position</label>
                      <input type="text" name="presentPosition" formControlName="presentPosition" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Job Title">
                  </div>

                  <!-- 7. Applied Position (Drop Down) -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Applied Position *</label>
                      <select name="appliedPosition" formControlName="appliedPosition" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                          <option *ngFor="let j of jobService.jobs()" [value]="j.title">{{ j.title }}</option>
                          <option value="Other">Other Position</option>
                      </select>
                  </div>

                  <!-- 8. Current Location -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Current Location *</label>
                      <input type="text" name="currentLocation" formControlName="currentLocation" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="City, Country">
                  </div>

                  <!-- 9. Experience -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Experience (Years) *</label>
                      <input type="text" name="experience" formControlName="experience" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. 5 Years">
                  </div>

                  <!-- 10. Nationality -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Nationality *</label>
                      <input type="text" name="nationality" formControlName="nationality" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Indian, Omani">
                  </div>

                  <!-- 11. Age -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Age *</label>
                      <input type="number" name="age" formControlName="age" required min="18" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="Age in years">
                  </div>

                  <!-- 12. Salary -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Expected Salary (with Currency) *</label>
                      <input type="text" name="salary" formControlName="salary" required class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. 1000 OMR">
                  </div>

                  <!-- 13. Passport Expiry Date -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Passport Expiry Date (dd/mm/yyyy)</label>
                      <input type="date" name="passportExpiryDate" formControlName="passportExpiryDate" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                  </div>

                  <!-- 14. Visa Type -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Visa Type</label>
                      <input type="text" name="visaType" formControlName="visaType" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Employment, Visit">
                  </div>

                  <!-- 15. Visa Expiry Date -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Visa Expiry Date (dd/mm/yyyy)</label>
                      <input type="date" name="visaExpiryDate" formControlName="visaExpiryDate" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                  </div>

                  <!-- 16. NOC/Visa Transfer -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">NOC / Visa Transfer</label>
                      <select name="nocVisaTransfer" formControlName="nocVisaTransfer" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                          <option value="Yes">Yes</option>
                          <option value="No">No</option>
                      </select>
                  </div>

                  <!-- 18. Source -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">How did you know about this opportunity?</label>
                      <input type="text" name="source" formControlName="source" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. LinkedIn, Reference">
                  </div>

                  <!-- 19. Driving License -->
                  <div class="form-group">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Driving License (Gulf/Home country)</label>
                      <select name="drivingLicense" formControlName="drivingLicense" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                          <option value="No">No</option>
                          <option value="Yes - Gulf">Yes - Gulf</option>
                          <option value="Yes - Home Country">Yes - Home Country</option>
                      </select>
                  </div>

                  <!-- 17. Resume -->
                  <div class="form-group md:col-span-2">
                      <label class="block text-sm font-medium text-slate-700 mb-1">Resume (PDF File) *</label>
                      <div class="relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center transition-colors cursor-pointer"
                           [ngClass]="selectedFileName() ? 'border-green-500 bg-green-50' : 'border-slate-300 bg-slate-50 hover:bg-slate-100'"
                           (click)="fileInput.click()">
                           
                           <!-- Default State -->
                           <div *ngIf="!selectedFileName()" class="flex flex-col items-center justify-center p-4">
                              <i class="fas fa-upload text-4xl text-primary mb-3"></i>
                              <span class="text-sm text-slate-500 font-medium">Click to upload your Resume (PDF only)</span>
                           </div>

                           <!-- Uploaded State -->
                           <div *ngIf="selectedFileName()" class="flex flex-col items-center justify-center p-4">
                              <i class="fas fa-file-pdf text-5xl text-red-500 mb-3"></i>
                              <span class="text-sm font-bold text-slate-800 text-center">{{ selectedFileName() }}</span>
                              <span class="text-xs text-green-600 mt-2 font-bold flex items-center">
                                  <i class="fas fa-check-circle mr-1 text-sm"></i> Successfully Attached
                              </span>
                           </div>

                           <input #fileInput type="file" name="attachment" accept=".pdf" required (change)="onFileSelected($event)" class="hidden">
                      </div>
                      <p *ngIf="formSubmitted && applicationForm.get('resume')?.errors?.['required']" class="text-red-500 text-xs mt-1">
                          Resume is required.
                      </p>
                  </div>
                  <!-- Submit Action -->
                  <div class="md:col-span-2 pt-4 flex flex-col md:flex-row gap-4 justify-end border-t border-slate-100 mt-2">
                      <button type="button" (click)="cancelApplication()" class="px-6 py-2 rounded-lg border border-slate-300 text-slate-600 hover:bg-slate-50 font-medium transition-colors">
                          Cancel
                      </button>
                      <button type="button" (click)="validateAndSubmit($event)" class="btn btn-primary px-8 py-2 min-w-[150px] shadow-md shadow-primary/30">
                          Submit Application
                      </button>
                      <!-- The actual submit button is hidden, we trigger it programmatically if valid -->
                      <button #actualSubmitBtn type="submit" class="hidden"></button>
                  </div>

                  <!-- Success/Error Messages -->
                  <div *ngIf="submitStatus === 'success'" class="md:col-span-2 p-4 bg-green-50 text-green-700 rounded-lg border border-green-200 mt-2 flex items-center">
                      <i class="fas fa-check-circle mr-2 text-xl"></i> Application submitted successfully! We will contact you soon.
                  </div>
                  <div *ngIf="submitStatus === 'error'" class="md:col-span-2 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 mt-2 flex items-center">
                      <i class="fas fa-exclamation-circle mr-2 text-xl"></i> Please fill out all required fields correctly.
                  </div>

              </form>
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
   private jobService = inject(JobService);

   searchText = signal('');
   selectedCategory = signal('');
   expandedJobId = signal<number | null>(null);

   // Reactive signal for filtered jobs
   filteredJobs = computed(() => {
      const jobs = this.jobService.jobs();
      const search = this.searchText().toLowerCase();
      const category = this.selectedCategory();
      return jobs.filter(job => {
         const matchesSearch = job.title.toLowerCase().includes(search) ||
            job.description.toLowerCase().includes(search);
         const matchesCategory = category ? job.category === category : true;
         return matchesSearch && matchesCategory;
      });
   });

   // Application Form State
   readonly GENERAL_APPLICATION_ID = -1; // Special ID for general applications
   applyingJobId = signal<number | null>(null);
   applicationForm: FormGroup;
   formSubmitted = false;
   isSubmitting = false;
   selectedFileName = signal<string>('');
   submitStatus: 'idle' | 'success' | 'error' = 'idle';

   private fb = inject(FormBuilder);

   constructor() {
      this.applicationForm = this.fb.group({
         name: ['', Validators.required],
         phone: ['', Validators.required],
         gender: ['', Validators.required],
         email: ['', [Validators.required, Validators.email]],
         presentOrganization: [''],
         presentPosition: [''],
         appliedPosition: ['', Validators.required],
         currentLocation: ['', Validators.required],
         experience: ['', Validators.required],
         nationality: ['', Validators.required],
         age: ['', [Validators.required, Validators.min(18)]],
         salary: ['', Validators.required],
         passportExpiryDate: [''],
         visaType: [''],
         visaExpiryDate: [''],
         nocVisaTransfer: ['No'],
         resume: [null, Validators.required],
         source: [''],
         drivingLicense: ['No']
      });
   }

   get categories() {
      return [...new Set(this.jobService.jobs().map(j => j.category))];
   }

   onSearchChange(val: string) {
      this.searchText.set(val);
   }

   onCategoryChange(val: string) {
      this.selectedCategory.set(val);
   }

   toggleDetails(id: number) {
      this.expandedJobId.update(currentId => currentId === id ? null : id);
   }

   applyForJob(job: Job) {
      this.applyingJobId.set(job.id);
      this.expandedJobId.set(job.id); // Also expand details but we hide it if applying
      this.formSubmitted = false;
      this.submitStatus = 'idle';
      this.selectedFileName.set('');
      this.applicationForm.reset({
         appliedPosition: job.title,
         nocVisaTransfer: 'No',
         drivingLicense: 'No'
      });
   }

   applyGeneral() {
      this.applyingJobId.set(this.GENERAL_APPLICATION_ID);
      this.expandedJobId.set(null); // Close any expanded specific job
      this.formSubmitted = false;
      this.submitStatus = 'idle';
      this.selectedFileName.set('');
      this.applicationForm.reset({
         appliedPosition: 'General Application',
         nocVisaTransfer: 'No',
         drivingLicense: 'No'
      });
      // Scroll to top where the general form appears
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }

   cancelApplication() {
      this.applyingJobId.set(null);
      this.applicationForm.reset();
      this.submitStatus = 'idle';
   }

   onFileSelected(event: any) {
      const file = event.target.files[0];
      if (file) {
         // Some browsers/OS combinations may not correctly identify the MIME type, so check extension too
         const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

         if (isPdf) {
            this.selectedFileName.set(file.name);
            this.applicationForm.patchValue({ resume: file });
         } else {
            alert('Please select a valid PDF file.');
            event.target.value = ''; // Reset the input if invalid
         }
      }
   }

   validateAndSubmit(event: Event) {
      this.formSubmitted = true;
      if (this.applicationForm.valid) {
         this.isSubmitting = true;

         // To bypass Angular's form interception and trigger the native action POST,
         // we must call the native HTMLFormElement.submit() method programmatically.
         const btn = event.target as HTMLElement;
         const formContainer = btn.closest('form') as HTMLFormElement;
         if (formContainer) {
            formContainer.submit();
         }
      } else {
         this.submitStatus = 'error';
         this.markFormGroupTouched(this.applicationForm);
      }
   }

   private markFormGroupTouched(formGroup: FormGroup) {
      Object.values(formGroup.controls).forEach(control => {
         control.markAsTouched();
         if ((control as any).controls) {
            this.markFormGroupTouched(control as FormGroup);
         }
      });
   }
}
