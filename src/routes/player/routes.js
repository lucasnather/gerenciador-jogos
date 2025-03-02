import { Router } from "express"
import { CreatePlayerController } from "../../controller/player/create-player-controller.js"
import { FindPlayerByIdController } from "../../controller/player/find-player-by-id-controller.js"

const router = Router()

const createPlayerController = new CreatePlayerController()
const findPlayerByIdController = new FindPlayerByIdController()

router
    .post("/api/players", (req, res) => createPlayerController.post(req, res))
    .get("/api/players/:id", (req, res) => findPlayerByIdController.get(req, res))

export { router }