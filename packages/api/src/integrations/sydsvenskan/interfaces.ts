export interface MediaContent {
    ['media:description']: string;
    ['media:copyright']: string;
}

export interface Item {
    title: string;
    link: string;
    guid: string;
    category: string;
    ['dc:creator']: string;
    pubDate: string;
    ['content:encoded']: string;
    ['media:content']: MediaContent;
}

export interface Channel {
    title: string;
    description: string;
    link: string;
    generator: string;
    lastBuildDate: string;
    ['atom:link']: string;
    language: string;
    item: Item[];
}

export interface RootObject {
    channel: Channel;
}
