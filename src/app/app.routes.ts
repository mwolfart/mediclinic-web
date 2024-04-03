import { Routes } from "@angular/router";
import { AuthComponent } from "./layout/auth/auth.component";
import { DashboardComponent } from "./layout/dashboard/dashboard.component";

export const routes: Routes = [
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  { path: "auth", component: AuthComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  { path: "**", redirectTo: "dashboard" },
];
