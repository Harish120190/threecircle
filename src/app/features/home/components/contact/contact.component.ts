import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-24 bg-slate-50">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Info & Map -->
          <div>
            <h4 class="text-primary font-bold uppercase tracking-wider mb-2">Get in Touch</h4>
            <h2 class="text-3xl md:text-4xl font-bold text-secondary mb-6">Let's Start a Conversation</h2>
            <p class="text-slate-500 mb-8 leading-relaxed">
              Whether you're an employer looking for top talent or a professional seeking your next career move, we're here to help. Reach out to us today.
            </p>

            <div class="space-y-6 mb-12">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 class="font-bold text-secondary text-lg">Visit Us</h3>
                  <p class="text-slate-500">Three Circles International SPC<br>Muscat, Sultanate of Oman</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h3 class="font-bold text-secondary text-lg">Call Us</h3>
                  <p class="text-slate-500">+968 7722 1164</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-primary flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h3 class="font-bold text-secondary text-lg">Email Us</h3>
                  <p class="text-slate-500">{{ 'info@threecircles.com' }}</p>
                </div>
              </div>
            </div>

            <!-- Google Map Placeholder -->
            <div class="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793746!2d58.423985!3d23.588031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa8879619df%3A0x956372075e54bc28!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy">
              </iframe>
              <div class="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-2xl"></div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
            <h3 class="text-2xl font-bold text-secondary mb-6">Send us a Message</h3>
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" class="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" class="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                    placeholder="+968 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" class="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="type" class="block text-sm font-medium text-slate-700 mb-2">I am a...</label>
                <select 
                  id="type" 
                  formControlName="type"
                  class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none bg-white"
                >
                  <option value="Employer">Employer looking for talent</option>
                  <option value="Job Seeker">Job Seeker looking for work</option>
                  <option value="Partner">Potential Business Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" class="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="4"
                  class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-orange-600 transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>

              <p *ngIf="submitSuccess" class="text-green-600 text-center font-medium animate-pulse">
                Thank you! Your message has been sent successfully.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  fb = inject(FormBuilder);

  contactForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    phone: [''],
    type: ['Employer'],
    message: ['', Validators.required]
  });

  isSubmitting = false;
  submitSuccess = false;

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.contactForm.reset({ type: 'Employer' });
        setTimeout(() => this.submitSuccess = false, 5000);
      }, 1500);
    }
  }
}
