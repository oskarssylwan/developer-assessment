export interface Image {
    url: string;
    title: string;
    link: string;
}

export interface Item {
    guid: string;
    link: string;
    author: string;
    title: string;
    description: string;
    pubDate: string;
}

export interface Channel {
    title: string;
    link: string;
    description: string;
    copyright: string;
    managingEditor: string;
    image: Image;
    item: Item[];
}

export interface RootObject {
    channel: Channel;
}
