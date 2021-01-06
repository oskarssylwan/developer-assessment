import { xmlToJson } from '../../parsers'
import { NewsPost } from '../../news'
import { RootObject, Item } from './interfaces'

export type ToNewsPost = (response: any) => Promise<NewsPost[]>

export const toNewsPosts: ToNewsPost = response => response.text()
  .then(xmlToJson)
  .then((feed: RootObject) => feed?.channel?.item || [])
  .then((items: Item[]): NewsPost[] => items.map(item => ({
    id: item.guid,
    title: item.title,
    link: item.link,
    publicationDate: item.pubDate
  })))
