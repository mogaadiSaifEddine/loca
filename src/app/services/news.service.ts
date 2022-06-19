import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<any>(
      'https://inshortsapi.vercel.app/news?category=science'
    );
  }
}
