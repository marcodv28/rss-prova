import { Injectable } from '@angular/core';

import { IRssItem } from './news-rss';

@Injectable({
  providedIn: 'root'
})
export class PreferitiService {
  public static preferiti:Map<string, IRssItem> = new Map<string, IRssItem>();
  //public static preferitiList:IterableIterator<IRssItem> = PreferitiService.preferiti.values();

  public static addPreferiti(item:IRssItem){
    PreferitiService.preferiti.set(item.link[0], item);
    console.log('numero preferiti: \n' + PreferitiService.preferiti.size);
  }

  public static getPreferiti() : IterableIterator<IRssItem>{
    return PreferitiService.preferiti.values();
  }
}
