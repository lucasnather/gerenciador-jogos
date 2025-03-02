import { Router } from "express"
import { CreatePlayerController } from "../../controller/player/create-player-controller.js"
import { DeletePlayerByIdController } from "../../controller/player/delete-player-by-id-controller.js"
import { FindPlayerByIdController } from "../../controller/player/find-player-by-id-controller.js"

const router = Router()

const createPlayerController = new CreatePlayerController()
const findPlayerByIdController = new FindPlayerByIdController()
const deletePlayerByIdController = new DeletePlayerByIdController()

router
    .post("/api/players", (req, res, next) => createPlayerController.post(req, res, next))
    .get("/api/players/:id", (req, res, next) => findPlayerByIdController.get(req, res, next))
    .delete("/api/players/:id", (req, res, next) => deletePlayerByIdController.remove(req, res, next))

export { router }