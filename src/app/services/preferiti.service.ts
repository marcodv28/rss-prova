import { Injectable } from '@angular/core';

import { IRssItem } from './news-rss';

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {
  preferiti:Array<IRssItem> = [];

  constructor() { }

  public addPreferiti(item:IRssItem){
    this.preferiti.push(item);
    console.log('preferiti: \n' + this.preferiti);
  }
}
