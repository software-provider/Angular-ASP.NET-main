import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { mergeMap, delay, retryWhen, catchError  } from 'rxjs/operators';
import { Router } from '@angular/router';

export const maxRetries = 2;
export const delayMs = 2000;

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }
    
    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request)
        .pipe(
            catchError((error: HttpErrorResponse) => {
                let errorMessage = this.handleError(error);
                return throwError(() => new Error(errorMessage));
            })
        )
        .pipe(
            retryWhen((error) => {
                return error.pipe(
                    mergeMap((error, index) => {
                        if (index < maxRetries && error.status == 500) {
                            return of(error).pipe(delay(delayMs));
                        }
                        throw error;
                    })
                )
            })
        )
    }

    private handleError = (error: HttpErrorResponse): string | undefined => {
        if (error.status === 404) {
            return this.handleNotFound(error);
        }
        else if (error.status === 400) {
            return this.handleBadRequest(error);
        }
        else if (error.status === 406) {
            return this.handleValidationError(error);
        }
        return "Unknow Error";
    }
    private handleNotFound = (error: HttpErrorResponse): string => {
        this.router.navigate(['/404']);
        return error.message;
    }
    private handleBadRequest = (error: HttpErrorResponse): string => {
         return error.error ? error.error : error.message;
    }
    private handleValidationError(error: HttpErrorResponse): string | undefined {
        return error.error;
    }
}