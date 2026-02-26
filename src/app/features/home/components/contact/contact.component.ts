import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section id="contact" class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- Decorative Background -->
      <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 z-0"></div>

      <div class="container mx-auto px-4 md:px-8 relative z-10 w-full max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">
          <!-- Contact Info & Map -->
          <div>
            <div class="flex items-center gap-3 mb-4">
               <div class="w-10 h-1 bg-gradient-to-r from-primary to-orange-500 rounded-full"></div>
               <span class="font-bold uppercase tracking-[0.2em] text-sm text-primary">Get in Touch</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-heading">
              Let's Start a <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Conversation</span>
            </h2>
            <p class="text-slate-600 mb-10 leading-relaxed text-lg">
              Whether you're an employer looking for top talent or a professional seeking your next career move, we're here to help. Reach out to us today.
            </p>

            <div class="space-y-8 mb-12">
              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-primary flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
                  <i class="fas fa-map-marker-alt text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 text-xl font-heading mb-1">Visit Us</h3>
                  <p class="text-slate-600">Three Circles International SPC<br>Muscat, Sultanate of Oman</p>
                </div>
              </div>

              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-primary flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
                  <i class="fas fa-phone-alt text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 text-xl font-heading mb-1">Call Us</h3>
                  <p class="text-slate-600">+968 7722 1164</p>
                </div>
              </div>

              <div class="flex items-start gap-6 group">
                <div class="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md text-primary flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-orange-500 group-hover:text-white transition-all duration-300">
                  <i class="fas fa-envelope text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-slate-900 text-xl font-heading mb-1">Email Us</h3>
                  <p class="text-slate-600">{{ 'info@threecircles.com' }}</p>
                </div>
              </div>
            </div>

            <!-- Google Map Placeholder -->
            <div class="w-full h-72 bg-slate-200 rounded-3xl overflow-hidden relative shadow-lg group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793746!2d58.423985!3d23.588031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ffa8879619df%3A0x956372075e54bc28!2sMuscat%2C%20Oman!5e0!3m2!1sen!2sus!4v1625680000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy"
                class="grayscale group-hover:grayscale-0 transition-all duration-700">
              </iframe>
              <div class="absolute inset-0 pointer-events-none border-4 border-white/50 rounded-3xl shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]"></div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative">
            <!-- Decorative corner accent -->
            <div class="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-tr-[2rem] z-0"></div>
            
            <h3 class="text-3xl font-bold text-slate-900 mb-8 font-heading relative z-10">Send us a Message</h3>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6 relative z-10">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" class="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-700"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" class="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-700"
                    placeholder="+968 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" class="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  formControlName="email"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-700"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="type" class="block text-sm font-bold text-slate-700 mb-2">I am a...</label>
                <!-- Custom styling for select to match the input fields -->
                <select 
                  id="type" 
                  formControlName="type"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-700 appearance-none cursor-pointer"
                >
                  <option value="Employer">Employer looking for talent</option>
                  <option value="Job Seeker">Job Seeker looking for work</option>
                  <option value="Partner">Potential Business Partner</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" class="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="4"
                  class="w-full px-5 py-4 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none text-slate-700"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit" 
                [disabled]="contactForm.invalid || isSubmitting"
                class="w-full py-4 bg-gradient-to-r from-primary to-orange-500 text-white font-bold text-lg rounded-xl hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none flex items-center justify-center gap-2"
              >
                <span *ngIf="isSubmitting" class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                <i *ngIf="!isSubmitting" class="fas fa-paper-plane ml-1"></i>
              </button>

              <div *ngIf="submitSuccess" class="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl flex items-center gap-3 animate-fade-in-up">
                 <i class="fas fa-check-circle text-green-500 text-xl"></i>
                 <p class="font-medium">Thank you! Your message has been sent successfully.</p>
              </div>
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
