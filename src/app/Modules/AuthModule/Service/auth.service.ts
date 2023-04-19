import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from '../../../Services/BaseService';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {

  public  isUserLoggedIn = false;

  constructor(http: HttpClient) { super(http) }

  Login(email: string, password: string): boolean {
    this.saveLocalStorage({});
    this.Get(`Login`).subscribe( (data) => {
      this.saveLocalStorage(data);
      return true;
    });
    return true;
  }

  saveLocalStorage(data :any){
    this.isUserLoggedIn = true;
    localStorage.setItem('isUserLoggedIn', JSON.stringify(data)); 
  }

  logout(): void {
    this.isUserLoggedIn = false;
       localStorage.removeItem('isUserLoggedIn'); 
    }
}
