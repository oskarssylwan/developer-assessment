export interface Image {
    title: string;
    url: string;
    link: string;
}

export interface MediaContent {
    ['media:credit']: string;
    ['media:description']: string;
}

export interface Item {
    title: string;
    link: string;
    description: string;
    guid: string;
    pubDate: string;
    ['dc:creator']: string;
    ['media:content']: MediaContent;
}

export interface Channel {
    title: string;
    link: string;
    description: string;
    language: string;
    image: Image;
    item: Item[];
}

export interface RootObject {
    channel: Channel;
}
