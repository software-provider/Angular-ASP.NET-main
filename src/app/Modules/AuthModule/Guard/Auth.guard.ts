import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Service/auth.service';


@Injectable({
   providedIn: 'root'
})
export class AuthGuard implements CanActivate {

   constructor(private authService: AuthService, private router: Router) {}

   canActivate(
   next: ActivatedRouteSnapshot,
   state: RouterStateSnapshot): boolean | UrlTree {
        let val: string | null = localStorage.getItem('isUserLoggedIn') ? localStorage.getItem('isUserLoggedIn') : "";
        if(val == "" || val == null || val == "{}")
        {
            this.router.navigate(['login']);
            return false;
        } 
        return true;
      }
}