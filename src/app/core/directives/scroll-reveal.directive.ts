import { Directive, ElementRef, Input, OnInit, OnDestroy } from "@angular/core";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ANIMATION_TIMINGS, EASING } from "../constants/animations";

gsap.registerPlugin(ScrollTrigger);

/**
 * SCROLL REVEAL DIRECTIVE
 * Triggers animations when element scrolls into view
 *
 * Usage:
 * <div appScrollReveal [revealType]="'fadeIn'"></div>
 * <div appScrollReveal [revealType]="'slideUp'" [stagger]="0.1"></div>
 */

@Directive({
  selector: "[appScrollReveal]",
  standalone: true,
})
export class ScrollRevealDirective implements OnInit, OnDestroy {
  @Input() revealType: "fadeIn" | "slideUp" | "slideUpStagger" = "fadeIn";
  @Input() stagger = 0;
  @Input() startsAt = "center center";
  @Input() duration = ANIMATION_TIMINGS.slower / 1000;

  private scrollTrigger: any;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.setupReveal();
  }

  ngOnDestroy(): void {
    if (this.scrollTrigger) {
      this.scrollTrigger.kill();
    }
  }

  private setupReveal(): void {
    const element = this.elementRef.nativeElement;

    // Default state
    switch (this.revealType) {
      case "fadeIn":
        gsap.set(element, { opacity: 0 });
        break;
      case "slideUp":
        gsap.set(element, { opacity: 0, y: 30 });
        break;
      case "slideUpStagger":
        const children = element.querySelectorAll("> *");
        gsap.set(children, { opacity: 0, y: 30 });
        break;
    }

    // Define animation
    const tween = gsap.to(element, {
      opacity: 1,
      y: 0,
      duration: this.duration,
      ease: EASING.smoothOut,
      paused: true,
    });

    // Create scroll trigger
    this.scrollTrigger = ScrollTrigger.create({
      trigger: element,
      start: `top ${this.startsAt}`,
      onEnter: () => tween.play(),
    });
  }
}
