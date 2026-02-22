import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/home/home-redesigned.component").then(
        (m) => m.HomeRedesignedComponent,
      ),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("./features/projects/projects.component").then(
        (m) => m.ProjectsComponent,
      ),
  },
  {
    path: "systems",
    loadComponent: () =>
      import("./features/systems/systems.component").then(
        (m) => m.SystemsComponent,
      ),
  },
  {
    path: "experience",
    loadComponent: () =>
      import("./features/experience/experience.component").then(
        (m) => m.ExperienceComponent,
      ),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
