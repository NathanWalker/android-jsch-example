import { Routes } from "@angular/router";
import { Example } from "./example";

export const routes: Routes = [
  { path: "", redirectTo: "/example", pathMatch: "full" },
  { path: "example", component: Example },
];
