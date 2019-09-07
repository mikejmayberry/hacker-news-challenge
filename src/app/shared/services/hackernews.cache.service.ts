import { Injectable } from '@angular/core';
import { HackerNewsApiService } from './hackernews.api.service';
import { ItemModel } from '../models/item-model';
import { EndpointEnum } from '../models/endpoint.enum';


@Injectable({
  providedIn: 'root'
})
export class HackerNewsCacheService {

  public storyCache = new Array<ItemModel>();

  public currentEndpoint = EndpointEnum.Best;

  public currentType() {
    let type = '';
   
    switch (this.currentEndpoint) {
      case EndpointEnum.Ask:
        type = 'Ask';
        break;
      
      case EndpointEnum.Job:
        type = 'Job';
        break;
      case EndpointEnum.New:
        type = 'New';
        break;
      case EndpointEnum.Show:
        type = 'Show';
        break;
      case EndpointEnum.Top:
        type = 'Top';
        break;
      default:
        type = 'Best'

    }
    return type;
   
  }

  public storyIds = Array<number>();

  //TODO expiry

  public init(endpoint: EndpointEnum) {
    
    this.hackerNewsAPIService.getStoryIds(endpoint.toString())
      .subscribe(
        (storyIds: Array<number>) => {
          this.storyIds = storyIds;
          this.getStories(storyIds);
          this.currentEndpoint = endpoint;
        },
        error => console.log('get'+ endpoint + 'failed'));
    }
  

  constructor(private hackerNewsAPIService: HackerNewsApiService) { }

  public tryPush(article: ItemModel) {
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
      this.hackerNewsAPIService.getStory(id).subscribe((article: ItemModel) => {
        this.tryPush(article);
      }, error => console.log(id));
    }
  }

}
