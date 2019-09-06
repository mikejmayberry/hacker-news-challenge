import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Article } from '../models/article'

const BASE_URL = 'https://hacker-news.firebaseio.com/v0';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {

  constructor(private http: HttpClient) { }

  public getStoryIds()  {
    return this.http.get(`${BASE_URL}/beststories.json`)
  }

  public getStory(id: number) {
    return this.http.get(`${BASE_URL}/item/${id}.json`)
  }
}
