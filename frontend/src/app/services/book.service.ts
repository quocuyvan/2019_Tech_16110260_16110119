import { Injectable } from '@angular/core';
import { Page } from './../models/page';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private apiService: ApiService) { }

  list(page: Page): Observable<RootObj<[Book]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[Book]>>(`${this.apiService.apiUrl.books.home}?${queryString}`);
  }
  listByLibrarian(id: number, page: Page): Observable<RootObj<[Book]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[Book]>>(`${this.apiService.apiUrl.books.listByType}/${id}?${queryString}`);
  }
  get(id): Observable<RootObj<Book>> {
    return this.apiService.get<RootObj<Book>>(`${this.apiService.apiUrl.books.home}/${id}`);
  }

  save(data: Book): Observable<RootObj<Book>> {
    if (data.id === '0') {
      return this.apiService.post<RootObj<Book>>(this.apiService.apiUrl.books.home, data);
    } else {
      return this.apiService.put<RootObj<Book>>(`${this.apiService.apiUrl.books.home}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Book>> {
    return this.apiService.delete<RootObj<Book>>(`${this.apiService.apiUrl.books.home}/${id}`);
  }
}
