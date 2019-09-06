import { Injectable } from '@angular/core';
import { HackerNewsApiService } from './hackernews.api.service';
import { Article } from '../models/article';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsCacheService {

  public storyCache = Array<Article>();

  public storyIds = Array<number>();

  //TODO expiry

  public init() {
    this.hackerNewsAPIService.getStoryIds()
      .subscribe(
        (storyIds: Array<number>) => {
          this.storyIds = storyIds;
          this.getStories(storyIds);
        },
        error => console.log('get top stories failed'));
  }

  constructor(private hackerNewsAPIService: HackerNewsApiService) { }

  public tryPush(article: Article) {
    if (!this.tryGet(article.id)) {
      this.storyCache.push(article)
    }
  }

  public tryGet(id: number) {
    let story = this.storyCache.find(s => s.id == id);
    return story;
  }

  private getStories(ids: Array<number>) {
    for (let id of ids) {
      this.hackerNewsAPIService.getStory(id).subscribe((article: Article) => {
        this.tryPush(article);
      }, error => console.log(id));
    }
  }

}
