import { Component, OnInit } from '@angular/core';
import { HackerNewsCacheService } from '../shared/services/hackernews.cache.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public get storyIds() {
    return this.hackerNewsCacheService.storyIds;
  }

  public get currentType() {
    return this.hackerNewsCacheService.currentType();
  }

  public start = 0;
  public stop = 6;

  constructor(private hackerNewsCacheService: HackerNewsCacheService) { }

  ngOnInit() {

  }

  public changePage(forward: boolean) {
    let advanceBy = 6
    if (forward) {
      if (this.start > advanceBy) {
        advanceBy = this.start - 1;
      }
      advanceBy *= -1;
    } else if (this.storyIds.length - this.stop < advanceBy) {
      advanceBy = (this.storyIds.length - this.stop)+1;
    }
    this.start += advanceBy;
    this.stop += advanceBy;
  }

}
