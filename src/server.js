import 'dotenv/config'
import express from 'express'
import morgan from 'morgan'
import { sequelize } from './model/connection/sequelize.js'
import { morganStream } from './libs/morgan.js'
import { router as playerRouter } from './routes/player/routes.js'
import { router as teamRouter } from './routes/team/route.js'
import { router as teamPlayerRouter } from './routes/team-player/route.js'
import { router as matchRouter } from './routes/match/route.js'
import { router as scoreRouter } from './routes/score/route.js'
import { globalError } from './middlewares/error.js'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('Método - :method Url - :url Status - :status Tempo - :response-time ms', {
  stream: morganStream
}))

app.use(playerRouter)
app.use(teamRouter)
app.use(teamPlayerRouter)
app.use(matchRouter)
app.use(scoreRouter)
app.use(globalError)

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