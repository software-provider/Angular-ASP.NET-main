import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/Prodcut';
import { BaseService } from "../../../Services/BaseService";
import { IProductService } from './Interface/IProductService';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService implements IProductService{
 

  constructor(http: HttpClient)  { super(http); }

  getAllProduct(filters: any = null): Observable<Product[]> {
    return this.Get<Product[]>(`products`,filters);
  }

  getProduct(id : number,filters: any = null): Observable<any> {
    return this.Get<any>(`products/${id}`,filters);
  }

  AddProduct(product : Product): Observable<Product> {
    return this.Post<Product>(`products`,product);
  }

  UpdateProduct(product : Product): Observable<any> {
    return this.Put(`products`,product.Id,product);
  }

  DeleteProduct(id : number): Observable<any> {
    return this.Delete(`products`,id);
  }
}
