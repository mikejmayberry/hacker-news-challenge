import { Component, Input, OnInit } from '@angular/core';
import { HackerNewsCacheService } from '../shared/services/hackernews.cache.service';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  @Input()
  public id: number;


  public get article() {
    return this.hackerNewsCacheService.tryGet(this.id);
  }

  constructor(private hackerNewsCacheService: HackerNewsCacheService) { };
}
