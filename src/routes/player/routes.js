import { Router } from "express"
import { CreatePlayerController } from "../../controller/player/create-player-controller.js"
import { DeletePlayerByIdController } from "../../controller/player/delete-player-by-id-controller.js"
import { FindPlayerByIdController } from "../../controller/player/find-player-by-id-controller.js"

const router = Router()

const createPlayerController = new CreatePlayerController()
const findPlayerByIdController = new FindPlayerByIdController()
const deletePlayerByIdController = new DeletePlayerByIdController()

router
    .post("/api/players", (req, res) => createPlayerController.post(req, res))
    .get("/api/players/:id", (req, res) => findPlayerByIdController.get(req, res))
    .delete("/api/players/:id", (req, res) => deletePlayerByIdController.remove(req, res))

export { router }