import fetch from 'node-fetch'
import express from 'express'
import { feeds } from './feeds.json'
import { toNewsPost } from './integrations/generic'
import { NewsPost } from './news'
import { uniqueById } from './utility'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json({ links: { news: '/news' }})
})

app.get('/news', (req, res) => {
  const requests = (feeds || []).map((feed: string) => fetch(feed).then(toNewsPost))

  Promise.allSettled(requests)
    .then(results => results.filter(result => result.status === 'fulfilled' ))
    .then((fulfilledResults: PromiseFulfilledResult<any>[]) => fulfilledResults.map(result => result.value))
    .then((newsPost: NewsPost[]) => newsPost.flat())
    .then(uniqueById)
    .then((newsPost: NewsPost[]) => {
      res.json(newsPost)
    })
    .catch(error => {
      console.error(error)
      res.json('ouch!')
    })

})

app.get('/status', (req, res) => {
  res.json('Server is live 🚀')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
