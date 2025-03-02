import { Router } from "express"
import { CreatePlayerController } from "../../controller/player/create-player-controller.js"

const router = Router()

const createPlayerController = new CreatePlayerController()

router
    .post("/api/players",(req, res) => createPlayerController.post(req, res))

export { router }