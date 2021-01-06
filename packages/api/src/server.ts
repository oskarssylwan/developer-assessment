import fetch from 'node-fetch'
import express from 'express'
import { feeds } from './feeds.json'
import { toNewsPosts } from './integrations/generic'
import { NewsPost } from './news'
import { uniqueById, take, isString, flatMap } from './utility'
import { newsPostLimit, port } from './config'

const app = express()

app.get('/', (_, res) => {
  res.json({ links: { news: '/news' }})
})

app.get('/status', (_, res) => {
  res.json('Server is live 🚀')
})

app.get('/news', (req, res) => {

  const postLimit = isString(req?.query?.limit)
    ? parseInt(req.query.limit as string) : newsPostLimit;

  const requests = (feeds || []).map((feed: string) => fetch(feed).then(toNewsPosts))

  const sortByPublicationDate = (posts: NewsPost[]) =>
    posts.sort((a, b) => +new Date(b.publicationDate) - +new Date(a.publicationDate));

  Promise.allSettled(requests)
    .then(results => results.filter(result => result.status === 'fulfilled' ))
    .then(flatMap(result => result.value))
    .then(uniqueById)
    .then(sortByPublicationDate)
    .then(take(postLimit))
    .then((newsPost: NewsPost[]) => res.json(newsPost))
    .catch(() => res.status(500).send())

})

app.listen(port, () => {
  console.log(`🚀 Server is live on http://localhost:${port} 🔥`)
})
