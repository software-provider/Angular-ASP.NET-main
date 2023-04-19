import { Observable } from 'rxjs';

export interface IAuthService {
  Login(email: string, password: string): boolean;

  saveLocalStorage(data :any): void;

  logout(): void;
}
