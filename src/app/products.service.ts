import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private URI: string = "https://5d76bf96515d1a0014085cf9.mockapi.io/product";

  constructor(private http: HttpClient) {}

  // This method returns an Observable that the component can subscribe to
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URI);
  }
}
