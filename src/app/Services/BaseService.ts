import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IService } from './Interface/IService';

export class BaseService implements IService{

   baseURL = `http://localhost:9000/api`;
   http : HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
   }

  Get<T>(path : string,filters: any = null): Observable<T> {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { ...filters}
    };
    return this.http.get<T>(`${this.baseURL}/${path}`, httpOptions);
  }

  Post<T>(path : string,data : T): Observable<T> {
    return this.http.post<T>(`${this.baseURL}/${path}`,data)
  }

  Put<T>(path : string,id: number,product : T): Observable<T> {
    return this.http.put<T>(`${this.baseURL}/${path}/${id}`,product)
  }

  Delete<T>(path : string,id : number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${path}/${id}`)
  }
}
