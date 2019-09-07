import { Component, OnInit } from '@angular/core';
import { HackerNewsCacheService } from '../shared/services/hackernews.cache.service';
import { EndpointEnum } from '../shared/models/endpoint.enum';
import { HackerNewsSearchService } from '../shared/services/hackernews.search.service.';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public get articleType() {
    return this.hackerNewsCacheService.currentEndpoint.toString();
  }

  public searchTerm: string = '';

  public showSearch: boolean = false;

  constructor(private hackerNewsCacheService: HackerNewsCacheService,
    private hackerNewsSearchService: HackerNewsSearchService  ) { };

  ngOnInit() {
    this.changeType('Best');
  }

  public changeType(value: string) {
    this.hackerNewsCacheService.init((EndpointEnum[value]));
    this.showSearch = false;
  }

  public search() {
    this.hackerNewsSearchService.searchCache(this.searchTerm.trim());
    this.showSearch = true;
  }


}
