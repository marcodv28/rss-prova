import { Injectable } from '@angular/core';

import { IRssItem } from './news-rss';

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {
  private preferiti:Map<string, IRssItem> = new Map<string, IRssItem>();

  constructor() { }

  public addPreferiti(item:IRssItem){
    this.preferiti.set(item.link[0], item);
    console.log('numero preferiti: \n' + this.preferiti.size);
  }

  public getPreferiti() : IterableIterator<IRssItem>{
    return this.preferiti.values();
  }
}
