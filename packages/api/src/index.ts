import express from 'express'
const app = express()
const port = 3000

app.get('/status', (req, res) => {
  res.json('Server is live 🚀')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
