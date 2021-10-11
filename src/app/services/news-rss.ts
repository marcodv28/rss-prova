export interface NewsRss {
    rss: IRssObject;
}

export interface IRssObject {
    $: any;
    channel: Array<IRssChannel>;
}

  export interface IRssChannel {
    title: Array<string>;
    link: Array<string>;
    description: Array<string>;
    copyright: Array<string>;
    language: Array<string>;
    pubDate: Array<string>;
    lastBuildDate: Date;   
    generator: Array<string>;
    image: IRssImage;
    "atom:link": Array<string>;
    item: Array<IRssItem>;
}
  
  export interface IRssImage {
    title: Array<string>;
    url: Array<string>;
    link: Array<string>;
    width: number;
    height: number;
    description: Array<string>;
}
  
  export interface IRssItem {
    title: Array<string>;
    description: Array<string>;
    enclosure: Array<string>;
    link: Array<string>;
    "dc:creator": Array<string>;
    guid: Array<string>;
    category: Array<string>;
    pubDate: Date;
}
