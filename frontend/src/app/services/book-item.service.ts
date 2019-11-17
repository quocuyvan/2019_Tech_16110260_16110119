import { Injectable } from '@angular/core';
import { Page } from './../models/page';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { BookItem } from '../models/book-item';

@Injectable({
  providedIn: 'root'
})
export class BookItemService {

  constructor(private apiService: ApiService) { }

  list(page: Page): Observable<RootObj<[BookItem]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[BookItem]>>(`${this.apiService.apiUrl.bookitems.home}?${queryString}`);
  }
  listByBook(id: string, page: Page): Observable<RootObj<[BookItem]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[BookItem]>>(`${this.apiService.apiUrl.bookitems.listByType}/${id}?${queryString}`);
  }
  get(id): Observable<RootObj<BookItem>> {
    return this.apiService.get<RootObj<BookItem>>(`${this.apiService.apiUrl.bookitems.home}/${id}`);
  }

  save(data: BookItem): Observable<RootObj<BookItem>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<BookItem>>(this.apiService.apiUrl.bookitems.home, data);
    } else {
      return this.apiService.put<RootObj<BookItem>>(`${this.apiService.apiUrl.bookitems.home}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<BookItem>> {
    return this.apiService.delete<RootObj<BookItem>>(`${this.apiService.apiUrl.bookitems.home}/${id}`);
  }
}
