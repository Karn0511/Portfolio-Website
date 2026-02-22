import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";

/**
 * FLEX COMPONENT
 * Flexible box layout with consistent spacing
 *
 * Usage:
 * <app-flex direction="column" gap="lg" align="center">
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </app-flex>
 */
@Component({
  selector: "app-flex",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="getFlexClasses()">
      <ng-content></ng-content>
    </div>
  `,
})
export class FlexComponent {
  @Input() direction: "row" | "column" = "row";
  @Input() gap: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" = "lg";
  @Input() align: "start" | "center" | "end" | "stretch" = "start";
  @Input() justify: "start" | "center" | "end" | "between" | "around" = "start";
  @Input() wrap = false;
  @Input() fullWidth = true;

  getFlexClasses(): string {
    const directionClasses = {
      row: "flex-row",
      column: "flex-col",
    };

    const gapClasses = {
      xs: "gap-xs",
      sm: "gap-sm",
      md: "gap-md",
      lg: "gap-lg",
      xl: "gap-xl",
      "2xl": "gap-2xl",
    };

    const alignClasses = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    };

    const justifyClasses = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
    };

    const width = this.fullWidth ? "w-full" : "";
    const wrapClass = this.wrap ? "flex-wrap" : "flex-nowrap";

    return `flex ${directionClasses[this.direction]} ${gapClasses[this.gap]} ${alignClasses[this.align]} ${justifyClasses[this.justify]} ${wrapClass} ${width}`;
  }
}
