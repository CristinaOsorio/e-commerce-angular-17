import { Category } from './category.interface';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
}
