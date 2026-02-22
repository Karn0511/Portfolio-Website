import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * CONTAINER COMPONENT
 * Centralized max-width container with consistent margins
 *
 * Usage:
 * <app-container [maxWidth]="'lg'">
 *   <h1>Content</h1>
 * </app-container>
 */
@Component({
  selector: "app-container",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="getContainerClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class ContainerComponent {
  @Input() maxWidth: "sm" | "md" | "lg" | "xl" | "full" = "lg";
  @Input() noPadding = false;
  @Input() centerContent = true;

  getContainerClasses(): string {
    const widthClasses = {
      sm: "max-w-md",
      md: "max-w-2xl",
      lg: "max-w-4xl",
      xl: "max-w-6xl",
      full: "w-full",
    };

    const padding = this.noPadding ? "" : "px-lg md:px-xl lg:px-2xl";
    const center = this.centerContent ? "mx-auto" : "";

    return `w-full ${widthClasses[this.maxWidth]} ${padding} ${center}`;
  }
}
