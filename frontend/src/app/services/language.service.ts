import { Injectable } from '@angular/core';
import { Language } from '../models/language';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Language]>> {
    return this.apiService.get<RootObj<[Language]>>(this.apiService.apiUrl.languages);
  }
  get(id): Observable<RootObj<Language>> {
    return this.apiService.get<RootObj<Language>>(`${this.apiService.apiUrl.languages}/${id}`);
  }
  save(data: Language): Observable<RootObj<Language>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<Language>>(this.apiService.apiUrl.languages, data);
    } else {
      return this.apiService.put<RootObj<Language>>(`${this.apiService.apiUrl.languages}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Language>> {
    return this.apiService.delete<RootObj<Language>>(`${this.apiService.apiUrl.languages}/${id}`);
  }
}
