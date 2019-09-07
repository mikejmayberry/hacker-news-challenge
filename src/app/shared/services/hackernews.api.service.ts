import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const BASE_URL = 'https://hacker-news.firebaseio.com/v0';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsApiService {

  constructor(private http: HttpClient) { }

  public getStoryIds(endpoint:string)  {
    return this.http.get(`${BASE_URL}/${endpoint}.json`)
  }

  public getStory(id: number) {
    return this.http.get(`${BASE_URL}/item/${id}.json`)
  }


}
