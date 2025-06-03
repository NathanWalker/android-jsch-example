import { Component, NO_ERRORS_SCHEMA } from "@angular/core";
import { PageRouterOutlet } from "@nativescript/angular";

@Component({
  selector: "app",
  templateUrl: "./app.html",
  imports: [PageRouterOutlet],
  schemas: [NO_ERRORS_SCHEMA],
})
export class App {}
