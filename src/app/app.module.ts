import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';

import { HackerNewsApiService } from './shared/services/hackernews.api.service';
import { HackerNewsCacheService } from './shared/services/hackernews.cache.service';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleComponent } from './article/article.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    ArticlesComponent,
    ArticleComponent
  ],
  providers: [
    HackerNewsApiService,
    HackerNewsCacheService
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
