import { computed, Injectable, signal } from '@angular/core';
import { Product } from '@shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([]);
  total = computed(() => {
    const cart = this.cart();
    return cart.reduce((total, product) => total + product.price, 0);
  });

  constructor() {}

  addProduct(product: Product) {
    this.cart.update((prevState) => [...prevState, product]);
  }
}
