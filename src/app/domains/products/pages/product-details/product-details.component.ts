import { CurrencyPipe, UpperCasePipe, CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { Product } from '@shared/interfaces/product.interface';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, UpperCasePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export default class ProductDetailsComponent {
  @Input() id?: string;
  private productService = inject(ProductService);
  private cartService = inject(CartService);
  product = signal<Product | null>(null);
  cover = signal<string>('');

  ngOnInit(): void {
    if (this.id) {
      this.productService.getOne(this.id).subscribe((product) => {
        this.product.set(product);

        if (product.images.length > 0) {
          this.cover.set(product.images[0]);
        }
      });
    }
  }

  changeCover(img: string) {
    this.cover.set(img);
  }

  addToCart() {
    const product = this.product();
    if (product) {
      this.cartService.addProduct(product);
    }
  }
}
