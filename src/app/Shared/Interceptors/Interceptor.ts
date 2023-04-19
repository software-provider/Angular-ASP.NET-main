import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiCallInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let AUTH_TOKEN: string | null = localStorage.getItem('isUserLoggedIn') ? localStorage.getItem('isUserLoggedIn') : "";
        return next.handle(httpRequest); //httpRequest.clone({ setHeaders: { API_KEY } })
    }
}