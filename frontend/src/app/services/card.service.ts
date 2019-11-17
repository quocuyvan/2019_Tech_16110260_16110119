import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { Card } from '../models/card';
import { Page } from './../models/page';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private apiService: ApiService) { }

  list(page: Page): Observable<RootObj<[Card]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[Card]>>(`${this.apiService.apiUrl.cards.home}?${queryString}`);
  }
  listByLibrarian(id: number, page: Page): Observable<RootObj<[Card]>> {
    const queryString = `p=${page.pageNumber}&s=${page.pageSize}`;
    return this.apiService.get<RootObj<[Card]>>(`${this.apiService.apiUrl.cards.listByType}/${id}?${queryString}`);
  }
  get(id): Observable<RootObj<Card>> {
    return this.apiService.get<RootObj<Card>>(`${this.apiService.apiUrl.cards.home}/${id}`);
  }

  save(data: Card): Observable<RootObj<Card>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<Card>>(this.apiService.apiUrl.cards.home, data);
    } else {
      return this.apiService.put<RootObj<Card>>(`${this.apiService.apiUrl.cards.home}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Card>> {
    return this.apiService.delete<RootObj<Card>>(`${this.apiService.apiUrl.cards.home}/${id}`);
  }
}
