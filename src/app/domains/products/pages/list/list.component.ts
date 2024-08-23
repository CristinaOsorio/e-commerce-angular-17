import { RouterLinkWithHref } from '@angular/router';

import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';
import { Product } from '@shared/interfaces/product.interface';
import { HeaderComponent } from '@shared/components/header/header.component';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/interfaces/category.interface';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    RouterLinkWithHref,
    ProductComponent,
    HeaderComponent
],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export default class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<Category[]>([]);

  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);

  @Input('category_id') categoryId?: string;

  ngOnInit(): void {
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getProducts();
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
  }

  getProducts() {
    this.productService.getProducts(this.categoryId).subscribe({
      next: (products) => {
        this.products.set(products);
      },
      error: (error) => console.error('Error fetching products:', error),
    });
  }

  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories.set(categories);
      },
      error: (error) => console.error('Error fetching categories:', error),
    });
  }
}
