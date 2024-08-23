import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { Category } from '@shared/interfaces/category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private http = inject(HttpClient);

  constructor() {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(
      'https://api.escuelajs.co/api/v1/categories'
    );
  }

  getOne(id: string): Observable<Category> {
    return this.http.get<Category>(
      `https://api.escuelajs.co/api/v1/categories/${id}`
    );
  }
}
