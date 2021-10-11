import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as xml2js from 'xml2js';
import { Observable } from 'rxjs';
import { NewsRss } from './news-rss';

@Injectable({
  providedIn: 'root'
})
export class RssService {
  private rssUrl = 'https://www.ilsole24ore.com/rss/italia--attualita.xml';
  private data : string;
  private rssData : NewsRss;

  constructor(private http:HttpClient) {}

  public async getNews() : Promise<NewsRss>{
    await this.xmlToJson(
            this.http.get(this.rssUrl, {observe: 'body', responseType: "text"})
          ).then((res) => this.rssData = res,
                (err) =>  console.warn(err)
          );    
    console.log(this.rssData);
    return this.rssData;
  }

  private xmlToJson(xmlData : Observable<String>) : Promise<NewsRss>{
    return new Promise<NewsRss>((resolve, reject) => {
      xmlData.subscribe((data) => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result:NewsRss) => {
          if(err){
            reject('ERRORE RSS\n' + err + '\n' + result);
          }else{
            resolve(result);
          }         
        });
      });
    });
  }

  /*public getNews() : NewsRss{
     this.xmlToJson(
            this.http.get(this.rssUrl, {observe: 'body', responseType: "text"})
          );
    console.log(this.rssData);
    return this.rssData;
  }

  private xmlToJson(xmlData : Observable<String>){
    
    xmlData.subscribe((data) => {
      let parseString = xml2js.parseString;
      parseString(data, (err, result:NewsRss) => {
        if(err){
          console.warn('ERRORE RSS\n' + err + '\n' + result);
        }else{
          this.rssData = result;
        }         
      });
    });

  }*/



}
