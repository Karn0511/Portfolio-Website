import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * GRID COMPONENT
 * Responsive grid layout with consistent gaps
 *
 * Usage:
 * <app-grid [columns]="3" [gap]="'lg'">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </app-grid>
 */
@Component({
  selector: "app-grid",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="getGridClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class GridComponent {
  @Input() columns: 1 | 2 | 3 | 4 | 6 = 3;
  @Input() gap: "sm" | "md" | "lg" | "xl" = "lg";
  @Input() responsiveColumns: {
    mobile: number;
    tablet: number;
    desktop: number;
  } = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };
  @Input() useResponsive = true;

  getGridClasses(): string {
    const gapClasses = {
      sm: "gap-md",
      md: "gap-lg",
      lg: "gap-xl",
      xl: "gap-2xl",
    };

    const columnClasses = {
      1: "grid-cols-1",
      2: "grid-cols-2",
      3: "grid-cols-3",
      4: "grid-cols-4",
      6: "grid-cols-6",
    };

    if (this.useResponsive) {
      return `grid w-full ${gapClasses[this.gap]} grid-cols-${this.responsiveColumns.mobile} md:grid-cols-${this.responsiveColumns.tablet} lg:grid-cols-${this.responsiveColumns.desktop}`;
    }

    return `grid w-full ${columnClasses[this.columns]} ${gapClasses[this.gap]}`;
  }
}
