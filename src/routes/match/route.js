import { Router } from "express"
import { CreateMatchController } from "../../controller/math/create-match-controller.js"
import { UpdateMatchController } from "../../controller/math/update-match-controller.js"

const router = Router()

const createMatchController = new CreateMatchController()
const updateMatchController = new UpdateMatchController()

router
    .post("/api/matches",(req, res) => createMatchController.post(req, res))
    .put("/api/matches/:matchId", (req, res) => updateMatchController.put(req, res))

export { router }