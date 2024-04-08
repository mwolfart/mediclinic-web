import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthData, AuthService } from "app/infra/auth.service";
import { Fetcher } from "app/infra/fetcher.class";

@Component({
  selector: "app-auth",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent {
  email = "";
  password = "";
  error = "";

  // private emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

  private data = new Fetcher<AuthData>();
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  isFormValid() {
    console.log(this.email, this.password);
    return this.email.length > 0 && this.password.length > 0;
  }

  onError(error: unknown) {
    console.log(error);
    this.error = error as string;
  }

  login() {
    if (this.isFormValid()) {
      this.error = "";
      this.data.load(this.authService.authenticate(this.email, this.password), {
        onError: this.onError,
      });
      console.log(this.data);
    } else {
      this.error = "Please fill in all fields";
    }
  }
}
