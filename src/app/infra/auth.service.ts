import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const serverUrl = process.env["SERVER_URL"];

export type AuthData = {
  message?: string;
  token?: string;
};

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    return this.http.post<AuthData>(
      `${serverUrl}/login`,
      JSON.stringify({ email, password })
    );
  }
}
