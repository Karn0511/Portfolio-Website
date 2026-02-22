import { Injectable, NgZone } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

/**
 * Parallax & Scroll Animation Service
 * Tracks scroll position and provides animation triggers
 */
@Injectable({
  providedIn: "root",
})
export class ParallaxService {
  private readonly scrollProgress$ = new BehaviorSubject<number>(0);
  private readonly scrollDirection$ = new BehaviorSubject<"up" | "down">(
    "down",
  );
  private readonly sectionInView$ = new BehaviorSubject<string>("");
  private lastScrollY = 0;

  constructor(private readonly ngZone: NgZone) {
    this.initializeScrollTracking();
  }

  private initializeScrollTracking() {
    this.ngZone.runOutsideAngular(() => {
      globalThis.addEventListener("scroll", () => this.onScroll());
    });
  }

  private onScroll() {
    const scrollY = globalThis.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - globalThis.innerHeight;
    const progress = docHeight > 0 ? scrollY / docHeight : 0;

    this.scrollProgress$.next(Math.min(progress, 1));

    // Determine scroll direction
    if (scrollY > this.lastScrollY) {
      this.scrollDirection$.next("down");
    } else if (scrollY < this.lastScrollY) {
      this.scrollDirection$.next("up");
    }

    this.lastScrollY = scrollY;

    // Determine which section is in view
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < globalThis.innerHeight / 2 && rect.bottom > 0) {
        const sectionName = (section as HTMLElement).dataset["section"] || "";
        this.sectionInView$.next(sectionName);
      }
    });
  }

  getScrollProgress$(): Observable<number> {
    return this.scrollProgress$.asObservable();
  }

  getScrollDirection$(): Observable<"up" | "down"> {
    return this.scrollDirection$.asObservable();
  }

  getSectionInView$(): Observable<string> {
    return this.sectionInView$.asObservable();
  }

  getScrollProgress(): number {
    return this.scrollProgress$.value;
  }

  getScrollDirection(): "up" | "down" {
    return this.scrollDirection$.value;
  }
}
