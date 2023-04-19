import { Observable } from 'rxjs';

export interface IService {
  Get<T>(path : string): Observable<T> ;

  Post<T>(path : string,data : T): Observable<T> ;

  Put<T>(path : string,id: number,product : T): Observable<T>;

  Delete<T>(path : string,id : number): Observable<any>;
}
