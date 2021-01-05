
export interface Item {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
}

export interface Channel {
  item: Item[];
}

export interface RootObject {
  channel: Channel;
}
