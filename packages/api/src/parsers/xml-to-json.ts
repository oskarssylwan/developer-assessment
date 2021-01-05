import { Parser } from 'xml2js'

export type XmlToJson = <T>(xml: string) => Promise<T>;

export const xmlToJson = new Parser({
  explicitRoot: false,
  explicitArray: false,
  ignoreAttrs: true
}).parseStringPromise
