import { Injectable } from '@angular/core';
import { Subject } from '../models/subject';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Subject]>> {
    return this.apiService.get<RootObj<[Subject]>>(this.apiService.apiUrl.subjects);
  }
  get(id): Observable<RootObj<Subject>> {
    return this.apiService.get<RootObj<Subject>>(`${this.apiService.apiUrl.subjects}/${id}`);
  }
  save(data: Subject): Observable<RootObj<Subject>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<Subject>>(this.apiService.apiUrl.subjects, data);
    } else {
      return this.apiService.put<RootObj<Subject>>(`${this.apiService.apiUrl.subjects}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Subject>> {
    return this.apiService.delete<RootObj<Subject>>(`${this.apiService.apiUrl.subjects}/${id}`);
  }
}
