import fetch from 'node-fetch'
import express from 'express'
import { feeds } from './feeds.json'
import { toNewsPosts } from './integrations/generic'
import { NewsPost } from './news'
import { uniqueById, take, isString } from './utility'
import { newsPostLimit, port } from './config'

const app = express()

app.get('/', (_, res) => {
  res.json({ links: { news: '/news' }})
})

app.get('/news', (req, res) => {

  const postLimit = isString(req?.query?.limit)
    ? parseInt(req.query.limit as string) : newsPostLimit;

  const requests = (feeds || []).map((feed: string) => fetch(feed).then(toNewsPosts))

  Promise.allSettled(requests)
    .then(results => results.filter(result => result.status === 'fulfilled' ))
    .then((fulfilledResults: PromiseFulfilledResult<any>[]) => fulfilledResults.map(result => result.value))
    .then((newsPost: NewsPost[]) => newsPost.flat())
    .then(uniqueById)
    .then()
    .then((newsPost: NewsPost[]) => {
      res.json(take(postLimit)(newsPost))
    })
    .catch(error => {
      console.error(error)
      res.json('ouch!')
    })

})

app.get('/status', (_, res) => {
  res.json('Server is live 🚀')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
