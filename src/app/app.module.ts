import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApiCallInterceptor } from './Shared/Interceptors/Interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { NgHttpCachingModule } from 'ng-http-caching';
import { ngHttpCachingConfig } from './Shared/Config/Caching/Caching';
import { ErrorInterceptor } from './Shared/Interceptors/ErrorInterceptor';
import { CsvModule } from '@ctrl/ngx-csv';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    CsvModule,
    ReactiveFormsModule,
    NgHttpCachingModule.forRoot(ngHttpCachingConfig),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiCallInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
