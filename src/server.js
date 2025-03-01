import 'dotenv/config'
import express from 'express'
import { sequelize } from './model/connection.js'
import { Player } from './model/entities/player.js'
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World!'
  })
})

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await sequelize.sync()
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})