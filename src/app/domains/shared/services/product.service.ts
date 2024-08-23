import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Product } from '@shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private http = inject(HttpClient);

  constructor() {}

  getProducts(categoryId?: string): Observable<Product[]> {
    const url = new URL('https://api.escuelajs.co/api/v1/products');

    if (categoryId) {
      url.searchParams.set('categoryId', categoryId);
    }

    return this.http.get<Product[]>(url.toString());
  }

  getOne(productId: string): Observable<Product> {
    return this.http.get<Product>(
      `https://api.escuelajs.co/api/v1/products/${productId}`
    );
  }
}
