import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * SECTION COMPONENT
 * Wrapper for content sections with consistent spacing and rhythm
 *
 * Usage:
 * <app-section [fullWidth]="false" [spacingVariant]="'lg'">
 *   <h2>Section Title</h2>
 *   <p>Content...</p>
 * </app-section>
 */
@Component({
  selector: "app-section",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section [ngClass]="getContainerClasses()" class="relative">
      <ng-content></ng-content>
    </section>
  `,
})
export class SectionComponent {
  @Input() fullWidth = false;
  @Input() spacingVariant: "sm" | "md" | "lg" | "xl" = "lg";
  @Input() backgroundColor = "";
  @Input() noPadding = false;

  getContainerClasses(): string {
    const spacing = {
      sm: "py-section-mobile md:py-section-tablet lg:py-section-desktop",
      md: "py-section-mobile md:py-section-tablet lg:py-section-desktop",
      lg: "py-section-mobile md:py-section-tablet lg:py-section-desktop",
      xl: "py-8xl",
    };

    const padding = this.noPadding ? "" : "px-lg md:px-xl lg:px-2xl";

    const width = this.fullWidth ? "w-full" : "w-full max-w-7xl mx-auto";

    return `${width} ${spacing[this.spacingVariant]} ${padding} ${this.backgroundColor}`;
  }
}
