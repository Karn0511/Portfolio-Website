import { Injectable, NgZone } from "@angular/core";
import Lenis from "lenis";
import { BehaviorSubject } from "rxjs";

/**
 * Smooth Scroll Service
 * Integrates Lenis for smooth, momentum-based scrolling
 */

@Injectable({
  providedIn: "root",
})
export class ScrollService {
  private lenis: Lenis | null = null;
  private readonly scrollY$ = new BehaviorSubject<number>(0);
  private readonly isScrolling$ = new BehaviorSubject<boolean>(false);
  private readonly direction$ = new BehaviorSubject<"up" | "down">("down");

  constructor(private readonly ngZone: NgZone) {}

  /**
   * Initialize Lenis smooth scroll
   */
  initialize(): void {
    this.ngZone.runOutsideAngular(() => {
      this.lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
      } as any);

      // RAF loop for Lenis
      const raf = (time: number) => {
        this.lenis?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);

      // Track scroll state
      let lastScrollY = 0;
      globalThis.addEventListener("scroll", () => {
        const currentScrollY = globalThis.scrollY;

        this.scrollY$.next(currentScrollY);
        this.isScrolling$.next(true);

        if (currentScrollY > lastScrollY) {
          this.direction$.next("down");
        } else if (currentScrollY < lastScrollY) {
          this.direction$.next("up");
        }

        lastScrollY = currentScrollY;

        // Debounce is-scrolling flag
        setTimeout(() => {
          this.isScrolling$.next(false);
        }, 150);
      });
    });
  }

  /**
   * Get scroll position observable
   */
  getScrollY$() {
    return this.scrollY$.asObservable();
  }

  /**
   * Get is-scrolling observable
   */
  getIsScrolling$() {
    return this.isScrolling$.asObservable();
  }

  /**
   * Get scroll direction observable
   */
  getDirection$() {
    return this.direction$.asObservable();
  }

  /**
   * Get current scroll Y value
   */
  getScrollYValue(): number {
    return this.scrollY$.value;
  }

  /**
   * Scroll to element
   */
  scrollTo(
    element: HTMLElement | string,
    options?: { offset?: number; duration?: number },
  ): void {
    if (this.lenis) {
      const target =
        typeof element === "string" ? document.querySelector(element) : element;

      if (target) {
        this.lenis.scrollTo(target, {
          offset: options?.offset || 0,
          duration: options?.duration || 1.2,
        });
      }
    }
  }

  /**
   * Scroll to top
   */
  scrollToTop(duration: number = 1.2): void {
    if (this.lenis) {
      this.lenis.scrollTo(0, { duration });
    }
  }

  /**
   * Cleanup
   */
  destroy(): void {
    if (this.lenis) {
      this.lenis.destroy();
      this.lenis = null;
    }
  }
}
