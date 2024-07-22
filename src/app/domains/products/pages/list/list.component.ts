import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  products = [
    {
      id: 1,
      title: 'Produtco 1',
      price: 2000,
      description: 'Lorem ipsum dolor',
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 1500,
      description: 'Lorem ipsum dolor',
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 3000,
      description: 'Lorem ipsum dolor',
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
    {
      id: 4,
      title: 'Producto 4',
      price: 2500,
      description: 'Lorem ipsum dolor',
      img: `https://picsum.photos/640/640?r=${Math.random()}`,
    },
  ];

  fromChild(event: string) {
    console.log('Received from child:', event);
  }
}
