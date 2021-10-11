import { Component } from '@angular/core';

import {RssService} from '../services/rss.service';
import {NewsRss} from '../services/news-rss';
import {IRssItem} from '../services/news-rss';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  newsRss : NewsRss;
  newsItems : IRssItem[];

  constructor(private rss:RssService) {
    this.getNewsFromRss(rss);
  }

  private async getNewsFromRss(rss:RssService){    
    this.newsRss =  await rss.getNews();
    this.newsItems = this.newsRss.rss.channel[0].item;
  }

}
