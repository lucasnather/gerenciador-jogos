import 'dotenv/config'
import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})