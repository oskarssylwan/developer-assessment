import { xmlToJson } from '../../parsers'
import { NewsPost } from '../../news'
import { RootObject } from './interfaces'

export type ToNewsPost = (response: any) => Promise<NewsPost[]>

export const toNewsPost:ToNewsPost = response => response.text()
  .then(xmlToJson)
  .then((feed: RootObject) => feed?.channel?.item || [])
  .then((items: any[]) => items.map(item => ({
    id: item.guid,
    title: item.title,
  })))
