import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthData, AuthService } from "app/infra/auth.service";
import { Fetcher } from "app/infra/fetcher.class";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  private email = "";
  private password = "";
  private error = "";

  // private emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

  private data = new Fetcher<AuthData>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  isFormValid() {
    return this.email.length > 0 && this.password.length > 0;
  }

  login() {
    if (this.isFormValid()) {
      this.error = "";
      this.data.load(this.authService.authenticate(this.email, this.password));
    } else {
      this.error = "Please fill in all fields";
    }
  }
}
