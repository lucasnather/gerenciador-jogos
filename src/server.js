import 'dotenv/config'
import express from 'express'
import { sequelize } from './model/connection.js'
import { Matches } from './model/entities/matches.js'
import { Player } from './model/entities/player.js'
import { TeamPlayers } from './model/entities/team-players.js'
import { Teams } from './model/entities/teams.js'
import { Scores } from './model/entities/score.js'
const app = express()
const port = process.env.PORT || 3000

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