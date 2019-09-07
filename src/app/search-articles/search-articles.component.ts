import { Component, OnInit } from '@angular/core';
import { HackerNewsSearchService } from '../shared/services/hackernews.search.service.';


@Component({
  selector: 'search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css']
})
export class SearchArticlesComponent implements OnInit {

  public get stories() {
    return this.hackerNewsSearchService.searchResults;
  }

  public start = 0;
  public stop = 6;

  constructor(private hackerNewsSearchService: HackerNewsSearchService) { }

  ngOnInit() {

  }

  public changePage(forward: boolean) {
    let advanceBy = 6
    if (forward) {
      if (this.start > advanceBy) {
        advanceBy = this.start - 1;
      }
      advanceBy *= -1;
    } else if (this.stories.length - (this.stop +1) < advanceBy) {
      advanceBy = (this.stories.length - this.stop)+1;
    }
    this.start += advanceBy;
    this.stop += advanceBy;
  }

}
