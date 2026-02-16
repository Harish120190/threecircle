import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective implements OnInit {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(this.el.nativeElement, 'animate-enter');
                    observer.unobserve(this.el.nativeElement);
                }
            });
        }, { threshold: 0.1 });

        this.renderer.addClass(this.el.nativeElement, 'opacity-0');
        this.renderer.addClass(this.el.nativeElement, 'translate-y-10');
        this.renderer.addClass(this.el.nativeElement, 'transition-all');
        this.renderer.addClass(this.el.nativeElement, 'duration-700');
        this.renderer.addClass(this.el.nativeElement, 'ease-out');

        observer.observe(this.el.nativeElement);
    }
}
