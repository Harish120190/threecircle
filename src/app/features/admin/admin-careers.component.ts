import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JobService, Job } from '../../core/services/job.service';

@Component({
    selector: 'app-admin-careers',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    template: `
    <div class="min-h-screen bg-slate-50 pt-24 pb-12">
      <div class="container mx-auto px-4 md:px-8 max-w-6xl">
        
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-3xl font-bold text-slate-900 font-heading">Manage Job Vacancies</h1>
                <p class="text-slate-500 mt-2">Add, edit, or remove job postings from the Careers page.</p>
            </div>
            <button *ngIf="!showForm()" (click)="openAddForm()" class="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-lg shadow-md transition-colors flex items-center gap-2">
                <i class="fas fa-plus"></i> Add New Job
            </button>
        </div>

        <!-- Form Section -->
        <div *ngIf="showForm()" class="bg-white rounded-xl shadow-lg border border-slate-200 p-8 mb-8 animate-fade-in">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-xl font-bold text-slate-800">{{ isEditing() ? 'Edit Job Vacancy' : 'Create New Job Vacancy' }}</h2>
                <button (click)="closeForm()" class="text-slate-400 hover:text-red-500 transition-colors">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>

            <form [formGroup]="jobForm" (ngSubmit)="saveJob()" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Title -->
                <div class="form-group md:col-span-2">
                    <label class="block text-sm font-medium text-slate-700 mb-1">Job Title *</label>
                    <input type="text" formControlName="title" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Senior Software Engineer">
                </div>

                <!-- Location -->
                <div class="form-group">
                    <label class="block text-sm font-medium text-slate-700 mb-1">Location *</label>
                    <input type="text" formControlName="location" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Muscat, Oman">
                </div>

                <!-- Category -->
                <div class="form-group">
                    <label class="block text-sm font-medium text-slate-700 mb-1">Category *</label>
                    <input type="text" formControlName="category" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="e.g. Engineering, Sales">
                </div>

                <!-- Type -->
                <div class="form-group">
                    <label class="block text-sm font-medium text-slate-700 mb-1">Job Type *</label>
                    <select formControlName="type" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-white">
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Freelance">Freelance</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>

                <!-- Description -->
                <div class="form-group md:col-span-2">
                    <label class="block text-sm font-medium text-slate-700 mb-1">Description *</label>
                    <textarea formControlName="description" rows="5" class="w-full px-4 py-2 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none resize-none" placeholder="Enter detailed job description..."></textarea>
                </div>

                <!-- Actions -->
                <div class="md:col-span-2 flex justify-end gap-4 mt-4 pt-6 border-t border-slate-100">
                    <button type="button" (click)="closeForm()" class="px-6 py-2 border border-slate-300 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">Cancel</button>
                    <button type="submit" [disabled]="jobForm.invalid" class="bg-primary hover:bg-orange-600 text-white px-8 py-2 rounded-lg shadow-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        {{ isEditing() ? 'Update Job' : 'Save Job' }}
                    </button>
                </div>
            </form>
        </div>

        <!-- Jobs List -->
        <div class="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
            <div *ngIf="jobService.jobs().length === 0" class="p-12 text-center text-slate-500">
                <i class="fas fa-inbox text-4xl mb-4 text-slate-300"></i>
                <p>No job vacancies found. Click 'Add New Job' to create one.</p>
            </div>
            
            <table *ngIf="jobService.jobs().length > 0" class="w-full text-left border-collapse">
                <thead>
                    <tr class="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm uppercase tracking-wider">
                        <th class="p-4 font-medium">Title</th>
                        <th class="p-4 font-medium hidden md:table-cell">Category</th>
                        <th class="p-4 font-medium hidden sm:table-cell">Location</th>
                        <th class="p-4 font-medium hidden lg:table-cell">Type</th>
                        <th class="p-4 font-medium text-right">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let job of jobService.jobs()" class="border-b border-slate-100 hover:bg-slate-50 transition-colors group">
                        <td class="p-4">
                            <div class="font-bold text-slate-800">{{ job.title }}</div>
                            <div class="text-sm text-slate-500 lg:hidden mt-1">{{ job.type }} &bull; {{ job.category }}</div>
                        </td>
                        <td class="p-4 hidden md:table-cell text-slate-600">{{ job.category }}</td>
                        <td class="p-4 hidden sm:table-cell text-slate-600">{{ job.location }}</td>
                        <td class="p-4 hidden lg:table-cell flex items-center">
                            <span class="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">{{ job.type }}</span>
                        </td>
                        <td class="p-4 text-right space-x-2">
                            <button (click)="openEditForm(job)" class="text-blue-500 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 p-2 rounded transition-colors" title="Edit">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button (click)="deleteJob(job.id)" class="text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 p-2 rounded transition-colors" title="Delete">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

      </div>
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
export class AdminCareersComponent {
    jobService = inject(JobService);
    fb = inject(FormBuilder);

    showForm = signal(false);
    isEditing = signal(false);
    editingJobId = signal<number | null>(null);

    jobForm: FormGroup = this.fb.group({
        title: ['', Validators.required],
        location: ['', Validators.required],
        type: ['Full-time', Validators.required],
        category: ['', Validators.required],
        description: ['', Validators.required]
    });

    openAddForm() {
        this.isEditing.set(false);
        this.editingJobId.set(null);
        this.jobForm.reset({ type: 'Full-time' });
        this.showForm.set(true);
    }

    openEditForm(job: Job) {
        this.isEditing.set(true);
        this.editingJobId.set(job.id);
        this.jobForm.patchValue({
            title: job.title,
            location: job.location,
            type: job.type,
            category: job.category,
            description: job.description
        });
        this.showForm.set(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    closeForm() {
        this.showForm.set(false);
        this.jobForm.reset();
    }

    saveJob() {
        if (this.jobForm.invalid) return;

        const formValue = this.jobForm.value;

        if (this.isEditing() && this.editingJobId() !== null) {
            this.jobService.updateJob({
                id: this.editingJobId()!,
                ...formValue
            });
        } else {
            this.jobService.addJob(formValue);
        }

        this.closeForm();
    }

    deleteJob(id: number) {
        if (confirm('Are you sure you want to delete this job vacancy? This action cannot be undone.')) {
            this.jobService.deleteJob(id);
        }
    }
}
