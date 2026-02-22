import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadComponent: () =>
      import("./features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "projects",
    loadComponent: () =>
      import("./features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "systems",
    loadComponent: () =>
      import("./features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "experience",
    loadComponent: () =>
      import("./features/home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "**",
    redirectTo: "",
  },
];
