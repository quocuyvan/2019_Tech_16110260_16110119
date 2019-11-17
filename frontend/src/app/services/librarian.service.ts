import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { Librarian } from '../models/librarian';

@Injectable({
  providedIn: 'root'
})
export class LibrarianService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Librarian]>> {
    return this.apiService.get<RootObj<[Librarian]>>(this.apiService.apiUrl.librarians);
  }
  get(id): Observable<RootObj<Librarian>> {
    return this.apiService.get<RootObj<Librarian>>(`${this.apiService.apiUrl.librarians}/${id}`);
  }
  save(data: Librarian): Observable<RootObj<Librarian>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<Librarian>>(this.apiService.apiUrl.librarians, data);
    } else {
      return this.apiService.put<RootObj<Librarian>>(`${this.apiService.apiUrl.librarians}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Librarian>> {
    return this.apiService.delete<RootObj<Librarian>>(`${this.apiService.apiUrl.librarians}/${id}`);
  }
}
