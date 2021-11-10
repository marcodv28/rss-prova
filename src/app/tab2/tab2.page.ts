import { Component } from '@angular/core';
import { IRssItem } from '../services/news-rss';

import { PreferitiService } from '../services/preferiti.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page{
  preferitiMap:Map<string, IRssItem> = PreferitiService.preferiti;
}
