import { Injectable } from '@angular/core';
import { Page } from './../models/page';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { BookLending } from '../models/book-lending';

@Injectable({
  providedIn: 'root'
})
export class BookLendingService {

  constructor(private apiService: ApiService) { }

  list(page: Page): Observable<RootObj<[BookLending]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[BookLending]>>(`${this.apiService.apiUrl.booklendings.home}?${queryString}`);
  }
  listByLibrarian(id: number, page: Page): Observable<RootObj<[BookLending]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[BookLending]>>(`${this.apiService.apiUrl.booklendings.listByType}/${id}?${queryString}`);
  }
  get(id): Observable<RootObj<BookLending>> {
    return this.apiService.get<RootObj<BookLending>>(`${this.apiService.apiUrl.booklendings.home}/${id}`);
  }

  save(data: BookLending): Observable<RootObj<BookLending>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<BookLending>>(this.apiService.apiUrl.booklendings.home, data);
    } else {
      return this.apiService.put<RootObj<BookLending>>(`${this.apiService.apiUrl.booklendings.home}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<BookLending>> {
    return this.apiService.delete<RootObj<BookLending>>(`${this.apiService.apiUrl.booklendings.home}/${id}`);
  }
}
