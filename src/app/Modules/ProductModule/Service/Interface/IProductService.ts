import { Observable } from 'rxjs';
import { Product } from '../../Model/Prodcut';

export interface IProductService {
  getAllProduct(): Observable<Product[]>;

  getProduct(id : number,filters: any): Observable<Product>;

  AddProduct(product : Product): Observable<Product>;

  UpdateProduct(product : Product): Observable<any>;

  DeleteProduct(id : number): Observable<any>;
}
