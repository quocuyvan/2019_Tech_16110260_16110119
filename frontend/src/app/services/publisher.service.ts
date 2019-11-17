import { Injectable } from '@angular/core';
import { Publisher } from '../models/publisher';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Publisher]>> {
    return this.apiService.get<RootObj<[Publisher]>>(this.apiService.apiUrl.publishers);
  }
  get(id): Observable<RootObj<Publisher>> {
    return this.apiService.get<RootObj<Publisher>>(`${this.apiService.apiUrl.publishers}/${id}`);
  }
  save(data: Publisher): Observable<RootObj<Publisher>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<Publisher>>(this.apiService.apiUrl.publishers, data);
    } else {
      return this.apiService.put<RootObj<Publisher>>(`${this.apiService.apiUrl.publishers}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Publisher>> {
    return this.apiService.delete<RootObj<Publisher>>(`${this.apiService.apiUrl.publishers}/${id}`);
  }
}
