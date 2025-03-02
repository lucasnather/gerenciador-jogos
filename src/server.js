import 'dotenv/config'
import express from 'express'
import { sequelize } from './model/connection/sequelize.js'
import { router as playerRouter } from './routes/player/routes.js'
import { router as teamRouter } from './routes/team/route.js'
import { router as teamPlayerRouter } from './routes/team-player/route.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use(playerRouter)
app.use(teamRouter)
app.use(teamPlayerRouter)

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