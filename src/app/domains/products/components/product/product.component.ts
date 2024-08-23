import { RouterLinkWithHref } from '@angular/router';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '@shared/interfaces/product.interface';
import { TimeAgoPipe } from '@shared/pipes/time-ago.pipe';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLinkWithHref, UpperCasePipe, CurrencyPipe, TimeAgoPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input({ required: true }) product!: Product;

  @Output() addCart = new EventEmitter();

  addToCartHandler() {
    this.addCart.emit(this.product);
  }
}
