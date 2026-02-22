import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    data: { animation: "HomePage" },
    loadComponent: () =>
      import("./features/home/home-redesigned.component").then(
        (m) => m.HomeRedesignedComponent,
      ),
  },
  {
    path: "projects",
    data: { animation: "ProjectsPage" },
    loadComponent: () =>
      import("./features/projects/projects.component").then(
        (m) => m.ProjectsComponent,
      ),
  },
  {
    path: "systems",
    data: { animation: "SystemsPage" },
    loadComponent: () =>
      import("./features/systems/systems.component").then(
        (m) => m.SystemsComponent,
      ),
  },
  {
    path: "experience",
    data: { animation: "ExperiencePage" },
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
