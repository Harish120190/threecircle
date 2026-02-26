import { Injectable, signal } from '@angular/core';

export interface Job {
    id: number;
    title: string;
    location: string;
    type: string;
    category: string;
    description: string;
}

@Injectable({
    providedIn: 'root'
})
export class JobService {
    private readonly STORAGE_KEY = 'three_circles_jobs';

    // Initial mock data if storage is empty
    private defaultJobs: Job[] = [
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

    // Reactive signal holding current jobs
    jobs = signal<Job[]>([]);

    constructor() {
        this.loadJobs();
    }

    private loadJobs() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        if (stored) {
            try {
                this.jobs.set(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse jobs from local storage', e);
                this.jobs.set(this.defaultJobs);
                this.saveJobs(this.defaultJobs);
            }
        } else {
            this.jobs.set(this.defaultJobs);
            this.saveJobs(this.defaultJobs);
        }
    }

    private saveJobs(jobs: Job[]) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(jobs));
    }

    getJobs() {
        return this.jobs();
    }

    getJobById(id: number): Job | undefined {
        return this.jobs().find(j => j.id === id);
    }

    addJob(job: Omit<Job, 'id'>) {
        const currentJobs = this.jobs();
        const newId = currentJobs.length > 0 ? Math.max(...currentJobs.map(j => j.id)) + 1 : 1;
        const newJob = { ...job, id: newId };
        const updatedJobs = [...currentJobs, newJob];

        this.jobs.set(updatedJobs);
        this.saveJobs(updatedJobs);
        return newJob;
    }

    updateJob(updatedJob: Job) {
        const currentJobs = this.jobs();
        const index = currentJobs.findIndex(j => j.id === updatedJob.id);
        if (index !== -1) {
            const updatedArray = [...currentJobs];
            updatedArray[index] = updatedJob;
            this.jobs.set(updatedArray);
            this.saveJobs(updatedArray);
            return true;
        }
        return false;
    }

    deleteJob(id: number) {
        const currentJobs = this.jobs();
        const updatedJobs = currentJobs.filter(j => j.id !== id);
        this.jobs.set(updatedJobs);
        this.saveJobs(updatedJobs);
    }
}
