import { Injectable } from '@angular/core';
import { Author } from '../models/author';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Author]>> {
    return this.apiService.get<RootObj<[Author]>>(this.apiService.apiUrl.authors);
  }
  get(id): Observable<RootObj<Author>> {
    return this.apiService.get<RootObj<Author>>(`${this.apiService.apiUrl.authors}/${id}`);
  }
  save(data: Author): Observable<RootObj<Author>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<Author>>(this.apiService.apiUrl.authors, data);
    } else {
      return this.apiService.put<RootObj<Author>>(`${this.apiService.apiUrl.authors}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Author>> {
    return this.apiService.delete<RootObj<Author>>(`${this.apiService.apiUrl.authors}/${id}`);
  }
}
