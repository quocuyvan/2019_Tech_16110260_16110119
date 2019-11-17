import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from './api.service';
import { RootObj } from '../models/root-obj';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private apiService: ApiService) { }
  list(): Observable<RootObj<[Member]>> {
    return this.apiService.get<RootObj<[Member]>>(this.apiService.apiUrl.members);
  }
  get(id): Observable<RootObj<Member>> {
    return this.apiService.get<RootObj<Member>>(`${this.apiService.apiUrl.members}/${id}`);
  }
  save(data: Member): Observable<RootObj<Member>> {
    if (data.id === 0) {
      return this.apiService.post<RootObj<Member>>(this.apiService.apiUrl.members, data);
    } else {
      return this.apiService.put<RootObj<Member>>(`${this.apiService.apiUrl.members}/${data.id}`, data);
    }
  }
  delete(id: number): Observable<RootObj<Member>> {
    return this.apiService.delete<RootObj<Member>>(`${this.apiService.apiUrl.members}/${id}`);
  }
}
