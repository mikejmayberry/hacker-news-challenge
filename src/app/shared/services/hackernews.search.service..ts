import { Injectable } from '@angular/core';
import { HackerNewsCacheService } from './hackernews.cache.service';
import { ItemModel } from '../models/item-model';

@Injectable({
  providedIn: 'root'
})
export class HackerNewsSearchService {

  public searchResults = new Array<ItemModel>();

  constructor(private hackerNewsCacheService: HackerNewsCacheService) { };

  public searchCache(term: string) {
    if (term) {
      this.searchResults = this.hackerNewsCacheService.storyCache.filter(story => {
        if (story.title && story.title.includes(term)) {
          return story;
        } else if (story.by && story.by.includes(term)) {
          return story;
        }
      })
    }
  }
}
