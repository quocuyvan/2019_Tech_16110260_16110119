import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers;
  constructor(private http: HttpClient, private cookieService: CookieService) {
    const token = this.cookieService.get('token');
    console.log(token);
    this.headers = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    });
   }
  baseUrl = 'http://localhost:8081/';
  apiUrl = {
    users: {
      home: `${this.baseUrl}users`,
      login: `${this.baseUrl}users/login`
    },
    authors: `${this.baseUrl}authors`,
    subjects: `${this.baseUrl}subjects`,
    languages: `${this.baseUrl}languages`,
    publishers: `${this.baseUrl}publishers`,
    members: `${this.baseUrl}members`,
    librarians: `${this.baseUrl}librarians`,
    cards: {
      home: `${this.baseUrl}cards`,
      listByType: `${this.baseUrl}cards/getByMember`
    },
    booklendings: {
      home: `${this.baseUrl}booklendings`,
      listByType: `${this.baseUrl}booklendings/getByLibrarian`
    },
    bookitems: {
      home: `${this.baseUrl}bookitems`,
      listByType: `${this.baseUrl}bookitems/getByBook`
    },
    books: {
      home: `${this.baseUrl}books`,
      listByType: `${this.baseUrl}books/getByLanguage`
    }


  };
  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url, {headers: this.headers});
  }
  post<T>(url: string, data: Object): Observable<T> {
    return this.http.post<T>(url, data, {headers: this.headers});
  }
  put<T>(url: string, data: Object): Observable<T> {
    return this.http.put<T>(url, data, {headers: this.headers});
  }
  delete<T>(url: string) {
    return this.http.delete<T>(url, {headers: this.headers});
  }
}
